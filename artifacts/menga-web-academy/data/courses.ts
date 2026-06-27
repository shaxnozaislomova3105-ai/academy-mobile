export interface LessonLink {
  title: string;
  url: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  duration: string;
  description: string;
  content: string;
  order: number;
  type: "video" | "article" | "quiz";
  links?: LessonLink[];
  videoUrl?: string;
  questions?: QuizQuestion[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: "Boshlang'ich" | "O'rta" | "Murakkab";
  duration: string;
  lessonsCount: number;
  image: string | null;
  color: string;
  instructor: string;
  rating: number;
  studentsCount: number;
  isPremium: boolean;
  topics: string[];
  lessons: Lesson[];
}

export const CATEGORIES = [
  "Barchasi",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Full-Stack",
];

export const COURSES: Course[] = [
  {
    id: "html-basics",
    title: "HTML Asoslari",
    description:
      "HTML tilini noldan o'rganing. Teglar, atributlar, formalar va zamonaviy HTML5 elementlari.",
    category: "HTML",
    level: "Boshlang'ich",
    duration: "5 soat",
    lessonsCount: 14,
    image: "course-html",
    color: "#E44D26",
    instructor: "Web Academy jamoasi",
    rating: 4.9,
    studentsCount: 5420,
    isPremium: false,
    topics: ["HTML5", "Teglar", "Atributlar", "Formalar", "Semantik HTML"],
    lessons: [
      {
        id: "hb-1",
        courseId: "html-basics",
        title: "HTML nima?",
        duration: "7 daqiqa",
        description: "HTML ning tarixi va asosiy maqsadi",
        content:
          "HTML (HyperText Markup Language) — veb sahifalarni yaratish uchun ishlatiladigan standart belgilash tili. 1991-yilda Tim Berners-Lee tomonidan yaratilgan.\n\n**HTML nimadan iborat:**\n- Element — sahifaning qurilish bloki\n- Teg — elementni belgilaydi: `<p>`, `<h1>`, `<div>`\n- Atribut — elementga qo'shimcha ma'lumot: `class`, `id`, `href`\n- Tarkib — element ichidagi ma'lumot",
        videoUrl: "https://www.youtube.com/watch?v=mbeT8mpmtHA",
        order: 1,
        type: "video",
        questions: [
          { question: "HTML nimaning qisqartmasi?", options: ["HyperText Markup Language", "High Tech Modern Language", "HyperText Machine Learning", "Home Tool Markup Language"], correct: 0, explanation: "HTML — HyperText Markup Language. 1991-yilda Tim Berners-Lee tomonidan yaratilgan veb sahifa belgilash tili." },
          { question: "HTML da 'element' nima?", options: ["Faqat teg", "Sahifaning qurilish bloki", "CSS uslubi", "JavaScript kodi"], correct: 1, explanation: "Element — HTML ning asosiy qurilish bloki. Teg, atribut va tarkibdan iborat." },
          { question: "HTML da 'atribut' nima?", options: ["Elementning nomi", "Elementga qo'shimcha ma'lumot", "Teg yopilishi", "JavaScript funksiyasi"], correct: 1, explanation: "Atribut — elementga qo'shimcha ma'lumot beradi. Masalan: class, id, href, src." },
          { question: "Kim HTML ni yaratgan?", options: ["Bill Gates", "Tim Berners-Lee", "Brendan Eich", "Linus Torvalds"], correct: 1, explanation: "Tim Berners-Lee 1991-yilda HTML ni ixtiro qildi. U World Wide Web (WWW) ning ham yaratuvchisi." },
        ],
      },
      {
        id: "hb-2",
        courseId: "html-basics",
        title: "HTML hujjat tuzilmasi",
        duration: "10 daqiqa",
        description: "DOCTYPE, html, head, body elementlari",
        content:
          "Har bir to'g'ri HTML sahifasi quyidagi asosiy tuzilmaga ega bo'lishi kerak:\n\n```html\n<!DOCTYPE html>\n<html lang=\"uz\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Sahifa nomi</title>\n</head>\n<body>\n  <!-- Kontent shu yerda -->\n  <h1>Salom Dunyo!</h1>\n</body>\n</html>\n```\n\n**Muhim elementlar:**\n- `<!DOCTYPE html>` — HTML5 standartini bildiradi\n- `<html lang>` — hujjat tili\n- `<head>` — meta ma'lumotlar\n- `<body>` — foydalanuvchi ko'radigan kontent",
        videoUrl: "https://www.youtube.com/watch?v=oEKXn94CBMM",
        order: 2,
        type: "video",
        questions: [
          { question: "<!DOCTYPE html> nima vazifasini bajaradi?", options: ["Sahifa nomi", "HTML5 standartini brauzerga bildiradi", "CSS faylni ulaydi", "JavaScript ni yoqadi"], correct: 1, explanation: "<!DOCTYPE html> — bu hujjat HTML5 formatida ekanligini brauzerga bildiradi. Har doim birinchi qatorda bo'lishi kerak." },
          { question: "<head> elementi ichida nima bo'ladi?", options: ["Foydalanuvchi ko'radigan kontent", "Sarlavhalar va rasmlar", "Meta ma'lumotlar, title, CSS ulanmalar", "Navigatsiya va footer"], correct: 2, explanation: "<head> — meta ma'lumotlar: charset, viewport, title, CSS link. Foydalanuvchi buni ko'rmaydi." },
          { question: "<html lang='uz'> dagi 'lang' atributi nima uchun?", options: ["Tilni o'rgatish uchun", "Hujjat tilini bildirish uchun", "Tarjima qilish uchun", "CSS uchun"], correct: 1, explanation: "lang atributi hujjat tilini bildiradi. Ekran o'quvchilar, qidiruv tizimlari va brauzer tarjima funksiyalari uchun muhim." },
          { question: "<body> elementi nima uchun?", options: ["Sahifa sozlamalari", "Foydalanuvchi ko'radigan barcha kontent", "JavaScript kodi", "Meta teglar"], correct: 1, explanation: "<body> — brauzerda ko'rinadigan barcha kontent: matn, rasmlar, tugmalar, havolalar." },
        ],
      },
      {
        id: "hb-3",
        courseId: "html-basics",
        title: "Sarlavhalar va paragraflar",
        duration: "8 daqiqa",
        description: "h1-h6, p, br, hr elementlari",
        content:
          "Matn tuzilmasini yaratish uchun sarlavha va paragraf elementlaridan foydalanamiz.\n\n```html\n<h1>Asosiy sarlavha</h1>\n<h2>Kichik sarlavha</h2>\n<h3>Uchinchi daraja</h3>\n\n<p>Bu oddiy paragraf matni.</p>\n<p>Bu ikkinchi paragraf.<br>Qatordan keyin davom etadi.</p>\n\n<hr> <!-- Gorizontal chiziq -->\n```\n\n**Eslatma:** `<h1>` har bir sahifada faqat bir marta ishlatilishi kerak — SEO uchun muhim!",
        order: 3,
        type: "article",
        questions: [
          { question: "HTML da nechta sarlavha darajasi bor?", options: ["3 ta", "5 ta", "6 ta", "8 ta"], correct: 2, explanation: "HTML da h1 dan h6 gacha — jami 6 ta sarlavha darajasi bor. h1 eng katta, h6 eng kichik." },
          { question: "<br> tegi nima qiladi?", options: ["Gorizontal chiziq chizadi", "Yangi qator yaratadi", "Paragraf ochadi", "Bold qiladi"], correct: 1, explanation: "<br> — qatorni uzib, keyingi matnni yangi qatordan boshlaydi. Yopilmaydigan teg." },
          { question: "<hr> tegi nima ko'rsatadi?", options: ["Sarlavha", "Gorizontal ajratuvchi chiziq", "Havola", "Rasm"], correct: 1, explanation: "<hr> — horizontal rule — sahifada gorizontal chiziq chizadi, bo'limlarni ajratish uchun ishlatiladi." },
          { question: "<h1> tegi necha marta ishlatilishi kerak?", options: ["Xohlagancha", "Kamida 3 marta", "Odatda 1 marta", "Hech qachon"], correct: 2, explanation: "SEO uchun sahifada <h1> odatda 1 marta ishlatiladi. U sahifaning asosiy mavzusini bildiradi." },
        ],
      },
      {
        id: "hb-4",
        courseId: "html-basics",
        title: "Havolalar",
        duration: "9 daqiqa",
        description: "a tegi, href, target atributlari",
        content:
          "Havolalar web ning asosi — sahifalarni bir-biriga bog'laydi.\n\n```html\n<!-- Tashqi havola -->\n<a href=\"https://webacademy.uz\">Web Academy</a>\n\n<!-- Yangi oynada ochish -->\n<a href=\"https://google.com\" target=\"_blank\" rel=\"noopener\">Google</a>\n\n<!-- Ichki havola -->\n<a href=\"/about\">Biz haqimizda</a>\n\n<!-- Email -->\n<a href=\"mailto:info@webacademy.uz\">Xat yozing</a>\n\n<!-- Telefon -->\n<a href=\"tel:+998901234567\">Qo'ng'iroq</a>\n```",
        order: 4,
        type: "article",
        questions: [
          { question: "Havola yaratish uchun qaysi teg ishlatiladi?", options: ["<link>", "<url>", "<a>", "<nav>"], correct: 2, explanation: "<a href='...'>Matn</a> — anchor (langar) tegi. href — havola manzili." },
          { question: "target='_blank' nima qiladi?", options: ["Havolani o'chiradi", "Havolani yangi oynada ochadi", "Havolani yashiradi", "Havolani yuklab oladi"], correct: 1, explanation: "target='_blank' — havolani yangi brauzer oynasida (tab) ochadi. rel='noopener' bilan birga ishlatish xavfsizroq." },
          { question: "Email havolasi qanday yoziladi?", options: ["<a href='email:'>", "<a href='mailto:'>", "<a href='mail:'>", "<email href=''>"], correct: 1, explanation: "mailto: protokoli email havolasi yaratadi. Bosilganda email dasturi ochiladi." },
          { question: "<a> tegida href atributi nima bildiradi?", options: ["Havola rangi", "Havola manzili (URL)", "Havola matni", "Havola o'lchami"], correct: 1, explanation: "href — HyperText Reference. Havola bosilganda qaysi sahifaga o'tish kerakligini ko'rsatadi." },
        ],
      },
      {
        id: "hb-5",
        courseId: "html-basics",
        title: "Rasmlar",
        duration: "8 daqiqa",
        description: "img tegi, src, alt, width, height",
        content:
          "```html\n<!-- Asosiy rasm -->\n<img src=\"rasm.jpg\" alt=\"Rasm tavsifi\" width=\"400\" height=\"300\">\n\n<!-- Nisbiy yol -->\n<img src=\"./images/logo.png\" alt=\"Logo\">\n\n<!-- Tashqi rasm -->\n<img src=\"https://example.com/photo.jpg\" alt=\"Foto\">\n```\n\n**`alt` atributi nima uchun muhim?**\n- Ko'zi ojiz foydalanuvchilar uchun\n- Rasm yuklanmasa ko'rsatiladi\n- SEO uchun foydali\n- Har doim to'ldirilishi shart!",
        order: 5,
        type: "article",
        questions: [
          { question: "Rasm qo'shish uchun qaysi teg ishlatiladi?", options: ["<picture>", "<image>", "<img>", "<photo>"], correct: 2, explanation: "<img src='...' alt='...'> — rasm qo'shish tegi. Yopilmaydigan (self-closing) teg." },
          { question: "alt atributi nima uchun kerak?", options: ["Rasmni kattalashtirish", "Ko'zi ojiz foydalanuvchilar va rasm yuklanmasa chiqadigan matn", "Rasmni animatsiya qilish", "Rasmga rang berish"], correct: 1, explanation: "alt — alternative text. Rasm yuklanmasa ko'rsatiladi, ekran o'quvchilar uchun zarur, SEO ga foyda." },
          { question: "src atributi nima bildiradi?", options: ["Rasm o'lchami", "Rasm manzili (URL yoki fayl yo'li)", "Rasm formati", "Rasm rangi"], correct: 1, explanation: "src — source (manba). Rasm qayerda joylashganini ko'rsatadi: to'liq URL yoki fayl yo'li." },
          { question: "width='400' height='300' nima qiladi?", options: ["Rasmni kesadi", "Rasmning o'lchamini belgilaydi", "Rasmni yashiradi", "Rasmni buradi"], correct: 1, explanation: "width va height — rasmning kenglik va balandligini piksel (px) da belgilaydi." },
        ],
      },
      {
        id: "hb-6",
        courseId: "html-basics",
        title: "Ro'yxatlar",
        duration: "7 daqiqa",
        description: "ul, ol, li, dl elementlari",
        content:
          "```html\n<!-- Tartibsiz ro'yxat -->\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>\n\n<!-- Raqamlangan ro'yxat -->\n<ol>\n  <li>Birinchi qadam</li>\n  <li>Ikkinchi qadam</li>\n  <li>Uchinchi qadam</li>\n</ol>\n\n<!-- Ichma-ich ro'yxat -->\n<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n    </ul>\n  </li>\n</ul>\n```",
        order: 6,
        type: "article",
        questions: [
          { question: "<ul> va <ol> farqi nima?", options: ["Hech qanday farq yo'q", "<ul> raqamsiz, <ol> raqamlangan ro'yxat", "<ol> raqamsiz, <ul> raqamlangan ro'yxat", "Ikkalasi ham raqamlangan"], correct: 1, explanation: "<ul> — unordered list (marker/nuqta bilan), <ol> — ordered list (1,2,3... bilan). <li> — list item." },
          { question: "Ro'yxat elementi uchun qaysi teg ishlatiladi?", options: ["<list>", "<item>", "<li>", "<el>"], correct: 2, explanation: "<li> — list item. Har bir ro'yxat elementi <li> ichiga yoziladi." },
          { question: "Ichma-ich ro'yxat yaratish uchun nima qilinadi?", options: ["Mumkin emas", "<li> ichiga yangi <ul> yoki <ol> qo'yiladi", "style='nested' ishlatiladi", "Alohida teg ishlatiladi"], correct: 1, explanation: "<li> ichiga yangi <ul> yoki <ol> joylashtirish mumkin — bu nested (ichma-ich) ro'yxat yaratadi." },
        ],
      },
      {
        id: "hb-7",
        courseId: "html-basics",
        title: "Jadvallar",
        duration: "11 daqiqa",
        description: "table, tr, th, td elementlari",
        content:
          "```html\n<table border=\"1\">\n  <thead>\n    <tr>\n      <th>Ism</th>\n      <th>Yosh</th>\n      <th>Kasb</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Ali</td>\n      <td>25</td>\n      <td>Dasturchi</td>\n    </tr>\n    <tr>\n      <td>Vali</td>\n      <td>30</td>\n      <td>Dizayner</td>\n    </tr>\n  </tbody>\n</table>\n```",
        order: 7,
        type: "article",
        questions: [
          { question: "HTML jadvalida qator yaratish uchun qaysi teg?", options: ["<td>", "<tr>", "<row>", "<th>"], correct: 1, explanation: "<tr> — table row. Jadval qatorini ochadi. Ichiga <td> yoki <th> teglar joylashadi." },
          { question: "<th> va <td> farqi nima?", options: ["Hech qanday farq yo'q", "<th> sarlavha (bold, markazda), <td> oddiy ma'lumot", "<td> sarlavha, <th> ma'lumot", "<th> katta, <td> kichik"], correct: 1, explanation: "<th> — table header, qalin va markazlashgan ko'rsatiladi. <td> — table data, oddiy hujayra." },
          { question: "<thead> va <tbody> nima uchun?", options: ["Majburiy teglar", "Jadval tuzilmasini semantik ajratish uchun", "Ranglash uchun", "CSS uchun"], correct: 1, explanation: "<thead> — jadval boshi (sarlavhalar), <tbody> — jadval tanasi (ma'lumotlar). Tuzilmani semantik qiladi." },
          { question: "colspan='2' atributi nima qiladi?", options: ["Hujayraning rangini o'zgartiradi", "Hujayrani 2 ta ustunni birlashtiradi", "Hujayra balandligini oshiradi", "2 ta qator yaratadi"], correct: 1, explanation: "colspan — column span. Hujayrani ko'rsatilgan ustun soni bo'yicha kengaytiradi." },
        ],
      },
      {
        id: "hb-8",
        courseId: "html-basics",
        title: "Formalar — 1-qism",
        duration: "14 daqiqa",
        description: "form, input, label, button elementlari",
        content:
          "Formalar foydalanuvchidan ma'lumot olish uchun ishlatiladi.\n\n```html\n<form action=\"/submit\" method=\"POST\">\n  <label for=\"name\">Ism:</label>\n  <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Ismingiz\" required>\n  \n  <label for=\"email\">Email:</label>\n  <input type=\"email\" id=\"email\" name=\"email\" required>\n  \n  <label for=\"password\">Parol:</label>\n  <input type=\"password\" id=\"password\" name=\"password\" minlength=\"8\">\n  \n  <button type=\"submit\">Yuborish</button>\n  <button type=\"reset\">Tozalash</button>\n</form>\n```",
        order: 8,
        type: "article",
        questions: [
          { question: "<form> tegida method='POST' nima qiladi?", options: ["Ma'lumotni URL ga qo'shib yuboradi", "Ma'lumotni xavfsiz yuboradi (URL da ko'rinmaydi)", "Formani tozalaydi", "Formani yashiradi"], correct: 1, explanation: "POST — ma'lumot HTTP body orqali xavfsiz yuboriladi. GET — URL da ko'rinadi. Parol uchun POST ishlatiladi." },
          { question: "<label for='email'> atributi nima qiladi?", options: ["Email yuboradi", "Label ni tegishli input ga bog'laydi", "Email tekshiradi", "CSS qo'shadi"], correct: 1, explanation: "for atributi tegishli input ning id si bilan mos bo'lishi kerak. Label bosilganda input fokuslanadi." },
          { question: "required atributi nima qiladi?", options: ["Maydonni ko'k qiladi", "Maydon to'ldirilishi majburiy bo'ladi", "Maydonni yashiradi", "Maydon bloklanadi"], correct: 1, explanation: "required — forma yuborishdan oldin bu maydon to'ldirilishi shartligini bildiradi. Brauzer avtomatik tekshiradi." },
          { question: "input type='email' nima qiladi?", options: ["Faqat email yuboradi", "Email formatini tekshiradi (@ belgisi bo'lishi kerak)", "Email yashiradi", "Email ochadi"], correct: 1, explanation: "type='email' — brauzer @ belgisi va to'g'ri formatni avtomatik tekshiradi. Mobil klaviaturada email rejimi ochiladi." },
        ],
      },
      {
        id: "hb-9",
        courseId: "html-basics",
        title: "Formalar — 2-qism",
        duration: "12 daqiqa",
        description: "select, textarea, checkbox, radio",
        content:
          "```html\n<!-- Tanlash ro'yxati -->\n<select name=\"city\">\n  <option value=\"\">Shaharni tanlang</option>\n  <option value=\"tashkent\">Toshkent</option>\n  <option value=\"samarkand\">Samarqand</option>\n</select>\n\n<!-- Ko'p qatorli matn -->\n<textarea name=\"message\" rows=\"4\" placeholder=\"Xabaringiz\"></textarea>\n\n<!-- Checkbox -->\n<input type=\"checkbox\" id=\"agree\" name=\"agree\">\n<label for=\"agree\">Shartlarga roziman</label>\n\n<!-- Radio -->\n<input type=\"radio\" id=\"male\" name=\"gender\" value=\"male\">\n<label for=\"male\">Erkak</label>\n<input type=\"radio\" id=\"female\" name=\"gender\" value=\"female\">\n<label for=\"female\">Ayol</label>\n```",
        order: 9,
        type: "article",
        questions: [
          { question: "<select> elementi nima uchun?", options: ["Rang tanlash", "Ro'yxatdan bitta yoki ko'p variantni tanlash", "Rasm tanlash", "Fayl tanlash"], correct: 1, explanation: "<select> — ochiluvchi tanlash ro'yxati. <option> teglar bilan to'ldiriladi." },
          { question: "Checkbox va Radio button farqi nima?", options: ["Hech qanday farq yo'q", "Checkbox bir nechta, radio faqat bitta tanlanadi", "Radio bir nechta, checkbox faqat bitta tanlanadi", "Ikkalasi ham bitta tanlanadi"], correct: 1, explanation: "Checkbox — bir nechta tanlash mumkin. Radio — bir guruhda faqat bitta tanlanadi (bir name bo'lishi kerak)." },
          { question: "<textarea> nima uchun ishlatiladi?", options: ["Bitta qatorli matn", "Ko'p qatorli matn kiritish uchun", "Rasm yuklash uchun", "Video ko'rsatish uchun"], correct: 1, explanation: "<textarea> — ko'p qatorli matn kiritish maydoni. rows va cols atributlari o'lchami belgilaydi." },
          { question: "Radio button lar bir-birini inkor qilishi uchun nima kerak?", options: ["Bir xil id", "Bir xil name atributi", "Bir xil class", "Bir xil value"], correct: 1, explanation: "Bir xil name atributi radio button larni bir guruhga birlashtiradi. Bitta tanlanganida boshqalari bekor bo'ladi." },
        ],
      },
      {
        id: "hb-10",
        courseId: "html-basics",
        title: "Semantik HTML",
        duration: "13 daqiqa",
        description: "header, nav, main, section, article, footer",
        content:
          "Semantik elementlar sahifaning ma'nosini bildiradi — brauzer va qidiruv tizimlari tushunishi uchun.\n\n```html\n<header>\n  <nav>\n    <ul>\n      <li><a href=\"/\">Bosh sahifa</a></li>\n      <li><a href=\"/about\">Haqimizda</a></li>\n    </ul>\n  </nav>\n</header>\n\n<main>\n  <section>\n    <h2>Xizmatlarimiz</h2>\n    <article>\n      <h3>Kurs 1</h3>\n      <p>Tavsif...</p>\n    </article>\n  </section>\n  <aside>Yon panel</aside>\n</main>\n\n<footer>\n  <p>&copy; 2024 Web Academy</p>\n</footer>\n```",
        order: 10,
        type: "article",
        questions: [
          { question: "<header> va <div id='header'> farqi nima?", options: ["Hech qanday farq yo'q", "<header> semantik — ma'nosi bor, div faqat vizual", "<div> yaxshiroq", "<header> katta hajm oladi"], correct: 1, explanation: "<header> — semantik teg, brauzer va qidiruv tizimlari ma'nosini tushunadi. Ekran o'quvchilar uchun ham muhim." },
          { question: "<nav> elementi nima uchun?", options: ["Yangi sahifa yaratish", "Sahifa navigatsiya (havolalar) uchun", "Bosh sahifa tegi", "Forma yaratish"], correct: 1, explanation: "<nav> — navigation. Asosiy havolalar guruhini ifodalaydi. Sahifada bir nechta <nav> bo'lishi mumkin." },
          { question: "<main> elementi sahifada necha marta ishlatiladi?", options: ["Xohlagancha", "Faqat 1 marta", "2 marta", "Kamida 3 marta"], correct: 1, explanation: "<main> — sahifaning asosiy kontenti. Brauzer bu bo'limni bosh kontent sifatida belgilaydi. Faqat 1 marta bo'lishi kerak." },
          { question: "<article> va <section> farqi nima?", options: ["Hech qanday farq yo'q", "<article> mustaqil kontent, <section> guruh bo'limi", "<section> mustaqil, <article> guruh", "Ikkalasi ham bir xil"], correct: 1, explanation: "<article> — o'z-o'zicha to'liq mazmunli kontent (blog post). <section> — tematik guruh, sarlavhasi bo'lishi kerak." },
        ],
      },
      {
        id: "hb-11",
        courseId: "html-basics",
        title: "Audio va Video",
        duration: "9 daqiqa",
        description: "audio, video, source elementlari",
        content:
          "```html\n<!-- Video -->\n<video width=\"640\" height=\"360\" controls autoplay muted>\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  <source src=\"video.webm\" type=\"video/webm\">\n  Brauzeringiz videoni qo'llab-quvvatlamaydi.\n</video>\n\n<!-- Audio -->\n<audio controls>\n  <source src=\"audio.mp3\" type=\"audio/mpeg\">\n  <source src=\"audio.ogg\" type=\"audio/ogg\">\n</audio>\n\n<!-- YouTube embed -->\n<iframe width=\"560\" height=\"315\" \n  src=\"https://www.youtube.com/embed/VIDEO_ID\"\n  allowfullscreen></iframe>\n```",
        order: 11,
        type: "article",
        questions: [
          { question: "<video> tegida controls atributi nima qiladi?", options: ["Videoni auto ijro qiladi", "Play/pause, ovoz, to'liq ekran tugmalarini ko'rsatadi", "Videoni yashiradi", "Video sifatini belgilaydi"], correct: 1, explanation: "controls — brauzerning standart video boshqarish panelini ko'rsatadi: play, pause, ovoz, vaqt, fullscreen." },
          { question: "<source> tegi nima uchun?", options: ["Manbani ko'rsatish uchun", "Turli format/sifatda media taqdim etish uchun", "Fayl saqlash uchun", "CSS qo'shish uchun"], correct: 1, explanation: "<source> — brauzer qo'llab-quvvatlaydigan formati topilgunga qadar navbatma-navbat sinab ko'radi (mp4, webm, ogg)." },
          { question: "YouTube videoni iframe orqali qo'shish uchun qaysi url formati?", options: ["youtube.com/watch?v=ID", "youtube.com/embed/ID", "youtu.be/ID", "youtube.com/video/ID"], correct: 1, explanation: "YouTube embed uchun: https://www.youtube.com/embed/VIDEO_ID — bu maxsus ko'mish URL formati." },
          { question: "autoplay atributi nima?", options: ["Video avtomatik yuklab oladi", "Video sahifa ochilganda avtomatik boshlanadi", "Video sekin ijro bo'ladi", "Video takrorlanadi"], correct: 1, explanation: "autoplay — video sahifa ochilganda avtomatik boshlaydi. Aksariyat brauzerlar faqat muted bilan birgalikda ruxsat beradi." },
        ],
      },
      {
        id: "hb-12",
        courseId: "html-basics",
        title: "Meta teglar va SEO",
        duration: "10 daqiqa",
        description: "meta, title, og: teglar",
        content:
          "```html\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"Sayt tavsifi - 150-160 belgi\">\n  <meta name=\"keywords\" content=\"html, css, javascript\">\n  <meta name=\"author\" content=\"Web Academy\">\n  \n  <!-- Open Graph (ijtimoiy tarmoqlar uchun) -->\n  <meta property=\"og:title\" content=\"Sahifa nomi\">\n  <meta property=\"og:description\" content=\"Tavsif\">\n  <meta property=\"og:image\" content=\"https://example.com/image.jpg\">\n  \n  <title>Sahifa nomi | Web Academy</title>\n</head>\n```",
        order: 12,
        type: "article",
        questions: [
          { question: "meta charset='UTF-8' nima uchun?", options: ["Sahifa tezligini oshirish", "Belgilar kodlashini belgilash (o'zbek harflari to'g'ri chiqishi)", "Sahifa rangini o'rnatish", "Brauzer turini aniqlash"], correct: 1, explanation: "UTF-8 — keng tarqalgan belgilar kodlashi. O'zbek, rus va boshqa milliy harflar to'g'ri ko'rinishi uchun muhim." },
          { question: "viewport meta tegi nima uchun?", options: ["Sahifa ko'rinishini belgilash", "Mobil qurilmalarda sahifani to'g'ri o'lchamda ko'rsatish", "Videoni sozlash", "Rasmlarni yuklash"], correct: 1, explanation: "viewport meta — sahifani mobil qurilma ekraniga moslashtiради. Responsive dizayn uchun majburiy!" },
          { question: "og:title meta tegi qayerda ishlatiladi?", options: ["Brauzer sarlavhasida", "Ijtimoiy tarmoqlarda ulashganda (Facebook, Telegram) ko'rinadigan sarlavha", "Qidiruv natijalarida", "Email da"], correct: 1, explanation: "Open Graph (og:) — Facebook, Telegram kabi tarmoqlarda link ulashganda chiqadigan ma'lumotlarni belgilaydi." },
          { question: "meta description necha belgi bo'lishi tavsiya etiladi?", options: ["50 belgi", "300-400 belgi", "150-160 belgi", "10 belgi"], correct: 2, explanation: "Meta description — 150-160 belgi. Qidiruv natijalarida (Google) sahifa tavsifi sifatida ko'rsatiladi." },
        ],
      },
      {
        id: "hb-13",
        courseId: "html-basics",
        title: "HTML5 yangiliklari",
        duration: "11 daqiqa",
        description: "Canvas, SVG, data-* atributlari",
        content:
          "```html\n<!-- Canvas (JavaScript bilan) -->\n<canvas id=\"myCanvas\" width=\"400\" height=\"200\"></canvas>\n\n<!-- SVG -->\n<svg width=\"100\" height=\"100\">\n  <circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"#00BCD4\" />\n</svg>\n\n<!-- Data atributlari -->\n<div data-user-id=\"123\" data-role=\"admin\">Foydalanuvchi</div>\n\n<!-- Progress bar -->\n<progress value=\"70\" max=\"100\">70%</progress>\n\n<!-- Range input -->\n<input type=\"range\" min=\"0\" max=\"100\" value=\"50\">\n\n<!-- Color picker -->\n<input type=\"color\" value=\"#00BCD4\">\n```",
        order: 13,
        type: "article",
        questions: [
          { question: "<canvas> va <svg> farqi nima?", options: ["Hech qanday farq yo'q", "<canvas> JS bilan piksel asosida chizadi, SVG vektoral element", "<svg> JS bilan, canvas HTML", "Ikkalasi ham bir xil"], correct: 1, explanation: "<canvas> — JS orqali piksellarga chizish. SVG — vektoral grafika, HTML teg sifatida. SVG skalalaninganda sifat yo'qolmaydi." },
          { question: "data-* atributlari nima uchun?", options: ["CSS uchun", "HTML elementlarga maxsus ma'lumot saqlash uchun", "JavaScript ni o'chirish uchun", "Server uchun"], correct: 1, explanation: "data-* — foydalanuvchi tomonidan belgilanadigan ma'lumot atributlari. JS dan dataset orqali o'qiladi: element.dataset.userId." },
          { question: "<progress value='70' max='100'> nima ko'rsatadi?", options: ["70% to'lgan progress bar", "100% progress", "70 soniya", "70 ta element"], correct: 0, explanation: "<progress> — jarayon ko'rsatgich. value/max nisbati to'lganlik foizini bildiradi. 70/100 = 70% to'lgan." },
          { question: "<input type='range'> nima?", options: ["Matn kiritish", "Skalyar (surma) kiritish boshqaruvi", "Rang tanlash", "Sana tanlash"], correct: 1, explanation: "<input type='range'> — surma (slider) boshqaruvi. min, max, step, value atributlari bilan sozlanadi." },
        ],
      },
      {
        id: "hb-14",
        courseId: "html-basics",
        title: "Yakuniy loyiha",
        duration: "25 daqiqa",
        description: "To'liq HTML sahifasi yaratish",
        content:
          "Barcha o'rganganlaringizni birlashtiriб, to'liq HTML sahifasi yarating.\n\n**Loyiha: Shaxsiy portfolio sahifasi**\n\nTarkib:\n- `<header>` — navigatsiya\n- Hero section — sarlavha va tavsif\n- `<section>` — Ko'nikmalar\n- `<section>` — Loyihalar\n- `<section>` — Men haqimda\n- Bog'lanish formasi\n- `<footer>`\n\nBu loyiha CV ga qo'shsa bo'ladigan real ish bo'ladi!",
        links: [
          { title: "Brittany Chiang — Portfolio namunasi", url: "https://brittanychiang.com" },
          { title: "HTML5 UP — Bepul HTML shablonlar", url: "https://html5up.net" },
          { title: "freeCodeCamp — Portfolio loyiha", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-personal-portfolio-webpage-project/build-a-personal-portfolio-webpage" },
        ],
        order: 14,
        type: "article",
        questions: [
          {
            question: "HTML da eng katta sarlavha tegi qaysi?",
            options: ["<h6>", "<h1>", "<header>", "<title>"],
            correct: 1,
            explanation: "<h1> — eng katta va muhim sarlavha. <h6> — eng kichigi. Sahifada odatda bitta <h1> bo'lishi kerak.",
          },
          {
            question: "Havola yaratish uchun qaysi teg ishlatiladi?",
            options: ["<link>", "<url>", "<a>", "<href>"],
            correct: 2,
            explanation: "<a href='...'>Matn</a> — anchor tegi. href atributi havola manzilini ko'rsatadi.",
          },
          {
            question: "Rasm qo'shish uchun to'g'ri usul qaysi?",
            options: ["<image src='r.jpg'>", "<img src='r.jpg' alt='tavsif'>", "<img>r.jpg</img>", "<picture src='r.jpg'>"],
            correct: 1,
            explanation: "<img> — yopilmaydigan teg. src — rasm manzili, alt — ko'rinmasa chiqadigan matn (majburiy).",
          },
          {
            question: "HTML da izoh (comment) qanday yoziladi?",
            options: ["// Izoh", "/* Izoh */", "<!-- Izoh -->", "# Izoh"],
            correct: 2,
            explanation: "<!-- bu izoh --> — HTML dagi to'g'ri izoh yozish usuli. Brauzer bu matnni ko'rsatmaydi.",
          },
          {
            question: "<div> va <span> farqi nima?",
            options: ["Hech qanday farq yo'q", "<div> blok, <span> inline element", "<span> blok, <div> inline element", "<div> faqat matn uchun"],
            correct: 1,
            explanation: "<div> — blok element (yangi qatordan boshlanadi), <span> — inline element (matn ichida ishlatiladi).",
          },
        ],
      },
    ],
  },
  {
    id: "html-advanced",
    title: "HTML Ilg'or Mavzular",
    description:
      "Semantik HTML, kirish imkoniyati va SEO uchun eng yaxshi amaliyotlar.",
    category: "HTML",
    level: "O'rta",
    duration: "4 soat",
    lessonsCount: 8,
    image: "course-html",
    color: "#E44D26",
    instructor: "Web Academy jamoasi",
    rating: 4.8,
    studentsCount: 2130,
    isPremium: false,
    topics: ["Semantik HTML", "Accessibility", "SEO", "Microdata", "Web Components"],
    lessons: [
      {
        id: "ha-1",
        courseId: "html-advanced",
        title: "Kirish imkoniyati (Accessibility)",
        duration: "15 daqiqa",
        description: "ARIA, keyboard navigation, screen readers",
        content:
          "Kirish imkoniyati (Accessibility / a11y) — veb-saytni barcha foydalanuvchilar, shu jumladan nogironlar uchun ham qulay qilish.\n\n```html\n<!-- ARIA label -->\n<button aria-label=\"Menyuni yopish\">\n  <svg>...</svg>\n</button>\n\n<!-- Role -->\n<div role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"dialog-title\">\n  <h2 id=\"dialog-title\">Dialog sarlavhasi</h2>\n</div>\n\n<!-- Skip link -->\n<a href=\"#main-content\" class=\"skip-link\">Asosiy kontentga o'tish</a>\n\n<!-- Alt matn -->\n<img src=\"logo.png\" alt=\"Web Academy logotipi\">\n```",
        order: 1,
        type: "article",
      },
      {
        id: "ha-2",
        courseId: "html-advanced",
        title: "Murakkab formalar",
        duration: "18 daqiqa",
        description: "Validation, fieldset, datalist, custom elements",
        content:
          "```html\n<!-- Fieldset bilan guruh -->\n<fieldset>\n  <legend>Shaxsiy ma'lumotlar</legend>\n  <label for=\"fname\">Ism:</label>\n  <input type=\"text\" id=\"fname\" autocomplete=\"given-name\">\n</fieldset>\n\n<!-- Datalist -->\n<input list=\"cities\" name=\"city\" placeholder=\"Shahar\">\n<datalist id=\"cities\">\n  <option value=\"Toshkent\">\n  <option value=\"Samarqand\">\n  <option value=\"Buxoro\">\n</datalist>\n\n<!-- Pattern validation -->\n<input type=\"tel\" pattern=\"[0-9]{9}\" placeholder=\"901234567\">\n```",
        order: 2,
        type: "article",
      },
      {
        id: "ha-3",
        courseId: "html-advanced",
        title: "Microdata va Structured Data",
        duration: "14 daqiqa",
        description: "Schema.org, JSON-LD, rich snippets",
        content:
          "```html\n<!-- JSON-LD (tavsiya etilgan) -->\n<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Course\",\n  \"name\": \"HTML Asoslari\",\n  \"description\": \"HTML ni noldan o'rganing\",\n  \"provider\": {\n    \"@type\": \"Organization\",\n    \"name\": \"Web Academy\"\n  }\n}\n</script>\n\n<!-- Microdata -->\n<div itemscope itemtype=\"https://schema.org/Person\">\n  <span itemprop=\"name\">Ali Valiyev</span>\n  <span itemprop=\"jobTitle\">Dasturchi</span>\n</div>\n```",
        order: 3,
        type: "article",
      },
      {
        id: "ha-4",
        courseId: "html-advanced",
        title: "Performance optimizatsiyasi",
        duration: "16 daqiqa",
        description: "Lazy loading, preload, prefetch, defer",
        content:
          "```html\n<!-- Rasmlarni lazy load -->\n<img src=\"rasm.jpg\" alt=\"...\" loading=\"lazy\">\n\n<!-- Muhim resursni oldindan yuklash -->\n<link rel=\"preload\" href=\"font.woff2\" as=\"font\" crossorigin>\n\n<!-- Keyingi sahifani prefetch -->\n<link rel=\"prefetch\" href=\"/next-page\">\n\n<!-- Skriptni kechiktirish -->\n<script src=\"analytics.js\" defer></script>\n<script src=\"widget.js\" async></script>\n\n<!-- Responsive rasmlar -->\n<picture>\n  <source media=\"(min-width: 768px)\" srcset=\"large.jpg\">\n  <source media=\"(min-width: 480px)\" srcset=\"medium.jpg\">\n  <img src=\"small.jpg\" alt=\"Rasm\">\n</picture>\n```",
        order: 4,
        type: "article",
      },
      {
        id: "ha-5",
        courseId: "html-advanced",
        title: "Web Components",
        duration: "20 daqiqa",
        description: "Custom elements, Shadow DOM, templates",
        content:
          "Web Components — qayta ishlatiladigan, kapsulyatsiyalangan elementlar yaratish.\n\n```js\nclass MyButton extends HTMLElement {\n  constructor() {\n    super();\n    const shadow = this.attachShadow({ mode: 'open' });\n    shadow.innerHTML = `\n      <style>\n        button { background: #00BCD4; color: white; }\n      </style>\n      <button><slot></slot></button>\n    `;\n  }\n}\n\ncustomElements.define('my-button', MyButton);\n```\n\n```html\n<my-button>Bosing</my-button>\n```",
        order: 5,
        type: "article",
      },
      {
        id: "ha-6",
        courseId: "html-advanced",
        title: "HTML Email",
        duration: "15 daqiqa",
        description: "Email shablon yaratish",
        content:
          "Email HTML oddiy web HTML dan farq qiladi — CSS cheklangan, JavaScript ishlamaydi.\n\n```html\n<!DOCTYPE html>\n<html>\n<head><meta charset=\"UTF-8\"></head>\n<body style=\"margin: 0; font-family: Arial, sans-serif;\">\n  <table width=\"600\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\">\n    <tr>\n      <td style=\"background: #00BCD4; padding: 30px; text-align: center;\">\n        <h1 style=\"color: white; margin: 0;\">Web Academy</h1>\n      </td>\n    </tr>\n    <tr>\n      <td style=\"padding: 30px;\">\n        <p>Hurmatli foydalanuvchi,</p>\n      </td>\n    </tr>\n  </table>\n</body>\n</html>\n```",
        order: 6,
        type: "article",
      },
      {
        id: "ha-7",
        courseId: "html-advanced",
        title: "Canvas API",
        duration: "18 daqiqa",
        description: "2D grafika, animatsiya",
        content:
          "```js\nconst canvas = document.getElementById('myCanvas');\nconst ctx = canvas.getContext('2d');\n\n// To'rtburchak\nctx.fillStyle = '#00BCD4';\nctx.fillRect(10, 10, 150, 100);\n\n// Doira\nctx.beginPath();\nctx.arc(75, 75, 50, 0, Math.PI * 2);\nctx.fillStyle = '#0097A7';\nctx.fill();\n\n// Matn\nctx.font = '24px Inter';\nctx.fillStyle = '#0A1628';\nctx.fillText('Web Academy', 10, 200);\n\n// Animatsiya\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  // ... chizish\n  requestAnimationFrame(animate);\n}\nanimate();\n```",
        order: 7,
        type: "article",
      },
      {
        id: "ha-8",
        courseId: "html-advanced",
        title: "Yakuniy test",
        duration: "20 daqiqa",
        description: "HTML ilg'or mavzular bo'yicha test",
        content:
          "Ushbu darsda barcha o'rganilgan mavzular bo'yicha test topshirasiz.\n\n**Mavzular:**\n- Accessibility va ARIA\n- Semantik HTML\n- Performance\n- Web Components\n- Canvas API\n- Structured Data\n\nMuvaffaqiyatli topshirganlar **HTML Ilg'or** sertifikatini oladi!",
        order: 8,
        type: "quiz",
      },
    ],
  },
  {
    id: "css-basics",
    title: "CSS Asoslari",
    description:
      "CSS bilan veb-sahifalarni bezang. Ranglar, shriftlar, qutilar modeli va layout.",
    category: "CSS",
    level: "Boshlang'ich",
    duration: "6 soat",
    lessonsCount: 12,
    image: "course-css",
    color: "#264DE4",
    instructor: "Web Academy jamoasi",
    rating: 4.9,
    studentsCount: 4980,
    isPremium: true,
    topics: ["Selektorlar", "Box Model", "Flexbox", "Grid", "Animatsiya"],
    lessons: [
      {
        id: "cb-1",
        courseId: "css-basics",
        title: "CSS ga kirish",
        duration: "9 daqiqa",
        description: "CSS nima, qanday ishlaydi",
        content:
          "CSS (Cascading Style Sheets) — HTML elementlarini qanday ko'rinishi kerakligini belgilovchi tizim.\n\n**3 ta uslash usuli:**\n\n```html\n<!-- 1. Inline -->\n<p style=\"color: teal; font-size: 18px;\">Matn</p>\n\n<!-- 2. Internal -->\n<style>\n  p { color: teal; }\n</style>\n\n<!-- 3. External (tavsiya etiladi) -->\n<link rel=\"stylesheet\" href=\"style.css\">\n```\n\n**Cascade nima?** CSS da keyingi qoidalar oldingilarni bekor qiladi.",
        videoUrl: "https://www.youtube.com/watch?v=yfoY53QXEnI",
        order: 1,
        type: "video",
        questions: [
          { question: "CSS nimaning qisqartmasi?", options: ["Creative Style System", "Cascading Style Sheets", "Computer Style Syntax", "Custom Style Sheets"], correct: 1, explanation: "CSS — Cascading Style Sheets. HTML elementlarning ko'rinishini (rang, shrift, joylashuv) belgilaydi." },
          { question: "CSS ni qo'shishning eng tavsiya etilgan usuli?", options: ["Inline style", "Internal <style> teg", "Tashqi .css fayl bilan <link>", "JavaScript orqali"], correct: 2, explanation: "Tashqi CSS fayli — eng yaxshi usul. Kodni ajratadi, bir fayl ko'p sahifada ishlaydi, kesh imkoniyati bor." },
          { question: "Cascade CSS da nima bildiradi?", options: ["Kaskad seldaryosi", "Keyingi qoidalar oldingilarni bekor qilishi mumkin", "Faqat bitta qoida ishlaydi", "Qoidalar tartibi muhim emas"], correct: 1, explanation: "Cascade — qoidalar zanjiri. Keyingi yozilgan qoida (agar muhimlik teng bo'lsa) oldingilarni ustidan yozadi." },
          { question: "Tashqi CSS faylini HTMLga ulash sintaksisi?", options: ["<style src='style.css'>", "<css href='style.css'>", "<link rel='stylesheet' href='style.css'>", "<import url='style.css'>"], correct: 2, explanation: "<link rel='stylesheet' href='style.css'> — tashqi CSS faylini <head> ichida ulaydi." },
        ],
      },
      {
        id: "cb-2",
        courseId: "css-basics",
        title: "Selektorlar",
        duration: "14 daqiqa",
        description: "Element, class, id, combinators, pseudo-class",
        content:
          "```css\n/* Element selektori */\np { color: navy; }\n\n/* Class selektori */\n.card { border-radius: 12px; }\n\n/* ID selektori */\n#header { background: #00BCD4; }\n\n/* Avlod selektori */\n.card p { font-size: 14px; }\n\n/* To'g'ridan-to'g'ri avlod */\n.card > h2 { color: navy; }\n\n/* Pseudo-class */\na:hover { color: teal; }\ninput:focus { border-color: #00BCD4; }\nli:first-child { font-weight: bold; }\nli:nth-child(2n) { background: #f0f4f8; }\n\n/* Pseudo-element */\np::first-line { font-weight: bold; }\n.card::before { content: ''; display: block; }\n```",
        order: 2,
        type: "article",
        questions: [
          { question: "Class selektori qanday yoziladi?", options: ["#card", ".card", "card", "*card"], correct: 1, explanation: ".card — nuqta bilan boshlanadi. Bir sahifada bir nechta elementda ishlatilishi mumkin." },
          { question: "ID selektori qanday yoziladi?", options: [".header", "#header", "header!", "@header"], correct: 1, explanation: "#header — panjara (#) bilan boshlanadi. Sahifada faqat 1 ta element shu id ga ega bo'lishi kerak." },
          { question: "a:hover nima qiladi?", options: ["Barcha havola stillarini o'chiradi", "Sichqoncha ustiga borilganda stil qo'llaydi", "Havolani yashiradi", "Havolani aktiv qiladi"], correct: 1, explanation: ":hover — pseudo-class. Sichqoncha element ustiga borilganda ishlaydi. :focus, :active, :visited ham pseudo-classlar." },
          { question: ".card p selektori nima ma'nosi?", options: ["card klassi va p bir xil element", ".card ICHIDAGI barcha <p> elementlar", "<p> ichidagi .card elementlar", "Birinchi <p> element"], correct: 1, explanation: "Bo'sh joy — avlod selektori. .card p — .card elementi ICHIDA joylashgan barcha <p> larga stil beradi." },
        ],
      },
      {
        id: "cb-3",
        courseId: "css-basics",
        title: "Ranglar va fondlar",
        duration: "12 daqiqa",
        description: "Color, background, gradient",
        content:
          "```css\n/* Rang usullari */\n.el { color: teal; }           /* Named */\n.el { color: #00BCD4; }        /* HEX */\n.el { color: rgb(0, 188, 212); }  /* RGB */\n.el { color: hsl(187, 100%, 42%); } /* HSL */\n.el { color: rgba(0,188,212, 0.5); } /* Shaffoflik */\n\n/* Fon */\n.hero {\n  background-color: #f4f6f9;\n  background-image: url('bg.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n/* Gradient */\n.btn {\n  background: linear-gradient(135deg, #00BCD4, #0097A7);\n}\n.circle {\n  background: radial-gradient(circle, #00BCD4, #264DE4);\n}\n```",
        order: 3,
        type: "article",
        questions: [
          { question: "HEX rang #00BCD4 da nechta belgi bor?", options: ["4", "6", "8", "3"], correct: 1, explanation: "#RRGGBB — 6 belgi. Har 2 ta: qizil, yashil, ko'k. #000 = qora, #fff = oq, #00BCD4 = teal rang." },
          { question: "rgba(0, 188, 212, 0.5) dagi 0.5 nima bildiradi?", options: ["50% qizil rang", "50% shaffoflik (opacity)", "50px o'lcham", "50% yashil rang"], correct: 1, explanation: "rgba 4-qiymati — alpha (shaffoflik). 0 = to'liq shaffof, 1 = to'liq qovoq. 0.5 = yarim shaffof." },
          { question: "linear-gradient(135deg, #00BCD4, #0097A7) nima yaratadi?", options: ["Aylana gradient", "Diagonal chiziqli gradient", "Gorizontal gradient", "Rasmli fon"], correct: 1, explanation: "linear-gradient(burchak, rang1, rang2) — chiziqli gradient. 135deg = diagonal (chapdan o'ngga pastga)." },
          { question: "background-size: cover nima qiladi?", options: ["Rasmni kichraytiradi", "Rasm elementni to'liq qoplashi uchun kengaytiradi (kesilishi mumkin)", "Rasm takrorlanadi", "Rasm o'zgarmas qoladi"], correct: 1, explanation: "cover — rasm element maydonini to'liq qoplashi uchun proporsional kengaytiradi. Ba'zi qismlar kesilishi mumkin." },
        ],
      },
      {
        id: "cb-4",
        courseId: "css-basics",
        title: "Shriftlar va matn",
        duration: "13 daqiqa",
        description: "font-family, size, weight, line-height, text-align",
        content:
          "```css\n/* Google Fonts ulash */\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');\n\nbody {\n  font-family: 'Inter', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.6;\n  color: #0A1628;\n}\n\nh1 {\n  font-size: 2.5rem;     /* 40px */\n  font-weight: 700;\n  letter-spacing: -0.5px;\n}\n\np {\n  text-align: left;\n  text-indent: 20px;\n  word-spacing: 2px;\n  text-transform: uppercase; /* lowercase, capitalize */\n  text-decoration: underline; /* none, line-through */\n}\n```",
        order: 4,
        type: "article",
        questions: [
          { question: "font-family: 'Roboto', sans-serif — sans-serif nima uchun?", options: ["Ikkilamchi shrift, Roboto yuklanmasa ishlaydi", "Birinchi shrift", "Shrift o'lchami", "Shrift rangi"], correct: 0, explanation: "Zapas (fallback) shrift — asosiy shrift yuklanmasa brauzer sans-serif standart shriftini ishlatadi." },
          { question: "1rem nima?", options: ["1 piksel", "Brauzer asosiy shrift o'lchamiga nisbiy (odatda 16px)", "1 santimetr", "10px"], correct: 1, explanation: "rem — root em. HTML elementining font-size ga nisbiy. Odatda 1rem = 16px. Accessibility uchun px dan afzal." },
          { question: "line-height: 1.6 nima bildiradi?", options: ["1.6px qatorlar oralig'i", "Shrift o'lchamining 1.6 barobari qator balandligi", "1.6em margin", "16% qator oralig'i"], correct: 1, explanation: "line-height birliksiz qiymat — shrift o'lchamiga ko'paytiriladi. font-size: 20px bilan line-height: 1.6 = 32px qator." },
          { question: "text-align: justify nima qiladi?", options: ["Matnni o'ngga hizalaydi", "Matnni ikkala tomonga hizalaydi (gazetalar uslubida)", "Matnni markazga hizalaydi", "Matnni chapga hizalaydi"], correct: 1, explanation: "justify — matnni chap va o'ng chegaraga qadar tekislaydi. So'zlar oralig'ini avtomatik kengaytiradi." },
        ],
      },
      {
        id: "cb-5",
        courseId: "css-basics",
        title: "Box Model",
        duration: "15 daqiqa",
        description: "margin, padding, border, width, height",
        content:
          "Har bir HTML element quti (box) sifatida ko'riladi.\n\n```css\n.card {\n  /* Content */\n  width: 300px;\n  height: auto;\n  \n  /* Padding — ichki bo'shliq */\n  padding: 20px;           /* barcha tomonlar */\n  padding: 10px 20px;      /* yuqori-quyi | chap-o'ng */\n  padding: 10px 20px 15px 20px; /* yuqori | o'ng | quyi | chap */\n  \n  /* Border */\n  border: 1px solid #E4EAF2;\n  border-radius: 12px;\n  \n  /* Margin — tashqi bo'shliq */\n  margin: 0 auto; /* gorizontal markazlashtirish */\n  \n  /* Box-sizing (muhim!) */\n  box-sizing: border-box;\n}\n```\n\n**`box-sizing: border-box`** — padding va border width ichiga kiritiladi. Har doim `*` uchun o'rnatish tavsiya etiladi!",
        order: 5,
        type: "article",
        questions: [
          { question: "CSS Box Model tartibini ichdan tashqariga tanlang:", options: ["margin → border → padding → content", "content → padding → border → margin", "padding → content → border → margin", "border → margin → padding → content"], correct: 1, explanation: "Box Model: content (asosiy) → padding (ichki bo'sh joy) → border (chegara) → margin (tashqi bo'sh joy)." },
          { question: "box-sizing: border-box nima qiladi?", options: ["Faqat border o'lchami belgilanadi", "width/height ga padding va border kiritiladi (realistik o'lcham)", "Elementni qutiga aylantiradi", "Margin hisoblanmaydi"], correct: 1, explanation: "border-box — width: 300px deb yozsak, element 300px bo'ladi (padding va border ichiga kiradi). Hisoblash osonlashadi." },
          { question: "margin: 0 auto nima qiladi?", options: ["Elementni yashiradi", "Elementni gorizontal markazga qo'yadi", "Elementni vertikal markazga qo'yadi", "Elementni chapga qo'yadi"], correct: 1, explanation: "margin: 0 auto — yuqori/pastda 0, chap/o'ngda auto. Element blok bo'lsa, gorizontal markazga joylashadi." },
          { question: "padding: 10px 20px 15px 5px — tartib qanday?", options: ["chapdan soat yo'li bilan", "Yuqori → O'ng → Past → Chap (soat yo'li)", "Chap → O'ng → Yuqori → Past", "Barcha tomonlar bir xil"], correct: 1, explanation: "4 qiymat: Yuqori(10) → O'ng(20) → Past(15) → Chap(5). TRBL: Top Right Bottom Left — soat yo'li." },
        ],
      },
      {
        id: "cb-6",
        courseId: "css-basics",
        title: "Display va Position",
        duration: "17 daqiqa",
        description: "block, inline, relative, absolute, fixed, sticky",
        content:
          "```css\n/* Display */\n.block { display: block; }       /* To'liq kenglik */\n.inline { display: inline; }     /* Matn ichida */\n.inline-block { display: inline-block; } /* Ikkalasi uchun */\n.hidden { display: none; }       /* Ko'rinmas */\n\n/* Position */\n.relative { \n  position: relative;\n  top: 10px; left: 20px; /* asl joyiga nisbatan */\n}\n\n.absolute {\n  position: absolute;\n  top: 0; right: 0; /* eng yaqin relative ota elementga nisbatan */\n}\n\n.fixed {\n  position: fixed;\n  bottom: 20px; right: 20px; /* viewport ga nisbatan */\n  z-index: 100;\n}\n\n.sticky {\n  position: sticky;\n  top: 0; /* scroll qilganda yopishib qoladi */\n}\n```",
        order: 6,
        type: "article",
        questions: [
          { question: "display: none va visibility: hidden farqi nima?", options: ["Hech qanday farq yo'q", "display:none joy ham olmaydi, visibility:hidden joy oladi lekin ko'rinmaydi", "visibility:hidden joy ham olmaydi", "display:none ko'rinmaydi lekin joy oladi"], correct: 1, explanation: "display:none — element sahifadan butunlay olib tashlangandek. visibility:hidden — ko'rinmaydi lekin joy egallaydi." },
          { question: "position: absolute elementi nima ga nisbatan joylashadi?", options: ["Ekranga nisbatan", "Sahifa boshiga nisbatan", "Eng yaqin position:relative/absolute/fixed ota elementga nisbatan", "Browser oynasiga"], correct: 2, explanation: "absolute — nisbiy joylashuv. Ota elementda position belgilangan bo'lsa, shunga nisbatan. Aks holda body ga nisbatan." },
          { question: "position: fixed elementi nima ga nisbatan joylashadi?", options: ["Ota elementga", "Sahifaga", "Browser oynasiga (viewport) — scroll bo'lganda ham qoladi", "Birinchi elementga"], correct: 2, explanation: "fixed — brauzer oynasiga nisbatan. Sahifa aylantirilganda (scroll) ham o'z joyida qoladi. Navbar uchun ideal." },
          { question: "z-index nima qiladi?", options: ["Elementning gorizontal joyini belgilaydi", "Elementlarning qaysi biri ustida ko'rinishini (qatlam tartibi) belgilaydi", "Elementni kattalashtiradi", "Elementning shaffofligini belgilaydi"], correct: 1, explanation: "z-index — qatlam tartibi. Kattaroq z-index ustida ko'rinadi. Faqat position:relative/absolute/fixed/sticky da ishlaydi." },
        ],
      },
      {
        id: "cb-7",
        courseId: "css-basics",
        title: "Flexbox",
        duration: "20 daqiqa",
        description: "flex container va flex items xususiyatlari",
        content:
          "```css\n/* Container */\n.flex-container {\n  display: flex;\n  flex-direction: row;          /* row | column | row-reverse */\n  justify-content: space-between; /* main axis */\n  align-items: center;          /* cross axis */\n  flex-wrap: wrap;\n  gap: 16px;\n}\n\n/* Items */\n.flex-item {\n  flex: 1;        /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */\n  flex: 0 0 200px; /* o'lchami o'zgarmaydi */\n  align-self: flex-start; /* individual hizalanish */\n  order: 2; /* tartib */\n}\n\n/* Markazlashtirish (eng ko'p ishlatiladigan) */\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n```",
        order: 7,
        type: "article",
        questions: [
          { question: "Flexbox yoqish uchun qaysi xususiyat?", options: ["display: block", "display: flex", "flex: 1", "flex-direction: row"], correct: 1, explanation: "display: flex — ota elementga qo'llanadi. Barcha to'g'ridan-to'g'ri bolalar flex item ga aylanadi." },
          { question: "justify-content: space-between nima qiladi?", options: ["Elementlarni markazga qo'yadi", "Birinchi va oxirgi chekkalarga, qolganlar teng oraliq bilan", "Barcha elementlarni bir-biridan teng uzoqda qo'yadi", "Elementlarni to'g'ri tekislaydi"], correct: 1, explanation: "space-between — bosh va oxirgi elementlar chekkada, oradagilar teng interval bilan. Navbar uchun keng ishlatiladi." },
          { question: "align-items: center nima qiladi?", options: ["Elementlarni gorizontal markazga qo'yadi", "Elementlarni ko'ndalang o'qi bo'yicha markazlashtiradi", "Matnni markazga qo'yadi", "Elementlarni pastga qo'yadi"], correct: 1, explanation: "align-items — ko'ndalang o'q (cross axis). flex-direction:row bo'lsa, vertikal markazlashtiradi." },
          { question: "flex-wrap: wrap nima qiladi?", options: ["Elementlarni yashiradi", "Sig'masa keyingi qatorga o'tish imkonini beradi", "Elementlarni kichraytiradi", "Qatorni o'chiradi"], correct: 1, explanation: "flex-wrap:wrap — konteyner torayib ketsa, flex itemlar keyingi qatorga o'tadi. nowrap (standart) — toraytiriladi." },
        ],
      },
      {
        id: "cb-8",
        courseId: "css-basics",
        title: "CSS Grid",
        duration: "22 daqiqa",
        description: "grid-template, grid areas, auto-placement",
        content:
          "```css\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto 1fr auto;\n  gap: 20px;\n  \n  /* Named areas */\n  grid-template-areas:\n    'header header header'\n    'sidebar main main'\n    'footer footer footer';\n}\n\n.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n.footer { grid-area: footer; }\n\n/* Individual item joylash */\n.featured {\n  grid-column: 1 / 3; /* 1-ustundan 3-gacha */\n  grid-row: 1 / 2;\n}\n```",
        order: 8,
        type: "article",
        questions: [
          { question: "CSS Grid yoqish uchun qaysi xususiyat?", options: ["display: flex", "display: grid", "grid: 1", "grid-template: row"], correct: 1, explanation: "display: grid — ota elementga qo'llanadi. Grid ikki o'lchamli (2D) joylashuv tizimi, Flexbox esa bir o'lchamli (1D)." },
          { question: "grid-template-columns: repeat(3, 1fr) nima yaratadi?", options: ["3 ta qator", "Har biri teng bo'lgan 3 ta ustun", "300px kenglik", "3 ta band"], correct: 1, explanation: "repeat(3, 1fr) — 3 ta ustun, har biri bo'sh joyni teng bo'lisib oladi. 1fr = fraction (bir bo'lak)." },
          { question: "fr birligi nima?", options: ["Frame (kadr)", "Fraction — mavjud bo'sh joyning ulushi", "Free (bepul)", "Font relative"], correct: 1, explanation: "fr — fractional unit. Mavjud bo'sh joyni ulushlab beradi. 1fr 2fr = 1:2 nisbatda bo'linadi." },
          { question: "grid-area: header nima qiladi?", options: ["Elementga header id beradi", "Elementni grid-template-areas da belgilangan 'header' hududga joylashtiradi", "Header class qo'shadi", "Header tegini yaratadi"], correct: 1, explanation: "grid-area — elementni grid-template-areas da nomlangan hudud ('header') ga joylashtiradi. Vizual layout qurishni osonlashtiradi." },
        ],
      },
      {
        id: "cb-9",
        courseId: "css-basics",
        title: "Responsive Design",
        duration: "18 daqiqa",
        description: "Media queries, mobile-first, breakpoints",
        content:
          "```css\n/* Mobile First yondashuv */\n.container {\n  padding: 16px;\n  max-width: 100%;\n}\n\n/* Tablet: 768px+ */\n@media (min-width: 768px) {\n  .container {\n    padding: 24px;\n    max-width: 768px;\n    margin: 0 auto;\n  }\n  .grid { grid-template-columns: repeat(2, 1fr); }\n}\n\n/* Desktop: 1024px+ */\n@media (min-width: 1024px) {\n  .container { max-width: 1200px; }\n  .grid { grid-template-columns: repeat(3, 1fr); }\n}\n\n/* Dark mode */\n@media (prefers-color-scheme: dark) {\n  body { background: #0A1628; color: white; }\n}\n```",
        order: 9,
        type: "article",
        questions: [
          { question: "@media (max-width: 768px) {} nima qiladi?", options: ["Sahifani 768px ga qiladi", "768px va undan kichik ekranlarda ishlaydi", "768px dan katta ekranlarda ishlaydi", "768px kenglik beradi"], correct: 1, explanation: "max-width: 768px — ekran 768px yoki undan kichik bo'lganida bu CSS qoidalari ishlaydi. Planshet va mobil uchun." },
          { question: "Mobile-first yondashuv nima?", options: ["Faqat mobil uchun dizayn", "Kichik ekranlar uchun asosiy CSS, kattaroqlar uchun min-width bilan kengaytirish", "Kompyuter uchun avval dizayn", "Mobil sahifani alohida yaratish"], correct: 1, explanation: "Mobile-first — avval kichik ekran uchun yoziladi, keyin min-width media query lar bilan kattaroq ekranlar uchun kengaytiriladi." },
          { question: "max-width: 1200px; margin: 0 auto nima qiladi?", options: ["Sahifani 1200px kichraytiradi", "Konteyner 1200px dan oshmasin, kattaroq ekranlarda markazga qo'ysin", "1200px dan kichik sahifalar uchun", "Sahifani o'chiradi"], correct: 1, explanation: "max-width kontent juda keng bo'lib ketmasligi uchun. margin: 0 auto — markaz tekislash. Asosiy wrapper uchun keng qo'llanadi." },
          { question: "@media (prefers-color-scheme: dark) nima uchun?", options: ["Foydalanuvchi brauzer rangini o'zgartirgan", "Qurilmada qorong'u rejim yoqilgan bo'lsa ishlaydi", "Qora rang berish uchun", "Faqat kechasi ishlaydi"], correct: 1, explanation: "prefers-color-scheme: dark — foydalanuvchi OS da qorakg'u (dark mode) rejimni tanlagan bo'lsa, bu stillar ishlaydi." },
        ],
      },
      {
        id: "cb-10",
        courseId: "css-basics",
        title: "Transitions va Animations",
        duration: "16 daqiqa",
        description: "transition, @keyframes, animation",
        content:
          "```css\n/* Transition */\n.btn {\n  background: #00BCD4;\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  background: #0097A7;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0,188,212,0.3);\n}\n\n/* Keyframes */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.card {\n  animation: fadeInUp 0.5s ease forwards;\n}\n\n/* Spin */\n@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n.loader { animation: spin 1s linear infinite; }\n```",
        order: 10,
        type: "article",
        questions: [
          { question: "transition: all 0.3s ease nima qiladi?", options: ["Elementni o'chiradi", "Barcha o'zgaruvchi xususiyatlar 0.3s ichida silliq animatsiya bilan o'zgaradi", "0.3 soniyada yuklanadi", "Tezlikni oshiradi"], correct: 1, explanation: "transition: xususiyat muddat timing. all=barcha xususiyatlar, 0.3s=vaqt, ease=sekin boshlab tezlashadi." },
          { question: "@keyframes nima uchun?", options: ["CSS faylni import qilish", "Animatsiya bosqichlarini belgilash (from to, 0% 100%)", "Kadr tanlash", "Font yuklash"], correct: 1, explanation: "@keyframes — animatsiya bosqichlari. from (0%) dan to (100%) gacha yoki foizlar bilan aniq bosqichlar belgilanadi." },
          { question: "animation-iteration-count: infinite nima qiladi?", options: ["Animatsiyani 1 marta ishlatadi", "Animatsiyani cheksiz takrorlaydi", "Animatsiyani o'chiradi", "Animatsiyani teskari qiladi"], correct: 1, explanation: "infinite — animatsiya to'xtatilgunga qadar cheksiz takrorlanadi. Yuklanish spinner uchun keng ishlatiladi." },
          { question: "transform: translateY(-10px) nima qiladi?", options: ["Elementni 10px kattalashtiradi", "Elementni 10px yuqoriga siljitadi", "Elementni 10px pastga siljitadi", "Elementni 10% siljitadi"], correct: 1, explanation: "translateY(manfiy) — elementni yuqoriga siljitadi. Hover effekt uchun keng ishlatiladi: kartani hover qilganda ko'tariladi." },
        ],
      },
      {
        id: "cb-11",
        courseId: "css-basics",
        title: "CSS Variables va Custom Properties",
        duration: "12 daqiqa",
        description: "var(), :root, dynamic theming",
        content:
          "```css\n/* Global o'zgaruvchilar */\n:root {\n  --color-primary: #00BCD4;\n  --color-dark: #0A1628;\n  --color-bg: #F4F6F9;\n  --radius: 12px;\n  --shadow: 0 4px 20px rgba(0,0,0,0.08);\n  --font-size-base: 16px;\n}\n\n/* Ishlatish */\n.btn {\n  background: var(--color-primary);\n  border-radius: var(--radius);\n  box-shadow: var(--shadow);\n}\n\n/* Dark mode o'zgaruvchilari */\n[data-theme='dark'] {\n  --color-bg: #0A1628;\n  --color-dark: #ffffff;\n}\n```",
        order: 11,
        type: "article",
        questions: [
          { question: ":root selektori nima uchun?", options: ["Ildiz papkasi", "HTML dokumentining asosiy elementi — CSS o'zgaruvchilarni global belgilash uchun", "Birinchi element", "Root klassi"], correct: 1, explanation: ":root — HTML ning yuqori darajali elementi. Bu yerda belgilangan CSS o'zgaruvchilari butun sahifada ishlaydi." },
          { question: "CSS o'zgaruvchisi (custom property) qanday e'lon qilinadi?", options: ["$primary: #00BCD4", "@primary: #00BCD4", "--primary: #00BCD4", "var-primary: #00BCD4"], correct: 2, explanation: "--ismingiz: qiymat — ikkita chiziqcha bilan boshlanadi. Bu CSS standart custom property (o'zgaruvchi) sintaksisi." },
          { question: "CSS o'zgaruvchisini qanday ishlatiladi?", options: ["$primary", "@primary", "#{--primary}", "var(--primary)"], correct: 3, explanation: "var(--o'zgaruvchi-ismi) — o'zgaruvchi qiymatini o'qiydi. Masalan: color: var(--primary-color);" },
          { question: "var(--color, #000) dagi #000 nima?", options: ["Majburiy qiymat", "O'zgaruvchi topilmasa ishlaydigan zapas qiymat (fallback)", "Rang kodi", "ID selektori"], correct: 1, explanation: "var() ning ikkinchi argumenti — fallback. --color o'zgaruvchisi aniqlanmagan bo'lsa, #000 ishlatiladi." },
        ],
      },
      {
        id: "cb-12",
        courseId: "css-basics",
        title: "Yakuniy loyiha",
        duration: "30 daqiqa",
        description: "Web Academy landing page kloni",
        content:
          "CSS bilimlaringizni sinab ko'rish uchun Web Academy saytiga o'xshash landing page yarating.\n\n**Tarkib:**\n- Header (sticky nav)\n- Hero section (gradient + animatsiya)\n- Features grid\n- Kurslar karuseli\n- Testimonials\n- CTA section\n- Footer\n\n**Texnologiyalar:** HTML5 + CSS3, Flexbox, Grid, Animations, CSS Variables",
        links: [
          { title: "webacademy.uz — O'quv platformamiz", url: "https://webacademy.uz" },
          { title: "Dribbble — UI dizayn ilhom", url: "https://dribbble.com/tags/landing-page" },
          { title: "Awwwards — Eng yaxshi veb saytlar", url: "https://www.awwwards.com" },
        ],
        order: 12,
        type: "article",
        questions: [
          {
            question: "CSS da Flexbox ni yoqish uchun qaysi xususiyat ishlatiladi?",
            options: ["display: block", "display: flex", "position: flex", "flex: 1"],
            correct: 1,
            explanation: "display: flex — element ichidagi bolalarni Flexbox qoidalari asosida joylashtiradi.",
          },
          {
            question: "CSS Box Model da to'g'ri tartib qaysi?",
            options: ["margin → border → padding → content", "padding → margin → border → content", "content → padding → border → margin", "border → padding → content → margin"],
            correct: 2,
            explanation: "Box Model: content (matn) → padding (ichki bo'shliq) → border (chegara) → margin (tashqi bo'shliq).",
          },
          {
            question: "Elementni markazga joylashtirish uchun Flexbox da qaysi xususiyatlar ishlatiladi?",
            options: ["align: center", "justify-content: center + align-items: center", "text-align: center + vertical-align: middle", "center: true"],
            correct: 1,
            explanation: "justify-content: center — gorizontal, align-items: center — vertikal markazlash. Ikkalasi birga elementni to'liq markazga qo'yadi.",
          },
          {
            question: "CSS o'zgaruvchisi (Custom Property) qanday e'lon qilinadi?",
            options: ["$color: blue", "@color: blue", "--color: blue", "var color: blue"],
            correct: 2,
            explanation: "--o'zgaruvchi-nomi: qiymat — CSS o'zgaruvchisi. Ishlatish uchun: color: var(--o'zgaruvchi-nomi);",
          },
          {
            question: "CSS Grid da 3 ta teng ustun yaratish usuli?",
            options: ["columns: 3", "grid-template-columns: repeat(3, 1fr)", "flex: 3", "grid-columns: 3"],
            correct: 1,
            explanation: "grid-template-columns: repeat(3, 1fr) — 3 ta teng kenglikdagi ustun. 1fr = bo'sh joyning bir ulushi.",
          },
        ],
      },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript",
    description:
      "ES6+ dan async/await gacha — zamonaviy JavaScript ni chuqur o'rganing va interaktiv ilovalar yarating.",
    category: "JavaScript",
    level: "O'rta",
    duration: "10 soat",
    lessonsCount: 15,
    image: null,
    color: "#F7DF1E",
    instructor: "Web Academy jamoasi",
    rating: 4.8,
    studentsCount: 3876,
    isPremium: true,
    topics: ["ES6+", "DOM", "Fetch API", "Async/Await", "OOP"],
    lessons: [
      {
        id: "js-1", courseId: "javascript", title: "JavaScript ga kirish", duration: "10 daqiqa", description: "JS tarixi va imkoniyatlari", videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk", order: 1, type: "video",
        content: "JavaScript — 1995-yilda Brendan Eich tomonidan atigi 10 kunda yaratilgan dasturlash tili. Dastlab faqat veb-brauzer ichida ishlatilgan, hozirda esa eng keng tarqalgan dasturlash tillaridan biriga aylangan.\n\n**JavaScript nima uchun kerak?**\n\nHTML — sahifaning skelet (tuzilma), CSS — uning ko'rinishi, JavaScript esa — uning harakati. Tugma bosilganda nima bo'ladi, forma yuborilganda qanday tekshiriladi, ma'lumotlar serverdan qanday yuklanadi — bularning barchasi JavaScript orqali boshqariladi.\n\n**JavaScript qayerlarda ishlatiladi?**\n- **Veb brauzerda** — barcha zamonaviy brauzerlar JS ni tushunadi\n- **Serverda** — Node.js yordamida backend dasturlash\n- **Mobil ilovalarda** — React Native yordamida iOS va Android\n- **Desktop dasturlarda** — Electron yordamida (VS Code, Discord shu bilan yozilgan)\n- **Ma'lumotlar bazasida** — MongoDB JavaScript so'rovlarini qo'llab-quvvatlaydi\n\n**Birinchi JavaScript kodi:**\n```js\n// Konsolga xabar chiqarish\nconsole.log('Salom, Dunyo!');\n\n// Foydalanuvchiga oyna ko'rsatish\nalert('Web Academyga xush kelibsiz!');\n\n// Foydalanuvchidan ma'lumot olish\nconst ism = prompt('Ismingizni kiriting:');\nconsole.log('Salom, ' + ism + '!');\n```\n\n**Muhim:** JavaScript — *case-sensitive* (katta-kichik harfga sezgir). `name` va `Name` — bu ikki turli o'zgaruvchi.",
        questions: [
          { question: "JavaScript kim tomonidan yaratilgan?", options: ["Tim Berners-Lee", "Brendan Eich (Netscape, 1995)", "Guido van Rossum", "James Gosling"], correct: 1, explanation: "Brendan Eich 1995 yilda Netscape uchun JavaScript ni 10 kunda yaratdi. Dastlab Mocha, keyin LiveScript deb atalgan." },
          { question: "console.log() nima qiladi?", options: ["Sahifaga matn chiqaradi", "Brauzer konsolida ma'lumot ko'rsatadi", "Faylga yozadi", "Serverni to'xtatadi"], correct: 1, explanation: "console.log() — brauzer DevTools konsolida ma'lumot ko'rsatadi. Debug (xato topish) uchun eng ko'p ishlatiladigan usul." },
          { question: "JavaScript qayerda ishlaydi?", options: ["Faqat serverda", "Faqat brauzerda", "Brauzer (frontend) va Node.js (backend) da", "Faqat mobil qurilmalarda"], correct: 2, explanation: "JS — universal til. Brauzerda HTML/CSS bilan ishlaydi, Node.js orqali serverda ham ishlashi mumkin." },
          { question: "HTML va CSS ga nisbatan JavaScript ning roli?", options: ["Tuzilma yaratadi", "Ko'rinish beradi", "Interaktivlik va dinamik funksional ta'minlaydi", "Ma'lumot saqlaydi"], correct: 2, explanation: "HTML = tuzilma, CSS = ko'rinish, JS = harakat. Tugmalar, animatsiyalar, dinamik kontent, server bilan aloqa." },
        ],
      },
      {
        id: "js-2", courseId: "javascript", title: "O'zgaruvchilar va ma'lumot turlari", duration: "15 daqiqa", description: "let, const, var va ma'lumot turlari", order: 2, type: "article",
        content: "O'zgaruvchi — ma'lumotni saqlaydigan «quti». JavaScript da o'zgaruvchi e'lon qilishning 3 usuli bor.\n\n**var, let, const farqlari:**\n```js\n// var — eski usul, hozir ishlatilmaydi (muammoli)\nvar yosh = 18;\n\n// let — qiymati o'zgarishi mumkin bo'lgan o'zgaruvchi\nlet ball = 0;\nball = 10;  // o'zgartirish mumkin\n\n// const — qiymati o'zgarmaydigan o'zgaruvchi\nconst PI = 3.14159;\n// PI = 3; // Xato! const ni o'zgartirib bo'lmaydi\n```\n\n**Tavsiya:** Har doim `const` ishlating. Agar o'zgarishi kerak bo'lsa `let` ishlating. `var` ni hech qachon ishlatmang.\n\n**Ma'lumot turlari:**\n```js\n// 1. String (matn)\nconst ism = 'Alibek';       // yoki \"Alibek\" yoki `Alibek`\nconst salom = `Salom, ${ism}!`;  // template literal\n\n// 2. Number (son)\nconst yosh = 17;\nconst narx = 99.99;\nconst salbiy = -5;\n\n// 3. Boolean (mantiqiy)\nconst faol = true;\nconst bloklangan = false;\n\n// 4. null — ataylab bo'sh qiymat\nconst foydalanuvchi = null;\n\n// 5. undefined — qiymat berilmagan\nlet natija;  // undefined\n\n// 6. Array (massiv)\nconst kurslar = ['HTML', 'CSS', 'JavaScript'];\n\n// 7. Object (ob'ekt)\nconst talaba = { ism: 'Zafar', yosh: 16, ball: 95 };\n```\n\n**Turni tekshirish:**\n```js\nconsole.log(typeof 'Salom');     // 'string'\nconsole.log(typeof 42);          // 'number'\nconsole.log(typeof true);        // 'boolean'\nconsole.log(typeof undefined);   // 'undefined'\nconsole.log(typeof null);        // 'object' (tarixiy xato!)\nconsole.log(typeof []);          // 'object'\nconsole.log(typeof {});          // 'object'\n```\n\n**Arifmetik operatorlar:**\n```js\nlet a = 10, b = 3;\nconsole.log(a + b);   // 13 — qo'shish\nconsole.log(a - b);   // 7  — ayirish\nconsole.log(a * b);   // 30 — ko'paytirish\nconsole.log(a / b);   // 3.33... — bo'lish\nconsole.log(a % b);   // 1  — qoldiq\nconsole.log(a ** b);  // 1000 — daraja (10³)\n```",
        questions: [
          { question: "const va let farqi nima?", options: ["Hech qanday farq yo'q", "const — o'zgarmas, let — o'zgarishi mumkin", "let — o'zgarmas, const — o'zgarishi mumkin", "const faqat server uchun"], correct: 1, explanation: "const — bir marta e'lon qilinib qiymati o'zgarmaydi. let — qayta qiymat berilishi mumkin. Har doim avval const ishlating." },
          { question: "typeof null natijasi nima?", options: ["'null'", "'undefined'", "'object'", "'boolean'"], correct: 2, explanation: "typeof null === 'object' — bu JavaScript ning tarixiy xatosi. null aslida alohida tur, lekin typeof 'object' qaytaradi." },
          { question: "Template literal sintaksisi qaysi?", options: ["'Salom ' + ism", "\"Salom \" + ism", "`Salom ${ism}`", "[Salom, ism]"], correct: 2, explanation: "Template literal — backtick (`) bilan yoziladi. ${} ichida ifoda yoziladi. Ko'p qatorli matnlar uchun ham qulay." },
          { question: "typeof 42 natijasi nima?", options: ["'integer'", "'number'", "'int'", "'float'"], correct: 1, explanation: "JavaScript da butun va kasr sonlar uchun bitta tur: 'number'. typeof 42 === 'number', typeof 3.14 === 'number'." },
        ],
      },
      {
        id: "js-3", courseId: "javascript", title: "Shartlar va tsikllar", duration: "18 daqiqa", description: "if/else, switch, for, while tsikllari", order: 3, type: "article",
        content: "Dastur ba'zida turli sharoitlarda turlicha ishlashi kerak. Buning uchun shartli operatorlar va tsikllar ishlatiladi.\n\n**if / else if / else:**\n```js\nconst ball = 85;\n\nif (ball >= 90) {\n  console.log('A\\'lo (5)');\n} else if (ball >= 75) {\n  console.log('Yaxshi (4)');\n} else if (ball >= 55) {\n  console.log('Qoniqarli (3)');\n} else {\n  console.log('Qoniqarsiz (2)');\n}\n// Natija: 'Yaxshi (4)'\n```\n\n**Taqqoslash operatorlari:**\n```js\nconsole.log(5 == '5');   // true  — faqat qiymat tengligini tekshiradi\nconsole.log(5 === '5');  // false — qiymat VA tur tengligini tekshiradi\nconsole.log(5 !== 3);   // true\nconsole.log(10 > 5);    // true\nconsole.log(3 <= 3);    // true\n\n// Mantiqiy operatorlar\nconsole.log(true && false);  // false — VA (ikkalasi ham true bo'lishi kerak)\nconsole.log(true || false);  // true  — YOKI (bittasi true bo'lsa yetarli)\nconsole.log(!true);          // false — EMAS\n```\n\n**Ternary operator (qisqa if/else):**\n```js\nconst yosh = 18;\nconst holat = yosh >= 18 ? 'Voyaga yetgan' : 'Voyaga yetmagan';\nconsole.log(holat);  // 'Voyaga yetgan'\n```\n\n**for tsikli:**\n```js\n// 1 dan 5 gacha sonlarni chiqarish\nfor (let i = 1; i <= 5; i++) {\n  console.log(i);\n}\n// 1, 2, 3, 4, 5\n\n// Massiv ustida tsikl\nconst kurslar = ['HTML', 'CSS', 'JS', 'React'];\nfor (let i = 0; i < kurslar.length; i++) {\n  console.log(i + 1 + '. ' + kurslar[i]);\n}\n```\n\n**for...of — massiv elementlarini o'qish:**\n```js\nconst fanlar = ['Matematika', 'Fizika', 'Informatika'];\nfor (const fan of fanlar) {\n  console.log(fan);\n}\n```\n\n**while tsikli:**\n```js\nlet son = 1;\nwhile (son <= 10) {\n  if (son % 2 === 0) {\n    console.log(son + ' juft son');\n  }\n  son++;\n}\n// 2, 4, 6, 8, 10\n```\n\n**switch — ko'p shartli tekshiruv:**\n```js\nconst kun = 'Dushanba';\nswitch (kun) {\n  case 'Dushanba':\n  case 'Seshanba':\n  case 'Chorshanba':\n  case 'Payshanba':\n  case 'Juma':\n    console.log('Ish kuni');\n    break;\n  case 'Shanba':\n  case 'Yakshanba':\n    console.log('Dam olish kuni');\n    break;\n  default:\n    console.log('Noma\\'lum kun');\n}\n```",
        questions: [
          { question: "=== va == farqi nima?", options: ["Hech qanday farq yo'q", "=== tur ham tekshiradi (qat'iy), == faqat qiymat", "== tur ham tekshiradi, === faqat qiymat", "=== katta son uchun"], correct: 1, explanation: "=== qat'iy tenglik: '5' === 5 → false (string va number farq). == 'yumshоq': '5' == 5 → true (tur o'zgartiriladi). === ishlatish tavsiya." },
          { question: "Ternary operator qanday yoziladi?", options: ["if (shart) ? a : b", "shart ? a : b", "shart ?? a : b", "a if shart else b"], correct: 1, explanation: "ternary: shart ? trueQiymat : falseQiymat. Qisqa if-else o'rnida. const baho = ball >= 90 ? 'A' : 'B';" },
          { question: "for tsikl tuzilishi qanday?", options: ["for (start; stop; step)", "for (init; condition; update)", "for (i to n)", "for each i in n"], correct: 1, explanation: "for (boshlang'ich; shart; yangilanish) { ... }. Masalan: for (let i = 0; i < 5; i++) — 0 dan 4 gacha." },
          { question: "break va continue farqi nima?", options: ["Hech qanday farq yo'q", "break tsiklni to'xtatadi, continue joriy iteratsiyani o'tkazib keyingiga o'tadi", "continue tsiklni to'xtatadi, break o'tkazib yuboradi", "Ikkalasi ham to'xtatadi"], correct: 1, explanation: "break — tsiklni butunlay to'xtatadi. continue — joriy iteratsiyani o'tkazib yuboradi, tsikl davom etadi." },
        ],
      },
      {
        id: "js-4", courseId: "javascript", title: "Funksiyalar", duration: "18 daqiqa", description: "Function turlari, parametrlar, qaytarish qiymati", order: 4, type: "article",
        content: "Funksiya — bir necha marta ishlatiladigan kod bloki. Funksiyalar yordamida kodni qismlarga bo'lish va qayta ishlatish mumkin.\n\n**Funksiya e'lon qilish usullari:**\n```js\n// 1. Function declaration (ko'tarish — hoisting bor)\nfunction salomlash(ism) {\n  return 'Salom, ' + ism + '!';\n}\n\n// 2. Function expression\nconst kvadrat = function(x) {\n  return x * x;\n};\n\n// 3. Arrow function (eng zamonaviy va qisqa)\nconst kub = (x) => x * x * x;\nconst qo'sh = (a, b) => a + b;\n\nconsole.log(salomlash('Nilufar'));  // 'Salom, Nilufar!'\nconsole.log(kvadrat(5));            // 25\nconsole.log(kub(3));                // 27\n```\n\n**Parametrlar va default qiymatlar:**\n```js\n// Default parametr — qiymat berilmasa ishlatiladi\nfunction chegirma(narx, foiz = 10) {\n  return narx - (narx * foiz / 100);\n}\n\nconsole.log(chegirma(100));      // 90 (10% chegirma)\nconsole.log(chegirma(100, 25));  // 75 (25% chegirma)\n\n// Rest parametr — cheksiz argument qabul qilish\nconst jami = (...sonlar) => {\n  let yigindi = 0;\n  for (const son of sonlar) {\n    yigindi += son;\n  }\n  return yigindi;\n};\n\nconsole.log(jami(1, 2, 3));        // 6\nconsole.log(jami(10, 20, 30, 40)); // 100\n```\n\n**Funksiya ichida funksiya (closure):**\n```js\nfunction hisoblagich() {\n  let son = 0;  // tashqaridan ko'rinmaydi\n  return {\n    oshir: () => ++son,\n    kamayt: () => --son,\n    qiymat: () => son,\n  };\n}\n\nconst h = hisoblagich();\nconsole.log(h.oshir());   // 1\nconsole.log(h.oshir());   // 2\nconsole.log(h.kamayt());  // 1\nconsole.log(h.qiymat());  // 1\n```\n\n**Higher-order funksiyalar (funksiyani argument sifatida uzatish):**\n```js\nconst sonlar = [1, 2, 3, 4, 5];\n\n// forEach — har bir element uchun amal bajarish\nsonlar.forEach(n => console.log(n * 2));\n\n// map — yangi massiv yaratish\nconst ikkilangan = sonlar.map(n => n * 2);\nconsole.log(ikkilangan);  // [2, 4, 6, 8, 10]\n\n// filter — shartga moslarini tanlash\nconst juftlar = sonlar.filter(n => n % 2 === 0);\nconsole.log(juftlar);  // [2, 4]\n```",
        questions: [
          { question: "Arrow function sintaksisi qanday?", options: ["function (x) => x * 2", "(x) => x * 2", "x -> x * 2", "fn(x) = x * 2"], correct: 1, explanation: "Arrow function: (parametrlar) => ifoda. Agar bitta ifoda bo'lsa, {} va return shart emas. (x) => x * 2 — x ni 2 ga ko'paytiradi." },
          { question: "return kalit so'zi nima qiladi?", options: ["Funksiyani chaqiradi", "Funksiyadan qiymat qaytaradi va funksiyani to'xtatadi", "Qiymatni saqlaydi", "Funksiyani takrorlaydi"], correct: 1, explanation: "return — funksiya natijasini qaytaradi va funksiyani shu yerda to'xtatadi. return dan keyin kod ishlamaydi." },
          { question: "Default parametr qanday yoziladi?", options: ["function salom(ism = 'Mehmon')", "function salom(ism || 'Mehmon')", "function salom(ism: 'Mehmon')", "function salom(ism ?? 'Mehmon')"], correct: 0, explanation: "Default: function foo(param = standartQiymat). Argument berilmasa yoki undefined bo'lsa standart qiymat ishlatiladi." },
          { question: "Rest parametr (...args) nima qiladi?", options: ["Bitta argument qabul qiladi", "Noma'lum miqdordagi argumentlarni massiv sifatida yig'adi", "Argumentni tarqatadi", "Funksiyani nusxalaydi"], correct: 1, explanation: "...args — rest (qolgan) parametrlar. Nechta argument berilsa ham massiv sifatida yig'adi. function sum(...nums) { ... }" },
        ],
      },
      {
        id: "js-5", courseId: "javascript", title: "Massivlar (Array)", duration: "20 daqiqa", description: "Massiv metodlari: map, filter, reduce, sort", order: 5, type: "article", questions: [
          { question: "Massivning oxiriga element qo'shish uchun qaysi metod ishlatiladi?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 0, explanation: "push() — massiv oxiriga element qo'shadi. pop() — oxirgisini o'chiradi, shift() — birinchisini o'chiradi, unshift() — boshiga qo'shadi." },
          { question: "map() metodining vazifasi nima?", options: ["Massivni filtrlash", "Har bir elementni o'zgartirib yangi massiv qaytarish", "Massiv elementlarini yig'indisi", "Massivni saralash"], correct: 1, explanation: "map() — har bir elementga funksiya qo'llab, yangi massiv qaytaradi. Asl massiv o'zgarmaydi." },
          { question: "filter() metodi nima qaytaradi?", options: ["Bitta element", "Shartga mos elementlardan yangi massiv", "Boolean qiymat", "Element indeksi"], correct: 1, explanation: "filter() — shartga mos elementlardan iborat yangi massiv qaytaradi. Mos kelmaganlar o'tkazib yuboriladi." },
          { question: "[1,2,3,4,5].reduce((a, b) => a + b, 0) natijasi nima?", options: ["[1,2,3,4,5]", "5", "15", "1"], correct: 2, explanation: "reduce() — massivni bitta qiymatga kamaytiradi. Bu misol barcha sonlarni qo'shadi: 1+2+3+4+5 = 15." },
        ],
        content: "Massiv — tartibli elementlar to'plami. JavaScript da massivlar juda kuchli metodlarga ega.\n\n**Massiv yaratish va asosiy amallar:**\n```js\nconst mevalar = ['olma', 'nok', 'uzum', 'shaftoli'];\n\nconsole.log(mevalar[0]);         // 'olma' (indeks 0 dan boshlanadi)\nconsole.log(mevalar.length);     // 4\nconsole.log(mevalar[mevalar.length - 1]);  // 'shaftoli' (oxirgi)\n\n// Qo'shish\nmevalar.push('gilos');           // oxiriga qo'shish\nmevalar.unshift('anor');         // boshiga qo'shish\nconsole.log(mevalar);  // ['anor', 'olma', 'nok', 'uzum', 'shaftoli', 'gilos']\n\n// O'chirish\nmevalar.pop();    // oxirgisini o'chirish\nmevalar.shift();  // birinchisini o'chirish\n\n// Qidiruv\nconsole.log(mevalar.indexOf('nok'));     // 1\nconsole.log(mevalar.includes('uzum'));   // true\n```\n\n**map — har elementni o'zgartirib yangi massiv:**\n```js\nconst narxlar = [10000, 25000, 8000, 50000];\nconst chegirmali = narxlar.map(narx => narx * 0.8);  // 20% chegirma\nconsole.log(chegirmali);  // [8000, 20000, 6400, 40000]\n\nconst talabalar = [\n  { ism: 'Ali', ball: 85 },\n  { ism: 'Vali', ball: 92 },\n  { ism: 'Guli', ball: 78 },\n];\nconst ismlar = talabalar.map(t => t.ism);\nconsole.log(ismlar);  // ['Ali', 'Vali', 'Guli']\n```\n\n**filter — shartga moslarini tanlash:**\n```js\nconst balllar = [45, 82, 67, 91, 55, 88, 73];\nconst a'lo = balllar.filter(b => b >= 80);\nconsole.log(a'lo);  // [82, 91, 88]\n\nconst mahsulotlar = [\n  { nomi: 'Kitob', mavjud: true },\n  { nomi: 'Daftar', mavjud: false },\n  { nomi: 'Ruchka', mavjud: true },\n];\nconst bor = mahsulotlar.filter(m => m.mavjud);\nconsole.log(bor.map(m => m.nomi));  // ['Kitob', 'Ruchka']\n```\n\n**reduce — massivni bitta qiymatga kamaytirish:**\n```js\nconst sonlar = [1, 2, 3, 4, 5];\nconst yigindi = sonlar.reduce((jam, son) => jam + son, 0);\nconsole.log(yigindi);  // 15\n\nconst narxlar2 = [500, 1200, 800, 2400];\nconst umumiy = narxlar2.reduce((a, b) => a + b, 0);\nconsole.log(umumiy + ' so\\'m');  // '4900 so\\'m'\n```\n\n**sort — tartiblash:**\n```js\nconst ismlar2 = ['Zafar', 'Ali', 'Munira', 'Bobur'];\nismlar2.sort();  // alifbo tartibida\nconsole.log(ismlar2);  // ['Ali', 'Bobur', 'Munira', 'Zafar']\n\nconst sonlar2 = [10, 2, 30, 5, 20];\nsonlar2.sort((a, b) => a - b);  // o'sish tartibida\nconsole.log(sonlar2);  // [2, 5, 10, 20, 30]\n\nsonlar2.sort((a, b) => b - a);  // kamayish tartibida\nconsole.log(sonlar2);  // [30, 20, 10, 5, 2]\n```\n\n**find va findIndex:**\n```js\nconst talabalar2 = [\n  { id: 1, ism: 'Kamola', ball: 95 },\n  { id: 2, ism: 'Sardor', ball: 72 },\n  { id: 3, ism: 'Dilnoza', ball: 88 },\n];\n\nconst topildi = talabalar2.find(t => t.id === 2);\nconsole.log(topildi);  // { id: 2, ism: 'Sardor', ball: 72 }\n\nconst indeks = talabalar2.findIndex(t => t.ball > 90);\nconsole.log(indeks);  // 0\n```",
      },
      {
        id: "js-6", courseId: "javascript", title: "Ob'ektlar (Object)", duration: "17 daqiqa", description: "Ob'ekt yaratish, destructuring, spread, metodlar", order: 6, type: "article",
        content: "Ob'ekt — kalit-qiymat juftliklaridan tashkil topgan ma'lumot tuzilmasi. Haqiqiy dunyo narsalarini ifodalashda ishlatiladi.\n\n**Ob'ekt yaratish:**\n```js\nconst talaba = {\n  ism: 'Sherzod',\n  familiya: 'Toshmatov',\n  yosh: 17,\n  sinf: '10-A',\n  fanlar: ['Informatika', 'Matematika', 'Fizika'],\n  manzil: {\n    shahar: 'Toshkent',\n    tuman: 'Yunusobod',\n  },\n};\n\n// Xossalarga murojaat\nconsole.log(talaba.ism);           // 'Sherzod'\nconsole.log(talaba['familiya']);   // 'Toshmatov' (kvadrat qavs)\nconsole.log(talaba.manzil.shahar); // 'Toshkent'\nconsole.log(talaba.fanlar[0]);     // 'Informatika'\n```\n\n**Xossalarni qo'shish va o'zgartirish:**\n```js\nconst kurs = { nomi: 'HTML', daraja: 'Boshlang\\'ich' };\n\nkurs.muallif = 'Web Academy';  // yangi xossa qo'shish\nkurs.daraja = 'O\\'rta';        // mavjud xossani o'zgartirish\ndelete kurs.muallif;           // xossani o'chirish\n\nconsole.log(kurs);  // { nomi: 'HTML', daraja: 'O\\'rta' }\n```\n\n**Ob'ekt metodlari (funksiya sifatida):**\n```js\nconst to'rtburchak = {\n  eni: 5,\n  bo'yi: 8,\n  yuza: function() {\n    return this.eni * this.bo'yi;\n  },\n  perimetr() {  // qisqa yozuv\n    return 2 * (this.eni + this.bo'yi);\n  },\n};\n\nconsole.log(to'rtburchak.yuza());      // 40\nconsole.log(to'rtburchak.perimetr()); // 26\n```\n\n**Destructuring — xossalarni ajratib olish:**\n```js\nconst foydalanuvchi = {\n  ism: 'Malika',\n  email: 'malika@example.com',\n  yosh: 22,\n  shahar: 'Samarqand',\n};\n\n// Eski usul\nconst ism1 = foydalanuvchi.ism;\nconst email1 = foydalanuvchi.email;\n\n// Destructuring (zamonaviy)\nconst { ism, email, yosh, shahar } = foydalanuvchi;\nconsole.log(ism);    // 'Malika'\nconsole.log(shahar); // 'Samarqand'\n\n// Nom o'zgartirib olish\nconst { ism: fullName, yosh: age } = foydalanuvchi;\nconsole.log(fullName); // 'Malika'\n```\n\n**Spread operator — ob'ektni nusxalash va birlashtirish:**\n```js\nconst asosiy = { ism: 'Javlon', yosh: 19 };\nconst qoshimcha = { shahar: 'Namangan', kasb: 'Dasturchi' };\n\n// Birlashtirish\nconst toʻliq = { ...asosiy, ...qoshimcha };\nconsole.log(toʻliq);\n// { ism: 'Javlon', yosh: 19, shahar: 'Namangan', kasb: 'Dasturchi' }\n\n// Nusxalash + o'zgartirish (asl ob'ekt o'zgarmaydi)\nconst yangilangan = { ...asosiy, yosh: 20 };\nconsole.log(yangilangan);  // { ism: 'Javlon', yosh: 20 }\nconsole.log(asosiy.yosh);  // 19 (o'zgarmadi)\n```\n\n**Object.keys, values, entries:**\n```js\nconst bahollar = { Ali: 85, Vali: 92, Guli: 78 };\n\nconsole.log(Object.keys(bahollar));    // ['Ali', 'Vali', 'Guli']\nconsole.log(Object.values(bahollar)); // [85, 92, 78]\nconsole.log(Object.entries(bahollar));\n// [['Ali', 85], ['Vali', 92], ['Guli', 78]]\n\n// O'rtacha ball hisobi\nconst balllar = Object.values(bahollar);\nconst o'rtacha = balllar.reduce((a, b) => a + b) / balllar.length;\nconsole.log(o'rtacha);  // 85\n```",
        questions: [
          { question: "JavaScript ob'ekti qanday yaratiladi?", options: ["[ism: 'Ali', yosh: 20]", "{ ism: 'Ali', yosh: 20 }", "(ism: 'Ali', yosh: 20)", "<ism>Ali</ism>"], correct: 1, explanation: "Ob'ekt literal sintaksisi: { kalit: qiymat, ... }. Har bir xususiyat kalit-qiymat juftligi." },
          { question: "Ob'ekt xususiyatiga nuqta orqali kirish:", options: ["talaba[ism]", "talaba->ism", "talaba.ism", "talaba::ism"], correct: 2, explanation: "Dot notation: ob'ekt.xususiyat. Qulay va qisqa. Bracket notation: ob'ekt['xususiyat'] — dinamik kalitlar uchun." },
          { question: "Destructuring nima qiladi?", options: ["Ob'ektni o'chiradi", "Ob'ekt yoki massiv qiymatlarini alohida o'zgaruvchilarga chiqaradi", "Ob'ektni nusxalaydi", "Ob'ektni tarqatadi"], correct: 1, explanation: "const { ism, yosh } = talaba — ob'ektdan ism va yosh ni chiqaradi. Kodingizni qisqartiradi." },
          { question: "Object.keys(ob'ekt) nima qaytaradi?", options: ["Qiymatlar massivi", "Kalitlar massivi", "Kalit-qiymat juftliklari", "Ob'ekt uzunligi"], correct: 1, explanation: "Object.keys() — ob'ektning barcha kalitlari massivini qaytaradi. Object.values() — qiymatlar, Object.entries() — [kalit, qiymat] juftlari." },
        ],
      },
      {
        id: "js-7", courseId: "javascript", title: "DOM bilan ishlash", duration: "22 daqiqa", description: "Elementlarni topish, o'zgartirish, hodisalar", order: 7, type: "article",
        content: "DOM (Document Object Model) — HTML sahifaning JavaScript orqali o'zgartirish mumkin bo'lgan ko'rinishi. JavaScript sahifadagi istalgan elementni topishi, o'zgartirishi, qo'shishi yoki o'chirishi mumkin.\n\n**Elementlarni topish:**\n```js\n// Bitta element topish\nconst sarlavha = document.querySelector('h1');\nconst tugma = document.querySelector('#yuborish-tugmasi');\nconst xato = document.querySelector('.xato-xabar');\n\n// Bir nechta element topish\nconst barcha_li = document.querySelectorAll('li');\nconst kartochkalar = document.querySelectorAll('.kurs-kartochkasi');\n\nconsole.log(barcha_li.length);  // elementlar soni\n```\n\n**Kontent va atributlarni o'zgartirish:**\n```js\nconst sarlavha = document.querySelector('#asosiy-sarlavha');\n\n// Matn o'zgartirish\nsarlavha.textContent = 'Yangi sarlavha';  // faqat matn\nsarlavha.innerHTML = '<span>Rangli</span> sarlavha';  // HTML bilan\n\n// Atribut o'zgartirish\nconst rasm = document.querySelector('img');\nrasm.src = 'yangi-rasm.jpg';\nrasm.alt = 'Yangi rasm tavsifi';\n\n// Stil o'zgartirish\nsarlavha.style.color = '#00BCD4';\nsarlavha.style.fontSize = '32px';\nsarlavha.style.fontWeight = 'bold';\n```\n\n**Class bilan ishlash:**\n```js\nconst element = document.querySelector('.kartochka');\n\nelement.classList.add('faol');        // class qo'shish\nelement.classList.remove('yashirin'); // class o'chirish\nelement.classList.toggle('tanlangan'); // bor bo'lsa o'chirish, yo'q bo'lsa qo'shish\nconsole.log(element.classList.contains('faol')); // true/false\n```\n\n**Hodisalar (Events):**\n```js\nconst tugma = document.querySelector('#tugma');\n\n// Click hodisasi\ntugma.addEventListener('click', function() {\n  alert('Tugma bosildi!');\n});\n\n// Arrow function bilan\ntugma.addEventListener('click', () => {\n  tugma.textContent = 'Bosildi!';\n  tugma.style.backgroundColor = '#22C55E';\n});\n\n// Klaviatura hodisasi\ndocument.addEventListener('keydown', (e) => {\n  console.log('Bosilgan tugma:', e.key);\n  if (e.key === 'Enter') {\n    console.log('Enter bosildi!');\n  }\n});\n\n// Forma yuborish\nconst forma = document.querySelector('form');\nforma.addEventListener('submit', (e) => {\n  e.preventDefault();  // sahifa yangilanishini to'xtatish\n  const qiymat = document.querySelector('#input').value;\n  console.log('Yuborildi:', qiymat);\n});\n```\n\n**Yangi element yaratish va qo'shish:**\n```js\n// Yangi element yaratish\nconst yangi_li = document.createElement('li');\nyangi_li.textContent = 'Yangi vazifa';\nyangi_li.className = 'vazifa-elementi';\n\n// Ro'yxatga qo'shish\nconst royxat = document.querySelector('#vazifalar');\nroyxat.appendChild(yangi_li);   // oxiriga\nroyxat.prepend(yangi_li);       // boshiga\n\n// Elementni o'chirish\nyangi_li.remove();\n```\n\n**Amaliy misol — to'g'ri/noto'g'ri javob tekshirish:**\n```js\nconst javobInput = document.querySelector('#javob');\nconst tekshirBtn = document.querySelector('#tekshir');\nconst natija = document.querySelector('#natija');\n\ntekshirBtn.addEventListener('click', () => {\n  const javob = javobInput.value.trim();\n  if (javob.toLowerCase() === 'javascript') {\n    natija.textContent = 'To\\'g\\'ri!';\n    natija.style.color = '#22C55E';\n  } else {\n    natija.textContent = 'Noto\\'g\\'ri, qayta urinib ko\\'ring.';\n    natija.style.color = '#EF4444';\n  }\n});\n```",
        questions: [
          { question: "document.getElementById('btn') nima qaytaradi?", options: ["Satr", "id='btn' bo'lgan HTML elementni", "Barcha btn larni", "null"], correct: 1, explanation: "getElementById — sahifadagi id ga mos bitta elementni qaytaradi. Topilmasa null qaytaradi." },
          { question: "element.addEventListener('click', fn) nima qiladi?", options: ["Elementni o'chiradi", "Element bosilganda fn funksiyasini chaqirishni sozlaydi", "Elementga klass qo'shadi", "Elementni yangilaydi"], correct: 1, explanation: "addEventListener — hodisa (event) tinglovchisi. Birinchi arg: event nomi, ikkinchi: ishlaydigan funksiya." },
          { question: "innerHTML va textContent farqi nima?", options: ["Hech qanday farq yo'q", "innerHTML HTML teglari bilan birga o'rnatadi, textContent faqat matn", "textContent HTML qabul qiladi", "innerHTML sekinroq emas"], correct: 1, explanation: "innerHTML — HTML kodi bilan birga qiymat o'rnatadi (<b>matn</b> = qalin). textContent — faqat matn, teglar oddiy matn sifatida. XSS uchun textContent xavfsizroq." },
          { question: "document.querySelector('.card') nima qaytaradi?", options: ["Barcha .card larni", "Birinchi topilgan .card elementni", "CSS qoidasini", "null"], correct: 1, explanation: "querySelector — CSS selektori asosida birinchi mos elementni qaytaradi. querySelectorAll() — barcha mos elementlarni NodeList sifatida qaytaradi." },
        ],
      },
      {
        id: "js-8", courseId: "javascript", title: "Promises va Async/Await", duration: "20 daqiqa", description: "Asinxron dasturlash, Promise zanjiri, async/await", order: 8, type: "article",
        content: "JavaScript bir xatboshilik (single-threaded) dasturlash tili. Shuning uchun uzoq vaqt talab etadigan amallar (server so'rovlari, fayllarni o'qish) asinxron bajariladi — ya'ni dastur kutmaydi, boshqa ishini davom ettiradi.\n\n**Asinxron muammoni tushunish:**\n```js\nconsole.log('1. Boshlandi');\n\nsetTimeout(() => {\n  console.log('2. 2 soniyadan keyin');\n}, 2000);\n\nconsole.log('3. Tugadi');\n\n// Chiqadi: '1. Boshlandi', '3. Tugadi', '2. 2 soniyadan keyin'\n// setTimeout kutmaydi, davom etadi!\n```\n\n**Promise — kelajakdagi qiymat va'dasi:**\n```js\n// Promise yaratish\nconst ma'lumot_yuklash = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    const muvaffaqiyatli = true;\n    if (muvaffaqiyatli) {\n      resolve({ ism: 'Ali', ball: 95 });  // muvaffaqiyat\n    } else {\n      reject(new Error('Yuklab bo\\'lmadi'));  // xato\n    }\n  }, 1000);\n});\n\n// Promise dan foydalanish\nma'lumot_yuklash\n  .then(data => {\n    console.log('Muvaffaqiyat:', data);\n    return data.ism;  // keyingi .then ga uzatish\n  })\n  .then(ism => {\n    console.log('Ism:', ism);\n  })\n  .catch(xato => {\n    console.error('Xato:', xato.message);\n  })\n  .finally(() => {\n    console.log('Har holda ishlaydi');\n  });\n```\n\n**async/await — Promise ni chiroyli o'qish:**\n```js\n// async funksiya har doim Promise qaytaradi\nasync function talabaniYukla(id) {\n  try {\n    // await — Promise tugaguncha kutish\n    const javob = await fetch(`/api/talabalar/${id}`);\n    \n    if (!javob.ok) {\n      throw new Error(`HTTP xato: ${javob.status}`);\n    }\n    \n    const talaba = await javob.json();\n    console.log('Talaba:', talaba);\n    return talaba;\n  } catch (xato) {\n    console.error('Xato yuz berdi:', xato.message);\n  }\n}\n\n// Chaqirish\ntalabaniYukla(1);\n```\n\n**Promise.all — bir vaqtda bir nechta so'rov:**\n```js\nasync function barchasiniYukla() {\n  // Uchala so'rov parallel bajariladi (tezroq!)\n  const [kurslar, talabalar, o'qituvchilar] = await Promise.all([\n    fetch('/api/kurslar').then(r => r.json()),\n    fetch('/api/talabalar').then(r => r.json()),\n    fetch('/api/o\\'qituvchilar').then(r => r.json()),\n  ]);\n  \n  console.log(kurslar, talabalar, o'qituvchilar);\n}\n```\n\n**setTimeout bilan amaliy misol:**\n```js\nconst kechiktir = (ms) => new Promise(resolve => setTimeout(resolve, ms));\n\nasync function animatsiya() {\n  console.log('Boshlandi...');\n  await kechiktir(1000);\n  console.log('1 soniya o\\'tdi');\n  await kechiktir(2000);\n  console.log('Yana 2 soniya o\\'tdi');\n  console.log('Tugadi!');\n}\n\nanimatsiya();\n```",
        questions: [
          { question: "Promise ning nechta holati bor?", options: ["2 ta (fulfilled, rejected)", "3 ta (pending, fulfilled, rejected)", "4 ta", "1 ta"], correct: 1, explanation: "Promise: pending (kutmoqda), fulfilled (bajarildi), rejected (rad etildi). Yaratilganda pending, asinxron amal tugagach fulfilled yoki rejected." },
          { question: "async funksiya nima qaytaradi?", options: ["Oddiy qiymat", "Har doim Promise qaytaradi", "undefined", "null"], correct: 1, explanation: "async — funksiyani Promise ga o'raydi. return 42 → Promise.resolve(42). await orqali ichkarida kutish mumkin." },
          { question: "await kalit so'zi faqat qayerda ishlatiladi?", options: ["Istalgan joyda", "async funksiya ichida", "try/catch ichida", "Faqat .then() ichida"], correct: 1, explanation: "await — faqat async funksiya ichida ishlatiladi. Promise ni kutadi va natijasini qaytaradi. Kod davom etmaydi." },
          { question: ".then() va .catch() zanjiriga nima deyiladi?", options: ["Async chain", "Promise chaining", "Callback hell", "Method stacking"], correct: 1, explanation: "Promise chaining — .then() dan .then() ga natija uzatiladi. Xatolar .catch() da tutiladi. async/await bu jarayonni osonlashtiradi." },
        ],
      },
      {
        id: "js-9", courseId: "javascript", title: "Fetch API va HTTP so'rovlar", duration: "18 daqiqa", description: "GET, POST, JSON bilan ishlash, xatolarni ushlash", order: 9, type: "article",
        content: "Fetch API — serverga so'rov yuborish va javob olish uchun zamonaviy JavaScript vositasi. Bugun siz ko'radigan har bir dinamik veb-sayt Fetch API yoki unga o'xshash texnologiyadan foydalanadi.\n\n**GET so'rovi — ma'lumot olish:**\n```js\nasync function kurslarniOlish() {\n  try {\n    const javob = await fetch('https://jsonplaceholder.typicode.com/posts');\n    \n    // Javob muvaffaqiyatli ekanligini tekshirish\n    if (!javob.ok) {\n      throw new Error(`Xato: ${javob.status}`);\n    }\n    \n    const ma'lumotlar = await javob.json();\n    console.log('Jami:', ma'lumotlar.length, 'ta yozuv');\n    console.log('Birinchisi:', ma'lumotlar[0]);\n    return ma'lumotlar;\n  } catch (xato) {\n    console.error('So\\'rov xatosi:', xato.message);\n  }\n}\n\nkurslarniOlish();\n```\n\n**POST so'rovi — ma'lumot yuborish:**\n```js\nasync function yangiTalabaQo'shish(talaba) {\n  const javob = await fetch('/api/talabalar', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',  // JSON yuborayotganimizni bildiramiz\n    },\n    body: JSON.stringify(talaba),  // JavaScript ob'ektini JSON ga aylantirish\n  });\n  \n  const natija = await javob.json();\n  console.log('Qo\\'shildi:', natija);\n  return natija;\n}\n\nyangiTalabaQo'shish({\n  ism: 'Barno',\n  yosh: 16,\n  sinf: '10-B',\n});\n```\n\n**PUT va DELETE so'rovlari:**\n```js\n// PUT — to'liq yangilash\nasync function talabaniyYangilash(id, yangiMa'lumot) {\n  const javob = await fetch(`/api/talabalar/${id}`, {\n    method: 'PUT',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(yangiMa'lumot),\n  });\n  return await javob.json();\n}\n\n// DELETE — o'chirish\nasync function talabaniyO'chirish(id) {\n  await fetch(`/api/talabalar/${id}`, {\n    method: 'DELETE',\n  });\n  console.log(`${id} raqamli talaba o\\'chirildi`);\n}\n```\n\n**JSON — ma'lumot almashinuvi formati:**\n```js\n// JavaScript ob'ekt → JSON matn\nconst ob'ekt = { ism: 'Jasur', yosh: 18, faol: true };\nconst json = JSON.stringify(ob'ekt);\nconsole.log(json);\n// '{\"ism\":\"Jasur\",\"yosh\":18,\"faol\":true}'\n\n// JSON matn → JavaScript ob'ekt\nconst jsonMatn = '{\"narx\":99.9,\"nomi\":\"Kurs\"}';\nconst ob'ekt2 = JSON.parse(jsonMatn);\nconsole.log(ob'ekt2.nomi);  // 'Kurs'\n\n// Chiroyli chiqarish\nconsole.log(JSON.stringify(ob'ekt, null, 2));\n```\n\n**Amaliy misol — qidiruv:**\n```js\nasync function foydalanuvchiniQidirish(qidiruv) {\n  const javob = await fetch(\n    `https://api.example.com/users?q=${encodeURIComponent(qidiruv)}`\n  );\n  const natijalar = await javob.json();\n  return natijalar;\n}\n\n// Kiritish oxiridan 500ms so'ng qidirish (debounce)\nlet taymer;\ndocument.querySelector('#qidiruv').addEventListener('input', (e) => {\n  clearTimeout(taymer);\n  taymer = setTimeout(async () => {\n    const natijalar = await foydalanuvchiniQidirish(e.target.value);\n    console.log(natijalar);\n  }, 500);\n});\n```",
        questions: [
          { question: "fetch('/api/data') nima qaytaradi?", options: ["Ma'lumotni bevosita", "Promise<Response>", "JSON ob'ektini", "null"], correct: 1, explanation: "fetch() — Promise qaytaradi. .then(r => r.json()) bilan JSON ga aylantirish kerak, yoki async/await bilan await qilish." },
          { question: "response.json() nima qiladi?", options: ["JSONni saqlaydi", "JSON matnini JavaScript ob'ektiga aylantiradi (Promise)", "Response ni o'chiradi", "Serverga jo'natadi"], correct: 1, explanation: "response.json() — HTTP javobining tanasini (body) JavaScript ob'ektiga aylantiradi. Asinxron, await bilan ishlatiladi." },
          { question: "POST so'rovida nima farq qiladi?", options: ["URL farqli bo'ladi", "method, headers va body qo'shiladi", "Faqat tezroq ishlaydi", "Faqat serverda ishlaydi"], correct: 1, explanation: "POST: fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }). GET dan farqi — body orqali ma'lumot yuboradi." },
          { question: "JSON.stringify({ism: 'Ali'}) nima qaytaradi?", options: ['Ob\'ektni', '"{\"ism\":\"Ali\"}"', "['ism', 'Ali']", "null"], correct: 1, explanation: "JSON.stringify() — JavaScript ob'ektini JSON matn formatiga aylantiradi. Server ga yuborishdan yoki saqlashdan oldin ishlatiladi." },
        ],
      },
      {
        id: "js-10", courseId: "javascript", title: "LocalStorage va SessionStorage", duration: "13 daqiqa", description: "Brauzerda ma'lumot saqlash, o'qish, o'chirish", order: 10, type: "article",
        content: "Brauzer ikki xil saqlash joyini taqdim etadi: LocalStorage (brauzer yopilsa ham saqlanadi) va SessionStorage (tab yopilganda o'chadi).\n\n**LocalStorage asosiy amallar:**\n```js\n// SAQLASH — faqat string saqlanadi\nlocalStorage.setItem('foydalanuvchi_ismi', 'Shaxlo');\nlocalStorage.setItem('til', 'uz');\n\n// O'QISH\nconst ism = localStorage.getItem('foydalanuvchi_ismi');\nconsole.log(ism);  // 'Shaxlo'\n\n// Yo'q bo'lsa null qaytadi\nconst mavjudEmas = localStorage.getItem('notanish');\nconsole.log(mavjudEmas);  // null\n\n// O'CHIRISH\nlocalStorage.removeItem('til');\n\n// HAMMASINI O'CHIRISH\n// localStorage.clear();  // ehtiyot bo'ling!\n\n// ELEMENTLAR SONI\nconsole.log(localStorage.length);  // 1\n```\n\n**Ob'ektlarni saqlash (JSON orqali):**\n```js\nconst sozlamalar = {\n  mavzu: 'qorong\\'i',\n  til: 'uz',\n  bildirishnomalar: true,\n};\n\n// Saqlash: ob'ektni JSON ga aylantirish\nlocalStorage.setItem('sozlamalar', JSON.stringify(sozlamalar));\n\n// O'qish: JSON ni ob'ektga aylantirish\nconst saqlangan = localStorage.getItem('sozlamalar');\nconst sozlamalar2 = JSON.parse(saqlangan);\nconsole.log(sozlamalar2.mavzu);  // 'qorong\\'i'\n```\n\n**Amaliy misol — o'qilgan darslarni saqlash:**\n```js\nconst KALIT = 'bajarilgan_darslar';\n\n// Bajarilgan darslar ro'yxatini olish\nfunction bajarilganlarniOl() {\n  const saqlangan = localStorage.getItem(KALIT);\n  return saqlangan ? JSON.parse(saqlangan) : [];\n}\n\n// Dars bajarilgani belgilash\nfunction darsBajarildi(darsId) {\n  const ro'yxat = bajarilganlarniOl();\n  if (!ro'yxat.includes(darsId)) {\n    ro'yxat.push(darsId);\n    localStorage.setItem(KALIT, JSON.stringify(ro'yxat));\n  }\n}\n\n// Bajarilganligi tekshirish\nfunction bajarildimi(darsId) {\n  return bajarilganlarniOl().includes(darsId);\n}\n\n// Ishlatish\ndarsBajarildi('js-1');\ndarsBajarildi('js-2');\nconsole.log(bajarildimi('js-1'));  // true\nconsole.log(bajarildimi('js-5'));  // false\nconsole.log(bajarilganlarniOl()); // ['js-1', 'js-2']\n```\n\n**SessionStorage — vaqtinchalik saqlash:**\n```js\n// Faqat shu tab (oyna) uchun\nsessionStorage.setItem('vaqtinchalik', 'faqat shu sessiya uchun');\n// Tab yopilganda avtomatik o'chadi\n```",
        questions: [
          { question: "localStorage va sessionStorage farqi nima?", options: ["Hech qanday farq yo'q", "localStorage brauzer yopilsa ham saqlanadi, sessionStorage tab yopilsa o'chadi", "sessionStorage doimiy, localStorage vaqtinchalik", "Ikkalasi ham bir xil muddatda"], correct: 1, explanation: "localStorage — brauzer yopilganda ham saqlanadi. sessionStorage — faqat joriy tab (oyna) ochiq bo'lsa saqlanadi." },
          { question: "localStorage.setItem('kalit', 'qiymat') nima qiladi?", options: ["Ma'lumotni serverga yuboradi", "Ma'lumotni brauzer xotirasiga saqlaydi", "Ma'lumotni faylga yozadi", "Ma'lumotni cookie ga saqlaydi"], correct: 1, explanation: "setItem(kalit, qiymat) — localStorage ga string sifatida saqlaydi. getItem(kalit) — o'qiydi. removeItem(kalit) — o'chiradi." },
          { question: "Nima uchun ob'ektni localStorage ga saqlashdan oldin JSON.stringify kerak?", options: ["Talab emas", "localStorage faqat string qabul qiladi", "Ob'ekt katta bo'ladi", "Xavfsizlik uchun"], correct: 1, explanation: "localStorage faqat string saqlaydi. Ob'ektni to'g'ridan saqlasang '[object Object]' yoziladi. JSON.stringify → JSON.parse juftligi ishlatiladi." },
          { question: "localStorage.clear() nima qiladi?", options: ["Brauzer tarixini tozalaydi", "Barcha localStorage ma'lumotlarini o'chiradi", "Faqat bitta elementni o'chiradi", "Cookie larni o'chiradi"], correct: 1, explanation: "clear() — localStorage dagi barcha kalit-qiymatlarni o'chiradi. removeItem(kalit) — faqat bitta elementni o'chiradi." },
        ],
      },
      {
        id: "js-11", courseId: "javascript", title: "Classes va OOP", duration: "20 daqiqa", description: "Ob'ektga yo'naltirilgan dasturlash, meros, encapsulation", order: 11, type: "article",
        content: "OOP (Object-Oriented Programming) — dasturni ob'ektlar sifatida modellashtirish usuli. Class — ob'ektlar uchun «qolip» (shablon).\n\n**Class asoslari:**\n```js\nclass Talaba {\n  // Konstruktor — ob'ekt yaratilganda chaqiriladi\n  constructor(ism, familiya, sinf) {\n    this.ism = ism;\n    this.familiya = familiya;\n    this.sinf = sinf;\n    this.balllar = [];  // bo'sh massiv\n  }\n  \n  // Metod — ob'ekt funksiyasi\n  ballQo'sh(ball) {\n    this.balllar.push(ball);\n  }\n  \n  o'rtachaBall() {\n    if (this.balllar.length === 0) return 0;\n    const jami = this.balllar.reduce((a, b) => a + b, 0);\n    return Math.round(jami / this.balllar.length);\n  }\n  \n  toʻliqIsm() {\n    return `${this.ism} ${this.familiya}`;\n  }\n}\n\n// Ob'ekt yaratish (instantiation)\nconst talaba1 = new Talaba('Kamola', 'Ergasheva', '10-A');\ntalaba1.ballQo'sh(85);\ntalaba1.ballQo'sh(92);\ntalaba1.ballQo'sh(78);\n\nconsole.log(talaba1.toʻliqIsm());    // 'Kamola Ergasheva'\nconsole.log(talaba1.o'rtachaBall()); // 85\n```\n\n**Meros (Inheritance) — class dan class yaratish:**\n```js\nclass Shaxs {\n  constructor(ism, yosh) {\n    this.ism = ism;\n    this.yosh = yosh;\n  }\n  \n  tanishuv() {\n    return `Men ${this.ism}, yoshim ${this.yosh}`;\n  }\n}\n\nclass O'qituvchi extends Shaxs {\n  constructor(ism, yosh, fan) {\n    super(ism, yosh);  // ota class konstruktorini chaqirish\n    this.fan = fan;\n  }\n  \n  // Metodni qayta yozish (override)\n  tanishuv() {\n    return `${super.tanishuv()}, ${this.fan} fani o\\'qituvchisi`;\n  }\n  \n  dars() {\n    return `${this.ism} ${this.fan} fanidan dars beryapti`;\n  }\n}\n\nconst o'q = new O'qituvchi('Zulfiya opa', 35, 'Informatika');\nconsole.log(o'q.tanishuv());\n// 'Men Zulfiya opa, yoshim 35, Informatika fani o\\'qituvchisi'\nconsole.log(o'q.dars());\n// 'Zulfiya opa Informatika fanidan dars beryapti'\n```\n\n**Private xossalar (#):**\n```js\nclass BankHisobi {\n  #balans;  // # bilan private (tashqaridan ko'rinmaydi)\n  \n  constructor(boshlang'ich) {\n    this.#balans = boshlang'ich;\n  }\n  \n  pulQo'yish(miqdor) {\n    if (miqdor <= 0) throw new Error('Miqdor musbat bo\\'lishi kerak');\n    this.#balans += miqdor;\n    console.log(`+${miqdor} so'm qo'yildi. Balans: ${this.#balans}`);\n  }\n  \n  pulOlish(miqdor) {\n    if (miqdor > this.#balans) throw new Error('Balans yetarli emas');\n    this.#balans -= miqdor;\n    console.log(`-${miqdor} so'm olindi. Balans: ${this.#balans}`);\n  }\n  \n  get balans() { return this.#balans; }  // faqat o'qish\n}\n\nconst hisob = new BankHisobi(100000);\nhisob.pulQo'yish(50000);  // +50000 so'm\nhisob.pulOlish(30000);    // -30000 so'm\nconsole.log(hisob.balans); // 120000\n// hisob.#balans  // Xato! Private xossaga tashqaridan murojaat qilib bo'lmaydi\n```",
        questions: [
          { question: "class kalit so'zi nima uchun?", options: ["CSS class qo'shish", "Ob'ektlar uchun shablon (qolip) yaratish", "Funksiya chaqirish", "Modul yaratish"], correct: 1, explanation: "class — ob'ektlar uchun qolip (blueprint). Bir xil tuzilmadagi ko'p ob'ektlarni qulay yaratish imkonini beradi." },
          { question: "constructor() metodi nima qiladi?", options: ["Ob'ektni o'chiradi", "Ob'ekt yaratilganda avtomatik chaqiriladi va boshlang'ich qiymatlarni belgilaydi", "Ob'ektni nusxalaydi", "Ob'ektni eksport qiladi"], correct: 1, explanation: "constructor — new bilan ob'ekt yaratilganda avtomatik ishlaydi. this.ism = ism kabi boshlang'ich qiymatlar o'rnatiladi." },
          { question: "extends kalit so'zi nima qiladi?", options: ["Faylni kengaytiradi", "Bir class boshqa classdan meros olishini ta'minlaydi", "Sinxron kutish", "Export qilish"], correct: 1, explanation: "extends — meros (inheritance). class Talaba extends Inson — Talaba Inson ning barcha xususiyatlarini oladi va yangilari qo'shiladi." },
          { question: "super() nima qiladi?", options: ["Eng yuqori ob'ektni chaqiradi", "Ota class ning constructor ini chaqiradi", "Global o'zgaruvchiga murojaat", "Static metodlarni chaqiradi"], correct: 1, explanation: "super() — extends bilan merosni olganda ota class ning constructor ini chaqirish uchun. Bola class constructor ichida birinchi bo'lishi kerak." },
        ],
      },
      {
        id: "js-12", courseId: "javascript", title: "Modullar (import/export)", duration: "14 daqiqa", description: "Kodni fayllarga bo'lish, named va default export", order: 12, type: "article",
        content: "Modullar — kodni alohida fayllarga bo'lish imkonini beradi. Bu yirik dasturlarda tartibni saqlashga yordam beradi.\n\n**Named export — bir nechta narsa eksport qilish:**\n```js\n// utils.js\nexport const PI = 3.14159;\n\nexport function doira_yuza(r) {\n  return PI * r * r;\n}\n\nexport function doira_uzunligi(r) {\n  return 2 * PI * r;\n}\n\nexport const salomlash = (ism) => `Salom, ${ism}!`;\n```\n\n```js\n// main.js\nimport { PI, doira_yuza, salomlash } from './utils.js';\n\nconsole.log(PI);              // 3.14159\nconsole.log(doira_yuza(5));   // 78.53...\nconsole.log(salomlash('Ali')); // 'Salom, Ali!'\n\n// Hammasini bitta nom bilan import qilish\nimport * as Hisob from './utils.js';\nconsole.log(Hisob.doira_uzunligi(5));  // 31.41...\n```\n\n**Default export — asosiy narsa eksport qilish:**\n```js\n// talaba.js\nclass Talaba {\n  constructor(ism, ball) {\n    this.ism = ism;\n    this.ball = ball;\n  }\n  baholash() {\n    return this.ball >= 80 ? 'A\\'lo' : 'Yaxshi';\n  }\n}\n\nexport default Talaba;  // default — faqat bitta bo'lishi mumkin\n```\n\n```js\n// main.js\nimport Talaba from './talaba.js';  // nom ixtiyoriy\n\nconst t = new Talaba('Sarvar', 88);\nconsole.log(t.baholash());  // 'A\\'lo'\n```\n\n**Aralash export:**\n```js\n// api.js\nconst BASE_URL = 'https://api.webacademy.uz';\n\nexport async function kurslarniOl() {\n  const javob = await fetch(`${BASE_URL}/kurslar`);\n  return await javob.json();\n}\n\nexport async function darslarniOl(kursId) {\n  const javob = await fetch(`${BASE_URL}/kurslar/${kursId}/darslar`);\n  return await javob.json();\n}\n\nexport default { kurslarniOl, darslarniOl };\n```",
        questions: [
          { question: "export default nima qiladi?", options: ["Faylni o'chiradi", "Moduldan bitta asosiy qiymatni eksport qiladi", "Barcha o'zgaruvchilarni eksport qiladi", "Import qiladi"], correct: 1, explanation: "export default — fayl uchun bitta asosiy eksport. import Xohlagan from './fayl' — istalgan nom bilan import qilinadi." },
          { question: "Named export qanday yoziladi?", options: ["export default const foo", "export { foo, bar }", "import { foo } from", "export.foo = fn"], correct: 1, explanation: "Named export: export const foo = ... yoki export { foo, bar }. Import qilganda aynan o'sha nom ishlatiladi: import { foo } from './fayl'." },
          { question: "import { useState } from 'react' — bu nima?", options: ["react modulidan useState ni default import qilish", "react modulidan useState ni named import qilish", "useState ni yangi modul sifatida yaratish", "useState ni o'chirish"], correct: 1, explanation: "Named import — { } qavslar bilan. Eksport qilingan aniq nom bilan import qilinadi. Default import esa qavssiz yoziladi." },
          { question: "<script type='module'> nima uchun?", options: ["Faqat server uchun", "HTML da ES modullarni yoqadi (import/export ishlatish imkonini beradi)", "Kodni xavfsiz qiladi", "CSS yuklaydi"], correct: 1, explanation: "type='module' — brauzerga bu fayl ES modul ekanligini bildiradi. import/export, o'z scope'i bor. Standart script dan farqli." },
        ],
      },
      {
        id: "js-13", courseId: "javascript", title: "Xatolarni boshqarish", duration: "13 daqiqa", description: "try/catch/finally, custom Error, xato turlari", order: 13, type: "article",
        content: "Dasturda xatolar doimo yuz berishi mumkin. Ularni to'g'ri ushlash va foydalanuvchiga tushunarli xabar ko'rsatish muhim.\n\n**try / catch / finally:**\n```js\ntry {\n  // Xato yuz berishi mumkin bo'lgan kod\n  const json = '{ noto\\'g\\'ri json';\n  const ma'lumot = JSON.parse(json);  // Bu yerda xato yuz beradi\n  console.log(ma'lumot);\n} catch (xato) {\n  // Xato ushlandi\n  console.error('Xato turi:', xato.name);     // SyntaxError\n  console.error('Xato xabari:', xato.message); // Unexpected token...\n} finally {\n  // Xato bo'lsa ham, bo'lmasa ham ishlaydi\n  console.log('Operatsiya tugadi (muvaffaqiyatli yoki xatoli)');\n}\n```\n\n**Xatolarni qasddan chiqarish (throw):**\n```js\nfunction yoshniTekshir(yosh) {\n  if (typeof yosh !== 'number') {\n    throw new TypeError('Yosh son bo\\'lishi kerak');\n  }\n  if (yosh < 0 || yosh > 150) {\n    throw new RangeError('Yosh 0 dan 150 gacha bo\\'lishi kerak');\n  }\n  return `${yosh} yosh to\\'g\\'ri`;\n}\n\ntry {\n  console.log(yoshniTekshir(17));    // '17 yosh to\\'g\\'ri'\n  console.log(yoshniTekshir(-5));    // Xato!\n} catch (e) {\n  console.error(e.name + ': ' + e.message);  // RangeError: Yosh 0 dan...\n}\n```\n\n**O'z xato sinfini yaratish:**\n```js\nclass TarmoqXatosi extends Error {\n  constructor(xabar, statusKod) {\n    super(xabar);\n    this.name = 'TarmoqXatosi';\n    this.statusKod = statusKod;\n  }\n}\n\nasync function APIdan olish(url) {\n  const javob = await fetch(url);\n  \n  if (!javob.ok) {\n    throw new TarmoqXatosi(\n      `Server xatosi: ${javob.statusText}`,\n      javob.status\n    );\n  }\n  \n  return await javob.json();\n}\n\ntry {\n  const data = await APIdan_olish('/api/notanish-sahifa');\n} catch (e) {\n  if (e instanceof TarmoqXatosi) {\n    console.error(`Tarmoq xatosi (${e.statusKod}): ${e.message}`);\n    // Foydalanuvchiga ko'rsatish\n    if (e.statusKod === 404) {\n      alert('Sahifa topilmadi');\n    } else if (e.statusKod === 500) {\n      alert('Server vaqtincha ishlamayapti, keyinroq urinib ko\\'ring');\n    }\n  } else {\n    console.error('Noma\\'lum xato:', e);\n  }\n}\n```",
        questions: [
          { question: "try/catch nima uchun?", options: ["Kodni tezlashtirish", "Xatolarni ushlash va dasturning to'xtab qolmasligini ta'minlash", "Kod tuzilmasini yaxshilash", "Fayllarni yuklash"], correct: 1, explanation: "try — xato bo'lishi mumkin bo'lgan kod. catch(err) — xato bo'lsa ishlaydi. Dastur to'xtamaydi, xato boshqariladi." },
          { question: "finally bloki qachon ishlaydi?", options: ["Faqat muvaffaqiyatli bo'lganda", "Faqat xato bo'lganda", "Har doim — xato bo'lsa ham bo'lmasa ham", "Hech qachon ishlamaydi"], correct: 2, explanation: "finally — try/catch dan qat'iy nazar har doim ishlaydi. Resurslarni yopish, yuklash indikatorni o'chirish uchun ishlatiladi." },
          { question: "throw new Error('xabar') nima qiladi?", options: ["Xatoni e'tiborsiz qoldiradi", "Qo'lda xato chiqaradi — catch blokiga o'tkazadi", "Dasturni to'xtatadi", "Konsolga yozadi"], correct: 1, explanation: "throw — qo'lda xato chiqaradi. try-catch bilan ushlash mumkin. Noto'g'ri kiritilgan ma'lumotlar uchun ishlatiladi." },
          { question: "TypeError qachon yuzaga keladi?", options: ["Noto'g'ri matematika", "Noto'g'ri tur — masalan null ga xossa murojaat qilish", "Fayl topilmasa", "Tarmoq uzilsa"], correct: 1, explanation: "TypeError — noto'g'ri tur ishlatilganda. null.ism → TypeError. ReferenceError — e'lon qilinmagan o'zgaruvchi. SyntaxError — kod xato yozilgan." },
        ],
      },
      {
        id: "js-14", courseId: "javascript", title: "Event Loop va asinxronlik", duration: "17 daqiqa", description: "Call Stack, Web APIs, Callback Queue, Microtasks", order: 14, type: "article",
        content: "JavaScript bir xatboshilik (single-threaded) — ya'ni bir vaqtda faqat bitta ish bajaradi. Lekin Event Loop mexanizmi orqali asinxron operatsiyalarni boshqaradi.\n\n**JavaScript bajarish tartibi:**\n\nJavaScript kodi quyidagi mexanizmlar orqali ishlaydi:\n- **Call Stack** — bajarilayotgan funksiyalar navbati (LIFO)\n- **Web APIs** — brauzer taqdim etadigan vositalar (setTimeout, fetch, DOM)\n- **Callback Queue** — bajarilishga tayyor asinxron callback lar\n- **Microtask Queue** — Promise callback lari (Queue dan oldin bajariladi)\n- **Event Loop** — Call Stack bo'sh bo'lganda Microtask → Callback Queue dan oladi\n\n**Misol — tartibni tushunish:**\n```js\nconsole.log('1: Boshlandi');\n\nsetTimeout(() => {\n  console.log('4: setTimeout (0ms bo\\'lsa ham!)');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('3: Promise microtask');\n});\n\nconsole.log('2: Tugadi');\n\n// Natija:\n// 1: Boshlandi\n// 2: Tugadi\n// 3: Promise microtask   ← microtask birinchi!\n// 4: setTimeout           ← callback queue keyin\n```\n\n**Asinxron kodning to'g'ri yozilishi:**\n```js\n// NOTO'G'RI — callback johannam (callback hell)\nfetch('/api/foydalanuvchi/1', function(foydalanuvchi) {\n  fetch('/api/kurslar/' + foydalanuvchi.id, function(kurslar) {\n    fetch('/api/darslar/' + kurslar[0].id, function(darslar) {\n      console.log(darslar);  // Ko'p ichma-ich\n    });\n  });\n});\n\n// TO'G'RI — async/await bilan chiroyli\nasync function ma'lumotlarniYukla() {\n  const foydalanuvchi = await fetch('/api/foydalanuvchi/1').then(r => r.json());\n  const kurslar = await fetch(`/api/kurslar/${foydalanuvchi.id}`).then(r => r.json());\n  const darslar = await fetch(`/api/darslar/${kurslar[0].id}`).then(r => r.json());\n  console.log(darslar);  // Chiziqli, o'qish oson\n}\n```\n\n**Debounce — ortiqcha chaqiruvlarni kamaytirish:**\n```js\n// Foydalanuvchi yozishni to'xtatgandan 500ms keyin chaqiriladi\nfunction debounce(fn, kechikish) {\n  let taymer;\n  return function(...args) {\n    clearTimeout(taymer);\n    taymer = setTimeout(() => fn.apply(this, args), kechikish);\n  };\n}\n\nconst qidiruv = debounce(async (so'rov) => {\n  const natija = await fetch(`/api/qidiruv?q=${so'rov}`).then(r => r.json());\n  console.log(natija);\n}, 500);\n\ndocument.querySelector('#qidiruv').addEventListener('input', (e) => {\n  qidiruv(e.target.value);\n});\n```",
        questions: [
          { question: "Call stack nima?", options: ["Funksiya kutish navbati", "Bajarilayotgan funksiyalar ro'yxati (LIFO tartibida)", "Xato ro'yxati", "Modul ro'yxati"], correct: 1, explanation: "Call stack — LIFO (Last In First Out). Funksiya chaqirilganda stack ga qo'shiladi, tugatganda o'chiriladi. JS single-threaded." },
          { question: "setTimeout(fn, 0) qachon ishlaydi?", options: ["Darhol ishlaydi", "Joriy sinxron kod tugagandan keyin ishlaydi", "0 millisoniyada ishlaydi", "Hech qachon ishlamaydi"], correct: 1, explanation: "setTimeout(fn, 0) — joriy sinxron kod va microtask lar tugagandan keyin ishlaydi. 0ms = 'imkon bo'lishi bilan, lekin hozir emas'." },
          { question: "Promise va setTimeout — qaysi biri avval ishlaydi?", options: ["setTimeout avval", "Promise (.then) avval — microtask navbati ustunligi bor", "Bir vaqtda ishlaydi", "Tartib belgilanmagan"], correct: 1, explanation: "Microtask (Promise) > Macrotask (setTimeout). Promise.then() — microtask navbatida, setTimeout — macrotask navbatida. Microtasklar ustunlikka ega." },
          { question: "Event loop ning asosiy vazifasi nima?", options: ["Xatolarni ushlash", "Call stack bo'sh bo'lganda navbatdan keyingi vazifani olish va bajarish", "Kodni kompilyatsiya qilish", "Tarmoq so'rovlarini yuborish"], correct: 1, explanation: "Event loop — call stack ni tekshiradi. Bo'sh bo'lsa — microtask navbatini, keyin macrotask navbatini tekshiradi va keyingi vazifani stackga qo'yadi." },
        ],
      },
      {
        id: "js-15", courseId: "javascript", title: "Yakuniy loyiha: To-Do ilova", duration: "35 daqiqa", description: "LocalStorage bilan to'liq funksional vazifalar ilovasi", order: 15, type: "article",
        content: "Ushbu darsda barcha o'rgangan bilimlaringizni birlashtirib, to'liq funksional To-Do ilovasi yaratasiz.\n\n**Ilova xususiyatlari:**\n- Yangi vazifa qo'shish\n- Bajarildi deb belgilash\n- Vazifani o'chirish\n- Filtrlash (barchasi / bajarilgan / bajarilmagan)\n- LocalStorage da saqlash (sahifa yangilananda yo'qolmaydi)\n\n**HTML tuzilmasi:**\n```html\n<!DOCTYPE html>\n<html lang=\"uz\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Vazifalarim</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <div class=\"ilova\">\n    <h1>📝 Vazifalarim</h1>\n    \n    <form id=\"vazifa-forma\">\n      <input id=\"yangi-vazifa\" placeholder=\"Yangi vazifa kiriting...\" />\n      <button type=\"submit\">Qo'shish</button>\n    </form>\n    \n    <div class=\"filtrlar\">\n      <button class=\"filtr faol\" data-filtr=\"hammasi\">Hammasi</button>\n      <button class=\"filtr\" data-filtr=\"bajarilmagan\">Bajarilmagan</button>\n      <button class=\"filtr\" data-filtr=\"bajarilgan\">Bajarilgan</button>\n    </div>\n    \n    <ul id=\"vazifalar-royxati\"></ul>\n    \n    <p id=\"hisobot\"></p>\n  </div>\n  <script src=\"main.js\"></script>\n</body>\n</html>\n```\n\n**JavaScript kodi (main.js):**\n```js\n// Ma'lumotlar\nlet vazifalar = JSON.parse(localStorage.getItem('vazifalar')) || [];\nlet joriyFiltr = 'hammasi';\n\n// Saqlash\nfunction saqlash() {\n  localStorage.setItem('vazifalar', JSON.stringify(vazifalar));\n}\n\n// Ko'rsatish\nfunction ro'yxatniKo'rsat() {\n  const royxat = document.getElementById('vazifalar-royxati');\n  \n  const filtrlangan = vazifalar.filter(v => {\n    if (joriyFiltr === 'bajarilgan') return v.bajarildi;\n    if (joriyFiltr === 'bajarilmagan') return !v.bajarildi;\n    return true;\n  });\n  \n  royxat.innerHTML = filtrlangan.map(v => `\n    <li class=\"vazifa ${v.bajarildi ? 'bajarildi' : ''}\">\n      <input type=\"checkbox\" ${v.bajarildi ? 'checked' : ''}\n             onchange=\"belgilashtir('${v.id}')\">\n      <span>${v.matn}</span>\n      <button onclick=\"o'chir('${v.id}')\" class=\"ochir\">🗑</button>\n    </li>\n  `).join('');\n  \n  const bajarilmagan = vazifalar.filter(v => !v.bajarildi).length;\n  document.getElementById('hisobot').textContent =\n    `${bajarilmagan} ta vazifa bajarilmagan`;\n}\n\n// Qo'shish\ndocument.getElementById('vazifa-forma').addEventListener('submit', (e) => {\n  e.preventDefault();\n  const input = document.getElementById('yangi-vazifa');\n  const matn = input.value.trim();\n  \n  if (!matn) return;\n  \n  vazifalar.push({\n    id: Date.now().toString(),\n    matn: matn,\n    bajarildi: false,\n  });\n  \n  saqlash();\n  ro'yxatniKo'rsat();\n  input.value = '';\n});\n\n// Belgilash\nfunction belgilashtir(id) {\n  const vazifa = vazifalar.find(v => v.id === id);\n  if (vazifa) {\n    vazifa.bajarildi = !vazifa.bajarildi;\n    saqlash();\n    ro'yxatniKo'rsat();\n  }\n}\n\n// O'chirish\nfunction o'chir(id) {\n  vazifalar = vazifalar.filter(v => v.id !== id);\n  saqlash();\n  ro'yxatniKo'rsat();\n}\n\n// Filtrlash\ndocument.querySelectorAll('.filtr').forEach(btn => {\n  btn.addEventListener('click', () => {\n    joriyFiltr = btn.dataset.filtr;\n    document.querySelectorAll('.filtr').forEach(b => b.classList.remove('faol'));\n    btn.classList.add('faol');\n    ro'yxatniKo'rsat();\n  });\n});\n\n// Boshlang'ich ko'rsatish\nro'yxatniKo'rsat();\n```",
        links: [
          { title: "TodoMVC — Turli frameworklarda To-do", url: "https://todomvc.com" },
          { title: "JavaScript30 — 30 kun JS mashqlari", url: "https://javascript30.com" },
          { title: "Vanilla JavaScript Projects", url: "https://vanillawebprojects.com" },
        ],
        questions: [
          { question: "JavaScript da const va let farqi nima?", options: ["Hech qanday farq yo'q", "const — o'zgarmas, let — o'zgaruvchan", "let — o'zgarmas, const — o'zgaruvchan", "Ikkalasi ham o'zgarmas"], correct: 1, explanation: "const — bir marta qiymat beriladi va o'zgartirib bo'lmaydi. let — qiymati keyinchalik o'zgartirilishi mumkin." },
          { question: "async/await nima uchun ishlatiladi?", options: ["CSS animatsiyalari uchun", "Asinxron operatsiyalarni sinxron ko'rinishda yozish uchun", "HTML teglari yaratish uchun", "Massivlarni saralash uchun"], correct: 1, explanation: "async/await — Promise asosidagi asinxron kodni yanada o'qilishi oson qilib yozish imkonini beradi." },
          { question: "localStorage.setItem() nima qiladi?", options: ["Ma'lumotni serverga yuboradi", "Ma'lumotni brauzerda doimiy saqlaydi", "O'zgaruvchi yaratadi", "Cookie o'rnatadi"], correct: 1, explanation: "localStorage — brauzerda doimiy ma'lumot saqlash. Sahifa yopilsa ham ma'lumot saqlanib qoladi." },
          { question: "DOM da getElementById() nima qaytaradi?", options: ["Barcha elementlar ro'yxati", "Bitta HTML element", "Element matnini", "CSS uslublarini"], correct: 1, explanation: "getElementById() — berilgan id ga mos bitta HTML elementni qaytaradi. Topilmasa null qaytaradi." },
          { question: "try/catch bloki nima uchun?", options: ["Tsikl yaratish uchun", "Xatolarni ushlash va boshqarish uchun", "Funksiya yaratish uchun", "Shartni tekshirish uchun"], correct: 1, explanation: "try {} ichidagi kod bajariladi. Xato yuz bersa catch(e) {} ishga tushadi. finally {} har doim bajariladi." },
        ],
      },
    ],
  },
  {
    id: "react",
    title: "React",
    description:
      "Eng mashhur frontend kutubxona — komponentlar, hooks, state va zamonaviy React 18+ imkoniyatlari.",
    category: "React",
    level: "O'rta",
    duration: "8 soat",
    lessonsCount: 10,
    image: "course-react",
    color: "#61DAFB",
    instructor: "Web Academy jamoasi",
    rating: 4.9,
    studentsCount: 2987,
    isPremium: true,
    topics: ["Components", "Hooks", "Context", "React Router", "React Query"],
    lessons: [
      { id: "rc-1", courseId: "react", title: "React nima?", duration: "8 daqiqa", description: "Virtual DOM, komponent arxitekturasi", content: "React — UI yaratish uchun JavaScript kutubxonasi. Virtual DOM orqali faqat o'zgargan qismlarni yangilaydi.", order: 1, type: "article" },
      { id: "rc-2", courseId: "react", title: "JSX", duration: "12 daqiqa", description: "HTML + JavaScript = JSX", content: "```jsx\nconst App = () => (\n  <div className=\"container\">\n    <h1>Salom, {name}!</h1>\n    {isLoggedIn && <Dashboard />}\n  </div>\n);\n```", order: 2, type: "article" },
      { id: "rc-3", courseId: "react", title: "Props", duration: "14 daqiqa", description: "Komponentga ma'lumot uzatish", content: "```jsx\nconst CourseCard = ({ title, isPremium, onPress }) => (\n  <div onClick={onPress}>\n    {isPremium && <span>Premium</span>}\n    <h3>{title}</h3>\n  </div>\n);\n```", order: 3, type: "article" },
      { id: "rc-4", courseId: "react", title: "useState", duration: "16 daqiqa", description: "Komponent holati", content: "```jsx\nconst [count, setCount] = useState(0);\nconst [user, setUser] = useState(null);\nconst [courses, setCourses] = useState([]);\n```", order: 4, type: "article" },
      { id: "rc-5", courseId: "react", title: "useEffect", duration: "18 daqiqa", description: "Yon ta'sirlar, lifecycle", content: "```jsx\nuseEffect(() => {\n  fetchCourses().then(setCourses);\n}, []); // [] — faqat bir marta\n\nuseEffect(() => {\n  document.title = `${course.title} | Web Academy`;\n}, [course.title]); // course.title o'zgarganda\n```", order: 5, type: "article" },
      { id: "rc-6", courseId: "react", title: "Context API", duration: "20 daqiqa", description: "Global state", content: "```jsx\nconst AuthContext = createContext(null);\n\nexport const useAuth = () => useContext(AuthContext);\n```", order: 6, type: "article" },
      { id: "rc-7", courseId: "react", title: "React Router", duration: "22 daqiqa", description: "SPA navigatsiyasi", content: "```jsx\n<Routes>\n  <Route path=\"/\" element={<Home />} />\n  <Route path=\"/courses\" element={<Courses />} />\n  <Route path=\"/course/:id\" element={<CourseDetail />} />\n</Routes>\n```", order: 7, type: "article" },
      { id: "rc-8", courseId: "react", title: "Custom Hooks", duration: "17 daqiqa", description: "Mantiqni qayta ishlatish", content: "```jsx\nconst useCourses = () => {\n  const [courses, setCourses] = useState([]);\n  const [loading, setLoading] = useState(true);\n  useEffect(() => {\n    fetchCourses().then(setCourses).finally(() => setLoading(false));\n  }, []);\n  return { courses, loading };\n};\n```", order: 8, type: "article" },
      { id: "rc-9", courseId: "react", title: "Performance", duration: "19 daqiqa", description: "memo, useMemo, useCallback", content: "```jsx\nconst CourseList = memo(({ courses }) => (\n  <div>{courses.map(c => <CourseCard key={c.id} {...c} />)}</div>\n));\n\nconst totalStudents = useMemo(() => courses.reduce((s, c) => s + c.studentsCount, 0), [courses]);\n```", order: 9, type: "article" },
      { id: "rc-10", courseId: "react", title: "Yakuniy loyiha", duration: "40 daqiqa", description: "Web Academy fronend kloni", content: "React bilan Web Academy saytining frontend qismini yarating:\n- Kurslar ro'yxati\n- Kurs sahifasi\n- Filtrlash\n- Qidiruv\n- Auth sahifasi", links: [{ title: "webacademy.uz — Namuna platforma", url: "https://webacademy.uz" }, { title: "Udemy — O'quv platforma dizayni", url: "https://www.udemy.com" }, { title: "React.dev — Rasmiy React hujjatlari", url: "https://react.dev" }], order: 10, type: "article" },
    ],
  },
  {
    id: "nodejs",
    title: "Node.js",
    description:
      "Server tomoni dasturlash — Express.js, REST API, PostgreSQL va autentifikatsiya.",
    category: "Node.js",
    level: "O'rta",
    duration: "9 soat",
    lessonsCount: 8,
    image: "course-nodejs",
    color: "#339933",
    instructor: "Web Academy jamoasi",
    rating: 4.7,
    studentsCount: 1743,
    isPremium: true,
    topics: ["Node.js", "Express.js", "REST API", "PostgreSQL", "JWT"],
    lessons: [
      { id: "nd-1", courseId: "nodejs", title: "Node.js bilan tanishuv", duration: "10 daqiqa", description: "Node.js nima, npm", content: "Node.js — Chrome V8 engine asosida qurilgan JavaScript runtime. Backend dasturlash uchun ishlatiladi.", order: 1, type: "article" },
      { id: "nd-2", courseId: "nodejs", title: "Express.js", duration: "18 daqiqa", description: "Web framework", content: "```js\nconst express = require('express');\nconst app = express();\napp.use(express.json());\napp.get('/api/courses', (req, res) => res.json({ courses: [] }));\napp.listen(3000);\n```", order: 2, type: "article" },
      { id: "nd-3", courseId: "nodejs", title: "REST API dizayn", duration: "15 daqiqa", description: "HTTP metodlar, status kodlar", content: "GET /courses, POST /courses, PUT /courses/:id, DELETE /courses/:id", order: 3, type: "article" },
      { id: "nd-4", courseId: "nodejs", title: "PostgreSQL + Drizzle", duration: "25 daqiqa", description: "Ma'lumotlar bazasi", content: "```ts\nconst courses = pgTable('courses', {\n  id: serial('id').primaryKey(),\n  title: text('title').notNull(),\n  isPremium: boolean('is_premium').default(false),\n});\n```", order: 4, type: "article" },
      { id: "nd-5", courseId: "nodejs", title: "JWT Autentifikatsiya", duration: "20 daqiqa", description: "Login, register, token", content: "```js\nconst token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '7d' });\n```", order: 5, type: "article" },
      { id: "nd-6", courseId: "nodejs", title: "Middleware", duration: "14 daqiqa", description: "Auth, error handling", content: "```js\nconst protect = (req, res, next) => {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'Kirish taqiqlangan' });\n  req.user = jwt.verify(token, SECRET);\n  next();\n};\n```", order: 6, type: "article" },
      { id: "nd-7", courseId: "nodejs", title: "Fayl yuklash", duration: "16 daqiqa", description: "Multer, S3", content: "```js\nconst upload = multer({ dest: 'uploads/' });\napp.post('/upload', upload.single('file'), (req, res) => res.json({ url: req.file.path }));\n```", order: 7, type: "article" },
      { id: "nd-8", courseId: "nodejs", title: "Yakuniy loyiha", duration: "40 daqiqa", description: "Web Academy API", content: "Web Academy uchun to'liq REST API yarating: foydalanuvchilar, kurslar, darslar, ro'yxatga olish, progress.", links: [{ title: "webacademy.uz — Namuna platforma", url: "https://webacademy.uz" }, { title: "JSONPlaceholder — Amaliyot uchun REST API", url: "https://jsonplaceholder.typicode.com" }, { title: "Reqres.in — Sinov REST API", url: "https://reqres.in" }], order: 8, type: "article" },
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack",
    description:
      "React + Node.js bilan to'liq web ilovalar yarating — frontenddan backendgacha hamma narsa.",
    category: "Full-Stack",
    level: "Murakkab",
    duration: "20 soat",
    lessonsCount: 16,
    image: "course-fullstack",
    color: "#7C3AED",
    instructor: "Web Academy jamoasi",
    rating: 5.0,
    studentsCount: 987,
    isPremium: true,
    topics: ["React", "Node.js", "PostgreSQL", "Auth", "Deploy"],
    lessons: [
      { id: "fs-1", courseId: "fullstack", title: "Kurs tartibi va arxitektura", duration: "12 daqiqa", description: "Nima quramiz?", content: "Ushbu kursda to'liq fullstack web ilova quramiz — Web Academy ga o'xshash o'quv platformasi.", order: 1, type: "article" },
      { id: "fs-2", courseId: "fullstack", title: "Loyiha tuzilmasi", duration: "15 daqiqa", description: "Monorepo, pnpm workspaces", content: "```\nwebacademy/\n├── frontend/   # React + Vite\n├── backend/    # Node.js + Express\n└── shared/     # Umumiy tiplar\n```", order: 2, type: "article" },
      { id: "fs-3", courseId: "fullstack", title: "Ma'lumotlar bazasi dizayni", duration: "20 daqiqa", description: "Schema, migrations", content: "Users, Courses, Lessons, Enrollments, Progress jadvallari.", order: 3, type: "article" },
      { id: "fs-4", courseId: "fullstack", title: "Auth tizimi", duration: "25 daqiqa", description: "Register, login, JWT refresh", content: "Access token + Refresh token pattern bilan xavfsiz autentifikatsiya.", order: 4, type: "article" },
      { id: "fs-5", courseId: "fullstack", title: "Kurslar API", duration: "22 daqiqa", description: "CRUD operatsiyalar", content: "GET/POST/PUT/DELETE kurslar uchun RESTful API.", order: 5, type: "article" },
      { id: "fs-6", courseId: "fullstack", title: "Frontend: Bosh sahifa", duration: "18 daqiqa", description: "Hero, kurslar, stats", content: "React bilan Web Academy bosh sahifasini yarating.", order: 6, type: "article" },
      { id: "fs-7", courseId: "fullstack", title: "Frontend: Kurslar sahifasi", duration: "20 daqiqa", description: "Filter, search, pagination", content: "Kurslar ro'yxati + filtrlash + qidiruv imkoniyati.", order: 7, type: "article" },
      { id: "fs-8", courseId: "fullstack", title: "Frontend: Kurs sahifasi", duration: "22 daqiqa", description: "Darslar ro'yxati, progress", content: "Kurs detallari, darslar ro'yxati va progress bar.", order: 8, type: "article" },
      { id: "fs-9", courseId: "fullstack", title: "Video player", duration: "20 daqiqa", description: "Custom video player", content: "React bilan custom video player yarating — play/pause, progress, fullscreen.", order: 9, type: "article" },
      { id: "fs-10", courseId: "fullstack", title: "Progress tracking", duration: "18 daqiqa", description: "Dars tugash, progress saqlash", content: "Foydalanuvchi progressini backendda saqlash va frontendda ko'rsatish.", order: 10, type: "article" },
      { id: "fs-11", courseId: "fullstack", title: "To'lov tizimi", duration: "25 daqiqa", description: "Premium kurslar, Stripe", content: "Premium kurslar uchun to'lov oqimi — Stripe Checkout bilan integratsiya.", order: 11, type: "article" },
      { id: "fs-12", courseId: "fullstack", title: "Admin panel", duration: "22 daqiqa", description: "Kurs, dars boshqaruvi", content: "Admin uchun kurslar va darslarni qo'shish/tahrirlash/o'chirish paneli.", order: 12, type: "article" },
      { id: "fs-13", courseId: "fullstack", title: "Testing", duration: "18 daqiqa", description: "Unit va integration testlar", content: "Vitest bilan backend testlar, React Testing Library bilan frontend testlar.", order: 13, type: "article" },
      { id: "fs-14", courseId: "fullstack", title: "Performance", duration: "16 daqiqa", description: "Caching, optimization", content: "Redis caching, React Query, image optimization, code splitting.", order: 14, type: "article" },
      { id: "fs-15", courseId: "fullstack", title: "Deploy", duration: "20 daqiqa", description: "Production ga chiqarish", content: "Backend: Railway/Render. Frontend: Vercel. DB: Neon PostgreSQL.", order: 15, type: "article" },
      { id: "fs-16", courseId: "fullstack", title: "Sertifikat", duration: "10 daqiqa", description: "Yakuniy baholash", content: "Full-Stack kursini muvaffaqiyatli tugatganingiz uchun tabriklaymiz! Sertifikatingizni oling.", links: [{ title: "webacademy.uz — O'quv platformamiz", url: "https://webacademy.uz" }, { title: "Coursera — Global o'quv platformasi", url: "https://www.coursera.org" }, { title: "GitHub — Loyihangizni joylash", url: "https://github.com" }], order: 16, type: "quiz" },
    ],
  },
];
