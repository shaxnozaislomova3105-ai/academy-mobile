export interface LessonLink {
  title: string;
  url: string;
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
      { id: "js-1", courseId: "javascript", title: "JavaScript ga kirish", duration: "10 daqiqa", description: "JS tarixi va imkoniyatlari", content: "JavaScript — brauzerda ishlaydigan yagona dasturlash tili bo'lib, hozirda server (Node.js), mobil (React Native) va desktop ilovalar uchun ham ishlatiladi.", videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk", order: 1, type: "video" },
      { id: "js-2", courseId: "javascript", title: "O'zgaruvchilar", duration: "12 daqiqa", description: "let, const, var farqlari", content: "```js\nconst PI = 3.14;       // o'zgarmas\nlet name = 'Ali';       // o'zgaruvchan\nvar old = 'Eski usul'; // ishlatmang\n\n// Turlari: string, number, boolean, null, undefined, object, symbol\nconsole.log(typeof name);  // 'string'\n```", order: 2, type: "article" },
      { id: "js-3", courseId: "javascript", title: "Funksiyalar", duration: "15 daqiqa", description: "Arrow functions, closures", content: "```js\n// Arrow funksiya\nconst greet = (name) => `Salom, ${name}!`;\n\n// Default parametr\nconst add = (a, b = 0) => a + b;\n\n// Rest parametr\nconst sum = (...nums) => nums.reduce((a, b) => a + b, 0);\n```", order: 3, type: "article" },
      { id: "js-4", courseId: "javascript", title: "Massivlar", duration: "18 daqiqa", description: "map, filter, reduce, find", content: "```js\nconst courses = ['HTML', 'CSS', 'JS'];\n\nconst upper = courses.map(c => c.toUpperCase());\nconst long = courses.filter(c => c.length > 2);\nconst found = courses.find(c => c === 'CSS');\n```", order: 4, type: "article" },
      { id: "js-5", courseId: "javascript", title: "Ob'ektlar", duration: "14 daqiqa", description: "Object, destructuring, spread", content: "```js\nconst user = { name: 'Ali', age: 25 };\nconst { name, age } = user;\nconst updated = { ...user, age: 26 };\n```", order: 5, type: "article" },
      { id: "js-6", courseId: "javascript", title: "DOM bilan ishlash", duration: "20 daqiqa", description: "querySelector, events, manipulation", content: "```js\nconst btn = document.querySelector('#myBtn');\nbtn.addEventListener('click', () => {\n  document.querySelector('.output').textContent = 'Bosildi!';\n});\n```", order: 6, type: "article" },
      { id: "js-7", courseId: "javascript", title: "Promises", duration: "18 daqiqa", description: "Async operatsiyalar", content: "```js\nconst delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));\n\ndelay(1000).then(() => console.log('1 soniya o\\'tdi'));\n```", order: 7, type: "article" },
      { id: "js-8", courseId: "javascript", title: "Async/Await", duration: "15 daqiqa", description: "Zamonaviy async kod", content: "```js\nasync function loadUser(id) {\n  try {\n    const res = await fetch(`/api/users/${id}`);\n    return await res.json();\n  } catch (e) {\n    console.error(e);\n  }\n}\n```", order: 8, type: "article" },
      { id: "js-9", courseId: "javascript", title: "Fetch API", duration: "16 daqiqa", description: "HTTP so'rovlar", content: "```js\nconst data = await fetch('https://api.example.com/courses').then(r => r.json());\n\nawait fetch('/api/enroll', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ courseId: 'html-basics' })\n});\n```", order: 9, type: "article" },
      { id: "js-10", courseId: "javascript", title: "LocalStorage", duration: "11 daqiqa", description: "Brauzerda ma'lumot saqlash", content: "```js\nlocalStorage.setItem('user', JSON.stringify({ name: 'Ali' }));\nconst user = JSON.parse(localStorage.getItem('user'));\n```", order: 10, type: "article" },
      { id: "js-11", courseId: "javascript", title: "Classes va OOP", duration: "19 daqiqa", description: "Class, inheritance", content: "```js\nclass Course {\n  #title;\n  constructor(title, isPremium) {\n    this.#title = title;\n    this.isPremium = isPremium;\n  }\n  getTitle() { return this.#title; }\n}\n```", order: 11, type: "article" },
      { id: "js-12", courseId: "javascript", title: "Modullar", duration: "13 daqiqa", description: "import/export", content: "```js\n// api.js\nexport const fetchCourses = () => fetch('/api/courses').then(r => r.json());\n\n// main.js\nimport { fetchCourses } from './api.js';\n```", order: 12, type: "article" },
      { id: "js-13", courseId: "javascript", title: "Error handling", duration: "11 daqiqa", description: "try/catch, custom errors", content: "```js\ntry {\n  const data = JSON.parse(invalidJson);\n} catch (e) {\n  console.error('JSON xatosi:', e.message);\n} finally {\n  console.log('Har doim ishlaydi');\n}\n```", order: 13, type: "article" },
      { id: "js-14", courseId: "javascript", title: "Event Loop", duration: "17 daqiqa", description: "Call stack, microtasks, macrotasks", content: "JavaScript single-threaded bo'lsa-da, Event Loop orqali asinxron operatsiyalarni boshqaradi.\n\nCall Stack → Web APIs → Callback Queue → Event Loop → Call Stack", order: 14, type: "article" },
      { id: "js-15", courseId: "javascript", title: "Yakuniy loyiha", duration: "35 daqiqa", description: "To-do ilovasi + LocalStorage", content: "JavaScript bilan to'liq funksional To-do ilovasi yarating:\n- Vazifa qo'shish/o'chirish\n- Bajarildi belgilash\n- Filtrlash\n- LocalStorage da saqlash", links: [{ title: "TodoMVC — Turli frameworklarda To-do", url: "https://todomvc.com" }, { title: "JavaScript30 — 30 kun JS mashqlari", url: "https://javascript30.com" }, { title: "Vanilla JavaScript Projects", url: "https://vanillawebprojects.com" }], order: 15, type: "article" },
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
