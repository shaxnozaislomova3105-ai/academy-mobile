import { supabase } from "./supabase"; import type { Course, Lesson } from "../data/courses";
export async function fetchLesson(id: string): Promise<Lesson | null> {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("id", id)
    .single();
  if (error || !data) return null;
  return {
    id: data.id,
    courseId: data.course_id,
    title: data.title,
    description: data.description ?? "",
    content: data.content ?? "",
    order: data.position ?? 0,
    type: data.type ?? "article",
    links: data.links ?? undefined,
    videoUrl: data.video_url ?? undefined,
    questions: data.questions ?? undefined,
  };
}
export async function fetchCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from("courses")
    .select("*, lessons(*)")
    .order("sort_order", { ascending: true });

  if (error) throw error;

  return (data ?? []).map((c: any) => {
    const lessons: Lesson[] = (c.lessons ?? [])
      .sort((a: any, b: any) => (a.position || 0) - (b.position || 0))
      .map((l: any) => ({
        id: l.id,
        courseId: l.course_id,
        title: l.title,
        description: l.description,
        content: l.content,
        order: l.position,
        type: l.type,
        links: l.links ?? [],
        videoUrl: l.video_url || undefined,
        questions: l.questions ?? [],
      }));

    return {
      id: c.id,
      title: c.title,
      description: c.description,
      category: c.category,
      level: c.level,
      duration: c.duration ?? "",
      lessonsCount: lessons.length,
      image: c.image,
      color: c.color,
      instructor: c.instructor ?? "",
      rating: 0,
      studentsCount: 0,
      isPremium: c.is_premium,
      topics: c.topics ?? [],
      lessons,
    };
  });
}