
const root=document.documentElement;
const langBtn=document.getElementById('langToggle');
const tools=document.querySelector('.header-tools');
let themeBtn=document.getElementById('themeToggle');
if(tools && !themeBtn){themeBtn=document.createElement('button');themeBtn.id='themeToggle';themeBtn.className='tool-btn theme-btn';themeBtn.type='button';themeBtn.setAttribute('aria-label','Toggle dark mode');themeBtn.innerHTML='<span class="theme-icon">☾</span><span class="theme-label">Dark</span>';tools.insertBefore(themeBtn,tools.firstChild);}
let theme=localStorage.getItem('pixsoft-theme')||'light';
function applyTheme(){document.documentElement.dataset.theme=theme;if(themeBtn){themeBtn.innerHTML=theme==='dark'?'<span class="theme-icon">☀</span><span class="theme-label">Light</span>':'<span class="theme-icon">☾</span><span class="theme-label">Dark</span>';themeBtn.setAttribute('aria-pressed',theme==='dark'?'true':'false');}}
applyTheme();
themeBtn?.addEventListener('click',()=>{theme=theme==='light'?'dark':'light';localStorage.setItem('pixsoft-theme',theme);applyTheme();});
const menuBtn=document.querySelector('.mobile-menu');
const nav=document.querySelector('.main-nav');
let language=localStorage.getItem('pixsoft-language')||'en';
function applyLanguage(){document.querySelectorAll('[data-en][data-bn]').forEach(el=>{el.innerHTML=el.dataset[language];});if(langBtn)langBtn.textContent=language==='en'?'বাংলা':'English';document.documentElement.lang=language==='bn'?'bn':'en';}
applyLanguage();
langBtn?.addEventListener('click',()=>{language=language==='en'?'bn':'en';localStorage.setItem('pixsoft-language',language);applyLanguage();});
menuBtn?.addEventListener('click',()=>{nav?.classList.toggle('open');menuBtn.textContent=nav?.classList.contains('open')?'✕':'☰';});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year')?.replaceChildren(document.createTextNode(new Date().getFullYear()));
const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';}});
document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.045}px,${(e.clientY-r.top-r.height/2)*.08}px) translateY(-3px)`;});el.addEventListener('pointerleave',()=>el.style.transform='');});
document.getElementById('quoteForm')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const msg=`Hello PIXSOFT DIGITAL!%0A%0AName: ${encodeURIComponent(f.get('name'))}%0AContact: ${encodeURIComponent(f.get('contact'))}%0AService: ${encodeURIComponent(f.get('service'))}%0ABudget: ${encodeURIComponent(f.get('budget'))}%0ADetails: ${encodeURIComponent(f.get('details')||'Not provided')}`;window.open('https://wa.me/8801922889616?text='+msg,'_blank','noopener');});
