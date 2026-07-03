import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { COURSES, Course, Lesson } from "@/data/courses";

interface UserProfile {
  name: string;
  email: string;
  joinedAt: string;
}

interface AcademyState {
  profile: UserProfile;
  enrolledCourseIds: string[];
  completedLessonIds: string[];
  courses: Course[];
}

interface AcademyContextValue extends AcademyState {
  enrollCourse: (courseId: string) => Promise<void>;
  unenrollCourse: (courseId: string) => Promise<void>;
  completeLesson: (lessonId: string) => Promise<void>;
  uncompleteLesson: (lessonId: string) => Promise<void>;
  updateProfile: (profile: Partial<UserProfile>) => Promise<void>;
  isEnrolled: (courseId: string) => boolean;
  isLessonCompleted: (lessonId: string) => boolean;
  getCourseProgress: (courseId: string) => number;
  getEnrolledCourses: () => Course[];
}

const AcademyContext = createContext<AcademyContextValue | null>(null);

const STORAGE_KEY = "academy_state";

const DEFAULT_PROFILE: UserProfile = {
  name: "Foydalanuvchi",
  email: "foydalanuvchi@email.com",
  joinedAt: new Date().toISOString(),
};

export const AcademyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>([]);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const saved = JSON.parse(raw);
          if (saved.profile) setProfile(saved.profile);
          if (saved.enrolledCourseIds)
            setEnrolledCourseIds(saved.enrolledCourseIds);
          if (saved.completedLessonIds)
            setCompletedLessonIds(saved.completedLessonIds);
        }
      } catch {}
    };
    load();
  }, []);

  const save = useCallback(
    async (
      p: UserProfile,
      enrolled: string[],
      completed: string[]
    ) => {
      try {
        await AsyncStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            profile: p,
            enrolledCourseIds: enrolled,
            completedLessonIds: completed,
          })
        );
      } catch {}
    },
    []
  );

  const enrollCourse = useCallback(
    async (courseId: string) => {
      const next = enrolledCourseIds.includes(courseId)
        ? enrolledCourseIds
        : [...enrolledCourseIds, courseId];
      setEnrolledCourseIds(next);
      await save(profile, next, completedLessonIds);
    },
    [enrolledCourseIds, completedLessonIds, profile, save]
  );

  const unenrollCourse = useCallback(
    async (courseId: string) => {
      const next = enrolledCourseIds.filter((id) => id !== courseId);
      const course = COURSES.find((c) => c.id === courseId);
      const lessonIds = course?.lessons.map((l) => l.id) ?? [];
      const nextCompleted = completedLessonIds.filter(
        (id) => !lessonIds.includes(id)
      );
      setEnrolledCourseIds(next);
      setCompletedLessonIds(nextCompleted);
      await save(profile, next, nextCompleted);
    },
    [enrolledCourseIds, completedLessonIds, profile, save]
  );

  const completeLesson = useCallback(
    async (lessonId: string) => {
      const next = completedLessonIds.includes(lessonId)
        ? completedLessonIds
        : [...completedLessonIds, lessonId];
      setCompletedLessonIds(next);
      await save(profile, enrolledCourseIds, next);
    },
    [completedLessonIds, enrolledCourseIds, profile, save]
  );

  const uncompleteLesson = useCallback(
    async (lessonId: string) => {
      const next = completedLessonIds.filter((id) => id !== lessonId);
      setCompletedLessonIds(next);
      await save(profile, enrolledCourseIds, next);
    },
    [completedLessonIds, enrolledCourseIds, profile, save]
  );

  const updateProfile = useCallback(
    async (updates: Partial<UserProfile>) => {
      const next = { ...profile, ...updates };
      setProfile(next);
      await save(next, enrolledCourseIds, completedLessonIds);
    },
    [profile, enrolledCourseIds, completedLessonIds, save]
  );

  const isEnrolled = useCallback(
    (courseId: string) => enrolledCourseIds.includes(courseId),
    [enrolledCourseIds]
  );

  const isLessonCompleted = useCallback(
    (lessonId: string) => completedLessonIds.includes(lessonId),
    [completedLessonIds]
  );

  const getCourseProgress = useCallback(
    (courseId: string) => {
      const course = COURSES.find((c) => c.id === courseId);
      if (!course || course.lessons.length === 0) return 0;
      const done = course.lessons.filter((l) =>
        completedLessonIds.includes(l.id)
      ).length;
      return Math.round((done / course.lessons.length) * 100);
    },
    [completedLessonIds]
  );

  const getEnrolledCourses = useCallback(
    () => COURSES.filter((c) => enrolledCourseIds.includes(c.id)),
    [enrolledCourseIds]
  );

  return (
    <AcademyContext.Provider
      value={{
        profile,
        enrolledCourseIds,
        completedLessonIds,
        courses: COURSES,
        enrollCourse,
        unenrollCourse,
        completeLesson,
        uncompleteLesson,
        updateProfile,
        isEnrolled,
        isLessonCompleted,
        getCourseProgress,
        getEnrolledCourses,
      }}
    >
      {children}
    </AcademyContext.Provider>
  );
};

export const useAcademy = (): AcademyContextValue => {
  const ctx = useContext(AcademyContext);
  if (!ctx) throw new Error("useAcademy must be used within AcademyProvider");
  return ctx;
};
