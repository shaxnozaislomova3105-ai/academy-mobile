package uz.webacademy.app.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Search
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.core.graphics.toColorInt
import uz.webacademy.app.data.COURSES
import uz.webacademy.app.ui.components.CourseCard
import uz.webacademy.app.ui.components.WALogo
import uz.webacademy.app.ui.theme.*
import uz.webacademy.app.ui.viewmodel.AcademyViewModel

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(vm: AcademyViewModel, onCourseClick: (String) -> Unit) {
    val enrolledIds by vm.enrolledIds.collectAsState()
    val completedIds by vm.completedIds.collectAsState()
    var search by remember { mutableStateOf("") }

    val enrolledCourses = remember(enrolledIds) { vm.getEnrolledCourses().take(3) }
    val filtered = remember(search) {
        if (search.isBlank()) COURSES
        else COURSES.filter { it.title.contains(search, true) || it.category.contains(search, true) }
    }

    val categories = listOf(
        Triple("HTML", "#E44D26", "< >"),
        Triple("CSS", "#264DE4", "{ }"),
        Triple("JavaScript", "#F7DF1E", "JS"),
        Triple("React", "#61DAFB", "⚛"),
        Triple("Node.js", "#339933", "N"),
        Triple("Full-Stack", "#7C3AED", "∞")
    )

    LazyColumn(
        modifier = Modifier.fillMaxSize().background(Background),
        contentPadding = PaddingValues(horizontal = 20.dp, vertical = 16.dp),
        verticalArrangement = Arrangement.spacedBy(0.dp)
    ) {
        item {
            Row(
                modifier = Modifier.fillMaxWidth().padding(bottom = 16.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                WALogo()
                Box(
                    modifier = Modifier
                        .size(38.dp).clip(CircleShape)
                        .background(CardColor).border(1.dp, BorderColor, CircleShape),
                    contentAlignment = Alignment.Center
                ) {
                    Text("W", color = Primary, fontWeight = FontWeight.Bold)
                }
            }
        }

        item {
            OutlinedTextField(
                value = search, onValueChange = { search = it },
                placeholder = { Text("Kurslarni qidiring...", color = MutedForeground) },
                leadingIcon = { Icon(Icons.Default.Search, null, tint = MutedForeground) },
                trailingIcon = {
                    if (search.isNotEmpty()) Icon(Icons.Default.Close, null,
                        modifier = Modifier.clickable { search = "" }, tint = MutedForeground)
                },
                modifier = Modifier.fillMaxWidth().padding(bottom = 20.dp),
                shape = RoundedCornerShape(12.dp),
                colors = OutlinedTextFieldDefaults.colors(
                    focusedBorderColor = Primary, unfocusedBorderColor = BorderColor,
                    focusedContainerColor = CardColor, unfocusedContainerColor = CardColor
                ),
                singleLine = true,
                keyboardOptions = KeyboardOptions(imeAction = ImeAction.Search)
            )
        }

        if (search.isNotBlank()) {
            item {
                Text("Natijalar (${filtered.size})", fontWeight = FontWeight.Bold,
                    fontSize = 18.sp, color = ForegroundColor, modifier = Modifier.padding(bottom = 12.dp))
            }
            if (filtered.isEmpty()) {
                item {
                    Box(modifier = Modifier.fillMaxWidth().padding(vertical = 40.dp),
                        contentAlignment = Alignment.Center) {
                        Text("Kurs topilmadi", color = MutedForeground)
                    }
                }
            } else {
                items(filtered) { course ->
                    CourseCard(course = course, progress = vm.getCourseProgress(course.id),
                        showProgress = course.id in enrolledIds,
                        onClick = { onCourseClick(course.id) })
                    Spacer(Modifier.height(12.dp))
                }
            }
        } else {
            if (enrolledCourses.isNotEmpty()) {
                item {
                    Row(modifier = Modifier.fillMaxWidth().padding(bottom = 14.dp),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically) {
                        Text("Davom etish", fontWeight = FontWeight.Bold, fontSize = 18.sp, color = ForegroundColor)
                    }
                }
                items(enrolledCourses) { course ->
                    CourseCard(course = course, progress = vm.getCourseProgress(course.id),
                        showProgress = true, compact = true,
                        onClick = { onCourseClick(course.id) })
                    Spacer(Modifier.height(10.dp))
                }
                item { Spacer(Modifier.height(10.dp)) }
            }

            item {
                Text("Yo'nalishlar", fontWeight = FontWeight.Bold, fontSize = 18.sp,
                    color = ForegroundColor, modifier = Modifier.padding(bottom = 14.dp))
            }
            item {
                Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                    categories.chunked(3).forEach { row ->
                        Row(horizontalArrangement = Arrangement.spacedBy(10.dp),
                            modifier = Modifier.fillMaxWidth()) {
                            row.forEach { (name, colorHex, symbol) ->
                                val color = remember(colorHex) {
                                    try { Color(colorHex.toColorInt()) } catch (e: Exception) { Primary }
                                }
                                Box(
                                    modifier = Modifier.weight(1f).clip(RoundedCornerShape(14.dp))
                                        .background(color.copy(alpha = 0.08f))
                                        .border(1.dp, color.copy(alpha = 0.2f), RoundedCornerShape(14.dp))
                                        .clickable { onCourseClick(COURSES.first { it.category == name }.id) }
                                        .padding(14.dp),
                                    contentAlignment = Alignment.Center
                                ) {
                                    Column(horizontalAlignment = Alignment.CenterHorizontally,
                                        verticalArrangement = Arrangement.spacedBy(6.dp)) {
                                        Text(symbol, color = color, fontWeight = FontWeight.Bold, fontSize = 18.sp)
                                        Text(name, color = color, fontWeight = FontWeight.Bold, fontSize = 12.sp)
                                    }
                                }
                            }
                            if (row.size < 3) {
                                repeat(3 - row.size) { Spacer(Modifier.weight(1f)) }
                            }
                        }
                    }
                }
                Spacer(Modifier.height(20.dp))
            }

            item {
                Text("Barcha kurslar", fontWeight = FontWeight.Bold, fontSize = 18.sp,
                    color = ForegroundColor, modifier = Modifier.padding(bottom = 14.dp))
            }
            items(COURSES) { course ->
                CourseCard(course = course, progress = vm.getCourseProgress(course.id),
                    showProgress = course.id in enrolledIds,
                    onClick = { onCourseClick(course.id) })
                Spacer(Modifier.height(12.dp))
            }
        }
    }
}
