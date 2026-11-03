import type { Course } from "./courses";

// Almashtirish: courses.ts dagi "PHP" yozuvi o'rniga shuni qo'ying.
// Agar COURSES massivi uchun obyekt tipi kerak bo'lsa, "import type" qatorini o'chiring.

export const PHP_COURSE: Course = {
  "id": "php",
  "title": "PHP",
  "description": "PHP — server tomoni dasturlash tili. Formalar, MySQL bilan ishlash, CRUD, ro'yxatdan o'tish va xavfsizlik asoslari.",
  "category": "PHP",
  "level": "O'rta",
  "duration": "10 soat",
  "lessonsCount": 8,
  "image": "course-php",
  "color": "#777BB4",
  "instructor": "Web Academy jamoasi",
  "isPremium": true,
  "topics": [
    "PHP nima va o'rnatish",
    "O'zgaruvchilar, shartlar va tsikllar",
    "Massivlar va funksiyalar",
    "Formalar va validatsiya",
    "MySQL va PDO",
    "CRUD amallari",
    "Ro'yxatdan o'tish va kirish",
    "Xavfsizlik va joylashtirish"
  ],
  "lessons": [
    {
      "id": "php-1",
      "courseId": "php",
      "title": "PHP nima va muhitni sozlash",
      "description": "Server tomoni tili, XAMPP va birinchi sahifa",
      "type": "article",
      "content": "PHP (Hypertext Preprocessor) — serverda bajariladigan dasturlash tili. Brauzer so'rov yuboradi, server .php faylni bajaradi va tayyor HTML natijani qaytaradi. Brauzer PHP kodini ko'rmaydi, faqat natijani ko'radi.\n\n**Nega PHP?** WordPress, Moodle va ko'plab saytlar PHP da yozilgan. U ma'lumotlar bazasi bilan oson ishlaydi va o'rganish uchun qulay.\n\n**Mahalliy muhit:** XAMPP o'rnatiladi. Apache veb-server, MySQL baza va PHP bitta paketda keladi. Fayllar C:\\xampp\\htdocs papkasiga joylanadi va localhost/fayl.php manzili orqali ochiladi.\n\n**Birinchi sahifa (salom.php):**\n```php\n<?php\necho \"Salom, dunyo!\";\necho \"<br>Bugun: \" . date(\"d.m.Y\");\n?>\n```\n\n**Muhim qoidalar:**\n- PHP kodi <?php va ?> belgilari orasiga yoziladi.\n- Har bir buyruq nuqtali vergul (;) bilan tugaydi.\n- Fayl kengaytmasi .php bo'lishi shart.\n- Sahifa faqat localhost orqali ochiladi, ikki marta bosish bilan emas.",
      "links": [
        {
          "title": "PHP rasmiy hujjatlari",
          "url": "https://www.php.net/docs.php"
        }
      ],
      "questions": [
        {
          "question": "PHP kodi qayerda bajariladi?",
          "options": [
            "Brauzerda",
            "Serverda",
            "Ikkalasida",
            "Faqat JavaScript'da"
          ],
          "correct": 1,
          "explanation": "PHP server tomonida bajariladi. Brauzer faqat tayyor natijani oladi."
        },
        {
          "question": "PHP faylini ochishning to'g'ri usuli qaysi?",
          "options": [
            "Ikki marta bosish",
            "localhost orqali ochish",
            "Notepad'da ochish",
            "Brauzerga sudrab tashlash"
          ],
          "correct": 1,
          "explanation": "Server ishlashi kerak. Fayl localhost/fayl.php manzili orqali ochilishi lozim."
        }
      ],
      "order": 1
    },
    {
      "id": "php-2",
      "courseId": "php",
      "title": "O'zgaruvchilar, shartlar va tsikllar",
      "description": "Ma'lumot turlari, taqqoslash, if va takrorlanishlar",
      "type": "article",
      "content": "O'zgaruvchi $ belgisi bilan boshlanadi. PHP da tur yozish shart emas, u qiymatdan aniqlanadi.\n\n```php\n<?php\n$ism = \"Aziz\";     // matn (string)\n$yosh = 16;        // butun son (int)\n$ball = 4.5;       // o'nli son (float)\n$katta = true;     // mantiqiy qiymat (bool)\n?>\n```\n\n**Taqqoslash.** == faqat qiymatni solishtiradi, === esa qiymat va turning bir xilligini tekshiradi.\n\n```php\nvar_dump(5 == \"5\");   // true\nvar_dump(5 === \"5\");  // false\n```\n\n**Shart operatori.**\n\n```php\nif ($yosh >= 18) {\n    echo \"Katta\";\n} elseif ($yosh >= 14) {\n    echo \"O'smir\";\n} else {\n    echo \"Bola\";\n}\n```\n\n**Tsikllar.** for aniq sonlar uchun, while esa shart bajarilguncha ishlatiladi.\n\n```php\nfor ($i = 1; $i <= 5; $i++) {\n    echo \"Qator $i<br>\";\n}\n\n$n = 3;\nwhile ($n > 0) {\n    echo \"Qolgan: $n<br>\";\n    $n--;\n}\n```\n\n**Eslatma.** Qo'shtirnoq ichida $ism o'zgaruvchi qiymati bilan almashinadi. Bitta tirnoq ichida esa u matn sifatida chiqadi.",
      "questions": [
        {
          "question": "$yosh = 16 bo'lsa, $yosh qaysi turda?",
          "options": [
            "string",
            "int",
            "float",
            "bool"
          ],
          "correct": 1,
          "explanation": "16 — butun son, shuning uchun int."
        },
        {
          "question": "5 == '5' natijasi nima?",
          "options": [
            "true",
            "false",
            "Xato",
            "null"
          ],
          "correct": 0,
          "explanation": "== faqat qiymatni solishtiradi. === esa tur ham bir xil bo'lishini talab qiladi."
        }
      ],
      "order": 2
    },
    {
      "id": "php-3",
      "courseId": "php",
      "title": "Massivlar va funksiyalar",
      "description": "Indeksli va assotsiativ massivlar, foreach, funksiyalar",
      "type": "article",
      "content": "Massiv bir nechta qiymatni bitta o'zgaruvchida saqlaydi.\n\n**Indeksli massiv.** Indeks 0 dan boshlanadi.\n\n```php\n$baholar = [5, 4, 3];\necho $baholar[0];        // 5\necho count($baholar);    // 3\n```\n\n**Assotsiativ massiv.** Elementlar kalit so'z orqali olinadi.\n\n```php\n$talaba = [\"ism\" => \"Aziz\", \"sinf\" => \"10-A\"];\necho $talaba[\"ism\"];     // Aziz\n```\n\n**foreach.** Massivning barcha elementlarini aylanib chiqadi.\n\n```php\nforeach ($talaba as $kalit => $qiymat) {\n    echo \"$kalit: $qiymat<br>\";\n}\n```\n\n**Funksiya.** Takrorlanadigan ishni bir nom ostida jamlaydi. return natijani qaytaradi.\n\n```php\nfunction ortacha($royxat) {\n    return array_sum($royxat) / count($royxat);\n}\n\necho ortacha([5, 4, 3]);  // 4\n```\n\n**Loyiha 1: «Baholar kalkulyatori».** Kamida 5 talabaning ismi va 3 tadan bahosi bor massiv yarating. O'rtacha ballni hisoblovchi funksiya yozing. Ballga qarab reyting chiqaring: 4.5 va undan yuqori «a'lo», 3.5 dan yuqori «yaxshi», qolgani «qoniqarli». Natijani HTML jadvalida ko'rsating va CSS bilan bezang.",
      "questions": [
        {
          "question": "$m = [10, 20, 30] bo'lsa, $m[1] nechaga teng?",
          "options": [
            "10",
            "20",
            "30",
            "1"
          ],
          "correct": 1,
          "explanation": "Indeks 0 dan boshlanadi: $m[0] = 10, $m[1] = 20."
        },
        {
          "question": "return ishlatilmagan funksiya nima qaytaradi?",
          "options": [
            "0",
            "Matn",
            "null",
            "false"
          ],
          "correct": 2,
          "explanation": "return bo'lmasa funksiya null qaytaradi."
        }
      ],
      "order": 3
    },
    {
      "id": "php-4",
      "courseId": "php",
      "title": "Formalar va validatsiya",
      "description": "$_POST, tekshirish va xavfsiz chiqarish",
      "type": "article",
      "content": "HTML forma ma'lumotni serverga yuboradi. Usul method atributida belgilanadi. Parollar va shaxsiy ma'lumotlar uchun method=\"post\" ishlatiladi. Ma'lumot PHP da $_POST massivida keladi.\n\n```php\n<form method=\"post\">\n  <input type=\"text\" name=\"ism\" placeholder=\"Ismingiz\">\n  <input type=\"email\" name=\"email\" placeholder=\"E-pochta\">\n  <button type=\"submit\">Yuborish</button>\n</form>\n```\n\n**Qabul qilish va tekshirish.**\n\n```php\n<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    $ism   = trim($_POST[\"ism\"] ?? \"\");\n    $email = trim($_POST[\"email\"] ?? \"\");\n\n    if ($ism === \"\") {\n        echo \"Ismni kiriting.\";\n    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {\n        echo \"E-pochta noto'g'ri.\";\n    } else {\n        echo \"Salom, \" . htmlspecialchars($ism);\n    }\n}\n?>\n```\n\n**Asosiy qoidalar.**\n- Har doim ma'lumotni tekshiring: trim() bo'sh joylarni olib tashlaydi, filter_var() formatni tekshiradi.\n- ?? operatori kalit mavjud bo'lmasa bo'sh qiymat beradi, shuning uchun xato chiqmaydi.\n- Ekranga chiqarishdan oldin htmlspecialchars() ishlating. Aks holda foydalanuvchi zararli HTML yoki skript kiritishi mumkin.\n\n**Loyiha uchun eslatma.** Keyingi darslarda shu forma ma'lumotni bazaga saqlaydi.",
      "questions": [
        {
          "question": "htmlspecialchars() nima uchun ishlatiladi?",
          "options": [
            "Tezlikni oshirish uchun",
            "Zararli HTML va skriptning oldini olish",
            "Sanani formatlash uchun",
            "Faylni yuklash uchun"
          ],
          "correct": 1,
          "explanation": "U < > \" ' kabi belgilarni xavfsiz matnga aylantiradi."
        },
        {
          "question": "E-pochta formatini tekshiruvchi funksiya qaysi?",
          "options": [
            "trim()",
            "strlen()",
            "filter_var()",
            "isset()"
          ],
          "correct": 2,
          "explanation": "filter_var($email, FILTER_VALIDATE_EMAIL) e-pochta formatini tekshiradi."
        }
      ],
      "order": 4
    },
    {
      "id": "php-5",
      "courseId": "php",
      "title": "MySQL va PDO",
      "description": "Jadval yaratish, PDO ulanishi va yozuvlarni o'qish",
      "type": "article",
      "content": "MySQL ma'lumotlarni jadvallarda saqlaydi. PHP unga PDO (PHP Data Objects) orqali ulanadi. PDO turli ma'lumotlar bazalari bilan bir xil usulda ishlaydi.\n\n**1-qadam: baza va jadval (phpMyAdmin'da).**\n\n```sql\nCREATE DATABASE kutubxona CHARACTER SET utf8mb4;\nUSE kutubxona;\n\nCREATE TABLE kitoblar (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  nomi VARCHAR(150) NOT NULL,\n  muallif VARCHAR(100) NOT NULL,\n  nashr_yili INT\n);\n\nINSERT INTO kitoblar (nomi, muallif, nashr_yili)\nVALUES ('O''tkan kunlar', 'Abdulla Qodiriy', 1926);\n```\n\n**2-qadam: ulanish (db.php).**\n\n```php\n<?php\ntry {\n    $pdo = new PDO(\n        \"mysql:host=localhost;dbname=kutubxona;charset=utf8mb4\",\n        \"root\",\n        \"\"\n    );\n    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n} catch (PDOException $e) {\n    die(\"Bazaga ulanib bo'lmadi.\");\n}\n?>\n```\n\n**3-qadam: o'qish.** fetchAll() barcha qatorlarni massiv sifatida qaytaradi.\n\n```php\n<?php\nrequire \"db.php\";\n\n$kitoblar = $pdo->query(\"SELECT * FROM kitoblar ORDER BY nomi\")->fetchAll(PDO::FETCH_ASSOC);\n\nforeach ($kitoblar as $k) {\n    echo htmlspecialchars($k[\"nomi\"]) . \" — \" . htmlspecialchars($k[\"muallif\"]) . \"<br>\";\n}\n?>\n```\n\n**Muhim.** ATTR_ERRMODE ni ERRMODE_EXCEPTION qilib qo'yish xatolarni aniq ko'rsatadi. XAMPP'da MySQL yoqilgan bo'lishi kerak.",
      "questions": [
        {
          "question": "PDO nima?",
          "options": [
            "CSS kutubxonasi",
            "PHP ning ma'lumotlar bazasi bilan ishlash interfeysi",
            "Server dasturi",
            "Dizayn shabloni"
          ],
          "correct": 1,
          "explanation": "PDO turli bazalar bilan bir xil usulda ishlash imkonini beradi."
        },
        {
          "question": "XAMPP'da MySQL uchun standart foydalanuvchi nomi qaysi?",
          "options": [
            "admin",
            "root",
            "mysql",
            "user"
          ],
          "correct": 1,
          "explanation": "XAMPP'da standart foydalanuvchi root, parol odatda bo'sh."
        }
      ],
      "order": 5
    },
    {
      "id": "php-6",
      "courseId": "php",
      "title": "CRUD amallari",
      "description": "Qo'shish, o'qish, tahrirlash va o'chirish",
      "type": "article",
      "content": "CRUD — Create (qo'shish), Read (o'qish), Update (yangilash), Delete (o'chirish). Foydalanuvchi kiritgan qiymatlar SQL matniga to'g'ridan-to'g'ri qo'shilmaydi. Ular tayyorlangan so'rov (prepare) va ? belgilari orqali uzatiladi.\n\n**Qo'shish (Create):**\n\n```php\n$stmt = $pdo->prepare(\"INSERT INTO kitoblar (nomi, muallif, nashr_yili) VALUES (?, ?, ?)\");\n$stmt->execute([$_POST[\"nomi\"], $_POST[\"muallif\"], (int)$_POST[\"nashr_yili\"]]);\n```\n\n**Tahrirlash (Update):**\n\n```php\n$stmt = $pdo->prepare(\"UPDATE kitoblar SET nomi = ?, muallif = ? WHERE id = ?\");\n$stmt->execute([$_POST[\"nomi\"], $_POST[\"muallif\"], (int)$_POST[\"id\"]]);\n```\n\n**O'chirish (Delete):**\n\n```php\n$stmt = $pdo->prepare(\"DELETE FROM kitoblar WHERE id = ?\");\n$stmt->execute([(int)$_GET[\"id\"]]);\n```\n\n**Qidiruv:** LIKE bilan, foydalanuvchi matni tayyorlangan so'rov orqali uzatiladi.\n\n```php\n$stmt = $pdo->prepare(\"SELECT * FROM kitoblar WHERE nomi LIKE ?\");\n$stmt->execute([\"%\" . $_GET[\"q\"] . \"%\"]);\n$natija = $stmt->fetchAll(PDO::FETCH_ASSOC);\n```\n\n**Diqqat.** UPDATE va DELETE da WHERE shart bo'lishi kerak. WHERE bo'lmasa barcha yozuvlar o'zgaradi yoki o'chadi.\n\n**Loyiha 2: «Maktab kutubxonasi».** Kitoblar ro'yxatini ko'rsating, yangi kitob qo'shish formasini yarating, har bir kitobni tahrirlash va o'chirish imkoniyatini qo'shing, nomi bo'yicha qidiruv qiling. Barcha so'rovlar tayyorlangan shaklda bo'lsin.",
      "questions": [
        {
          "question": "Qaysi so'rov yozuvni o'chiradi?",
          "options": [
            "SELECT",
            "INSERT",
            "UPDATE",
            "DELETE"
          ],
          "correct": 3,
          "explanation": "DELETE jadvaldan yozuvlarni o'chiradi."
        },
        {
          "question": "WHERE shartisiz UPDATE nima qiladi?",
          "options": [
            "Hech narsa",
            "Faqat birinchi yozuvni",
            "Barcha yozuvlarni o'zgartiradi",
            "Doim xato beradi"
          ],
          "correct": 2,
          "explanation": "WHERE bo'lmasa UPDATE jadvaldagi barcha qatorlarga ta'sir qiladi."
        }
      ],
      "order": 6
    },
    {
      "id": "php-7",
      "courseId": "php",
      "title": "Ro'yxatdan o'tish va kirish",
      "description": "Parol xeshlash, sessiya va chiqish",
      "type": "article",
      "content": "Parolni matn ko'rinishida saqlash mumkin emas. password_hash() parolni qaytarib bo'lmaydigan xeshga aylantiradi, password_verify() esa kiritilgan parolni xesh bilan solishtiradi.\n\n**Jadval:**\n\n```sql\nCREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  email VARCHAR(100) NOT NULL UNIQUE,\n  parol VARCHAR(255) NOT NULL\n);\n```\n\n**Ro'yxatdan o'tish:**\n\n```php\n<?php\nrequire \"db.php\";\n$hash = password_hash($_POST[\"parol\"], PASSWORD_DEFAULT);\n$stmt = $pdo->prepare(\"INSERT INTO users (email, parol) VALUES (?, ?)\");\n$stmt->execute([$_POST[\"email\"], $hash]);\n?>\n```\n\n**Kirish:**\n\n```php\n<?php\nsession_start();\nrequire \"db.php\";\n\n$stmt = $pdo->prepare(\"SELECT * FROM users WHERE email = ?\");\n$stmt->execute([$_POST[\"email\"]]);\n$user = $stmt->fetch(PDO::FETCH_ASSOC);\n\nif ($user && password_verify($_POST[\"parol\"], $user[\"parol\"])) {\n    $_SESSION[\"user_id\"] = $user[\"id\"];\n    echo \"Xush kelibsiz!\";\n} else {\n    echo \"E-pochta yoki parol noto'g'ri.\";\n}\n?>\n```\n\n**Sessiya.** session_start() sahifaning eng boshida, har qanday chiqarishdan oldin chaqiriladi. Chiqish uchun session_destroy() ishlatiladi.\n\n**Himoyalangan sahifa.** Tizimga kirmagan foydalanuvchini yo'naltiring va exit yozing, aks holda kod davom etadi:\n\n```php\nsession_start();\nif (!isset($_SESSION[\"user_id\"])) {\n    header(\"Location: login.php\");\n    exit;\n}\n```",
      "questions": [
        {
          "question": "Parol xeshlash uchun qaysi funksiya ishlatiladi?",
          "options": [
            "strlen()",
            "password_hash()",
            "trim()",
            "echo"
          ],
          "correct": 1,
          "explanation": "password_hash() xavfsiz xesh yaratadi, password_verify() esa tekshiradi."
        },
        {
          "question": "session_start() qayerda chaqiriladi?",
          "options": [
            "Sahifa oxirida",
            "Har qanday chiqarishdan oldin, boshida",
            "Faqat chiqishda",
            "Ixtiyoriy joyda"
          ],
          "correct": 1,
          "explanation": "Sessiya ma'lumoti sarlavha yuborilishidan oldin boshlanishi kerak."
        }
      ],
      "order": 7
    },
    {
      "id": "php-8",
      "courseId": "php",
      "title": "Xavfsizlik va joylashtirish",
      "description": "SQL-inyeksiya, XSS va saytni hostingga chiqarish",
      "type": "article",
      "content": "Eng keng tarqalgan xavflar: SQL-inyeksiya va XSS.\n\n**SQL-inyeksiya.** Foydalanuvchi kiritgan matn SQL buyrug'iga aylanishi mumkin.\n\n```php\n// XAVFLI\n$pdo->query(\"SELECT * FROM users WHERE email = '$email'\");\n// email sifatida ' OR '1'='1 kiritilsa, barcha foydalanuvchilar chiqadi.\n\n// XAVFSIZ\n$stmt = $pdo->prepare(\"SELECT * FROM users WHERE email = ?\");\n$stmt->execute([$email]);\n```\n\n**XSS.** Zararli skript boshqa foydalanuvchilar ekraniga chiqarilishi mumkin. Har doim htmlspecialchars() bilan chiqaring:\n\n```php\necho htmlspecialchars($matn, ENT_QUOTES, \"UTF-8\");\n```\n\n**Maxfiy ma'lumotlar.** Baza parolini va boshqa kalitlarni alohida config.php faylida saqlang va uni Git'ga yubormang.\n\n**Joylashtirish (hosting).**\n1. Bepul hosting tanlang (masalan, InfinityFree).\n2. Hosting panelida baza yarating.\n3. Fayllarni FTP orqali yuklang.\n4. db.php dagi ulanish ma'lumotlarini hostingdagisiga almashtiring.\n5. Hostingda xatolarni foydalanuvchiga ko'rsatishni o'chiring:\n\n```php\nini_set(\"display_errors\", \"0\");\n```\n\n**Loyiha 3: «Sinf e'lonlar taxtasi».** Foydalanuvchilar ro'yxatdan o'tadi va tizimga kiradi. Faqat tizimga kirganlar e'lon qo'shadi. Har bir foydalanuvchi faqat o'z e'lonini tahrirlaydi va o'chiradi: so'rovda user_id sharti bo'lsin. Barcha so'rovlar tayyorlangan shaklda, ilova hostingga joylashtirilgan bo'lsin.",
      "questions": [
        {
          "question": "SQL-inyeksiyadan qaysi usul himoya qiladi?",
          "options": [
            "Tayyorlangan so'rovlar (prepare)",
            "Katta harflar ishlatish",
            "Faylni yashirish",
            "Parolni uzun qilish"
          ],
          "correct": 0,
          "explanation": "prepare() va ? belgilari foydalanuvchi matnini SQL kodidan ajratadi."
        },
        {
          "question": "Hostingga chiqarishda nima o'chiriladi?",
          "options": [
            "Fayllar",
            "Xatolarni foydalanuvchiga ko'rsatish",
            "Sessiya",
            "Formalar"
          ],
          "correct": 1,
          "explanation": "Xabarlar foydalanuvchiga ko'rinsa, tizim tuzilishi haqida ma'lumot oshkor bo'ladi."
        }
      ],
      "order": 8
    }
  ]
};