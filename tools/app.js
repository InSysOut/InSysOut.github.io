/* InSysOut Labs — Dev Toolbox. Fully client-side. */
'use strict';

/* ---------- tiny DOM helper ---------- */
function h(tag, attrs, ...kids){
  const e=document.createElement(tag);
  if(attrs) for(const k in attrs){
    const v=attrs[k];
    if(k==='class') e.className=v;
    else if(k==='html') e.innerHTML=v;
    else if(k.slice(0,2)==='on') e.addEventListener(k.slice(2).toLowerCase(),v);
    else e.setAttribute(k,v);
  }
  for(const c of kids){ if(c==null||c===false) continue; e.append(c.nodeType?c:document.createTextNode(c)); }
  return e;
}
let LANG=document.documentElement.lang==='ar'?'ar':'en';
const AR={
/* categories */
'Crypto':'التشفير','Cipher':'الشيفرات','Converter':'المحوّلات','Text':'النص','Data':'البيانات','Web':'الويب','Network':'الشبكات','Math':'الرياضيات','Media':'الوسائط',
/* chrome */
'Search tools…':'…ابحث عن أداة','← All tools':'→ كل الأدوات','Copy':'نسخ','Copied ✓':'✓ تم النسخ',
/* tool names */
'Password Generator':'مولّد كلمات المرور','UUID Generator':'مولّد UUID','Hash & Checksum':'التجزئة والتحقق','HMAC':'HMAC',
'Morse Code':'شيفرة مورس','NATO Phonetic':'أبجدية الناتو الصوتية','Rotation Cipher':'شيفرة الإزاحة','XOR Cipher':'شيفرة XOR','Vigenère Cipher':'شيفرة فيجينير','Atbash Cipher':'شيفرة أتباش','A1Z26 Cipher':'شيفرة A1Z26',
'Base64':'Base64','Base Converter':'محوّل الأساس','Color Converter':'محوّل الألوان','Case Converter':'محوّل حالة الأحرف','Roman Numerals':'الأرقام الرومانية','Temperature':'درجة الحرارة','Date & Timestamp':'التاريخ والطابع الزمني','Char Code Converter':'محوّل رموز الأحرف','Unit Converter':'محوّل الوحدات',
'Text Statistics':'إحصائيات النص','Lorem Ipsum':'نص وهمي','Reverse Text':'عكس النص','Line Tools':'أدوات الأسطر','Find & Replace':'بحث واستبدال','Text Diff':'مقارنة النصوص',
'CSV ↔ JSON':'CSV ↔ JSON','Random Numbers':'أرقام عشوائية','Set Operations':'عمليات المجموعات',
'URL Encode / Decode':'ترميز/فك URL','URL Parser':'محلّل URL','HTML Entities':'كيانات HTML','JWT Parser':'محلّل JWT','Slugify':'تحويل إلى Slug','Basic Auth':'مصادقة أساسية','JSON Formatter':'منسّق JSON','Defang / Fang':'تحييد/استعادة الروابط','Data Extractor':'مستخرج البيانات',
'IPv4 Subnet':'شبكة IPv4 الفرعية',
'Math Evaluator':'مُقيّم رياضي','Percentage':'النسبة المئوية',"Ohm's Law":'قانون أوم','Prime Numbers':'الأعداد الأولية','Number Stats':'إحصائيات الأرقام','Bitwise Ops':'عمليات البتات',
'QR Code':'رمز QR','Image Converter':'محوّل الصور',
/* descriptions */
'Strong random tokens & passwords':'رموز وكلمات مرور عشوائية قوية','RFC 4122 v4 identifiers':'معرّفات RFC 4122 الإصدار 4','MD2/4/5 · CRC32 · RIPEMD · SHA · Whirlpool':'MD2/4/5 · CRC32 · RIPEMD · SHA · Whirlpool','Keyed hash (SHA-1/256/384/512)':'تجزئة بمفتاح (SHA-1/256/384/512)',
'Text ↔ Morse':'نص ↔ مورس','Spell text with the NATO alphabet':'تهجئة النص بأبجدية الناتو','ROT13 · ROT47 · Caesar shift':'ROT13 · ROT47 · إزاحة قيصر','XOR bytes with a key → hex':'XOR للبايتات بمفتاح ← ست عشري','Keyword cipher encode / decode':'تشفير/فك بكلمة مفتاحية','Mirror-alphabet substitution':'استبدال بأبجدية معكوسة','Letters ↔ numbers (a=1…z=26)':'حروف ↔ أرقام (a=1…z=26)',
'Encode / decode text (UTF-8 safe)':'ترميز/فك النص (يدعم UTF-8)','Bin · Oct · Dec · Hex · 32 · 36':'ثنائي · ثماني · عشري · ست عشري · 32 · 36','HEX ↔ RGB ↔ HSL':'HEX ↔ RGB ↔ HSL','camel, snake, kebab, Title…':'camel، snake، kebab، Title…','Arabic ↔ Roman (1–3999)':'عربي ↔ روماني (1–3999)','Celsius · Fahrenheit · Kelvin':'مئوية · فهرنهايت · كلفن','Unix ↔ human-readable date':'يونكس ↔ تاريخ مقروء','Text ↔ hex · binary · octal · decimal':'نص ↔ ست عشري · ثنائي · ثماني · عشري','Distance · area · mass · speed · data':'مسافة · مساحة · كتلة · سرعة · بيانات',
'Chars, words, lines, reading time':'أحرف، كلمات، أسطر، زمن القراءة','Placeholder text generator':'مولّد نص بديل','Reverse characters, words, or lines':'عكس الأحرف أو الكلمات أو الأسطر','Sort, dedupe, shuffle, number lines':'ترتيب، إزالة تكرار، خلط، ترقيم','Plain or regex, with flags':'نص عادي أو تعبير نمطي، مع أعلام','Line-by-line differences':'الفروق سطراً بسطر',
'Convert between CSV and JSON':'التحويل بين CSV وJSON','Random integers in a range':'أعداد صحيحة عشوائية ضمن نطاق','Union · intersection · difference of lists':'اتحاد · تقاطع · فرق القوائم',
'Percent-encoding for URLs':'ترميز النسبة المئوية للروابط','Break a URL into its parts':'تفكيك الرابط إلى أجزائه','Escape / unescape HTML':'ترميز/فك HTML','Decode header & payload (no verify)':'فك الترويسة والحمولة (بدون تحقق)','Make URL-friendly slugs':'إنشاء روابط ودّية','Build an Authorization header':'إنشاء ترويسة Authorization','Prettify · minify · validate':'تجميل · تصغير · تحقق','Neutralise or restore URLs & IPs':'تحييد أو استعادة الروابط وعناوين IP','Pull IPs, emails, URLs, hashes from text':'استخراج عناوين IP والبريد والروابط والتجزئات',
'CIDR → network, mask, host range':'CIDR ← الشبكة والقناع ونطاق المضيفين',
'Evaluate expressions safely':'تقييم التعابير بأمان','Three common percent calculations':'ثلاث حسابات شائعة للنسبة','Solve V · I · R · P from any two':'أوجد V · I · R · P من أي قيمتين','Check N or list primes':'تحقق من N أو اسرد الأولية','Sum, mean, median, min/max, σ':'مجموع، متوسط، وسيط، أدنى/أقصى، σ','AND · OR · XOR · NOT · shifts':'AND · OR · XOR · NOT · إزاحات',
'Generate a scannable QR code':'إنشاء رمز QR قابل للمسح','Resize · convert · grayscale · invert':'تغيير حجم · تحويل · تدرّج رمادي · عكس',
/* buttons */
'Encode':'ترميز','Decode':'فك','Generate':'توليد','Regenerate':'إعادة التوليد','Solve':'حل','Clear':'مسح','Convert':'تحويل','Escape':'ترميز','Unescape':'فك الترميز','Prettify':'تجميل','Minify':'تصغير','Validate':'تحقق','Download':'تنزيل','Download PNG':'تنزيل PNG','Text → Codes':'نص ← رموز','Codes → Text':'رموز ← نص','Text → Morse':'نص ← مورس','Morse → Text':'مورس ← نص','Encode →':'ترميز ←','← Decode':'→ فك','Sort A→Z':'ترتيب أ←ي','Sort Z→A':'ترتيب ي←أ','Unique':'إزالة التكرار','Reverse':'عكس','Shuffle':'خلط','Remove blanks':'حذف الفراغات','Number':'ترقيم','Trim':'تشذيب','Union':'اتحاد','Intersection':'تقاطع','Symmetric':'متماثل','Defang':'تحييد','Fang':'استعادة',
/* field labels */
'Length':'الطول','Input':'المدخل','How many':'العدد','Message':'الرسالة','Key':'المفتاح','Algorithm':'الخوارزمية','Value':'القيمة','From base':'من الأساس','Base':'الأساس','Category':'الفئة','From':'من','To':'إلى','Roman':'روماني','Date & time':'التاريخ والوقت','URL':'الرابط','Token':'الرمز','Username':'اسم المستخدم','Password':'كلمة المرور','Keyword':'الكلمة المفتاحية','Set A':'المجموعة أ','Set B':'المجموعة ب','Find':'بحث','Replace':'استبدال','Replace with':'استبدال بـ','Original':'الأصل','Changed':'المعدّل','Mode':'الوضع','Shift':'الإزاحة','Key type':'نوع المفتاح','Content':'المحتوى','Image':'الصورة','Max width':'أقصى عرض','Format':'الصيغة','Min':'الأدنى','Max':'الأقصى','Count':'العدد','Reverse by':'عكس حسب','Extract':'استخراج','Indent':'الإزاحة','Input base':'أساس الإدخال',
/* select options + checkboxes */
'Hex':'ست عشري','Binary':'ثنائي','Octal':'ثماني','Decimal':'عشري','Characters':'أحرف','Words':'كلمات','Lines':'أسطر','Distance':'مسافة','Area':'مساحة','Mass':'كتلة','Speed':'سرعة','Regex':'تعبير نمطي','Ignore case':'تجاهل الحالة','Unique only':'فريدة فقط','Grayscale':'تدرّج رمادي','Invert':'عكس',
/* hints */
'Supports + - * / % ^, sqrt, sin, cos, log, pi, e…':'يدعم + - * / % ^، sqrt، sin، cos، log، pi، e…','XOR is symmetric — output is hex of the XORed bytes.':'XOR متماثل — الناتج ست عشري للبايتات المُشفَّرة.','MD4/5, CRC32, RIPEMD-160 & Whirlpool load once from CDN.':'تُحمَّل MD4/5 وCRC32 وRIPEMD-160 وWhirlpool مرة واحدة من CDN.','Choose an image — nothing is uploaded, all local.':'اختر صورة — لا يُرفع أي شيء، المعالجة محلية بالكامل.','Enter any two values, then Solve.':'أدخل أي قيمتين ثم اضغط حل.'
};
const T=s=>(LANG==='ar'&&s!=null&&AR[s]!==undefined)?AR[s]:s;
const inp=(ph,type='text')=>h('input',{class:'in',type,placeholder:ph?T(ph):''});
const ta =(ph,rows=4)=>h('textarea',{class:'in',rows,placeholder:ph?T(ph):''});
const sel=(opts,val)=>{const s=h('select',{class:'in'});opts.forEach(([v,n])=>s.append(h('option',{value:v},T(n))));if(val!=null)s.value=val;return s;};
const btn=(label,cls='btn',on)=>h('button',{class:cls,onClick:on},T(label));
const field=(label,node,hint)=>h('label',{class:'fld'},h('span',{class:'lbl'},T(label)),node,hint?h('span',{class:'hint'},T(hint)):null);
function copyBtn(get){
  const b=h('button',{class:'copy',onClick:async()=>{try{await navigator.clipboard.writeText(get());b.textContent=T('Copied ✓');setTimeout(()=>b.textContent=T('Copy'),1200);}catch(e){}}},T('Copy'));
  return b;
}
function outBox(){
  const pre=h('div',{class:'out'});
  const wrap=h('div',{class:'outwrap'},pre,copyBtn(()=>pre.textContent));
  return {wrap,set:(v,err)=>{pre.textContent=v==null?'':String(v);pre.classList.toggle('err',!!err);}};
}
function kvBox(){
  const box=h('div',{class:'kv'});
  return {box,set:pairs=>{box.innerHTML='';pairs.forEach(([k,v])=>{const s=String(v);
    box.append(h('div',{class:'kv-k'},k),h('div',{class:'kv-vr'},h('div',{class:'kv-v mono'},s),copyBtn(()=>s)));});}};
}
const round=(x,n=4)=>Math.round(x*10**n)/10**n;
const b64enc=s=>btoa(String.fromCharCode(...new TextEncoder().encode(s)));
const b64dec=s=>new TextDecoder().decode(Uint8Array.from(atob(s),c=>c.charCodeAt(0)));
function md2(str){const S=[41,46,67,201,162,216,124,1,61,54,84,161,236,240,6,19,98,167,5,243,192,199,115,140,152,147,43,217,188,76,130,202,30,155,87,60,253,212,224,22,103,66,111,24,138,23,229,18,190,78,196,214,218,158,222,73,160,251,245,142,187,47,238,122,169,104,121,145,21,178,7,63,148,194,16,137,11,34,95,33,128,127,93,154,90,144,50,39,53,62,204,231,191,247,151,3,255,25,48,179,72,165,181,209,215,94,146,42,172,86,170,198,79,184,56,210,150,164,125,182,118,252,107,226,156,116,4,241,69,157,112,89,100,113,135,32,134,91,207,101,230,45,168,2,27,96,37,173,174,176,185,246,28,70,97,105,52,64,126,15,85,71,163,35,221,81,175,58,195,92,249,206,186,197,234,38,44,83,13,110,133,40,132,9,211,223,205,244,65,129,77,82,106,220,55,200,108,193,171,250,36,225,123,8,12,189,177,74,120,136,149,139,227,99,232,109,233,203,213,254,59,0,29,57,242,239,183,14,102,88,208,228,166,119,114,248,235,117,75,10,49,68,80,180,143,237,31,26,219,153,141,51,159,17,131,20];
  let m=[...new TextEncoder().encode(str)];const pad=16-(m.length%16);for(let i=0;i<pad;i++)m.push(pad);
  const c=new Array(16).fill(0),x=new Array(48).fill(0);let L=0;
  for(let i=0;i<m.length/16;i++)for(let j=0;j<16;j++){c[j]^=S[m[i*16+j]^L];L=c[j];}
  m=m.concat(c);
  for(let i=0;i<m.length/16;i++){for(let j=0;j<16;j++){x[16+j]=m[i*16+j];x[32+j]=x[16+j]^x[j];}
    let t=0;for(let j=0;j<18;j++){for(let k=0;k<48;k++){x[k]^=S[t];t=x[k];}t=(t+j)&255;}}
  return x.slice(0,16).map(b=>b.toString(16).padStart(2,'0')).join('');}

/* =================== TOOLS =================== */
const CRYPTO='Crypto',CONV='Converter',WEB='Web',TEXT='Text',DEV='Development',NET='Network',MATH='Math',CIPHER='Cipher',DATA='Data',MEDIA='Media';

const TOOLS=[
/* --- Crypto --- */
{id:'password',cat:CRYPTO,name:'Password Generator',desc:'Strong random tokens & passwords',render(r){
  const len=h('input',{class:'in',type:'range',min:6,max:64,value:20}),val=h('span',{class:'mono'},'20');
  const opt={lower:true,upper:true,digits:true,symbols:false};
  const checks=[['lower','a-z'],['upper','A-Z'],['digits','0-9'],['symbols','!@#$%']].map(([k,l])=>{
    const cb=h('input',{type:'checkbox'});cb.checked=opt[k];cb.onchange=()=>{opt[k]=cb.checked;gen();};
    return h('label',{class:'chk'},cb,l);});
  const out=outBox();
  function gen(){let set='';if(opt.lower)set+='abcdefghijklmnopqrstuvwxyz';if(opt.upper)set+='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(opt.digits)set+='0123456789';if(opt.symbols)set+='!@#$%^&*()-_=+[]{};:,.<>?';
    if(!set){out.set('Pick at least one character set',1);return;}
    const n=+len.value,a=new Uint32Array(n);crypto.getRandomValues(a);
    let s='';for(let i=0;i<n;i++)s+=set[a[i]%set.length];out.set(s);}
  len.oninput=()=>{val.textContent=len.value;gen();};
  r.append(field('Length',h('div',{class:'row'},len,val)),h('div',{class:'checks'},...checks),
    h('div',{class:'btns'},btn('Regenerate','btn',gen)),out.wrap);gen();
}},
{id:'uuid',cat:CRYPTO,name:'UUID Generator',desc:'RFC 4122 v4 identifiers',render(r){
  const cnt=inp('Count','number');cnt.value=5;const out=outBox();
  function gen(){const n=Math.min(Math.max(+cnt.value||1,1),1000);let s='';for(let i=0;i<n;i++)s+=crypto.randomUUID()+'\n';out.set(s.trim());}
  cnt.oninput=gen;r.append(field('How many',cnt),h('div',{class:'btns'},btn('Generate','btn',gen)),out.wrap);gen();
}},
{id:'hash',cat:CRYPTO,name:'Hash & Checksum',desc:'MD2/4/5 · CRC32 · RIPEMD · SHA · Whirlpool',render(r){
  const t=ta('Text to hash…');const kv=kvBox();
  const hx=b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('');
  async function go(){const s=t.value,data=new TextEncoder().encode(s),H=window.hashwasm,rows=[['MD2',md2(s)]];
    if(H){try{rows.push(['MD4',await H.md4(s)],['MD5',await H.md5(s)],['CRC32',await H.crc32(s)],['RIPEMD-160',await H.ripemd160(s)]);}catch(e){}}
    for(const a of ['SHA-1','SHA-256','SHA-384','SHA-512'])rows.push([a,hx(await crypto.subtle.digest(a,data))]);
    if(H){try{rows.push(['Whirlpool',await H.whirlpool(s)]);}catch(e){}}
    kv.set(rows);}
  t.oninput=go;r.append(field('Input',t),kv.box,h('div',{class:'hint'},'MD4/5, CRC32, RIPEMD-160 & Whirlpool load once from CDN.'));go();
}},

/* --- Converter --- */
{id:'base64',cat:CONV,name:'Base64',desc:'Encode / decode text (UTF-8 safe)',render(r){
  const t=ta('Text or Base64…');const out=outBox();
  r.append(field('Input',t),h('div',{class:'btns'},
    btn('Encode →','btn',()=>{try{out.set(b64enc(t.value));}catch(e){out.set(e.message,1);}}),
    btn('← Decode','btn ghost',()=>{try{out.set(b64dec(t.value.trim()));}catch(e){out.set('Invalid Base64',1);}})),out.wrap);
}},
{id:'base',cat:CONV,name:'Base Converter',desc:'Bin · Oct · Dec · Hex · 32 · 36',render(r){
  const v=inp('Value');const from=sel([['2','Binary (2)'],['8','Octal (8)'],['10','Decimal (10)'],['16','Hex (16)']],'10');
  const kv=kvBox();
  function go(){const n=parseInt((v.value||'').trim(),+from.value);if(isNaN(n)){kv.set([]);return;}
    kv.set([['Binary',n.toString(2)],['Octal',n.toString(8)],['Decimal',n.toString(10)],
      ['Hex',n.toString(16).toUpperCase()],['Base32',n.toString(32)],['Base36',n.toString(36)]]);}
  v.oninput=go;from.onchange=go;r.append(field('Input',v),field('From base',from),kv.box);
}},
{id:'color',cat:CONV,name:'Color Converter',desc:'HEX ↔ RGB ↔ HSL',render(r){
  const pick=h('input',{type:'color',class:'in',value:'#4d7cff',style:'height:46px;padding:4px'});
  const hex=inp('#4d7cff');hex.value='#4d7cff';const kv=kvBox();
  function fromHex(x){let s=x.replace('#','').trim();if(s.length===3)s=s.split('').map(c=>c+c).join('');
    if(!/^[0-9a-f]{6}$/i.test(s)){kv.set([]);return;}const n=parseInt(s,16),R=(n>>16)&255,G=(n>>8)&255,B=n&255;
    const[H,S,L]=rgbToHsl(R,G,B);pick.value='#'+s.toLowerCase();
    kv.set([['HEX','#'+s.toUpperCase()],['RGB',`rgb(${R}, ${G}, ${B})`],['HSL',`hsl(${H}, ${S}%, ${L}%)`]]);}
  function rgbToHsl(r,g,b){r/=255;g/=255;b/=255;const mx=Math.max(r,g,b),mn=Math.min(r,g,b);let H,S,L=(mx+mn)/2;
    if(mx===mn){H=S=0;}else{const d=mx-mn;S=L>.5?d/(2-mx-mn):d/(mx+mn);
      H=mx===r?(g-b)/d+(g<b?6:0):mx===g?(b-r)/d+2:(r-g)/d+4;H/=6;}
    return[Math.round(H*360),Math.round(S*100),Math.round(L*100)];}
  pick.oninput=()=>{hex.value=pick.value;fromHex(pick.value);};hex.oninput=()=>fromHex(hex.value);
  r.append(field('Pick',pick),field('HEX',hex),kv.box);fromHex('#4d7cff');
}},
{id:'case',cat:CONV,name:'Case Converter',desc:'camel, snake, kebab, Title…',render(r){
  const t=ta('Some text to transform');const kv=kvBox();
  const wd=s=>(s.match(/[A-Z]{2,}(?=[A-Z][a-z]|\b)|[A-Z]?[a-z]+|[A-Z]+|[0-9]+/g)||[]).map(x=>x.toLowerCase());
  function go(){const w=wd(t.value);const cap=x=>x.charAt(0).toUpperCase()+x.slice(1);
    kv.set([['camelCase',w.map((x,i)=>i?cap(x):x).join('')],['PascalCase',w.map(cap).join('')],
      ['snake_case',w.join('_')],['CONSTANT_CASE',w.join('_').toUpperCase()],['kebab-case',w.join('-')],
      ['Title Case',w.map(cap).join(' ')],['Sentence case',w.length?cap(w.join(' ')):''],
      ['lower',t.value.toLowerCase()],['UPPER',t.value.toUpperCase()]]);}
  t.oninput=go;r.append(field('Input',t),kv.box);
}},
{id:'roman',cat:CONV,name:'Roman Numerals',desc:'Arabic ↔ Roman (1–3999)',render(r){
  const num=inp('e.g. 2026','number'),rom=inp('e.g. MMXXVI');const M=[[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
  const val={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  num.oninput=()=>{let n=+num.value;if(!n||n<1||n>3999){rom.value='';return;}let s='';for(const[v,x]of M)while(n>=v){s+=x;n-=v;}rom.value=s;};
  rom.oninput=()=>{const s=rom.value.toUpperCase();let n=0,p=0,ok=s.length>0;for(let i=s.length-1;i>=0;i--){const v=val[s[i]];if(!v){ok=false;break;}v<p?n-=v:(n+=v,p=v);}num.value=ok?n:'';};
  r.append(field('Number',num),field('Roman',rom));
}},
{id:'temp',cat:CONV,name:'Temperature',desc:'Celsius · Fahrenheit · Kelvin',render(r){
  const c=inp('','number'),f=inp('','number'),k=inp('','number');
  const set=cv=>{c.value=round(cv,2);f.value=round(cv*9/5+32,2);k.value=round(cv+273.15,2);};
  c.oninput=()=>c.value!==''&&set(+c.value);f.oninput=()=>f.value!==''&&set((+f.value-32)*5/9);k.oninput=()=>k.value!==''&&set(+k.value-273.15);
  r.append(field('Celsius (°C)',c),field('Fahrenheit (°F)',f),field('Kelvin (K)',k));set(20);
}},
{id:'date',cat:CONV,name:'Date & Timestamp',desc:'Unix ↔ human-readable date',render(r){
  const u=inp('Unix seconds','number');u.value=Math.floor(Date.now()/1000);
  const d=h('input',{class:'in',type:'datetime-local'});const kv=kvBox();
  const rel=x=>{const s=(x.getTime()-Date.now())/1000,a=Math.abs(s),U=[[31536000,'year'],[2592000,'month'],[86400,'day'],[3600,'hour'],[60,'minute'],[1,'second']];
    for(const[se,n]of U)if(a>=se)return new Intl.RelativeTimeFormat('en').format(Math.round(s/se),n);return 'just now';};
  const show=x=>{kv.set([['ISO 8601',x.toISOString()],['UTC',x.toUTCString()],['Local',x.toString().replace(/ \(.*\)/,'')],
    ['Unix (s)',Math.floor(x.getTime()/1000)],['Unix (ms)',x.getTime()],['Relative',rel(x)]]);
    const off=x.getTimezoneOffset();d.value=new Date(x.getTime()-off*6e4).toISOString().slice(0,16);};
  u.oninput=()=>{const s=parseInt(u.value,10);if(!isNaN(s))show(new Date(s*1000));};
  d.oninput=()=>{const x=new Date(d.value);if(!isNaN(x)){u.value=Math.floor(x.getTime()/1000);show(x);}};
  r.append(field('Unix timestamp (seconds)',u),field('Date & time',d),kv.box);u.oninput();
}},

/* --- Web --- */
{id:'urlcode',cat:WEB,name:'URL Encode / Decode',desc:'Percent-encoding for URLs',render(r){
  const t=ta('Text or encoded URL…');const out=outBox();
  r.append(field('Input',t),h('div',{class:'btns'},
    btn('Encode','btn',()=>{try{out.set(encodeURIComponent(t.value));}catch(e){out.set(e.message,1);}}),
    btn('Decode','btn ghost',()=>{try{out.set(decodeURIComponent(t.value));}catch(e){out.set('Malformed input',1);}})),out.wrap);
}},
{id:'urlparse',cat:WEB,name:'URL Parser',desc:'Break a URL into its parts',render(r){
  const u=inp('https://user@host:8080/a/b?x=1&y=2#top');u.value='https://insysout.com/tools?ref=labs&v=1#top';
  const kv=kvBox();
  function go(){try{const x=new URL(u.value);const q=[...x.searchParams].map(([k,v])=>`${k} = ${v}`).join('\n')||'—';
    kv.set([['Protocol',x.protocol],['Host',x.host],['Hostname',x.hostname],['Port',x.port||'(default)'],
      ['Path',x.pathname],['Query',x.search||'—'],['Params',q],['Hash',x.hash||'—']]);}catch(e){kv.set([['Error','Invalid URL']]);}}
  u.oninput=go;r.append(field('URL',u),kv.box);go();
}},
{id:'html',cat:WEB,name:'HTML Entities',desc:'Escape / unescape HTML',render(r){
  const t=ta('<b>Hello & "world"</b>');const out=outBox();
  const enc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const dec=s=>{const e=h('textarea');e.innerHTML=s;return e.value;};
  r.append(field('Input',t),h('div',{class:'btns'},
    btn('Escape','btn',()=>out.set(enc(t.value))),btn('Unescape','btn ghost',()=>out.set(dec(t.value)))),out.wrap);
}},
{id:'jwt',cat:WEB,name:'JWT Parser',desc:'Decode header & payload (no verify)',render(r){
  const t=ta('Paste a JWT (eyJ...)');const kv=kvBox();
  const d=s=>{s=s.replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';return new TextDecoder().decode(Uint8Array.from(atob(s),c=>c.charCodeAt(0)));};
  function go(){const p=t.value.trim().split('.');if(p.length<2){kv.set([]);return;}
    try{const hd=JSON.parse(d(p[0])),pl=JSON.parse(d(p[1]));const rows=[['Header',JSON.stringify(hd,null,2)],['Payload',JSON.stringify(pl,null,2)]];
      ['iat','exp','nbf'].forEach(k=>{if(pl[k])rows.push([k+' →',new Date(pl[k]*1000).toUTCString()]);});kv.set(rows);}
    catch(e){kv.set([['Error','Invalid JWT']]);}}
  t.oninput=go;r.append(field('Token',t),kv.box);
}},
{id:'slug',cat:WEB,name:'Slugify',desc:'Make URL-friendly slugs',render(r){
  const t=inp('My Awesome Post Title!');const out=outBox();
  const go=()=>out.set(t.value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,''));
  t.oninput=go;r.append(field('Text',t),out.wrap);go();
}},
{id:'basicauth',cat:WEB,name:'Basic Auth',desc:'Build an Authorization header',render(r){
  const u=inp('username'),p=inp('password');const out=outBox();
  const go=()=>out.set('Authorization: Basic '+b64enc(`${u.value}:${p.value}`));
  u.oninput=go;p.oninput=go;r.append(field('Username',u),field('Password',p),out.wrap);go();
}},

/* --- Text --- */
{id:'stats',cat:TEXT,name:'Text Statistics',desc:'Chars, words, lines, reading time',render(r){
  const t=ta('Paste text here…');const kv=kvBox();
  function go(){const s=t.value,words=(s.match(/\S+/g)||[]).length;
    kv.set([['Characters',s.length],['Characters (no spaces)',s.replace(/\s/g,'').length],['Words',words],
      ['Lines',s?s.split(/\r?\n/).length:0],['Sentences',(s.match(/[.!?]+/g)||[]).length],
      ['Reading time',Math.ceil(words/200)+' min']]);}
  t.oninput=go;r.append(field('Input',t),kv.box);go();
}},
{id:'lorem',cat:TEXT,name:'Lorem Ipsum',desc:'Placeholder text generator',render(r){
  const W='lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat'.split(' ');
  const cnt=inp('Paragraphs','number');cnt.value=3;const out=outBox();
  const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));const pick=()=>W[rnd(0,W.length-1)];
  function sent(){let n=rnd(6,14),s=[];for(let i=0;i<n;i++)s.push(pick());s[0]=s[0][0].toUpperCase()+s[0].slice(1);return s.join(' ')+'.';}
  function go(){const n=Math.min(Math.max(+cnt.value||1,1),50);let o=[];for(let i=0;i<n;i++){let p=[];for(let j=0;j<rnd(3,6);j++)p.push(sent());o.push(p.join(' '));}out.set(o.join('\n\n'));}
  cnt.oninput=go;r.append(field('Paragraphs',cnt),h('div',{class:'btns'},btn('Generate','btn',go)),out.wrap);go();
}},

/* --- Development --- */
{id:'json',cat:WEB,name:'JSON Formatter',desc:'Prettify · minify · validate',render(r){
  const t=ta('{"hello":"world","n":[1,2,3]}');const ind=sel([['2','2 spaces'],['4','4 spaces'],['\t','Tab']],'2');const out=outBox();
  const parse=()=>JSON.parse(t.value);
  r.append(field('JSON',t),field('Indent',ind),h('div',{class:'btns'},
    btn('Prettify','btn',()=>{try{out.set(JSON.stringify(parse(),null,ind.value==='\t'?'\t':+ind.value));}catch(e){out.set(e.message,1);}}),
    btn('Minify','btn ghost',()=>{try{out.set(JSON.stringify(parse()));}catch(e){out.set(e.message,1);}}),
    btn('Validate','btn ghost',()=>{try{parse();out.set('✓ Valid JSON');}catch(e){out.set('✗ '+e.message,1);}})),out.wrap);
}},
{id:'qr',cat:MEDIA,name:'QR Code',desc:'Generate a scannable QR code',render(r){
  const t=ta('Text or URL to encode',2);t.value='https://insysout.com';
  const box=h('div',{id:'qr'});let qr=null;
  function go(){box.innerHTML='';if(!t.value.trim())return;
    if(window.QRCode)qr=new QRCode(box,{text:t.value,width:220,height:220,colorDark:'#0b1024',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.M});
    else box.append(h('div',{class:'hint'},'QR library not loaded (offline). Reconnect once to cache it.'));}
  function dl(){const img=box.querySelector('img')||box.querySelector('canvas');if(!img)return;
    const url=img.tagName==='IMG'?img.src:img.toDataURL('image/png');const a=h('a',{href:url,download:'qrcode.png'});a.click();}
  t.oninput=go;r.append(field('Content',t),h('div',{class:'btns'},btn('Download PNG','btn ghost',dl)),box);go();
}},

/* --- Network --- */
{id:'subnet',cat:NET,name:'IPv4 Subnet',desc:'CIDR → network, mask, host range',render(r){
  const c=inp('192.168.1.10/24');c.value='192.168.1.10/24';const kv=kvBox();
  const toIp=n=>[24,16,8,0].map(s=>(n>>>s)&255).join('.');
  function go(){const m=(c.value||'').trim().match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)\/(\d+)$/);
    if(!m){kv.set([['Error','Use IP/CIDR, e.g. 10.0.0.0/24']]);return;}
    const bits=+m[5];if(bits<0||bits>32){kv.set([['Error','Prefix 0–32']]);return;}
    const ip=(((+m[1])<<24)|((+m[2])<<16)|((+m[3])<<8)|(+m[4]))>>>0;
    const mask=bits===0?0:(0xFFFFFFFF<<(32-bits))>>>0;const net=(ip&mask)>>>0,bc=(net|(~mask>>>0))>>>0;
    const total=2**(32-bits),hosts=bits>=31?total:total-2;
    kv.set([['Network',toIp(net)],['Broadcast',toIp(bc)],['Netmask',toIp(mask)],['Wildcard',toIp(~mask>>>0)],
      ['First host',toIp(bits>=31?net:net+1)],['Last host',toIp(bits>=31?bc:bc-1)],
      ['Usable hosts',hosts.toLocaleString()],['CIDR','/'+bits]]);}
  c.oninput=go;r.append(field('IP / CIDR',c),kv.box);go();
}},

/* --- Math --- */
{id:'math',cat:MATH,name:'Math Evaluator',desc:'Evaluate expressions safely',render(r){
  const t=inp('sqrt(16) + 2^10 * pi');const out=outBox();
  function ev(x){let e=x.replace(/\^/g,'**').replace(/\bpi\b/gi,'(Math.PI)').replace(/\be\b/gi,'(Math.E)')
      .replace(/\b(sqrt|sin|cos|tan|log|abs|round|floor|ceil|exp|min|max|pow)\b/gi,m=>'Math.'+m.toLowerCase());
    if(/[A-Za-z]/.test(e.replace(/Math\.[A-Za-z]+/g,'')))throw 0;
    const v=Function('"use strict";return('+e+')')();if(typeof v!=='number'||!isFinite(v))throw 0;return v;}
  const go=()=>{try{out.set(ev(t.value));}catch(e){out.set('Invalid expression',1);}};
  t.oninput=go;r.append(field('Expression',t,'Supports + - * / % ^, sqrt, sin, cos, log, pi, e…'),out.wrap);go();
}},
{id:'percent',cat:MATH,name:'Percentage',desc:'Three common percent calculations',render(r){
  const mk=(la,lb,fn)=>{const a=inp('','number'),b=inp('','number'),o=outBox();
    const go=()=>{if(a.value===''||b.value===''){o.set('');return;}o.set(fn(+a.value,+b.value));};
    a.oninput=go;b.oninput=go;return h('div',{class:'fld'},h('div',{class:'row'},field(la,a),field(lb,b)),o.wrap);};
  r.append(
    mk('What is X%','of Y',(x,y)=>round(x/100*y,4)),
    mk('X','is what % of Y',(x,y)=>y?round(x/y*100,4)+' %':'∞'),
    mk('% change from A','to B',(a,b)=>a?round((b-a)/a*100,4)+' %':'∞'));
}},
{id:'ohm',cat:MATH,name:"Ohm's Law",desc:'Solve V · I · R · P from any two',render(r){
  const V=inp('Volts','number'),I=inp('Amps','number'),R=inp('Ohms','number'),P=inp('Watts','number');
  const note=h('div',{class:'hint'},'Enter any two values, then Solve.');
  function solve(){let v=+V.value||null,i=+I.value||null,rr=+R.value||null,p=+P.value||null;
    if([v,i,rr,p].filter(x=>x!=null).length<2){note.textContent='Enter at least two values.';return;}
    if(v==null)v=(i!=null&&rr!=null)?i*rr:(p!=null&&i!=null)?p/i:(p!=null&&rr!=null)?Math.sqrt(p*rr):null;
    if(i==null)i=(v!=null&&rr!=null)?v/rr:(p!=null&&v!=null)?p/v:(p!=null&&rr!=null)?Math.sqrt(p/rr):null;
    if(rr==null)rr=(v!=null&&i!=null)?v/i:(v!=null&&p!=null)?v*v/p:(p!=null&&i!=null)?p/(i*i):null;
    if(p==null&&v!=null&&i!=null)p=v*i;
    V.value=round(v,4);I.value=round(i,4);R.value=round(rr,4);P.value=round(p,4);note.textContent='Solved ✓';}
  r.append(h('div',{class:'row'},field('Voltage (V)',V),field('Current (A)',I)),h('div',{class:'row'},field('Resistance (Ω)',R),field('Power (W)',P)),
    h('div',{class:'btns'},btn('Solve','btn',solve),btn('Clear','btn ghost',()=>{[V,I,R,P].forEach(e=>e.value='');note.textContent='Enter any two values, then Solve.';})),note);
}},
{id:'prime',cat:MATH,name:'Prime Numbers',desc:'Check N or list primes',render(r){
  const n=inp('Number / limit','number');n.value=100;const mode=sel([['upto','Primes up to N'],['first','First N primes'],['check','Is N prime?']],'upto');const out=outBox();
  const isP=x=>{if(x<2)return false;for(let i=2;i*i<=x;i++)if(x%i===0)return false;return true;};
  function go(){const N=+n.value|0;if(mode.value==='check'){out.set(isP(N)?N+' is prime ✓':N+' is not prime');return;}
    const res=[];let x=2;while(mode.value==='first'?res.length<Math.min(N,100000):x<=N){if(isP(x))res.push(x);if(++x>2e6)break;}out.set(res.join(', ')||'(none)');}
  n.oninput=go;mode.onchange=go;r.append(field('N',n),field('Mode',mode),out.wrap);go();
}},

{id:'charcode',cat:CONV,name:'Char Code Converter',desc:'Text ↔ hex · binary · octal · decimal',render(r){
  const t=ta('Text or codes…');const base=sel([['16','Hex'],['2','Binary'],['8','Octal'],['10','Decimal']],'16');const out=outBox();
  const enc=()=>out.set([...t.value].map(c=>c.codePointAt(0).toString(+base.value)).join(' '));
  const dec=()=>{try{out.set(t.value.trim().split(/\s+/).filter(Boolean).map(x=>String.fromCodePoint(parseInt(x,+base.value))).join(''));}catch(e){out.set('Invalid input',1);}};
  base.onchange=enc;r.append(field('Input',t),field('Base',base),h('div',{class:'btns'},btn('Text → Codes','btn',enc),btn('Codes → Text','btn ghost',dec)),out.wrap);
}},
{id:'morse',cat:CIPHER,name:'Morse Code',desc:'Text ↔ Morse',render(r){
  const M={A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',I:'..',J:'.---',K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',Q:'--.-',R:'.-.',S:'...',T:'-',U:'..-',V:'...-',W:'.--',X:'-..-',Y:'-.--',Z:'--..','0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.','.':'.-.-.-',',':'--..--','?':'..--..','/':'-..-.','@':'.--.-.','-':'-....-'};
  const RV=Object.fromEntries(Object.entries(M).map(([k,v])=>[v,k]));const t=ta('Text or morse…');const out=outBox();
  const enc=()=>out.set([...t.value.toUpperCase()].map(c=>c===' '?'/':M[c]||'').filter(Boolean).join(' '));
  const dec=()=>out.set(t.value.trim().split(' ').map(x=>x==='/'?' ':RV[x]||'').join(''));
  r.append(field('Input',t),h('div',{class:'btns'},btn('Text → Morse','btn',enc),btn('Morse → Text','btn ghost',dec)),out.wrap);
}},
{id:'nato',cat:CIPHER,name:'NATO Phonetic',desc:'Spell text with the NATO alphabet',render(r){
  const N={A:'Alfa',B:'Bravo',C:'Charlie',D:'Delta',E:'Echo',F:'Foxtrot',G:'Golf',H:'Hotel',I:'India',J:'Juliett',K:'Kilo',L:'Lima',M:'Mike',N:'November',O:'Oscar',P:'Papa',Q:'Quebec',R:'Romeo',S:'Sierra',T:'Tango',U:'Uniform',V:'Victor',W:'Whiskey',X:'Xray',Y:'Yankee',Z:'Zulu'};
  const t=ta('Text…');t.value='InSysOut';const out=outBox();
  const go=()=>out.set([...t.value.toUpperCase()].map(c=>N[c]||(/[0-9]/.test(c)?c:c===' '?'|':'')).filter(Boolean).join(' '));
  t.oninput=go;r.append(field('Input',t),out.wrap);go();
}},

{id:'hmac',cat:CRYPTO,name:'HMAC',desc:'Keyed hash (SHA-1/256/384/512)',render(r){
  const t=ta('Message…');const key=inp('Secret key');const alg=sel([['SHA-256','SHA-256'],['SHA-1','SHA-1'],['SHA-384','SHA-384'],['SHA-512','SHA-512']],'SHA-256');const out=outBox();
  async function go(){try{const k=await crypto.subtle.importKey('raw',new TextEncoder().encode(key.value),{name:'HMAC',hash:alg.value},false,['sign']);
    const s=await crypto.subtle.sign('HMAC',k,new TextEncoder().encode(t.value));
    out.set([...new Uint8Array(s)].map(b=>b.toString(16).padStart(2,'0')).join(''));}catch(e){out.set(e.message,1);}}
  [t,key].forEach(e=>e.oninput=go);alg.onchange=go;r.append(field('Message',t),field('Key',key),field('Algorithm',alg),out.wrap);
}},

{id:'defang',cat:WEB,name:'Defang / Fang',desc:'Neutralise or restore URLs & IPs',render(r){
  const t=ta('http://evil.com/path');const out=outBox();
  const defang=s=>s.replace(/http/gi,'hxxp').replace(/:\/\//g,'[://]').replace(/\./g,'[.]');
  const fang=s=>s.replace(/\[\.\]/g,'.').replace(/hxxp/gi,'http').replace(/\[:\/\/\]/g,'://');
  r.append(field('Input',t),h('div',{class:'btns'},btn('Defang','btn',()=>out.set(defang(t.value))),btn('Fang','btn ghost',()=>out.set(fang(t.value)))),out.wrap);
}},
{id:'extract',cat:WEB,name:'Data Extractor',desc:'Pull IPs, emails, URLs, hashes from text',render(r){
  const t=ta('Paste text…');const what=sel([['ip','IPv4 addresses'],['email','Email addresses'],['url','URLs'],['domain','Domains'],['hash','Hashes (md5/sha)']],'ip');const out=outBox();
  const RE={ip:/\b(?:\d{1,3}\.){3}\d{1,3}\b/g,email:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi,url:/https?:\/\/[^\s"'<>]+/gi,domain:/\b(?:[a-z0-9-]+\.)+[a-z]{2,}\b/gi,hash:/\b[a-f0-9]{32,128}\b/gi};
  function go(){const m=t.value.match(RE[what.value])||[];out.set([...new Set(m)].join('\n')||'(no matches)');}
  t.oninput=go;what.onchange=go;r.append(field('Input',t),field('Extract',what),out.wrap);
}},

{id:'reverse',cat:TEXT,name:'Reverse Text',desc:'Reverse characters, words, or lines',render(r){
  const t=ta('Text…');const by=sel([['char','Characters'],['word','Words'],['line','Lines']],'char');const out=outBox();
  const go=()=>{const v=t.value;out.set(by.value==='char'?[...v].reverse().join(''):by.value==='word'?v.split(/(\s+)/).reverse().join(''):v.split(/\r?\n/).reverse().join('\n'));};
  t.oninput=go;by.onchange=go;r.append(field('Input',t),field('Reverse by',by),out.wrap);
}},
{id:'lines',cat:TEXT,name:'Line Tools',desc:'Sort, dedupe, shuffle, number lines',render(r){
  const t=ta('One item per line…');const out=outBox();const L=()=>t.value.split(/\r?\n/);const set=a=>out.set(a.join('\n'));
  r.append(field('Input',t),h('div',{class:'btns'},
    btn('Sort A→Z','btn',()=>set(L().sort((a,b)=>a.localeCompare(b)))),
    btn('Sort Z→A','btn ghost',()=>set(L().sort((a,b)=>b.localeCompare(a)))),
    btn('Unique','btn ghost',()=>set([...new Set(L())])),
    btn('Reverse','btn ghost',()=>set(L().reverse())),
    btn('Shuffle','btn ghost',()=>set(L().map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]))),
    btn('Remove blanks','btn ghost',()=>set(L().filter(x=>x.trim()))),
    btn('Number','btn ghost',()=>set(L().map((x,i)=>(i+1)+'. '+x))),
    btn('Trim','btn ghost',()=>set(L().map(x=>x.trim())))),out.wrap);
}},
{id:'replace',cat:TEXT,name:'Find & Replace',desc:'Plain or regex, with flags',render(r){
  const t=ta('Text…');const find=inp('Find'),rep=inp('Replace with');const rx=h('input',{type:'checkbox'}),ci=h('input',{type:'checkbox'});const out=outBox();
  function go(){try{const flags='g'+(ci.checked?'i':'');const pat=rx.checked?find.value:find.value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    out.set(find.value?t.value.replace(new RegExp(pat,flags),rep.value):t.value);}catch(e){out.set(e.message,1);}}
  [t,find,rep].forEach(e=>e.oninput=go);[rx,ci].forEach(e=>e.onchange=go);
  r.append(field('Input',t),h('div',{class:'row'},field('Find',find),field('Replace',rep)),
    h('div',{class:'checks'},h('label',{class:'chk'},rx,'Regex'),h('label',{class:'chk'},ci,'Ignore case')),out.wrap);
}},
{id:'diff',cat:TEXT,name:'Text Diff',desc:'Line-by-line differences',render(r){
  const a=ta('Original…'),b=ta('Changed…');const out=outBox();
  function go(){const A=a.value.split(/\r?\n/),B=b.value.split(/\r?\n/),sA=new Set(A),sB=new Set(B);
    out.set([...A.filter(l=>!sB.has(l)).map(l=>'- '+l),...B.filter(l=>!sA.has(l)).map(l=>'+ '+l)].join('\n')||'(identical)');}
  [a,b].forEach(e=>e.oninput=go);r.append(field('Original',a),field('Changed',b),out.wrap);
}},

{id:'rot',cat:CIPHER,name:'Rotation Cipher',desc:'ROT13 · ROT47 · Caesar shift',render(r){
  const t=ta('Text…');const mode=sel([['13','ROT13 (letters)'],['47','ROT47 (printable)'],['n','Caesar (custom)']],'13');
  const shift=inp('Shift','number');shift.value=3;const sf=field('Shift',shift);sf.style.display='none';const out=outBox();
  const rotL=(s,n)=>s.replace(/[a-z]/gi,c=>{const b=c<='Z'?65:97;return String.fromCharCode((c.charCodeAt(0)-b+(n%26+26))%26+b);});
  const rot47=s=>s.replace(/[\x21-\x7e]/g,c=>String.fromCharCode(33+(c.charCodeAt(0)-33+47)%94));
  function go(){const v=t.value;out.set(mode.value==='13'?rotL(v,13):mode.value==='47'?rot47(v):rotL(v,+shift.value||0));}
  mode.onchange=()=>{sf.style.display=mode.value==='n'?'':'none';go();};t.oninput=go;shift.oninput=go;
  r.append(field('Input',t),field('Mode',mode),sf,out.wrap);
}},
{id:'xor',cat:CIPHER,name:'XOR Cipher',desc:'XOR bytes with a key → hex',render(r){
  const t=ta('Text…');const key=inp('Key');key.value='key';const kt=sel([['utf','Key: UTF-8'],['hex','Key: Hex']],'utf');const out=outBox();
  const keyBytes=()=>kt.value==='hex'?(key.value.match(/../g)||[]).map(x=>parseInt(x,16)):[...new TextEncoder().encode(key.value)];
  function go(){const k=keyBytes();if(!k.length){out.set('Enter a key',1);return;}const d=new TextEncoder().encode(t.value);
    let hex='';for(let i=0;i<d.length;i++)hex+=(d[i]^k[i%k.length]).toString(16).padStart(2,'0');out.set(hex);}
  [t,key].forEach(e=>e.oninput=go);kt.onchange=go;r.append(field('Input',t),field('Key',key),field('Key type',kt),out.wrap,h('div',{class:'hint'},'XOR is symmetric — output is hex of the XORed bytes.'));
}},
{id:'vigenere',cat:CIPHER,name:'Vigenère Cipher',desc:'Keyword cipher encode / decode',render(r){
  const t=ta('Text…');const key=inp('Keyword');key.value='LEMON';const out=outBox();
  function run(dir){const k=key.value.toUpperCase().replace(/[^A-Z]/g,'');if(!k){out.set('Enter a keyword',1);return;}let j=0;
    out.set(t.value.replace(/[a-z]/gi,c=>{const b=c<='Z'?65:97,s=(k.charCodeAt(j%k.length)-65)*dir;j++;return String.fromCharCode((c.charCodeAt(0)-b+s%26+26)%26+b);}));}
  r.append(field('Input',t),field('Keyword',key),h('div',{class:'btns'},btn('Encode','btn',()=>run(1)),btn('Decode','btn ghost',()=>run(-1))),out.wrap);
}},
{id:'atbash',cat:CIPHER,name:'Atbash Cipher',desc:'Mirror-alphabet substitution',render(r){
  const t=ta('Text…');const out=outBox();
  const go=()=>out.set(t.value.replace(/[a-z]/gi,c=>{const b=c<='Z'?65:97;return String.fromCharCode(b+25-(c.charCodeAt(0)-b));}));
  t.oninput=go;r.append(field('Input',t),out.wrap);go();
}},
{id:'a1z26',cat:CIPHER,name:'A1Z26 Cipher',desc:'Letters ↔ numbers (a=1…z=26)',render(r){
  const t=ta('Text or numbers…');const out=outBox();
  const enc=()=>out.set(t.value.toLowerCase().replace(/[a-z]/g,c=>(c.charCodeAt(0)-96)+' ').replace(/\s+/g,' ').trim());
  const dec=()=>out.set(t.value.trim().split(/[^0-9]+/).filter(Boolean).map(n=>+n>=1&&+n<=26?String.fromCharCode(+n+96):'').join(''));
  r.append(field('Input',t),h('div',{class:'btns'},btn('Encode','btn',enc),btn('Decode','btn ghost',dec)),out.wrap);
}},

{id:'csvjson',cat:DATA,name:'CSV ↔ JSON',desc:'Convert between CSV and JSON',render(r){
  const t=ta('CSV or JSON array…');const out=outBox();
  function parseCSV(s){const rows=[];let f='',row=[],q=false;const push=()=>{row.push(f);f='';};const nl=()=>{push();rows.push(row);row=[];};
    for(let i=0;i<s.length;i++){const c=s[i];if(q){if(c==='"'){if(s[i+1]==='"'){f+='"';i++;}else q=false;}else f+=c;}
      else if(c==='"')q=true;else if(c===',')push();else if(c==='\n')nl();else if(c!=='\r')f+=c;}
    if(f||row.length)nl();return rows.filter(x=>x.length&&!(x.length===1&&x[0]===''));}
  function c2j(){const rows=parseCSV(t.value);if(!rows.length)return out.set('[]');const hd=rows[0];
    out.set(JSON.stringify(rows.slice(1).map(r=>Object.fromEntries(hd.map((k,i)=>[k,r[i]??'']))),null,2));}
  function j2c(){try{const a=JSON.parse(t.value);if(!Array.isArray(a))throw 0;const keys=[...new Set(a.flatMap(o=>Object.keys(o)))];
    const esc=v=>{v=v==null?'':String(v);return /[",\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v;};
    out.set([keys.join(','),...a.map(o=>keys.map(k=>esc(o[k])).join(','))].join('\n'));}catch(e){out.set('Invalid JSON array',1);}}
  r.append(field('Input',t),h('div',{class:'btns'},btn('CSV → JSON','btn',c2j),btn('JSON → CSV','btn ghost',j2c)),out.wrap);
}},
{id:'numstats',cat:MATH,name:'Number Stats',desc:'Sum, mean, median, min/max, σ',render(r){
  const t=ta('Numbers (spaces, commas or lines)…');t.value='4 8 15 16 23 42';const kv=kvBox();
  function go(){const n=(t.value.match(/-?\d+(\.\d+)?/g)||[]).map(Number);if(!n.length)return kv.set([]);
    const sum=n.reduce((a,b)=>a+b,0),mean=sum/n.length,s=[...n].sort((a,b)=>a-b),
      med=s.length%2?s[(s.length-1)/2]:(s[s.length/2-1]+s[s.length/2])/2,sd=Math.sqrt(n.reduce((a,b)=>a+(b-mean)**2,0)/n.length);
    kv.set([['Count',n.length],['Sum',round(sum,6)],['Mean',round(mean,6)],['Median',round(med,6)],['Min',Math.min(...n)],['Max',Math.max(...n)],['Range',round(Math.max(...n)-Math.min(...n),6)],['Std dev σ',round(sd,6)]]);}
  t.oninput=go;r.append(field('Input',t),kv.box);go();
}},
{id:'random',cat:DATA,name:'Random Numbers',desc:'Random integers in a range',render(r){
  const min=inp('Min','number');min.value=1;const max=inp('Max','number');max.value=100;const cnt=inp('Count','number');cnt.value=10;const uniq=h('input',{type:'checkbox'});const out=outBox();
  function go(){let lo=Math.ceil(+min.value),hi=Math.floor(+max.value),n=Math.max(1,+cnt.value|0);if(hi<lo)[lo,hi]=[hi,lo];const span=hi-lo+1;
    if(uniq.checked){if(n>span)return out.set('Not enough unique values in range',1);const p=[...Array(span)].map((_,i)=>lo+i);
      for(let i=p.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[p[i],p[j]]=[p[j],p[i]];}out.set(p.slice(0,n).join('\n'));}
    else{let o=[];for(let i=0;i<n;i++)o.push(lo+Math.floor(Math.random()*span));out.set(o.join('\n'));}}
  [min,max,cnt].forEach(e=>e.oninput=go);uniq.onchange=go;
  r.append(h('div',{class:'row'},field('Min',min),field('Max',max),field('Count',cnt)),h('div',{class:'checks'},h('label',{class:'chk'},uniq,'Unique only')),h('div',{class:'btns'},btn('Generate','btn',go)),out.wrap);
}},

{id:'image',cat:MEDIA,name:'Image Converter',desc:'Resize · convert · grayscale · invert',render(r){
  const file=h('input',{class:'in',type:'file',accept:'image/*'});const w=inp('Max width px (blank = keep)','number');
  const fmt=sel([['image/png','PNG'],['image/jpeg','JPEG'],['image/webp','WebP']],'image/png');
  const gray=h('input',{type:'checkbox'}),inv=h('input',{type:'checkbox'});const info=h('div',{class:'hint'},'Choose an image — nothing is uploaded, all local.');const prev=h('div',{});let img=null;
  file.onchange=()=>{const f=file.files[0];if(!f)return;img=new Image();img.onload=()=>info.textContent=`Loaded ${img.naturalWidth}×${img.naturalHeight}. Set options and Convert.`;img.src=URL.createObjectURL(f);};
  function conv(){if(!img)return info.textContent='Pick an image first.';let W=img.naturalWidth,H=img.naturalHeight;const mw=+w.value;if(mw&&mw<W){H=Math.round(H*mw/W);W=mw;}
    const cv=document.createElement('canvas');cv.width=W;cv.height=H;const ctx=cv.getContext('2d');if(inv.checked)ctx.filter='invert(1)';ctx.drawImage(img,0,0,W,H);
    if(gray.checked){const d=ctx.getImageData(0,0,W,H);for(let i=0;i<d.data.length;i+=4){const g=d.data[i]*.299+d.data[i+1]*.587+d.data[i+2]*.114;d.data[i]=d.data[i+1]=d.data[i+2]=g;}ctx.putImageData(d,0,0);}
    const url=cv.toDataURL(fmt.value,.92);prev.innerHTML='';prev.append(h('img',{src:url,style:'max-width:100%;border-radius:12px;border:1px solid var(--border)'}),
      h('a',{class:'btn',href:url,download:'image.'+fmt.value.split('/')[1],style:'display:inline-block;margin-top:10px'},'Download'));info.textContent=`Output ${W}×${H}.`;}
  r.append(field('Image',file),h('div',{class:'row'},field('Max width',w),field('Format',fmt)),h('div',{class:'checks'},h('label',{class:'chk'},gray,'Grayscale'),h('label',{class:'chk'},inv,'Invert')),h('div',{class:'btns'},btn('Convert','btn',conv)),info,prev);
}},
{id:'units',cat:CONV,name:'Unit Converter',desc:'Distance · area · mass · speed · data',render(r){
  const U={Distance:{m:1,km:1000,cm:.01,mm:.001,mi:1609.344,yd:.9144,ft:.3048,in:.0254,nmi:1852},
    Area:{'m²':1,'km²':1e6,'cm²':1e-4,ha:1e4,acre:4046.8564224,'ft²':.09290304,'mi²':2589988.110336},
    Mass:{g:1,kg:1000,mg:.001,t:1e6,lb:453.59237,oz:28.349523125,st:6350.29318},
    Speed:{'m/s':1,'km/h':1/3.6,mph:.44704,knot:.514444,'ft/s':.3048},
    Data:{B:1,KB:1024,MB:1024**2,GB:1024**3,TB:1024**4,bit:1/8,Kb:128,Mb:131072,Gb:134217728}};
  const cat=sel(Object.keys(U).map(k=>[k,k]));const from=sel([]),to=sel([]);const val=inp('Value','number');val.value=1;const out=outBox();
  function fill(){const keys=Object.keys(U[cat.value]);[from,to].forEach(s=>{s.innerHTML='';keys.forEach(k=>s.append(h('option',{value:k},k)));});from.value=keys[0];to.value=keys[1]||keys[0];}
  function go(){const tb=U[cat.value];out.set(round((+val.value||0)*tb[from.value]/tb[to.value],8));}
  cat.onchange=()=>{fill();go();};[from,to,val].forEach(e=>{e.oninput=go;e.onchange=go;});
  fill();r.append(field('Category',cat),h('div',{class:'row'},field('From',from),field('To',to)),field('Value',val),out.wrap);go();
}},
{id:'setops',cat:DATA,name:'Set Operations',desc:'Union · intersection · difference of lists',render(r){
  const a=ta('List A (one per line)'),b=ta('List B (one per line)');const out=outBox();
  const A=()=>a.value.split(/\r?\n/).filter(x=>x!==''),B=()=>b.value.split(/\r?\n/).filter(x=>x!=='');const set=x=>out.set([...x].join('\n'));
  r.append(field('Set A',a),field('Set B',b),h('div',{class:'btns'},
    btn('Union','btn',()=>set(new Set([...A(),...B()]))),
    btn('Intersection','btn ghost',()=>{const s=new Set(B());set(new Set(A().filter(x=>s.has(x))));}),
    btn('A − B','btn ghost',()=>{const s=new Set(B());set(new Set(A().filter(x=>!s.has(x))));}),
    btn('Symmetric','btn ghost',()=>{const sa=new Set(A()),sb=new Set(B());set(new Set([...A().filter(x=>!sb.has(x)),...B().filter(x=>!sa.has(x))]));})),out.wrap);
}},
{id:'bitwise',cat:MATH,name:'Bitwise Ops',desc:'AND · OR · XOR · NOT · shifts',render(r){
  const a=inp('A'),b=inp('B'),base=sel([['10','Decimal'],['2','Binary'],['16','Hex']],'10');const kv=kvBox();
  const P=x=>parseInt((x.value||'0').trim(),+base.value)|0;
  function go(){const A=P(a),B=P(b);kv.set([['A & B',A&B],['A | B',A|B],['A ^ B',A^B],['~A',~A],['A << 1',A<<1],['A >> 1',A>>1],['A >>> 1',A>>>1],['A (bin)',(A>>>0).toString(2)],['B (bin)',(B>>>0).toString(2)]]);}
  [a,b].forEach(e=>e.oninput=go);base.onchange=go;a.value=12;b.value=10;
  r.append(h('div',{class:'row'},field('A',a),field('B',b)),field('Input base',base),kv.box);go();
}},
];

const CAT_ICON={
  [CRYPTO]:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="8" cy="15" r="4.5"/><path d="M11.3 11.7 20 3M17 3h3v3M14 6l2 2"/></svg>',
  [CONV]:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13M4 8l3-3M4 8l3 3M20 16H7M20 16l-3-3M20 16l-3 3"/></svg>',
  [WEB]:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/></svg>',
  [TEXT]:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M5 6h14M5 6V5m14 1V5M12 6v13M9 19h6"/></svg>',
  [DEV]:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m8 8-4 4 4 4m8-8 4 4-4 4M14 5l-4 14"/></svg>',
  [NET]:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="18" r="2.5"/><circle cx="12" cy="5" r="2.5"/><path d="M11 7 7 16M13 7l4 9"/></svg>',
  [MATH]:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="7" cy="7" r="2"/><circle cx="17" cy="17" r="2"/><path d="m6 18 12-12"/></svg>',
  [CIPHER]:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  [DATA]:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3"/></svg>',
  [MEDIA]:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="m4 17 5-5 4 4 3-3 4 4"/></svg>',
};
const TOOL_ICON={
  qr:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm11-2h3v2h-3v-2zm-3 0h2v3h-2v-3zm0 5h5v3h-2v-1h-1v1h-2v-3zm7-5h1v8h-3v-2h2v-6z"/></svg>',
  color:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>',
  ohm:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>',
  morse:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="4" cy="12" r="1.9"/><rect x="8" y="10.1" width="6" height="3.8" rx="1.9"/><circle cx="19" cy="12" r="1.9"/></svg>',
  nato:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15 9a4 4 0 0 1 0 6"/></svg>',
};

/* =================== router / views =================== */
const view=document.getElementById('view');

function showHome(){
  view.innerHTML='';
  const search=inp('Search tools…');search.className='in search';
  const grid=h('div',{});
  const order=[CRYPTO,CIPHER,CONV,TEXT,DATA,WEB,NET,MATH,MEDIA];
  const cats=order.filter(c=>TOOLS.some(t=>t.cat===c));
  cats.forEach(cat=>{
    const cards=h('div',{class:'cards'});
    TOOLS.filter(t=>t.cat===cat).forEach(t=>{
      const card=h('a',{class:'card',href:'#'+t.id},
        h('div',{class:'card-ic',html:TOOL_ICON[t.id]||CAT_ICON[cat]||''}),
        h('div',{},h('div',{class:'card-t'},T(t.name)),h('div',{class:'card-d'},T(t.desc))));
      card._t=t;cards.append(card);
    });
    grid.append(h('section',{class:'cat'},h('h2',{class:'cat-h'},T(cat)),cards));
  });
  search.oninput=()=>{const q=search.value.toLowerCase();
    grid.querySelectorAll('section.cat').forEach(sec=>{let any=false;
      sec.querySelectorAll('.card').forEach(c=>{const t=c._t;
        const hit=(t.name+' '+t.desc+' '+t.cat+' '+(AR[t.name]||'')+' '+(AR[t.desc]||'')+' '+(AR[t.cat]||'')).toLowerCase().includes(q);c.style.display=hit?'':'none';if(hit)any=true;});
      sec.style.display=any?'':'none';});};
  view.append(h('div',{class:'search-wrap'},search),grid);
}

function showTool(t){
  view.innerHTML='';
  const body=h('div',{class:'tool-body'});
  view.append(h('a',{class:'back',href:'#'},T('← All tools')),
    h('div',{class:'tool-head'},h('h1',{class:'tool-t'},T(t.name)),h('p',{class:'tool-d'},T(t.desc))),body);
  t.render(body);window.scrollTo(0,0);
}

function route(){const id=location.hash.slice(1);const t=TOOLS.find(x=>x.id===id);t?showTool(t):showHome();}
window.addEventListener('hashchange',route);
window.addEventListener('langchange',()=>{LANG=document.documentElement.lang==='ar'?'ar':'en';route();});
route();
