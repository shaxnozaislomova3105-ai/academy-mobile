package uz.webacademy.app.data

val COURSES: List<Course> = listOf(
    Course(
        id = "html-basics", title = "HTML Asoslari",
        description = "HTML tilini noldan o'rganing. Teglar, atributlar, formalar va zamonaviy HTML5 elementlari.",
        category = "HTML", level = "Boshlang'ich", duration = "5 soat", lessonsCount = 14,
        color = "#E44D26", instructor = "Web Academy jamoasi", rating = 4.9,
        studentsCount = 5420, isPremium = false,
        topics = listOf("HTML5", "Teglar", "Atributlar", "Formalar", "Semantik HTML"),
        lessons = listOf(
            Lesson("hb-1","html-basics","HTML nima?","7 daqiqa","HTML ning tarixi va asosiy maqsadi",
                "HTML (HyperText Markup Language) — veb sahifalarni yaratish uchun ishlatiladigan standart belgilash tili. 1991-yilda Tim Berners-Lee tomonidan yaratilgan.\n\n**HTML nimadan iborat:**\n- Element — sahifaning qurilish bloki\n- Teg — elementni belgilaydi: `<p>`, `<h1>`, `<div>`\n- Atribut — elementga qo'shimcha ma'lumot: `class`, `id`, `href`\n- Tarkib — element ichidagi ma'lumot",
                1, "video", "https://www.youtube.com/watch?v=mbeT8mpmtHA", emptyList(),
                listOf(
                    QuizQuestion("HTML nimaning qisqartmasi?", listOf("HyperText Markup Language","High Tech Modern Language","HyperText Machine Learning","Home Tool Markup Language"), 0, "HTML — HyperText Markup Language. 1991-yilda Tim Berners-Lee tomonidan yaratilgan."),
                    QuizQuestion("HTML da 'element' nima?", listOf("Faqat teg","Sahifaning qurilish bloki","CSS uslubi","JavaScript kodi"), 1, "Element — HTML ning asosiy qurilish bloki. Teg, atribut va tarkibdan iborat."),
                    QuizQuestion("Kim HTML ni yaratgan?", listOf("Bill Gates","Tim Berners-Lee","Brendan Eich","Linus Torvalds"), 1, "Tim Berners-Lee 1991-yilda HTML ni ixtiro qildi.")
                )
            ),
            Lesson("hb-2","html-basics","HTML hujjat tuzilmasi","10 daqiqa","DOCTYPE, html, head, body elementlari",
                "Har bir to'g'ri HTML sahifasi quyidagi asosiy tuzilmaga ega bo'lishi kerak:\n\n```html\n<!DOCTYPE html>\n<html lang=\"uz\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Sahifa nomi</title>\n</head>\n<body>\n  <h1>Salom Dunyo!</h1>\n</body>\n</html>\n```\n\n**Muhim elementlar:**\n- `<!DOCTYPE html>` — HTML5 standartini bildiradi\n- `<head>` — meta ma'lumotlar\n- `<body>` — foydalanuvchi ko'radigan kontent",
                2, "video", "https://www.youtube.com/watch?v=oEKXn94CBMM", emptyList(),
                listOf(
                    QuizQuestion("<!DOCTYPE html> nima vazifasini bajaradi?", listOf("Sahifa nomi","HTML5 standartini brauzerga bildiradi","CSS faylni ulaydi","JavaScript ni yoqadi"), 1, "<!DOCTYPE html> — bu hujjat HTML5 formatida ekanligini brauzerga bildiradi."),
                    QuizQuestion("<body> elementi nima uchun?", listOf("Sahifa sozlamalari","Foydalanuvchi ko'radigan barcha kontent","JavaScript kodi","Meta teglar"), 1, "<body> — brauzerda ko'rinadigan barcha kontent.")
                )
            ),
            Lesson("hb-3","html-basics","Sarlavhalar va paragraflar","8 daqiqa","h1-h6, p, br, hr elementlari",
                "Matn tuzilmasini yaratish uchun sarlavha va paragraf elementlaridan foydalanamiz.\n\n```html\n<h1>Asosiy sarlavha</h1>\n<h2>Kichik sarlavha</h2>\n<p>Bu oddiy paragraf matni.</p>\n<hr>\n```\n\n**Eslatma:** `<h1>` har bir sahifada faqat bir marta ishlatilishi kerak — SEO uchun muhim!",
                3, "article", null, emptyList(),
                listOf(
                    QuizQuestion("HTML da nechta sarlavha darajasi bor?", listOf("3 ta","5 ta","6 ta","8 ta"), 2, "HTML da h1 dan h6 gacha — jami 6 ta sarlavha darajasi bor."),
                    QuizQuestion("<br> tegi nima qiladi?", listOf("Gorizontal chiziq chizadi","Yangi qator yaratadi","Paragraf ochadi","Bold qiladi"), 1, "<br> — qatorni uzib, keyingi matnni yangi qatordan boshlaydi.")
                )
            ),
            Lesson("hb-4","html-basics","Havolalar","9 daqiqa","a tegi, href, target atributlari",
                "Havolalar web ning asosi — sahifalarni bir-biriga bog'laydi.\n\n```html\n<a href=\"https://webacademy.uz\">Web Academy</a>\n<a href=\"https://google.com\" target=\"_blank\" rel=\"noopener\">Google</a>\n<a href=\"mailto:info@webacademy.uz\">Xat yozing</a>\n```",
                4, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Havola yaratish uchun qaysi teg ishlatiladi?", listOf("<link>","<url>","<a>","<nav>"), 2, "<a href='...'>Matn</a> — anchor tegi."),
                    QuizQuestion("target='_blank' nima qiladi?", listOf("Havolani o'chiradi","Havolani yangi oynada ochadi","Havolani yashiradi","Havolani yuklab oladi"), 1, "target='_blank' — havolani yangi brauzer oynasida ochadi.")
                )
            ),
            Lesson("hb-5","html-basics","Rasmlar","8 daqiqa","img tegi, src, alt, width, height",
                "```html\n<img src=\"rasm.jpg\" alt=\"Rasm tavsifi\" width=\"400\" height=\"300\">\n<img src=\"./images/logo.png\" alt=\"Logo\">\n```\n\n**`alt` atributi nima uchun muhim?**\n- Ko'zi ojiz foydalanuvchilar uchun\n- Rasm yuklanmasa ko'rsatiladi\n- SEO uchun foydali",
                5, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Rasm qo'shish uchun qaysi teg ishlatiladi?", listOf("<picture>","<image>","<img>","<photo>"), 2, "<img src='...' alt='...'> — rasm qo'shish tegi."),
                    QuizQuestion("alt atributi nima uchun kerak?", listOf("Rasmni kattalashtirish","Ko'zi ojiz foydalanuvchilar va rasm yuklanmasa chiqadigan matn","Rasmni animatsiya qilish","Rasmga rang berish"), 1, "alt — alternative text.")
                )
            ),
            Lesson("hb-6","html-basics","Ro'yxatlar","7 daqiqa","ul, ol, li elementlari",
                "```html\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>\n<ol>\n  <li>Birinchi qadam</li>\n  <li>Ikkinchi qadam</li>\n</ol>\n```",
                6, "article", null, emptyList(),
                listOf(
                    QuizQuestion("<ul> va <ol> farqi nima?", listOf("Hech qanday farq yo'q","<ul> raqamsiz, <ol> raqamlangan ro'yxat","<ol> raqamsiz, <ul> raqamlangan ro'yxat","Ikkalasi ham raqamlangan"), 1, "<ul> — unordered list, <ol> — ordered list."),
                    QuizQuestion("Ro'yxat elementi uchun qaysi teg ishlatiladi?", listOf("<list>","<item>","<li>","<el>"), 2, "<li> — list item.")
                )
            ),
            Lesson("hb-7","html-basics","Jadvallar","11 daqiqa","table, tr, th, td elementlari",
                "```html\n<table>\n  <thead>\n    <tr><th>Ism</th><th>Yosh</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Ali</td><td>25</td></tr>\n  </tbody>\n</table>\n```",
                7, "article", null, emptyList(),
                listOf(
                    QuizQuestion("HTML jadvalida qator yaratish uchun qaysi teg?", listOf("<td>","<tr>","<row>","<th>"), 1, "<tr> — table row."),
                    QuizQuestion("<th> va <td> farqi nima?", listOf("Hech qanday farq yo'q","<th> sarlavha (bold, markazda), <td> oddiy ma'lumot","<td> sarlavha, <th> ma'lumot","<th> katta, <td> kichik"), 1, "<th> — table header, qalin va markazlashgan.")
                )
            ),
            Lesson("hb-8","html-basics","Formalar — 1-qism","14 daqiqa","form, input, label, button elementlari",
                "```html\n<form action=\"/submit\" method=\"POST\">\n  <label for=\"name\">Ism:</label>\n  <input type=\"text\" id=\"name\" name=\"name\" required>\n  <input type=\"email\" id=\"email\" name=\"email\" required>\n  <button type=\"submit\">Yuborish</button>\n</form>\n```",
                8, "article", null, emptyList(),
                listOf(
                    QuizQuestion("required atributi nima qiladi?", listOf("Maydonni ko'k qiladi","Maydon to'ldirilishi majburiy bo'ladi","Maydonni yashiradi","Maydon bloklanadi"), 1, "required — forma yuborishdan oldin bu maydon to'ldirilishi shartligini bildiradi."),
                    QuizQuestion("input type='email' nima qiladi?", listOf("Faqat email yuboradi","Email formatini tekshiradi","Email yashiradi","Email ochadi"), 1, "type='email' — brauzer @ belgisi va to'g'ri formatni tekshiradi.")
                )
            ),
            Lesson("hb-9","html-basics","Formalar — 2-qism","12 daqiqa","select, textarea, checkbox, radio",
                "```html\n<select name=\"city\">\n  <option value=\"tashkent\">Toshkent</option>\n  <option value=\"samarkand\">Samarqand</option>\n</select>\n<textarea name=\"message\" rows=\"4\"></textarea>\n<input type=\"checkbox\" id=\"agree\"><label for=\"agree\">Roziman</label>\n<input type=\"radio\" name=\"gender\" value=\"male\"><label>Erkak</label>\n```",
                9, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Checkbox va Radio button farqi nima?", listOf("Hech qanday farq yo'q","Checkbox bir nechta, radio faqat bitta tanlanadi","Radio bir nechta, checkbox faqat bitta tanlanadi","Ikkalasi ham bitta tanlanadi"), 1, "Checkbox — bir nechta tanlash mumkin. Radio — faqat bitta.")
                )
            ),
            Lesson("hb-10","html-basics","Semantik HTML","13 daqiqa","header, nav, main, section, article, footer",
                "Semantik elementlar sahifaning ma'nosini bildiradi.\n\n```html\n<header>\n  <nav>...</nav>\n</header>\n<main>\n  <section>\n    <article>...</article>\n  </section>\n</main>\n<footer>...</footer>\n```",
                10, "article", null, emptyList(),
                listOf(
                    QuizQuestion("<header> va <div id='header'> farqi nima?", listOf("Hech qanday farq yo'q","<header> semantik — ma'nosi bor, div faqat vizual","<div> yaxshiroq","<header> katta hajm oladi"), 1, "<header> — semantik teg, brauzer va qidiruv tizimlari ma'nosini tushunadi."),
                    QuizQuestion("<main> elementi sahifada necha marta ishlatiladi?", listOf("Xohlagancha","Faqat 1 marta","2 marta","Kamida 3 marta"), 1, "<main> — sahifaning asosiy kontenti. Faqat 1 marta bo'lishi kerak.")
                )
            ),
            Lesson("hb-11","html-basics","Audio va Video","9 daqiqa","audio, video, source elementlari",
                "```html\n<video width=\"640\" controls>\n  <source src=\"video.mp4\" type=\"video/mp4\">\n</video>\n<audio controls>\n  <source src=\"audio.mp3\" type=\"audio/mpeg\">\n</audio>\n<iframe src=\"https://www.youtube.com/embed/VIDEO_ID\" allowfullscreen></iframe>\n```",
                11, "article", null, emptyList(),
                listOf(
                    QuizQuestion("<video> tegida controls atributi nima qiladi?", listOf("Videoni auto ijro qiladi","Play/pause, ovoz tugmalarini ko'rsatadi","Videoni yashiradi","Video sifatini belgilaydi"), 1, "controls — brauzerning standart video boshqarish panelini ko'rsatadi.")
                )
            ),
            Lesson("hb-12","html-basics","Meta teglar va SEO","10 daqiqa","meta, title, og: teglar",
                "```html\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"Sayt tavsifi\">\n  <meta property=\"og:title\" content=\"Sahifa nomi\">\n  <title>Web Academy</title>\n</head>\n```",
                12, "article", null, emptyList(),
                listOf(
                    QuizQuestion("viewport meta tegi nima uchun?", listOf("Sahifa ko'rinishini belgilash","Mobil qurilmalarda sahifani to'g'ri o'lchamda ko'rsatish","Videoni sozlash","Rasmlarni yuklash"), 1, "viewport meta — sahifani mobil qurilma ekraniga moslashtiради.")
                )
            ),
            Lesson("hb-13","html-basics","HTML5 yangiliklari","11 daqiqa","Canvas, SVG, data-* atributlari",
                "```html\n<canvas id=\"myCanvas\" width=\"400\" height=\"200\"></canvas>\n<svg width=\"100\" height=\"100\">\n  <circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"#00BCD4\" />\n</svg>\n<div data-user-id=\"123\" data-role=\"admin\">Foydalanuvchi</div>\n<input type=\"range\" min=\"0\" max=\"100\" value=\"50\">\n```",
                13, "article", null, emptyList(),
                listOf(
                    QuizQuestion("data-* atributlari nima uchun?", listOf("CSS uchun","HTML elementlarga maxsus ma'lumot saqlash uchun","JavaScript ni o'chirish uchun","Server uchun"), 1, "data-* — foydalanuvchi tomonidan belgilanadigan ma'lumot atributlari.")
                )
            ),
            Lesson("hb-14","html-basics","Yakuniy loyiha","25 daqiqa","To'liq HTML sahifasi yaratish",
                "Barcha o'rganganlaringizni birlashtirib, to'liq HTML sahifasi yarating.\n\n**Loyiha: Shaxsiy portfolio sahifasi**\n\nTarkib:\n- `<header>` — navigatsiya\n- Hero section — sarlavha va tavsif\n- Ko'nikmalar bo'limi\n- Loyihalar bo'limi\n- Bog'lanish formasi\n- `<footer>`\n\nBu loyiha CV ga qo'shsa bo'ladigan real ish bo'ladi!",
                14, "article", null,
                listOf(LessonLink("HTML5 UP — Bepul HTML shablonlar","https://html5up.net"), LessonLink("freeCodeCamp","https://www.freecodecamp.org")),
                listOf(
                    QuizQuestion("HTML da eng katta sarlavha tegi qaysi?", listOf("<h6>","<h1>","<header>","<title>"), 1, "<h1> — eng katta va muhim sarlavha."),
                    QuizQuestion("<div> va <span> farqi nima?", listOf("Hech qanday farq yo'q","<div> blok, <span> inline element","<span> blok, <div> inline element","<div> faqat matn uchun"), 1, "<div> — blok element, <span> — inline element.")
                )
            )
        )
    ),

    Course(
        id = "css-basics", title = "CSS Asoslari",
        description = "CSS bilan veb-sahifalarni bezang. Ranglar, shriftlar, qutilar modeli va layout.",
        category = "CSS", level = "Boshlang'ich", duration = "6 soat", lessonsCount = 12,
        color = "#264DE4", instructor = "Web Academy jamoasi", rating = 4.9,
        studentsCount = 4980, isPremium = false,
        topics = listOf("Selektorlar", "Box Model", "Flexbox", "Grid", "Animatsiya"),
        lessons = listOf(
            Lesson("cb-1","css-basics","CSS ga kirish","9 daqiqa","CSS nima, qanday ishlaydi",
                "CSS (Cascading Style Sheets) — HTML elementlarini qanday ko'rinishi kerakligini belgilovchi tizim.\n\n```css\np { color: teal; font-size: 18px; }\n.card { border-radius: 12px; background: white; }\n#header { background: #00BCD4; }\n```\n\n**3 ta uslash usuli:** Inline, Internal, External (tavsiya etiladi)",
                1, "video", "https://www.youtube.com/watch?v=yfoY53QXEnI", emptyList(),
                listOf(
                    QuizQuestion("CSS nimaning qisqartmasi?", listOf("Creative Style System","Cascading Style Sheets","Computer Style Syntax","Custom Style Sheets"), 1, "CSS — Cascading Style Sheets."),
                    QuizQuestion("CSS ni qo'shishning eng tavsiya etilgan usuli?", listOf("Inline style","Internal style teg","Tashqi .css fayl","JavaScript orqali"), 2, "Tashqi CSS fayli — eng yaxshi usul.")
                )
            ),
            Lesson("cb-2","css-basics","Selektorlar","14 daqiqa","Element, class, id, pseudo-class",
                "```css\np { color: navy; }\n.card { border-radius: 12px; }\n#header { background: #00BCD4; }\na:hover { color: teal; }\ninput:focus { border-color: #00BCD4; }\nli:first-child { font-weight: bold; }\n```",
                2, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Class selektori qanday yoziladi?", listOf("#card",".card","card","*card"), 1, ".card — nuqta bilan boshlanadi."),
                    QuizQuestion("ID selektori qanday yoziladi?", listOf(".header","#header","header!","@header"), 1, "#header — panjara (#) bilan boshlanadi.")
                )
            ),
            Lesson("cb-3","css-basics","Box Model","12 daqiqa","margin, padding, border, width, height",
                "```css\n.box {\n  width: 300px;\n  height: 200px;\n  padding: 20px;\n  border: 2px solid #00BCD4;\n  margin: 16px;\n  box-sizing: border-box;\n}\n```\n\n**box-sizing: border-box** — width ichiga padding va border kiritiladi. Har doim ishlatish tavsiya etiladi!",
                3, "article", null, emptyList(),
                listOf(
                    QuizQuestion("box-sizing: border-box nima qiladi?", listOf("Qutini o'chiradi","Width ichiga padding va border kiritiladi","Faqat border o'lchamini belgilaydi","Margin ni o'zgartiradi"), 1, "border-box — jami kenglikka padding va border ham kiritiladi.")
                )
            ),
            Lesson("cb-4","css-basics","Flexbox","18 daqiqa","display flex, justify-content, align-items",
                "```css\n.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.item { flex: 1; min-width: 200px; }\n```\n\n**Asosiy xususiyatlar:**\n- `justify-content` — gorizontal joylashuv\n- `align-items` — vertikal joylashuv\n- `flex-wrap` — qatorga o'rash",
                4, "article", null, emptyList(),
                listOf(
                    QuizQuestion("justify-content nima boshqaradi?", listOf("Vertikal joylashuv","Gorizontal joylashuv","Element o'lchami","Rang"), 1, "justify-content — asosiy o'q bo'yicha (gorizontal) joylashuvni boshqaradi."),
                    QuizQuestion("align-items nima boshqaradi?", listOf("Gorizontal joylashuv","Ko'ndalang o'q bo'yicha vertikal joylashuv","Element rangi","Shrift o'lchami"), 1, "align-items — ko'ndalang o'q bo'yicha joylashuvni boshqaradi.")
                )
            ),
            Lesson("cb-5","css-basics","CSS Grid","20 daqiqa","grid-template-columns, grid-gap",
                "```css\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n.card { grid-column: span 2; }\n\n/* Responsive grid */\n@media (max-width: 768px) {\n  .grid { grid-template-columns: 1fr; }\n}\n```",
                5, "article", null, emptyList(),
                listOf(
                    QuizQuestion("repeat(3, 1fr) nima bildiradi?", listOf("3 ta qator","3 ta teng kenglikdagi ustun","3 piksel kenglik","3 ta gap"), 1, "repeat(3, 1fr) — 3 ta teng bo'lingan ustun yaratadi.")
                )
            ),
            Lesson("cb-6","css-basics","Ranglar va shriftlar","11 daqiqa","color, font-family, font-size",
                "```css\nbody {\n  font-family: 'Inter', sans-serif;\n  font-size: 16px;\n  color: #0A1628;\n}\n.primary { color: #00BCD4; }\n.bg-primary { background-color: rgba(0, 188, 212, 0.1); }\n@import url('https://fonts.googleapis.com/css2?family=Inter');\n```",
                6, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Google Fonts ni CSS ga ulash usuli?", listOf("<font src=''>","@import url(...)","font-family: google","CSS ichida @google"), 1, "@import url('fonts.googleapis.com/...') — CSS da Google Fonts ulash.")
                )
            ),
            Lesson("cb-7","css-basics","Pozitsiyalash","16 daqiqa","position: relative, absolute, fixed, sticky",
                "```css\n.relative { position: relative; }\n.absolute { position: absolute; top: 10px; right: 10px; }\n.fixed { position: fixed; bottom: 20px; right: 20px; }\n.sticky { position: sticky; top: 0; }\n```\n\n**Qo'llanish joylari:**\n- fixed: top navigation, floating button\n- sticky: jadval sarlavhalari\n- absolute: badge, tooltip",
                7, "article", null, emptyList(),
                listOf(
                    QuizQuestion("position: fixed nima qiladi?", listOf("Elementni o'rnida qoldiradi","Elementni brauzer oynasiga nisbatan mahkamlaydi","Elementni o'chiradi","Elementni ko'rinmas qiladi"), 1, "fixed — brauzer oynasiga nisbatan mahkamlangan, scroll qilsa ham o'rnidan qo'zg'almaydi.")
                )
            ),
            Lesson("cb-8","css-basics","CSS Animatsiyalar","17 daqiqa","transition, animation, keyframes",
                "```css\n.btn {\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  background: #0097A7;\n  transform: translateY(-2px);\n}\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n.card { animation: fadeIn 0.5s ease-out; }\n```",
                8, "article", null, emptyList(),
                listOf(
                    QuizQuestion("transition nima qiladi?", listOf("Animatsiya yaratadi","CSS xususiyat o'zgarishini silliq qiladi","Elementni o'chiradi","Rang o'zgartiradi"), 1, "transition — CSS xususiyatlar o'zgarishi animatsiyasini belgilaydi.")
                )
            ),
            Lesson("cb-9","css-basics","Responsive dizayn","15 daqiqa","Media queries, mobile-first",
                "```css\n/* Mobile first */\n.container { padding: 16px; }\n\n@media (min-width: 768px) {\n  .container { padding: 32px; }\n  .grid { grid-template-columns: repeat(2, 1fr); }\n}\n@media (min-width: 1024px) {\n  .grid { grid-template-columns: repeat(3, 1fr); }\n}\n```",
                9, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Mobile-first yondashuvi nima bildiradi?", listOf("Faqat mobil versiya yaratish","Mobil versiyadan boshlab, katta ekranlar uchun qo'shimcha stil qo'shish","Desktop dan boshlab mobil ga kichraytirish","JavaScript bilan mobil aniqlash"), 1, "Mobile-first — avval mobil uchun stil yoziladi, keyin media query bilan katta ekranlar.")
                )
            ),
            Lesson("cb-10","css-basics","CSS o'zgaruvchilari","10 daqiqa","Custom Properties (CSS Variables)",
                "```css\n:root {\n  --primary: #00BCD4;\n  --dark: #1A3A5C;\n  --bg: #F4F6F9;\n  --border-radius: 12px;\n}\n.btn { background: var(--primary); border-radius: var(--border-radius); }\n.dark-mode { --primary: #0097A7; --bg: #1A1A2E; }\n```",
                10, "article", null, emptyList(),
                listOf(
                    QuizQuestion("CSS o'zgaruvchisi qanday e'lon qilinadi?", listOf("$primary: red","--primary: red","var-primary: red","@primary: red"), 1, "--primary: #00BCD4 — CSS custom property e'lon qilish sintaksisi.")
                )
            ),
            Lesson("cb-11","css-basics","Pseudo-elementlar","12 daqiqa","::before, ::after, ::placeholder",
                "```css\n.card::before {\n  content: '';\n  display: block;\n  width: 4px;\n  background: #00BCD4;\n}\n.input::placeholder { color: #8A9BB0; font-style: italic; }\n.text::first-letter { font-size: 2em; font-weight: bold; }\n```",
                11, "article", null, emptyList(),
                listOf(
                    QuizQuestion("::before pseudo-elementi qanday ishlaydi?", listOf("Elementdan oldingi elementni tanlaydi","Elementning birinchi bolasidan oldin kontent qo'shadi","Elementni o'chiradi","Elementni ko'paytiradi"), 1, "::before — elementning content xususiyati orqali birinchi bolasidan oldin kontent qo'shadi.")
                )
            ),
            Lesson("cb-12","css-basics","Yakuniy loyiha: Landing Page","30 daqiqa","To'liq CSS bilan sayt bezash",
                "Barcha o'rganilganlarni ishlatib, professional landing page yaratasiz.\n\n**Loyiha tarkibi:**\n- Sticky header + navigatsiya\n- Hero section (gradient background)\n- Xizmatlar (CSS Grid)\n- Testimonials (Flexbox)\n- Aloqa formasi\n- Footer\n\n**Ishlatadigan texnologiyalar:** Flexbox, Grid, Animatsiyalar, Variables, Responsive",
                12, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Flexbox va Grid qachon ishlatiladi?", listOf("Ikkalasi ham bir xil","Flexbox 1D (satr/ustun), Grid 2D (satr va ustun)","Grid faqat rasmlar uchun","Flexbox faqat navigatsiya uchun"), 1, "Flexbox — bir o'lchamli tartib (satr yoki ustun), Grid — ikki o'lchamli (satr va ustun).")
                )
            )
        )
    ),

    Course(
        id = "js-basics", title = "JavaScript Asoslari",
        description = "JavaScript tilini o'rganing. O'zgaruvchilar, funksiyalar, DOM va asinxron dasturlash.",
        category = "JavaScript", level = "Boshlang'ich", duration = "8 soat", lessonsCount = 16,
        color = "#F7DF1E", instructor = "Web Academy jamoasi", rating = 4.9,
        studentsCount = 6830, isPremium = false,
        topics = listOf("O'zgaruvchilar", "Funksiyalar", "DOM", "ES6+", "Async/Await"),
        lessons = listOf(
            Lesson("js-1","js-basics","JavaScript nima?","8 daqiqa","JS tarixi, brauzerda ishlash",
                "JavaScript — brauzerda va server (Node.js) da ishlaydigan dasturlash tili.\n\n```html\n<script>\n  console.log('Salom Dunyo!');\n  alert('JavaScript ishlayapti!');\n</script>\n<script src=\"script.js\"></script>\n```\n\n**JS nima qila oladi?**\n- Sahifani dinamik o'zgartirish\n- Foydalanuvchi bilan o'zaro ta'sir\n- Server bilan ma'lumot almashish\n- Animatsiya va effektlar",
                1, "video", "https://www.youtube.com/watch?v=W6NZfCO5SIk", emptyList(),
                listOf(
                    QuizQuestion("JavaScript qayerda ishlaydi?", listOf("Faqat brauzerda","Brauzer va Node.js (server) da","Faqat serverda","Faqat mobil qurilmalarda"), 1, "JavaScript brauzerda (frontend) va Node.js orqali serverda (backend) ishlaydi."),
                    QuizQuestion("console.log() nima qiladi?", options = listOf("Ekranga chiqaradi","Konsolga chiqaradi","Faylga yozadi","Serverga yuboradi"), correct = 1, explanation = "console.log() — brauzer konsoliga ma'lumot chiqaradi. Debug qilish uchun ishlatiladi.")
                )
            ),
            Lesson("js-2","js-basics","O'zgaruvchilar","12 daqiqa","let, const, var farqlari",
                "```js\nconst name = 'Ali';     // o'zgarmas\nlet age = 25;           // o'zgaruvchan\nlet score;              // undefined\n\nconst PI = 3.14159;\n// PI = 3; // Error!\n\nconst user = { name: 'Ali' };\nuser.name = 'Vali';     // bu mumkin!\n```\n\n**Qoida:** Har doim `const` dan boshlang, kerak bo'lsa `let` ga o'ting. `var` dan foydalanmang.",
                2, "article", null, emptyList(),
                listOf(
                    QuizQuestion("const o'zgaruvchisi haqida nima to'g'ri?", listOf("Qayta belgilanishi mumkin","Qayta belgilanishi mumkin emas","var bilan bir xil","Faqat sonlar uchun"), 1, "const — qayta belgilanishi mumkin emas. Lekin ob'ekt/massiv ichidagi qiymatlar o'zgarishi mumkin."),
                    QuizQuestion("Qaysi e'lon usuli tavsiya etiladi?", listOf("var","let","const (va kerak bo'lsa let)","Barchasi teng"), 2, "const — o'zgarmas qiymatlar uchun, let — o'zgaruvchan uchun. var ishlatmang.")
                )
            ),
            Lesson("js-3","js-basics","Ma'lumot turlari","14 daqiqa","String, Number, Boolean, Array, Object",
                "```js\n// Primitive\nconst name = 'Ali';       // String\nconst age = 25;           // Number\nconst isActive = true;    // Boolean\nconst nothing = null;     // Null\n\n// Complex\nconst colors = ['red', 'green', 'blue'];\nconst user = { name: 'Ali', age: 25, active: true };\n\nconsole.log(typeof name);   // 'string'\nconsole.log(typeof age);    // 'number'\nconsole.log(Array.isArray(colors)); // true\n```",
                3, "article", null, emptyList(),
                listOf(
                    QuizQuestion("typeof null natijasi nima?", listOf("'null'","'undefined'","'object'","'boolean'"), 2, "typeof null === 'object' — bu JavaScript dagi mashxur xato. null aslida primitiv qiymat."),
                    QuizQuestion("Array.isArray([]) natijasi?", listOf("false","true","undefined","error"), 1, "Array.isArray() — massivmi yoki yo'qmi tekshiradi. [] — bo'sh massiv, true qaytaradi.")
                )
            ),
            Lesson("js-4","js-basics","Funksiyalar","15 daqiqa","function, arrow function, parametrlar",
                "```js\n// Oddiy funksiya\nfunction greet(name) {\n  return `Salom, ${name}!`;\n}\n\n// Arrow funksiya\nconst add = (a, b) => a + b;\n\n// Default parametr\nconst greetUser = (name = 'Mehmon') => `Xush kelibsiz, ${name}!`;\n\n// Rest parametr\nconst sum = (...nums) => nums.reduce((a, b) => a + b, 0);\nconsole.log(sum(1, 2, 3, 4)); // 10\n```",
                4, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Arrow function va oddiy funksiya asosiy farqi?", listOf("Hech qanday farq yo'q","Arrow function o'z this kontekstiga ega emas","Arrow function tezroq ishlaydi","Arrow function parametr qabul qilmaydi"), 1, "Arrow function — o'z this kontekstini yaratmaydi, har doim tashqi this ni ishlatadi."),
                    QuizQuestion("Default parametr nima?", listOf("Majburiy parametr","Argument berilmasa ishlatiladigan standart qiymat","Array parametr","Object parametr"), 1, "Default parametr — argument berilmasa avtomatik ishlatiladi: function(name = 'default').")
                )
            ),
            Lesson("js-5","js-basics","DOM bilan ishlash","20 daqiqa","querySelector, addEventListener, innerHTML",
                "```js\n// Element tanlash\nconst btn = document.querySelector('#myBtn');\nconst items = document.querySelectorAll('.item');\n\n// Kontent o'zgartirish\nbtn.textContent = 'Yangi matn';\ndocument.querySelector('h1').innerHTML = '<em>Kursiv</em>';\n\n// Stil o'zgartirish\nbtn.style.backgroundColor = '#00BCD4';\nbtn.classList.add('active');\nbtn.classList.toggle('hidden');\n\n// Event tinglash\nbtn.addEventListener('click', () => {\n  console.log('Tugma bosildi!');\n});\n```",
                5, "video", "https://www.youtube.com/watch?v=0ik6X4DJKCc", emptyList(),
                listOf(
                    QuizQuestion("querySelector va querySelectorAll farqi?", listOf("Hech qanday farq yo'q","querySelector bitta, querySelectorAll barcha moslarni qaytaradi","querySelectorAll bitta qaytaradi","querySelector id uchun, querySelectorAll class uchun"), 1, "querySelector — birinchi mos elementni, querySelectorAll — barcha mos elementlarni NodeList da qaytaradi."),
                    QuizQuestion("addEventListener('click', fn) nima qiladi?", listOf("Elementni o'chiradi","Tugma bosilganda fn funksiyasini chaqiradi","CSS qo'shadi","Serverga so'rov yuboradi"), 1, "addEventListener — hodisa (event) uchun tinglaydi va hodisa bo'lganda callback funksiyani chaqiradi.")
                )
            ),
            Lesson("js-6","js-basics","Massivlar (Arrays)","16 daqiqa","map, filter, reduce, find, forEach",
                "```js\nconst nums = [1, 2, 3, 4, 5];\n\n// map — har elementni o'zgartiradi\nconst doubled = nums.map(n => n * 2); // [2,4,6,8,10]\n\n// filter — shartga mos elementlar\nconst evens = nums.filter(n => n % 2 === 0); // [2,4]\n\n// reduce — bitta qiymatga kamaytiradi\nconst sum = nums.reduce((acc, n) => acc + n, 0); // 15\n\n// find — birinchi mos elementni topadi\nconst found = nums.find(n => n > 3); // 4\n\n// forEach — har elementga amal qiladi\nnums.forEach(n => console.log(n));\n```",
                6, "article", null, emptyList(),
                listOf(
                    QuizQuestion("map() metodi nima qaytaradi?", listOf("Asl massivni o'zgartiradi","Yangi o'zgartirilgan massiv qaytaradi","Bitta qiymat qaytaradi","Hech narsa qaytarmaydi"), 1, "map() — asl massivni o'zgartirmaydi, yangi massiv qaytaradi."),
                    QuizQuestion("filter() metodi nima qiladi?", listOf("Massivni saralaydi","Shartga mos elementlardan yangi massiv hosil qiladi","Birinchi mos elementni topadi","Massivdan element o'chiradi"), 1, "filter() — callback true qaytargan elementlardan yangi massiv hosil qiladi.")
                )
            ),
            Lesson("js-7","js-basics","Ob'ektlar","14 daqiqa","Ob'ekt yaratish, destructuring, spread",
                "```js\nconst user = { name: 'Ali', age: 25, city: 'Toshkent' };\n\n// Destructuring\nconst { name, age } = user;\nconst { city: shahar } = user; // alias\n\n// Spread\nconst updatedUser = { ...user, age: 26, email: 'ali@test.com' };\n\n// Optional chaining\nconsole.log(user?.address?.street); // undefined (xato emas)\n\n// Object methods\nconst keys = Object.keys(user);     // ['name','age','city']\nconst values = Object.values(user); // ['Ali',25,'Toshkent']\n```",
                7, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Destructuring nima?", listOf("Ob'ektni o'chirish","Ob'ektdan qiymatlarni o'zgaruvchilarga chiqarish","Ob'ektni nusxalash","Ob'ektni massivga aylantirish"), 1, "Destructuring — ob'ekt yoki massivdan qiymatlarni qulay usulda chiqarish."),
                    QuizQuestion("Spread operator (...) nima qiladi?", listOf("Ob'ektni o'chiradi","Ob'ekt/massiv elementlarini yoyadi","Massiv uzunligini hisoblaydi","Element qo'shadi"), 1, "Spread operator — ob'ekt yoki massiv elementlarini tarqatadi yoki nusxalaydi.")
                )
            ),
            Lesson("js-8","js-basics","Async/Await va Fetch","18 daqiqa","Promise, async/await, API chaqiruvi",
                "```js\n// Promise\nconst fetchData = () => {\n  return fetch('https://api.example.com/users')\n    .then(res => res.json())\n    .then(data => console.log(data))\n    .catch(err => console.error(err));\n};\n\n// Async/Await (tavsiya etiladi)\nasync function getUsers() {\n  try {\n    const res = await fetch('https://api.example.com/users');\n    const data = await res.json();\n    return data;\n  } catch (error) {\n    console.error('Xato:', error);\n  }\n}\n```",
                8, "article", null, emptyList(),
                listOf(
                    QuizQuestion("async/await nima uchun ishlatiladi?", listOf("Tezroq kod yozish","Asinxron kodni sinxron ko'rinishda yozish","Xatolarni bartaraf qilish","Funksiyani tezlashtirish"), 1, "async/await — Promise asosidagi asinxron kodni o'qilishi oson sinxron ko'rinishda yozish imkonini beradi."),
                    QuizQuestion("fetch() nima qaytaradi?", listOf("To'g'ridan-to'g'ri ma'lumot","Promise ob'ekti","JSON ma'lumot","Massiv"), 1, "fetch() — Promise qaytaradi. .then() yoki await bilan natijani olish kerak.")
                )
            ),
            Lesson("js-9","js-basics","ES6+ Yangiliklari","13 daqiqa","Template literals, modules, classes",
                "```js\n// Template literal\nconst msg = `Salom, ${name}! Sizning yoshingiz ${age}.`;\n\n// Class\nclass Animal {\n  constructor(name) { this.name = name; }\n  speak() { return `${this.name} ovoz chiqaradi`; }\n}\nclass Dog extends Animal {\n  speak() { return `${this.name} vovvoy deydi`; }\n}\n\n// Modules\nexport const PI = 3.14;\nexport default function add(a, b) { return a + b; }\nimport add, { PI } from './math.js';\n```",
                9, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Template literal qanday yoziladi?", listOf("\"${name}\"", "backquote va \${name}", "'${name}'", "[[name]]"), 1, "Template literal — backtick (`) bilan yoziladi va \${} ichiga ifoda joylashtiriladi.")
                )
            ),
            Lesson("js-10","js-basics","LocalStorage","10 daqiqa","Ma'lumotlarni brauzerda saqlash",
                "```js\n// Saqlash\nlocalStorage.setItem('user', JSON.stringify({ name: 'Ali' }));\n\n// O'qish\nconst user = JSON.parse(localStorage.getItem('user'));\n\n// O'chirish\nlocalStorage.removeItem('user');\nlocalStorage.clear(); // hammasini o'chiradi\n\n// Tekshirish\nif (localStorage.getItem('token')) {\n  // foydalanuvchi tizimga kirgan\n}\n```",
                10, "article", null, emptyList(),
                listOf(
                    QuizQuestion("localStorage va sessionStorage farqi?", listOf("Hech qanday farq yo'q","localStorage doimiy, sessionStorage brauzer yopilganda o'chadi","sessionStorage doimiy, localStorage o'chadi","Ikkalasi ham server da saqlanadi"), 1, "localStorage — doimiy (browser yopilsa ham saqlanadi), sessionStorage — sessiya tugaganda o'chadi.")
                )
            ),
            Lesson("js-11","js-basics","Error Handling","11 daqiqa","try/catch/finally, Error types",
                "```js\ntry {\n  const data = JSON.parse('not json');\n} catch (error) {\n  console.error('Xato:', error.message);\n} finally {\n  console.log('Har doim ishlaydi');\n}\n\n// Custom Error\nclass ValidationError extends Error {\n  constructor(message, field) {\n    super(message);\n    this.name = 'ValidationError';\n    this.field = field;\n  }\n}\n```",
                11, "article", null, emptyList(),
                listOf(
                    QuizQuestion("finally bloki qachon ishlaydi?", listOf("Faqat xato bo'lganda","Faqat xato bo'lmaganida","Har doim — xato bo'lsa ham, bo'lmasa ham","Hech qachon"), 2, "finally — try yoki catch qaysi bo'lmasin, har doim bajariladi. Resurslarni yopish uchun ishlatiladi.")
                )
            ),
            Lesson("js-12","js-basics","Closure va Scope","14 daqiqa","Lexical scope, closure, IIFE",
                "```js\n// Closure\nfunction counter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    value: () => count\n  };\n}\nconst c = counter();\nc.increment(); c.increment();\nconsole.log(c.value()); // 2\n\n// Scope\nconst x = 'global';\nfunction test() {\n  const x = 'local';\n  console.log(x); // 'local'\n}\n```",
                12, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Closure nima?", listOf("Funksiyani o'chirish","Tashqi funksiya o'zgaruvchilariga kirish imkoniga ega bo'lgan ichki funksiya","Funksiyani eksport qilish","Async funksiya"), 1, "Closure — tashqi funksiya doirasidagi o'zgaruvchilarga kirish imkonini saqlab qolgan funksiya.")
                )
            ),
            Lesson("js-13","js-basics","Event Loop","12 daqiqa","Call stack, microtask, macrotask",
                "```js\nconsole.log('1');\n\nsetTimeout(() => console.log('2'), 0);\n\nPromise.resolve().then(() => console.log('3'));\n\nconsole.log('4');\n// Natija: 1, 4, 3, 2\n```\n\n**Tartib:**\n1. Call Stack (sinxron kod)\n2. Microtasks (Promise)\n3. Macrotasks (setTimeout, setInterval)",
                13, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Promise.then() va setTimeout() qaysi biri birinchi ishlaydi?", listOf("setTimeout birinchi","Promise.then birinchi (microtask)","Bir xil vaqtda","Oldin yozilgani birinchi"), 1, "Microtask (Promise) — macrotask (setTimeout) dan oldin bajariladi.")
                )
            ),
            Lesson("js-14","js-basics","Regex asoslari","13 daqiqa","Regular expressions, test, match",
                "```js\n// Yaratish\nconst emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nconst phoneRegex = /^\\+998[0-9]{9}$/;\n\n// Tekshirish\nconsole.log(emailRegex.test('ali@test.com'));    // true\nconsole.log(phoneRegex.test('+998901234567'));   // true\n\n// Qidirish\nconst text = 'HTML CSS JavaScript';\nconst words = text.match(/[A-Z][a-z]*/g); // ['HTML','CSS','JavaScript']\n\n// Almashtirish\nconst result = 'salom dunyo'.replace(/dunyo/g, 'JavaScript'); \n```",
                14, "article", null, emptyList(),
                listOf(
                    QuizQuestion("regex.test() nima qaytaradi?", listOf("Topilgan matn","true yoki false","Massiv","Yangi string"), 1, "test() — pattern mos kelsa true, mos kelmasa false qaytaradi.")
                )
            ),
            Lesson("js-15","js-basics","PBL: Todo Ilovasi","35 daqiqa","Project Based Learning — birinchi loyiha",
                "**Loyiha:** To-do list ilovasi yaratamiz.\n\n**Nima o'rganamiz:**\n- DOM manipulyatsiya\n- Event handling\n- LocalStorage\n- Array metodlari\n- Dinamik HTML yaratish\n\n```js\nconst todos = JSON.parse(localStorage.getItem('todos')) || [];\n\nfunction addTodo(text) {\n  todos.push({ id: Date.now(), text, done: false });\n  saveTodos();\n  renderTodos();\n}\n\nfunction toggleTodo(id) {\n  const todo = todos.find(t => t.id === id);\n  if (todo) todo.done = !todo.done;\n  saveTodos();\n  renderTodos();\n}\n\nfunction saveTodos() {\n  localStorage.setItem('todos', JSON.stringify(todos));\n}\n```",
                15, "article", null,
                listOf(LessonLink("JavaScript.info", "https://javascript.info"), LessonLink("MDN Web Docs", "https://developer.mozilla.org")),
                listOf(
                    QuizQuestion("PBL metodologiyasi nima?", listOf("Passiv o'qish","Real loyihalar orqali o'rganish","Test yechish","Video ko'rish"), 1, "Project Based Learning — real hayot muammolarini hal qiluvchi loyihalar yaratish orqali o'rganish.")
                )
            ),
            Lesson("js-16","js-basics","PBL: Hisoblash Ilovasi","30 daqiqa","Kalkulyator loyihasi",
                "**Loyiha:** Kalkulyator ilovasi\n\n```js\nclass Calculator {\n  constructor() {\n    this.result = 0;\n    this.operator = null;\n    this.prevValue = null;\n  }\n  \n  input(value) {\n    if ('+-*/'.includes(value)) {\n      this.operator = value;\n      this.prevValue = this.result;\n      this.result = 0;\n    } else if (value === '=') {\n      this.calculate();\n    } else {\n      this.result = parseFloat('' + this.result + value);\n    }\n  }\n  \n  calculate() {\n    const ops = {'+': (a,b) => a+b, '-': (a,b) => a-b, '*': (a,b) => a*b, '/': (a,b) => a/b};\n    if (this.operator && ops[this.operator]) {\n      this.result = ops[this.operator](this.prevValue, this.result);\n    }\n  }\n}\n```",
                16, "article", null, emptyList(),
                listOf(
                    QuizQuestion("OOP da class nima?", listOf("Funksiya","Ob'ektlar uchun shablonot (qolip)","O'zgaruvchi","Massiv"), 1, "Class — ob'ektlarni yaratish uchun shablonot. constructor, metodlar va xususiyatlardan iborat.")
                )
            )
        )
    ),

    Course(
        id = "react-basics", title = "React.js Asoslari",
        description = "React bilan zamonaviy veb ilovalar yarating. Components, Hooks, State va Props.",
        category = "React", level = "O'rta", duration = "10 soat", lessonsCount = 14,
        color = "#61DAFB", instructor = "Web Academy jamoasi", rating = 4.8,
        studentsCount = 3920, isPremium = false,
        topics = listOf("Components", "Hooks", "State", "Props", "React Router"),
        lessons = listOf(
            Lesson("rb-1","react-basics","React nima?","10 daqiqa","React tarixi va asoslari",
                "React — Facebook tomonidan yaratilgan UI kutubxonasi.\n\n```jsx\nfunction Welcome({ name }) {\n  return <h1>Salom, {name}!</h1>;\n}\n\nfunction App() {\n  return (\n    <div>\n      <Welcome name=\"Ali\" />\n      <Welcome name=\"Vali\" />\n    </div>\n  );\n}\n```\n\n**React afzalliklari:**\n- Virtual DOM — tez yangilash\n- Component-based — qayta ishlatish\n- Katta jamoa va ekosistema",
                1, "video", "https://www.youtube.com/watch?v=Tn6-PIqc4UM", emptyList(),
                listOf(
                    QuizQuestion("React kim tomonidan yaratilgan?", listOf("Google","Facebook (Meta)","Microsoft","Netflix"), 1, "React — Facebook (hozir Meta) tomonidan 2013-yilda ochiq manbaga chiqarilgan."),
                    QuizQuestion("Virtual DOM nima?", listOf("Haqiqiy DOM nusxasi","Xotiradagi yengil DOM nusxasi — tez taqqoslash uchun","Server DOM","CSS DOM"), 1, "Virtual DOM — xotiradagi yengil taqlid. React o'zgarishlarni real DOM ga minimal tarzda qo'llaydi.")
                )
            ),
            Lesson("rb-2","react-basics","JSX","12 daqiqa","JavaScript ichida HTML sintaksisi",
                "```jsx\nconst element = (\n  <div className=\"card\" style={{ backgroundColor: '#fff' }}>\n    <h2>{title}</h2>\n    <p>{description}</p>\n    {isVisible && <span>Ko'rinadigan</span>}\n    {items.map(item => <li key={item.id}>{item.name}</li>)}\n  </div>\n);\n```\n\n**JSX qoidalari:**\n- class → className\n- for → htmlFor\n- style — ob'ekt sifatida\n- Har bir element yopilishi kerak",
                2, "article", null, emptyList(),
                listOf(
                    QuizQuestion("JSX da 'class' o'rniga nima ishlatiladi?", listOf("class","cssClass","className","htmlClass"), 2, "JSX da className ishlatiladi, chunki class JavaScript da rezervirlangan kalit so'z.")
                )
            ),
            Lesson("rb-3","react-basics","Props","14 daqiqa","Komponentlarga ma'lumot uzatish",
                "```jsx\nfunction CourseCard({ title, level, color, onPress }) {\n  return (\n    <div onClick={onPress} style={{ borderLeft: `4px solid ${color}` }}>\n      <h3>{title}</h3>\n      <span>{level}</span>\n    </div>\n  );\n}\n\n// Ishlatish\n<CourseCard\n  title=\"HTML Asoslari\"\n  level=\"Boshlang'ich\"\n  color=\"#E44D26\"\n  onPress={() => console.log('Bosildi')}\n/>\n```",
                3, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Props nima?", listOf("Komponent ichki holati","Ota komponentdan berilgan parametrlar","CSS xususiyatlari","JavaScript metodlari"), 1, "Props — parent komponentdan child komponentga uzatiladigan parametrlar.")
                )
            ),
            Lesson("rb-4","react-basics","useState Hook","16 daqiqa","Komponent holati boshqarish",
                "```jsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const [name, setName] = useState('');\n  const [items, setItems] = useState([]);\n\n  const increment = () => setCount(prev => prev + 1);\n  \n  const addItem = (item) => setItems(prev => [...prev, item]);\n\n  return (\n    <div>\n      <p>Hisob: {count}</p>\n      <button onClick={increment}>+1</button>\n    </div>\n  );\n}\n```",
                4, "article", null, emptyList(),
                listOf(
                    QuizQuestion("useState nima qaytaradi?", listOf("Faqat qiymat","Faqat setter funksiya","[qiymat, setter] massiv","Ob'ekt"), 2, "useState — [hozirgi qiymat, uni o'zgartiruvchi funksiya] massiv qaytaradi."),
                    QuizQuestion("State o'zgarganda nima bo'ladi?", listOf("Hech narsa","Komponent qayta render bo'ladi","Sahifa yangilanadi","Xato chiqadi"), 1, "State o'zgarishi komponentni qayta render qiladi — UI yangilanadi.")
                )
            ),
            Lesson("rb-5","react-basics","useEffect Hook","18 daqiqa","Yon effektlar, lifecycle",
                "```jsx\nimport { useState, useEffect } from 'react';\n\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n\n  useEffect(() => {\n    fetch(`/api/users/${userId}`)\n      .then(r => r.json())\n      .then(setUser);\n    \n    return () => { /* cleanup */ };\n  }, [userId]); // userId o'zgarganda qayta ishlaydi\n\n  if (!user) return <p>Yuklanmoqda...</p>;\n  return <div>{user.name}</div>;\n}\n```",
                5, "article", null, emptyList(),
                listOf(
                    QuizQuestion("useEffect dependency array nima?", listOf("Effect nomi","Effect qachon qayta ishlashini belgilovchi qiymatlar","Effect parametrlari","Effect qaytaruvchi qiymat"), 1, "Dependency array — useEffect qaysi qiymatlar o'zgarganda qayta ishlashini belgilaydi. [] — faqat bir marta.")
                )
            ),
            Lesson("rb-6","react-basics","React Router","20 daqiqa","SPA da sahifalar orasida navigatsiya",
                "```jsx\nimport { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav>\n        <Link to=\"/\">Bosh sahifa</Link>\n        <Link to=\"/courses\">Kurslar</Link>\n      </nav>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/courses\" element={<Courses />} />\n        <Route path=\"/courses/:id\" element={<CourseDetail />} />\n        <Route path=\"*\" element={<NotFound />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n```",
                6, "article", null, emptyList(),
                listOf(
                    QuizQuestion("useNavigate hook nima uchun?", listOf("Sahifani yangilash","Dastur orqali boshqa sahifaga o'tish","DOM elementi tanlash","State boshqarish"), 1, "useNavigate() — dastur orqali (programmatically) route o'zgartirish uchun.")
                )
            ),
            Lesson("rb-7","react-basics","Context API","15 daqiqa","Global state, useContext",
                "```jsx\nconst ThemeContext = createContext('light');\n\nfunction App() {\n  const [theme, setTheme] = useState('light');\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      <Header />\n      <Main />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Header() {\n  const { theme, setTheme } = useContext(ThemeContext);\n  return <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>{theme}</button>;\n}\n```",
                7, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Context API nima muammoni hal qiladi?", listOf("Performance muammosi","Prop drilling — har qatlam orqali uzatish muammosi","Router muammosi","API muammosi"), 1, "Context — props drilling'ni bartaraf qiladi. Ma'lumot istalgan darajadagi componentga uzatiladi.")
                )
            ),
            Lesson("rb-8","react-basics","Custom Hooks","14 daqiqa","Mantiqni qayta ishlatish",
                "```jsx\n// useFetch hook\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    fetch(url)\n      .then(r => r.json())\n      .then(data => { setData(data); setLoading(false); })\n      .catch(err => { setError(err); setLoading(false); });\n  }, [url]);\n\n  return { data, loading, error };\n}\n\n// Ishlatish\nconst { data: users, loading } = useFetch('/api/users');\n```",
                8, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Custom hook qanday nomlanadi?", listOf("hook bilan boshlanadi","use bilan boshlanadi","custom bilan boshlanadi","fn bilan boshlanadi"), 1, "Custom hook — use bilan boshlanishi shart. Bu React konventsiyasi — hooklar qoidalariga rioya qilish uchun.")
                )
            ),
            Lesson("rb-9","react-basics","Formalar va Validation","17 daqiqa","Controlled inputs, react-hook-form",
                "```jsx\nfunction LoginForm() {\n  const [form, setForm] = useState({ email: '', password: '' });\n  const [errors, setErrors] = useState({});\n\n  const validate = () => {\n    const newErrors = {};\n    if (!form.email.includes('@')) newErrors.email = 'Email noto\\'g\\'ri';\n    if (form.password.length < 6) newErrors.password = 'Kamida 6 belgi';\n    return newErrors;\n  };\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    const errs = validate();\n    if (Object.keys(errs).length > 0) { setErrors(errs); return; }\n    // yuborish...\n  };\n  return <form onSubmit={handleSubmit}>...</form>;\n}\n```",
                9, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Controlled input nima?", listOf("Foydalanuvchi tomonidan boshqariladi","React state bilan boshqariladigan input","CSS bilan bezatiladigan input","Readonly input"), 1, "Controlled input — qiymati React state da saqlanadi va onChange bilan yangilanadi.")
                )
            ),
            Lesson("rb-10","react-basics","Performance optimizatsiya","16 daqiqa","memo, useMemo, useCallback",
                "```jsx\nimport { memo, useMemo, useCallback } from 'react';\n\n// memo — props o'zgarmasa qayta render bo'lmaydi\nconst CourseCard = memo(({ title, color }) => (\n  <div style={{ color }}>{title}</div>\n));\n\nfunction App() {\n  const [count, setCount] = useState(0);\n  \n  // useMemo — qimmat hisoblash natijasini keshlashtiradi\n  const sortedCourses = useMemo(() => \n    courses.sort((a, b) => a.rating - b.rating),\n  [courses]);\n  \n  // useCallback — funksiyani keshlashtiradi\n  const handlePress = useCallback((id) => {\n    navigate(`/course/${id}`);\n  }, [navigate]);\n}\n```",
                10, "article", null, emptyList(),
                listOf(
                    QuizQuestion("React.memo nima qiladi?", listOf("Kodni eslab qoladi","Props o'zgarmasa komponentni qayta render qilmaydi","Funksiyani keshlashtiradi","State ni saqlaydi"), 1, "React.memo — props o'zgarmasa shallow taqqoslov orqali qayta renderni oldini oladi.")
                )
            ),
            Lesson("rb-11","react-basics","API bilan ishlash","19 daqiqa","REST API, error handling, loading states",
                "```jsx\nfunction CourseList() {\n  const [courses, setCourses] = useState([]);\n  const [loading, setLoading] = useState(false);\n  const [error, setError] = useState(null);\n\n  const fetchCourses = async () => {\n    setLoading(true);\n    try {\n      const res = await fetch('https://api.webacademy.uz/courses');\n      if (!res.ok) throw new Error('Server xatosi');\n      const data = await res.json();\n      setCourses(data);\n    } catch (err) {\n      setError(err.message);\n    } finally {\n      setLoading(false);\n    }\n  };\n\n  useEffect(() => { fetchCourses(); }, []);\n}\n```",
                11, "article", null, emptyList(),
                listOf(
                    QuizQuestion("API so'rovida loading state nima uchun kerak?", listOf("Serverga bildirish uchun","Foydalanuvchiga yuklanayotganini ko'rsatish uchun","Keshlashtirish uchun","Xatolarni aniqlash uchun"), 1, "Loading state — ma'lumot yuklanayotganda spinner yoki skeleton ko'rsatish uchun kerak.")
                )
            ),
            Lesson("rb-12","react-basics","Testing","15 daqiqa","Jest, React Testing Library",
                "```jsx\nimport { render, screen, fireEvent } from '@testing-library/react';\nimport Counter from './Counter';\n\ndescribe('Counter', () => {\n  test('boshida 0 ko\\'rsatadi', () => {\n    render(<Counter />);\n    expect(screen.getByText('0')).toBeInTheDocument();\n  });\n\n  test('+1 tugma bosilganda oshadi', () => {\n    render(<Counter />);\n    fireEvent.click(screen.getByText('+1'));\n    expect(screen.getByText('1')).toBeInTheDocument();\n  });\n});\n```",
                12, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Unit test nima uchun yoziladi?", listOf("Kodni sekinlashtirish","Komponent/funksiyaning to'g'ri ishlashini tekshirish","Foydalanuvchini sinash","Server testlash"), 1, "Unit test — alohida komponent yoki funksiyaning kutilgan tarzda ishlashini avtomatik tekshiradi.")
                )
            ),
            Lesson("rb-13","react-basics","PBL: Weather App","40 daqiqa","API bilan ob-havo ilovasi",
                "**Loyiha:** Ob-havo ilovasi\n\n**Nima o'rganamiz:**\n- Tashqi API dan ma'lumot olish (OpenWeatherMap)\n- Custom hook yaratish\n- Error va loading holatlar\n- Conditional rendering\n\n```jsx\nfunction useWeather(city) {\n  const [weather, setWeather] = useState(null);\n  const [loading, setLoading] = useState(false);\n  \n  useEffect(() => {\n    if (!city) return;\n    setLoading(true);\n    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=KEY`)\n      .then(r => r.json())\n      .then(data => { setWeather(data); setLoading(false); })\n      .catch(() => setLoading(false));\n  }, [city]);\n  \n  return { weather, loading };\n}\n```",
                13, "article", null,
                listOf(LessonLink("OpenWeatherMap API", "https://openweathermap.org/api"), LessonLink("React dokumentatsiya", "https://react.dev")),
                listOf(
                    QuizQuestion("Custom hook foydalanishining asosiy sababi?", listOf("Kod hajmini kamaytirish","Mantiqni qayta ishlatish va testlash osonligi","Render tezligi","Animatsiya qo'shish"), 1, "Custom hook — mantiqni qayta ishlatish va izolyatsiya qilish uchun.")
                )
            ),
            Lesson("rb-14","react-basics","PBL: E-commerce UI","45 daqiqa","Mahsulotlar katalogi loyihasi",
                "**Loyiha:** Onlayn do'kon UI\n\n**Funksiyalar:**\n- Mahsulotlar ro'yxati (grid)\n- Kategoriya filtri\n- Qidiruv\n- Savatcha (useState)\n- Mahsulot kartochkasi\n\n```jsx\nfunction useCart() {\n  const [cart, setCart] = useState([]);\n  \n  const addToCart = useCallback((product) => {\n    setCart(prev => {\n      const existing = prev.find(p => p.id === product.id);\n      if (existing) return prev.map(p => p.id === product.id ? {...p, qty: p.qty+1} : p);\n      return [...prev, { ...product, qty: 1 }];\n    });\n  }, []);\n  \n  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);\n  return { cart, addToCart, total };\n}\n```",
                14, "article", null, emptyList(),
                listOf(
                    QuizQuestion("PBL da amaliy loyiha yaratishning asosiy maqsadi?", listOf("Vaqt o'tkazish","Haqiqiy muhitga yaqin tajriba orttirish va texnologiyalarni qo'llash","Faqat teoriyani takrorlash","Test yechish"), 1, "PBL — real muammolarni hal qiluvchi loyihalar yaratish orqali chuqur tushunish va tajriba.")
                )
            )
        )
    ),

    Course(
        id = "nodejs-basics", title = "Node.js va Express",
        description = "Backend dasturlashni o'rganing. Node.js, Express, REST API va ma'lumotlar bazasi.",
        category = "Node.js", level = "O'rta", duration = "9 soat", lessonsCount = 12,
        color = "#339933", instructor = "Web Academy jamoasi", rating = 4.7,
        studentsCount = 2650, isPremium = false,
        topics = listOf("Node.js", "Express", "REST API", "MongoDB", "Authentication"),
        lessons = listOf(
            Lesson("nb-1","nodejs-basics","Node.js ga kirish","10 daqiqa","Node.js nima, NPM, modules",
                "Node.js — V8 dvigatelida ishlaydigan JavaScript runtime muhiti.\n\n```js\n// hello.js\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, {'Content-Type': 'text/plain'});\n  res.end('Salom Node.js!');\n});\nserver.listen(3000, () => console.log('Server 3000-portda'));\n```\n\n**NPM (Node Package Manager):**\n```bash\nnpm init -y\nnpm install express\nnpm install -D nodemon\n```",
                1, "video", "https://www.youtube.com/watch?v=fBNz5xF-Kx4", emptyList(),
                listOf(
                    QuizQuestion("Node.js nima?", listOf("Brauzer","JavaScript server runtime muhiti","Ma'lumotlar bazasi","Frontend framework"), 1, "Node.js — V8 dvigatelida server tomonida JavaScript ishlatish imkonini beruvchi muhit."),
                    QuizQuestion("NPM nima?", listOf("Node Package Manager — kutubxonalarni boshqarish","Node Programming Method","Network Protocol Manager","None of these"), 0, "NPM — Node Package Manager. JavaScript paketlarini o'rnatish va boshqarish uchun.")
                )
            ),
            Lesson("nb-2","nodejs-basics","Express Framework","14 daqiqa","Routing, middleware, request/response",
                "```js\nconst express = require('express');\nconst app = express();\n\napp.use(express.json());\n\n// Routes\napp.get('/api/courses', (req, res) => {\n  res.json({ courses: [] });\n});\n\napp.post('/api/courses', (req, res) => {\n  const { title, category } = req.body;\n  res.status(201).json({ id: 1, title, category });\n});\n\napp.listen(5000, () => console.log('API 5000-portda'));\n```",
                2, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Middleware nima?", listOf("Ma'lumotlar bazasi","So'rov va javob orasida ishlaydigan funksiya","Frontend komponent","CSS framework"), 1, "Middleware — request va response orasida ishlaydigan funksiyalar zanjiri.")
                )
            ),
            Lesson("nb-3","nodejs-basics","REST API dizayn","12 daqiqa","HTTP metodlar, status kodlar",
                "```\nGET    /api/courses          — barcha kurslar\nGET    /api/courses/:id       — bitta kurs\nPOST   /api/courses          — yangi kurs\nPUT    /api/courses/:id       — to'liq yangilash\nPATCH  /api/courses/:id       — qisman yangilash\nDELETE /api/courses/:id       — o'chirish\n\nStatus kodlar:\n200 OK, 201 Created, 204 No Content\n400 Bad Request, 401 Unauthorized\n404 Not Found, 500 Server Error\n```",
                3, "article", null, emptyList(),
                listOf(
                    QuizQuestion("POST metodi qachon ishlatiladi?", listOf("Ma'lumot olish","Yangi resurs yaratish","Ma'lumot o'chirish","Ma'lumotni yangilash"), 1, "POST — yangi resurs yaratish uchun. Odatda 201 Created qaytaradi."),
                    QuizQuestion("404 status kodi nima bildiradi?", listOf("Server xatosi","Resurs topilmadi","Ruxsat yo'q","So'rov noto'g'ri"), 1, "404 Not Found — so'ralgan resurs serverda topilmadi.")
                )
            ),
            Lesson("nb-4","nodejs-basics","MongoDB va Mongoose","18 daqiqa","NoSQL, Schema, CRUD operatsiyalar",
                "```js\nconst mongoose = require('mongoose');\nawait mongoose.connect('mongodb://localhost/webacademy');\n\nconst courseSchema = new mongoose.Schema({\n  title: { type: String, required: true },\n  category: String,\n  level: { type: String, enum: ['beginner','intermediate','advanced'] },\n  createdAt: { type: Date, default: Date.now }\n});\n\nconst Course = mongoose.model('Course', courseSchema);\n\n// CRUD\nconst course = await Course.create({ title: 'HTML', category: 'HTML' });\nconst all = await Course.find({ category: 'CSS' });\nconst one = await Course.findById(id);\nawait Course.findByIdAndUpdate(id, { title: 'Yangi nom' });\nawait Course.findByIdAndDelete(id);\n```",
                4, "article", null, emptyList(),
                listOf(
                    QuizQuestion("MongoDB NoSQL ma'lumotlar bazasi nima?", listOf("Jadval asosidagi ma'lumotlar bazasi","Hujjat asosidagi ma'lumotlar bazasi (JSON format)","Faqat fayl saqlash","Cache tizim"), 1, "MongoDB — JSON-ga o'xshash BSON hujjatlarini saqlovchi NoSQL ma'lumotlar bazasi.")
                )
            ),
            Lesson("nb-5","nodejs-basics","Authentication va JWT","20 daqiqa","Login, register, token",
                "```js\nconst jwt = require('jsonwebtoken');\nconst bcrypt = require('bcrypt');\n\n// Register\napp.post('/auth/register', async (req, res) => {\n  const hash = await bcrypt.hash(req.body.password, 10);\n  const user = await User.create({ ...req.body, password: hash });\n  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });\n  res.json({ token });\n});\n\n// Middleware — token tekshirish\nconst auth = (req, res, next) => {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'Token kerak' });\n  try {\n    req.user = jwt.verify(token, process.env.JWT_SECRET);\n    next();\n  } catch { res.status(401).json({ error: 'Token yaroqsiz' }); }\n};\n```",
                5, "article", null, emptyList(),
                listOf(
                    QuizQuestion("JWT nima?", listOf("Java Web Technology","JSON Web Token — xavfsiz ma'lumot uzatish uchun","JavaScript Widget Tool","JSON Write Token"), 1, "JWT — JSON Web Token. Foydalanuvchini autentifikatsiya qilish uchun imzolangan token.")
                )
            ),
            Lesson("nb-6","nodejs-basics","File upload","15 daqiqa","Multer bilan fayl yuklash",
                "```js\nconst multer = require('multer');\nconst storage = multer.diskStorage({\n  destination: 'uploads/',\n  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)\n});\nconst upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });\n\napp.post('/api/upload', upload.single('image'), (req, res) => {\n  res.json({ url: `/uploads/${req.file.filename}` });\n});\n```",
                6, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Multer nima uchun ishlatiladi?", listOf("Ma'lumot saqlash","Fayl yuklash (multipart/form-data) uchun","Email yuborish","Authentication"), 1, "Multer — Node.js da multipart/form-data orqali fayl yuklash middleware.")
                )
            ),
            Lesson("nb-7","nodejs-basics","Error handling","12 daqiqa","Express error middleware",
                "```js\n// Async wrapper\nconst asyncHandler = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);\n\n// Global error handler\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(err.status || 500).json({\n    error: { message: err.message, status: err.status || 500 }\n  });\n});\n\n// 404 handler\napp.use((req, res) => res.status(404).json({ error: 'Topilmadi' }));\n```",
                7, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Express error middleware nechta parametr oladi?", listOf("2 ta","3 ta","4 ta (err, req, res, next)","5 ta"), 2, "Express error middleware — (err, req, res, next) — 4 ta parametr. Bu uni oddiy middleware dan ajratadi.")
                )
            ),
            Lesson("nb-8","nodejs-basics","Environment Variables","10 daqiqa","dotenv, .env fayl",
                "```bash\n# .env fayl\nPORT=5000\nMONGODB_URI=mongodb://localhost/webacademy\nJWT_SECRET=mysecretkey123\nNODE_ENV=development\n```\n\n```js\nrequire('dotenv').config();\nconsole.log(process.env.PORT);\nconsole.log(process.env.JWT_SECRET);\n// .env faylni .gitignore ga qo'shing!\n```",
                8, "article", null, emptyList(),
                listOf(
                    QuizQuestion(".env fayl nima uchun?", listOf("CSS saqlash","Maxfiy ma'lumotlar va sozlamalarni koddan ajratish","Rasmlar saqlash","Log yozish"), 1, ".env — environment variables. Maxfiy kalitlar va sozlamalar kodni tark etmaydi.")
                )
            ),
            Lesson("nb-9","nodejs-basics","CORS va Security","13 daqiqa","cors, helmet, rate limiting",
                "```js\nconst cors = require('cors');\nconst helmet = require('helmet');\nconst rateLimit = require('express-rate-limit');\n\napp.use(helmet()); // xavfsizlik headerlari\napp.use(cors({ origin: 'https://webacademy.uz' }));\n\nconst limiter = rateLimit({ windowMs: 15*60*1000, max: 100 });\napp.use('/api', limiter);\n```",
                9, "article", null, emptyList(),
                listOf(
                    QuizQuestion("CORS nima?", listOf("Kod qoidasi","Boshqa domen dan so'rovlarga ruxsat berish siyosati","CSS standart","Server protokol"), 1, "CORS — Cross-Origin Resource Sharing. Boshqa domendan API ga so'rov yuborishga ruxsat beradi.")
                )
            ),
            Lesson("nb-10","nodejs-basics","Testing API","15 daqiqa","Jest, supertest",
                "```js\nconst request = require('supertest');\nconst app = require('./app');\n\ndescribe('GET /api/courses', () => {\n  it('200 qaytarishi kerak', async () => {\n    const res = await request(app).get('/api/courses');\n    expect(res.status).toBe(200);\n    expect(res.body).toHaveProperty('courses');\n    expect(Array.isArray(res.body.courses)).toBe(true);\n  });\n});\n```",
                10, "article", null, emptyList(),
                listOf(
                    QuizQuestion("API testlash nima uchun muhim?", listOf("Vaqt o'tkazish","Endpointlar to'g'ri ishlashini avtomatik tekshirish","Foydalanuvchi sinash","Server sozlash"), 1, "API testlash — endpointlar kutilgan ma'lumot va status kodni qaytarishini avtomatik tekshiradi.")
                )
            ),
            Lesson("nb-11","nodejs-basics","Deployment","17 daqiqa","Railway, Render, PM2",
                "```bash\n# PM2 bilan production\nnpm install -g pm2\npm2 start app.js --name webacademy\npm2 startup\npm2 save\n\n# Railway deploy\n# 1. GitHub ga push\n# 2. railway.app da yangi loyiha\n# 3. GitHub repo ulashtirish\n# 4. Environment variables qo'shish\n# 5. Deploy!\n```",
                11, "article", null, emptyList(),
                listOf(
                    QuizQuestion("PM2 nima uchun ishlatiladi?", listOf("Package manager","Node.js ilovalarini production da boshqarish","Ma'lumotlar bazasi","Frontend build"), 1, "PM2 — Node.js process manager. Ilova crash bo'lsa avtomatik qayta ishga tushiradi.")
                )
            ),
            Lesson("nb-12","nodejs-basics","PBL: REST API loyihasi","50 daqiqa","To'liq CRUD API yaratish",
                "**Loyiha:** Blog API\n\n**Endpointlar:**\n```\nPOST   /auth/register\nPOST   /auth/login\nGET    /api/posts\nGET    /api/posts/:id\nPOST   /api/posts        (auth)\nPUT    /api/posts/:id    (auth + owner)\nDELETE /api/posts/:id   (auth + owner)\nGET    /api/posts/:id/comments\nPOST   /api/posts/:id/comments (auth)\n```\n\nTechnologiyalar: Express + MongoDB + JWT + Multer",
                12, "article", null,
                listOf(LessonLink("Express.js hujjatlar", "https://expressjs.com"), LessonLink("MongoDB Atlas", "https://www.mongodb.com/atlas")),
                listOf(
                    QuizQuestion("RESTful API da resurs nomlanishi qanday bo'lishi kerak?", listOf("Feʼl (getUser, deletePost)","Ot va ko'plik shakli (/users, /posts)","Aralash (getUsers, post-create)","Katta harf bilan (/Users, /Posts)"), 1, "REST konvensiyasi: ko'plik ot (/users, /courses, /posts). Feʼl ishlatilmaydi.")
                )
            )
        )
    ),

    Course(
        id = "fullstack", title = "Full-Stack Web Development",
        description = "Frontend va backendni birlashtirib, to'liq web ilovalar yarating. React + Node.js + MongoDB.",
        category = "Full-Stack", level = "Murakkab", duration = "14 soat", lessonsCount = 12,
        color = "#7C3AED", instructor = "Web Academy jamoasi", rating = 4.8,
        studentsCount = 1890, isPremium = true,
        topics = listOf("React", "Node.js", "MongoDB", "Deployment", "DevOps"),
        lessons = listOf(
            Lesson("fs-1","fullstack","Arxitektura va rejalashtirish","15 daqiqa","Loyiha tuzilmasi va texnologiya tanlash",
                "Full-stack loyiha arxitekturasi:\n\n```\nwebacademy-project/\n├── client/          # React frontend\n│   ├── src/\n│   │   ├── components/\n│   │   ├── pages/\n│   │   ├── hooks/\n│   │   └── services/  # API calls\n├── server/          # Node.js backend\n│   ├── routes/\n│   ├── models/\n│   ├── middleware/\n│   └── controllers/\n└── docker-compose.yml\n```\n\n**Texnologiya steki:**\n- Frontend: React + TypeScript + TailwindCSS\n- Backend: Node.js + Express + MongoDB\n- Auth: JWT\n- Deploy: Railway + Vercel",
                1, "video", "https://www.youtube.com/watch?v=7CqJlxBYj-M", emptyList(),
                listOf(
                    QuizQuestion("Full-stack dasturchi nima bilan shug'ullanadi?", listOf("Faqat frontend","Faqat backend","Ham frontend, ham backend","Faqat ma'lumotlar bazasi"), 2, "Full-stack — frontend (UI) va backend (server, DB) ikkalasini ham yozuvchi dasturchi.")
                )
            ),
            Lesson("fs-2","fullstack","API Integration","18 daqiqa","React'da API ulash, CORS sozlash",
                "```js\n// services/api.js\nconst API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';\n\nexport const api = {\n  async getCourses() {\n    const res = await fetch(`${API_URL}/api/courses`);\n    if (!res.ok) throw new Error('Server xatosi');\n    return res.json();\n  },\n  async login(email, password) {\n    const res = await fetch(`${API_URL}/auth/login`, {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({ email, password })\n    });\n    return res.json();\n  }\n};\n```",
                2, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Environment variable frontend da qanday o'qiladi?", listOf("process.env.VARIABLE","env.VARIABLE","config.VARIABLE","settings.VARIABLE"), 0, "React'da process.env.REACT_APP_* — faqat REACT_APP_ bilan boshlanganlar available bo'ladi.")
                )
            ),
            Lesson("fs-3","fullstack","Authentication flow","20 daqiqa","Login/Register, JWT saqlash, protected routes",
                "```jsx\n// AuthContext\nconst AuthContext = createContext();\n\nexport function AuthProvider({ children }) {\n  const [user, setUser] = useState(null);\n  \n  const login = async (email, password) => {\n    const { token, user } = await api.login(email, password);\n    localStorage.setItem('token', token);\n    setUser(user);\n  };\n  \n  const logout = () => {\n    localStorage.removeItem('token');\n    setUser(null);\n  };\n  \n  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;\n}\n\n// Protected Route\nfunction PrivateRoute({ children }) {\n  const { user } = useContext(AuthContext);\n  return user ? children : <Navigate to=\"/login\" />;\n}\n```",
                3, "article", null, emptyList(),
                listOf(
                    QuizQuestion("JWT token qayerda saqlanishi xavfsizroq?", listOf("URL da","localStorage","HttpOnly Cookie","GlobalThis"), 2, "HttpOnly Cookie — JavaScript dan o'qib bo'lmaydi, XSS hujumlaridan himoyalangan. localStorage — XSS ga zaif.")
                )
            ),
            Lesson("fs-4","fullstack","Real-time bilan ishlash","22 daqiqa","WebSocket, Socket.io",
                "```js\n// Server\nconst io = require('socket.io')(server);\nio.on('connection', (socket) => {\n  console.log('Foydalanuvchi ulandi:', socket.id);\n  \n  socket.on('sendMessage', (data) => {\n    io.emit('newMessage', { ...data, time: new Date() });\n  });\n  \n  socket.on('disconnect', () => console.log('Chiqdi'));\n});\n\n// Client\nconst socket = io('http://localhost:5000');\nsocket.on('newMessage', (msg) => setMessages(prev => [...prev, msg]));\nsocket.emit('sendMessage', { text: 'Salom!' });\n```",
                4, "article", null, emptyList(),
                listOf(
                    QuizQuestion("WebSocket va HTTP farqi nima?", listOf("Hech qanday farq yo'q","WebSocket ikki tomonlama real-time, HTTP bir tomonlama so'rov-javob","HTTP real-time, WebSocket emas","Ikkalasi ham bir xil"), 1, "WebSocket — doimiy ikki tomonlama kanal. HTTP — har so'rovda yangi ulanish.")
                )
            ),
            Lesson("fs-5","fullstack","Docker asoslari","16 daqiqa","Container, Dockerfile, docker-compose",
                "```dockerfile\n# Dockerfile\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nEXPOSE 5000\nCMD [\"node\", \"app.js\"]\n```\n\n```yaml\n# docker-compose.yml\nservices:\n  api:\n    build: ./server\n    ports: [\"5000:5000\"]\n    environment:\n      - MONGODB_URI=mongodb://mongo:27017/webacademy\n  mongo:\n    image: mongo:6\n    volumes: [\"mongo-data:/data/db\"]\nvolumes:\n  mongo-data:\n```",
                5, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Docker container nima?", listOf("Virtual machine","Izolyatsiyalangan, yengil dastur muhiti","Server","Ma'lumotlar bazasi"), 1, "Docker container — izolyatsiyalangan muhit. Barcha dependencylar bilan birga ishlaydi, 'menda ishlaydi' muammosi yo'q.")
                )
            ),
            Lesson("fs-6","fullstack","CI/CD va Deployment","18 daqiqa","GitHub Actions, avtomatik deploy",
                "```yaml\n# .github/workflows/deploy.yml\nname: Deploy\non:\n  push:\n    branches: [main]\njobs:\n  test-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with: { node-version: '18' }\n      - run: npm ci\n      - run: npm test\n      - name: Deploy to Railway\n        env:\n          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}\n        run: railway deploy\n```",
                6, "article", null, emptyList(),
                listOf(
                    QuizQuestion("CI/CD nima?", listOf("Code Integration/Code Deployment","Continuous Integration/Continuous Deployment","Computer Interface/Computer Design","Custom Integration/Custom Deployment"), 1, "CI — har commit da avtomatik test. CD — test o'tsa avtomatik deploy. Sifat va tezlikni oshiradi.")
                )
            ),
            Lesson("fs-7","fullstack","Performance va Caching","14 daqiqa","Redis, CDN, optimizatsiya",
                "```js\nconst redis = require('redis');\nconst client = redis.createClient();\n\n// Cache middleware\nconst cache = (duration) => async (req, res, next) => {\n  const key = req.originalUrl;\n  const cached = await client.get(key);\n  if (cached) return res.json(JSON.parse(cached));\n  \n  res.sendResponse = res.json;\n  res.json = (body) => {\n    client.setEx(key, duration, JSON.stringify(body));\n    res.sendResponse(body);\n  };\n  next();\n};\n\napp.get('/api/courses', cache(300), coursesHandler);\n```",
                7, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Redis nima uchun ishlatiladi?", listOf("Ma'lumotlarni doimiy saqlash","Tez o'qish uchun xotirada kesh saqlash","Fayl saqlash","Email yuborish"), 1, "Redis — xotirada ishlaydi, juda tez. Kesh, sessiya, real-time leaderboard uchun ishlatiladi.")
                )
            ),
            Lesson("fs-8","fullstack","GraphQL asoslari","19 daqiqa","Query, Mutation, Subscription",
                "```js\nconst { ApolloServer, gql } = require('apollo-server-express');\n\nconst typeDefs = gql`\n  type Course {\n    id: ID!\n    title: String!\n    category: String!\n    lessons: [Lesson!]!\n  }\n  type Query {\n    courses: [Course!]!\n    course(id: ID!): Course\n  }\n  type Mutation {\n    createCourse(title: String!, category: String!): Course!\n  }\n`;\n\nconst resolvers = {\n  Query: {\n    courses: () => Course.find(),\n    course: (_, { id }) => Course.findById(id)\n  }\n};\n```",
                8, "article", null, emptyList(),
                listOf(
                    QuizQuestion("GraphQL va REST asosiy farqi?", listOf("Hech qanday farq yo'q","GraphQL — kerakli fieldlarni so'rash mumkin, REST — belgilangan format","REST — tezroq","GraphQL — faqat Facebook uchun"), 1, "GraphQL — client kerakli fieldlarni aniq so'raydi, over/under-fetching yo'q.")
                )
            ),
            Lesson("fs-9","fullstack","Testing strategiyasi","16 daqiqa","Unit, Integration, E2E testlar",
                "```\nTest piramidasi:\n\n         /\\\n        /E2E\\      — Cypress, Playwright\n       /______\\\n      /Integr. \\   — Supertest, RTL\n     /___________\\\n    /    Unit     \\  — Jest, Vitest\n   /_______________ \\\n```\n\n```js\n// E2E test (Cypress)\ncy.visit('/login');\ncy.get('[data-cy=email]').type('test@test.com');\ncy.get('[data-cy=password]').type('password123');\ncy.get('[data-cy=submit]').click();\ncy.url().should('include', '/dashboard');\n```",
                9, "article", null, emptyList(),
                listOf(
                    QuizQuestion("E2E test nima?", listOf("Backend test","Foydalanuvchi harakatini boshidan oxirigacha simulatsiya","Unit test","API test"), 1, "E2E (End-to-End) — haqiqiy foydalanuvchi kabi brauzerda to'liq oqimni test qiladi.")
                )
            ),
            Lesson("fs-10","fullstack","Security best practices","18 daqiqa","OWASP, SQL injection, XSS",
                "**OWASP Top 10 dan himoyalanish:**\n\n```js\n// 1. Input validation\nconst { body, validationResult } = require('express-validator');\napp.post('/api/users', [\n  body('email').isEmail().normalizeEmail(),\n  body('password').isLength({ min: 8 })\n], handler);\n\n// 2. SQL injection (Mongoose orqali himoya)\nconst user = await User.findOne({ email: req.body.email }); // xavfsiz\n\n// 3. XSS oldini olish\nconst DOMPurify = require('dompurify');\nconst clean = DOMPurify.sanitize(userInput);\n\n// 4. Sensitive data\nconsole.log(password); // HECH QACHON!\n```",
                10, "article", null, emptyList(),
                listOf(
                    QuizQuestion("XSS hujumi nima?", listOf("Server hujumi","Sahifaga zararli JavaScript inject qilish","Parolni o'g'irlash","Tarmoq hujumi"), 1, "XSS (Cross-Site Scripting) — tajovuzkor sahifaga zararli JS kod kiritadi, boshqa foydalanuvchilar zarar ko'radi.")
                )
            ),
            Lesson("fs-11","fullstack","Monitoring va Logging","14 daqiqa","Winston, Morgan, Sentry",
                "```js\nconst winston = require('winston');\nconst logger = winston.createLogger({\n  level: 'info',\n  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),\n  transports: [\n    new winston.transports.File({ filename: 'error.log', level: 'error' }),\n    new winston.transports.File({ filename: 'combined.log' })\n  ]\n});\n\nlogger.info('Server ishga tushdi', { port: 5000 });\nlogger.error('Ma\\'lumotlar bazasi xatosi', { error: err.message });\n```",
                11, "article", null, emptyList(),
                listOf(
                    QuizQuestion("Production da logging nima uchun muhim?", listOf("Vaqt o'tkazish","Xatolarni aniqlash va tizim holatini kuzatish","Foydalanuvchi kuzatish","Kod yozish"), 1, "Logging — production da xatolarni aniqlash, tizim holati va performance kuzatish uchun zarur.")
                )
            ),
            Lesson("fs-12","fullstack","PBL: To'liq Loyiha","60 daqiqa","E-learning platformasi yaratish",
                "**Kurs yakuni: Mini Web Academy yarating!**\n\n**Funksiyalar:**\n- Foydalanuvchi ro'yxatdan o'tish/kirish\n- Kurslar ro'yxati va batafsil\n- Dars ko'rish va tugallash\n- Progress kuzatish\n- Admin panel\n\n**Texnologiyalar:**\n- Frontend: React + TypeScript\n- Backend: Express + MongoDB\n- Auth: JWT + bcrypt\n- Deploy: Railway + Vercel\n\nBu loyiha portfolioingizning asosiy ko'rgazmasi bo'ladi!",
                12, "article", null,
                listOf(LessonLink("Full-stack roadmap", "https://roadmap.sh/full-stack"), LessonLink("The Odin Project", "https://www.theodinproject.com")),
                listOf(
                    QuizQuestion("Full-stack loyiha qanday foyda beradi?", listOf("Faqat vaqt sarflash","Real tajriba, portfolio uchun, intervyu tayyorgarligi","Faqat ma'lumot","Sertifikat olish"), 1, "Amaliy loyiha — real muammolarni hal qilish tajribasi, portfolio uchun ko'rsatmali ish va intervyu tayyorgarligi.")
                )
            )
        )
    )
)
