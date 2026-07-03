package uz.webacademy.app.ui.components

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import uz.webacademy.app.ui.theme.Dark
import uz.webacademy.app.ui.theme.Primary

@Composable
fun WALogo() {
    Column {
        Text(
            buildAnnotatedString {
                withStyle(SpanStyle(color = Primary, fontWeight = FontWeight.Bold)) { append("<") }
                withStyle(SpanStyle(color = Primary, fontWeight = FontWeight.ExtraBold)) { append("WA") }
                withStyle(SpanStyle(color = Primary, fontWeight = FontWeight.Bold)) { append(">") }
            },
            fontSize = 22.sp
        )
        Text(
            buildAnnotatedString {
                withStyle(SpanStyle(fontWeight = FontWeight.Bold)) { append("WEB") }
                append(" ")
                withStyle(SpanStyle(fontWeight = FontWeight.Normal)) { append("ACADEMY") }
            },
            color = Dark, fontSize = 10.sp, letterSpacing = 1.sp
        )
    }
}
