const BASE = `<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>*{box-sizing:border-box}body{font-family:system-ui,sans-serif;padding:16px;margin:0;font-size:15px}</style></head>`;

// Brauzer ichida o'zi ishlay olmaydigan kod: server, DOM elementlari, tashqi modullar, kiritish oynalari
const JS_NOT_RUNNABLE =
  /\b(require\s*\(|process\.|__dirname|module\.exports|document\.|window\.|localStorage|sessionStorage|fetch\s*\(|prompt\s*\(|confirm\s*\(|app\.(get|post|use|listen)\b|router\.|(res|req)\.\w)|^\s*(import|export)\s|\{ \.\.\. \}/m;

export function isRunnableCode(lang: string, code: string): boolean {
  const l = lang.toLowerCase();
  if (l === "html" || l === "css") return true;
  if (l === "js" || l === "javascript") return !JS_NOT_RUNNABLE.test(code);
  return false;
}

// CSS'dagi .class va #id selektorlari uchun namunaviy elementlar
function cssSamples(code: string): string {
  let selectors = code.replace(/\/\*[\s\S]*?\*\//g, "");
  let previous = "";
  while (previous !== selectors) {
    previous = selectors;
    selectors = selectors.replace(/\{[^{}]*\}/g, " ");
  }
  const names = new Set<string>();
  for (const m of selectors.matchAll(/[.#][a-zA-Z][\w-]*/g)) names.add(m[0]);
  return Array.from(names)
    .map((n) => {
      const attr = n[0] === "." ? "class" : "id";
      return `<div ${attr}="${n.slice(1)}" style="margin-top:12px">${n} element</div>`;
    })
    .join("");
}

export function buildHtml(code: string, lang: string): string {
  const l = lang.toLowerCase();
  if (l === "html") {
    if (code.includes("<!DOCTYPE") || code.includes("<html")) return code;
    return `${BASE}<body>${code}</body></html>`;
  }
  if (l === "css") {
    return `${BASE}<style>${code}</style><body><h1>Sarlavha</h1><p>Bu misol matn. Sizning CSS stilingiz shu yerda ko'rinadi.</p><button class="btn">Tugma</button><div class="box">Box element</div><a href="#">Havola</a>${cssSamples(code)}</body></html>`;
  }
  if (l === "js" || l === "javascript") {
    const payload = JSON.stringify(code).replace(/</g, "\\u003c");
    return `${BASE}<body><div id="out" style="background:#f4f4f4;padding:12px;border-radius:8px;font-family:monospace;font-size:13px;white-space:pre-wrap;min-height:40px"></div><script>
var out=document.getElementById('out');var lines=[];
function fmt(v){if(typeof v==='string')return v;try{var s=JSON.stringify(v);return s===undefined?String(v):s}catch(e){return String(v)}}
function log(){lines.push(Array.prototype.map.call(arguments,fmt).join(' '));out.textContent=lines.join('\\n')}
console.log=log;console.error=log;console.warn=log;console.info=log;console.table=log;window.alert=log;
function fail(e){log('Xato: '+(e&&e.message||e))}
function done(){if(!lines.length)out.textContent='Kod ishladi, natija chiqarilmadi'}
window.onerror=function(m){log('Xato: '+m)};
try{var AF=Object.getPrototypeOf(async function(){}).constructor;new AF(${payload})().then(done,fail)}catch(e){fail(e)}
<\/script></body></html>`;
  }
  return `${BASE}<body><pre style="overflow-x:auto">${code}</pre></body></html>`;
}
