import { supabase } from "./supabase";

export const CONSENT_TEXT =
  "Men ushbu platforma dissertatsiya tadqiqoti uchun yaratilganini bilaman. " +
  "Darslarni o'qish jarayonim va test natijalarim ilmiy maqsadda, shaxsiy " +
  "ma'lumotlarim oshkor etilmagan (anonim) holda tahlil qilinishiga roziman. " +
  "Xohlagan vaqtda ma'lumotlarimni o'chirishni so'rashim mumkin.";

/** Ro'yxatdan o'tish. consent = true bo'lmasa, ro'yxatdan o'tkazilmaydi. */
export async function signUp(fullName: string, email: string, password: string, consent: boolean) {
  if (!consent) throw new Error("Davom etish uchun rozilik berishingiz kerak");

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName, consented_at: new Date().toISOString() },
    },
  });
  if (error) throw error;
  return data; 
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

export function onAuthChange(cb: (loggedIn: boolean) => void) {
  const { data } = supabase.auth.onAuthStateChange((_event, session) => cb(!!session));
  return () => data.subscription.unsubscribe();
}

export async function saveLessonResult(lessonId: string, score?: number, total?: number) {
  const { data: u } = await supabase.auth.getUser();
  if (!u.user) throw new Error("Avval tizimga kiring");

  const { error } = await supabase.from("lesson_progress").upsert(
    {
      user_id: u.user.id,
      lesson_id: lessonId,
      score: score ?? null,
      total: total ?? null,
      completed_at: new Date().toISOString(),
    },
    { onConflict: "user_id,lesson_id" }
  );
  if (error) throw error;
}

export async function getCompletedLessonIds(): Promise<string[]> {
  const { data, error } = await supabase.from("lesson_progress").select("lesson_id");
  if (error) throw error;
  return (data ?? []).map((r) => r.lesson_id);
}