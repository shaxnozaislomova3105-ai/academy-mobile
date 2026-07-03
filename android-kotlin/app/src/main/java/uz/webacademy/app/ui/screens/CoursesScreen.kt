package uz.webacademy.app.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
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
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import uz.webacademy.app.data.CATEGORIES
import uz.webacademy.app.ui.components.CourseCard
import uz.webacademy.app.ui.theme.*
import uz.webacademy.app.ui.viewmodel.AcademyViewModel

@Composable
fun CoursesScreen(vm: AcademyViewModel, onCourseClick: (String) -> Unit) {
    val enrolledIds by vm.enrolledIds.collectAsState()
    var search by remember { mutableStateOf("") }
    var activeCategory by remember { mutableStateOf("Barchasi") }

    val filtered = remember(search, activeCategory, vm.courses) {
        vm.courses.filter { course ->
            val matchesCat = activeCategory == "Barchasi" || course.category == activeCategory
            val matchesSearch = search.isBlank() || course.title.contains(search, true)
            matchesCat && matchesSearch
        }
    }

    LazyColumn(
        modifier = Modifier.fillMaxSize().background(Background),
        contentPadding = PaddingValues(horizontal = 20.dp, vertical = 16.dp)
    ) {
        item {
            Text("Kurslarni ko'rish", fontWeight = FontWeight.Bold, fontSize = 26.sp,
                color = ForegroundColor, modifier = Modifier.padding(bottom = 6.dp))
            Text("Bizning keng qamrovli, interaktiv o'quv dasturimiz bilan vebni o'rganing.",
                color = MutedForeground, fontSize = 14.sp, lineHeight = 20.sp,
                modifier = Modifier.padding(bottom = 16.dp))
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
                modifier = Modifier.fillMaxWidth().padding(bottom = 12.dp),
                shape = RoundedCornerShape(12.dp),
                colors = OutlinedTextFieldDefaults.colors(
                    focusedBorderColor = Primary, unfocusedBorderColor = BorderColor,
                    focusedContainerColor = CardColor, unfocusedContainerColor = CardColor
                ),
                singleLine = true,
                keyboardOptions = KeyboardOptions(imeAction = ImeAction.Search)
            )
        }

        item {
            LazyRow(
                contentPadding = PaddingValues(bottom = 16.dp),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                items(CATEGORIES) { cat ->
                    val selected = activeCategory == cat
                    Box(
                        modifier = Modifier
                            .clip(RoundedCornerShape(20.dp))
                            .background(if (selected) Primary else CardColor)
                            .clickable { activeCategory = cat }
                            .padding(horizontal = 16.dp, vertical = 8.dp)
                    ) {
                        Text(cat, color = if (selected) CardColor else MutedForeground,
                            fontWeight = if (selected) FontWeight.SemiBold else FontWeight.Normal,
                            fontSize = 13.sp)
                    }
                }
            }
        }

        if (filtered.isEmpty()) {
            item {
                Box(modifier = Modifier.fillMaxWidth().padding(vertical = 48.dp),
                    contentAlignment = Alignment.Center) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.spacedBy(8.dp)) {
                        Icon(Icons.Default.Search, null, tint = MutedForeground, modifier = Modifier.size(40.dp))
                        Text("Kurs topilmadi", color = MutedForeground)
                    }
                }
            }
        } else {
            items(filtered) { course ->
                CourseCard(
                    course = course,
                    progress = vm.getCourseProgress(course.id),
                    showProgress = course.id in enrolledIds,
                    onClick = { onCourseClick(course.id) }
                )
                Spacer(Modifier.height(12.dp))
            }
        }
    }
}
