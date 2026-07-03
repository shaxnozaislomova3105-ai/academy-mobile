package uz.webacademy.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import uz.webacademy.app.ui.navigation.AppNavigation
import uz.webacademy.app.ui.theme.WebAcademyTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            WebAcademyTheme {
                AppNavigation()
            }
        }
    }
}
