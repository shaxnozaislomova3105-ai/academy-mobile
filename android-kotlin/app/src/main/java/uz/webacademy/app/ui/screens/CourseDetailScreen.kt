package uz.webacademy.app.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.core.graphics.toColorInt
import uz.webacademy.app.data.COURSES
import uz.webacademy.app.data.Lesson
import uz.webacademy.app.ui.theme.*
import uz.webacademy.app.ui.viewmodel.AcademyViewModel

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CourseDetailScreen(
    courseId: String,
    vm: AcademyViewModel,
    onBack: () -> Unit,
    onLessonClick: (String) -> Unit
) {
    val course = remember(courseId) { COURSES.find { it.id == courseId } } ?: return
    val enrolledIds by vm.enrolledIds.collectAsState()
    val completedIds by vm.completedIds.collectAsState()
    val isEnrolled = courseId in enrolledIds
    val progress = vm.getCourseProgress(courseId)

    val courseColor = remember(course.color) {
        try { Color(course.color.toColorInt()) } catch (e: Exception) { Primary }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text(course.title, maxLines = 1) },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Icon(Icons.Default.ArrowBack, contentDescription = "Orqaga")
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = CardColor)
            )
        }
    ) { padding ->
        LazyColumn(
            modifier = Modifier.fillMaxSize().background(Background).padding(padding),
            contentPadding = PaddingValues(bottom = 24.dp)
        ) {
            item {
                Box(
                    modifier = Modifier.fillMaxWidth()
                        .background(courseColor.copy(alpha = 0.1f))
                        .padding(20.dp)
                ) {
                    Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                            Chip(label = course.category, color = courseColor)
                            Chip(label = course.level, color = courseColor)
                            if (course.isPremium) Chip(label = "Premium", color = Color(0xFFF59E0B))
                        }
                        Text(course.title, fontWeight = FontWeight.Bold, fontSize = 22.sp, color = ForegroundColor)
                        Text(course.description, color = MutedForeground, fontSize = 14.sp, lineHeight = 20.sp)
                        Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                            InfoBadge(Icons.Default.AccessTime, course.duration)
                            InfoBadge(Icons.Default.MenuBook, "${course.lessonsCount} dars")
                            InfoBadge(Icons.Default.Star, course.rating.toString())
                        }
                        Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                            InfoBadge(Icons.Default.People, "${course.studentsCount} o'quvchi")
                            InfoBadge(Icons.Default.Person, course.instructor)
                        }
                    }
                }
            }

            item {
                Column(modifier = Modifier.padding(horizontal = 20.dp, vertical = 16.dp)) {
                    if (isEnrolled) {
                        Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                            Row(modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween) {
                                Text("Sizning progressingiz", fontWeight = FontWeight.SemiBold,
                                    color = ForegroundColor, fontSize = 14.sp)
                                Text("$progress%", fontWeight = FontWeight.Bold,
                                    color = courseColor, fontSize = 14.sp)
                            }
                            LinearProgressIndicator(
                                progress = { progress / 100f },
                                modifier = Modifier.fillMaxWidth().height(8.dp).clip(RoundedCornerShape(4.dp)),
                                color = courseColor, trackColor = courseColor.copy(alpha = 0.15f)
                            )
                            Spacer(Modifier.height(4.dp))
                            OutlinedButton(
                                onClick = { vm.unenrollCourse(courseId) },
                                modifier = Modifier.fillMaxWidth(),
                                shape = RoundedCornerShape(12.dp),
                                colors = ButtonDefaults.outlinedButtonColors(contentColor = MaterialTheme.colorScheme.error),
                                border = ButtonDefaults.outlinedButtonBorder
                            ) { Text("Kursdan chiqish") }
                        }
                    } else {
                        Button(
                            onClick = { vm.enrollCourse(courseId) },
                            modifier = Modifier.fillMaxWidth().height(50.dp),
                            shape = RoundedCornerShape(14.dp),
                            colors = ButtonDefaults.buttonColors(containerColor = courseColor)
                        ) {
                            Icon(Icons.Default.PlayArrow, null, modifier = Modifier.size(20.dp))
                            Spacer(Modifier.width(8.dp))
                            Text("Kursni boshlash", fontWeight = FontWeight.Bold, fontSize = 16.sp)
                        }
                    }
                }
            }

            item {
                Column(modifier = Modifier.padding(horizontal = 20.dp)) {
                    Text("Mavzular", fontWeight = FontWeight.Bold, fontSize = 16.sp,
                        color = ForegroundColor, modifier = Modifier.padding(bottom = 8.dp))
                    course.topics.chunked(3).forEach { row ->
                        Row(horizontalArrangement = Arrangement.spacedBy(8.dp),
                            modifier = Modifier.padding(bottom = 8.dp)) {
                            row.forEach { topic ->
                                Box(
                                    modifier = Modifier.clip(RoundedCornerShape(8.dp))
                                        .background(courseColor.copy(alpha = 0.1f))
                                        .padding(horizontal = 10.dp, vertical = 6.dp)
                                ) {
                                    Text(topic, color = courseColor, fontSize = 12.sp, fontWeight = FontWeight.Medium)
                                }
                            }
                        }
                    }
                    Spacer(Modifier.height(16.dp))
                    Text("Darslar", fontWeight = FontWeight.Bold, fontSize = 18.sp,
                        color = ForegroundColor, modifier = Modifier.padding(bottom = 12.dp))
                }
            }

            items(course.lessons) { lesson ->
                LessonItem(
                    lesson = lesson,
                    isCompleted = lesson.id in completedIds,
                    isEnrolled = isEnrolled,
                    courseColor = courseColor,
                    onClick = { if (isEnrolled) onLessonClick(lesson.id) }
                )
            }
        }
    }
}

@Composable
fun LessonItem(
    lesson: Lesson,
    isCompleted: Boolean,
    isEnrolled: Boolean,
    courseColor: Color,
    onClick: () -> Unit
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable(enabled = isEnrolled, onClick = onClick)
            .padding(horizontal = 20.dp, vertical = 8.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        Box(
            modifier = Modifier.size(36.dp).clip(RoundedCornerShape(10.dp))
                .background(if (isCompleted) courseColor.copy(alpha = 0.1f) else Color(0xFFEFF2F5)),
            contentAlignment = Alignment.Center
        ) {
            if (isCompleted) {
                Icon(Icons.Default.CheckCircle, null, tint = courseColor, modifier = Modifier.size(20.dp))
            } else {
                Text(lesson.order.toString(), color = MutedForeground, fontWeight = FontWeight.Bold, fontSize = 13.sp)
            }
        }
        Column(modifier = Modifier.weight(1f)) {
            Text(lesson.title, color = ForegroundColor, fontWeight = FontWeight.Medium, fontSize = 14.sp)
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                Text(lesson.duration, color = MutedForeground, fontSize = 12.sp)
                val typeLabel = when (lesson.type) { "video" -> "▶ Video"; "quiz" -> "✓ Test"; else -> "✍ Maqola" }
                Text(typeLabel, color = courseColor, fontSize = 12.sp)
            }
        }
        if (!isEnrolled) Icon(Icons.Default.Lock, null, tint = MutedForeground, modifier = Modifier.size(16.dp))
        else if (!isCompleted) Icon(Icons.Default.ChevronRight, null, tint = MutedForeground, modifier = Modifier.size(16.dp))
    }
    HorizontalDivider(modifier = Modifier.padding(horizontal = 20.dp), color = BorderColor)
}

@Composable
fun Chip(label: String, color: Color) {
    Box(
        modifier = Modifier.clip(RoundedCornerShape(20.dp))
            .background(color.copy(alpha = 0.12f))
            .padding(horizontal = 10.dp, vertical = 4.dp)
    ) {
        Text(label, color = color, fontSize = 12.sp, fontWeight = FontWeight.Medium)
    }
}

@Composable
fun InfoBadge(icon: androidx.compose.ui.graphics.vector.ImageVector, text: String) {
    Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(4.dp)) {
        Icon(icon, null, tint = MutedForeground, modifier = Modifier.size(14.dp))
        Text(text, color = MutedForeground, fontSize = 12.sp)
    }
}
