package uz.webacademy.app.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable

private val LightColorScheme = lightColorScheme(
    primary = Primary,
    onPrimary = CardColor,
    secondary = Dark,
    onSecondary = CardColor,
    background = Background,
    onBackground = ForegroundColor,
    surface = CardColor,
    onSurface = ForegroundColor,
    surfaceVariant = Background,
    outline = BorderColor,
    error = ErrorColor
)

@Composable
fun WebAcademyTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = LightColorScheme,
        typography = Typography,
        content = content
    )
}
