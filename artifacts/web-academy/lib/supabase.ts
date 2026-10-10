import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SUPABASE_URL = "https://ppekqegcvmxzluhewkny.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwZWtxZWdjdm14emx1aGV3a255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEyNzMzNTEsImV4cCI6MjEwNjg0OTM1MX0.PoYIaPYpnwMl0jJZZ0YELV_7R5vcKSjbFC56Ub2P8Rs";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});