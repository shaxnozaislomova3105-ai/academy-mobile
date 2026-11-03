import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Session } from "@supabase/supabase-js";
import {Course } from "@/data/courses";
import { fetchCourses } from "@/lib/courseApi";
import { supabase } from "@/lib/supabase";

interface UserProfile {
  name: string;
  email: string;
  joinedAt: string;
}

interface AcademyContextValue {
  profile: UserProfile;
  enrolledCourseIds: string[];
  completedLessonIds: string[];
  courses: Course[];
  coursesLoading: boolean;
  coursesError: boolean;
  userDataLoaded: boolean;
  reloadData: () => Promise<void>;
  session: Session | null;
  authLoading: boolean;
  signIn: (email: string, password: string) => Promise<string | null>;
  signUp: (name: string, email: string, password: string) => Promise<string | null>;
  signOut: () => Promise<void>;
  enrollCourse: (courseId: string) => Promise<void>;
  unenrollCourse: (courseId: string) => Promise<void>;
  completeLesson: (lessonId: string) => Promise<void>;
  uncompleteLesson: (lessonId: string) => Promise<void>;
  saveQuizAttempt: (lessonId: string, score: number, total: number) => Promise<void>;
  logLessonTime: (lessonId: string, startedAt: number, durationSeconds: number) => Promise<void>;
  updateProfile: (profile: Partial<UserProfile>) => Promise<void>;
  isEnrolled: (courseId: string) => boolean;
  isLessonCompleted: (lessonId: string) => boolean;
  getCourseProgress: (courseId: string) => number;
  getEnrolledCourses: () => Course[];
}

const AcademyContext = createContext<AcademyContextValue | null>(null);

const DEFAULT_PROFILE: UserProfile = {
  name: "Foydalanuvchi",
  email: "",
  joinedAt: new Date().toISOString(),
};

export const AcademyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>([]);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [coursesError, setCoursesError] = useState(false);
  const [userDataLoaded, setUserDataLoaded] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Kurslar bazadan
  const loadCourses = useCallback(() => {
    setCoursesLoading(true);
    setCoursesError(false);
    return fetchCourses()
      .then((data) => setCourses(data))
      .catch((e) => {
        console.warn("Kurslarni yuklashda xato:", e);
        setCoursesError(true);
      })
      .finally(() => setCoursesLoading(false));
  }, []);

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  // Foydalanuvchi ma'lumotlari bazadan
  const loadUserData = useCallback(async (userId: string) => {
    const [p, e, c] = await Promise.all([
      supabase
        .from("profiles")
        .select("full_name,email,created_at")
        .eq("id", userId)
        .maybeSingle(),
      supabase.from("enrollments").select("course_id").eq("user_id", userId),
      supabase.from("lesson_progress").select("lesson_id").eq("user_id", userId),
    ]);
    if (p.data) {
      setProfile({
        name: p.data.full_name ?? "Foydalanuvchi",
        email: p.data.email ?? "",
        joinedAt: p.data.created_at ?? new Date().toISOString(),
      });
    }
    // Xato bo'lsa mavjud ro'yxatlar o'chib ketmasin
    if (!e.error) {
      setEnrolledCourseIds((e.data ?? []).map((r: any) => r.course_id));
      setUserDataLoaded(true);
    }
    if (!c.error) {
      setCompletedLessonIds((c.data ?? []).map((r: any) => r.lesson_id));
    }
  }, []);

  const reloadData = useCallback(async () => {
    await loadCourses();
    if (session) await loadUserData(session.user.id);
  }, [loadCourses, loadUserData, session]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session) loadUserData(data.session.user.id);
      setAuthLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setTimeout(() => {
        if (s) {
          loadUserData(s.user.id);
        } else {
          setProfile(DEFAULT_PROFILE);
          setEnrolledCourseIds([]);
          setCompletedLessonIds([]);
          setUserDataLoaded(false);
        }
      }, 0);
    });
    return () => sub.subscription.unsubscribe();
  }, [loadUserData]);

  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return error ? error.message : null;
  }, []);

  const signUp = useCallback(
    async (name: string, email: string, password: string) => {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        // Login ekrani rozilik belgilanmasa bu yerga o'tkazmaydi
        options: { data: { full_name: name, consented_at: new Date().toISOString() } },
      });
      return error ? error.message : null;
    },
    []
  );

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  const enrollCourse = useCallback(
    async (courseId: string) => {
      if (!session) return;
      setEnrolledCourseIds((prev) =>
        prev.includes(courseId) ? prev : [...prev, courseId]
      );
      const { error } = await supabase
        .from("enrollments")
        .upsert({ user_id: session.user.id, course_id: courseId });
      if (error) {
        console.warn(error.message);
        setEnrolledCourseIds((prev) => prev.filter((id) => id !== courseId));
      }
    },
    [session]
  );

  const unenrollCourse = useCallback(
    async (courseId: string) => {
      if (!session) return;
      setEnrolledCourseIds((prev) => prev.filter((id) => id !== courseId));
      // Progress o'chirilmaydi: u tadqiqot ma'lumoti, qayta yozilganda tiklanadi
      const { error } = await supabase
        .from("enrollments")
        .delete()
        .eq("user_id", session.user.id)
        .eq("course_id", courseId);
      if (error) {
        console.warn(error.message);
        setEnrolledCourseIds((prev) =>
          prev.includes(courseId) ? prev : [...prev, courseId]
        );
      }
    },
    [session]
  );

  const completeLesson = useCallback(
    async (lessonId: string) => {
      if (!session) return;
      setCompletedLessonIds((prev) =>
        prev.includes(lessonId) ? prev : [...prev, lessonId]
      );
      const { error } = await supabase
        .from("lesson_progress")
        .upsert({ user_id: session.user.id, lesson_id: lessonId });
      if (error) {
        console.warn(error.message);
        setCompletedLessonIds((prev) => prev.filter((id) => id !== lessonId));
      }
    },
    [session]
  );

  const uncompleteLesson = useCallback(
    async (lessonId: string) => {
      if (!session) return;
      setCompletedLessonIds((prev) => prev.filter((id) => id !== lessonId));
      await supabase
        .from("lesson_progress")
        .delete()
        .eq("user_id", session.user.id)
        .eq("lesson_id", lessonId);
    },
    [session]
  );

  const saveQuizAttempt = useCallback(
    async (lessonId: string, score: number, total: number) => {
      if (!session) return;
      const { error } = await supabase
        .from("quiz_attempts")
        .insert({ user_id: session.user.id, lesson_id: lessonId, score, total });
      if (error) console.warn(error.message);
    },
    [session]
  );

  const logLessonTime = useCallback(
    async (lessonId: string, startedAt: number, durationSeconds: number) => {
      if (!session) return;
      const { error } = await supabase.from("lesson_time_logs").insert({
        user_id: session.user.id,
        lesson_id: lessonId,
        started_at: new Date(startedAt).toISOString(),
        duration_seconds: durationSeconds,
      });
      if (error) console.warn(error.message);
    },
    [session]
  );

  const updateProfile = useCallback(
    async (updates: Partial<UserProfile>) => {
      setProfile((prev) => ({ ...prev, ...updates }));
      if (!session || updates.name === undefined) return;
      await supabase
        .from("profiles")
        .update({ full_name: updates.name })
        .eq("id", session.user.id);
    },
    [session]
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
      const course = courses.find((c) => c.id === courseId);
      if (!course || course.lessons.length === 0) return 0;
      const done = course.lessons.filter((l) =>
        completedLessonIds.includes(l.id)
      ).length;
      return Math.round((done / course.lessons.length) * 100);
    },
    [completedLessonIds, courses]
  );

  const getEnrolledCourses = useCallback(
    () => courses.filter((c) => enrolledCourseIds.includes(c.id)),
    [enrolledCourseIds, courses]
  );

  return (
    <AcademyContext.Provider
      value={{
        profile,
        enrolledCourseIds,
        completedLessonIds,
        courses,
        coursesLoading,
        coursesError,
        userDataLoaded,
        reloadData,
        session,
        authLoading,
        signIn,
        signUp,
        signOut,
        enrollCourse,
        unenrollCourse,
        completeLesson,
        uncompleteLesson,
        saveQuizAttempt,
        logLessonTime,
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