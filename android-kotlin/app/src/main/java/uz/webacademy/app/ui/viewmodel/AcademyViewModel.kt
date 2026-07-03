package uz.webacademy.app.ui.viewmodel

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import uz.webacademy.app.data.AcademyRepository
import uz.webacademy.app.data.COURSES
import uz.webacademy.app.data.Course
import uz.webacademy.app.data.UserProfile

class AcademyViewModel(application: Application) : AndroidViewModel(application) {
    private val repo = AcademyRepository(application)

    private val _profile = MutableStateFlow(repo.getProfile())
    val profile: StateFlow<UserProfile> = _profile.asStateFlow()

    private val _enrolledIds = MutableStateFlow(repo.getEnrolledCourseIds())
    val enrolledIds: StateFlow<Set<String>> = _enrolledIds.asStateFlow()

    private val _completedIds = MutableStateFlow(repo.getCompletedLessonIds())
    val completedIds: StateFlow<Set<String>> = _completedIds.asStateFlow()

    val courses: List<Course> = COURSES

    fun enrollCourse(courseId: String) {
        val next = _enrolledIds.value.toMutableSet().also { it.add(courseId) }
        _enrolledIds.value = next
        repo.saveEnrolledCourseIds(next)
    }

    fun unenrollCourse(courseId: String) {
        val next = _enrolledIds.value.toMutableSet().also { it.remove(courseId) }
        val course = COURSES.find { it.id == courseId }
        val lessonIds = course?.lessons?.map { it.id }?.toSet() ?: emptySet()
        val nextCompleted = _completedIds.value.toMutableSet().also { it.removeAll(lessonIds) }
        _enrolledIds.value = next
        _completedIds.value = nextCompleted
        repo.saveEnrolledCourseIds(next)
        repo.saveCompletedLessonIds(nextCompleted)
    }

    fun completeLesson(lessonId: String) {
        val next = _completedIds.value.toMutableSet().also { it.add(lessonId) }
        _completedIds.value = next
        repo.saveCompletedLessonIds(next)
    }

    fun uncompleteLesson(lessonId: String) {
        val next = _completedIds.value.toMutableSet().also { it.remove(lessonId) }
        _completedIds.value = next
        repo.saveCompletedLessonIds(next)
    }

    fun updateProfile(name: String, email: String) {
        val next = _profile.value.copy(name = name, email = email)
        _profile.value = next
        repo.saveProfile(next)
    }

    fun isEnrolled(courseId: String): Boolean = courseId in _enrolledIds.value

    fun isLessonCompleted(lessonId: String): Boolean = lessonId in _completedIds.value

    fun getCourseProgress(courseId: String): Int {
        val course = COURSES.find { it.id == courseId } ?: return 0
        if (course.lessons.isEmpty()) return 0
        val done = course.lessons.count { it.id in _completedIds.value }
        return (done * 100 / course.lessons.size)
    }

    fun getEnrolledCourses(): List<Course> = COURSES.filter { it.id in _enrolledIds.value }
}
