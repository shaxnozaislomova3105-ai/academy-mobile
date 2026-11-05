import { supabase } from "./supabase";

export const CONSENT_TEXT =
  "Men ushbu platforma dissertatsiya tadqiqoti uchun yaratilganini bilaman. " +
  "Darslarni o'qish jarayonim va test natijalarim ilmiy maqsadda, shaxsiy " +
  "ma'lumotlarim oshkor etilmagan (anonim) holda tahlil qilinishiga roziman. ";

/** Parolni tiklash xatini yuboradi */
export async function sendPasswordReset(email: string, redirectTo?: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
  if (error) throw error;
}

/** Emailga kelgan tiklash kodini tekshiradi va foydalanuvchini tizimga kiritadi */
export async function verifyResetCode(email: string, code: string) {
  const { error } = await supabase.auth.verifyOtp({ email, token: code, type: "recovery" });
  if (error) throw error;
}

/** Tiklash kodi tasdiqlangandan keyin yangi parol o'rnatish */
export async function updatePassword(newPassword: string) {
  const { error } = await supabase.auth.updateUser({ password: newPassword });
  if (error) throw error;
}

/** Sinf kodi bazada borligini tekshiradi; aloqa xatosida null qaytaradi */
export async function classCodeExists(code: string): Promise<boolean | null> {
  const { data, error } = await supabase.rpc("class_code_exists", { p_code: code });
  return error ? null : data === true;
}
