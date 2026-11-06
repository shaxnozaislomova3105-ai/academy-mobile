export interface LessonLink {
  title: string;
  url: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  content: string;
  order: number;
  type: "video" | "article" | "quiz";
  links?: LessonLink[];
  videoUrl?: string;
  questions?: QuizQuestion[];
  goal?: string;
  summary?: string;
  exercises?: Exercise[];
}

/** Bo'sh joylarni (___) to'ldirish mashqi; answers har bir bo'sh joy uchun qabul qilinadigan javoblar */
export interface FillExercise {
  type: "fill";
  prompt: string;
  code: string;
  answers: string[][];
  expected?: string;
  hints: string[];
}

/** Xatoli qatorni topish mashqi; bugLine 0 dan boshlanadi */
export interface BugExercise {
  type: "bug";
  prompt: string;
  code: string;
  bugLine: number;
  explanation: string;
  hints: string[];
}

export type Exercise = FillExercise | BugExercise;

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: "Boshlang'ich" | "O'rta" | "Murakkab";
  duration: string;
  lessonsCount: number;
  image: string | null;
  color: string;
  instructor: string;
  isPremium: boolean;
  topics: string[];
  stage: CourseStage;
  lessons: Lesson[];
}

export type CourseStage = 1 | 2 | 3;

export const STAGE_LABELS: Record<CourseStage, string> = {
  1: "1-bosqich: Asosiy",
  2: "2-bosqich: Chuqurlashtirilgan",
  3: "3-bosqich: Kasbiy",
};

export const CATEGORIES = [
  "Barchasi",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "PHP",
  "Full-Stack",
];
