package uz.webacademy.app.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import uz.webacademy.app.ui.theme.*
import uz.webacademy.app.ui.viewmodel.AcademyViewModel
import java.text.SimpleDateFormat
import java.util.*

@Composable
fun ProfileScreen(vm: AcademyViewModel) {
    val profile by vm.profile.collectAsState()
    val enrolledIds by vm.enrolledIds.collectAsState()
    val completedIds by vm.completedIds.collectAsState()
    var editing by remember { mutableStateOf(false) }
    var nameInput by remember(profile) { mutableStateOf(profile.name) }
    var emailInput by remember(profile) { mutableStateOf(profile.email) }

    val totalLessons = remember { vm.courses.sumOf { it.lessons.size } }
    val progressPercent = if (totalLessons > 0) (completedIds.size * 100 / totalLessons) else 0

    LazyColumn(
        modifier = Modifier.fillMaxSize().background(Background),
        contentPadding = PaddingValues(horizontal = 20.dp, vertical = 16.dp)
    ) {
        item {
            Text("Profil", fontWeight = FontWeight.Bold, fontSize = 28.sp,
                color = ForegroundColor, modifier = Modifier.padding(bottom = 24.dp))
        }

        item {
            Column(modifier = Modifier.fillMaxWidth(),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(8.dp)) {
                Box(
                    modifier = Modifier.size(80.dp).clip(CircleShape)
                        .background(Primary.copy(alpha = 0.15f)),
                    contentAlignment = Alignment.Center
                ) {
                    Text(profile.name.firstOrNull()?.uppercase() ?: "F",
                        color = Primary, fontWeight = FontWeight.Bold, fontSize = 32.sp)
                }
                if (!editing) {
                    Text(profile.name, fontWeight = FontWeight.Bold, fontSize = 22.sp, color = ForegroundColor)
                    Text(profile.email, color = MutedForeground, fontSize = 14.sp)
                    OutlinedButton(
                        onClick = { editing = true },
                        shape = RoundedCornerShape(20.dp),
                        border = ButtonDefaults.outlinedButtonBorder,
                        modifier = Modifier.padding(top = 4.dp)
                    ) {
                        Icon(Icons.Default.Edit, null, modifier = Modifier.size(14.dp))
                        Spacer(Modifier.width(6.dp))
                        Text("Tahrirlash")
                    }
                } else {
                    Column(modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
                        verticalArrangement = Arrangement.spacedBy(10.dp)) {
                        OutlinedTextField(
                            value = nameInput, onValueChange = { nameInput = it },
                            label = { Text("Ism") },
                            leadingIcon = { Icon(Icons.Default.Person, null, tint = MutedForeground) },
                            modifier = Modifier.fillMaxWidth(),
                            shape = RoundedCornerShape(12.dp),
                            colors = OutlinedTextFieldDefaults.colors(focusedBorderColor = Primary, unfocusedBorderColor = BorderColor)
                        )
                        OutlinedTextField(
                            value = emailInput, onValueChange = { emailInput = it },
                            label = { Text("Email") },
                            leadingIcon = { Icon(Icons.Default.Email, null, tint = MutedForeground) },
                            modifier = Modifier.fillMaxWidth(),
                            shape = RoundedCornerShape(12.dp),
                            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Email),
                            colors = OutlinedTextFieldDefaults.colors(focusedBorderColor = Primary, unfocusedBorderColor = BorderColor)
                        )
                        Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                            OutlinedButton(onClick = { editing = false }, modifier = Modifier.weight(1f),
                                shape = RoundedCornerShape(12.dp)) { Text("Bekor") }
                            Button(onClick = { vm.updateProfile(nameInput, emailInput); editing = false },
                                modifier = Modifier.weight(1f), shape = RoundedCornerShape(12.dp),
                                colors = ButtonDefaults.buttonColors(containerColor = Primary)) { Text("Saqlash") }
                        }
                    }
                }
            }
            Spacer(Modifier.height(24.dp))
        }

        item {
            Card(
                modifier = Modifier.fillMaxWidth().padding(bottom = 20.dp),
                shape = RoundedCornerShape(20.dp),
                colors = CardDefaults.cardColors(containerColor = Primary)
            ) {
                Row(modifier = Modifier.padding(20.dp).fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically) {
                    Column(modifier = Modifier.weight(1f)) {
                        Text("Umumiy progress", color = Color.White, fontWeight = FontWeight.Bold, fontSize = 16.sp)
                        Text("${completedIds.size} / $totalLessons dars bajarildi",
                            color = Color.White.copy(alpha = 0.75f), fontSize = 12.sp,
                            modifier = Modifier.padding(vertical = 8.dp))
                        LinearProgressIndicator(
                            progress = { progressPercent / 100f },
                            modifier = Modifier.fillMaxWidth().height(6.dp).clip(RoundedCornerShape(3.dp)),
                            color = Color.White, trackColor = Color.White.copy(alpha = 0.3f)
                        )
                    }
                    Spacer(Modifier.width(16.dp))
                    Text("$progressPercent%", color = Color.White, fontWeight = FontWeight.Bold, fontSize = 32.sp)
                }
            }
        }

        item {
            val dateStr = remember(profile.joinedAt) {
                SimpleDateFormat("dd.MM.yyyy", Locale.getDefault()).format(Date(profile.joinedAt))
            }
            Card(
                modifier = Modifier.fillMaxWidth().padding(bottom = 20.dp),
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = CardColor),
                border = CardDefaults.outlinedCardBorder()
            ) {
                Column {
                    listOf(
                        Triple(Icons.Default.MenuBook, "Kurslarim", "${enrolledIds.size} ta"),
                        Triple(Icons.Default.CheckCircle, "Tugatilgan darslar", "${completedIds.size} ta"),
                        Triple(Icons.Default.TrendingUp, "Umumiy progress", "$progressPercent%"),
                        Triple(Icons.Default.CalendarMonth, "Qo'shilgan sana", dateStr)
                    ).forEachIndexed { index, (icon, label, value) ->
                        Row(modifier = Modifier.fillMaxWidth().padding(16.dp),
                            verticalAlignment = Alignment.CenterVertically) {
                            Box(
                                modifier = Modifier.size(36.dp).clip(RoundedCornerShape(10.dp))
                                    .background(Primary.copy(alpha = 0.1f)),
                                contentAlignment = Alignment.Center
                            ) { Icon(icon, null, tint = Primary, modifier = Modifier.size(18.dp)) }
                            Spacer(Modifier.width(12.dp))
                            Text(label, modifier = Modifier.weight(1f), color = ForegroundColor,
                                fontWeight = FontWeight.Medium, fontSize = 14.sp)
                            Text(value, color = MutedForeground, fontWeight = FontWeight.SemiBold, fontSize = 14.sp)
                        }
                        if (index < 3) HorizontalDivider(modifier = Modifier.padding(start = 64.dp), color = BorderColor)
                    }
                }
            }
        }

        item {
            Column(modifier = Modifier.fillMaxWidth().padding(bottom = 8.dp),
                horizontalAlignment = Alignment.CenterHorizontally) {
                Text("Web Academy", color = MutedForeground, fontWeight = FontWeight.SemiBold, fontSize = 13.sp)
                Text("Versiya 1.0.0", color = MutedForeground, fontSize = 12.sp)
            }
        }
    }
}
