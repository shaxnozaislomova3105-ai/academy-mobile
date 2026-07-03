package uz.webacademy.app.data

import android.content.Context
import android.content.SharedPreferences
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken

class AcademyRepository(context: Context) {
    private val prefs: SharedPreferences = context.getSharedPreferences("academy_prefs", Context.MODE_PRIVATE)
    private val gson = Gson()

    fun getProfile(): UserProfile {
        val json = prefs.getString("profile", null) ?: return UserProfile()
        return try { gson.fromJson(json, UserProfile::class.java) } catch (e: Exception) { UserProfile() }
    }

    fun saveProfile(profile: UserProfile) {
        prefs.edit().putString("profile", gson.toJson(profile)).apply()
    }

    fun getEnrolledCourseIds(): MutableSet<String> {
        val json = prefs.getString("enrolled", null) ?: return mutableSetOf()
        return try {
            val type = object : TypeToken<MutableSet<String>>() {}.type
            gson.fromJson(json, type)
        } catch (e: Exception) { mutableSetOf() }
    }

    fun saveEnrolledCourseIds(ids: Set<String>) {
        prefs.edit().putString("enrolled", gson.toJson(ids)).apply()
    }

    fun getCompletedLessonIds(): MutableSet<String> {
        val json = prefs.getString("completed", null) ?: return mutableSetOf()
        return try {
            val type = object : TypeToken<MutableSet<String>>() {}.type
            gson.fromJson(json, type)
        } catch (e: Exception) { mutableSetOf() }
    }

    fun saveCompletedLessonIds(ids: Set<String>) {
        prefs.edit().putString("completed", gson.toJson(ids)).apply()
    }
}
