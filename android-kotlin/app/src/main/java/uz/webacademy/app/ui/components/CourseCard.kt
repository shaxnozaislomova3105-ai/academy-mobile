package uz.webacademy.app.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.MenuBook
import androidx.compose.material.icons.filled.Star
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
import uz.webacademy.app.data.Course
import uz.webacademy.app.ui.theme.*

@Composable
fun CourseCard(
    course: Course,
    progress: Int = 0,
    showProgress: Boolean = false,
    compact: Boolean = false,
    onClick: () -> Unit
) {
    val courseColor = remember(course.color) {
        try { Color(course.color.toColorInt()) } catch (e: Exception) { Primary }
    }

    Card(
        modifier = Modifier.fillMaxWidth().clickable(onClick = onClick),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = CardColor),
        elevation = CardDefaults.cardElevation(defaultElevation = 1.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth().padding(14.dp),
            horizontalArrangement = Arrangement.spacedBy(14.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier.size(if (compact) 44.dp else 56.dp).clip(RoundedCornerShape(14.dp))
                    .background(courseColor.copy(alpha = 0.1f)),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    course.category.take(2).uppercase(),
                    color = courseColor, fontWeight = FontWeight.Bold,
                    fontSize = if (compact) 13.sp else 16.sp
                )
            }

            Column(modifier = Modifier.weight(1f), verticalArrangement = Arrangement.spacedBy(4.dp)) {
                Row(modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically) {
                    Text(course.title, fontWeight = FontWeight.SemiBold,
                        color = ForegroundColor, fontSize = if (compact) 13.sp else 15.sp,
                        modifier = Modifier.weight(1f))
                    if (course.isPremium) {
                        Box(modifier = Modifier.clip(RoundedCornerShape(6.dp))
                            .background(Color(0xFFF59E0B).copy(alpha = 0.15f))
                            .padding(horizontal = 6.dp, vertical = 2.dp)) {
                            Text("PRO", color = Color(0xFFF59E0B), fontSize = 10.sp, fontWeight = FontWeight.Bold)
                        }
                    }
                }

                if (!compact) {
                    Text(course.description, color = MutedForeground, fontSize = 12.sp,
                        maxLines = 2, lineHeight = 16.sp)
                }

                Row(horizontalArrangement = Arrangement.spacedBy(12.dp),
                    verticalAlignment = Alignment.CenterVertically) {
                    Row(verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(3.dp)) {
                        Icon(Icons.Default.Star, null, tint = Color(0xFFF59E0B), modifier = Modifier.size(12.dp))
                        Text(course.rating.toString(), color = MutedForeground, fontSize = 11.sp)
                    }
                    Row(verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(3.dp)) {
                        Icon(Icons.Default.MenuBook, null, tint = MutedForeground, modifier = Modifier.size(12.dp))
                        Text("${course.lessonsCount} dars", color = MutedForeground, fontSize = 11.sp)
                    }
                    Box(modifier = Modifier.clip(RoundedCornerShape(6.dp))
                        .background(courseColor.copy(alpha = 0.1f))
                        .padding(horizontal = 6.dp, vertical = 2.dp)) {
                        Text(course.level, color = courseColor, fontSize = 10.sp, fontWeight = FontWeight.Medium)
                    }
                }

                if (showProgress) {
                    Spacer(Modifier.height(2.dp))
                    Row(verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        LinearProgressIndicator(
                            progress = { progress / 100f },
                            modifier = Modifier.weight(1f).height(5.dp).clip(RoundedCornerShape(3.dp)),
                            color = courseColor, trackColor = courseColor.copy(alpha = 0.15f)
                        )
                        Text("$progress%", color = courseColor, fontSize = 11.sp, fontWeight = FontWeight.SemiBold)
                    }
                }
            }
        }
    }
}
