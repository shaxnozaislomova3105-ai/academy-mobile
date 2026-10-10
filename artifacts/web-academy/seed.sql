insert into courses (id,title,description,category,level,duration,color,image,is_premium,topics,position) values ('html-basics','HTML Asoslari','HTML tilini noldan o''rganing. Teglar, atributlar, formalar va zamonaviy HTML5 elementlari.','HTML','Boshlang''ich','5 soat','#E44D26','course-html',false,'["HTML5","Teglar","Atributlar","Formalar","Semantik HTML"]'::jsonb,1);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('hb-1','html-basics','HTML nima?','HTML ning tarixi va asosiy maqsadi','7 daqiqa','HTML (HyperText Markup Language) — veb sahifalarni yaratish uchun ishlatiladigan standart belgilash tili. 1991-yilda Tim Berners-Lee tomonidan yaratilgan.

**HTML nimadan iborat:**
- Element — sahifaning qurilish bloki
- Teg — elementni belgilaydi: `<p>`, `<h1>`, `<div>`
- Atribut — elementga qo''shimcha ma''lumot: `class`, `id`, `href`
- Tarkib — element ichidagi ma''lumot','https://www.youtube.com/watch?v=mbeT8mpmtHA','video','[{"question":"HTML nimaning qisqartmasi?","options":["HyperText Markup Language","High Tech Modern Language","HyperText Machine Learning","Home Tool Markup Language"],"correct":0,"explanation":"HTML — HyperText Markup Language. 1991-yilda Tim Berners-Lee tomonidan yaratilgan veb sahifa belgilash tili."},{"question":"HTML da ''element'' nima?","options":["Faqat teg","Sahifaning qurilish bloki","CSS uslubi","JavaScript kodi"],"correct":1,"explanation":"Element — HTML ning asosiy qurilish bloki. Teg, atribut va tarkibdan iborat."},{"question":"HTML da ''atribut'' nima?","options":["Elementning nomi","Elementga qo''shimcha ma''lumot","Teg yopilishi","JavaScript funksiyasi"],"correct":1,"explanation":"Atribut — elementga qo''shimcha ma''lumot beradi. Masalan: class, id, href, src."},{"question":"Kim HTML ni yaratgan?","options":["Bill Gates","Tim Berners-Lee","Brendan Eich","Linus Torvalds"],"correct":1,"explanation":"Tim Berners-Lee 1991-yilda HTML ni ixtiro qildi. U World Wide Web (WWW) ning ham yaratuvchisi."}]'::jsonb,1);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('hb-2','html-basics','HTML hujjat tuzilmasi','DOCTYPE, html, head, body elementlari','10 daqiqa','Har bir to''g''ri HTML sahifasi quyidagi asosiy tuzilmaga ega bo''lishi kerak:

```html
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sahifa nomi</title>
</head>
<body>
  <!-- Kontent shu yerda -->
  <h1>Salom Dunyo!</h1>
</body>
</html>
```

**Muhim elementlar:**
- `<!DOCTYPE html>` — HTML5 standartini bildiradi
- `<html lang>` — hujjat tili
- `<head>` — meta ma''lumotlar
- `<body>` — foydalanuvchi ko''radigan kontent','https://www.youtube.com/watch?v=oEKXn94CBMM','video','[{"question":"<!DOCTYPE html> nima vazifasini bajaradi?","options":["Sahifa nomi","HTML5 standartini brauzerga bildiradi","CSS faylni ulaydi","JavaScript ni yoqadi"],"correct":1,"explanation":"<!DOCTYPE html> — bu hujjat HTML5 formatida ekanligini brauzerga bildiradi. Har doim birinchi qatorda bo''lishi kerak."},{"question":"<head> elementi ichida nima bo''ladi?","options":["Foydalanuvchi ko''radigan kontent","Sarlavhalar va rasmlar","Meta ma''lumotlar, title, CSS ulanmalar","Navigatsiya va footer"],"correct":2,"explanation":"<head> — meta ma''lumotlar: charset, viewport, title, CSS link. Foydalanuvchi buni ko''rmaydi."},{"question":"<html lang=''uz''> dagi ''lang'' atributi nima uchun?","options":["Tilni o''rgatish uchun","Hujjat tilini bildirish uchun","Tarjima qilish uchun","CSS uchun"],"correct":1,"explanation":"lang atributi hujjat tilini bildiradi. Ekran o''quvchilar, qidiruv tizimlari va brauzer tarjima funksiyalari uchun muhim."},{"question":"<body> elementi nima uchun?","options":["Sahifa sozlamalari","Foydalanuvchi ko''radigan barcha kontent","JavaScript kodi","Meta teglar"],"correct":1,"explanation":"<body> — brauzerda ko''rinadigan barcha kontent: matn, rasmlar, tugmalar, havolalar."}]'::jsonb,2);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('hb-3','html-basics','Sarlavhalar va paragraflar','h1-h6, p, br, hr elementlari','8 daqiqa','Matn tuzilmasini yaratish uchun sarlavha va paragraf elementlaridan foydalanamiz.

```html
<h1>Asosiy sarlavha</h1>
<h2>Kichik sarlavha</h2>
<h3>Uchinchi daraja</h3>

<p>Bu oddiy paragraf matni.</p>
<p>Bu ikkinchi paragraf.<br>Qatordan keyin davom etadi.</p>

<hr> <!-- Gorizontal chiziq -->
```

**Eslatma:** `<h1>` har bir sahifada faqat bir marta ishlatilishi kerak — SEO uchun muhim!',null,'article','[{"question":"HTML da nechta sarlavha darajasi bor?","options":["3 ta","5 ta","6 ta","8 ta"],"correct":2,"explanation":"HTML da h1 dan h6 gacha — jami 6 ta sarlavha darajasi bor. h1 eng katta, h6 eng kichik."},{"question":"<br> tegi nima qiladi?","options":["Gorizontal chiziq chizadi","Yangi qator yaratadi","Paragraf ochadi","Bold qiladi"],"correct":1,"explanation":"<br> — qatorni uzib, keyingi matnni yangi qatordan boshlaydi. Yopilmaydigan teg."},{"question":"<hr> tegi nima ko''rsatadi?","options":["Sarlavha","Gorizontal ajratuvchi chiziq","Havola","Rasm"],"correct":1,"explanation":"<hr> — horizontal rule — sahifada gorizontal chiziq chizadi, bo''limlarni ajratish uchun ishlatiladi."},{"question":"<h1> tegi necha marta ishlatilishi kerak?","options":["Xohlagancha","Kamida 3 marta","Odatda 1 marta","Hech qachon"],"correct":2,"explanation":"SEO uchun sahifada <h1> odatda 1 marta ishlatiladi. U sahifaning asosiy mavzusini bildiradi."}]'::jsonb,3);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('hb-4','html-basics','Havolalar','a tegi, href, target atributlari','9 daqiqa','Havolalar web ning asosi — sahifalarni bir-biriga bog''laydi.

```html
<!-- Tashqi havola -->
<a href="https://webacademy.uz">Web Academy</a>

<!-- Yangi oynada ochish -->
<a href="https://google.com" target="_blank" rel="noopener">Google</a>

<!-- Ichki havola -->
<a href="/about">Biz haqimizda</a>

<!-- Email -->
<a href="mailto:info@webacademy.uz">Xat yozing</a>

<!-- Telefon -->
<a href="tel:+998901234567">Qo''ng''iroq</a>
```',null,'article','[{"question":"Havola yaratish uchun qaysi teg ishlatiladi?","options":["<link>","<url>","<a>","<nav>"],"correct":2,"explanation":"<a href=''...''>Matn</a> — anchor (langar) tegi. href — havola manzili."},{"question":"target=''_blank'' nima qiladi?","options":["Havolani o''chiradi","Havolani yangi oynada ochadi","Havolani yashiradi","Havolani yuklab oladi"],"correct":1,"explanation":"target=''_blank'' — havolani yangi brauzer oynasida (tab) ochadi. rel=''noopener'' bilan birga ishlatish xavfsizroq."},{"question":"Email havolasi qanday yoziladi?","options":["<a href=''email:''>","<a href=''mailto:''>","<a href=''mail:''>","<email href=''''>"],"correct":1,"explanation":"mailto: protokoli email havolasi yaratadi. Bosilganda email dasturi ochiladi."},{"question":"<a> tegida href atributi nima bildiradi?","options":["Havola rangi","Havola manzili (URL)","Havola matni","Havola o''lchami"],"correct":1,"explanation":"href — HyperText Reference. Havola bosilganda qaysi sahifaga o''tish kerakligini ko''rsatadi."}]'::jsonb,4);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('hb-5','html-basics','Rasmlar','img tegi, src, alt, width, height','8 daqiqa','```html
<!-- Asosiy rasm -->
<img src="rasm.jpg" alt="Rasm tavsifi" width="400" height="300">

<!-- Nisbiy yol -->
<img src="./images/logo.png" alt="Logo">

<!-- Tashqi rasm -->
<img src="https://example.com/photo.jpg" alt="Foto">
```

**`alt` atributi nima uchun muhim?**
- Ko''zi ojiz foydalanuvchilar uchun
- Rasm yuklanmasa ko''rsatiladi
- SEO uchun foydali
- Har doim to''ldirilishi shart!',null,'article','[{"question":"Rasm qo''shish uchun qaysi teg ishlatiladi?","options":["<picture>","<image>","<img>","<photo>"],"correct":2,"explanation":"<img src=''...'' alt=''...''> — rasm qo''shish tegi. Yopilmaydigan (self-closing) teg."},{"question":"alt atributi nima uchun kerak?","options":["Rasmni kattalashtirish","Ko''zi ojiz foydalanuvchilar va rasm yuklanmasa chiqadigan matn","Rasmni animatsiya qilish","Rasmga rang berish"],"correct":1,"explanation":"alt — alternative text. Rasm yuklanmasa ko''rsatiladi, ekran o''quvchilar uchun zarur, SEO ga foyda."},{"question":"src atributi nima bildiradi?","options":["Rasm o''lchami","Rasm manzili (URL yoki fayl yo''li)","Rasm formati","Rasm rangi"],"correct":1,"explanation":"src — source (manba). Rasm qayerda joylashganini ko''rsatadi: to''liq URL yoki fayl yo''li."},{"question":"width=''400'' height=''300'' nima qiladi?","options":["Rasmni kesadi","Rasmning o''lchamini belgilaydi","Rasmni yashiradi","Rasmni buradi"],"correct":1,"explanation":"width va height — rasmning kenglik va balandligini piksel (px) da belgilaydi."}]'::jsonb,5);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('hb-6','html-basics','Ro''yxatlar','ul, ol, li, dl elementlari','7 daqiqa','```html
<!-- Tartibsiz ro''yxat -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Raqamlangan ro''yxat -->
<ol>
  <li>Birinchi qadam</li>
  <li>Ikkinchi qadam</li>
  <li>Uchinchi qadam</li>
</ol>

<!-- Ichma-ich ro''yxat -->
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
</ul>
```',null,'article','[{"question":"<ul> va <ol> farqi nima?","options":["Hech qanday farq yo''q","<ul> raqamsiz, <ol> raqamlangan ro''yxat","<ol> raqamsiz, <ul> raqamlangan ro''yxat","Ikkalasi ham raqamlangan"],"correct":1,"explanation":"<ul> — unordered list (marker/nuqta bilan), <ol> — ordered list (1,2,3... bilan). <li> — list item."},{"question":"Ro''yxat elementi uchun qaysi teg ishlatiladi?","options":["<list>","<item>","<li>","<el>"],"correct":2,"explanation":"<li> — list item. Har bir ro''yxat elementi <li> ichiga yoziladi."},{"question":"Ichma-ich ro''yxat yaratish uchun nima qilinadi?","options":["Mumkin emas","<li> ichiga yangi <ul> yoki <ol> qo''yiladi","style=''nested'' ishlatiladi","Alohida teg ishlatiladi"],"correct":1,"explanation":"<li> ichiga yangi <ul> yoki <ol> joylashtirish mumkin — bu nested (ichma-ich) ro''yxat yaratadi."}]'::jsonb,6);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('hb-7','html-basics','Jadvallar','table, tr, th, td elementlari','11 daqiqa','```html
<table border="1">
  <thead>
    <tr>
      <th>Ism</th>
      <th>Yosh</th>
      <th>Kasb</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ali</td>
      <td>25</td>
      <td>Dasturchi</td>
    </tr>
    <tr>
      <td>Vali</td>
      <td>30</td>
      <td>Dizayner</td>
    </tr>
  </tbody>
</table>
```',null,'article','[{"question":"HTML jadvalida qator yaratish uchun qaysi teg?","options":["<td>","<tr>","<row>","<th>"],"correct":1,"explanation":"<tr> — table row. Jadval qatorini ochadi. Ichiga <td> yoki <th> teglar joylashadi."},{"question":"<th> va <td> farqi nima?","options":["Hech qanday farq yo''q","<th> sarlavha (bold, markazda), <td> oddiy ma''lumot","<td> sarlavha, <th> ma''lumot","<th> katta, <td> kichik"],"correct":1,"explanation":"<th> — table header, qalin va markazlashgan ko''rsatiladi. <td> — table data, oddiy hujayra."},{"question":"<thead> va <tbody> nima uchun?","options":["Majburiy teglar","Jadval tuzilmasini semantik ajratish uchun","Ranglash uchun","CSS uchun"],"correct":1,"explanation":"<thead> — jadval boshi (sarlavhalar), <tbody> — jadval tanasi (ma''lumotlar). Tuzilmani semantik qiladi."},{"question":"colspan=''2'' atributi nima qiladi?","options":["Hujayraning rangini o''zgartiradi","Hujayrani 2 ta ustunni birlashtiradi","Hujayra balandligini oshiradi","2 ta qator yaratadi"],"correct":1,"explanation":"colspan — column span. Hujayrani ko''rsatilgan ustun soni bo''yicha kengaytiradi."}]'::jsonb,7);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('hb-8','html-basics','Formalar — 1-qism','form, input, label, button elementlari','14 daqiqa','Formalar foydalanuvchidan ma''lumot olish uchun ishlatiladi.

```html
<form action="/submit" method="POST">
  <label for="name">Ism:</label>
  <input type="text" id="name" name="name" placeholder="Ismingiz" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="password">Parol:</label>
  <input type="password" id="password" name="password" minlength="8">
  
  <button type="submit">Yuborish</button>
  <button type="reset">Tozalash</button>
</form>
```',null,'article','[{"question":"<form> tegida method=''POST'' nima qiladi?","options":["Ma''lumotni URL ga qo''shib yuboradi","Ma''lumotni xavfsiz yuboradi (URL da ko''rinmaydi)","Formani tozalaydi","Formani yashiradi"],"correct":1,"explanation":"POST — ma''lumot HTTP body orqali xavfsiz yuboriladi. GET — URL da ko''rinadi. Parol uchun POST ishlatiladi."},{"question":"<label for=''email''> atributi nima qiladi?","options":["Email yuboradi","Label ni tegishli input ga bog''laydi","Email tekshiradi","CSS qo''shadi"],"correct":1,"explanation":"for atributi tegishli input ning id si bilan mos bo''lishi kerak. Label bosilganda input fokuslanadi."},{"question":"required atributi nima qiladi?","options":["Maydonni ko''k qiladi","Maydon to''ldirilishi majburiy bo''ladi","Maydonni yashiradi","Maydon bloklanadi"],"correct":1,"explanation":"required — forma yuborishdan oldin bu maydon to''ldirilishi shartligini bildiradi. Brauzer avtomatik tekshiradi."},{"question":"input type=''email'' nima qiladi?","options":["Faqat email yuboradi","Email formatini tekshiradi (@ belgisi bo''lishi kerak)","Email yashiradi","Email ochadi"],"correct":1,"explanation":"type=''email'' — brauzer @ belgisi va to''g''ri formatni avtomatik tekshiradi. Mobil klaviaturada email rejimi ochiladi."}]'::jsonb,8);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('hb-9','html-basics','Formalar — 2-qism','select, textarea, checkbox, radio','12 daqiqa','```html
<!-- Tanlash ro''yxati -->
<select name="city">
  <option value="">Shaharni tanlang</option>
  <option value="tashkent">Toshkent</option>
  <option value="samarkand">Samarqand</option>
</select>

<!-- Ko''p qatorli matn -->
<textarea name="message" rows="4" placeholder="Xabaringiz"></textarea>

<!-- Checkbox -->
<input type="checkbox" id="agree" name="agree">
<label for="agree">Shartlarga roziman</label>

<!-- Radio -->
<input type="radio" id="male" name="gender" value="male">
<label for="male">Erkak</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Ayol</label>
```',null,'article','[{"question":"<select> elementi nima uchun?","options":["Rang tanlash","Ro''yxatdan bitta yoki ko''p variantni tanlash","Rasm tanlash","Fayl tanlash"],"correct":1,"explanation":"<select> — ochiluvchi tanlash ro''yxati. <option> teglar bilan to''ldiriladi."},{"question":"Checkbox va Radio button farqi nima?","options":["Hech qanday farq yo''q","Checkbox bir nechta, radio faqat bitta tanlanadi","Radio bir nechta, checkbox faqat bitta tanlanadi","Ikkalasi ham bitta tanlanadi"],"correct":1,"explanation":"Checkbox — bir nechta tanlash mumkin. Radio — bir guruhda faqat bitta tanlanadi (bir name bo''lishi kerak)."},{"question":"<textarea> nima uchun ishlatiladi?","options":["Bitta qatorli matn","Ko''p qatorli matn kiritish uchun","Rasm yuklash uchun","Video ko''rsatish uchun"],"correct":1,"explanation":"<textarea> — ko''p qatorli matn kiritish maydoni. rows va cols atributlari o''lchami belgilaydi."},{"question":"Radio button lar bir-birini inkor qilishi uchun nima kerak?","options":["Bir xil id","Bir xil name atributi","Bir xil class","Bir xil value"],"correct":1,"explanation":"Bir xil name atributi radio button larni bir guruhga birlashtiradi. Bitta tanlanganida boshqalari bekor bo''ladi."}]'::jsonb,9);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('hb-10','html-basics','Semantik HTML','header, nav, main, section, article, footer','13 daqiqa','Semantik elementlar sahifaning ma''nosini bildiradi — brauzer va qidiruv tizimlari tushunishi uchun.

```html
<header>
  <nav>
    <ul>
      <li><a href="/">Bosh sahifa</a></li>
      <li><a href="/about">Haqimizda</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <h2>Xizmatlarimiz</h2>
    <article>
      <h3>Kurs 1</h3>
      <p>Tavsif...</p>
    </article>
  </section>
  <aside>Yon panel</aside>
</main>

<footer>
  <p>&copy; 2024 Web Academy</p>
</footer>
```',null,'article','[{"question":"<header> va <div id=''header''> farqi nima?","options":["Hech qanday farq yo''q","<header> semantik — ma''nosi bor, div faqat vizual","<div> yaxshiroq","<header> katta hajm oladi"],"correct":1,"explanation":"<header> — semantik teg, brauzer va qidiruv tizimlari ma''nosini tushunadi. Ekran o''quvchilar uchun ham muhim."},{"question":"<nav> elementi nima uchun?","options":["Yangi sahifa yaratish","Sahifa navigatsiya (havolalar) uchun","Bosh sahifa tegi","Forma yaratish"],"correct":1,"explanation":"<nav> — navigation. Asosiy havolalar guruhini ifodalaydi. Sahifada bir nechta <nav> bo''lishi mumkin."},{"question":"<main> elementi sahifada necha marta ishlatiladi?","options":["Xohlagancha","Faqat 1 marta","2 marta","Kamida 3 marta"],"correct":1,"explanation":"<main> — sahifaning asosiy kontenti. Brauzer bu bo''limni bosh kontent sifatida belgilaydi. Faqat 1 marta bo''lishi kerak."},{"question":"<article> va <section> farqi nima?","options":["Hech qanday farq yo''q","<article> mustaqil kontent, <section> guruh bo''limi","<section> mustaqil, <article> guruh","Ikkalasi ham bir xil"],"correct":1,"explanation":"<article> — o''z-o''zicha to''liq mazmunli kontent (blog post). <section> — tematik guruh, sarlavhasi bo''lishi kerak."}]'::jsonb,10);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('hb-11','html-basics','Audio va Video','audio, video, source elementlari','9 daqiqa','```html
<!-- Video -->
<video width="640" height="360" controls autoplay muted>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Brauzeringiz videoni qo''llab-quvvatlamaydi.
</video>

<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
</audio>

<!-- YouTube embed -->
<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID"
  allowfullscreen></iframe>
```',null,'article','[{"question":"<video> tegida controls atributi nima qiladi?","options":["Videoni auto ijro qiladi","Play/pause, ovoz, to''liq ekran tugmalarini ko''rsatadi","Videoni yashiradi","Video sifatini belgilaydi"],"correct":1,"explanation":"controls — brauzerning standart video boshqarish panelini ko''rsatadi: play, pause, ovoz, vaqt, fullscreen."},{"question":"<source> tegi nima uchun?","options":["Manbani ko''rsatish uchun","Turli format/sifatda media taqdim etish uchun","Fayl saqlash uchun","CSS qo''shish uchun"],"correct":1,"explanation":"<source> — brauzer qo''llab-quvvatlaydigan formati topilgunga qadar navbatma-navbat sinab ko''radi (mp4, webm, ogg)."},{"question":"YouTube videoni iframe orqali qo''shish uchun qaysi url formati?","options":["youtube.com/watch?v=ID","youtube.com/embed/ID","youtu.be/ID","youtube.com/video/ID"],"correct":1,"explanation":"YouTube embed uchun: https://www.youtube.com/embed/VIDEO_ID — bu maxsus ko''mish URL formati."},{"question":"autoplay atributi nima?","options":["Video avtomatik yuklab oladi","Video sahifa ochilganda avtomatik boshlanadi","Video sekin ijro bo''ladi","Video takrorlanadi"],"correct":1,"explanation":"autoplay — video sahifa ochilganda avtomatik boshlaydi. Aksariyat brauzerlar faqat muted bilan birgalikda ruxsat beradi."}]'::jsonb,11);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('hb-12','html-basics','Meta teglar va SEO','meta, title, og: teglar — saytingizni qidiruv tizimlari va ijtimoiy tarmoqlarda to''g''ri ko''rsatish','10 daqiqa','## Meta teglar nima uchun kerak?

Meta teglar — bu brauzer va qidiruv tizimlariga (Google) sahifangiz haqida qo''shimcha ma''lumot beruvchi maxsus teglar. Ular ekranda ko''rinmaydi, lekin sahifangizning qidiruvda topilishi, mobil qurilmalarda to''g''ri ko''rinishi va ijtimoiy tarmoqlarda chiroyli ulashilishi uchun juda muhim.

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Sayt tavsifi - 150-160 belgi">
  <meta name="keywords" content="html, css, javascript">
  <meta name="author" content="Web Academy">
  
  <!-- Open Graph (ijtimoiy tarmoqlar uchun) -->
  <meta property="og:title" content="Sahifa nomi">
  <meta property="og:description" content="Tavsif">
  <meta property="og:image" content="https://example.com/image.jpg">
  
  <title>Sahifa nomi | Web Academy</title>
</head>
```

### Har bir teg nimaga xizmat qiladi?

**1. `charset="UTF-8"`** — sahifadagi harflarning to''g''ri kodlashi. Agar bu bo''lmasa, o''zbek yoki rus harflari o''rniga tushunarsiz belgilar chiqishi mumkin.

**2. `viewport`** — sahifani telefon va planshet ekraniga moslashtiradi. Bu teg bo''lmasa, sayt mobil qurilmalarda juda kichik yoki noqulay ko''rinadi.

**3. `description`** — Google qidiruv natijalarida sarlavha ostida chiqadigan qisqa tavsif. 150-160 belgi atrofida bo''lishi tavsiya etiladi, chunki Google uzunroq matnni kesib tashlaydi.

**4. `og:` teglar (Open Graph)** — saytingiz havolasini Telegram, Facebook yoki boshqa ijtimoiy tarmoqda ulashganda, qanday sarlavha, tavsif va rasm bilan ko''rinishini belgilaydi.

**5. `<title>`** — brauzer tab''ida va Google qidiruv natijalarida katta harf bilan chiqadigan sahifa nomi.',null,'article','[{"question":"meta charset=''UTF-8'' nima uchun kerak?","options":["Sahifa tezligini oshirish","Belgilar kodlashini belgilash (o''zbek harflari to''g''ri chiqishi uchun)","Sahifa rangini o''rnatish","Brauzer turini aniqlash"],"correct":1,"explanation":"UTF-8 — keng tarqalgan belgilar kodlashi standarti. Bu teg bo''lmasa, o''zbek, rus va boshqa milliy harflar noto''g''ri (tushunarsiz belgilar sifatida) ko''rinishi mumkin."},{"question":"viewport meta tegi nima uchun ishlatiladi?","options":["Sahifa ko''rinishini belgilash","Mobil qurilmalarda sahifani to''g''ri o''lchamda ko''rsatish","Videoni sozlash","Rasmlarni yuklash"],"correct":1,"explanation":"viewport meta tegi sahifani telefon va planshet ekraniga moslashtiradi. Responsive (moslashuvchan) dizayn yaratish uchun bu teg majburiy hisoblanadi."},{"question":"og:title meta tegi qayerda ishlatiladi?","options":["Brauzer sarlavhasida","Ijtimoiy tarmoqlarda ulashganda (Facebook, Telegram) ko''rinadigan sarlavha","Qidiruv natijalarida","Email''da"],"correct":1,"explanation":"Open Graph (og:) teglari — havolani Facebook, Telegram kabi ijtimoiy tarmoqlarda ulashganda qanday sarlavha, tavsif va rasm bilan chiqishini belgilaydi."},{"question":"meta description necha belgidan iborat bo''lishi tavsiya etiladi?","options":["50 belgi","300-400 belgi","150-160 belgi","10 belgi"],"correct":2,"explanation":"Meta description odatda 150-160 belgi atrofida bo''lishi kerak. Google qidiruv natijalarida sahifa tavsifi sifatida shu matnni ko''rsatadi va undan uzunroq qismini kesib tashlaydi."}]'::jsonb,12);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('hb-13','html-basics','HTML5 yangiliklari','Canvas, SVG, data-* atributlari — HTML5 bilan qo''shilgan zamonaviy imkoniyatlar','11 daqiqa','## HTML5 nima yangiliklar olib keldi?

HTML5 — bu HTML tilining eng so''nggi katta versiyasi bo''lib, u sahifalarga grafika chizish, ma''lumot saqlash va foydalanuvchi bilan interaktiv ishlash imkonini beruvchi yangi teglarni qo''shdi. Quyida eng muhimlari keltirilgan:

```html
<!-- Canvas (JavaScript bilan) -->
<canvas id="myCanvas" width="400" height="200"></canvas>

<!-- SVG -->
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="#00BCD4" />
</svg>

<!-- Data atributlari -->
<div data-user-id="123" data-role="admin">Foydalanuvchi</div>

<!-- Progress bar -->
<progress value="70" max="100">70%</progress>

<!-- Range input -->
<input type="range" min="0" max="100" value="50">

<!-- Color picker -->
<input type="color" value="#00BCD4">
```

### Har bir element nimaga xizmat qiladi?

**1. `<canvas>`** — JavaScript yordamida piksel asosida rasm chizish maydoni. O''yinlar, grafiklar, animatsiyalar shu orqali yaratiladi. O''zi bo''sh, JS kod yozmasangiz hech narsa ko''rinmaydi.

**2. `<svg>`** — vektor grafika. Kvadrat, doira, chiziq kabi shakllarni to''g''ridan-to''g''ri HTML ichida chizish mumkin. Canvas''dan farqli o''laroq, SVG kattalashtirilganda ham sifatini yo''qotmaydi (logotiplar, ikonkalar uchun ideal).

**3. `data-*` atributlari** — HTML elementiga o''zingiz xohlagan qo''shimcha ma''lumot yozib qo''yish imkoni. Masalan, `data-user-id="123"` — bu ma''lumotni JavaScript orqali `element.dataset.userId` deb o''qib olish mumkin. Foydalanuvchi ID''si, holat, kategoriya kabi narsalarni saqlashda qulay.

**4. `<progress>`** — jarayonning necha foizi bajarilganini ko''rsatuvchi chiziq (progress bar). Masalan, fayl yuklanishi yoki topshiriq bajarilishini vizual ko''rsatish uchun ishlatiladi.

**5. `<input type="range">`** — surib boshqariladigan slider. Ovoz balandligi, narx oralig''i, reyting kabi qiymatlarni tanlashda ishlatiladi.

**6. `<input type="color">`** — foydalanuvchiga rang tanlash oynasini avtomatik ochib beradi, alohida JS kutubxonasi kerak emas.',null,'article','[{"question":"<canvas> va <svg> orasidagi asosiy farq nima?","options":["Hech qanday farq yo''q","<canvas> JavaScript bilan piksel asosida chizadi, SVG esa vektoral element","<svg> JavaScript bilan ishlaydi, canvas oddiy HTML","Ikkalasi ham bir xil ishlaydi"],"correct":1,"explanation":"<canvas> — JavaScript orqali piksellarga chizish maydoni. SVG esa vektoral grafika bo''lib, to''g''ridan-to''g''ri HTML teg sifatida yoziladi va kattalashtirilganda sifatini yo''qotmaydi."},{"question":"data-* atributlari nima uchun ishlatiladi?","options":["CSS stillari uchun","HTML elementlarga maxsus (qo''shimcha) ma''lumot saqlash uchun","JavaScript ni o''chirish uchun","Serverga ma''lumot yuborish uchun"],"correct":1,"explanation":"data-* — foydalanuvchi tomonidan belgilanadigan maxsus ma''lumot atributlari. Bu ma''lumot JavaScript''da dataset orqali o''qiladi, masalan: element.dataset.userId."},{"question":"<progress value=''70'' max=''100''> nimani bildiradi?","options":["70% to''lgan progress bar","100% to''liq progress","70 soniyalik jarayon","70 ta element mavjudligi"],"correct":0,"explanation":"<progress> — jarayon ko''rsatgichi. value va max qiymatlarining nisbati to''lganlik foizini bildiradi: 70/100 = 70% bajarilgan."},{"question":"<input type=''range''> nima uchun ishlatiladi?","options":["Matn kiritish uchun","Surib (slider) qiymat tanlash boshqaruvi uchun","Rang tanlash uchun","Sana tanlash uchun"],"correct":1,"explanation":"<input type=''range''> — surma (slider) boshqaruv elementi. min, max, step va value atributlari orqali qanday qiymatlar oralig''ida ishlashi sozlanadi."}]'::jsonb,13);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('hb-14','html-basics','Yakuniy loyiha','To''liq HTML sahifasi yaratish','25 daqiqa','Barcha o''rganganlaringizni birlashtiriб, to''liq HTML sahifasi yarating.

**Loyiha: Shaxsiy portfolio sahifasi**

Tarkib:
- `<header>` — navigatsiya
- Hero section — sarlavha va tavsif
- `<section>` — Ko''nikmalar
- `<section>` — Loyihalar
- `<section>` — Men haqimda
- Bog''lanish formasi
- `<footer>`

Bu loyiha CV ga qo''shsa bo''ladigan real ish bo''ladi!',null,'article','[{"question":"HTML da eng katta sarlavha tegi qaysi?","options":["<h6>","<h1>","<header>","<title>"],"correct":1,"explanation":"<h1> — eng katta va muhim sarlavha. <h6> — eng kichigi. Sahifada odatda bitta <h1> bo''lishi kerak."},{"question":"Havola yaratish uchun qaysi teg ishlatiladi?","options":["<link>","<url>","<a>","<href>"],"correct":2,"explanation":"<a href=''...''>Matn</a> — anchor tegi. href atributi havola manzilini ko''rsatadi."},{"question":"Rasm qo''shish uchun to''g''ri usul qaysi?","options":["<image src=''r.jpg''>","<img src=''r.jpg'' alt=''tavsif''>","<img>r.jpg</img>","<picture src=''r.jpg''>"],"correct":1,"explanation":"<img> — yopilmaydigan teg. src — rasm manzili, alt — ko''rinmasa chiqadigan matn (majburiy)."},{"question":"HTML da izoh (comment) qanday yoziladi?","options":["// Izoh","/* Izoh */","<!-- Izoh -->","# Izoh"],"correct":2,"explanation":"<!-- bu izoh --> — HTML dagi to''g''ri izoh yozish usuli. Brauzer bu matnni ko''rsatmaydi."},{"question":"<div> va <span> farqi nima?","options":["Hech qanday farq yo''q","<div> blok, <span> inline element","<span> blok, <div> inline element","<div> faqat matn uchun"],"correct":1,"explanation":"<div> — blok element (yangi qatordan boshlanadi), <span> — inline element (matn ichida ishlatiladi)."}]'::jsonb,14);
insert into courses (id,title,description,category,level,duration,color,image,is_premium,topics,position) values ('css-basics','CSS Asoslari','CSS bilan veb-sahifalarni bezang. Ranglar, shriftlar, qutilar modeli va layout.','CSS','Boshlang''ich','6 soat','#264DE4','course-css',true,'["Selektorlar","Box Model","Flexbox","Grid","Animatsiya"]'::jsonb,2);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('cb-1','css-basics','CSS ga kirish','CSS nima, qanday ishlaydi','9 daqiqa','CSS (Cascading Style Sheets) — HTML elementlarini qanday ko''rinishi kerakligini belgilovchi tizim.

**3 ta uslash usuli:**

```html
<!-- 1. Inline -->
<p style="color: teal; font-size: 18px;">Matn</p>

<!-- 2. Internal -->
<style>
  p { color: teal; }
</style>

<!-- 3. External (tavsiya etiladi) -->
<link rel="stylesheet" href="style.css">
```

**Cascade nima?** CSS da keyingi qoidalar oldingilarni bekor qiladi.','https://www.youtube.com/watch?v=yfoY53QXEnI','video','[{"question":"CSS nimaning qisqartmasi?","options":["Creative Style System","Cascading Style Sheets","Computer Style Syntax","Custom Style Sheets"],"correct":1,"explanation":"CSS — Cascading Style Sheets. HTML elementlarning ko''rinishini (rang, shrift, joylashuv) belgilaydi."},{"question":"CSS ni qo''shishning eng tavsiya etilgan usuli?","options":["Inline style","Internal <style> teg","Tashqi .css fayl bilan <link>","JavaScript orqali"],"correct":2,"explanation":"Tashqi CSS fayli — eng yaxshi usul. Kodni ajratadi, bir fayl ko''p sahifada ishlaydi, kesh imkoniyati bor."},{"question":"Cascade CSS da nima bildiradi?","options":["Kaskad seldaryosi","Keyingi qoidalar oldingilarni bekor qilishi mumkin","Faqat bitta qoida ishlaydi","Qoidalar tartibi muhim emas"],"correct":1,"explanation":"Cascade — qoidalar zanjiri. Keyingi yozilgan qoida (agar muhimlik teng bo''lsa) oldingilarni ustidan yozadi."},{"question":"Tashqi CSS faylini HTMLga ulash sintaksisi?","options":["<style src=''style.css''>","<css href=''style.css''>","<link rel=''stylesheet'' href=''style.css''>","<import url=''style.css''>"],"correct":2,"explanation":"<link rel=''stylesheet'' href=''style.css''> — tashqi CSS faylini <head> ichida ulaydi."}]'::jsonb,1);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('cb-2','css-basics','Selektorlar','Element, class, id, combinators, pseudo-class','14 daqiqa','```css
/* Element selektori */
p { color: navy; }

/* Class selektori */
.card { border-radius: 12px; }

/* ID selektori */
#header { background: #00BCD4; }

/* Avlod selektori */
.card p { font-size: 14px; }

/* To''g''ridan-to''g''ri avlod */
.card > h2 { color: navy; }

/* Pseudo-class */
a:hover { color: teal; }
input:focus { border-color: #00BCD4; }
li:first-child { font-weight: bold; }
li:nth-child(2n) { background: #f0f4f8; }

/* Pseudo-element */
p::first-line { font-weight: bold; }
.card::before { content: ''''; display: block; }
```',null,'article','[{"question":"Class selektori qanday yoziladi?","options":["#card",".card","card","*card"],"correct":1,"explanation":".card — nuqta bilan boshlanadi. Bir sahifada bir nechta elementda ishlatilishi mumkin."},{"question":"ID selektori qanday yoziladi?","options":[".header","#header","header!","@header"],"correct":1,"explanation":"#header — panjara (#) bilan boshlanadi. Sahifada faqat 1 ta element shu id ga ega bo''lishi kerak."},{"question":"a:hover nima qiladi?","options":["Barcha havola stillarini o''chiradi","Sichqoncha ustiga borilganda stil qo''llaydi","Havolani yashiradi","Havolani aktiv qiladi"],"correct":1,"explanation":":hover — pseudo-class. Sichqoncha element ustiga borilganda ishlaydi. :focus, :active, :visited ham pseudo-classlar."},{"question":".card p selektori nima ma''nosi?","options":["card klassi va p bir xil element",".card ICHIDAGI barcha <p> elementlar","<p> ichidagi .card elementlar","Birinchi <p> element"],"correct":1,"explanation":"Bo''sh joy — avlod selektori. .card p — .card elementi ICHIDA joylashgan barcha <p> larga stil beradi."}]'::jsonb,2);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('cb-3','css-basics','Ranglar va fondlar','Color, background, gradient','12 daqiqa','```css
/* Rang usullari */
.el { color: teal; }           /* Named */
.el { color: #00BCD4; }        /* HEX */
.el { color: rgb(0, 188, 212); }  /* RGB */
.el { color: hsl(187, 100%, 42%); } /* HSL */
.el { color: rgba(0,188,212, 0.5); } /* Shaffoflik */

/* Fon */
.hero {
  background-color: #f4f6f9;
  background-image: url(''bg.jpg'');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Gradient */
.btn {
  background: linear-gradient(135deg, #00BCD4, #0097A7);
}
.circle {
  background: radial-gradient(circle, #00BCD4, #264DE4);
}
```',null,'article','[{"question":"HEX rang #00BCD4 da nechta belgi bor?","options":["4","6","8","3"],"correct":1,"explanation":"#RRGGBB — 6 belgi. Har 2 ta: qizil, yashil, ko''k. #000 = qora, #fff = oq, #00BCD4 = teal rang."},{"question":"rgba(0, 188, 212, 0.5) dagi 0.5 nima bildiradi?","options":["50% qizil rang","50% shaffoflik (opacity)","50px o''lcham","50% yashil rang"],"correct":1,"explanation":"rgba 4-qiymati — alpha (shaffoflik). 0 = to''liq shaffof, 1 = to''liq qovoq. 0.5 = yarim shaffof."},{"question":"linear-gradient(135deg, #00BCD4, #0097A7) nima yaratadi?","options":["Aylana gradient","Diagonal chiziqli gradient","Gorizontal gradient","Rasmli fon"],"correct":1,"explanation":"linear-gradient(burchak, rang1, rang2) — chiziqli gradient. 135deg = diagonal (chapdan o''ngga pastga)."},{"question":"background-size: cover nima qiladi?","options":["Rasmni kichraytiradi","Rasm elementni to''liq qoplashi uchun kengaytiradi (kesilishi mumkin)","Rasm takrorlanadi","Rasm o''zgarmas qoladi"],"correct":1,"explanation":"cover — rasm element maydonini to''liq qoplashi uchun proporsional kengaytiradi. Ba''zi qismlar kesilishi mumkin."}]'::jsonb,3);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('cb-4','css-basics','Shriftlar va matn','font-family, size, weight, line-height, text-align','13 daqiqa','```css
/* Google Fonts ulash */
@import url(''https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'');

body {
  font-family: ''Inter'', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #0A1628;
}

h1 {
  font-size: 2.5rem;     /* 40px */
  font-weight: 700;
  letter-spacing: -0.5px;
}

p {
  text-align: left;
  text-indent: 20px;
  word-spacing: 2px;
  text-transform: uppercase; /* lowercase, capitalize */
  text-decoration: underline; /* none, line-through */
}
```',null,'article','[{"question":"font-family: ''Roboto'', sans-serif — sans-serif nima uchun?","options":["Ikkilamchi shrift, Roboto yuklanmasa ishlaydi","Birinchi shrift","Shrift o''lchami","Shrift rangi"],"correct":0,"explanation":"Zapas (fallback) shrift — asosiy shrift yuklanmasa brauzer sans-serif standart shriftini ishlatadi."},{"question":"1rem nima?","options":["1 piksel","Brauzer asosiy shrift o''lchamiga nisbiy (odatda 16px)","1 santimetr","10px"],"correct":1,"explanation":"rem — root em. HTML elementining font-size ga nisbiy. Odatda 1rem = 16px. Accessibility uchun px dan afzal."},{"question":"line-height: 1.6 nima bildiradi?","options":["1.6px qatorlar oralig''i","Shrift o''lchamining 1.6 barobari qator balandligi","1.6em margin","16% qator oralig''i"],"correct":1,"explanation":"line-height birliksiz qiymat — shrift o''lchamiga ko''paytiriladi. font-size: 20px bilan line-height: 1.6 = 32px qator."},{"question":"text-align: justify nima qiladi?","options":["Matnni o''ngga hizalaydi","Matnni ikkala tomonga hizalaydi (gazetalar uslubida)","Matnni markazga hizalaydi","Matnni chapga hizalaydi"],"correct":1,"explanation":"justify — matnni chap va o''ng chegaraga qadar tekislaydi. So''zlar oralig''ini avtomatik kengaytiradi."}]'::jsonb,4);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('cb-5','css-basics','Box Model','margin, padding, border, width, height','15 daqiqa','Har bir HTML element quti (box) sifatida ko''riladi.

```css
.card {
  /* Content */
  width: 300px;
  height: auto;
  
  /* Padding — ichki bo''shliq */
  padding: 20px;           /* barcha tomonlar */
  padding: 10px 20px;      /* yuqori-quyi | chap-o''ng */
  padding: 10px 20px 15px 20px; /* yuqori | o''ng | quyi | chap */
  
  /* Border */
  border: 1px solid #E4EAF2;
  border-radius: 12px;
  
  /* Margin — tashqi bo''shliq */
  margin: 0 auto; /* gorizontal markazlashtirish */
  
  /* Box-sizing (muhim!) */
  box-sizing: border-box;
}
```

**`box-sizing: border-box`** — padding va border width ichiga kiritiladi. Har doim `*` uchun o''rnatish tavsiya etiladi!',null,'article','[{"question":"CSS Box Model tartibini ichdan tashqariga tanlang:","options":["margin → border → padding → content","content → padding → border → margin","padding → content → border → margin","border → margin → padding → content"],"correct":1,"explanation":"Box Model: content (asosiy) → padding (ichki bo''sh joy) → border (chegara) → margin (tashqi bo''sh joy)."},{"question":"box-sizing: border-box nima qiladi?","options":["Faqat border o''lchami belgilanadi","width/height ga padding va border kiritiladi (realistik o''lcham)","Elementni qutiga aylantiradi","Margin hisoblanmaydi"],"correct":1,"explanation":"border-box — width: 300px deb yozsak, element 300px bo''ladi (padding va border ichiga kiradi). Hisoblash osonlashadi."},{"question":"margin: 0 auto nima qiladi?","options":["Elementni yashiradi","Elementni gorizontal markazga qo''yadi","Elementni vertikal markazga qo''yadi","Elementni chapga qo''yadi"],"correct":1,"explanation":"margin: 0 auto — yuqori/pastda 0, chap/o''ngda auto. Element blok bo''lsa, gorizontal markazga joylashadi."},{"question":"padding: 10px 20px 15px 5px — tartib qanday?","options":["chapdan soat yo''li bilan","Yuqori → O''ng → Past → Chap (soat yo''li)","Chap → O''ng → Yuqori → Past","Barcha tomonlar bir xil"],"correct":1,"explanation":"4 qiymat: Yuqori(10) → O''ng(20) → Past(15) → Chap(5). TRBL: Top Right Bottom Left — soat yo''li."}]'::jsonb,5);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('cb-6','css-basics','Display va Position','block, inline, relative, absolute, fixed, sticky','17 daqiqa','```css
/* Display */
.block { display: block; }       /* To''liq kenglik */
.inline { display: inline; }     /* Matn ichida */
.inline-block { display: inline-block; } /* Ikkalasi uchun */
.hidden { display: none; }       /* Ko''rinmas */

/* Position */
.relative { 
  position: relative;
  top: 10px; left: 20px; /* asl joyiga nisbatan */
}

.absolute {
  position: absolute;
  top: 0; right: 0; /* eng yaqin relative ota elementga nisbatan */
}

.fixed {
  position: fixed;
  bottom: 20px; right: 20px; /* viewport ga nisbatan */
  z-index: 100;
}

.sticky {
  position: sticky;
  top: 0; /* scroll qilganda yopishib qoladi */
}
```',null,'article','[{"question":"display: none va visibility: hidden farqi nima?","options":["Hech qanday farq yo''q","display:none joy ham olmaydi, visibility:hidden joy oladi lekin ko''rinmaydi","visibility:hidden joy ham olmaydi","display:none ko''rinmaydi lekin joy oladi"],"correct":1,"explanation":"display:none — element sahifadan butunlay olib tashlangandek. visibility:hidden — ko''rinmaydi lekin joy egallaydi."},{"question":"position: absolute elementi nima ga nisbatan joylashadi?","options":["Ekranga nisbatan","Sahifa boshiga nisbatan","Eng yaqin position:relative/absolute/fixed ota elementga nisbatan","Browser oynasiga"],"correct":2,"explanation":"absolute — nisbiy joylashuv. Ota elementda position belgilangan bo''lsa, shunga nisbatan. Aks holda body ga nisbatan."},{"question":"position: fixed elementi nima ga nisbatan joylashadi?","options":["Ota elementga","Sahifaga","Browser oynasiga (viewport) — scroll bo''lganda ham qoladi","Birinchi elementga"],"correct":2,"explanation":"fixed — brauzer oynasiga nisbatan. Sahifa aylantirilganda (scroll) ham o''z joyida qoladi. Navbar uchun ideal."},{"question":"z-index nima qiladi?","options":["Elementning gorizontal joyini belgilaydi","Elementlarning qaysi biri ustida ko''rinishini (qatlam tartibi) belgilaydi","Elementni kattalashtiradi","Elementning shaffofligini belgilaydi"],"correct":1,"explanation":"z-index — qatlam tartibi. Kattaroq z-index ustida ko''rinadi. Faqat position:relative/absolute/fixed/sticky da ishlaydi."}]'::jsonb,6);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('cb-7','css-basics','Flexbox','flex container va flex items xususiyatlari','20 daqiqa','```css
/* Container */
.flex-container {
  display: flex;
  flex-direction: row;          /* row | column | row-reverse */
  justify-content: space-between; /* main axis */
  align-items: center;          /* cross axis */
  flex-wrap: wrap;
  gap: 16px;
}

/* Items */
.flex-item {
  flex: 1;        /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
  flex: 0 0 200px; /* o''lchami o''zgarmaydi */
  align-self: flex-start; /* individual hizalanish */
  order: 2; /* tartib */
}

/* Markazlashtirish (eng ko''p ishlatiladigan) */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```',null,'article','[{"question":"Flexbox yoqish uchun qaysi xususiyat?","options":["display: block","display: flex","flex: 1","flex-direction: row"],"correct":1,"explanation":"display: flex — ota elementga qo''llanadi. Barcha to''g''ridan-to''g''ri bolalar flex item ga aylanadi."},{"question":"justify-content: space-between nima qiladi?","options":["Elementlarni markazga qo''yadi","Birinchi va oxirgi chekkalarga, qolganlar teng oraliq bilan","Barcha elementlarni bir-biridan teng uzoqda qo''yadi","Elementlarni to''g''ri tekislaydi"],"correct":1,"explanation":"space-between — bosh va oxirgi elementlar chekkada, oradagilar teng interval bilan. Navbar uchun keng ishlatiladi."},{"question":"align-items: center nima qiladi?","options":["Elementlarni gorizontal markazga qo''yadi","Elementlarni ko''ndalang o''qi bo''yicha markazlashtiradi","Matnni markazga qo''yadi","Elementlarni pastga qo''yadi"],"correct":1,"explanation":"align-items — ko''ndalang o''q (cross axis). flex-direction:row bo''lsa, vertikal markazlashtiradi."},{"question":"flex-wrap: wrap nima qiladi?","options":["Elementlarni yashiradi","Sig''masa keyingi qatorga o''tish imkonini beradi","Elementlarni kichraytiradi","Qatorni o''chiradi"],"correct":1,"explanation":"flex-wrap:wrap — konteyner torayib ketsa, flex itemlar keyingi qatorga o''tadi. nowrap (standart) — toraytiriladi."}]'::jsonb,7);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('cb-8','css-basics','CSS Grid','grid-template, grid areas, auto-placement','22 daqiqa','```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 20px;
  
  /* Named areas */
  grid-template-areas:
    ''header header header''
    ''sidebar main main''
    ''footer footer footer'';
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Individual item joylash */
.featured {
  grid-column: 1 / 3; /* 1-ustundan 3-gacha */
  grid-row: 1 / 2;
}
```',null,'article','[{"question":"CSS Grid yoqish uchun qaysi xususiyat?","options":["display: flex","display: grid","grid: 1","grid-template: row"],"correct":1,"explanation":"display: grid — ota elementga qo''llanadi. Grid ikki o''lchamli (2D) joylashuv tizimi, Flexbox esa bir o''lchamli (1D)."},{"question":"grid-template-columns: repeat(3, 1fr) nima yaratadi?","options":["3 ta qator","Har biri teng bo''lgan 3 ta ustun","300px kenglik","3 ta band"],"correct":1,"explanation":"repeat(3, 1fr) — 3 ta ustun, har biri bo''sh joyni teng bo''lisib oladi. 1fr = fraction (bir bo''lak)."},{"question":"fr birligi nima?","options":["Frame (kadr)","Fraction — mavjud bo''sh joyning ulushi","Free (bepul)","Font relative"],"correct":1,"explanation":"fr — fractional unit. Mavjud bo''sh joyni ulushlab beradi. 1fr 2fr = 1:2 nisbatda bo''linadi."},{"question":"grid-area: header nima qiladi?","options":["Elementga header id beradi","Elementni grid-template-areas da belgilangan ''header'' hududga joylashtiradi","Header class qo''shadi","Header tegini yaratadi"],"correct":1,"explanation":"grid-area — elementni grid-template-areas da nomlangan hudud (''header'') ga joylashtiradi. Vizual layout qurishni osonlashtiradi."}]'::jsonb,8);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('cb-9','css-basics','Responsive Design','Media queries, mobile-first, breakpoints','18 daqiqa','```css
/* Mobile First yondashuv */
.container {
  padding: 16px;
  max-width: 100%;
}

/* Tablet: 768px+ */
@media (min-width: 768px) {
  .container {
    padding: 24px;
    max-width: 768px;
    margin: 0 auto;
  }
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  .container { max-width: 1200px; }
  .grid { grid-template-columns: repeat(3, 1fr); }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  body { background: #0A1628; color: white; }
}
```',null,'article','[{"question":"@media (max-width: 768px) {} nima qiladi?","options":["Sahifani 768px ga qiladi","768px va undan kichik ekranlarda ishlaydi","768px dan katta ekranlarda ishlaydi","768px kenglik beradi"],"correct":1,"explanation":"max-width: 768px — ekran 768px yoki undan kichik bo''lganida bu CSS qoidalari ishlaydi. Planshet va mobil uchun."},{"question":"Mobile-first yondashuv nima?","options":["Faqat mobil uchun dizayn","Kichik ekranlar uchun asosiy CSS, kattaroqlar uchun min-width bilan kengaytirish","Kompyuter uchun avval dizayn","Mobil sahifani alohida yaratish"],"correct":1,"explanation":"Mobile-first — avval kichik ekran uchun yoziladi, keyin min-width media query lar bilan kattaroq ekranlar uchun kengaytiriladi."},{"question":"max-width: 1200px; margin: 0 auto nima qiladi?","options":["Sahifani 1200px kichraytiradi","Konteyner 1200px dan oshmasin, kattaroq ekranlarda markazga qo''ysin","1200px dan kichik sahifalar uchun","Sahifani o''chiradi"],"correct":1,"explanation":"max-width kontent juda keng bo''lib ketmasligi uchun. margin: 0 auto — markaz tekislash. Asosiy wrapper uchun keng qo''llanadi."},{"question":"@media (prefers-color-scheme: dark) nima uchun?","options":["Foydalanuvchi brauzer rangini o''zgartirgan","Qurilmada qorong''u rejim yoqilgan bo''lsa ishlaydi","Qora rang berish uchun","Faqat kechasi ishlaydi"],"correct":1,"explanation":"prefers-color-scheme: dark — foydalanuvchi OS da qorakg''u (dark mode) rejimni tanlagan bo''lsa, bu stillar ishlaydi."}]'::jsonb,9);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('cb-10','css-basics','Transitions va Animations','transition, @keyframes, animation','16 daqiqa','```css
/* Transition */
.btn {
  background: #00BCD4;
  transition: all 0.3s ease;
}
.btn:hover {
  background: #0097A7;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,188,212,0.3);
}

/* Keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeInUp 0.5s ease forwards;
}

/* Spin */
@keyframes spin {
  to { transform: rotate(360deg); }
}
.loader { animation: spin 1s linear infinite; }
```',null,'article','[{"question":"transition: all 0.3s ease nima qiladi?","options":["Elementni o''chiradi","Barcha o''zgaruvchi xususiyatlar 0.3s ichida silliq animatsiya bilan o''zgaradi","0.3 soniyada yuklanadi","Tezlikni oshiradi"],"correct":1,"explanation":"transition: xususiyat muddat timing. all=barcha xususiyatlar, 0.3s=vaqt, ease=sekin boshlab tezlashadi."},{"question":"@keyframes nima uchun?","options":["CSS faylni import qilish","Animatsiya bosqichlarini belgilash (from to, 0% 100%)","Kadr tanlash","Font yuklash"],"correct":1,"explanation":"@keyframes — animatsiya bosqichlari. from (0%) dan to (100%) gacha yoki foizlar bilan aniq bosqichlar belgilanadi."},{"question":"animation-iteration-count: infinite nima qiladi?","options":["Animatsiyani 1 marta ishlatadi","Animatsiyani cheksiz takrorlaydi","Animatsiyani o''chiradi","Animatsiyani teskari qiladi"],"correct":1,"explanation":"infinite — animatsiya to''xtatilgunga qadar cheksiz takrorlanadi. Yuklanish spinner uchun keng ishlatiladi."},{"question":"transform: translateY(-10px) nima qiladi?","options":["Elementni 10px kattalashtiradi","Elementni 10px yuqoriga siljitadi","Elementni 10px pastga siljitadi","Elementni 10% siljitadi"],"correct":1,"explanation":"translateY(manfiy) — elementni yuqoriga siljitadi. Hover effekt uchun keng ishlatiladi: kartani hover qilganda ko''tariladi."}]'::jsonb,10);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('cb-11','css-basics','CSS Variables va Custom Properties','var(), :root, dynamic theming','12 daqiqa','```css
/* Global o''zgaruvchilar */
:root {
  --color-primary: #00BCD4;
  --color-dark: #0A1628;
  --color-bg: #F4F6F9;
  --radius: 12px;
  --shadow: 0 4px 20px rgba(0,0,0,0.08);
  --font-size-base: 16px;
}

/* Ishlatish */
.btn {
  background: var(--color-primary);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

/* Dark mode o''zgaruvchilari */
[data-theme=''dark''] {
  --color-bg: #0A1628;
  --color-dark: #ffffff;
}
```',null,'article','[{"question":":root selektori nima uchun?","options":["Ildiz papkasi","HTML dokumentining asosiy elementi — CSS o''zgaruvchilarni global belgilash uchun","Birinchi element","Root klassi"],"correct":1,"explanation":":root — HTML ning yuqori darajali elementi. Bu yerda belgilangan CSS o''zgaruvchilari butun sahifada ishlaydi."},{"question":"CSS o''zgaruvchisi (custom property) qanday e''lon qilinadi?","options":["$primary: #00BCD4","@primary: #00BCD4","--primary: #00BCD4","var-primary: #00BCD4"],"correct":2,"explanation":"--ismingiz: qiymat — ikkita chiziqcha bilan boshlanadi. Bu CSS standart custom property (o''zgaruvchi) sintaksisi."},{"question":"CSS o''zgaruvchisini qanday ishlatiladi?","options":["$primary","@primary","#{--primary}","var(--primary)"],"correct":3,"explanation":"var(--o''zgaruvchi-ismi) — o''zgaruvchi qiymatini o''qiydi. Masalan: color: var(--primary-color);"},{"question":"var(--color, #000) dagi #000 nima?","options":["Majburiy qiymat","O''zgaruvchi topilmasa ishlaydigan zapas qiymat (fallback)","Rang kodi","ID selektori"],"correct":1,"explanation":"var() ning ikkinchi argumenti — fallback. --color o''zgaruvchisi aniqlanmagan bo''lsa, #000 ishlatiladi."}]'::jsonb,11);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('cb-12','css-basics','Yakuniy loyiha','Web Academy landing page kloni','30 daqiqa','CSS bilimlaringizni sinab ko''rish uchun Web Academy saytiga o''xshash landing page yarating.

**Tarkib:**
- Header (sticky nav)
- Hero section (gradient + animatsiya)
- Features grid
- Kurslar karuseli
- Testimonials
- CTA section
- Footer

**Texnologiyalar:** HTML5 + CSS3, Flexbox, Grid, Animations, CSS Variables',null,'article','[{"question":"CSS da Flexbox ni yoqish uchun qaysi xususiyat ishlatiladi?","options":["display: block","display: flex","position: flex","flex: 1"],"correct":1,"explanation":"display: flex — element ichidagi bolalarni Flexbox qoidalari asosida joylashtiradi."},{"question":"CSS Box Model da to''g''ri tartib qaysi?","options":["margin → border → padding → content","padding → margin → border → content","content → padding → border → margin","border → padding → content → margin"],"correct":2,"explanation":"Box Model: content (matn) → padding (ichki bo''shliq) → border (chegara) → margin (tashqi bo''shliq)."},{"question":"Elementni markazga joylashtirish uchun Flexbox da qaysi xususiyatlar ishlatiladi?","options":["align: center","justify-content: center + align-items: center","text-align: center + vertical-align: middle","center: true"],"correct":1,"explanation":"justify-content: center — gorizontal, align-items: center — vertikal markazlash. Ikkalasi birga elementni to''liq markazga qo''yadi."},{"question":"CSS o''zgaruvchisi (Custom Property) qanday e''lon qilinadi?","options":["$color: blue","@color: blue","--color: blue","var color: blue"],"correct":2,"explanation":"--o''zgaruvchi-nomi: qiymat — CSS o''zgaruvchisi. Ishlatish uchun: color: var(--o''zgaruvchi-nomi);"},{"question":"CSS Grid da 3 ta teng ustun yaratish usuli?","options":["columns: 3","grid-template-columns: repeat(3, 1fr)","flex: 3","grid-columns: 3"],"correct":1,"explanation":"grid-template-columns: repeat(3, 1fr) — 3 ta teng kenglikdagi ustun. 1fr = bo''sh joyning bir ulushi."}]'::jsonb,12);
insert into courses (id,title,description,category,level,duration,color,image,is_premium,topics,position) values ('javascript','JavaScript','ES6+ dan async/await gacha — zamonaviy JavaScript ni chuqur o''rganing va interaktiv ilovalar yarating.','JavaScript','O''rta','10 soat','#F7DF1E',null,true,'["ES6+","DOM","Fetch API","Async/Await","OOP"]'::jsonb,3);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-1','javascript','JavaScript ga kirish','JS tarixi va imkoniyatlari','10 daqiqa','JavaScript — 1995-yilda Brendan Eich tomonidan atigi 10 kunda yaratilgan dasturlash tili. Dastlab faqat veb-brauzer ichida ishlatilgan, hozirda esa eng keng tarqalgan dasturlash tillaridan biriga aylangan.

**JavaScript nima uchun kerak?**

HTML — sahifaning skelet (tuzilma), CSS — uning ko''rinishi, JavaScript esa — uning harakati. Tugma bosilganda nima bo''ladi, forma yuborilganda qanday tekshiriladi, ma''lumotlar serverdan qanday yuklanadi — bularning barchasi JavaScript orqali boshqariladi.

**JavaScript qayerlarda ishlatiladi?**
- **Veb brauzerda** — barcha zamonaviy brauzerlar JS ni tushunadi
- **Serverda** — Node.js yordamida backend dasturlash
- **Mobil ilovalarda** — React Native yordamida iOS va Android
- **Desktop dasturlarda** — Electron yordamida (VS Code, Discord shu bilan yozilgan)
- **Ma''lumotlar bazasida** — MongoDB JavaScript so''rovlarini qo''llab-quvvatlaydi

**Birinchi JavaScript kodi:**
```js
// Konsolga xabar chiqarish
console.log(''Salom, Dunyo!'');

// Foydalanuvchiga oyna ko''rsatish
alert(''Web Academyga xush kelibsiz!'');

// Foydalanuvchidan ma''lumot olish
const ism = prompt(''Ismingizni kiriting:'');
console.log(''Salom, '' + ism + ''!'');
```

**Muhim:** JavaScript — *case-sensitive* (katta-kichik harfga sezgir). `name` va `Name` — bu ikki turli o''zgaruvchi.','https://www.youtube.com/watch?v=W6NZfCO5SIk','video','[{"question":"JavaScript kim tomonidan yaratilgan?","options":["Tim Berners-Lee","Brendan Eich (Netscape, 1995)","Guido van Rossum","James Gosling"],"correct":1,"explanation":"Brendan Eich 1995 yilda Netscape uchun JavaScript ni 10 kunda yaratdi. Dastlab Mocha, keyin LiveScript deb atalgan."},{"question":"console.log() nima qiladi?","options":["Sahifaga matn chiqaradi","Brauzer konsolida ma''lumot ko''rsatadi","Faylga yozadi","Serverni to''xtatadi"],"correct":1,"explanation":"console.log() — brauzer DevTools konsolida ma''lumot ko''rsatadi. Debug (xato topish) uchun eng ko''p ishlatiladigan usul."},{"question":"JavaScript qayerda ishlaydi?","options":["Faqat serverda","Faqat brauzerda","Brauzer (frontend) va Node.js (backend) da","Faqat mobil qurilmalarda"],"correct":2,"explanation":"JS — universal til. Brauzerda HTML/CSS bilan ishlaydi, Node.js orqali serverda ham ishlashi mumkin."},{"question":"HTML va CSS ga nisbatan JavaScript ning roli?","options":["Tuzilma yaratadi","Ko''rinish beradi","Interaktivlik va dinamik funksional ta''minlaydi","Ma''lumot saqlaydi"],"correct":2,"explanation":"HTML = tuzilma, CSS = ko''rinish, JS = harakat. Tugmalar, animatsiyalar, dinamik kontent, server bilan aloqa."}]'::jsonb,1);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-2','javascript','O''zgaruvchilar va ma''lumot turlari','let, const, var va ma''lumot turlari','15 daqiqa','O''zgaruvchi — ma''lumotni saqlaydigan «quti». JavaScript da o''zgaruvchi e''lon qilishning 3 usuli bor.

**var, let, const farqlari:**
```js
// var — eski usul, hozir ishlatilmaydi (muammoli)
var yosh = 18;

// let — qiymati o''zgarishi mumkin bo''lgan o''zgaruvchi
let ball = 0;
ball = 10;  // o''zgartirish mumkin

// const — qiymati o''zgarmaydigan o''zgaruvchi
const PI = 3.14159;
// PI = 3; // Xato! const ni o''zgartirib bo''lmaydi
```

**Tavsiya:** Har doim `const` ishlating. Agar o''zgarishi kerak bo''lsa `let` ishlating. `var` ni hech qachon ishlatmang.

**Ma''lumot turlari:**
```js
// 1. String (matn)
const ism = ''Alibek'';       // yoki "Alibek" yoki `Alibek`
const salom = `Salom, ${ism}!`;  // template literal

// 2. Number (son)
const yosh = 17;
const narx = 99.99;
const salbiy = -5;

// 3. Boolean (mantiqiy)
const faol = true;
const bloklangan = false;

// 4. null — ataylab bo''sh qiymat
const foydalanuvchi = null;

// 5. undefined — qiymat berilmagan
let natija;  // undefined

// 6. Array (massiv)
const kurslar = [''HTML'', ''CSS'', ''JavaScript''];

// 7. Object (ob''ekt)
const talaba = { ism: ''Zafar'', yosh: 16, ball: 95 };
```

**Turni tekshirish:**
```js
console.log(typeof ''Salom'');     // ''string''
console.log(typeof 42);          // ''number''
console.log(typeof true);        // ''boolean''
console.log(typeof undefined);   // ''undefined''
console.log(typeof null);        // ''object'' (tarixiy xato!)
console.log(typeof []);          // ''object''
console.log(typeof {});          // ''object''
```

**Arifmetik operatorlar:**
```js
let a = 10, b = 3;
console.log(a + b);   // 13 — qo''shish
console.log(a - b);   // 7  — ayirish
console.log(a * b);   // 30 — ko''paytirish
console.log(a / b);   // 3.33... — bo''lish
console.log(a % b);   // 1  — qoldiq
console.log(a ** b);  // 1000 — daraja (10³)
```',null,'article','[{"question":"const va let farqi nima?","options":["Hech qanday farq yo''q","const — o''zgarmas, let — o''zgarishi mumkin","let — o''zgarmas, const — o''zgarishi mumkin","const faqat server uchun"],"correct":1,"explanation":"const — bir marta e''lon qilinib qiymati o''zgarmaydi. let — qayta qiymat berilishi mumkin. Har doim avval const ishlating."},{"question":"typeof null natijasi nima?","options":["''null''","''undefined''","''object''","''boolean''"],"correct":2,"explanation":"typeof null === ''object'' — bu JavaScript ning tarixiy xatosi. null aslida alohida tur, lekin typeof ''object'' qaytaradi."},{"question":"Template literal sintaksisi qaysi?","options":["''Salom '' + ism","\"Salom \" + ism","`Salom ${ism}`","[Salom, ism]"],"correct":2,"explanation":"Template literal — backtick (`) bilan yoziladi. ${} ichida ifoda yoziladi. Ko''p qatorli matnlar uchun ham qulay."},{"question":"typeof 42 natijasi nima?","options":["''integer''","''number''","''int''","''float''"],"correct":1,"explanation":"JavaScript da butun va kasr sonlar uchun bitta tur: ''number''. typeof 42 === ''number'', typeof 3.14 === ''number''."}]'::jsonb,2);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-3','javascript','Shartlar va tsikllar','if/else, switch, for, while tsikllari','18 daqiqa','Dastur ba''zida turli sharoitlarda turlicha ishlashi kerak. Buning uchun shartli operatorlar va tsikllar ishlatiladi.

**if / else if / else:**
```js
const ball = 85;

if (ball >= 90) {
  console.log(''A\''lo (5)'');
} else if (ball >= 75) {
  console.log(''Yaxshi (4)'');
} else if (ball >= 55) {
  console.log(''Qoniqarli (3)'');
} else {
  console.log(''Qoniqarsiz (2)'');
}
// Natija: ''Yaxshi (4)''
```

**Taqqoslash operatorlari:**
```js
console.log(5 == ''5'');   // true  — faqat qiymat tengligini tekshiradi
console.log(5 === ''5'');  // false — qiymat VA tur tengligini tekshiradi
console.log(5 !== 3);   // true
console.log(10 > 5);    // true
console.log(3 <= 3);    // true

// Mantiqiy operatorlar
console.log(true && false);  // false — VA (ikkalasi ham true bo''lishi kerak)
console.log(true || false);  // true  — YOKI (bittasi true bo''lsa yetarli)
console.log(!true);          // false — EMAS
```

**Ternary operator (qisqa if/else):**
```js
const yosh = 18;
const holat = yosh >= 18 ? ''Voyaga yetgan'' : ''Voyaga yetmagan'';
console.log(holat);  // ''Voyaga yetgan''
```

**for tsikli:**
```js
// 1 dan 5 gacha sonlarni chiqarish
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// 1, 2, 3, 4, 5

// Massiv ustida tsikl
const kurslar = [''HTML'', ''CSS'', ''JS'', ''React''];
for (let i = 0; i < kurslar.length; i++) {
  console.log(i + 1 + ''. '' + kurslar[i]);
}
```

**for...of — massiv elementlarini o''qish:**
```js
const fanlar = [''Matematika'', ''Fizika'', ''Informatika''];
for (const fan of fanlar) {
  console.log(fan);
}
```

**while tsikli:**
```js
let son = 1;
while (son <= 10) {
  if (son % 2 === 0) {
    console.log(son + '' juft son'');
  }
  son++;
}
// 2, 4, 6, 8, 10
```

**switch — ko''p shartli tekshiruv:**
```js
const kun = ''Dushanba'';
switch (kun) {
  case ''Dushanba'':
  case ''Seshanba'':
  case ''Chorshanba'':
  case ''Payshanba'':
  case ''Juma'':
    console.log(''Ish kuni'');
    break;
  case ''Shanba'':
  case ''Yakshanba'':
    console.log(''Dam olish kuni'');
    break;
  default:
    console.log(''Noma\''lum kun'');
}
```',null,'article','[{"question":"=== va == farqi nima?","options":["Hech qanday farq yo''q","=== tur ham tekshiradi (qat''iy), == faqat qiymat","== tur ham tekshiradi, === faqat qiymat","=== katta son uchun"],"correct":1,"explanation":"=== qat''iy tenglik: ''5'' === 5 → false (string va number farq). == ''yumshоq'': ''5'' == 5 → true (tur o''zgartiriladi). === ishlatish tavsiya."},{"question":"Ternary operator qanday yoziladi?","options":["if (shart) ? a : b","shart ? a : b","shart ?? a : b","a if shart else b"],"correct":1,"explanation":"ternary: shart ? trueQiymat : falseQiymat. Qisqa if-else o''rnida. const baho = ball >= 90 ? ''A'' : ''B'';"},{"question":"for tsikl tuzilishi qanday?","options":["for (start; stop; step)","for (init; condition; update)","for (i to n)","for each i in n"],"correct":1,"explanation":"for (boshlang''ich; shart; yangilanish) { ... }. Masalan: for (let i = 0; i < 5; i++) — 0 dan 4 gacha."},{"question":"break va continue farqi nima?","options":["Hech qanday farq yo''q","break tsiklni to''xtatadi, continue joriy iteratsiyani o''tkazib keyingiga o''tadi","continue tsiklni to''xtatadi, break o''tkazib yuboradi","Ikkalasi ham to''xtatadi"],"correct":1,"explanation":"break — tsiklni butunlay to''xtatadi. continue — joriy iteratsiyani o''tkazib yuboradi, tsikl davom etadi."}]'::jsonb,3);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-p1','javascript','Loyiha 1: Kalkulyator','O''zgaruvchilar, shartlar va tsikllar bilan interaktiv kalkulyator','30 daqiqa','Birinchi 3 darsda o''rgangan bilimlaringiz bilan real ishlaydigan kalkulyator yarating!

**Loyiha maqsadi:**
Foydalanuvchi ikkita son va amal tanlaydi, dastur natijani hisoblaydi.

**Qanday ishlaydi:**
- Ikkita son so''rash (prompt)
- Amal tanlash (+, -, *, /)
- Natijani hisoblash va ko''rsatish
- Noto''g''ri kiritilsa xabar berish

**Bosqich 1 — o''zgaruvchilar va kiritish:**
```js
// Foydalanuvchidan ma''lumot olish
const son1 = parseFloat(prompt(''Birinchi sonni kiriting:''));
const son2 = parseFloat(prompt(''Ikkinchi sonni kiriting:''));
const amal = prompt(''Amalni tanlang (+, -, *, /):'');

// Kiritilgan ma''lumotlarni tekshirish
if (isNaN(son1) || isNaN(son2)) {
  console.log(''Xato: Son kiriting!'');
}
```

**Bosqich 2 — hisoblash mantig''i:**
```js
function hisoblash(a, amal, b) {
  if (amal === ''+'') return a + b;
  if (amal === ''-'') return a - b;
  if (amal === ''*'') return a * b;
  if (amal === ''/'') {
    if (b === 0) return ''Xato: Nolga bo\''lib bo\''lmaydi!'';
    return a / b;
  }
  return ''Noma\''lum amal!'';
}

const natija = hisoblash(son1, amal, son2);
console.log(`${son1} ${amal} ${son2} = ${natija}`);
```

**Bosqich 3 — qayta hisoblash tsikli:**
```js
let davom = true;

while (davom) {
  const son1 = parseFloat(prompt(''1-son:''));
  const son2 = parseFloat(prompt(''2-son:''));
  const amal = prompt(''Amal (+/-/*/÷):'');
  
  if (!isNaN(son1) && !isNaN(son2)) {
    const natija = hisoblash(son1, amal, son2);
    alert(`Natija: ${son1} ${amal} ${son2} = ${natija}`);
  } else {
    alert(''Iltimos, son kiriting!'');
  }
  
  const qayta = confirm(''Yana hisoblaysizmi?'');
  davom = qayta;
}

console.log(''Kalkulyatordan chiqdingiz.'');
```

**Kengaytirish g''oyalari:**
- Tarix: oxirgi 5 ta hisoblashni massivda saqlash
- Foiz hisoblash (%) amalini qo''shish
- Kvadrat ildiz (Math.sqrt) qo''shish

**Nimalarni o''rgandingiz:**
Bu loyihada `let/const`, `parseFloat`, `if/else`, `while` tsikli, funksiya va `console.log` dan foydalandingiz.',null,'article','[{"question":"parseFloat() funksiyasi nima qiladi?","options":["Sonni manfiyga aylantiradi","Matnni o''nlik kasrli songa aylantiradi","Sonni matnga aylantiradi","Sonni butun qismini oladi"],"correct":1,"explanation":"parseFloat(''3.14'') → 3.14. Kiritilgan matnni o''nlik songa aylantiradi. NaN (Not a Number) qaytarsa — son emas."},{"question":"isNaN() nima tekshiradi?","options":["Son manfiy ekanini","Qiymat son emasligini (Not a Number)","Massiv ekanini","Null ekanini"],"correct":1,"explanation":"isNaN(x) — x son emasligini tekshiradi. isNaN(''salom'') → true, isNaN(42) → false. Kiritilgan qiymatlarni tekshirishda foydali."},{"question":"Nolga bo''lishda nima bo''ladi?","options":["0 qaytadi","Infinity yoki -Infinity qaytadi","Dastur to''xtaydi","Xato matniga o''xshash son qaytadi"],"correct":1,"explanation":"10 / 0 → Infinity, -10 / 0 → -Infinity. Shuning uchun bo''lishdan oldin maxraj 0 emasligini tekshirish kerak."},{"question":"while(davom) tsiklida ''davom'' qachon false bo''lishi kerak?","options":["Hech qachon","Tsiklni tugatmoqchi bo''lganda","Har doim","Faqat xato bo''lganda"],"correct":1,"explanation":"while(shart) — shart true bo''lsa ishlaydi. Shart false bo''lsa tsikl to''xtaydi. Cheksiz tsikldan qochish uchun shart albatta false bo''lishi kerak."}]'::jsonb,4);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-4','javascript','Funksiyalar','Function turlari, parametrlar, qaytarish qiymati','18 daqiqa','Funksiya — bir necha marta ishlatiladigan kod bloki. Funksiyalar yordamida kodni qismlarga bo''lish va qayta ishlatish mumkin.

**Funksiya e''lon qilish usullari:**
```js
// 1. Function declaration (ko''tarish — hoisting bor)
function salomlash(ism) {
  return ''Salom, '' + ism + ''!'';
}

// 2. Function expression
const kvadrat = function(x) {
  return x * x;
};

// 3. Arrow function (eng zamonaviy va qisqa)
const kub = (x) => x * x * x;
const qo''sh = (a, b) => a + b;

console.log(salomlash(''Nilufar''));  // ''Salom, Nilufar!''
console.log(kvadrat(5));            // 25
console.log(kub(3));                // 27
```

**Parametrlar va default qiymatlar:**
```js
// Default parametr — qiymat berilmasa ishlatiladi
function chegirma(narx, foiz = 10) {
  return narx - (narx * foiz / 100);
}

console.log(chegirma(100));      // 90 (10% chegirma)
console.log(chegirma(100, 25));  // 75 (25% chegirma)

// Rest parametr — cheksiz argument qabul qilish
const jami = (...sonlar) => {
  let yigindi = 0;
  for (const son of sonlar) {
    yigindi += son;
  }
  return yigindi;
};

console.log(jami(1, 2, 3));        // 6
console.log(jami(10, 20, 30, 40)); // 100
```

**Funksiya ichida funksiya (closure):**
```js
function hisoblagich() {
  let son = 0;  // tashqaridan ko''rinmaydi
  return {
    oshir: () => ++son,
    kamayt: () => --son,
    qiymat: () => son,
  };
}

const h = hisoblagich();
console.log(h.oshir());   // 1
console.log(h.oshir());   // 2
console.log(h.kamayt());  // 1
console.log(h.qiymat());  // 1
```

**Higher-order funksiyalar (funksiyani argument sifatida uzatish):**
```js
const sonlar = [1, 2, 3, 4, 5];

// forEach — har bir element uchun amal bajarish
sonlar.forEach(n => console.log(n * 2));

// map — yangi massiv yaratish
const ikkilangan = sonlar.map(n => n * 2);
console.log(ikkilangan);  // [2, 4, 6, 8, 10]

// filter — shartga moslarini tanlash
const juftlar = sonlar.filter(n => n % 2 === 0);
console.log(juftlar);  // [2, 4]
```',null,'article','[{"question":"Arrow function sintaksisi qanday?","options":["function (x) => x * 2","(x) => x * 2","x -> x * 2","fn(x) = x * 2"],"correct":1,"explanation":"Arrow function: (parametrlar) => ifoda. Agar bitta ifoda bo''lsa, {} va return shart emas. (x) => x * 2 — x ni 2 ga ko''paytiradi."},{"question":"return kalit so''zi nima qiladi?","options":["Funksiyani chaqiradi","Funksiyadan qiymat qaytaradi va funksiyani to''xtatadi","Qiymatni saqlaydi","Funksiyani takrorlaydi"],"correct":1,"explanation":"return — funksiya natijasini qaytaradi va funksiyani shu yerda to''xtatadi. return dan keyin kod ishlamaydi."},{"question":"Default parametr qanday yoziladi?","options":["function salom(ism = ''Mehmon'')","function salom(ism || ''Mehmon'')","function salom(ism: ''Mehmon'')","function salom(ism ?? ''Mehmon'')"],"correct":0,"explanation":"Default: function foo(param = standartQiymat). Argument berilmasa yoki undefined bo''lsa standart qiymat ishlatiladi."},{"question":"Rest parametr (...args) nima qiladi?","options":["Bitta argument qabul qiladi","Noma''lum miqdordagi argumentlarni massiv sifatida yig''adi","Argumentni tarqatadi","Funksiyani nusxalaydi"],"correct":1,"explanation":"...args — rest (qolgan) parametrlar. Nechta argument berilsa ham massiv sifatida yig''adi. function sum(...nums) { ... }"}]'::jsonb,5);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-5','javascript','Massivlar (Array)','Massiv metodlari: map, filter, reduce, sort','20 daqiqa','Massiv — tartibli elementlar to''plami. JavaScript da massivlar juda kuchli metodlarga ega.

**Massiv yaratish va asosiy amallar:**
```js
const mevalar = [''olma'', ''nok'', ''uzum'', ''shaftoli''];

console.log(mevalar[0]);         // ''olma'' (indeks 0 dan boshlanadi)
console.log(mevalar.length);     // 4
console.log(mevalar[mevalar.length - 1]);  // ''shaftoli'' (oxirgi)

// Qo''shish
mevalar.push(''gilos'');           // oxiriga qo''shish
mevalar.unshift(''anor'');         // boshiga qo''shish
console.log(mevalar);  // [''anor'', ''olma'', ''nok'', ''uzum'', ''shaftoli'', ''gilos'']

// O''chirish
mevalar.pop();    // oxirgisini o''chirish
mevalar.shift();  // birinchisini o''chirish

// Qidiruv
console.log(mevalar.indexOf(''nok''));     // 1
console.log(mevalar.includes(''uzum''));   // true
```

**map — har elementni o''zgartirib yangi massiv:**
```js
const narxlar = [10000, 25000, 8000, 50000];
const chegirmali = narxlar.map(narx => narx * 0.8);  // 20% chegirma
console.log(chegirmali);  // [8000, 20000, 6400, 40000]

const talabalar = [
  { ism: ''Ali'', ball: 85 },
  { ism: ''Vali'', ball: 92 },
  { ism: ''Guli'', ball: 78 },
];
const ismlar = talabalar.map(t => t.ism);
console.log(ismlar);  // [''Ali'', ''Vali'', ''Guli'']
```

**filter — shartga moslarini tanlash:**
```js
const balllar = [45, 82, 67, 91, 55, 88, 73];
const a''lo = balllar.filter(b => b >= 80);
console.log(a''lo);  // [82, 91, 88]

const mahsulotlar = [
  { nomi: ''Kitob'', mavjud: true },
  { nomi: ''Daftar'', mavjud: false },
  { nomi: ''Ruchka'', mavjud: true },
];
const bor = mahsulotlar.filter(m => m.mavjud);
console.log(bor.map(m => m.nomi));  // [''Kitob'', ''Ruchka'']
```

**reduce — massivni bitta qiymatga kamaytirish:**
```js
const sonlar = [1, 2, 3, 4, 5];
const yigindi = sonlar.reduce((jam, son) => jam + son, 0);
console.log(yigindi);  // 15

const narxlar2 = [500, 1200, 800, 2400];
const umumiy = narxlar2.reduce((a, b) => a + b, 0);
console.log(umumiy + '' so\''m'');  // ''4900 so\''m''
```

**sort — tartiblash:**
```js
const ismlar2 = [''Zafar'', ''Ali'', ''Munira'', ''Bobur''];
ismlar2.sort();  // alifbo tartibida
console.log(ismlar2);  // [''Ali'', ''Bobur'', ''Munira'', ''Zafar'']

const sonlar2 = [10, 2, 30, 5, 20];
sonlar2.sort((a, b) => a - b);  // o''sish tartibida
console.log(sonlar2);  // [2, 5, 10, 20, 30]

sonlar2.sort((a, b) => b - a);  // kamayish tartibida
console.log(sonlar2);  // [30, 20, 10, 5, 2]
```

**find va findIndex:**
```js
const talabalar2 = [
  { id: 1, ism: ''Kamola'', ball: 95 },
  { id: 2, ism: ''Sardor'', ball: 72 },
  { id: 3, ism: ''Dilnoza'', ball: 88 },
];

const topildi = talabalar2.find(t => t.id === 2);
console.log(topildi);  // { id: 2, ism: ''Sardor'', ball: 72 }

const indeks = talabalar2.findIndex(t => t.ball > 90);
console.log(indeks);  // 0
```',null,'article','[{"question":"Massivning oxiriga element qo''shish uchun qaysi metod ishlatiladi?","options":["push()","pop()","shift()","unshift()"],"correct":0,"explanation":"push() — massiv oxiriga element qo''shadi. pop() — oxirgisini o''chiradi, shift() — birinchisini o''chiradi, unshift() — boshiga qo''shadi."},{"question":"map() metodining vazifasi nima?","options":["Massivni filtrlash","Har bir elementni o''zgartirib yangi massiv qaytarish","Massiv elementlarini yig''indisi","Massivni saralash"],"correct":1,"explanation":"map() — har bir elementga funksiya qo''llab, yangi massiv qaytaradi. Asl massiv o''zgarmaydi."},{"question":"filter() metodi nima qaytaradi?","options":["Bitta element","Shartga mos elementlardan yangi massiv","Boolean qiymat","Element indeksi"],"correct":1,"explanation":"filter() — shartga mos elementlardan iborat yangi massiv qaytaradi. Mos kelmaganlar o''tkazib yuboriladi."},{"question":"[1,2,3,4,5].reduce((a, b) => a + b, 0) natijasi nima?","options":["[1,2,3,4,5]","5","15","1"],"correct":2,"explanation":"reduce() — massivni bitta qiymatga kamaytiradi. Bu misol barcha sonlarni qo''shadi: 1+2+3+4+5 = 15."}]'::jsonb,6);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-6','javascript','Ob''ektlar (Object)','Ob''ekt yaratish, destructuring, spread, metodlar','17 daqiqa','Ob''ekt — kalit-qiymat juftliklaridan tashkil topgan ma''lumot tuzilmasi. Haqiqiy dunyo narsalarini ifodalashda ishlatiladi.

**Ob''ekt yaratish:**
```js
const talaba = {
  ism: ''Sherzod'',
  familiya: ''Toshmatov'',
  yosh: 17,
  sinf: ''10-A'',
  fanlar: [''Informatika'', ''Matematika'', ''Fizika''],
  manzil: {
    shahar: ''Toshkent'',
    tuman: ''Yunusobod'',
  },
};

// Xossalarga murojaat
console.log(talaba.ism);           // ''Sherzod''
console.log(talaba[''familiya'']);   // ''Toshmatov'' (kvadrat qavs)
console.log(talaba.manzil.shahar); // ''Toshkent''
console.log(talaba.fanlar[0]);     // ''Informatika''
```

**Xossalarni qo''shish va o''zgartirish:**
```js
const kurs = { nomi: ''HTML'', daraja: ''Boshlang\''ich'' };

kurs.muallif = ''Web Academy'';  // yangi xossa qo''shish
kurs.daraja = ''O\''rta'';        // mavjud xossani o''zgartirish
delete kurs.muallif;           // xossani o''chirish

console.log(kurs);  // { nomi: ''HTML'', daraja: ''O\''rta'' }
```

**Ob''ekt metodlari (funksiya sifatida):**
```js
const to''rtburchak = {
  eni: 5,
  bo''yi: 8,
  yuza: function() {
    return this.eni * this.bo''yi;
  },
  perimetr() {  // qisqa yozuv
    return 2 * (this.eni + this.bo''yi);
  },
};

console.log(to''rtburchak.yuza());      // 40
console.log(to''rtburchak.perimetr()); // 26
```

**Destructuring — xossalarni ajratib olish:**
```js
const foydalanuvchi = {
  ism: ''Malika'',
  email: ''malika@example.com'',
  yosh: 22,
  shahar: ''Samarqand'',
};

// Eski usul
const ism1 = foydalanuvchi.ism;
const email1 = foydalanuvchi.email;

// Destructuring (zamonaviy)
const { ism, email, yosh, shahar } = foydalanuvchi;
console.log(ism);    // ''Malika''
console.log(shahar); // ''Samarqand''

// Nom o''zgartirib olish
const { ism: fullName, yosh: age } = foydalanuvchi;
console.log(fullName); // ''Malika''
```

**Spread operator — ob''ektni nusxalash va birlashtirish:**
```js
const asosiy = { ism: ''Javlon'', yosh: 19 };
const qoshimcha = { shahar: ''Namangan'', kasb: ''Dasturchi'' };

// Birlashtirish
const toʻliq = { ...asosiy, ...qoshimcha };
console.log(toʻliq);
// { ism: ''Javlon'', yosh: 19, shahar: ''Namangan'', kasb: ''Dasturchi'' }

// Nusxalash + o''zgartirish (asl ob''ekt o''zgarmaydi)
const yangilangan = { ...asosiy, yosh: 20 };
console.log(yangilangan);  // { ism: ''Javlon'', yosh: 20 }
console.log(asosiy.yosh);  // 19 (o''zgarmadi)
```

**Object.keys, values, entries:**
```js
const bahollar = { Ali: 85, Vali: 92, Guli: 78 };

console.log(Object.keys(bahollar));    // [''Ali'', ''Vali'', ''Guli'']
console.log(Object.values(bahollar)); // [85, 92, 78]
console.log(Object.entries(bahollar));
// [[''Ali'', 85], [''Vali'', 92], [''Guli'', 78]]

// O''rtacha ball hisobi
const balllar = Object.values(bahollar);
const o''rtacha = balllar.reduce((a, b) => a + b) / balllar.length;
console.log(o''rtacha);  // 85
```',null,'article','[{"question":"JavaScript ob''ekti qanday yaratiladi?","options":["[ism: ''Ali'', yosh: 20]","{ ism: ''Ali'', yosh: 20 }","(ism: ''Ali'', yosh: 20)","<ism>Ali</ism>"],"correct":1,"explanation":"Ob''ekt literal sintaksisi: { kalit: qiymat, ... }. Har bir xususiyat kalit-qiymat juftligi."},{"question":"Ob''ekt xususiyatiga nuqta orqali kirish:","options":["talaba[ism]","talaba->ism","talaba.ism","talaba::ism"],"correct":2,"explanation":"Dot notation: ob''ekt.xususiyat. Qulay va qisqa. Bracket notation: ob''ekt[''xususiyat''] — dinamik kalitlar uchun."},{"question":"Destructuring nima qiladi?","options":["Ob''ektni o''chiradi","Ob''ekt yoki massiv qiymatlarini alohida o''zgaruvchilarga chiqaradi","Ob''ektni nusxalaydi","Ob''ektni tarqatadi"],"correct":1,"explanation":"const { ism, yosh } = talaba — ob''ektdan ism va yosh ni chiqaradi. Kodingizni qisqartiradi."},{"question":"Object.keys(ob''ekt) nima qaytaradi?","options":["Qiymatlar massivi","Kalitlar massivi","Kalit-qiymat juftliklari","Ob''ekt uzunligi"],"correct":1,"explanation":"Object.keys() — ob''ektning barcha kalitlari massivini qaytaradi. Object.values() — qiymatlar, Object.entries() — [kalit, qiymat] juftlari."}]'::jsonb,7);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-p2','javascript','Loyiha 2: Talabalar baho daftari','Funksiyalar, massivlar va ob''ektlar bilan talabalar baholash tizimi','35 daqiqa','4-5-6 darslarda o''rgangan funksiyalar, massivlar va ob''ektlarni birlashtiring!

**Loyiha maqsadi:**
Talabalar ro''yxatini boshqarish — qo''shish, balllarini hisoblash, eng yaxshi talabani topish.

**Ma''lumot tuzilmasi:**
```js
// Har bir talaba — ob''ekt
const talaba = {
  id: 1,
  ism: ''Kamola'',
  familiya: ''Ergasheva'',
  balllar: [85, 92, 78, 95, 88],
};

// Barcha talabalar — massiv
let talabalar = [];
```

**Bosqich 1 — talaba qo''shish funksiyasi:**
```js
let keyingiId = 1;

function talabaQo''sh(ism, familiya) {
  const yangi = {
    id: keyingiId++,
    ism: ism,
    familiya: familiya,
    balllar: [],
  };
  talabalar.push(yangi);
  console.log(`${ism} ${familiya} ro''yxatga qo''shildi (ID: ${yangi.id})`);
  return yangi;
}
```

**Bosqich 2 — ball qo''shish va hisoblash:**
```js
function ballQo''sh(id, ball) {
  const talaba = talabalar.find(t => t.id === id);
  if (!talaba) {
    console.log(''Talaba topilmadi!'');
    return;
  }
  if (ball < 0 || ball > 100) {
    console.log(''Ball 0-100 orasida bo\''lishi kerak!'');
    return;
  }
  talaba.balllar.push(ball);
}

function o''rtacha(balllar) {
  if (balllar.length === 0) return 0;
  const jami = balllar.reduce((a, b) => a + b, 0);
  return Math.round(jami / balllar.length);
}

function baho(o''rtBall) {
  if (o''rtBall >= 90) return "A''lo (5)";
  if (o''rtBall >= 75) return ''Yaxshi (4)'';
  if (o''rtBall >= 55) return ''Qoniqarli (3)'';
  return ''Qoniqarsiz (2)'';
}
```

**Bosqich 3 — hisobot chiqarish:**
```js
function hisobot() {
  console.log(''\n=== TALABALAR BAHOLAR DAFTARI ==='');
  
  const natijalari = talabalar.map(t => ({
    ...t,
    o''rtacha: o''rtacha(t.balllar),
    baho: baho(o''rtacha(t.balllar)),
  }));
  
  // O''rtacha ball bo''yicha saralash
  natijalari.sort((a, b) => b.o''rtacha - a.o''rtacha);
  
  natijalari.forEach((t, i) => {
    console.log(`${i+1}. ${t.ism} ${t.familiya}`);
    console.log(`   O''rtacha: ${t.o''rtacha} — ${t.baho}`);
    console.log(`   Balllar: [${t.balllar.join('', '')}]`);
  });
  
  const engYaxshi = natijalari[0];
  console.log(`\nEng yaxshi talaba: ${engYaxshi.ism} (${engYaxshi.o''rtacha} ball)`);
}

// Sinab ko''rish
const k = talabaQo''sh(''Kamola'', ''Ergasheva'');
const s = talabaQo''sh(''Sardor'', ''Toshmatov'');
const d = talabaQo''sh(''Dilnoza'', ''Yusupova'');

[85,92,78,95,88].forEach(b => ballQo''sh(k.id, b));
[72,68,75,80,71].forEach(b => ballQo''sh(s.id, b));
[90,95,88,92,97].forEach(b => ballQo''sh(d.id, b));

hisobot();
```

**Kengaytirish g''oyalari:**
- Fan bo''yicha filtrlash
- O''qituvchi interfeysi (talabani o''chirish)
- Eng past ball olganni topish',null,'article','[{"question":"find() metodi nima qaytaradi?","options":["Barcha mos elementlarni","Birinchi mos elementni yoki undefined","Elementning indeksini","Boolean qiymat"],"correct":1,"explanation":"find(fn) — shartga mos birinchi elementni qaytaradi. Topilmasa undefined qaytadi. findIndex() — indeksni qaytaradi."},{"question":"sort((a,b) => b-a) nima qiladi?","options":["O''sish tartibida saralaydi","Kamayish tartibida saralaydi","Alifbo tartibida saralaydi","Tasodifiy saralaydi"],"correct":1,"explanation":"sort((a,b) => b-a) — kamayish tartibida (kattadan kichikka). sort((a,b) => a-b) — o''sish tartibida (kichikdan kattaga)."},{"question":"reduce() funksiyasi qanday ishlaydi?","options":["Massivni filtrlaydi","Massivni bitta qiymatga kamaytiradi","Yangi massiv qaytaradi","Elementlarni o''chiradi"],"correct":1,"explanation":"reduce((jam, son) => jam + son, 0) — boshlang''ich 0 dan boshlaydi, har elementni qo''shadi. Yig''indi, ko''paytma, ob''ekt qurish uchun."},{"question":"spread operator {...talaba} nima qiladi?","options":["Ob''ektni o''chiradi","Ob''ektning barcha xossalarini yangi ob''ektga nusxalaydi","Ob''ektni massivga aylantiradi","Ob''ektni saqlaydi"],"correct":1,"explanation":"{...ob''ekt} — spread: ob''ektning barcha kalit-qiymatlarini yangi ob''ektga ko''chiradi. Nusxa yaratish va yangi xossalar qo''shish uchun."}]'::jsonb,8);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-7','javascript','DOM bilan ishlash','Elementlarni topish, o''zgartirish, hodisalar','22 daqiqa','DOM (Document Object Model) — HTML sahifaning JavaScript orqali o''zgartirish mumkin bo''lgan ko''rinishi. JavaScript sahifadagi istalgan elementni topishi, o''zgartirishi, qo''shishi yoki o''chirishi mumkin.

**Elementlarni topish:**
```js
// Bitta element topish
const sarlavha = document.querySelector(''h1'');
const tugma = document.querySelector(''#yuborish-tugmasi'');
const xato = document.querySelector(''.xato-xabar'');

// Bir nechta element topish
const barcha_li = document.querySelectorAll(''li'');
const kartochkalar = document.querySelectorAll(''.kurs-kartochkasi'');

console.log(barcha_li.length);  // elementlar soni
```

**Kontent va atributlarni o''zgartirish:**
```js
const sarlavha = document.querySelector(''#asosiy-sarlavha'');

// Matn o''zgartirish
sarlavha.textContent = ''Yangi sarlavha'';  // faqat matn
sarlavha.innerHTML = ''<span>Rangli</span> sarlavha'';  // HTML bilan

// Atribut o''zgartirish
const rasm = document.querySelector(''img'');
rasm.src = ''yangi-rasm.jpg'';
rasm.alt = ''Yangi rasm tavsifi'';

// Stil o''zgartirish
sarlavha.style.color = ''#00BCD4'';
sarlavha.style.fontSize = ''32px'';
sarlavha.style.fontWeight = ''bold'';
```

**Class bilan ishlash:**
```js
const element = document.querySelector(''.kartochka'');

element.classList.add(''faol'');        // class qo''shish
element.classList.remove(''yashirin''); // class o''chirish
element.classList.toggle(''tanlangan''); // bor bo''lsa o''chirish, yo''q bo''lsa qo''shish
console.log(element.classList.contains(''faol'')); // true/false
```

**Hodisalar (Events):**
```js
const tugma = document.querySelector(''#tugma'');

// Click hodisasi
tugma.addEventListener(''click'', function() {
  alert(''Tugma bosildi!'');
});

// Arrow function bilan
tugma.addEventListener(''click'', () => {
  tugma.textContent = ''Bosildi!'';
  tugma.style.backgroundColor = ''#22C55E'';
});

// Klaviatura hodisasi
document.addEventListener(''keydown'', (e) => {
  console.log(''Bosilgan tugma:'', e.key);
  if (e.key === ''Enter'') {
    console.log(''Enter bosildi!'');
  }
});

// Forma yuborish
const forma = document.querySelector(''form'');
forma.addEventListener(''submit'', (e) => {
  e.preventDefault();  // sahifa yangilanishini to''xtatish
  const qiymat = document.querySelector(''#input'').value;
  console.log(''Yuborildi:'', qiymat);
});
```

**Yangi element yaratish va qo''shish:**
```js
// Yangi element yaratish
const yangi_li = document.createElement(''li'');
yangi_li.textContent = ''Yangi vazifa'';
yangi_li.className = ''vazifa-elementi'';

// Ro''yxatga qo''shish
const royxat = document.querySelector(''#vazifalar'');
royxat.appendChild(yangi_li);   // oxiriga
royxat.prepend(yangi_li);       // boshiga

// Elementni o''chirish
yangi_li.remove();
```

**Amaliy misol — to''g''ri/noto''g''ri javob tekshirish:**
```js
const javobInput = document.querySelector(''#javob'');
const tekshirBtn = document.querySelector(''#tekshir'');
const natija = document.querySelector(''#natija'');

tekshirBtn.addEventListener(''click'', () => {
  const javob = javobInput.value.trim();
  if (javob.toLowerCase() === ''javascript'') {
    natija.textContent = ''To\''g\''ri!'';
    natija.style.color = ''#22C55E'';
  } else {
    natija.textContent = ''Noto\''g\''ri, qayta urinib ko\''ring.'';
    natija.style.color = ''#EF4444'';
  }
});
```',null,'article','[{"question":"document.getElementById(''btn'') nima qaytaradi?","options":["Satr","id=''btn'' bo''lgan HTML elementni","Barcha btn larni","null"],"correct":1,"explanation":"getElementById — sahifadagi id ga mos bitta elementni qaytaradi. Topilmasa null qaytaradi."},{"question":"element.addEventListener(''click'', fn) nima qiladi?","options":["Elementni o''chiradi","Element bosilganda fn funksiyasini chaqirishni sozlaydi","Elementga klass qo''shadi","Elementni yangilaydi"],"correct":1,"explanation":"addEventListener — hodisa (event) tinglovchisi. Birinchi arg: event nomi, ikkinchi: ishlaydigan funksiya."},{"question":"innerHTML va textContent farqi nima?","options":["Hech qanday farq yo''q","innerHTML HTML teglari bilan birga o''rnatadi, textContent faqat matn","textContent HTML qabul qiladi","innerHTML sekinroq emas"],"correct":1,"explanation":"innerHTML — HTML kodi bilan birga qiymat o''rnatadi (<b>matn</b> = qalin). textContent — faqat matn, teglar oddiy matn sifatida. XSS uchun textContent xavfsizroq."},{"question":"document.querySelector(''.card'') nima qaytaradi?","options":["Barcha .card larni","Birinchi topilgan .card elementni","CSS qoidasini","null"],"correct":1,"explanation":"querySelector — CSS selektori asosida birinchi mos elementni qaytaradi. querySelectorAll() — barcha mos elementlarni NodeList sifatida qaytaradi."}]'::jsonb,9);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-8','javascript','Promises va Async/Await','Asinxron dasturlash, Promise zanjiri, async/await','20 daqiqa','JavaScript bir xatboshilik (single-threaded) dasturlash tili. Shuning uchun uzoq vaqt talab etadigan amallar (server so''rovlari, fayllarni o''qish) asinxron bajariladi — ya''ni dastur kutmaydi, boshqa ishini davom ettiradi.

**Asinxron muammoni tushunish:**
```js
console.log(''1. Boshlandi'');

setTimeout(() => {
  console.log(''2. 2 soniyadan keyin'');
}, 2000);

console.log(''3. Tugadi'');

// Chiqadi: ''1. Boshlandi'', ''3. Tugadi'', ''2. 2 soniyadan keyin''
// setTimeout kutmaydi, davom etadi!
```

**Promise — kelajakdagi qiymat va''dasi:**
```js
// Promise yaratish
const ma''lumot_yuklash = new Promise((resolve, reject) => {
  setTimeout(() => {
    const muvaffaqiyatli = true;
    if (muvaffaqiyatli) {
      resolve({ ism: ''Ali'', ball: 95 });  // muvaffaqiyat
    } else {
      reject(new Error(''Yuklab bo\''lmadi''));  // xato
    }
  }, 1000);
});

// Promise dan foydalanish
ma''lumot_yuklash
  .then(data => {
    console.log(''Muvaffaqiyat:'', data);
    return data.ism;  // keyingi .then ga uzatish
  })
  .then(ism => {
    console.log(''Ism:'', ism);
  })
  .catch(xato => {
    console.error(''Xato:'', xato.message);
  })
  .finally(() => {
    console.log(''Har holda ishlaydi'');
  });
```

**async/await — Promise ni chiroyli o''qish:**
```js
// async funksiya har doim Promise qaytaradi
async function talabaniYukla(id) {
  try {
    // await — Promise tugaguncha kutish
    const javob = await fetch(`/api/talabalar/${id}`);
    
    if (!javob.ok) {
      throw new Error(`HTTP xato: ${javob.status}`);
    }
    
    const talaba = await javob.json();
    console.log(''Talaba:'', talaba);
    return talaba;
  } catch (xato) {
    console.error(''Xato yuz berdi:'', xato.message);
  }
}

// Chaqirish
talabaniYukla(1);
```

**Promise.all — bir vaqtda bir nechta so''rov:**
```js
async function barchasiniYukla() {
  // Uchala so''rov parallel bajariladi (tezroq!)
  const [kurslar, talabalar, o''qituvchilar] = await Promise.all([
    fetch(''/api/kurslar'').then(r => r.json()),
    fetch(''/api/talabalar'').then(r => r.json()),
    fetch(''/api/o\''qituvchilar'').then(r => r.json()),
  ]);
  
  console.log(kurslar, talabalar, o''qituvchilar);
}
```

**setTimeout bilan amaliy misol:**
```js
const kechiktir = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function animatsiya() {
  console.log(''Boshlandi...'');
  await kechiktir(1000);
  console.log(''1 soniya o\''tdi'');
  await kechiktir(2000);
  console.log(''Yana 2 soniya o\''tdi'');
  console.log(''Tugadi!'');
}

animatsiya();
```',null,'article','[{"question":"Promise ning nechta holati bor?","options":["2 ta (fulfilled, rejected)","3 ta (pending, fulfilled, rejected)","4 ta","1 ta"],"correct":1,"explanation":"Promise: pending (kutmoqda), fulfilled (bajarildi), rejected (rad etildi). Yaratilganda pending, asinxron amal tugagach fulfilled yoki rejected."},{"question":"async funksiya nima qaytaradi?","options":["Oddiy qiymat","Har doim Promise qaytaradi","undefined","null"],"correct":1,"explanation":"async — funksiyani Promise ga o''raydi. return 42 → Promise.resolve(42). await orqali ichkarida kutish mumkin."},{"question":"await kalit so''zi faqat qayerda ishlatiladi?","options":["Istalgan joyda","async funksiya ichida","try/catch ichida","Faqat .then() ichida"],"correct":1,"explanation":"await — faqat async funksiya ichida ishlatiladi. Promise ni kutadi va natijasini qaytaradi. Kod davom etmaydi."},{"question":".then() va .catch() zanjiriga nima deyiladi?","options":["Async chain","Promise chaining","Callback hell","Method stacking"],"correct":1,"explanation":"Promise chaining — .then() dan .then() ga natija uzatiladi. Xatolar .catch() da tutiladi. async/await bu jarayonni osonlashtiradi."}]'::jsonb,10);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-9','javascript','Fetch API va HTTP so''rovlar','GET, POST, JSON bilan ishlash, xatolarni ushlash','18 daqiqa','Fetch API — serverga so''rov yuborish va javob olish uchun zamonaviy JavaScript vositasi. Bugun siz ko''radigan har bir dinamik veb-sayt Fetch API yoki unga o''xshash texnologiyadan foydalanadi.

**GET so''rovi — ma''lumot olish:**
```js
async function kurslarniOlish() {
  try {
    const javob = await fetch(''https://jsonplaceholder.typicode.com/posts'');
    
    // Javob muvaffaqiyatli ekanligini tekshirish
    if (!javob.ok) {
      throw new Error(`Xato: ${javob.status}`);
    }
    
    const ma''lumotlar = await javob.json();
    console.log(''Jami:'', ma''lumotlar.length, ''ta yozuv'');
    console.log(''Birinchisi:'', ma''lumotlar[0]);
    return ma''lumotlar;
  } catch (xato) {
    console.error(''So\''rov xatosi:'', xato.message);
  }
}

kurslarniOlish();
```

**POST so''rovi — ma''lumot yuborish:**
```js
async function yangiTalabaQo''shish(talaba) {
  const javob = await fetch(''/api/talabalar'', {
    method: ''POST'',
    headers: {
      ''Content-Type'': ''application/json'',  // JSON yuborayotganimizni bildiramiz
    },
    body: JSON.stringify(talaba),  // JavaScript ob''ektini JSON ga aylantirish
  });
  
  const natija = await javob.json();
  console.log(''Qo\''shildi:'', natija);
  return natija;
}

yangiTalabaQo''shish({
  ism: ''Barno'',
  yosh: 16,
  sinf: ''10-B'',
});
```

**PUT va DELETE so''rovlari:**
```js
// PUT — to''liq yangilash
async function talabaniyYangilash(id, yangiMa''lumot) {
  const javob = await fetch(`/api/talabalar/${id}`, {
    method: ''PUT'',
    headers: { ''Content-Type'': ''application/json'' },
    body: JSON.stringify(yangiMa''lumot),
  });
  return await javob.json();
}

// DELETE — o''chirish
async function talabaniyO''chirish(id) {
  await fetch(`/api/talabalar/${id}`, {
    method: ''DELETE'',
  });
  console.log(`${id} raqamli talaba o\''chirildi`);
}
```

**JSON — ma''lumot almashinuvi formati:**
```js
// JavaScript ob''ekt → JSON matn
const ob''ekt = { ism: ''Jasur'', yosh: 18, faol: true };
const json = JSON.stringify(ob''ekt);
console.log(json);
// ''{"ism":"Jasur","yosh":18,"faol":true}''

// JSON matn → JavaScript ob''ekt
const jsonMatn = ''{"narx":99.9,"nomi":"Kurs"}'';
const ob''ekt2 = JSON.parse(jsonMatn);
console.log(ob''ekt2.nomi);  // ''Kurs''

// Chiroyli chiqarish
console.log(JSON.stringify(ob''ekt, null, 2));
```

**Amaliy misol — qidiruv:**
```js
async function foydalanuvchiniQidirish(qidiruv) {
  const javob = await fetch(
    `https://api.example.com/users?q=${encodeURIComponent(qidiruv)}`
  );
  const natijalar = await javob.json();
  return natijalar;
}

// Kiritish oxiridan 500ms so''ng qidirish (debounce)
let taymer;
document.querySelector(''#qidiruv'').addEventListener(''input'', (e) => {
  clearTimeout(taymer);
  taymer = setTimeout(async () => {
    const natijalar = await foydalanuvchiniQidirish(e.target.value);
    console.log(natijalar);
  }, 500);
});
```',null,'article','[{"question":"fetch(''/api/data'') nima qaytaradi?","options":["Ma''lumotni bevosita","Promise<Response>","JSON ob''ektini","null"],"correct":1,"explanation":"fetch() — Promise qaytaradi. .then(r => r.json()) bilan JSON ga aylantirish kerak, yoki async/await bilan await qilish."},{"question":"response.json() nima qiladi?","options":["JSONni saqlaydi","JSON matnini JavaScript ob''ektiga aylantiradi (Promise)","Response ni o''chiradi","Serverga jo''natadi"],"correct":1,"explanation":"response.json() — HTTP javobining tanasini (body) JavaScript ob''ektiga aylantiradi. Asinxron, await bilan ishlatiladi."},{"question":"POST so''rovida nima farq qiladi?","options":["URL farqli bo''ladi","method, headers va body qo''shiladi","Faqat tezroq ishlaydi","Faqat serverda ishlaydi"],"correct":1,"explanation":"POST: fetch(url, { method: ''POST'', headers: {''Content-Type'': ''application/json''}, body: JSON.stringify(data) }). GET dan farqi — body orqali ma''lumot yuboradi."},{"question":"JSON.stringify({ism: ''Ali''}) nima qaytaradi?","options":["Ob''ektni","\"{\"ism\":\"Ali\"}\"","[''ism'', ''Ali'']","null"],"correct":1,"explanation":"JSON.stringify() — JavaScript ob''ektini JSON matn formatiga aylantiradi. Server ga yuborishdan yoki saqlashdan oldin ishlatiladi."}]'::jsonb,11);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-p3','javascript','Loyiha 3: Ob-havo ilovasi','DOM, Fetch API va async/await bilan interaktiv ob-havo ilovasi','40 daqiqa','7-8-9 darslardagi DOM, async/await va Fetch API bilimlarini birlashtirib, ob-havo ilovasi yarating!

**Loyiha maqsadi:**
Foydalanuvchi shahar nomini kiritadi, dastur ob-havo ma''lumotlarini ko''rsatadi.

**HTML tuzilmasi:**
```html
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Ob-havo</title>
  <style>
    body { font-family: Arial; max-width: 400px; margin: 40px auto; padding: 20px; }
    .karta { background: #e3f2fd; border-radius: 12px; padding: 20px; margin-top: 16px; }
    input, button { padding: 10px; font-size: 16px; }
    button { background: #0288d1; color: white; border: none; border-radius: 8px; cursor: pointer; }
    .xato { color: #e53935; }
    .yuklanmoqda { color: #757575; }
  </style>
</head>
<body>
  <h1>Ob-havo</h1>
  <input id="shahar" placeholder="Shahar nomini kiriting" />
  <button id="qidirBtn">Qidirish</button>
  <div id="natija"></div>
  <script src="main.js"></script>
</body>
</html>
```

**JavaScript kodi (mock API bilan):**
```js
// Mock ma''lumotlar (haqiqiy API o''rniga)
const obHavoMalumoatlari = {
  toshkent: { shahar: ''Toshkent'', temp: 28, holat: ''Quyoshli'', namlik: 45, shamol: 12 },
  samarqand: { shahar: ''Samarqand'', temp: 25, holat: ''Bulutli'', namlik: 52, shamol: 8 },
  buxoro: { shahar: ''Buxoro'', temp: 32, holat: ''Issiq'', namlik: 30, shamol: 15 },
  namangan: { shahar: ''Namangan'', temp: 22, holat: ''Yomg\''irli'', namlik: 70, shamol: 5 },
};

// API ni taqlid qiladigan funksiya (1 soniya kechikish bilan)
function obHavoAPI(shaharNomi) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kalit = shaharNomi.toLowerCase().trim();
      const malumot = obHavoMalumoatlari[kalit];
      if (malumot) {
        resolve(malumot);
      } else {
        reject(new Error(`"${shaharNomi}" shahri topilmadi`));
      }
    }, 1000);
  });
}

// DOM elementlari
const shaharInput = document.getElementById(''shahar'');
const qidirBtn = document.getElementById(''qidirBtn'');
const natijaDom = document.getElementById(''natija'');

// Ob-havo karta komponenti
function kartaYarat(data) {
  const emoji = {
    ''Quyoshli'': ''☀️'', ''Bulutli'': ''☁️'',
    ''Yomg\''irli'': ''🌧️'', ''Issiq'': ''🔥''
  };
  return `
    <div class="karta">
      <h2>${data.shahar} ${emoji[data.holat] || ''🌡️''}</h2>
      <p><strong>${data.temp}°C</strong> — ${data.holat}</p>
      <p>Namlik: ${data.namlik}%</p>
      <p>Shamol: ${data.shamol} km/soat</p>
    </div>
  `;
}

// Asosiy funksiya
async function obHavoQidir() {
  const shahar = shaharInput.value.trim();
  if (!shahar) {
    natijaDom.innerHTML = ''<p class="xato">Shahar nomini kiriting!</p>'';
    return;
  }

  // Yuklanmoqda holati
  natijaDom.innerHTML = ''<p class="yuklanmoqda">Yuklanmoqda...</p>'';
  qidirBtn.disabled = true;

  try {
    const data = await obHavoAPI(shahar);
    natijaDom.innerHTML = kartaYarat(data);
  } catch (xato) {
    natijaDom.innerHTML = `<p class="xato">${xato.message}</p>`;
  } finally {
    qidirBtn.disabled = false;
  }
}

// Hodisalar
qidirBtn.addEventListener(''click'', obHavoQidir);
shaharInput.addEventListener(''keydown'', (e) => {
  if (e.key === ''Enter'') obHavoQidir();
});
```

**Kengaytirish g''oyalari:**
- openweathermap.org bepul API bilan ulash
- 5 kunlik ob-havo prognozi ko''rsatish
- Joylashuvga qarab avtomatik shahar aniqlash (Geolocation API)',null,'article','[{"question":"async funksiyada xatoni qanday ushlash mumkin?","options":[".catch() bilan","try/catch bilan","if/else bilan","switch bilan"],"correct":1,"explanation":"async funksiyada try { await ... } catch(xato) { ... } ishlatiladi. Xato bo''lsa catch bloki ishlaydi, finally esa har doim."},{"question":"button.disabled = true nima qiladi?","options":["Tugmani o''chiradi","Tugmani bosib bo''lmaydigan qiladi","Tugmani yashiradi","Tugmani siladi"],"correct":1,"explanation":"disabled = true — HTML elementni o''chirib qo''yadi (bosilmaydi). API javob kutilayotganda ikki marta bosilishining oldini oladi."},{"question":"Promise konstruktorida resolve() nima qiladi?","options":["Promiseni rad etadi","Promiseni muvaffaqiyatli yakunlaydi va qiymat uzatadi","Promiseni bekor qiladi","Xato chiqaradi"],"correct":1,"explanation":"resolve(qiymat) — Promise ni fulfilled holatiga o''tkazadi. .then(data => ...) da data shu qiymat bo''ladi."},{"question":"element.innerHTML = ''...'' xavfi nima?","options":["Sekin ishlaydi","XSS (Cross-Site Scripting) hujumlariga ochiq qilishi mumkin","Rasmlarni o''chiradi","CSS ni buzadi"],"correct":1,"explanation":"innerHTML — HTML ni to''g''ridan-to''g''ri qo''yadi. Foydalanuvchi kiritgan ma''lumotni tekshirmasdan qo''ysangiz, zararli skriptlar ishga tushishi mumkin."}]'::jsonb,12);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-10','javascript','LocalStorage va SessionStorage','Brauzerda ma''lumot saqlash, o''qish, o''chirish','13 daqiqa','Brauzer ikki xil saqlash joyini taqdim etadi: LocalStorage (brauzer yopilsa ham saqlanadi) va SessionStorage (tab yopilganda o''chadi).

**LocalStorage asosiy amallar:**
```js
// SAQLASH — faqat string saqlanadi
localStorage.setItem(''foydalanuvchi_ismi'', ''Shaxlo'');
localStorage.setItem(''til'', ''uz'');

// O''QISH
const ism = localStorage.getItem(''foydalanuvchi_ismi'');
console.log(ism);  // ''Shaxlo''

// Yo''q bo''lsa null qaytadi
const mavjudEmas = localStorage.getItem(''notanish'');
console.log(mavjudEmas);  // null

// O''CHIRISH
localStorage.removeItem(''til'');

// HAMMASINI O''CHIRISH
// localStorage.clear();  // ehtiyot bo''ling!

// ELEMENTLAR SONI
console.log(localStorage.length);  // 1
```

**Ob''ektlarni saqlash (JSON orqali):**
```js
const sozlamalar = {
  mavzu: ''qorong\''i'',
  til: ''uz'',
  bildirishnomalar: true,
};

// Saqlash: ob''ektni JSON ga aylantirish
localStorage.setItem(''sozlamalar'', JSON.stringify(sozlamalar));

// O''qish: JSON ni ob''ektga aylantirish
const saqlangan = localStorage.getItem(''sozlamalar'');
const sozlamalar2 = JSON.parse(saqlangan);
console.log(sozlamalar2.mavzu);  // ''qorong\''i''
```

**Amaliy misol — o''qilgan darslarni saqlash:**
```js
const KALIT = ''bajarilgan_darslar'';

// Bajarilgan darslar ro''yxatini olish
function bajarilganlarniOl() {
  const saqlangan = localStorage.getItem(KALIT);
  return saqlangan ? JSON.parse(saqlangan) : [];
}

// Dars bajarilgani belgilash
function darsBajarildi(darsId) {
  const ro''yxat = bajarilganlarniOl();
  if (!ro''yxat.includes(darsId)) {
    ro''yxat.push(darsId);
    localStorage.setItem(KALIT, JSON.stringify(ro''yxat));
  }
}

// Bajarilganligi tekshirish
function bajarildimi(darsId) {
  return bajarilganlarniOl().includes(darsId);
}

// Ishlatish
darsBajarildi(''js-1'');
darsBajarildi(''js-2'');
console.log(bajarildimi(''js-1''));  // true
console.log(bajarildimi(''js-5''));  // false
console.log(bajarilganlarniOl()); // [''js-1'', ''js-2'']
```

**SessionStorage — vaqtinchalik saqlash:**
```js
// Faqat shu tab (oyna) uchun
sessionStorage.setItem(''vaqtinchalik'', ''faqat shu sessiya uchun'');
// Tab yopilganda avtomatik o''chadi
```',null,'article','[{"question":"localStorage va sessionStorage farqi nima?","options":["Hech qanday farq yo''q","localStorage brauzer yopilsa ham saqlanadi, sessionStorage tab yopilsa o''chadi","sessionStorage doimiy, localStorage vaqtinchalik","Ikkalasi ham bir xil muddatda"],"correct":1,"explanation":"localStorage — brauzer yopilganda ham saqlanadi. sessionStorage — faqat joriy tab (oyna) ochiq bo''lsa saqlanadi."},{"question":"localStorage.setItem(''kalit'', ''qiymat'') nima qiladi?","options":["Ma''lumotni serverga yuboradi","Ma''lumotni brauzer xotirasiga saqlaydi","Ma''lumotni faylga yozadi","Ma''lumotni cookie ga saqlaydi"],"correct":1,"explanation":"setItem(kalit, qiymat) — localStorage ga string sifatida saqlaydi. getItem(kalit) — o''qiydi. removeItem(kalit) — o''chiradi."},{"question":"Nima uchun ob''ektni localStorage ga saqlashdan oldin JSON.stringify kerak?","options":["Talab emas","localStorage faqat string qabul qiladi","Ob''ekt katta bo''ladi","Xavfsizlik uchun"],"correct":1,"explanation":"localStorage faqat string saqlaydi. Ob''ektni to''g''ridan saqlasang ''[object Object]'' yoziladi. JSON.stringify → JSON.parse juftligi ishlatiladi."},{"question":"localStorage.clear() nima qiladi?","options":["Brauzer tarixini tozalaydi","Barcha localStorage ma''lumotlarini o''chiradi","Faqat bitta elementni o''chiradi","Cookie larni o''chiradi"],"correct":1,"explanation":"clear() — localStorage dagi barcha kalit-qiymatlarni o''chiradi. removeItem(kalit) — faqat bitta elementni o''chiradi."}]'::jsonb,13);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-11','javascript','Classes va OOP','Ob''ektga yo''naltirilgan dasturlash, meros, encapsulation','20 daqiqa','OOP (Object-Oriented Programming) — dasturni ob''ektlar sifatida modellashtirish usuli. Class — ob''ektlar uchun «qolip» (shablon).

**Class asoslari:**
```js
class Talaba {
  // Konstruktor — ob''ekt yaratilganda chaqiriladi
  constructor(ism, familiya, sinf) {
    this.ism = ism;
    this.familiya = familiya;
    this.sinf = sinf;
    this.balllar = [];  // bo''sh massiv
  }
  
  // Metod — ob''ekt funksiyasi
  ballQo''sh(ball) {
    this.balllar.push(ball);
  }
  
  o''rtachaBall() {
    if (this.balllar.length === 0) return 0;
    const jami = this.balllar.reduce((a, b) => a + b, 0);
    return Math.round(jami / this.balllar.length);
  }
  
  toʻliqIsm() {
    return `${this.ism} ${this.familiya}`;
  }
}

// Ob''ekt yaratish (instantiation)
const talaba1 = new Talaba(''Kamola'', ''Ergasheva'', ''10-A'');
talaba1.ballQo''sh(85);
talaba1.ballQo''sh(92);
talaba1.ballQo''sh(78);

console.log(talaba1.toʻliqIsm());    // ''Kamola Ergasheva''
console.log(talaba1.o''rtachaBall()); // 85
```

**Meros (Inheritance) — class dan class yaratish:**
```js
class Shaxs {
  constructor(ism, yosh) {
    this.ism = ism;
    this.yosh = yosh;
  }
  
  tanishuv() {
    return `Men ${this.ism}, yoshim ${this.yosh}`;
  }
}

class O''qituvchi extends Shaxs {
  constructor(ism, yosh, fan) {
    super(ism, yosh);  // ota class konstruktorini chaqirish
    this.fan = fan;
  }
  
  // Metodni qayta yozish (override)
  tanishuv() {
    return `${super.tanishuv()}, ${this.fan} fani o\''qituvchisi`;
  }
  
  dars() {
    return `${this.ism} ${this.fan} fanidan dars beryapti`;
  }
}

const o''q = new O''qituvchi(''Zulfiya opa'', 35, ''Informatika'');
console.log(o''q.tanishuv());
// ''Men Zulfiya opa, yoshim 35, Informatika fani o\''qituvchisi''
console.log(o''q.dars());
// ''Zulfiya opa Informatika fanidan dars beryapti''
```

**Private xossalar (#):**
```js
class BankHisobi {
  #balans;  // # bilan private (tashqaridan ko''rinmaydi)
  
  constructor(boshlang''ich) {
    this.#balans = boshlang''ich;
  }
  
  pulQo''yish(miqdor) {
    if (miqdor <= 0) throw new Error(''Miqdor musbat bo\''lishi kerak'');
    this.#balans += miqdor;
    console.log(`+${miqdor} so''m qo''yildi. Balans: ${this.#balans}`);
  }
  
  pulOlish(miqdor) {
    if (miqdor > this.#balans) throw new Error(''Balans yetarli emas'');
    this.#balans -= miqdor;
    console.log(`-${miqdor} so''m olindi. Balans: ${this.#balans}`);
  }
  
  get balans() { return this.#balans; }  // faqat o''qish
}

const hisob = new BankHisobi(100000);
hisob.pulQo''yish(50000);  // +50000 so''m
hisob.pulOlish(30000);    // -30000 so''m
console.log(hisob.balans); // 120000
// hisob.#balans  // Xato! Private xossaga tashqaridan murojaat qilib bo''lmaydi
```',null,'article','[{"question":"class kalit so''zi nima uchun?","options":["CSS class qo''shish","Ob''ektlar uchun shablon (qolip) yaratish","Funksiya chaqirish","Modul yaratish"],"correct":1,"explanation":"class — ob''ektlar uchun qolip (blueprint). Bir xil tuzilmadagi ko''p ob''ektlarni qulay yaratish imkonini beradi."},{"question":"constructor() metodi nima qiladi?","options":["Ob''ektni o''chiradi","Ob''ekt yaratilganda avtomatik chaqiriladi va boshlang''ich qiymatlarni belgilaydi","Ob''ektni nusxalaydi","Ob''ektni eksport qiladi"],"correct":1,"explanation":"constructor — new bilan ob''ekt yaratilganda avtomatik ishlaydi. this.ism = ism kabi boshlang''ich qiymatlar o''rnatiladi."},{"question":"extends kalit so''zi nima qiladi?","options":["Faylni kengaytiradi","Bir class boshqa classdan meros olishini ta''minlaydi","Sinxron kutish","Export qilish"],"correct":1,"explanation":"extends — meros (inheritance). class Talaba extends Inson — Talaba Inson ning barcha xususiyatlarini oladi va yangilari qo''shiladi."},{"question":"super() nima qiladi?","options":["Eng yuqori ob''ektni chaqiradi","Ota class ning constructor ini chaqiradi","Global o''zgaruvchiga murojaat","Static metodlarni chaqiradi"],"correct":1,"explanation":"super() — extends bilan merosni olganda ota class ning constructor ini chaqirish uchun. Bola class constructor ichida birinchi bo''lishi kerak."}]'::jsonb,14);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-12','javascript','Modullar (import/export)','Kodni fayllarga bo''lish, named va default export','14 daqiqa','Modullar — kodni alohida fayllarga bo''lish imkonini beradi. Bu yirik dasturlarda tartibni saqlashga yordam beradi.

**Named export — bir nechta narsa eksport qilish:**
```js
// utils.js
export const PI = 3.14159;

export function doira_yuza(r) {
  return PI * r * r;
}

export function doira_uzunligi(r) {
  return 2 * PI * r;
}

export const salomlash = (ism) => `Salom, ${ism}!`;
```

```js
// main.js
import { PI, doira_yuza, salomlash } from ''./utils.js'';

console.log(PI);              // 3.14159
console.log(doira_yuza(5));   // 78.53...
console.log(salomlash(''Ali'')); // ''Salom, Ali!''

// Hammasini bitta nom bilan import qilish
import * as Hisob from ''./utils.js'';
console.log(Hisob.doira_uzunligi(5));  // 31.41...
```

**Default export — asosiy narsa eksport qilish:**
```js
// talaba.js
class Talaba {
  constructor(ism, ball) {
    this.ism = ism;
    this.ball = ball;
  }
  baholash() {
    return this.ball >= 80 ? ''A\''lo'' : ''Yaxshi'';
  }
}

export default Talaba;  // default — faqat bitta bo''lishi mumkin
```

```js
// main.js
import Talaba from ''./talaba.js'';  // nom ixtiyoriy

const t = new Talaba(''Sarvar'', 88);
console.log(t.baholash());  // ''A\''lo''
```

**Aralash export:**
```js
// api.js
const BASE_URL = ''https://api.webacademy.uz'';

export async function kurslarniOl() {
  const javob = await fetch(`${BASE_URL}/kurslar`);
  return await javob.json();
}

export async function darslarniOl(kursId) {
  const javob = await fetch(`${BASE_URL}/kurslar/${kursId}/darslar`);
  return await javob.json();
}

export default { kurslarniOl, darslarniOl };
```',null,'article','[{"question":"export default nima qiladi?","options":["Faylni o''chiradi","Moduldan bitta asosiy qiymatni eksport qiladi","Barcha o''zgaruvchilarni eksport qiladi","Import qiladi"],"correct":1,"explanation":"export default — fayl uchun bitta asosiy eksport. import Xohlagan from ''./fayl'' — istalgan nom bilan import qilinadi."},{"question":"Named export qanday yoziladi?","options":["export default const foo","export { foo, bar }","import { foo } from","export.foo = fn"],"correct":1,"explanation":"Named export: export const foo = ... yoki export { foo, bar }. Import qilganda aynan o''sha nom ishlatiladi: import { foo } from ''./fayl''."},{"question":"import { useState } from ''react'' — bu nima?","options":["react modulidan useState ni default import qilish","react modulidan useState ni named import qilish","useState ni yangi modul sifatida yaratish","useState ni o''chirish"],"correct":1,"explanation":"Named import — { } qavslar bilan. Eksport qilingan aniq nom bilan import qilinadi. Default import esa qavssiz yoziladi."},{"question":"<script type=''module''> nima uchun?","options":["Faqat server uchun","HTML da ES modullarni yoqadi (import/export ishlatish imkonini beradi)","Kodni xavfsiz qiladi","CSS yuklaydi"],"correct":1,"explanation":"type=''module'' — brauzerga bu fayl ES modul ekanligini bildiradi. import/export, o''z scope''i bor. Standart script dan farqli."}]'::jsonb,15);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-p4','javascript','Loyiha 4: Eslatmalar ilovasi','LocalStorage, OOP va modullar bilan to''liq eslatmalar ilovasi','45 daqiqa','10-11-12 darslardagi LocalStorage, Class va Modullar bilimlarini birlashtiring!

**Loyiha maqsadi:**
Eslatmalar yarating, tahrirlang, o''chiring — brauzer yopilsa ham saqlanib qolsin.

**Loyiha tuzilmasi (modullar):**
```
eslatmalar/
  index.html
  main.js         ← asosiy mantiq
  eslatma.js      ← Eslatma classi
  saqlash.js      ← LocalStorage moduli
  ui.js           ← DOM operatsiyalari
```

**eslatma.js — Eslatma classi:**
```js
export class Eslatma {
  constructor(sarlavha, matn, id = null) {
    this.id = id || Date.now().toString();
    this.sarlavha = sarlavha;
    this.matn = matn;
    this.yaratilgan = new Date().toLocaleDateString(''uz-UZ'');
    this.muhim = false;
  }
  
  muqimYoqish() {
    this.muhim = !this.muhim;
    return this;
  }
  
  tahrirlash(yangiSarlavha, yangiMatn) {
    this.sarlavha = yangiSarlavha;
    this.matn = yangiMatn;
    return this;
  }
  
  qisqaMatn() {
    return this.matn.length > 80
      ? this.matn.substring(0, 80) + ''...''
      : this.matn;
  }
}
```

**saqlash.js — LocalStorage moduli:**
```js
const KALIT = ''eslatmalar_v1'';

export function eslatmalarniYukla() {
  const json = localStorage.getItem(KALIT);
  if (!json) return [];
  const oddiyOb''ektlar = JSON.parse(json);
  // Oddiy ob''ektlarni Eslatma classiga aylantirish
  return oddiyOb''ektlar.map(e => Object.assign(new Eslatma('''', ''''), e));
}

export function eslatmalarniSaqla(eslatmalar) {
  localStorage.setItem(KALIT, JSON.stringify(eslatmalar));
}

export function bariniO''chir() {
  localStorage.removeItem(KALIT);
}
```

**main.js — Asosiy mantiq:**
```js
import { Eslatma } from ''./eslatma.js'';
import { eslatmalarniYukla, eslatmalarniSaqla } from ''./saqlash.js'';

let eslatmalar = eslatmalarniYukla();

export function yangiEslatma(sarlavha, matn) {
  const eslatma = new Eslatma(sarlavha, matn);
  eslatmalar.push(eslatma);
  eslatmalarniSaqla(eslatmalar);
  return eslatma;
}

export function eslatmaO''chir(id) {
  eslatmalar = eslatmalar.filter(e => e.id !== id);
  eslatmalarniSaqla(eslatmalar);
}

export function muhimBelgila(id) {
  const eslatma = eslatmalar.find(e => e.id === id);
  if (eslatma) {
    eslatma.muqimYoqish();
    eslatmalarniSaqla(eslatmalar);
  }
}

export function barchaEslatmalar() {
  // Muhimlar birinchi, keyin yaratilgan vaqti bo''yicha
  return [...eslatmalar].sort((a, b) => {
    if (a.muhim !== b.muhim) return b.muhim ? 1 : -1;
    return b.id - a.id;
  });
}
```

**Kengaytirish g''oyalari:**
- Kategoriyalar qo''shish (ish, shaxsiy, ta''lim)
- Qidiruv funksiyasi
- Eslatmani eksport qilish (TXT yoki JSON fayl sifatida)
- Eskirish sanasi qo''shish',null,'article','[{"question":"Object.assign(new Eslatma(), data) nima qiladi?","options":["Yangi class yaratadi","data ning xossalarini Eslatma ob''ektiga ko''chiradi","Eslatma ni o''chiradi","class ni tahrirlaydi"],"correct":1,"explanation":"Object.assign(maqsad, manba) — manba ning barcha xossalarini maqsadga ko''chiradi. LocalStorage dan o''qilgan oddiy ob''ektni class ga aylantirish uchun."},{"question":"Modullarni qanday qilib bitta nom bilan import qilish mumkin?","options":["import Hammasi from ''./fayl''","import * as Hammasi from ''./fayl''","import { * } from ''./fayl''","require(''./fayl'')"],"correct":1,"explanation":"import * as X from ''./fayl'' — barcha named export larni X nomli ob''ektga oladi. X.funksiya() shaklida chaqiriladi."},{"question":"Spread [...massiv] nima qiladi?","options":["Massivni o''chiradi","Massivning sathiy nusxasini yaratadi","Massivni saralaydi","Massivni birlashtiradi"],"correct":1,"explanation":"[...massiv] — massivning yangi nusxasini yaratadi. Asl massivni o''zgartirmasdan sort() qilish uchun [...massiv].sort() ishlatiladi."},{"question":"class metodidan return this nima beradi?","options":["Ob''ektni o''chiradi","Method chaining imkonini beradi (bir qatorda bir necha metodlarni chaqirish)","this ni null qiladi","Yangi ob''ekt yaratadi"],"correct":1,"explanation":"return this — metodlarni zanjirlab chaqirish imkonini beradi: eslatma.tahrirlash(''yangi'', ''matn'').muhimYoqish(). Fluent interface pattern."}]'::jsonb,16);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-13','javascript','Xatolarni boshqarish','try/catch/finally, custom Error, xato turlari','13 daqiqa','Dasturda xatolar doimo yuz berishi mumkin. Ularni to''g''ri ushlash va foydalanuvchiga tushunarli xabar ko''rsatish muhim.

**try / catch / finally:**
```js
try {
  // Xato yuz berishi mumkin bo''lgan kod
  const json = ''{ noto\''g\''ri json'';
  const ma''lumot = JSON.parse(json);  // Bu yerda xato yuz beradi
  console.log(ma''lumot);
} catch (xato) {
  // Xato ushlandi
  console.error(''Xato turi:'', xato.name);     // SyntaxError
  console.error(''Xato xabari:'', xato.message); // Unexpected token...
} finally {
  // Xato bo''lsa ham, bo''lmasa ham ishlaydi
  console.log(''Operatsiya tugadi (muvaffaqiyatli yoki xatoli)'');
}
```

**Xatolarni qasddan chiqarish (throw):**
```js
function yoshniTekshir(yosh) {
  if (typeof yosh !== ''number'') {
    throw new TypeError(''Yosh son bo\''lishi kerak'');
  }
  if (yosh < 0 || yosh > 150) {
    throw new RangeError(''Yosh 0 dan 150 gacha bo\''lishi kerak'');
  }
  return `${yosh} yosh to\''g\''ri`;
}

try {
  console.log(yoshniTekshir(17));    // ''17 yosh to\''g\''ri''
  console.log(yoshniTekshir(-5));    // Xato!
} catch (e) {
  console.error(e.name + '': '' + e.message);  // RangeError: Yosh 0 dan...
}
```

**O''z xato sinfini yaratish:**
```js
class TarmoqXatosi extends Error {
  constructor(xabar, statusKod) {
    super(xabar);
    this.name = ''TarmoqXatosi'';
    this.statusKod = statusKod;
  }
}

async function APIdan olish(url) {
  const javob = await fetch(url);
  
  if (!javob.ok) {
    throw new TarmoqXatosi(
      `Server xatosi: ${javob.statusText}`,
      javob.status
    );
  }
  
  return await javob.json();
}

try {
  const data = await APIdan_olish(''/api/notanish-sahifa'');
} catch (e) {
  if (e instanceof TarmoqXatosi) {
    console.error(`Tarmoq xatosi (${e.statusKod}): ${e.message}`);
    // Foydalanuvchiga ko''rsatish
    if (e.statusKod === 404) {
      alert(''Sahifa topilmadi'');
    } else if (e.statusKod === 500) {
      alert(''Server vaqtincha ishlamayapti, keyinroq urinib ko\''ring'');
    }
  } else {
    console.error(''Noma\''lum xato:'', e);
  }
}
```',null,'article','[{"question":"try/catch nima uchun?","options":["Kodni tezlashtirish","Xatolarni ushlash va dasturning to''xtab qolmasligini ta''minlash","Kod tuzilmasini yaxshilash","Fayllarni yuklash"],"correct":1,"explanation":"try — xato bo''lishi mumkin bo''lgan kod. catch(err) — xato bo''lsa ishlaydi. Dastur to''xtamaydi, xato boshqariladi."},{"question":"finally bloki qachon ishlaydi?","options":["Faqat muvaffaqiyatli bo''lganda","Faqat xato bo''lganda","Har doim — xato bo''lsa ham bo''lmasa ham","Hech qachon ishlamaydi"],"correct":2,"explanation":"finally — try/catch dan qat''iy nazar har doim ishlaydi. Resurslarni yopish, yuklash indikatorni o''chirish uchun ishlatiladi."},{"question":"throw new Error(''xabar'') nima qiladi?","options":["Xatoni e''tiborsiz qoldiradi","Qo''lda xato chiqaradi — catch blokiga o''tkazadi","Dasturni to''xtatadi","Konsolga yozadi"],"correct":1,"explanation":"throw — qo''lda xato chiqaradi. try-catch bilan ushlash mumkin. Noto''g''ri kiritilgan ma''lumotlar uchun ishlatiladi."},{"question":"TypeError qachon yuzaga keladi?","options":["Noto''g''ri matematika","Noto''g''ri tur — masalan null ga xossa murojaat qilish","Fayl topilmasa","Tarmoq uzilsa"],"correct":1,"explanation":"TypeError — noto''g''ri tur ishlatilganda. null.ism → TypeError. ReferenceError — e''lon qilinmagan o''zgaruvchi. SyntaxError — kod xato yozilgan."}]'::jsonb,17);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-14','javascript','Event Loop va asinxronlik','Call Stack, Web APIs, Callback Queue, Microtasks','17 daqiqa','JavaScript bir xatboshilik (single-threaded) — ya''ni bir vaqtda faqat bitta ish bajaradi. Lekin Event Loop mexanizmi orqali asinxron operatsiyalarni boshqaradi.

**JavaScript bajarish tartibi:**

JavaScript kodi quyidagi mexanizmlar orqali ishlaydi:
- **Call Stack** — bajarilayotgan funksiyalar navbati (LIFO)
- **Web APIs** — brauzer taqdim etadigan vositalar (setTimeout, fetch, DOM)
- **Callback Queue** — bajarilishga tayyor asinxron callback lar
- **Microtask Queue** — Promise callback lari (Queue dan oldin bajariladi)
- **Event Loop** — Call Stack bo''sh bo''lganda Microtask → Callback Queue dan oladi

**Misol — tartibni tushunish:**
```js
console.log(''1: Boshlandi'');

setTimeout(() => {
  console.log(''4: setTimeout (0ms bo\''lsa ham!)'');
}, 0);

Promise.resolve().then(() => {
  console.log(''3: Promise microtask'');
});

console.log(''2: Tugadi'');

// Natija:
// 1: Boshlandi
// 2: Tugadi
// 3: Promise microtask   ← microtask birinchi!
// 4: setTimeout           ← callback queue keyin
```

**Asinxron kodning to''g''ri yozilishi:**
```js
// NOTO''G''RI — callback johannam (callback hell)
fetch(''/api/foydalanuvchi/1'', function(foydalanuvchi) {
  fetch(''/api/kurslar/'' + foydalanuvchi.id, function(kurslar) {
    fetch(''/api/darslar/'' + kurslar[0].id, function(darslar) {
      console.log(darslar);  // Ko''p ichma-ich
    });
  });
});

// TO''G''RI — async/await bilan chiroyli
async function ma''lumotlarniYukla() {
  const foydalanuvchi = await fetch(''/api/foydalanuvchi/1'').then(r => r.json());
  const kurslar = await fetch(`/api/kurslar/${foydalanuvchi.id}`).then(r => r.json());
  const darslar = await fetch(`/api/darslar/${kurslar[0].id}`).then(r => r.json());
  console.log(darslar);  // Chiziqli, o''qish oson
}
```

**Debounce — ortiqcha chaqiruvlarni kamaytirish:**
```js
// Foydalanuvchi yozishni to''xtatgandan 500ms keyin chaqiriladi
function debounce(fn, kechikish) {
  let taymer;
  return function(...args) {
    clearTimeout(taymer);
    taymer = setTimeout(() => fn.apply(this, args), kechikish);
  };
}

const qidiruv = debounce(async (so''rov) => {
  const natija = await fetch(`/api/qidiruv?q=${so''rov}`).then(r => r.json());
  console.log(natija);
}, 500);

document.querySelector(''#qidiruv'').addEventListener(''input'', (e) => {
  qidiruv(e.target.value);
});
```',null,'article','[{"question":"Call stack nima?","options":["Funksiya kutish navbati","Bajarilayotgan funksiyalar ro''yxati (LIFO tartibida)","Xato ro''yxati","Modul ro''yxati"],"correct":1,"explanation":"Call stack — LIFO (Last In First Out). Funksiya chaqirilganda stack ga qo''shiladi, tugatganda o''chiriladi. JS single-threaded."},{"question":"setTimeout(fn, 0) qachon ishlaydi?","options":["Darhol ishlaydi","Joriy sinxron kod tugagandan keyin ishlaydi","0 millisoniyada ishlaydi","Hech qachon ishlamaydi"],"correct":1,"explanation":"setTimeout(fn, 0) — joriy sinxron kod va microtask lar tugagandan keyin ishlaydi. 0ms = ''imkon bo''lishi bilan, lekin hozir emas''."},{"question":"Promise va setTimeout — qaysi biri avval ishlaydi?","options":["setTimeout avval","Promise (.then) avval — microtask navbati ustunligi bor","Bir vaqtda ishlaydi","Tartib belgilanmagan"],"correct":1,"explanation":"Microtask (Promise) > Macrotask (setTimeout). Promise.then() — microtask navbatida, setTimeout — macrotask navbatida. Microtasklar ustunlikka ega."},{"question":"Event loop ning asosiy vazifasi nima?","options":["Xatolarni ushlash","Call stack bo''sh bo''lganda navbatdan keyingi vazifani olish va bajarish","Kodni kompilyatsiya qilish","Tarmoq so''rovlarini yuborish"],"correct":1,"explanation":"Event loop — call stack ni tekshiradi. Bo''sh bo''lsa — microtask navbatini, keyin macrotask navbatini tekshiradi va keyingi vazifani stackga qo''yadi."}]'::jsonb,18);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('js-15','javascript','Yakuniy loyiha: To-Do ilova','LocalStorage bilan to''liq funksional vazifalar ilovasi','35 daqiqa','Ushbu darsda barcha o''rgangan bilimlaringizni birlashtirib, to''liq funksional To-Do ilovasi yaratasiz.

**Ilova xususiyatlari:**
- Yangi vazifa qo''shish
- Bajarildi deb belgilash
- Vazifani o''chirish
- Filtrlash (barchasi / bajarilgan / bajarilmagan)
- LocalStorage da saqlash (sahifa yangilananda yo''qolmaydi)

**HTML tuzilmasi:**
```html
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Vazifalarim</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="ilova">
    <h1>📝 Vazifalarim</h1>
    
    <form id="vazifa-forma">
      <input id="yangi-vazifa" placeholder="Yangi vazifa kiriting..." />
      <button type="submit">Qo''shish</button>
    </form>
    
    <div class="filtrlar">
      <button class="filtr faol" data-filtr="hammasi">Hammasi</button>
      <button class="filtr" data-filtr="bajarilmagan">Bajarilmagan</button>
      <button class="filtr" data-filtr="bajarilgan">Bajarilgan</button>
    </div>
    
    <ul id="vazifalar-royxati"></ul>
    
    <p id="hisobot"></p>
  </div>
  <script src="main.js"></script>
</body>
</html>
```

**JavaScript kodi (main.js):**
```js
// Ma''lumotlar
let vazifalar = JSON.parse(localStorage.getItem(''vazifalar'')) || [];
let joriyFiltr = ''hammasi'';

// Saqlash
function saqlash() {
  localStorage.setItem(''vazifalar'', JSON.stringify(vazifalar));
}

// Ko''rsatish
function ro''yxatniKo''rsat() {
  const royxat = document.getElementById(''vazifalar-royxati'');
  
  const filtrlangan = vazifalar.filter(v => {
    if (joriyFiltr === ''bajarilgan'') return v.bajarildi;
    if (joriyFiltr === ''bajarilmagan'') return !v.bajarildi;
    return true;
  });
  
  royxat.innerHTML = filtrlangan.map(v => `
    <li class="vazifa ${v.bajarildi ? ''bajarildi'' : ''''}">
      <input type="checkbox" ${v.bajarildi ? ''checked'' : ''''}
             onchange="belgilashtir(''${v.id}'')">
      <span>${v.matn}</span>
      <button onclick="o''chir(''${v.id}'')" class="ochir">🗑</button>
    </li>
  `).join('''');
  
  const bajarilmagan = vazifalar.filter(v => !v.bajarildi).length;
  document.getElementById(''hisobot'').textContent =
    `${bajarilmagan} ta vazifa bajarilmagan`;
}

// Qo''shish
document.getElementById(''vazifa-forma'').addEventListener(''submit'', (e) => {
  e.preventDefault();
  const input = document.getElementById(''yangi-vazifa'');
  const matn = input.value.trim();
  
  if (!matn) return;
  
  vazifalar.push({
    id: Date.now().toString(),
    matn: matn,
    bajarildi: false,
  });
  
  saqlash();
  ro''yxatniKo''rsat();
  input.value = '''';
});

// Belgilash
function belgilashtir(id) {
  const vazifa = vazifalar.find(v => v.id === id);
  if (vazifa) {
    vazifa.bajarildi = !vazifa.bajarildi;
    saqlash();
    ro''yxatniKo''rsat();
  }
}

// O''chirish
function o''chir(id) {
  vazifalar = vazifalar.filter(v => v.id !== id);
  saqlash();
  ro''yxatniKo''rsat();
}

// Filtrlash
document.querySelectorAll(''.filtr'').forEach(btn => {
  btn.addEventListener(''click'', () => {
    joriyFiltr = btn.dataset.filtr;
    document.querySelectorAll(''.filtr'').forEach(b => b.classList.remove(''faol''));
    btn.classList.add(''faol'');
    ro''yxatniKo''rsat();
  });
});

// Boshlang''ich ko''rsatish
ro''yxatniKo''rsat();
```',null,'article','[{"question":"JavaScript da const va let farqi nima?","options":["Hech qanday farq yo''q","const — o''zgarmas, let — o''zgaruvchan","let — o''zgarmas, const — o''zgaruvchan","Ikkalasi ham o''zgarmas"],"correct":1,"explanation":"const — bir marta qiymat beriladi va o''zgartirib bo''lmaydi. let — qiymati keyinchalik o''zgartirilishi mumkin."},{"question":"async/await nima uchun ishlatiladi?","options":["CSS animatsiyalari uchun","Asinxron operatsiyalarni sinxron ko''rinishda yozish uchun","HTML teglari yaratish uchun","Massivlarni saralash uchun"],"correct":1,"explanation":"async/await — Promise asosidagi asinxron kodni yanada o''qilishi oson qilib yozish imkonini beradi."},{"question":"localStorage.setItem() nima qiladi?","options":["Ma''lumotni serverga yuboradi","Ma''lumotni brauzerda doimiy saqlaydi","O''zgaruvchi yaratadi","Cookie o''rnatadi"],"correct":1,"explanation":"localStorage — brauzerda doimiy ma''lumot saqlash. Sahifa yopilsa ham ma''lumot saqlanib qoladi."},{"question":"DOM da getElementById() nima qaytaradi?","options":["Barcha elementlar ro''yxati","Bitta HTML element","Element matnini","CSS uslublarini"],"correct":1,"explanation":"getElementById() — berilgan id ga mos bitta HTML elementni qaytaradi. Topilmasa null qaytaradi."},{"question":"try/catch bloki nima uchun?","options":["Tsikl yaratish uchun","Xatolarni ushlash va boshqarish uchun","Funksiya yaratish uchun","Shartni tekshirish uchun"],"correct":1,"explanation":"try {} ichidagi kod bajariladi. Xato yuz bersa catch(e) {} ishga tushadi. finally {} har doim bajariladi."}]'::jsonb,19);
insert into courses (id,title,description,category,level,duration,color,image,is_premium,topics,position) values ('react','React','Eng mashhur frontend kutubxona — komponentlar, hooks, state va zamonaviy React 18+ imkoniyatlari.','React','O''rta','8 soat','#61DAFB','course-react',true,'["Components","Hooks","Context","React Router","React Query"]'::jsonb,4);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('rc-1','react','React nima?','Virtual DOM, komponent arxitekturasi','8 daqiqa','React — UI yaratish uchun JavaScript kutubxonasi. Virtual DOM orqali faqat o''zgargan qismlarni yangilaydi.',null,'article','[]'::jsonb,1);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('rc-2','react','JSX','HTML + JavaScript = JSX','12 daqiqa','```jsx
const App = () => (
  <div className="container">
    <h1>Salom, {name}!</h1>
    {isLoggedIn && <Dashboard />}
  </div>
);
```',null,'article','[]'::jsonb,2);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('rc-3','react','Props','Komponentga ma''lumot uzatish','14 daqiqa','```jsx
const CourseCard = ({ title, isPremium, onPress }) => (
  <div onClick={onPress}>
    {isPremium && <span>Premium</span>}
    <h3>{title}</h3>
  </div>
);
```',null,'article','[]'::jsonb,3);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('rc-4','react','useState','Komponent holati','16 daqiqa','```jsx
const [count, setCount] = useState(0);
const [user, setUser] = useState(null);
const [courses, setCourses] = useState([]);
```',null,'article','[]'::jsonb,4);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('rc-5','react','useEffect','Yon ta''sirlar, lifecycle','18 daqiqa','```jsx
useEffect(() => {
  fetchCourses().then(setCourses);
}, []); // [] — faqat bir marta

useEffect(() => {
  document.title = `${course.title} | Web Academy`;
}, [course.title]); // course.title o''zgarganda
```',null,'article','[]'::jsonb,5);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('rc-6','react','Context API','Global state','20 daqiqa','```jsx
const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);
```',null,'article','[]'::jsonb,6);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('rc-7','react','React Router','SPA navigatsiyasi','22 daqiqa','```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/course/:id" element={<CourseDetail />} />
</Routes>
```',null,'article','[]'::jsonb,7);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('rc-8','react','Custom Hooks','Mantiqni qayta ishlatish','17 daqiqa','```jsx
const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchCourses().then(setCourses).finally(() => setLoading(false));
  }, []);
  return { courses, loading };
};
```',null,'article','[]'::jsonb,8);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('rc-9','react','Performance','memo, useMemo, useCallback','19 daqiqa','```jsx
const CourseList = memo(({ courses }) => (
  <div>{courses.map(c => <CourseCard key={c.id} {...c} />)}</div>
));

const totalStudents = useMemo(() => courses.reduce((s, c) => s + c.studentsCount, 0), [courses]);
```',null,'article','[]'::jsonb,9);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('rc-10','react','Yakuniy loyiha','Web Academy fronend kloni','40 daqiqa','React bilan Web Academy saytining frontend qismini yarating:
- Kurslar ro''yxati
- Kurs sahifasi
- Filtrlash
- Qidiruv
- Auth sahifasi',null,'article','[]'::jsonb,10);
insert into courses (id,title,description,category,level,duration,color,image,is_premium,topics,position) values ('nodejs','Node.js','Server tomoni dasturlash — Express.js, REST API, PostgreSQL va autentifikatsiya.','Node.js','O''rta','9 soat','#339933','course-nodejs',true,'["Node.js","Express.js","REST API","PostgreSQL","JWT"]'::jsonb,5);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('nd-1','nodejs','Node.js bilan tanishuv','Node.js nima, npm','10 daqiqa','Node.js — Chrome V8 engine asosida qurilgan JavaScript runtime. Backend dasturlash uchun ishlatiladi.',null,'article','[]'::jsonb,1);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('nd-2','nodejs','Express.js','Web framework','18 daqiqa','```js
const express = require(''express'');
const app = express();
app.use(express.json());
app.get(''/api/courses'', (req, res) => res.json({ courses: [] }));
app.listen(3000);
```',null,'article','[]'::jsonb,2);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('nd-3','nodejs','REST API dizayn','HTTP metodlar, status kodlar','15 daqiqa','GET /courses, POST /courses, PUT /courses/:id, DELETE /courses/:id',null,'article','[]'::jsonb,3);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('nd-4','nodejs','PostgreSQL + Drizzle','Ma''lumotlar bazasi','25 daqiqa','```ts
const courses = pgTable(''courses'', {
  id: serial(''id'').primaryKey(),
  title: text(''title'').notNull(),
  isPremium: boolean(''is_premium'').default(false),
});
```',null,'article','[]'::jsonb,4);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('nd-5','nodejs','JWT Autentifikatsiya','Login, register, token','20 daqiqa','```js
const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: ''7d'' });
```',null,'article','[]'::jsonb,5);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('nd-6','nodejs','Middleware','Auth, error handling','14 daqiqa','```js
const protect = (req, res, next) => {
  const token = req.headers.authorization?.split('' '')[1];
  if (!token) return res.status(401).json({ error: ''Kirish taqiqlangan'' });
  req.user = jwt.verify(token, SECRET);
  next();
};
```',null,'article','[]'::jsonb,6);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('nd-7','nodejs','Fayl yuklash','Multer, S3','16 daqiqa','```js
const upload = multer({ dest: ''uploads/'' });
app.post(''/upload'', upload.single(''file''), (req, res) => res.json({ url: req.file.path }));
```',null,'article','[]'::jsonb,7);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('nd-8','nodejs','Yakuniy loyiha','Web Academy API','40 daqiqa','Web Academy uchun to''liq REST API yarating: foydalanuvchilar, kurslar, darslar, ro''yxatga olish, progress.',null,'article','[]'::jsonb,8);
insert into courses (id,title,description,category,level,duration,color,image,is_premium,topics,position) values ('fullstack','Full-Stack','React + Node.js bilan to''liq web ilovalar yarating — frontenddan backendgacha hamma narsa.','Full-Stack','Murakkab','20 soat','#7C3AED','course-fullstack',true,'["React","Node.js","PostgreSQL","Auth","Deploy"]'::jsonb,6);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-1','fullstack','Kurs tartibi va arxitektura','Nima quramiz?','12 daqiqa','Ushbu kursda to''liq fullstack web ilova quramiz — Web Academy ga o''xshash o''quv platformasi.',null,'article','[]'::jsonb,1);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-2','fullstack','Loyiha tuzilmasi','Monorepo, pnpm workspaces','15 daqiqa','```
webacademy/
├── frontend/   # React + Vite
├── backend/    # Node.js + Express
└── shared/     # Umumiy tiplar
```',null,'article','[]'::jsonb,2);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-3','fullstack','Ma''lumotlar bazasi dizayni','Schema, migrations','20 daqiqa','Users, Courses, Lessons, Enrollments, Progress jadvallari.',null,'article','[]'::jsonb,3);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-4','fullstack','Auth tizimi','Register, login, JWT refresh','25 daqiqa','Access token + Refresh token pattern bilan xavfsiz autentifikatsiya.',null,'article','[]'::jsonb,4);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-5','fullstack','Kurslar API','CRUD operatsiyalar','22 daqiqa','GET/POST/PUT/DELETE kurslar uchun RESTful API.',null,'article','[]'::jsonb,5);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-6','fullstack','Frontend: Bosh sahifa','Hero, kurslar, stats','18 daqiqa','React bilan Web Academy bosh sahifasini yarating.',null,'article','[]'::jsonb,6);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-7','fullstack','Frontend: Kurslar sahifasi','Filter, search, pagination','20 daqiqa','Kurslar ro''yxati + filtrlash + qidiruv imkoniyati.',null,'article','[]'::jsonb,7);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-8','fullstack','Frontend: Kurs sahifasi','Darslar ro''yxati, progress','22 daqiqa','Kurs detallari, darslar ro''yxati va progress bar.',null,'article','[]'::jsonb,8);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-9','fullstack','Video player','Custom video player','20 daqiqa','React bilan custom video player yarating — play/pause, progress, fullscreen.',null,'article','[]'::jsonb,9);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-10','fullstack','Progress tracking','Dars tugash, progress saqlash','18 daqiqa','Foydalanuvchi progressini backendda saqlash va frontendda ko''rsatish.',null,'article','[]'::jsonb,10);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-11','fullstack','To''lov tizimi','Premium kurslar, Stripe','25 daqiqa','Premium kurslar uchun to''lov oqimi — Stripe Checkout bilan integratsiya.',null,'article','[]'::jsonb,11);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-12','fullstack','Admin panel','Kurs, dars boshqaruvi','22 daqiqa','Admin uchun kurslar va darslarni qo''shish/tahrirlash/o''chirish paneli.',null,'article','[]'::jsonb,12);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-13','fullstack','Testing','Unit va integration testlar','18 daqiqa','Vitest bilan backend testlar, React Testing Library bilan frontend testlar.',null,'article','[]'::jsonb,13);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-14','fullstack','Performance','Caching, optimization','16 daqiqa','Redis caching, React Query, image optimization, code splitting.',null,'article','[]'::jsonb,14);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-15','fullstack','Deploy','Production ga chiqarish','20 daqiqa','Backend: Railway/Render. Frontend: Vercel. DB: Neon PostgreSQL.',null,'article','[]'::jsonb,15);
insert into lessons (id,course_id,title,description,duration,content,video_url,type,questions,position) values ('fs-16','fullstack','Sertifikat','Yakuniy baholash','10 daqiqa','Full-Stack kursini muvaffaqiyatli tugatganingiz uchun tabriklaymiz! Sertifikatingizni oling.',null,'quiz','[]'::jsonb,16);
