export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  duration: string;
  description: string;
  content: string;
  order: number;
  type: "video" | "article" | "quiz";
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
  topics: string[];
  lessons: Lesson[];
}

export const CATEGORIES = [
  "Barchasi",
  "Frontend",
  "Backend",
  "Design",
  "DevOps",
];

export const COURSES: Course[] = [
  {
    id: "web-basics",
    title: "HTML & CSS Asoslari",
    description:
      "Web dasturlashning poydevori — HTML va CSS ni noldan o'rganib, zamonaviy sahifalar yarating.",
    category: "Frontend",
    level: "Boshlang'ich",
    duration: "6 soat",
    lessonsCount: 12,
    image: "course-web-basics",
    color: "#FF7043",
    instructor: "Alisher Nazarov",
    rating: 4.9,
    studentsCount: 3241,
    topics: ["HTML tuzilmasi", "CSS styling", "Flexbox", "Grid", "Responsive"],
    lessons: [
      {
        id: "wb-1",
        courseId: "web-basics",
        title: "HTML nima?",
        duration: "8 daqiqa",
        description: "HTML ning asosiy tushunchalari va tarixi",
        content:
          "HTML (HyperText Markup Language) — veb sahifalarni yaratish uchun ishlatiladigan belgilash tili. Har bir sahifa HTML elementlaridan tashkil topgan bo'lib, brauzer ularni o'qib, foydalanuvchiga ko'rsatadi.\n\n**Asosiy tushunchalar:**\n- Tag — element nomi burchakli qavslar ichida: `<p>`\n- Attribute — elementga qo'shimcha ma'lumot beradi: `class=\"title\"`\n- Element — opening tag, content va closing tagdan iborat",
        order: 1,
        type: "article",
      },
      {
        id: "wb-2",
        courseId: "web-basics",
        title: "Birinchi sahifangiz",
        duration: "12 daqiqa",
        description: "DOCTYPE, html, head, body elementlari",
        content:
          "Har bir HTML sahifasi standart strukturaga ega bo'lishi kerak. DOCTYPE deklaratsiyasi brauzerga qaysi HTML versiyasidan foydalanilayotganini bildiradi.\n\n```html\n<!DOCTYPE html>\n<html lang=\"uz\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Mening sahifam</title>\n</head>\n<body>\n  <h1>Salom Dunyo!</h1>\n</body>\n</html>\n```",
        order: 2,
        type: "article",
      },
      {
        id: "wb-3",
        courseId: "web-basics",
        title: "Matn elementlari",
        duration: "10 daqiqa",
        description: "Sarlavhalar, paragraflar, ro'yxatlar",
        content:
          "HTML matn elementlari turli xil ma'lumotlarni ifodalash uchun ishlatiladi.\n\n**Sarlavhalar:** `<h1>` dan `<h6>` gacha\n**Paragraf:** `<p>` — matn bloklari uchun\n**Qalin:** `<strong>` yoki `<b>`\n**Kursiv:** `<em>` yoki `<i>`\n**Ro'yxat:** `<ul>` (o'qsiz) va `<ol>` (raqamli)",
        order: 3,
        type: "article",
      },
      {
        id: "wb-4",
        courseId: "web-basics",
        title: "Havolalar va rasmlar",
        duration: "9 daqiqa",
        description: "<a> va <img> elementlari",
        content:
          "Web sahifalarni bir-biriga bog'lash va vizual tarkib qo'shish uchun linklar va rasmlardan foydalanamiz.\n\n```html\n<!-- Havola -->\n<a href=\"https://google.com\">Google</a>\n\n<!-- Rasm -->\n<img src=\"rasm.jpg\" alt=\"Tavsif\" width=\"400\">\n```",
        order: 4,
        type: "article",
      },
      {
        id: "wb-5",
        courseId: "web-basics",
        title: "CSS bilan tanishuv",
        duration: "15 daqiqa",
        description: "CSS qanday ishlaydi, selektorlar",
        content:
          "CSS (Cascading Style Sheets) — HTML elementlarini bezash uchun ishlatiladi.\n\n**3 xil uslash usuli:**\n1. Inline: `<p style=\"color: red\">`\n2. Internal: `<style>` tegi ichida\n3. External: alohida `.css` fayl\n\n**Selektor turlari:**\n- Element: `p { color: blue }`\n- Class: `.title { font-size: 24px }`\n- ID: `#main { width: 100% }`",
        order: 5,
        type: "article",
      },
      {
        id: "wb-6",
        courseId: "web-basics",
        title: "Ranglar va o'lchamlar",
        duration: "11 daqiqa",
        description: "Color, font-size, margin, padding",
        content:
          "CSS da ranglar va o'lchamlarni turli xil usullarda berish mumkin.\n\n**Rang usullari:**\n- Named: `color: red`\n- HEX: `color: #FF0000`\n- RGB: `color: rgb(255, 0, 0)`\n- HSL: `color: hsl(0, 100%, 50%)`\n\n**O'lcham birliklari:**\n- `px` — piksel (mutlaq)\n- `%` — foiz (nisbiy)\n- `em` — ota elementga nisbatan\n- `rem` — root elementga nisbatan\n- `vw/vh` — viewport ga nisbatan",
        order: 6,
        type: "article",
      },
      {
        id: "wb-7",
        courseId: "web-basics",
        title: "Box Model",
        duration: "13 daqiqa",
        description: "Margin, padding, border, width/height",
        content:
          "CSS Box Model — har bir HTML element to'rtburchak quti sifatida ko'riladi.\n\n**Tarkibiy qismlar (ichidan tashqariga):**\n1. Content — asosiy tarkib\n2. Padding — ichki bo'shliq\n3. Border — chegara\n4. Margin — tashqi bo'shliq\n\n```css\n.box {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid black;\n  margin: 10px;\n}\n```",
        order: 7,
        type: "article",
      },
      {
        id: "wb-8",
        courseId: "web-basics",
        title: "Flexbox",
        duration: "18 daqiqa",
        description: "Flexible Box Layout bilan elementlarni joylashtirish",
        content:
          "Flexbox — elementlarni qator yoki ustun bo'yicha joylashtirishning zamonaviy usuli.\n\n```css\n.container {\n  display: flex;\n  justify-content: center; /* gorizontal */\n  align-items: center;    /* vertikal */\n  gap: 16px;\n}\n```\n\n**Asosiy xususiyatlar:**\n- `flex-direction`: row | column\n- `justify-content`: start | center | end | space-between\n- `align-items`: start | center | end | stretch\n- `flex-wrap`: nowrap | wrap",
        order: 8,
        type: "article",
      },
      {
        id: "wb-9",
        courseId: "web-basics",
        title: "CSS Grid",
        duration: "20 daqiqa",
        description: "Grid Layout — ikki o'lchamli joylash tizimi",
        content:
          "CSS Grid — elementlarni qator VA ustunlar bo'yicha bir vaqtda joylashtirishga imkon beradi.\n\n```css\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto;\n  gap: 20px;\n}\n```",
        order: 9,
        type: "article",
      },
      {
        id: "wb-10",
        courseId: "web-basics",
        title: "Responsive Design",
        duration: "16 daqiqa",
        description: "Media queries va mobil qurilmalar uchun dizayn",
        content:
          "Responsive design — saytingiz barcha qurilmalarda (mobil, planshet, kompyuter) to'g'ri ko'rinishi uchun zarur.\n\n```css\n/* Mobil (default) */\n.card { width: 100%; }\n\n/* Planshet */\n@media (min-width: 768px) {\n  .card { width: 50%; }\n}\n\n/* Kompyuter */\n@media (min-width: 1024px) {\n  .card { width: 33.33%; }\n}\n```",
        order: 10,
        type: "article",
      },
      {
        id: "wb-11",
        courseId: "web-basics",
        title: "Animatsiyalar",
        duration: "14 daqiqa",
        description: "CSS transition va animation xususiyatlari",
        content:
          "CSS animatsiyalar saytingizni jonli va interaktiv qiladi.\n\n```css\n/* Transition */\n.btn {\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  transform: scale(1.05);\n  background: #4F8EF7;\n}\n\n/* Animation */\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n```",
        order: 11,
        type: "article",
      },
      {
        id: "wb-12",
        courseId: "web-basics",
        title: "Yakuniy loyiha",
        duration: "25 daqiqa",
        description: "Portfolio sahifasi yaratish",
        content:
          "Ushbu darsda o'rganganlaringizni birlashtirib, professional portfolio sahifasi yaratasiz.\n\n**Loyiha talablari:**\n- Responsive dizayn\n- Navigatsiya menyusi\n- Hero section\n- Loyihalar bo'limi\n- Bog'lanish formasi\n- Footer\n\nBu loyiha CV ga qo'shish uchun tayyor bo'ladi!",
        order: 12,
        type: "article",
      },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript Zamonaviy",
    description:
      "ES6+ dan async/await gacha — zamonaviy JavaScript ni chuqur o'rganing va interaktiv ilovalar yarating.",
    category: "Frontend",
    level: "O'rta",
    duration: "10 soat",
    lessonsCount: 15,
    image: null,
    color: "#F59E0B",
    instructor: "Sardor Umarov",
    rating: 4.8,
    studentsCount: 2876,
    topics: ["ES6+", "Closures", "Promises", "Async/Await", "DOM API"],
    lessons: [
      {
        id: "js-1",
        courseId: "javascript",
        title: "JavaScript ga kirish",
        duration: "10 daqiqa",
        description: "JS tarixi va imkoniyatlari",
        content:
          "JavaScript — brauzerda ishlaydigan yagona dasturlash tili bo'lib, hozirda server (Node.js), mobil (React Native) va desktop ilovalar uchun ham ishlatiladi.",
        order: 1,
        type: "article",
      },
      {
        id: "js-2",
        courseId: "javascript",
        title: "O'zgaruvchilar va ma'lumot turlari",
        duration: "12 daqiqa",
        description: "let, const, var; string, number, boolean",
        content:
          "JavaScript da o'zgaruvchilar `let`, `const`, `var` kalit so'zlari bilan e'lon qilinadi. Ma'lumot turlari: Number, String, Boolean, null, undefined, Object, Symbol.",
        order: 2,
        type: "article",
      },
      {
        id: "js-3",
        courseId: "javascript",
        title: "Funksiyalar",
        duration: "15 daqiqa",
        description: "Arrow functions, default parameters",
        content:
          "```js\n// Oddiy funksiya\nfunction greet(name) {\n  return `Salom, ${name}!`;\n}\n\n// Arrow funksiya\nconst greet = (name) => `Salom, ${name}!`;\n\n// Default parameter\nconst add = (a, b = 0) => a + b;\n```",
        order: 3,
        type: "article",
      },
      {
        id: "js-4",
        courseId: "javascript",
        title: "Massivlar va metodlar",
        duration: "18 daqiqa",
        description: "map, filter, reduce, find",
        content:
          "Massiv metodlari — ma'lumotlar bilan ishlashda eng ko'p ishlatiladigan vositalar.\n\n```js\nconst numbers = [1, 2, 3, 4, 5];\n\n// map — har bir elementni o'zgartirish\nconst doubled = numbers.map(n => n * 2); // [2,4,6,8,10]\n\n// filter — shart bo'yicha filtrlash\nconst evens = numbers.filter(n => n % 2 === 0); // [2,4]\n\n// reduce — bitta qiymatga qisqartirish\nconst sum = numbers.reduce((acc, n) => acc + n, 0); // 15\n```",
        order: 4,
        type: "article",
      },
      {
        id: "js-5",
        courseId: "javascript",
        title: "Ob'ektlar va Destructuring",
        duration: "14 daqiqa",
        description: "Object syntax, spread, destructuring",
        content:
          "```js\nconst user = { name: 'Ali', age: 25 };\n\n// Destructuring\nconst { name, age } = user;\n\n// Spread\nconst updated = { ...user, age: 26 };\n\n// Computed keys\nconst key = 'email';\nconst obj = { [key]: 'ali@email.com' };\n```",
        order: 5,
        type: "article",
      },
      {
        id: "js-6",
        courseId: "javascript",
        title: "Closures va Scope",
        duration: "16 daqiqa",
        description: "Lexical scope, closure nima?",
        content:
          "Closure — funksiya o'zi yaratilgan muhitdagi o'zgaruvchilarga kirishini saqlab qoladi.\n\n```js\nfunction counter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    value: () => count\n  };\n}\n\nconst c = counter();\nc.increment(); // 1\nc.increment(); // 2\nc.value();     // 2\n```",
        order: 6,
        type: "article",
      },
      {
        id: "js-7",
        courseId: "javascript",
        title: "Promises",
        duration: "20 daqiqa",
        description: "Async operatsiyalar, .then, .catch",
        content:
          "Promise — kelajakda bajarilishi yoki xato berishi mumkin bo'lgan operatsiyani ifodalaydi.\n\n```js\nconst fetchData = () => new Promise((resolve, reject) => {\n  setTimeout(() => resolve({ data: 'Ma\\'lumot' }), 1000);\n});\n\nfetchData()\n  .then(result => console.log(result.data))\n  .catch(err => console.error(err));\n```",
        order: 7,
        type: "article",
      },
      {
        id: "js-8",
        courseId: "javascript",
        title: "Async/Await",
        duration: "15 daqiqa",
        description: "Zamonaviy async kod yozish",
        content:
          "async/await — Promise larni sinxron kodga o'xshash yozish imkonini beradi.\n\n```js\nasync function loadUser(id) {\n  try {\n    const response = await fetch(`/api/users/${id}`);\n    const user = await response.json();\n    return user;\n  } catch (error) {\n    console.error('Xato:', error);\n  }\n}\n```",
        order: 8,
        type: "article",
      },
      {
        id: "js-9",
        courseId: "javascript",
        title: "DOM bilan ishlash",
        duration: "18 daqiqa",
        description: "Element tanlash, o'zgartirish, event",
        content:
          "DOM (Document Object Model) — brauzer HTML ni ob'ektlar daraxti sifatida ifodalaydi.\n\n```js\n// Element tanlash\nconst btn = document.querySelector('#myBtn');\nconst items = document.querySelectorAll('.item');\n\n// O'zgartirish\nbtn.textContent = 'Yangi matn';\nbtn.style.color = 'blue';\n\n// Event\nbtn.addEventListener('click', () => {\n  alert('Bosildi!');\n});\n```",
        order: 9,
        type: "article",
      },
      {
        id: "js-10",
        courseId: "javascript",
        title: "LocalStorage va SessionStorage",
        duration: "12 daqiqa",
        description: "Brauzerda ma'lumot saqlash",
        content:
          "```js\n// Saqlash\nlocalStorage.setItem('user', JSON.stringify({ name: 'Ali' }));\n\n// O'qish\nconst user = JSON.parse(localStorage.getItem('user'));\n\n// O'chirish\nlocalStorage.removeItem('user');\nlocalStorage.clear();\n```",
        order: 10,
        type: "article",
      },
      {
        id: "js-11",
        courseId: "javascript",
        title: "Fetch API",
        duration: "16 daqiqa",
        description: "HTTP so'rovlar, REST API bilan ishlash",
        content:
          "```js\n// GET so'rov\nconst data = await fetch('https://api.example.com/posts')\n  .then(res => res.json());\n\n// POST so'rov\nawait fetch('/api/users', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ name: 'Ali', age: 25 })\n});\n```",
        order: 11,
        type: "article",
      },
      {
        id: "js-12",
        courseId: "javascript",
        title: "Error Handling",
        duration: "11 daqiqa",
        description: "try/catch, custom errors",
        content:
          "```js\nclass ValidationError extends Error {\n  constructor(message, field) {\n    super(message);\n    this.name = 'ValidationError';\n    this.field = field;\n  }\n}\n\ntry {\n  throw new ValidationError('Email noto\\'g\\'ri', 'email');\n} catch (e) {\n  if (e instanceof ValidationError) {\n    console.log(`${e.field}: ${e.message}`);\n  }\n}\n```",
        order: 12,
        type: "article",
      },
      {
        id: "js-13",
        courseId: "javascript",
        title: "Modullar",
        duration: "13 daqiqa",
        description: "import/export, ES Modules",
        content:
          "```js\n// math.js\nexport const add = (a, b) => a + b;\nexport const multiply = (a, b) => a * b;\nexport default class Calculator { ... }\n\n// main.js\nimport Calculator, { add, multiply } from './math.js';\nimport * as math from './math.js';\n```",
        order: 13,
        type: "article",
      },
      {
        id: "js-14",
        courseId: "javascript",
        title: "Classes va OOP",
        duration: "19 daqiqa",
        description: "Class, inheritance, encapsulation",
        content:
          "```js\nclass Animal {\n  #name; // private field\n  \n  constructor(name) {\n    this.#name = name;\n  }\n  \n  speak() {\n    return `${this.#name} gapiradi`;\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return `${super.speak()}: Hav hav!`;\n  }\n}\n```",
        order: 14,
        type: "article",
      },
      {
        id: "js-15",
        courseId: "javascript",
        title: "Yakuniy loyiha",
        duration: "30 daqiqa",
        description: "To-do ilovasi yaratish",
        content:
          "JavaScript da to'liq funksional To-do ilova yaratamiz.\n\n**Imkoniyatlar:**\n- Vazifa qo'shish\n- Bajarilgan deb belgilash\n- O'chirish\n- LocalStorage da saqlash\n- Filtrlash (barchasi/bajarilgan/bajarilmagan)",
        order: 15,
        type: "article",
      },
    ],
  },
  {
    id: "react",
    title: "React.js",
    description:
      "Facebook tomonidan yaratilgan eng mashhur frontend kutubxonasi — komponentlar, hooks va state boshqaruvi.",
    category: "Frontend",
    level: "O'rta",
    duration: "8 soat",
    lessonsCount: 10,
    image: "course-react",
    color: "#06B6D4",
    instructor: "Dilnoza Karimova",
    rating: 4.9,
    studentsCount: 1987,
    topics: ["Components", "Hooks", "State", "Context", "React Router"],
    lessons: [
      {
        id: "rc-1",
        courseId: "react",
        title: "React nima va nima uchun?",
        duration: "8 daqiqa",
        description: "Virtual DOM, komponent arxitekturasi",
        content:
          "React — UI yaratish uchun JavaScript kutubxonasi. Virtual DOM orqali faqat o'zgargan qismlarni yangilaydi, bu esa tezlikni oshiradi.",
        order: 1,
        type: "article",
      },
      {
        id: "rc-2",
        courseId: "react",
        title: "JSX sintaksisi",
        duration: "12 daqiqa",
        description: "HTML + JavaScript = JSX",
        content:
          "```jsx\nconst App = () => {\n  const name = 'Ali';\n  return (\n    <div className=\"container\">\n      <h1>Salom, {name}!</h1>\n      {name.length > 3 && <p>Uzun ism</p>}\n    </div>\n  );\n};\n```",
        order: 2,
        type: "article",
      },
      {
        id: "rc-3",
        courseId: "react",
        title: "Props",
        duration: "14 daqiqa",
        description: "Komponentga ma'lumot uzatish",
        content:
          "```jsx\nconst Button = ({ label, onClick, disabled = false }) => (\n  <button onClick={onClick} disabled={disabled}>\n    {label}\n  </button>\n);\n\n// Ishlatish\n<Button label=\"Yuborish\" onClick={() => console.log('click')} />\n```",
        order: 3,
        type: "article",
      },
      {
        id: "rc-4",
        courseId: "react",
        title: "useState Hook",
        duration: "16 daqiqa",
        description: "Komponent holati boshqaruvi",
        content:
          "```jsx\nimport { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>Hisob: {count}</p>\n      <button onClick={() => setCount(c => c + 1)}>+</button>\n      <button onClick={() => setCount(c => c - 1)}>-</button>\n    </div>\n  );\n};\n```",
        order: 4,
        type: "article",
      },
      {
        id: "rc-5",
        courseId: "react",
        title: "useEffect Hook",
        duration: "18 daqiqa",
        description: "Yon ta'sirlar, lifecycle",
        content:
          "```jsx\nconst UserProfile = ({ userId }) => {\n  const [user, setUser] = useState(null);\n  \n  useEffect(() => {\n    fetch(`/api/users/${userId}`)\n      .then(r => r.json())\n      .then(setUser);\n    \n    return () => { /* cleanup */ };\n  }, [userId]); // userId o'zgarganda qayta ishlaydi\n  \n  if (!user) return <p>Yuklanmoqda...</p>;\n  return <p>{user.name}</p>;\n};\n```",
        order: 5,
        type: "article",
      },
      {
        id: "rc-6",
        courseId: "react",
        title: "Context API",
        duration: "20 daqiqa",
        description: "Global state boshqaruvi",
        content:
          "```jsx\nconst ThemeContext = createContext('light');\n\nconst App = () => (\n  <ThemeContext.Provider value=\"dark\">\n    <Header />\n    <Main />\n  </ThemeContext.Provider>\n);\n\nconst Header = () => {\n  const theme = useContext(ThemeContext);\n  return <header className={theme}>...</header>;\n};\n```",
        order: 6,
        type: "article",
      },
      {
        id: "rc-7",
        courseId: "react",
        title: "React Router",
        duration: "22 daqiqa",
        description: "SPA navigatsiyasi",
        content:
          "```jsx\nimport { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nconst App = () => (\n  <BrowserRouter>\n    <nav>\n      <Link to=\"/\">Bosh sahifa</Link>\n      <Link to=\"/about\">Haqida</Link>\n    </nav>\n    <Routes>\n      <Route path=\"/\" element={<Home />} />\n      <Route path=\"/about\" element={<About />} />\n      <Route path=\"/user/:id\" element={<UserDetail />} />\n    </Routes>\n  </BrowserRouter>\n);\n```",
        order: 7,
        type: "article",
      },
      {
        id: "rc-8",
        courseId: "react",
        title: "Custom Hooks",
        duration: "17 daqiqa",
        description: "Mantiqni qayta ishlatish",
        content:
          "```jsx\nconst useLocalStorage = (key, initialValue) => {\n  const [value, setValue] = useState(() => {\n    const stored = localStorage.getItem(key);\n    return stored ? JSON.parse(stored) : initialValue;\n  });\n  \n  const setStoredValue = (newValue) => {\n    setValue(newValue);\n    localStorage.setItem(key, JSON.stringify(newValue));\n  };\n  \n  return [value, setStoredValue];\n};\n```",
        order: 8,
        type: "article",
      },
      {
        id: "rc-9",
        courseId: "react",
        title: "Performance Optimization",
        duration: "19 daqiqa",
        description: "memo, useMemo, useCallback",
        content:
          "```jsx\nimport { memo, useMemo, useCallback } from 'react';\n\n// Komponentni memoize qilish\nconst ExpensiveList = memo(({ items }) => (\n  <ul>{items.map(item => <li key={item.id}>{item.name}</li>)}</ul>\n));\n\n// Hisoblashni memoize qilish\nconst total = useMemo(() => items.reduce((s, i) => s + i.price, 0), [items]);\n\n// Callback ni memoize qilish\nconst handleClick = useCallback((id) => deleteItem(id), [deleteItem]);\n```",
        order: 9,
        type: "article",
      },
      {
        id: "rc-10",
        courseId: "react",
        title: "Yakuniy loyiha",
        duration: "35 daqiqa",
        description: "E-commerce sahifasi",
        content:
          "React bilan to'liq e-commerce fronend yaratamiz.\n\n**Tarkib:**\n- Mahsulotlar ro'yxati\n- Savatcha (Context API)\n- Mahsulot filteri\n- Qidirish\n- Mahsulot kartasi\n- React Router navigatsiya",
        order: 10,
        type: "article",
      },
    ],
  },
  {
    id: "nodejs",
    title: "Node.js & Backend",
    description:
      "Server tomoni dasturlash — Express.js, REST API, ma'lumotlar bazasi va autentifikatsiya.",
    category: "Backend",
    level: "O'rta",
    duration: "9 soat",
    lessonsCount: 8,
    image: "course-nodejs",
    color: "#22C55E",
    instructor: "Bobur Toshmatov",
    rating: 4.7,
    studentsCount: 1543,
    topics: ["Node.js", "Express.js", "REST API", "MongoDB", "JWT Auth"],
    lessons: [
      {
        id: "nd-1",
        courseId: "nodejs",
        title: "Node.js bilan tanishuv",
        duration: "10 daqiqa",
        description: "Node.js nima, event loop",
        content:
          "Node.js — Chrome V8 engine asosida qurilgan JavaScript runtime. Brauzerdan tashqarida JS kodi ishlatish imkonini beradi.\n\n**Xususiyatlar:**\n- Asinxron (non-blocking I/O)\n- Event-driven arxitektura\n- npm — dunyo eng katta paket reestri",
        order: 1,
        type: "article",
      },
      {
        id: "nd-2",
        courseId: "nodejs",
        title: "Express.js",
        duration: "18 daqiqa",
        description: "Web framework, routing, middleware",
        content:
          "```js\nconst express = require('express');\nconst app = express();\n\napp.use(express.json());\n\napp.get('/api/users', (req, res) => {\n  res.json({ users: [] });\n});\n\napp.post('/api/users', (req, res) => {\n  const { name } = req.body;\n  res.status(201).json({ id: 1, name });\n});\n\napp.listen(3000, () => console.log('Server ishlamoqda'));\n```",
        order: 2,
        type: "article",
      },
      {
        id: "nd-3",
        courseId: "nodejs",
        title: "REST API dizayn",
        duration: "15 daqiqa",
        description: "HTTP metodlar, status kodlar, URL tuzilmasi",
        content:
          "RESTful API — resurslar orqali muloqot qiluvchi veb arxitekturasi.\n\n**HTTP Metodlar:**\n- `GET` — ma'lumot olish\n- `POST` — yangi yaratish\n- `PUT/PATCH` — yangilash\n- `DELETE` — o'chirish\n\n**Status kodlar:**\n- `200` — Muvaffaqiyatli\n- `201` — Yaratildi\n- `400` — Noto'g'ri so'rov\n- `401` — Autentifikatsiya kerak\n- `404` — Topilmadi\n- `500` — Server xatosi",
        order: 3,
        type: "article",
      },
      {
        id: "nd-4",
        courseId: "nodejs",
        title: "MongoDB & Mongoose",
        duration: "22 daqiqa",
        description: "NoSQL ma'lumotlar bazasi",
        content:
          "```js\nconst mongoose = require('mongoose');\n\nconst userSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  email: { type: String, unique: true },\n  createdAt: { type: Date, default: Date.now }\n});\n\nconst User = mongoose.model('User', userSchema);\n\n// CRUD operatsiyalar\nawait User.create({ name: 'Ali', email: 'ali@mail.com' });\nconst users = await User.find();\nawait User.findByIdAndUpdate(id, { name: 'Vali' });\nawait User.findByIdAndDelete(id);\n```",
        order: 4,
        type: "article",
      },
      {
        id: "nd-5",
        courseId: "nodejs",
        title: "JWT Autentifikatsiya",
        duration: "20 daqiqa",
        description: "Foydalanuvchi autentifikatsiyasi va avtorizatsiyasi",
        content:
          "```js\nconst jwt = require('jsonwebtoken');\nconst bcrypt = require('bcrypt');\n\n// Login\napp.post('/auth/login', async (req, res) => {\n  const { email, password } = req.body;\n  const user = await User.findOne({ email });\n  \n  if (!user || !await bcrypt.compare(password, user.password)) {\n    return res.status(401).json({ error: 'Noto\\'g\\'ri login' });\n  }\n  \n  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {\n    expiresIn: '7d'\n  });\n  res.json({ token });\n});\n```",
        order: 5,
        type: "article",
      },
      {
        id: "nd-6",
        courseId: "nodejs",
        title: "Middleware",
        duration: "14 daqiqa",
        description: "Custom middleware, error handling",
        content:
          "```js\n// Auth middleware\nconst protect = async (req, res, next) => {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'Token kerak' });\n  \n  try {\n    const { userId } = jwt.verify(token, process.env.JWT_SECRET);\n    req.user = await User.findById(userId);\n    next();\n  } catch {\n    res.status(401).json({ error: 'Yaroqsiz token' });\n  }\n};\n\n// Himoyalangan route\napp.get('/api/profile', protect, (req, res) => {\n  res.json(req.user);\n});\n```",
        order: 6,
        type: "article",
      },
      {
        id: "nd-7",
        courseId: "nodejs",
        title: "Fayl yuklash",
        duration: "16 daqiqa",
        description: "Multer bilan fayllar yuklash",
        content:
          "```js\nconst multer = require('multer');\nconst storage = multer.diskStorage({\n  destination: './uploads/',\n  filename: (req, file, cb) => {\n    cb(null, Date.now() + '-' + file.originalname);\n  }\n});\n\nconst upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });\n\napp.post('/upload', upload.single('file'), (req, res) => {\n  res.json({ filename: req.file.filename });\n});\n```",
        order: 7,
        type: "article",
      },
      {
        id: "nd-8",
        courseId: "nodejs",
        title: "Yakuniy loyiha",
        duration: "40 daqiqa",
        description: "To'liq REST API yaratish",
        content:
          "Blog uchun to'liq backend API yaratamiz.\n\n**Endpointlar:**\n- `POST /auth/register` — ro'yxatdan o'tish\n- `POST /auth/login` — kirish\n- `GET /api/posts` — maqolalar ro'yxati\n- `POST /api/posts` — yangi maqola (auth)\n- `GET /api/posts/:id` — bitta maqola\n- `PUT /api/posts/:id` — tahrirlash (auth)\n- `DELETE /api/posts/:id` — o'chirish (auth)",
        order: 8,
        type: "article",
      },
    ],
  },
  {
    id: "git",
    title: "Git & GitHub",
    description:
      "Har bir dasturchi uchun zarur — versiya nazorati, hamkorlik va open source dunyo.",
    category: "DevOps",
    level: "Boshlang'ich",
    duration: "3 soat",
    lessonsCount: 5,
    image: null,
    color: "#8B5CF6",
    instructor: "Jasur Raximov",
    rating: 4.8,
    studentsCount: 2156,
    topics: ["Git asoslari", "Branch", "Merge", "GitHub", "Pull Request"],
    lessons: [
      {
        id: "gt-1",
        courseId: "git",
        title: "Git nima?",
        duration: "8 daqiqa",
        description: "Versiya nazorat tizimi",
        content:
          "Git — fayllar o'zgarishlarini kuzatuvchi taqsimlangan versiya nazorat tizimi. Linus Torvalds tomonidan 2005 yilda yaratilgan.",
        order: 1,
        type: "article",
      },
      {
        id: "gt-2",
        courseId: "git",
        title: "Asosiy Git buyruqlari",
        duration: "20 daqiqa",
        description: "init, add, commit, status, log",
        content:
          "```bash\ngit init              # yangi repo\ngit status            # holat\ngit add .             # barcha fayllar\ngit commit -m 'Birinchi commit'\ngit log --oneline     # tarix\ngit diff              # o'zgarishlar\n```",
        order: 2,
        type: "article",
      },
      {
        id: "gt-3",
        courseId: "git",
        title: "Branch va Merge",
        duration: "22 daqiqa",
        description: "Parallel rivojlantirish",
        content:
          "```bash\ngit branch feature/login   # yangi branch\ngit checkout feature/login  # o'tish\ngit checkout -b hotfix      # yaratib o'tish\n\ngit merge feature/login     # birlashtirish\ngit branch -d feature/login # o'chirish\n```",
        order: 3,
        type: "article",
      },
      {
        id: "gt-4",
        courseId: "git",
        title: "GitHub bilan ishlash",
        duration: "18 daqiqa",
        description: "Remote repo, push, pull, clone",
        content:
          "```bash\ngit remote add origin https://github.com/user/repo.git\ngit push -u origin main\ngit pull origin main\ngit clone https://github.com/user/repo.git\n```",
        order: 4,
        type: "article",
      },
      {
        id: "gt-5",
        courseId: "git",
        title: "Pull Request va Code Review",
        duration: "15 daqiqa",
        description: "Jamoa bilan ishlash",
        content:
          "Pull Request — o'z o'zgarishlaringizni asosiy branchga qo'shish uchun so'rov.\n\n**Jarayon:**\n1. Fork yoki branch yaratish\n2. O'zgarishlar qilish\n3. Push qilish\n4. PR ochish\n5. Code review\n6. Merge qilish",
        order: 5,
        type: "article",
      },
    ],
  },
  {
    id: "responsive",
    title: "Responsive Design",
    description:
      "Barcha qurilmalarda chiroyli ko'rinadigan saytlar yaratish — Bootstrap, Tailwind va media queries.",
    category: "Design",
    level: "Boshlang'ich",
    duration: "4 soat",
    lessonsCount: 6,
    image: null,
    color: "#EC4899",
    instructor: "Nilufar Saidova",
    rating: 4.6,
    studentsCount: 987,
    topics: [
      "Mobile First",
      "Media Queries",
      "Bootstrap",
      "Tailwind CSS",
      "Breakpoints",
    ],
    lessons: [
      {
        id: "rd-1",
        courseId: "responsive",
        title: "Mobile First yondashuvi",
        duration: "12 daqiqa",
        description: "Nima uchun mobildan boshlaymiz",
        content:
          "Mobile First — avval mobil qurilmalar uchun dizayn qilish, so'ng kattaroq ekranlar uchun kengaytirish strategiyasi.",
        order: 1,
        type: "article",
      },
      {
        id: "rd-2",
        courseId: "responsive",
        title: "Media Queries",
        duration: "18 daqiqa",
        description: "Breakpointlar va shartli CSS",
        content:
          "```css\n/* Mobile (default) */\n.container { padding: 16px; }\n\n/* Tablet: 768px+ */\n@media (min-width: 768px) {\n  .container { padding: 32px; max-width: 768px; }\n}\n\n/* Desktop: 1024px+ */\n@media (min-width: 1024px) {\n  .container { padding: 48px; max-width: 1200px; }\n}\n```",
        order: 2,
        type: "article",
      },
      {
        id: "rd-3",
        courseId: "responsive",
        title: "Flexible Images",
        duration: "10 daqiqa",
        description: "Moslashuvchan rasmlar va media",
        content:
          "```css\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n.video-wrapper {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n.video-wrapper iframe {\n  position: absolute;\n  top: 0; left: 0;\n  width: 100%; height: 100%;\n}\n```",
        order: 3,
        type: "article",
      },
      {
        id: "rd-4",
        courseId: "responsive",
        title: "Bootstrap 5",
        duration: "25 daqiqa",
        description: "Grid tizimi, komponentlar",
        content:
          "Bootstrap — CSS framework bo'lib, tayyor komponentlar va grid tizimini taqdim etadi.\n\n```html\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-6 col-lg-4\">Karta</div>\n    <div class=\"col-12 col-md-6 col-lg-4\">Karta</div>\n    <div class=\"col-12 col-md-6 col-lg-4\">Karta</div>\n  </div>\n</div>\n```",
        order: 4,
        type: "article",
      },
      {
        id: "rd-5",
        courseId: "responsive",
        title: "Tailwind CSS",
        duration: "28 daqiqa",
        description: "Utility-first CSS framework",
        content:
          "```html\n<div class=\"flex flex-col md:flex-row gap-4 p-4 md:p-8\">\n  <div class=\"w-full md:w-1/2 lg:w-1/3 \n              bg-white rounded-xl shadow-md \n              p-6 hover:shadow-lg transition\">\n    Karta\n  </div>\n</div>\n```",
        order: 5,
        type: "article",
      },
      {
        id: "rd-6",
        courseId: "responsive",
        title: "Yakuniy loyiha",
        duration: "30 daqiqa",
        description: "Responsive portfolio yaratish",
        content:
          "Tailwind CSS yordamida to'liq responsive portfolio sayt yaratamiz — mobil, planshet va desktopda mukammal ko'rinadigan.",
        order: 6,
        type: "article",
      },
    ],
  },
];
