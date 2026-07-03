package uz.webacademy.app.ui.screens

import android.content.Intent
import android.net.Uri
import androidx.compose.foundation.background
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
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.core.graphics.toColorInt
import uz.webacademy.app.data.COURSES
import uz.webacademy.app.ui.theme.*
import uz.webacademy.app.ui.viewmodel.AcademyViewModel

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LessonScreen(lessonId: String, vm: AcademyViewModel, onBack: () -> Unit) {
    val context = LocalContext.current
    val completedIds by vm.completedIds.collectAsState()

    val (lesson, course, prevLesson, nextLesson) = remember(lessonId) {
        for (c in COURSES) {
            val idx = c.lessons.indexOfFirst { it.id == lessonId }
            if (idx >= 0) {
                return@remember Quad(
                    c.lessons[idx], c,
                    if (idx > 0) c.lessons[idx - 1] else null,
                    if (idx < c.lessons.size - 1) c.lessons[idx + 1] else null
                )
            }
        }
        Quad(null, null, null, null)
    }

    if (lesson == null || course == null) {
        Box(modifier = Modifier.fillMaxSize().background(Background), contentAlignment = Alignment.Center) {
            Text("Dars topilmadi", color = MutedForeground)
        }
        return
    }

    val courseColor = remember(course.color) {
        try { Color(course.color.toColorInt()) } catch (e: Exception) { Primary }
    }
    val isCompleted = lesson.id in completedIds
    var showQuiz by remember { mutableStateOf(lesson.type == "quiz") }
    var quizAnswers by remember { mutableStateOf(mapOf<Int, Int>()) }
    var quizSubmitted by remember { mutableStateOf(false) }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Column {
                        Text(lesson.title, maxLines = 1, fontSize = 14.sp, fontWeight = FontWeight.SemiBold)
                        Text(course.title, color = MutedForeground, fontSize = 12.sp)
                    }
                },
                navigationIcon = {
                    IconButton(onClick = onBack) { Icon(Icons.Default.ArrowBack, "Orqaga") }
                },
                actions = {
                    IconButton(onClick = {
                        if (isCompleted) vm.uncompleteLesson(lesson.id)
                        else vm.completeLesson(lesson.id)
                    }) {
                        Icon(
                            if (isCompleted) Icons.Default.CheckCircle else Icons.Default.RadioButtonUnchecked,
                            null, tint = if (isCompleted) courseColor else MutedForeground
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = CardColor)
            )
        }
    ) { padding ->
        LazyColumn(
            modifier = Modifier.fillMaxSize().background(Background).padding(padding),
            contentPadding = PaddingValues(bottom = 100.dp)
        ) {
            if (lesson.videoUrl != null) {
                item {
                    Card(
                        modifier = Modifier.fillMaxWidth().padding(16.dp),
                        shape = RoundedCornerShape(14.dp),
                        colors = CardDefaults.cardColors(containerColor = CardColor)
                    ) {
                        Row(
                            modifier = Modifier.fillMaxWidth().padding(16.dp)
                                .then(Modifier.clickable {
                                    val videoId = lesson.videoUrl.substringAfter("v=").substringBefore("&")
                                    val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://www.youtube.com/watch?v=$videoId"))
                                    context.startActivity(intent)
                                }),
                            horizontalArrangement = Arrangement.spacedBy(12.dp),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Box(
                                modifier = Modifier.size(48.dp).clip(RoundedCornerShape(12.dp))
                                    .background(Color(0xFFFF0000).copy(alpha = 0.1f)),
                                contentAlignment = Alignment.Center
                            ) { Icon(Icons.Default.PlayArrow, null, tint = Color.Red, modifier = Modifier.size(28.dp)) }
                            Column(modifier = Modifier.weight(1f)) {
                                Text(lesson.title, fontWeight = FontWeight.SemiBold, color = ForegroundColor, fontSize = 14.sp)
                                Text("YouTube • Video dars", color = MutedForeground, fontSize = 12.sp)
                            }
                            Icon(Icons.Default.OpenInNew, null, tint = MutedForeground, modifier = Modifier.size(18.dp))
                        }
                    }
                }
            }

            item {
                Box(
                    modifier = Modifier.fillMaxWidth().padding(horizontal = 16.dp, vertical = 4.dp)
                        .clip(RoundedCornerShape(12.dp)).background(courseColor.copy(alpha = 0.08f))
                        .padding(12.dp)
                ) {
                    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        Icon(Icons.Default.AccessTime, null, tint = courseColor, modifier = Modifier.size(16.dp))
                        Text(lesson.duration, color = courseColor, fontSize = 13.sp)
                        Text("•", color = courseColor, fontSize = 13.sp)
                        val typeText = when (lesson.type) { "video" -> "Video"; "quiz" -> "Test"; else -> "Maqola" }
                        Text(typeText, color = courseColor, fontSize = 13.sp, fontWeight = FontWeight.Medium)
                    }
                }
            }

            item {
                Column(modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)) {
                    renderMarkdown(lesson.content, courseColor)
                }
            }

            if (lesson.links.isNotEmpty()) {
                item {
                    Column(modifier = Modifier.padding(horizontal = 16.dp)) {
                        Text("Foydali havolalar", fontWeight = FontWeight.Bold, fontSize = 16.sp,
                            color = ForegroundColor, modifier = Modifier.padding(vertical = 12.dp))
                        lesson.links.forEach { link ->
                            Card(
                                modifier = Modifier.fillMaxWidth().padding(bottom = 8.dp),
                                shape = RoundedCornerShape(12.dp),
                                colors = CardDefaults.cardColors(containerColor = CardColor),
                                onClick = { context.startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(link.url))) }
                            ) {
                                Row(modifier = Modifier.padding(14.dp),
                                    verticalAlignment = Alignment.CenterVertically,
                                    horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                                    Icon(Icons.Default.Link, null, tint = Primary, modifier = Modifier.size(18.dp))
                                    Text(link.title, color = ForegroundColor, fontSize = 14.sp, modifier = Modifier.weight(1f))
                                    Icon(Icons.Default.OpenInNew, null, tint = MutedForeground, modifier = Modifier.size(16.dp))
                                }
                            }
                        }
                    }
                }
            }

            if (lesson.questions.isNotEmpty()) {
                item {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Row(modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically) {
                            Text("Test savollari", fontWeight = FontWeight.Bold, fontSize = 18.sp, color = ForegroundColor)
                            Box(modifier = Modifier.clip(RoundedCornerShape(12.dp))
                                .background(courseColor.copy(alpha = 0.1f))
                                .padding(horizontal = 10.dp, vertical = 4.dp)) {
                                Text("${lesson.questions.size} ta savol", color = courseColor, fontSize = 12.sp, fontWeight = FontWeight.Medium)
                            }
                        }
                        Spacer(Modifier.height(12.dp))

                        lesson.questions.forEachIndexed { qIdx, question ->
                            Card(
                                modifier = Modifier.fillMaxWidth().padding(bottom = 16.dp),
                                shape = RoundedCornerShape(14.dp),
                                colors = CardDefaults.cardColors(containerColor = CardColor)
                            ) {
                                Column(modifier = Modifier.padding(16.dp)) {
                                    Text("${qIdx + 1}. ${question.question}",
                                        fontWeight = FontWeight.SemiBold, color = ForegroundColor, fontSize = 14.sp,
                                        modifier = Modifier.padding(bottom = 12.dp))
                                    question.options.forEachIndexed { oIdx, option ->
                                        val selected = quizAnswers[qIdx] == oIdx
                                        val isCorrect = quizSubmitted && oIdx == question.correct
                                        val isWrong = quizSubmitted && selected && oIdx != question.correct
                                        val bgColor = when {
                                            isCorrect -> Color(0xFF22C55E).copy(alpha = 0.1f)
                                            isWrong -> Color(0xFFEF4444).copy(alpha = 0.1f)
                                            selected -> courseColor.copy(alpha = 0.1f)
                                            else -> Background
                                        }
                                        val borderColor = when {
                                            isCorrect -> Color(0xFF22C55E)
                                            isWrong -> Color(0xFFEF4444)
                                            selected -> courseColor
                                            else -> BorderColor
                                        }
                                        Row(
                                            modifier = Modifier.fillMaxWidth().padding(bottom = 8.dp)
                                                .clip(RoundedCornerShape(10.dp))
                                                .background(bgColor)
                                                .then(Modifier.background(Color.Transparent,
                                                    RoundedCornerShape(10.dp)))
                                                .padding(1.dp)
                                                .clip(RoundedCornerShape(9.dp))
                                                .background(bgColor)
                                                .then(if (!quizSubmitted) Modifier.clickable {
                                                    quizAnswers = quizAnswers + (qIdx to oIdx)
                                                } else Modifier)
                                                .padding(12.dp),
                                            verticalAlignment = Alignment.CenterVertically,
                                            horizontalArrangement = Arrangement.spacedBy(10.dp)
                                        ) {
                                            RadioButton(selected = selected, onClick = null,
                                                colors = RadioButtonDefaults.colors(selectedColor = courseColor))
                                            Text(option, color = ForegroundColor, fontSize = 13.sp, modifier = Modifier.weight(1f))
                                            if (isCorrect) Icon(Icons.Default.CheckCircle, null, tint = Color(0xFF22C55E), modifier = Modifier.size(16.dp))
                                            if (isWrong) Icon(Icons.Default.Cancel, null, tint = Color(0xFFEF4444), modifier = Modifier.size(16.dp))
                                        }
                                    }
                                    if (quizSubmitted && question.explanation.isNotBlank()) {
                                        Box(modifier = Modifier.fillMaxWidth().clip(RoundedCornerShape(8.dp))
                                            .background(Primary.copy(alpha = 0.08f)).padding(10.dp)) {
                                            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                                                Icon(Icons.Default.Info, null, tint = Primary, modifier = Modifier.size(16.dp))
                                                Text(question.explanation, color = Primary, fontSize = 12.sp)
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        if (!quizSubmitted) {
                            Button(
                                onClick = { quizSubmitted = true; if (quizAnswers.size == lesson.questions.size) vm.completeLesson(lesson.id) },
                                modifier = Modifier.fillMaxWidth().height(50.dp),
                                enabled = quizAnswers.size == lesson.questions.size,
                                shape = RoundedCornerShape(14.dp),
                                colors = ButtonDefaults.buttonColors(containerColor = courseColor)
                            ) { Text("Tekshirish", fontWeight = FontWeight.Bold) }
                        } else {
                            val correct = lesson.questions.indices.count { quizAnswers[it] == lesson.questions[it].correct }
                            Card(modifier = Modifier.fillMaxWidth(), shape = RoundedCornerShape(14.dp),
                                colors = CardDefaults.cardColors(containerColor = if (correct == lesson.questions.size) Color(0xFF22C55E).copy(alpha = 0.1f) else Primary.copy(alpha = 0.08f))) {
                                Column(modifier = Modifier.padding(16.dp).fillMaxWidth(),
                                    horizontalAlignment = Alignment.CenterHorizontally,
                                    verticalArrangement = Arrangement.spacedBy(4.dp)) {
                                    Text("$correct / ${lesson.questions.size} to'g'ri", fontWeight = FontWeight.Bold,
                                        color = if (correct == lesson.questions.size) Color(0xFF22C55E) else Primary, fontSize = 20.sp)
                                    Text(if (correct == lesson.questions.size) "Mukammal! 🎉" else "Qaytadan urinib ko'ring",
                                        color = MutedForeground, fontSize = 14.sp)
                                    if (correct < lesson.questions.size) {
                                        TextButton(onClick = { quizSubmitted = false; quizAnswers = mapOf() }) {
                                            Text("Qayta urinish", color = Primary)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            item {
                Row(modifier = Modifier.fillMaxWidth().padding(horizontal = 16.dp, vertical = 8.dp),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                    if (prevLesson != null) {
                        OutlinedButton(onClick = onBack, modifier = Modifier.weight(1f), shape = RoundedCornerShape(12.dp)) {
                            Icon(Icons.Default.ArrowBack, null, modifier = Modifier.size(16.dp))
                            Spacer(Modifier.width(6.dp))
                            Text("Oldingi", maxLines = 1)
                        }
                    }
                    Button(
                        onClick = { vm.completeLesson(lesson.id); onBack() },
                        modifier = Modifier.weight(if (prevLesson != null) 1f else 2f).height(48.dp),
                        shape = RoundedCornerShape(12.dp),
                        colors = ButtonDefaults.buttonColors(containerColor = courseColor)
                    ) {
                        Icon(Icons.Default.CheckCircle, null, modifier = Modifier.size(16.dp))
                        Spacer(Modifier.width(6.dp))
                        Text(if (nextLesson != null) "Keyingisi" else "Tugatish", fontWeight = FontWeight.Bold)
                    }
                }
            }
        }
    }
}

data class Quad<A, B, C, D>(val first: A, val second: B, val third: C, val fourth: D)

@Composable
fun ColumnScope.renderMarkdown(content: String, accentColor: Color) {
    val lines = content.split("\n")
    lines.forEach { line ->
        when {
            line.startsWith("```") -> {}
            line.startsWith("**") && line.endsWith("**") -> {
                Text(line.drop(2).dropLast(2), fontWeight = FontWeight.Bold,
                    color = ForegroundColor, fontSize = 15.sp, modifier = Modifier.padding(vertical = 4.dp))
            }
            line.startsWith("- ") -> {
                Row(modifier = Modifier.padding(vertical = 2.dp), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    Text("•", color = accentColor, fontWeight = FontWeight.Bold)
                    Text(line.drop(2), color = ForegroundColor, fontSize = 14.sp)
                }
            }
            line.startsWith("# ") -> {
                Text(line.drop(2), fontWeight = FontWeight.Bold, fontSize = 20.sp,
                    color = ForegroundColor, modifier = Modifier.padding(vertical = 6.dp))
            }
            line.isBlank() -> Spacer(Modifier.height(6.dp))
            line.contains("`") -> {
                val parts = line.split("`")
                Text(buildAnnotatedString {
                    parts.forEachIndexed { i, part ->
                        if (i % 2 == 1) {
                            withStyle(SpanStyle(background = accentColor.copy(alpha = 0.12f),
                                color = accentColor, fontFamily = FontFamily.Monospace, fontSize = 13.sp)) {
                                append(part)
                            }
                        } else append(part)
                    }
                }, color = ForegroundColor, fontSize = 14.sp, lineHeight = 20.sp,
                    modifier = Modifier.padding(vertical = 2.dp))
            }
            else -> Text(line, color = ForegroundColor, fontSize = 14.sp, lineHeight = 20.sp,
                modifier = Modifier.padding(vertical = 2.dp))
        }
    }
}

private operator fun <A, B, C, D> Quad<A, B, C, D>.component1() = first
private operator fun <A, B, C, D> Quad<A, B, C, D>.component2() = second
private operator fun <A, B, C, D> Quad<A, B, C, D>.component3() = third
private operator fun <A, B, C, D> Quad<A, B, C, D>.component4() = fourth
