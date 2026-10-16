// Tiny SVG stand-ins for SF Symbols (stroke icons, currentColor).
const P={
 plus:'<circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M12 7v10M7 12h10" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>',
 map:'<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" fill="currentColor"/><path d="M9 4v14M15 6v14" stroke="#fff" stroke-width="1.2"/>',
 list:'<circle cx="5" cy="6" r="1.6" fill="currentColor"/><circle cx="5" cy="12" r="1.6" fill="currentColor"/><circle cx="5" cy="18" r="1.6" fill="currentColor"/><path d="M9 6h11M9 12h11M9 18h11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
 chart:'<path d="M4 20V11h4v9zM10 20V5h4v15zM16 20v-7h4v7z" fill="currentColor"/>',
 gear:'<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="3 2.2"/><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="2"/>',
 loc:'<path d="M3 11L21 3l-8 18-2-8z" fill="currentColor"/>',
 fish:'<path d="M2 12c3-5 9-6 14-3l5-3-1.5 6L21 18l-5-3c-5 3-11 2-14-3z" fill="currentColor"/><circle cx="7" cy="11" r="1" fill="#fff"/>',
 cam:'<rect x="2" y="7" width="20" height="13" rx="3" fill="currentColor"/><path d="M8 7l2-3h4l2 3" fill="currentColor"/><circle cx="12" cy="13.5" r="3.6" fill="#fff"/>',
 cloud:'<circle cx="8" cy="8" r="3.5" fill="#FFB800"/><path d="M7 19a4 4 0 010-8 5.5 5.5 0 0110.5 1.5A3.3 3.3 0 0117 19z" fill="currentColor"/>',
 filter:'<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M7 9h10M9 12.5h6M11 16h2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
 filterOn:'<circle cx="12" cy="12" r="10.5" fill="currentColor"/><path d="M7 9h10M9 12.5h6M11 16h2" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>',
 cal:'<rect x="3" y="5" width="18" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.8"/>',
 copy:'<rect x="8" y="8" width="12" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 16V5a2 2 0 012-2h9" fill="none" stroke="currentColor" stroke-width="1.8"/>',
 pin:'<path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" fill="currentColor"/><circle cx="12" cy="9" r="2.6" fill="#fff"/>',
 clock:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/>',
 hist:'<path d="M4 12a8 8 0 108-8 8 8 0 00-6 2.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5 3v4h4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 8v4l3 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
 ruler:'<rect x="2" y="8" width="20" height="8" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6 8v3M10 8v4M14 8v3M18 8v4" stroke="currentColor" stroke-width="1.6"/>',
 therm:'<path d="M10 4a2 2 0 014 0v10a4 4 0 11-4 0z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="17" r="2" fill="currentColor"/>',
 moon:'<path d="M15 3a9 9 0 106 15A8 8 0 0115 3z" fill="currentColor"/>',
 wave:'<path d="M2 9c3-3 5 3 8 0s5 3 8 0 3 0 4 0M2 15c3-3 5 3 8 0s5 3 8 0 3 0 4 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
 star:'<path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21l1.5-7L2 9.3l7-.8z" fill="currentColor"/>',
 target:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/>',
 check:'<path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
 inf:'<path d="M7 8.5c-2 0-3.5 1.5-3.5 3.5S5 15.5 7 15.5c3.5 0 6.5-7 10-7 2 0 3.5 1.5 3.5 3.5s-1.5 3.5-3.5 3.5c-3.5 0-6.5-7-10-7z" fill="none" stroke="currentColor" stroke-width="2"/>',
 seal:'<circle cx="12" cy="12" r="9.5" fill="currentColor"/><path d="M7.5 12.3l3 3 6-6.3" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
 cond:'<circle cx="9" cy="9" r="4" fill="currentColor"/><path d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2M3.7 3.7l1.4 1.4M12.9 12.9l1.4 1.4M3.7 14.3l1.4-1.4M12.9 5.1l1.4-1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8 21c3-3 5 3 8 0s4 0 6-1" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
 gauge:'<circle cx="12" cy="13" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 13l4-5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="13" r="1.6" fill="currentColor"/>',
 wind:'<path d="M3 9h11a3 3 0 10-3-3M3 15h15a3 3 0 11-3 3M3 12h8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
 updown:'<path d="M8 20V5M4 9l4-4 4 4M16 4v15M12 15l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
 xmark:'<circle cx="12" cy="12" r="9.5" fill="currentColor"/><path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>',
 person:'<circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M4 21a8 8 0 0116 0z" fill="currentColor"/>',
 note:'<rect x="4" y="3" width="16" height="18" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
 sig:'<rect x="1" y="14" width="3" height="5" rx="1" fill="currentColor"/><rect x="6" y="11" width="3" height="8" rx="1" fill="currentColor"/><rect x="11" y="8" width="3" height="11" rx="1" fill="currentColor"/><rect x="16" y="5" width="3" height="14" rx="1" fill="currentColor"/>',
 wifi:'<path d="M2 9a15 15 0 0120 0M5.5 12.5a10 10 0 0113 0M9 16a5 5 0 016 0" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/>',
 batt:'<rect x="1" y="6" width="21" height="12" rx="3.5" fill="none" stroke="currentColor" stroke-opacity=".4" stroke-width="1.2"/><rect x="3" y="8" width="15" height="8" rx="2" fill="currentColor"/><rect x="23" y="10" width="1.5" height="4" rx=".7" fill="currentColor" fill-opacity=".4"/>'
};
function I(n,w=20,h){return `<svg viewBox="0 0 ${n==='batt'?25:24} 24" width="${w}" height="${h||w}">${P[n]}</svg>`}
function statusBar(){return `<div class="island"></div><div class="status"><span>9:41</span><span class="r">${I('sig',18,13)}${I('wifi',17,13)}${I('batt',27,13)}</span></div>`}
function tabBar(on){const t=[['plus','Log Catch'],['map','Map'],['list','Catches'],['chart','Dashboard'],['cond','Conditions']];
 return `<div class="tabbar">${t.map(([i,l],k)=>`<div class="tab ${k===on?'on':''}">${I(i,26)}<span>${l}</span></div>`).join('')}</div><div class="home"></div>`}
document.querySelectorAll('.screen').forEach(s=>{s.insertAdjacentHTML('afterbegin',statusBar());const t=s.dataset.tab;if(t!==undefined&&t!=='')s.insertAdjacentHTML('beforeend',tabBar(+t));
 s.querySelectorAll('[data-i]').forEach(e=>{e.innerHTML=I(e.dataset.i,+(e.dataset.s||16))+e.innerHTML})});
