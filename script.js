(()=>{
const $=s=>document.querySelector(s);
$('#yr').textContent=new Date().getFullYear();

// Mobile menu
const mb=$('#menuBtn'),nl=$('#navLinks');
mb.addEventListener('click',()=>{const o=nl.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
nl.addEventListener('click',e=>{if(e.target.tagName==='A')nl.classList.remove('open'),mb.setAttribute('aria-expanded',false)});

// Graceful image fallbacks
function miss(img){const f=img.closest('.ph');if(f)f.classList.add('missing');else if(img.dataset.hideOnError!==undefined)img.style.visibility='hidden'}
document.querySelectorAll('img').forEach(i=>{
  i.addEventListener('error',()=>miss(i));
  if(i.complete&&i.naturalWidth===0)miss(i);
});

// Terminal
const term=$('#term'),out=$('#out'),input=$('#cmd'),poster=$('#poster'),sugg=$('#sugg');
const G='https://github.com/ApoorvaRaman/';
const hist=[];let hi=0,intro=false;
const L=(t,h)=>({t,h});
const cmds={
 help:()=>['Available commands:','  help          show this list','  about         short introduction','  skills        my skills','  projects      featured projects with links','  research      papers, chapter, conference','  achievements  selected achievements','  leadership    campus roles','  contact       email and profiles','  clear         clear the screen','','Some things are better discovered than listed. Try looking for a hidden command.'],
 about:()=>['Computer Science student focused on Python development, data analytics and building practical software.','Third-year BTech CSE (Data & Analytics). Class topper, with published research and campus leadership.'],
 skills:()=>['Python · Data Analytics · SQL · Java · C','HTML · CSS · Frontend Development','Git & GitHub · Web applications · PowerShell','R (NPTEL coursework)'],
 projects:()=>['1. RISC-V Memory Hierarchy Simulator',['   ',L('GitHub',G+'risc-v-memory-hierarchy-simulator')],
  '2. TRAFFIC/PATTERN.DASH',['   ',L('Live demo','https://trafficpattern.pages.dev/'),'  ',L('GitHub',G+'Website-Traffic-Pattern-Dashboard')],
  '3. The Lost Memories of Maveli',['   ',L('Live demo','https://mavelis-memories.pages.dev/'),'  ',L('GitHub',G+'The-Lost-Memories-of-Maveli')]],
 research:()=>['Scopus-indexed journal paper: [ADD TITLE / JOURNAL / DOI / YEAR]','','Book chapter (co-authored): "Foundations and Principles of Agent-Based Artificial Intelligence for Enhancing Fraud Detection Mechanisms in Complex Financial Ecosystem"','In: "Agent-Based Artificial Intelligence in Fraud Detection: Strategies for Building Secure Self-Governing Systems"','Authors: Sarika S, Apoorva Raman, Krishnanunni H, Sayeda Mayesha Yousuf','','Conference presentation: "Adversarial Validation for Identifying Hidden Data Leakage in Machine Learning", CISCom, Melaka, Malaysia, 26-27 Nov 2025'],
 achievements:()=>['First Prize · ONAM.exe (IEEE SB of Viswajyothi)','Player of the Tournament · Clash of Minds 2025 (VISAT IEDC)','First Prize · Sci-Fi Story Writing (college)','First Prize · Science Quiz (college)','Second Prize · Anima Invicta (college)','NPTEL: Elite (C), Elite + Silver (Advanced R)'],
 leadership:()=>['Project Coordinator · IEEE IAS SBC ASIET','Outreach Lead · OBSCURA, Data Science Club of ASIET','Technical Team Member · WEC ASIET','General Secretary · IKS (Indian Knowledge Systems)','Anti-ragging Representative · ASIET'],
 contact:()=>[['Email:    ',L('apoorvaramans@gmail.com','mailto:apoorvaramans@gmail.com')],['GitHub:   ',L('ApoorvaRaman',G.slice(0,-1))],'LinkedIn: [ADD LINK]'],
 clear:()=>{out.textContent='';return null},
 memeverse:()=>{setTimeout(openPoster,700);return [['Hidden achievement unlocked.']]}
};
function add(lines,cls){
 (lines||[]).forEach(l=>{
  const d=document.createElement('div');if(cls)d.className=cls;
  (Array.isArray(l)?l:[l]).forEach(p=>{
   if(typeof p==='string'){d.append(p)}
   else{const a=document.createElement('a');a.textContent=p.t;a.href=p.h;if(p.h.startsWith('http')){a.target='_blank';a.rel='noopener noreferrer'}d.append(a)}
  });
  if(!d.childNodes.length)d.append('\u00a0');
  out.append(d);
 });
 out.scrollTop=out.scrollHeight;
}
function run(raw){
 const c=raw.trim().toLowerCase();if(!c)return;
 hist.push(c);hi=hist.length;
 add(['$ '+raw.trim()],'cmd');
 if(cmds[c]){add(cmds[c]())}
 else add(['Command not found: '+c+'. Type "help".']);
}
function openTerm(){
 if(!term.open)term.showModal();
 if(!intro){intro=true;add(['Apoorva Raman · interactive terminal','Type a command or tap a suggestion. Try "help".','']);}
 input.focus();
}
function openPoster(){if(!poster.open)poster.showModal()}
['help','about','skills','projects','research','achievements','leadership','contact','clear'].forEach(n=>{
 const b=document.createElement('button');b.type='button';b.textContent=n;
 b.addEventListener('click',()=>{run(n);input.focus()});sugg.append(b);
});
$('#form').addEventListener('submit',e=>{e.preventDefault();run(input.value);input.value=''});
input.addEventListener('keydown',e=>{
 if(e.key==='ArrowUp'&&hist.length){e.preventDefault();hi=Math.max(0,hi-1);input.value=hist[hi]}
 else if(e.key==='ArrowDown'&&hist.length){e.preventDefault();hi=Math.min(hist.length,hi+1);input.value=hist[hi]||''}
});
document.querySelectorAll('[data-open-terminal]').forEach(b=>b.addEventListener('click',openTerm));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
[term,poster].forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
})();
