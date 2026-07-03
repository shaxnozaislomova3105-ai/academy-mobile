package uz.webacademy.app.data

data class QuizQuestion(
    val question: String,
    val options: List<String>,
    val correct: Int,
    val explanation: String = ""
)

data class LessonLink(
    val title: String,
    val url: String
)

data class Lesson(
    val id: String,
    val courseId: String,
    val title: String,
    val duration: String,
    val description: String,
    val content: String,
    val order: Int,
    val type: String,
    val videoUrl: String? = null,
    val links: List<LessonLink> = emptyList(),
    val questions: List<QuizQuestion> = emptyList()
)

data class Course(
    val id: String,
    val title: String,
    val description: String,
    val category: String,
    val level: String,
    val duration: String,
    val lessonsCount: Int,
    val color: String,
    val instructor: String,
    val rating: Double,
    val studentsCount: Int,
    val isPremium: Boolean,
    val topics: List<String>,
    val lessons: List<Lesson>
)

data class UserProfile(
    val name: String = "Foydalanuvchi",
    val email: String = "foydalanuvchi@email.com",
    val joinedAt: Long = System.currentTimeMillis()
)

val CATEGORIES = listOf("Barchasi", "HTML", "CSS", "JavaScript", "React", "Node.js", "Full-Stack")
