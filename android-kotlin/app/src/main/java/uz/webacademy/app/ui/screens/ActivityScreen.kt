package uz.webacademy.app.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AutoStories
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import uz.webacademy.app.ui.components.CourseCard
import uz.webacademy.app.ui.theme.*
import uz.webacademy.app.ui.viewmodel.AcademyViewModel

@Composable
fun ActivityScreen(vm: AcademyViewModel, onCourseClick: (String) -> Unit) {
    val completedIds by vm.completedIds.collectAsState()
    val enrolledIds by vm.enrolledIds.collectAsState()

    val enrolled = remember(enrolledIds) { vm.getEnrolledCourses() }
    val inProgress = remember(enrolled, completedIds) {
        enrolled.filter { c -> vm.getCourseProgress(c.id).let { it > 0 && it < 100 } }
    }
    val completed = remember(enrolled, completedIds) {
        enrolled.filter { c -> vm.getCourseProgress(c.id) == 100 }
    }
    val notStarted = remember(enrolled, completedIds) {
        enrolled.filter { c -> vm.getCourseProgress(c.id) == 0 }
    }

    LazyColumn(
        modifier = Modifier.fillMaxSize().background(Background),
        contentPadding = PaddingValues(horizontal = 20.dp, vertical = 16.dp)
    ) {
        item {
            Text("Faollik", fontWeight = FontWeight.Bold, fontSize = 28.sp,
                color = ForegroundColor, modifier = Modifier.padding(bottom = 20.dp))
        }

        item {
            Row(modifier = Modifier.fillMaxWidth().padding(bottom = 28.dp),
                horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                listOf(
                    Triple("${enrolled.size}", "Kurslar", Primary),
                    Triple("${completedIds.size}", "Darslar", Color(0xFF22C55E)),
                    Triple("${completed.size}", "Tugagan", Color(0xFFF59E0B))
                ).forEach { (value, label, color) ->
                    Card(
                        modifier = Modifier.weight(1f),
                        shape = RoundedCornerShape(14.dp),
                        colors = CardDefaults.cardColors(containerColor = color.copy(alpha = 0.08f))
                    ) {
                        Column(
                            modifier = Modifier.padding(16.dp).fillMaxWidth(),
                            horizontalAlignment = Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.spacedBy(4.dp)
                        ) {
                            Text(value, fontWeight = FontWeight.Bold, fontSize = 22.sp, color = color)
                            Text(label, color = MutedForeground, fontSize = 11.sp)
                        }
                    }
                }
            }
        }

        if (enrolled.isEmpty()) {
            item {
                Box(modifier = Modifier.fillMaxWidth().padding(top = 40.dp),
                    contentAlignment = Alignment.Center) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.spacedBy(12.dp)) {
                        Box(
                            modifier = Modifier.size(80.dp).clip(RoundedCornerShape(40.dp))
                                .background(Primary.copy(alpha = 0.1f)),
                            contentAlignment = Alignment.Center
                        ) { Icon(Icons.Default.AutoStories, null, tint = Primary, modifier = Modifier.size(36.dp)) }
                        Text("Hali kurs yo'q", fontWeight = FontWeight.Bold, fontSize = 20.sp, color = ForegroundColor)
                        Text("Kurslarni ko'rib, o'zingizga mos birini tanlang",
                            color = MutedForeground, fontSize = 14.sp)
                    }
                }
            }
        } else {
            if (inProgress.isNotEmpty()) {
                item {
                    Text("Davom etmoqda", fontWeight = FontWeight.Bold, fontSize = 18.sp,
                        color = ForegroundColor, modifier = Modifier.padding(bottom = 12.dp))
                }
                items(inProgress) { course ->
                    CourseCard(course = course, progress = vm.getCourseProgress(course.id),
                        showProgress = true, onClick = { onCourseClick(course.id) })
                    Spacer(Modifier.height(12.dp))
                }
                item { Spacer(Modifier.height(12.dp)) }
            }
            if (notStarted.isNotEmpty()) {
                item {
                    Text("Boshlanmagan", fontWeight = FontWeight.Bold, fontSize = 18.sp,
                        color = ForegroundColor, modifier = Modifier.padding(bottom = 12.dp))
                }
                items(notStarted) { course ->
                    CourseCard(course = course, progress = 0, showProgress = true,
                        onClick = { onCourseClick(course.id) })
                    Spacer(Modifier.height(12.dp))
                }
                item { Spacer(Modifier.height(12.dp)) }
            }
            if (completed.isNotEmpty()) {
                item {
                    Row(modifier = Modifier.fillMaxWidth().padding(bottom = 12.dp),
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.SpaceBetween) {
                        Text("Tugatilgan", fontWeight = FontWeight.Bold, fontSize = 18.sp, color = ForegroundColor)
                        Box(modifier = Modifier.clip(RoundedCornerShape(12.dp))
                            .background(Color(0xFF22C55E).copy(alpha = 0.12f))
                            .padding(horizontal = 10.dp, vertical = 4.dp)) {
                            Text("${completed.size} ta", color = Color(0xFF22C55E),
                                fontWeight = FontWeight.SemiBold, fontSize = 12.sp)
                        }
                    }
                }
                items(completed) { course ->
                    CourseCard(course = course, progress = 100, showProgress = true,
                        onClick = { onCourseClick(course.id) })
                    Spacer(Modifier.height(12.dp))
                }
            }
        }
    }
}
