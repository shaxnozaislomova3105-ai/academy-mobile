package uz.webacademy.app.ui.navigation

import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.BarChart
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.MenuBook
import androidx.compose.material.icons.filled.Person
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavType
import androidx.navigation.compose.*
import androidx.navigation.navArgument
import uz.webacademy.app.ui.screens.*
import uz.webacademy.app.ui.viewmodel.AcademyViewModel

sealed class Screen(val route: String) {
    object Home : Screen("home")
    object Courses : Screen("courses")
    object Activity : Screen("activity")
    object Profile : Screen("profile")
    object CourseDetail : Screen("course/{courseId}") {
        fun createRoute(courseId: String) = "course/$courseId"
    }
    object Lesson : Screen("lesson/{lessonId}") {
        fun createRoute(lessonId: String) = "lesson/$lessonId"
    }
}

data class BottomNavItem(val screen: Screen, val label: String, val icon: ImageVector)

val bottomNavItems = listOf(
    BottomNavItem(Screen.Home, "Bosh sahifa", Icons.Filled.Home),
    BottomNavItem(Screen.Courses, "Kurslar", Icons.Filled.MenuBook),
    BottomNavItem(Screen.Activity, "Faollik", Icons.Filled.BarChart),
    BottomNavItem(Screen.Profile, "Profil", Icons.Filled.Person)
)

@Composable
fun AppNavigation(vm: AcademyViewModel = viewModel()) {
    val navController = rememberNavController()
    val currentBackStack by navController.currentBackStackEntryAsState()
    val currentRoute = currentBackStack?.destination?.route

    val showBottomBar = currentRoute in listOf(
        Screen.Home.route, Screen.Courses.route, Screen.Activity.route, Screen.Profile.route
    )

    Scaffold(
        bottomBar = {
            if (showBottomBar) {
                NavigationBar {
                    bottomNavItems.forEach { item ->
                        NavigationBarItem(
                            selected = currentRoute == item.screen.route,
                            onClick = {
                                navController.navigate(item.screen.route) {
                                    popUpTo(Screen.Home.route) { saveState = true }
                                    launchSingleTop = true
                                    restoreState = true
                                }
                            },
                            icon = { Icon(item.icon, contentDescription = item.label) },
                            label = { Text(item.label, style = MaterialTheme.typography.labelMedium) }
                        )
                    }
                }
            }
        }
    ) { paddingValues ->
        NavHost(
            navController = navController,
            startDestination = Screen.Home.route,
            modifier = Modifier.padding(paddingValues)
        ) {
            composable(Screen.Home.route) {
                HomeScreen(vm = vm, onCourseClick = { id -> navController.navigate(Screen.CourseDetail.createRoute(id)) })
            }
            composable(Screen.Courses.route) {
                CoursesScreen(vm = vm, onCourseClick = { id -> navController.navigate(Screen.CourseDetail.createRoute(id)) })
            }
            composable(Screen.Activity.route) {
                ActivityScreen(vm = vm, onCourseClick = { id -> navController.navigate(Screen.CourseDetail.createRoute(id)) })
            }
            composable(Screen.Profile.route) {
                ProfileScreen(vm = vm)
            }
            composable(
                Screen.CourseDetail.route,
                arguments = listOf(navArgument("courseId") { type = NavType.StringType })
            ) { backStack ->
                val courseId = backStack.arguments?.getString("courseId") ?: return@composable
                CourseDetailScreen(
                    courseId = courseId, vm = vm,
                    onBack = { navController.popBackStack() },
                    onLessonClick = { lessonId -> navController.navigate(Screen.Lesson.createRoute(lessonId)) }
                )
            }
            composable(
                Screen.Lesson.route,
                arguments = listOf(navArgument("lessonId") { type = NavType.StringType })
            ) { backStack ->
                val lessonId = backStack.arguments?.getString("lessonId") ?: return@composable
                LessonScreen(
                    lessonId = lessonId, vm = vm,
                    onBack = { navController.popBackStack() }
                )
            }
        }
    }
}
