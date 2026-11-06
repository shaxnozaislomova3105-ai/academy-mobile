import { supabase } from "./supabase";

export interface TeacherClass {
  class_id: string;
  name: string;
  code: string;
  student_count: number;
}

export interface StudentOverview {
  student_id: string;
  full_name: string | null;
  joined_at: string;
  completed_lessons: number;
  quiz_attempts: number;
  avg_quiz_percent: number | null;
  minutes: number;
  last_active: string | null;
  exercises_solved: number;
  exercise_hints: number;
}

export interface ExerciseStat {
  lesson_title: string;
  lesson_position: number;
  exercise_index: number;
  exercise_prompt: string | null;
  students_tried: number;
  students_solved: number;
  students_used_solution: number;
}

export interface StudentLessonRow {
  course_title: string;
  lesson_title: string;
  completed_at: string | null;
  best_score: number | null;
  total: number | null;
  attempts: number;
  minutes: number | null;
  exercises_total: number;
  exercises_solved: number | null;
  exercise_hints: number | null;
}

/** O'qituvchiga biriktirilgan sinflar; o'qituvchi bo'lmasa bo'sh ro'yxat */
export async function fetchTeacherClasses(): Promise<TeacherClass[]> {
  const { data, error } = await supabase.rpc("my_teacher_classes");
  if (error) throw error;
  return data ?? [];
}

export async function fetchClassOverview(classId: string): Promise<StudentOverview[]> {
  const { data, error } = await supabase.rpc("teacher_class_overview", { p_class: classId });
  if (error) throw error;
  return data ?? [];
}

export async function fetchStudentDetail(studentId: string): Promise<StudentLessonRow[]> {
  const { data, error } = await supabase.rpc("teacher_student_detail", { p_student: studentId });
  if (error) throw error;
  return data ?? [];
}

/** Sinf bo'yicha mashqlar; eng kam yechilganlari birinchi */
export async function fetchExerciseStats(classId: string): Promise<ExerciseStat[]> {
  const { data, error } = await supabase.rpc("teacher_exercise_stats", { p_class: classId });
  if (error) throw error;
  return data ?? [];
}

export function formatDate(value: string | null): string {
  return value ? new Date(value).toLocaleDateString("uz-UZ") : "—";
}
