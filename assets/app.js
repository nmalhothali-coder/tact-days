/* ===================== i18n ===================== */
const T = {
  ar:{
    dir:"rtl", other:"EN",
    nav:{home:"الرئيسية",cats:"التصنيفات",days:"الأيام العالمية",idea:"خذ فكرتك",cal:"التقويم",about:"عن المنصة"},
    heroTitle:['كل يوم فرصة','لصناعة أثر.'],
    heroLede:"اكتشف الأيام العالمية والمناسبات المحلية بالميلادي والهجري، وحوّل كل لحظة إلى فرصة تسويقية.",
    ctaExplore:"استكشف الأيام العالمية", ctaIdea:"خذ فكرتك",
    statAll:"مناسبة", statGlobal:"عالمية", statLocal:"محلية", statHijri:"هجرية",
    todayIs:"اليوم هو", comingUp:"القادم قريبًا", alsoToday:"أيضًا اليوم", upcoming:"المناسبات القادمة",
    exploreDay:"تفاصيل اليوم", genIdeas:"ولّد أفكارًا تسويقية",
    catsTitle:"استكشف حسب التصنيف", catsLede:"١٤ تصنيفًا يغطي المناسبات العالمية والمحلية على مدار السنة.",
    occCount:"مناسبة", viewAll:"عرض الكل",
    daysTitle:"الأيام العالمية", daysLede:"كل المناسبات في مكان واحد — شبكة أو تقويم.",
    grid:"شبكة", calendar:"تقويم", allMonths:"كل الشهور", allCats:"كل التصنيفات",
    fGlobal:"عالمية", fLocal:"محلية", fHijri:"هجرية",
    search:"ابحث عن مناسبة…", noResults:"لا توجد نتائج", noResultsHint:"جرّب كلمة أخرى أو تصفّح التصنيفات.",
    share:"شارك", addCal:"أضف للتقويم", details:"التفاصيل",
    shareColleagues:"شارك مع زملائك", addMyCal:"أضف إلى تقويمي",
    linkCopied:"تم نسخ الرابط", icsDone:"تم تنزيل ملف التقويم",
    about:"نبذة", significance:"لماذا يهم هذا اليوم", source:"المصدر الرسمي",
    related:"مناسبات ذات صلة", marketingOpp:"الفرصة التسويقية",
    pendingDesc:"الوصف التحريري لهذه المناسبة قيد الإعداد. كل سجل يمرّ بمراجعة بشرية قبل نشره.",
    gregorian:"ميلادي", hijriCal:"هجري", category:"التصنيف", scopeL:"النطاق",
    recurrence:"التكرار", countdown:"المتبقي", days:"يوم", today:"اليوم", daysAgo:"مضى",
    recFixed:"سنوي بتاريخ ثابت", recLunar:"سنوي حسب التقويم الهجري", recVar:"سنوي بتاريخ متغيّر", recMonth:"الشهر كامل",
    scopeGlobal:"عالمية", scopeLocal:"محلية",
    sensitive:"مناسبة حساسة", sensitiveNote:"هذه مناسبة توعوية حساسة. المحتوى المقترح يركّز على التوعية والمساهمة، لا على الترويج التجاري.",
    hijriNote:"التاريخ الهجري محسوب حسابيًا (التقويم المدني/التبولار) وقد يختلف يومًا عن أم القرى. المناسبات الهجرية تقديرية وتُعتمد بالإعلان الرسمي.",
    varNote:"تاريخ هذه المناسبة يتغيّر سنويًا، ولا يُصدَّر لها تكرار تلقائي في ملف التقويم.",
    unverified:"قيد التحقق", secondarySrc:"مصدر ثانوي — يحتاج تحققًا من الجهة الرسمية",
    ideaTitle:"خذ فكرتك.", ideaLede:"اختر يومًا عالميًا، ودع الذكاء الاصطناعي يحوّله إلى فرصة تسويقية.",
    pickOcc:"اختر مناسبة", generate:"ولّد الفكرة", regenerate:"ولّد من جديد", changeOcc:"غيّر المناسبة",
    aiOffline:"معاينة بدون اتصال بالذكاء الاصطناعي",
    aiOfflineBody:"هذه النسخة ثابتة (HTML فقط)، فالموجز أدناه مُولَّد من قوالب تراعي المناسبة وتصنيفها وحساسيتها. التوليد الحقيقي يحتاج مسار خادم آمن ومفتاح API — وهو موثّق في البرومت المرجعي.",
    briefFor:"موجز حملة لمناسبة",
    calTitle:"التقويم التفاعلي", calLede:"السنة كاملة بالميلادي والهجري، مع كل مناسبة في موضعها.",
    backAll:"كل الشهور", monthOcc:"الأيام العالمية والمناسبات", noneFilter:"لا توجد مناسبات مطابقة للفلتر",
    startsOn:"يبدأ الشهر بـ", corresponding:"الموافق",
    aboutTitle:"عن المنصة",
    year:"السنة",
    footTag:"منصة تاكت للأيام العالمية — اكتشف المناسبة، وحوّلها إلى فكرة.",
    gameTitle:"تحدّي الأيام", gameBest:"أفضل نتيجة", gameStart:"ابدأ التحدي",
    gameIntro:"ثلاث محاولات، اثنتا عشرة ثانية لكل سؤال. كم مناسبة تعرف؟",
    gameAgain:"العب مرة أخرى", gameScore:"نقطة", gameStreak:"متتالية",
    qDate:"أي مناسبة تقع في هذا التاريخ؟", qMonth:"في أي شهر تقع هذه المناسبة؟",
    qCat:"إلى أي تصنيف تنتمي هذه المناسبة؟",
    gameOver:"انتهى التحدي", gameOverBody:"نتيجتك", newBest:"رقم قياسي جديد!",
    timeUp:"انتهى الوقت", seeDay:"اعرف أكثر عن آخر مناسبة",
    tickerNext:"القادم",
    pulseTitle:"نبض السنة", pulseLede:"كل يوم من أيام السنة، وكثافة المناسبات فيه. مرّر على أي مربع، واضغط للانتقال.",
    pulseNone:"بلا مناسبة", pulseOne:"مناسبة", pulseMany:"مناسبات", pulseToday:"اليوم",
    surprise:"فاجئني بمناسبة", rolling:"نبحث…",
    downloadCard:"حمّل بطاقة المناسبة", cardReady:"تم تنزيل البطاقة",
    myPlan:"خطّتي", planEmpty:"لم تضف أي مناسبة بعد. اضغط النجمة على أي بطاقة.",
    planExport:"حمّل الكل للتقويم", planClear:"مسح الكل", saved:"أُضيفت إلى خطّتك", removed:"أُزيلت من خطّتك",
    addPlan:"أضف إلى خطّتي", inPlan:"في خطّتي",
    cdDays:"ي", cdHours:"س", cdMins:"د", cdSecs:"ث",
    footProduct:"المنصة", footCompany:"تاكت",
    months:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
    monthsShort:["ينا","فبر","مار","أبر","ماي","يون","يول","أغس","سبت","أكت","نوف","ديس"],
    dows:["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
    dowsMini:["أحد","إثن","ثلا","أرب","خمي","جمع","سبت"],
    dowsLetter:["ح","ن","ث","ر","خ","ج","س"]
  },
  en:{
    dir:"ltr", other:"ع",
    nav:{home:"Home",cats:"Categories",days:"Global Days",idea:"Get Your Idea",cal:"Calendar",about:"About"},
    heroTitle:['Every Day Is','an Opportunity.'],
    heroLede:"Discover global days and local occasions in both Gregorian and Hijri, and turn every moment into a creative marketing opportunity.",
    ctaExplore:"Explore Global Days", ctaIdea:"Get a Marketing Idea",
    statAll:"occasions", statGlobal:"global", statLocal:"local", statHijri:"Hijri-based",
    todayIs:"Today is", comingUp:"Coming up", alsoToday:"Also today", upcoming:"Upcoming days",
    exploreDay:"Explore this day", genIdeas:"Generate marketing ideas",
    catsTitle:"Explore by category", catsLede:"Fourteen categories covering global and local occasions across the year.",
    occCount:"occasions", viewAll:"View all",
    daysTitle:"Global Days", daysLede:"Every occasion in one place — as a grid or a calendar.",
    grid:"Grid", calendar:"Calendar", allMonths:"All months", allCats:"All categories",
    fGlobal:"Global", fLocal:"Local", fHijri:"Hijri",
    search:"Search for an occasion…", noResults:"No results", noResultsHint:"Try another word or browse the categories.",
    share:"Share", addCal:"Add to calendar", details:"Details",
    shareColleagues:"Share with colleagues", addMyCal:"Add to my calendar",
    linkCopied:"Link copied", icsDone:"Calendar file downloaded",
    about:"About", significance:"Why this day matters", source:"Official source",
    related:"Related occasions", marketingOpp:"Marketing opportunity",
    pendingDesc:"The editorial description for this occasion is being prepared. Every record passes human review before it is published.",
    gregorian:"Gregorian", hijriCal:"Hijri", category:"Category", scopeL:"Scope",
    recurrence:"Recurrence", countdown:"Countdown", days:"days", today:"Today", daysAgo:"ago",
    recFixed:"Annual, fixed date", recLunar:"Annual, Hijri calendar", recVar:"Annual, variable date", recMonth:"Month-long",
    scopeGlobal:"Global", scopeLocal:"Local",
    sensitive:"Sensitive occasion", sensitiveNote:"This is a sensitive awareness occasion. Suggested content focuses on awareness and contribution, never commercial promotion.",
    hijriNote:"Hijri dates are computed arithmetically (civil/tabular Hijri) and may differ by one day from Umm al-Qura. Hijri occasions are estimates confirmed by official announcement.",
    varNote:"This occasion's date changes each year, so no recurrence rule is written into the calendar file.",
    unverified:"Pending verification", secondarySrc:"Secondary source — needs checking against the official organisation",
    ideaTitle:"Get Your Idea.", ideaLede:"Choose a global day. Let AI turn it into a marketing opportunity.",
    pickOcc:"Choose an occasion", generate:"Generate", regenerate:"Regenerate", changeOcc:"Change occasion",
    aiOffline:"Preview without an AI connection",
    aiOfflineBody:"This build is static HTML, so the brief below is generated from templates that read the occasion, its category and its sensitivity. Real generation needs a secure server route and an API key — documented in the reference prompt.",
    briefFor:"Campaign brief for",
    calTitle:"Interactive Calendar", calLede:"The full year in Gregorian and Hijri, with every occasion in place.",
    backAll:"All months", monthOcc:"Global days & occasions", noneFilter:"No occasions match this filter",
    startsOn:"Starts on", corresponding:"corresponding to",
    aboutTitle:"About the platform",
    year:"Year",
    footTag:"Tact's global days platform — find the occasion, turn it into an idea.",
    gameTitle:"Days Challenge", gameBest:"Best", gameStart:"Start the challenge",
    gameIntro:"Three lives, twelve seconds a question. How many occasions do you know?",
    gameAgain:"Play again", gameScore:"points", gameStreak:"streak",
    qDate:"Which occasion falls on this date?", qMonth:"Which month does this occasion fall in?",
    qCat:"Which category does this occasion belong to?",
    gameOver:"Challenge over", gameOverBody:"Your score", newBest:"New personal best!",
    timeUp:"Time's up", seeDay:"See the last occasion",
    tickerNext:"Next",
    pulseTitle:"Year pulse", pulseLede:"Every day of the year and how busy it is. Hover any cell, click to open it.",
    pulseNone:"nothing", pulseOne:"occasion", pulseMany:"occasions", pulseToday:"Today",
    surprise:"Surprise me", rolling:"Searching…",
    downloadCard:"Download occasion card", cardReady:"Card downloaded",
    myPlan:"My plan", planEmpty:"Nothing saved yet. Tap the star on any card.",
    planExport:"Export all to calendar", planClear:"Clear all", saved:"Added to your plan", removed:"Removed from your plan",
    addPlan:"Add to my plan", inPlan:"In my plan",
    cdDays:"d", cdHours:"h", cdMins:"m", cdSecs:"s",
    footProduct:"Platform", footCompany:"Tact",
    months:["January","February","March","April","May","June","July","August","September","October","November","December"],
    monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    dows:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    dowsMini:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    dowsLetter:["S","M","T","W","T","F","S"]
  }
};
const HIJRI_AR = ["محرم","صفر","ربيع الأول","ربيع الآخر","جمادى الأولى","جمادى الآخرة","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة"];
const HIJRI_EN = ["Muharram","Safar","Rabi al-Awwal","Rabi al-Thani","Jumada al-Ula","Jumada al-Akhirah","Rajab","Shaban","Ramadan","Shawwal","Dhul Qadah","Dhul Hijjah"];
const ACCENT = {teal:"#4CC0AF", yellow:"#FFC63E", purple:"#32004B", orange:"#F15D2A", charcoal:"#282829"};
const ACCENT_DARK = {purple:true, charcoal:true};

const CAT_ICON = {
  "international-global":'M12 2a10 10 0 100 20 10 10 0 000-20zm6.93 6h-2.95a15.6 15.6 0 00-1.38-3.56A8.03 8.03 0 0118.93 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14A7.8 7.8 0 014 12c0-.69.1-1.36.26-2h3.38a16.5 16.5 0 000 4H4.26zm.81 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.99 7.99 0 015.07 16zm2.95-8H5.07a7.99 7.99 0 014.33-3.56A15.6 15.6 0 008.02 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66a14.7 14.7 0 010-4h4.68a14.7 14.7 0 010 4zm.26 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a7.99 7.99 0 01-4.33 3.56zM16.36 14a16.5 16.5 0 000-4h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z',
  "health-wellness":'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  "environment-sustainability":'M12 2S5 7 5 13a7 7 0 0014 0c0-6-7-11-7-11zm0 17a5 5 0 01-5-5c0-3.2 3.2-6.7 5-8.5 1.8 1.8 5 5.3 5 8.5a5 5 0 01-5 5z',
  "technology-innovation":'M9 2h6v2h3a1 1 0 011 1v3h2v6h-2v3a1 1 0 01-1 1h-3v2H9v-2H6a1 1 0 01-1-1v-3H3V8h2V5a1 1 0 011-1h3V2zm-2 4v12h10V6H7zm2 2h6v8H9V8z',
  "education-knowledge":'M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z',
  "culture-heritage":'M12 2L2 8v2h20V8L12 2zM4 11v8H2v2h20v-2h-2v-8h-2v8h-3v-8h-2v8h-2v-8H9v8H6v-8H4z',
  "business-economy":'M3 21h18v-2H3v2zM5 17h3V9H5v8zm5 0h3V4h-3v13zm5 0h3v-6h-3v6z',
  "sports-fitness":'M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z',
  "social-humanitarian":'M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
  "food-agriculture":'M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z',
  "arts-creativity":'M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c.93 0 1.69-.76 1.69-1.69 0-.44-.17-.84-.44-1.14-.26-.3-.43-.69-.43-1.12 0-.93.76-1.69 1.69-1.69H16c3.31 0 6-2.69 6-6 0-4.96-4.49-8.36-10-8.36zM6.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3-4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z',
  "national-saudi":'M4 2h2v20H4V2zm3 1h13l-3 4 3 4H7V3z',
  "seasonal":'M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 18H5V9h14v12z',
  "media-communication":'M20 6h-4V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zm-10-2h4v2h-4V4zm10 15H4V8h16v11zM9 10v7l6-3.5L9 10z',
  "family-relationships":'M12 2a3 3 0 100 6 3 3 0 000-6zM5.5 9a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm13 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM12 10c-2.33 0-4 1.17-4 2.6V22h8v-9.4c0-1.43-1.67-2.6-4-2.6zM5.5 15c-1.75 0-3.5.88-3.5 2v5h4.5v-6.1c0-.31.05-.61.14-.9H5.5zm13 0h-1.14c.09.29.14.59.14.9V22H22v-5c0-1.12-1.75-2-3.5-2z',
  "awareness-campaigns":'M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9a2 2 0 00-2 2v2a2 2 0 002 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z'
};

/* ===================== Hijri ===================== */
const idiv=(a,b)=>Math.trunc(a/b);
function g2jd(y,m,d){
  return idiv(1461*(y+4800+idiv(m-14,12)),4)+idiv(367*(m-2-12*idiv(m-14,12)),12)
    -idiv(3*idiv(y+4900+idiv(m-14,12),100),4)+d-32075;
}
function jd2h(jd){
  let l=jd-1948440+10632; const n=Math.floor((l-1)/10631); l=l-10631*n+354;
  const j=Math.floor((10985-l)/5316)*Math.floor((50*l)/17719)+Math.floor(l/5670)*Math.floor((43*l)/15238);
  l=l-Math.floor((30-j)/15)*Math.floor((17719*j)/50)-Math.floor(j/16)*Math.floor((15238*j)/43)+29;
  const hm=Math.floor((24*l)/709); const hd=l-Math.floor((709*hm)/24);
  return {year:30*n+j-30, month:hm, day:hd};
}
const toHijri=(y,m,d)=>jd2h(g2jd(y,m,d));
const daysInMonth=(y,m)=>new Date(y,m,0).getDate();
const daysInYear=y=>((y%4===0&&y%100!==0)||y%400===0)?366:365;

const _hcache={};
function hijriToGreg(year, hm, hd){
  const key=year+'|'+hm+'|'+hd;
  if(_hcache[key]!==undefined) return _hcache[key];
  for(let m=1;m<=12;m++){
    const nd=daysInMonth(year,m);
    for(let d=1;d<=nd;d++){
      const h=toHijri(year,m,d);
      if(h.month===hm && h.day===hd){ return _hcache[key]={m,d}; }
    }
  }
  return _hcache[key]=null;
}
function nthDow(year, month, dow, nth){ // nth=-1 => last
  const nd=daysInMonth(year,month);
  if(nth<0){
    for(let d=nd;d>=1;d--) if(new Date(year,month-1,d).getDay()===dow) return d;
  } else {
    let c=0;
    for(let d=1;d<=nd;d++) if(new Date(year,month-1,d).getDay()===dow){ if(++c===nth) return d; }
  }
  return null;
}
/* Resolve an occasion's Gregorian month/day for a given year. */
function resolveDate(o, year){
  if(o.cal==='hijri' && o.hm && o.hd){
    const g=hijriToGreg(year,o.hm,o.hd);
    if(g) return {m:g.m, d:g.d, exact:false};
  }
  if(o.rec==='annual_variable' && o.rule){
    if(/last Saturday of March/i.test(o.rule))   return {m:3, d:nthDow(year,3,6,-1), exact:false};
    if(/fourth Friday of November/i.test(o.rule))return {m:11,d:nthDow(year,11,5,4), exact:false};
    return {m:o.m, d:o.d, exact:false};
  }
  return {m:o.m, d:o.d, exact:true};
}

/* ===================== State ===================== */
const state = {
  lang: (localStorage.getItem('td_lang') || 'ar'),
  year: 2027,
  filters:{global:true, local:true, hijri:true},
  calMonth:1, calSingle:null, ideaOcc:null, ideaVariant:0
};
try{ if(!['ar','en'].includes(state.lang)) state.lang='ar'; }catch(e){ state.lang='ar'; }
const t = () => T[state.lang];
const L = (o, field) => state.lang==='ar' ? (o[field+'_ar']||o[field+'_en']||o['ar']||o['en']) : (o[field+'_en']||o[field+'_ar']||o['en']||o['ar']);
const nameOf = o => state.lang==='ar' ? (o.ar||o.en) : (o.en||o.ar);
const altOf  = o => state.lang==='ar' ? (o.en||'') : (o.ar||'');
const descOf = o => state.lang==='ar' ? (o.da||'') : (o.de||'');
const catName = c => state.lang==='ar' ? c.ar : c.en;
const hijriName = i => state.lang==='ar' ? HIJRI_AR[i-1] : HIJRI_EN[i-1];

const CATMAP = {}; CATS.forEach(c=>CATMAP[c.s]=c);
OCC.forEach((o,i)=>{ o._i=i; o._k = o.cal==='hijri' ? 'h' : (o.sc==='local' ? 'l' : 'g'); });
const CATCOUNT = {}; OCC.forEach(o=>CATCOUNT[o.cat]=(CATCOUNT[o.cat]||0)+1);

function riyadhToday(){
  try{
    const p = new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Riyadh',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
    const [y,m,d]=p.split('-').map(Number);
    return {y,m,d};
  }catch(e){ const n=new Date(); return {y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate()}; }
}
const TODAY = riyadhToday();
state.year = TODAY.y;   // the platform opens on the current year; the calendar page can change it

/* occurrences of every occasion in a given year, keyed m-d */
function yearIndex(year){
  if(yearIndex._y===year) return yearIndex._v;
  const byDay={}, list=[];
  OCC.forEach(o=>{
    const r=resolveDate(o,year);
    if(!r.d) return;
    const rec={o, m:r.m, d:r.d};
    list.push(rec);
    (byDay[r.m+'-'+r.d]=byDay[r.m+'-'+r.d]||[]).push(rec);
  });
  list.sort((a,b)=> a.m-b.m || a.d-b.d || b.o.rel-a.o.rel);
  yearIndex._y=year; yearIndex._v={byDay, list};
  return yearIndex._v;
}
const passes = o => (o._k==='g'&&state.filters.global)||(o._k==='l'&&state.filters.local)||(o._k==='h'&&state.filters.hijri);
const esc = s => String(s==null?'':s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function dayDelta(m,d,year){
  const target=Date.UTC(year,m-1,d), now=Date.UTC(TODAY.y,TODAY.m-1,TODAY.d);
  return Math.round((target-now)/86400000);
}
function fmtDate(m,d){ return state.lang==='ar' ? `${d} ${t().months[m-1]}` : `${t().months[m-1]} ${d}`; }
/* multi-day events read as a span: "1–4 فبراير" / "February 1–4" */
function fmtSpan(m,d,ed){
  if(!ed || ed<=d) return fmtDate(m,d);
  return state.lang==='ar' ? `${d}–${ed} ${t().months[m-1]}` : `${t().months[m-1]} ${d}–${ed}`;
}

/* ---------- My plan (starred occasions) ---------- */
const FAV = new Set();
try{ (JSON.parse(localStorage.getItem('td_fav')||'[]')||[]).forEach(x=>FAV.add(x)); }catch(e){}
function saveFav(){ try{ localStorage.setItem('td_fav', JSON.stringify([...FAV])); }catch(e){} }
const STAR_SVG='<svg viewBox="0 0 24 24"><path d="M12 17.27l5.18 3.13-1.37-5.89 4.57-3.96-6.02-.52L12 4.5 9.64 10.03l-6.02.52 4.57 3.96-1.37 5.89z"/></svg>';
function starBtn(slug){
  return `<button class="star ${FAV.has(slug)?'on':''}" data-fav="${slug}" aria-label="${t().addPlan}">${STAR_SVG}</button>`;
}
function fmtHijri(y,m,d){ const h=toHijri(y,m,d); return `${h.day} ${hijriName(h.month)} ${h.year}`; }

/* ===================== Toast ===================== */
let toastTimer;
function toast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg; el.classList.add('show');
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.classList.remove('show'),2600);
}

/* ===================== ICS ===================== */
function pad(n){ return String(n).padStart(2,'0'); }
function buildICS(o){
  const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Tact Digital Communication//TACT DAYS//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH'];
  const stamp=new Date().toISOString().replace(/[-:]/g,'').split('.')[0]+'Z';
  const title=(o.en||o.ar).replace(/[,;\\]/g,' ');
  const years = (o.rec==='annual_fixed') ? [state.year] : [state.year, state.year+1, state.year+2];
  years.forEach(yr=>{
    const r=resolveDate(o,yr); if(!r.d) return;
    const start=`${yr}${pad(r.m)}${pad(r.d)}`;
    let endD=new Date(yr, r.m-1, r.d+1);
    if(o.ed && o.ed>r.d) endD=new Date(yr, r.m-1, o.ed+1);   // multi-day event
    if(o.rec==='month_long') endD=new Date(yr, r.m, 1);
    const end=`${endD.getFullYear()}${pad(endD.getMonth()+1)}${pad(endD.getDate())}`;
    lines.push('BEGIN:VEVENT');
    lines.push(`UID:${o.s}-${yr}@tactdays`);
    lines.push(`DTSTAMP:${stamp}`);
    lines.push(`SUMMARY:${title}`);
    lines.push(`DTSTART;VALUE=DATE:${start}`);
    lines.push(`DTEND;VALUE=DATE:${end}`);
    const desc=(o.de||o.da||'').replace(/[,;\\]/g,' ');
    if(desc) lines.push(`DESCRIPTION:${desc}`);
    lines.push('TRANSP:TRANSPARENT');
    if(o.rec==='annual_fixed') lines.push('RRULE:FREQ=YEARLY');
    lines.push('END:VEVENT');
  });
  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}
function downloadICS(slug){
  const o=OCC.find(x=>x.s===slug); if(!o) return;
  const blob=new Blob([buildICS(o)],{type:'text/calendar;charset=utf-8'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob); a.download=o.s+'.ics';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href), 1500);
  toast(t().icsDone);
}
async function shareOcc(slug){
  const o=OCC.find(x=>x.s===slug); if(!o) return;
  const r=resolveDate(o,state.year);
  const url=location.origin+location.pathname+'#/day/'+o.s;
  const text=`${nameOf(o)} — ${fmtDate(r.m,r.d)}`;
  if(navigator.share){
    try{ await navigator.share({title:nameOf(o), text, url}); return; }catch(e){ if(e&&e.name==='AbortError') return; }
  }
  try{ await navigator.clipboard.writeText(url+' — '+text); toast(t().linkCopied); }
  catch(e){ toast(url); }
}

/* ===================== Shared bits ===================== */
function accentOf(o){ const c=CATMAP[o.cat]; return ACCENT[c?c.ac:'charcoal'] || ACCENT.charcoal; }
/* readable text colour on a given accent — white washes out on the yellow and teal cards */
function inkOn(hex){
  const n=parseInt(hex.slice(1),16), r=(n>>16)&255, g=(n>>8)&255, b=n&255;
  return (0.299*r + 0.587*g + 0.114*b) > 150 ? '#282829' : '#FFFFFF';
}
function tagsFor(o){
  const out=[];
  if(o.cal==='hijri') out.push(`<span class="tag hijri">${t().hijriCal}</span>`);
  if(o.sc==='local')  out.push(`<span class="tag local">${t().scopeLocal}</span>`);
  if(o.sen==='sensitive') out.push(`<span class="tag sens">${t().sensitive}</span>`);
  const c=CATMAP[o.cat]; if(c) out.push(`<span class="tag">${esc(catName(c))}</span>`);
  return out.join('');
}
function occCard(rec){
  const o=rec.o, acc=accentOf(o);
  const d=descOf(o);
  return `<article class="occ-card">
    <a href="#/day/${o.s}" class="occ-visual" style="background:linear-gradient(135deg, ${acc}, ${acc}cc);color:${inkOn(acc)}">
      <span class="vtag">${o.cal==='hijri'?t().hijriCal:(o.sc==='local'?t().scopeLocal:t().scopeGlobal)}</span>
      <span><span class="vdate">${o.ed&&o.ed>rec.d?rec.d+'–'+o.ed:rec.d}</span><span class="vmon">${t().months[rec.m-1]}</span></span>
    </a>
    ${starBtn(o.s)}
    <div class="occ-body">
      <a href="#/day/${o.s}"><h3>${esc(nameOf(o))}</h3></a>
      ${altOf(o)?`<div class="alt en-text">${esc(altOf(o))}</div>`:''}
      <p>${d?esc(d):`<em style="opacity:.7">${t().unverified}</em>`}</p>
      <div class="occ-meta">${tagsFor(o)}</div>
      <div class="occ-actions">
        <a class="act" href="#/day/${o.s}"><svg viewBox="0 0 24 24"><path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z"/></svg>${t().details}</a>
        <button class="act" data-share="${o.s}"><svg viewBox="0 0 24 24"><path d="M18 16.08a2.9 2.9 0 00-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.5.47 1.17.76 1.92.76a2.92 2.92 0 100-5.83 2.92 2.92 0 00-2.92 2.91c0 .24.04.47.09.7L8 9.81A2.9 2.9 0 006.08 9a2.92 2.92 0 000 5.83c.75 0 1.42-.29 1.92-.76l7.12 4.16c-.05.21-.08.43-.08.65A2.84 2.84 0 1018 16.08z"/></svg>${t().share}</button>
        <button class="act" data-ics="${o.s}"><svg viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 18H5V9h14v12zM7 11h5v5H7v-5z"/></svg>${t().addCal}</button>
      </div>
    </div>
  </article>`;
}
function miniOcc(rec){
  const o=rec.o;
  return `<a class="mini-occ" href="#/day/${o.s}">
    <span class="md"><b>${rec.d}</b><i>${t().months[rec.m-1]}</i></span>
    <span class="mt">${esc(nameOf(o))}${altOf(o)?`<small class="en-text">${esc(altOf(o))}</small>`:''}</span>
  </a>`;
}

/* ================================================================
   Views, router, motion, game, my-plan
   ================================================================ */

/* ===================== Chrome: nav, footer, language ===================== */
const ROUTES = [["home","#/"],["cats","#/categories"],["days","#/days"],["idea","#/idea"],["cal","#/calendar"],["about","#/about"]];

function renderChrome(){
  document.documentElement.lang = state.lang;
  document.documentElement.dir  = t().dir;
  document.getElementById('langBtn').textContent = t().other;
  document.getElementById('navLinks').innerHTML =
    ROUTES.map(([k,h])=>`<a href="${h}" data-route="${h}">${t().nav[k]}</a>`).join('');
  document.getElementById('footTag').textContent = t().footTag;
  document.getElementById('crYear').textContent = TODAY.y;
  document.getElementById('footCols').innerHTML = `
    <div class="foot-col"><h5>${t().footProduct}</h5>
      ${ROUTES.slice(1).map(([k,h])=>`<a href="${h}">${t().nav[k]}</a>`).join('')}
    </div>
`;
  markActive();
}
function markActive(){
  const h=location.hash||'#/';
  document.querySelectorAll('#navLinks a').forEach(a=>{
    const r=a.dataset.route;
    a.classList.toggle('on', r==='#/' ? h==='#/' : h.startsWith(r));
  });
}

/* ===================== Views ===================== */
function viewHome(){
  const idx=yearIndex(TODAY.y);
  const todays=(idx.byDay[TODAY.m+'-'+TODAY.d]||[]).filter(r=>passes(r.o))
                 .sort((a,b)=>b.o.rel-a.o.rel);
  let featured, isToday=true, rest=[];
  if(todays.length){ featured=todays[0]; rest=todays.slice(1); }
  else {
    isToday=false;
    const future=idx.list.filter(r=>dayDelta(r.m,r.d,TODAY.y)>0);
    featured = future[0] || yearIndex(TODAY.y+1).list[0];
  }
  const upcoming=idx.list.filter(r=>dayDelta(r.m,r.d,TODAY.y)>0).slice(0,7);
  const o=featured.o, acc=accentOf(o), delta=dayDelta(featured.m,featured.d,TODAY.y);
  cdPending=[featured.m, featured.d, TODAY.y];
  const d=descOf(o);

  const stats=[
    [OCC.length, t().statAll],
    [OCC.filter(x=>x._k==='g').length, t().statGlobal],
    [OCC.filter(x=>x._k==='l').length, t().statLocal],
    [OCC.filter(x=>x.cal==='hijri').length, t().statHijri]
  ];

  return `
  <section class="hero">
    <span class="aurora a1"></span><span class="aurora a2"></span><span class="aurora a3"></span>
    <div class="wrap">
     <div class="hero-layout">
      <div class="hero-copy">
        <div class="eyebrow">TACT DAYS</div>
        <h1>${splitWords(t().heroTitle[0],0)}<br><em>${splitWords(t().heroTitle[1],t().heroTitle[0].split(' ').length)}</em></h1>
        <p class="lede">${t().heroLede}</p>
        <div class="cta-row">
          <a class="btn btn-primary magnet" href="#/days">${t().ctaExplore}</a>
          <a class="btn magnet" style="background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.2)" href="#/idea">${t().ctaIdea}</a>
        </div>
        <div class="hero-stats">
          ${stats.map(([n,l])=>`<div><b>${n}</b><span>${l}</span></div>`).join('')}
        </div>
      </div>
      ${gameShell()}
     </div>
    </div>
  </section>

  <section class="today-band"><div class="wrap">
    <div class="today-card">
      <div class="today-main">
        <div class="today-label"><span class="pulse"></span>
          <span>${isToday ? t().todayIs : t().comingUp}</span>
        </div>
        <h2>${esc(nameOf(o))}</h2>
        ${altOf(o)?`<div class="alt en-text">${esc(altOf(o))}</div>`:''}
        <div class="today-dates">
          <span class="date-chip">${t().gregorian}: <b>${fmtDate(featured.m,featured.d)} ${TODAY.y}</b></span>
          <span class="date-chip">${t().hijriCal}: <b>${fmtHijri(TODAY.y,featured.m,featured.d)}</b></span>
          ${!isToday&&delta>0?`<span class="date-chip">${t().countdown}: <b>${delta} ${t().days}</b></span>`:''}
        </div>
        <div style="display:flex;gap:22px;align-items:center;margin-top:18px">
          <div>${ringHTML(delta)}<div class="live-cd" id="liveCd"></div></div>
          <p class="today-desc" style="margin-top:0">${d?esc(d):t().pendingDesc}</p>
        </div>
        <div class="today-actions">
          <a class="btn btn-dark btn-sm" href="#/day/${o.s}">${t().exploreDay}</a>
          <a class="btn btn-primary btn-sm" href="#/idea/${o.s}">${t().genIdeas}</a>
        </div>
      </div>
      <aside class="today-side">
        <h4>${rest.length? t().alsoToday : t().upcoming}</h4>
        ${(rest.length?rest:upcoming).slice(0,5).map(miniOcc).join('') || `<div style="color:var(--faint);font-size:13px">—</div>`}
      </aside>
    </div>
  </div></section>

  ${tickerHTML(upcoming)}

  ${yearPulse()}

  <section class="band"><div class="wrap">
    <div class="sec-head">
      <div><div class="eyebrow">${t().catsTitle}</div><h2>${t().catsTitle}</h2><p>${t().catsLede}</p></div>
      <a class="link-more" href="#/categories">${t().viewAll} →</a>
    </div>
    <div class="cat-grid">${CATS.slice(0,8).map(catCard).join('')}</div>
  </div></section>

  <section class="band tight" style="background:var(--card);border-block:1px solid var(--line)"><div class="wrap">
    <div class="sec-head">
      <div><h2>${t().upcoming}</h2></div>
      <a class="link-more" href="#/days">${t().viewAll} →</a>
    </div>
    <div class="occ-grid">${upcoming.slice(0,6).map(occCard).join('')}</div>
  </div></section>

  <section class="band"><div class="wrap">
    <div style="background:var(--charcoal);color:#F5F3F0;border-radius:24px;padding:48px 44px;position:relative;overflow:hidden">
      <div style="position:absolute;inset:0;background:radial-gradient(circle at 85% 20%, rgba(241,93,42,.35), transparent 50%)"></div>
      <div style="position:relative;max-width:60ch">
        <div class="eyebrow">AI</div>
        <h2 style="font-size:clamp(24px,3.6vw,38px)">${t().ideaTitle}</h2>
        <p style="margin-top:14px;color:#B9B6B3">${t().ideaLede}</p>
        <a class="btn btn-primary" style="margin-top:26px" href="#/idea">${t().ctaIdea}</a>
      </div>
    </div>
  </div></section>`;
}

/* ---------- My plan: tray, panel, bulk export ---------- */
let planOpen=false;
function renderTray(bump){
  let tray=document.getElementById('tray');
  if(!FAV.size){ if(tray) tray.remove(); const pp=document.getElementById('planPanel'); if(pp){pp.remove();planOpen=false;} return; }
  if(!tray){
    tray=document.createElement('button');
    tray.id='tray'; tray.className='tray';
    document.body.appendChild(tray);
    tray.addEventListener('click', togglePlan);
  }
  tray.innerHTML=`${STAR_SVG}<span>${t().myPlan}</span><span class="cnt ${bump?'bump':''}">${FAV.size}</span>`;
  if(planOpen) renderPlanPanel();
}
function planRecords(){
  const idx=yearIndex(state.year);
  return [...FAV].map(s=>idx.list.find(r=>r.o.s===s)).filter(Boolean).sort((a,b)=>a.m-b.m||a.d-b.d);
}
function renderPlanPanel(){
  let p=document.getElementById('planPanel');
  if(!p){ p=document.createElement('div'); p.id='planPanel'; p.className='plan-panel'; document.body.appendChild(p); }
  const recs=planRecords();
  p.innerHTML=`
    <div class="plan-head"><h4>${t().myPlan} · ${recs.length}</h4>
      <button class="pi-x" data-planclose="1">✕</button></div>
    <div class="plan-list">${recs.length?recs.map(r=>`
      <div class="plan-item">
        <span class="pi-d">${fmtSpan(r.m,r.d,r.o.ed)}</span>
        <a class="pi-n" href="#/day/${r.o.s}">${esc(nameOf(r.o))}</a>
        <button class="pi-x" data-fav="${r.o.s}">✕</button>
      </div>`).join('') : `<div style="padding:26px;text-align:center;color:var(--faint);font-size:13px">${t().planEmpty}</div>`}</div>
    ${recs.length?`<div class="plan-foot">
      <button class="btn btn-primary btn-sm" style="flex:1" data-planexport="1">${t().planExport}</button>
      <button class="btn btn-ghost btn-sm" data-planclear="1">${t().planClear}</button></div>`:''}`;
}
function togglePlan(){
  planOpen=!planOpen;
  const p=document.getElementById('planPanel');
  if(!planOpen){ if(p) p.remove(); } else renderPlanPanel();
}
function toggleFav(slug, btn){
  if(FAV.has(slug)){ FAV.delete(slug); toast(t().removed); }
  else { FAV.add(slug); toast(t().saved); }
  saveFav();
  document.querySelectorAll(`[data-fav="${slug}"]`).forEach(b=>b.classList.toggle('on', FAV.has(slug)));
  renderTray(true);
}
function exportPlan(){
  const recs=planRecords(); if(!recs.length) return;
  const parts=recs.map(r=>buildICS(r.o).split('\r\n').slice(5,-1).join('\r\n'));
  const ics=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Tact Digital Communication//TACT DAYS//EN',
             'CALSCALE:GREGORIAN','METHOD:PUBLISH',...parts,'END:VCALENDAR'].join('\r\n');
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([ics],{type:'text/calendar;charset=utf-8'}));
  a.download='tact-days-plan.ics'; document.body.appendChild(a); a.click(); a.remove();
  toast(t().icsDone);
}

/* ---------- live countdown that ticks ---------- */
let cdTimer=null;
function startLiveCountdown(m,d,yr){
  clearInterval(cdTimer);
  const el=document.getElementById('liveCd'); if(!el) return;
  const target=new Date(yr, m-1, d, 0, 0, 0).getTime();
  const tick=()=>{
    let s=Math.floor((target-Date.now())/1000);
    if(s<0){ el.textContent=''; clearInterval(cdTimer); return; }
    const dd=Math.floor(s/86400); s-=dd*86400;
    const hh=Math.floor(s/3600); s-=hh*3600;
    const mm=Math.floor(s/60); const ss=s-mm*60;
    el.innerHTML=`<b>${dd}</b>${t().cdDays} <b>${String(hh).padStart(2,'0')}</b>${t().cdHours} `+
                 `<b>${String(mm).padStart(2,'0')}</b>${t().cdMins} <b>${String(ss).padStart(2,'0')}</b>${t().cdSecs}`;
  };
  tick(); cdTimer=setInterval(tick,1000);
}

/* ---------- Year pulse: 365 cells, one per day ---------- */
function yearPulse(){
  const y=state.year, idx=yearIndex(y);
  let cellIndex=0, rows='';
  for(let m=1;m<=12;m++){
    const nd=daysInMonth(y,m);
    let cells='';
    for(let d=1;d<=31;d++){
      if(d>nd){ cells+='<span class="pcell void"></span>'; continue; }
      const recs=(idx.byDay[m+'-'+d]||[]).filter(r=>passes(r.o));
      const isToday = (y===TODAY.y && m===TODAY.m && d===TODAY.d);
      let style='', cls='pcell';
      if(recs.length){
        const top=recs.slice().sort((a,b)=>b.o.rel-a.o.rel)[0];
        const acc=accentOf(top.o);
        const alpha=Math.min(1, 0.42 + recs.length*0.22);
        style=`background:${acc};opacity:${alpha};`;
        cls+=' has';
      }
      if(isToday) cls+=' now';
      cells+=`<button class="${cls}" style="${style}animation-delay:${Math.min(cellIndex,370)*2.2}ms"
        ${recs.length?`data-pd="${m}-${d}"`:''} aria-label="${d} ${t().months[m-1]}"></button>`;
      cellIndex++;
    }
    rows+=`<div class="prow"><span class="pm">${t().months[m-1]}</span><div class="pcells">${cells}</div></div>`;
  }
  const busiest=Object.entries(idx.byDay).map(([k,v])=>[k,v.length]).sort((a,b)=>b[1]-a[1])[0];
  return `<section class="band"><div class="wrap">
    <div class="sec-head">
      <div><div class="eyebrow">${t().pulseTitle}</div><h2>${t().pulseTitle} ${y}</h2><p>${t().pulseLede}</p></div>
      <button class="btn btn-ghost btn-sm magnet" data-surprise="1">
        <span class="dice">🎲</span><span class="roll"><span id="rollTxt">${t().surprise}</span></span>
      </button>
    </div>
    <div class="pulse-wrap"><div class="pulse-grid">${rows}</div>
      <div class="plegend">
        <span>${t().pulseNone}</span>
        <span class="sc">
          <i style="background:rgba(255,255,255,.055)"></i>
          <i style="background:var(--teal);opacity:.64"></i>
          <i style="background:var(--orange);opacity:.86"></i>
          <i style="background:var(--orange)"></i>
        </span>
        <span>${busiest?busiest[1]:0} ${t().pulseMany}</span>
        <span style="margin-inline-start:auto;display:flex;align-items:center;gap:7px">
          <i style="width:11px;height:11px;border-radius:3px;box-shadow:0 0 0 2px var(--orange);display:block"></i>${t().pulseToday}</span>
      </div>
    </div>
  </div></section>`;
}
function wirePulse(){
  const grid=document.querySelector('#app .pulse-grid'); if(!grid) return;
  let tip=document.getElementById('ptip');
  if(!tip){ tip=document.createElement('div'); tip.id='ptip'; tip.className='ptip'; document.body.appendChild(tip); }
  grid.addEventListener('pointerover', e=>{
    const c=e.target.closest('[data-pd]'); if(!c) return;
    const [m,d]=c.dataset.pd.split('-').map(Number);
    const recs=(yearIndex(state.year).byDay[m+'-'+d]||[]).filter(r=>passes(r.o));
    tip.innerHTML=`<b>${fmtDate(m,d)} · ${fmtHijri(state.year,m,d)}</b>`+
      recs.map(r=>esc(nameOf(r.o))).join('<br>');
    const r=c.getBoundingClientRect();
    tip.style.left=Math.min(window.innerWidth-300, Math.max(12, r.left-120))+'px';
    tip.style.top=(r.bottom+10)+'px';
    tip.classList.add('on');
  });
  grid.addEventListener('pointerout', e=>{ if(e.target.closest('[data-pd]')) tip.classList.remove('on'); });
  grid.addEventListener('click', e=>{
    const c=e.target.closest('[data-pd]'); if(!c) return;
    const [m,d]=c.dataset.pd.split('-').map(Number);
    const rec=(yearIndex(state.year).byDay[m+'-'+d]||[]).filter(r=>passes(r.o))
                .sort((a,b)=>b.o.rel-a.o.rel)[0];
    if(rec){ tip.classList.remove('on'); location.hash='#/day/'+rec.o.s; }
  });
}
/* slot-machine roll, then land on a random occasion */
function rollSurprise(btn){
  const out=document.getElementById('rollTxt'); if(!out) return;
  const pool=yearIndex(state.year).list.filter(r=>passes(r.o));
  if(!pool.length) return;
  const target=pool[rnd(pool.length)];
  let n=0;
  const spin=()=>{
    out.textContent=nameOf(pool[rnd(pool.length)].o);
    if(++n<14){ setTimeout(spin, 55+n*9); }
    else {
      out.textContent=nameOf(target.o);
      setTimeout(()=>{ location.hash='#/day/'+target.o.s; }, 520);
    }
  };
  spin();
}
/* countdown ring for the Today card */
function ringHTML(delta){
  const span=Math.max(1, Math.min(90, delta||1));
  const pct=1-(span/90), C=2*Math.PI*42;
  return `<div class="ring-wrap">
    <svg viewBox="0 0 96 96">
      <circle class="ring-bg" cx="48" cy="48" r="42"></circle>
      <circle class="ring-fg" cx="48" cy="48" r="42"
        stroke-dasharray="${C}" stroke-dashoffset="${C}" data-off="${C*(1-pct)}"></circle>
    </svg>
    <div class="ring-txt"><b>${delta===0?'0':delta}</b><span>${delta===0?t().today:t().days}</span></div>
  </div>`;
}
function animateRing(){
  const fg=document.querySelector('#app .ring-fg'); if(!fg) return;
  requestAnimationFrame(()=>requestAnimationFrame(()=>{ fg.style.strokeDashoffset=fg.dataset.off; }));
}
/* branded PNG card for an occasion */
async function downloadCard(slug){
  const o=OCC.find(x=>x.s===slug); if(!o) return;
  let yr=TODAY.y, r=resolveDate(o,yr);
  if(!r.d || dayDelta(r.m,r.d,yr)<0){ yr=TODAY.y+1; r=resolveDate(o,yr); }
  const W=1080,H=1350, acc=accentOf(o);
  const cv=document.createElement('canvas'); cv.width=W; cv.height=H;
  const x=cv.getContext('2d');
  if(!x){ toast('—'); return; }
  try{ await document.fonts.load('700 72px "Readex Pro"'); await document.fonts.load('400 34px "Readex Pro"'); }catch(e){}
  x.fillStyle='#282829'; x.fillRect(0,0,W,H);
  const g=x.createRadialGradient(W*0.85,H*0.1,0,W*0.85,H*0.1,W*0.9);
  g.addColorStop(0, acc+'66'); g.addColorStop(1,'#28282900');
  x.fillStyle=g; x.fillRect(0,0,W,H);
  x.fillStyle=acc; x.fillRect(0,0,W,14);
  const logo=document.querySelector('.nav-brand img');
  if(logo && logo.complete){ const lw=210, lh=lw*logo.naturalHeight/logo.naturalWidth; x.drawImage(logo,80,92,lw,lh); }
  x.direction = state.lang==='ar' ? 'rtl':'ltr';
  const X = state.lang==='ar' ? W-80 : 80;
  x.textAlign = state.lang==='ar' ? 'right':'left';
  x.fillStyle=acc; x.font='700 30px "Readex Pro", sans-serif';
  const c=CATMAP[o.cat]; x.fillText(c?catName(c):'', X, 330);
  x.fillStyle='#F5F3F0'; x.font='700 78px "Readex Pro", sans-serif';
  const words=nameOf(o).split(' '); let line='', yy=430;
  for(const w of words){
    const test=line?line+' '+w:w;
    if(x.measureText(test).width > W-160 && line){ x.fillText(line,X,yy); yy+=98; line=w; }
    else line=test;
  }
  if(line) x.fillText(line,X,yy);
  const alt=altOf(o);
  if(alt){ x.fillStyle='#9A9A9D'; x.font='400 34px "Readex Pro", sans-serif';
           x.direction='ltr'; x.fillText(alt.slice(0,46), X, yy+70); x.direction=state.lang==='ar'?'rtl':'ltr'; }
  x.fillStyle='#F5F3F0'; x.font='700 56px "Readex Pro", sans-serif';
  x.fillText(`${fmtDate(r.m,r.d)} ${yr}`, X, H-300);
  x.fillStyle=acc; x.font='400 38px "Readex Pro", sans-serif';
  x.fillText(fmtHijri(yr,r.m,r.d)+' هـ', X, H-230);
  x.fillStyle='#6B6B6E'; x.font='400 26px "Readex Pro", sans-serif';
  x.fillText('TACT DAYS · @tactsa', X, H-110);
  const a=document.createElement('a');
  a.href=cv.toDataURL('image/png'); a.download=o.s+'.png';
  document.body.appendChild(a); a.click(); a.remove();
  toast(t().cardReady);
}

function splitWords(str, offset){
  return str.split(' ').map((w,i)=>
    `<span class="wmask"><span class="w" style="animation-delay:${(offset+i)*80}ms">${esc(w)}</span></span>`
  ).join(' ');
}
function tickerHTML(list){
  if(!list.length) return '';
  const items = list.concat(list).map(r=>
    `<a class="ticker-item" href="#/day/${r.o.s}"><i></i><b>${fmtSpan(r.m,r.d,r.o.ed)}</b> ${esc(nameOf(r.o))}</a>`
  ).join('');
  return `<div class="ticker"><div class="ticker-track">${items}</div></div>`;
}

/* ===================== Days Challenge ===================== */
const GAME={best:0,score:0,streak:0,lives:3,q:null,locked:false,raf:null,t0:0};
try{ GAME.best = parseInt(localStorage.getItem('td_best')||'0',10) || 0; }catch(e){}
const rnd=n=>Math.floor(Math.random()*n);
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=rnd(i+1);[a[i],a[j]]=[a[j],a[i]];} return a; }

function gameShell(){
  return `<div class="game" id="game">
    <div class="game-head">
      <div><div class="gt">${t().gameTitle}</div><div class="gb">${t().gameBest}: <b id="gBest">${GAME.best}</b></div></div>
      <div class="lives" id="gLives"></div>
    </div>
    <div id="gameBody"></div>
  </div>`;
}
function gameStartHTML(){
  return `<div class="game-start">
    <p>${t().gameIntro}</p>
    <button class="btn btn-primary" style="width:100%" data-gstart="1">${t().gameStart}</button>
  </div>`;
}
function renderLives(){
  const el=document.getElementById('gLives'); if(!el) return;
  el.innerHTML=[0,1,2].map(i=>`<i class="${i<GAME.lives?'':'off'}"></i>`).join('');
}
function newQuestion(){
  const pool=yearIndex(state.year).list.filter(r=>r.o.rel>=3 && r.o.rec!=='month_long');
  const rec=pool[rnd(pool.length)];
  const type=['date','month','cat'][rnd(3)];
  let label, prompt, options, correct;
  if(type==='date'){
    label=t().qDate; prompt=`<b>${fmtDate(rec.m,rec.d)}</b>`;
    correct=nameOf(rec.o);
    const others=[];
    for(const r of shuffle(pool)){
      if(others.length===3) break;
      const n=nameOf(r.o);
      if(n!==correct && !others.includes(n) && !(r.m===rec.m&&r.d===rec.d)) others.push(n);
    }
    options=shuffle([correct,...others]);
  } else if(type==='month'){
    label=t().qMonth; prompt=`<b>${esc(nameOf(rec.o))}</b>`;
    correct=t().months[rec.m-1];
    const ms=shuffle([...Array(12).keys()].filter(i=>i!==rec.m-1)).slice(0,3).map(i=>t().months[i]);
    options=shuffle([correct,...ms]);
  } else {
    label=t().qCat; prompt=`<b>${esc(nameOf(rec.o))}</b>`;
    correct=catName(CATMAP[rec.o.cat]);
    const cs=shuffle(CATS.filter(c=>c.s!==rec.o.cat)).slice(0,3).map(catName);
    options=shuffle([correct,...cs]);
  }
  return {type,label,prompt,options,correct,rec};
}
function renderQuestion(){
  GAME.q=newQuestion(); GAME.locked=false;
  const body=document.getElementById('gameBody'); if(!body) return;
  body.innerHTML=`
    <div class="timer"><span id="gTimer"></span></div>
    <div class="game-q">${GAME.q.label}</div>
    <div class="game-p">${GAME.q.prompt}</div>
    <div class="opts">${GAME.q.options.map((o,i)=>
      `<button class="opt" data-opt="${esc(o)}" style="animation-delay:${i*60}ms">${esc(o)}</button>`).join('')}</div>
    <div class="game-foot">
      <div class="score"><b id="gScore">${GAME.score}</b><span>${t().gameScore}</span></div>
      <div class="streak ${GAME.streak>1?'on':''}" id="gStreak">×${GAME.streak} ${t().gameStreak}</div>
    </div>`;
  renderLives();
  startTimer();
}
function startTimer(){
  cancelAnimationFrame(GAME.raf);
  const bar=document.getElementById('gTimer'); if(!bar) return;
  const DUR=12000; GAME.t0=performance.now();
  const tick=now=>{
    if(GAME.locked) return;
    const p=Math.min(1,(now-GAME.t0)/DUR);
    bar.style.transform='scaleX('+(1-p)+')';
    if(p>=1){ answer(null); return; }
    GAME.raf=requestAnimationFrame(tick);
  };
  GAME.raf=requestAnimationFrame(tick);
}
function sparks(el){
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const host=document.getElementById('game'); if(!host) return;
  const hr=host.getBoundingClientRect(), r=el.getBoundingClientRect();
  const cx=r.left-hr.left+r.width/2, cy=r.top-hr.top+r.height/2;
  const cols=['#F15D2A','#FFC63E','#4CC0AF','#FFFFFF'];
  for(let i=0;i<14;i++){
    const sp=document.createElement('span');
    sp.className='spark';
    sp.style.left=cx+'px'; sp.style.top=cy+'px';
    sp.style.background=cols[rnd(cols.length)];
    const a=Math.random()*Math.PI*2, dist=40+Math.random()*70;
    sp.style.setProperty('--dx',Math.cos(a)*dist+'px');
    sp.style.setProperty('--dy',Math.sin(a)*dist+'px');
    sp.style.animation=`tdSpark ${500+Math.random()*350}ms cubic-bezier(.2,.8,.3,1) forwards`;
    host.appendChild(sp);
    setTimeout(()=>sp.remove(),900);
  }
}
function answer(choice){
  if(GAME.locked) return;
  GAME.locked=true; cancelAnimationFrame(GAME.raf);
  const correct=GAME.q.correct;
  const btns=[...document.querySelectorAll('#gameBody .opt')];
  btns.forEach(b=>{
    b.classList.add('done');
    if(b.dataset.opt===correct) b.classList.add('ok');
    else if(choice!==null && b.dataset.opt===choice) b.classList.add('no');
  });
  if(choice===correct){
    GAME.score += 10 + GAME.streak*2;
    GAME.streak++;
    const el=btns.find(b=>b.dataset.opt===correct); if(el) sparks(el);
    const sc=document.getElementById('gScore'); if(sc) sc.textContent=GAME.score;
    const st=document.getElementById('gStreak');
    if(st){ st.textContent='×'+GAME.streak+' '+t().gameStreak; st.classList.toggle('on',GAME.streak>1); }
  } else {
    GAME.lives--; GAME.streak=0; renderLives();
    const st=document.getElementById('gStreak'); if(st) st.classList.remove('on');
  }
  setTimeout(()=>{ GAME.lives>0 ? renderQuestion() : renderGameOver(); }, 1250);
}
function renderGameOver(){
  const body=document.getElementById('gameBody'); if(!body) return;
  const isBest=GAME.score>GAME.best;
  if(isBest){ GAME.best=GAME.score; try{ localStorage.setItem('td_best',String(GAME.best)); }catch(e){} }
  const bEl=document.getElementById('gBest'); if(bEl) bEl.textContent=GAME.best;
  const last=GAME.q && GAME.q.rec;
  body.innerHTML=`<div class="game-start">
    <div class="gt" style="color:var(--yellow);font-size:12px;letter-spacing:1.4px">${t().gameOver}</div>
    <div class="score" style="justify-content:center;margin:14px 0 4px"><b style="font-size:46px">${GAME.score}</b><span>${t().gameScore}</span></div>
    ${isBest?`<p style="color:var(--yellow);font-weight:700">★ ${t().newBest}</p>`:`<p>${t().gameBest}: ${GAME.best}</p>`}
    <button class="btn btn-primary" style="width:100%" data-gstart="1">${t().gameAgain}</button>
    ${last?`<a class="btn" style="width:100%;margin-top:8px;background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.18)" href="#/day/${last.o.s}">${t().seeDay}</a>`:''}
  </div>`;
  renderLives();
}
function wireGame(){
  const g=document.getElementById('game'); if(!g) return;
  GAME.score=0; GAME.streak=0; GAME.lives=3; GAME.locked=true;
  cancelAnimationFrame(GAME.raf);
  document.getElementById('gameBody').innerHTML=gameStartHTML();
  renderLives();
  g.addEventListener('click', e=>{
    if(e.target.closest('[data-gstart]')){
      GAME.score=0; GAME.streak=0; GAME.lives=3; renderQuestion(); return;
    }
    const o=e.target.closest('.opt');
    if(o && !GAME.locked) answer(o.dataset.opt);
  });
}

/* buttons lean toward the pointer */
function wireMagnets(){
  document.querySelectorAll('#app .magnet').forEach(el=>{
    el.addEventListener('pointermove', e=>{
      const r=el.getBoundingClientRect();
      el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*0.16}px, ${(e.clientY-r.top-r.height/2)*0.26}px)`;
    });
    el.addEventListener('pointerleave', ()=>{ el.style.transform=''; });
  });
}
/* occasion cards tilt a little under the pointer */
function wireTilt(){
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('#app .occ-card').forEach(card=>{
    card.addEventListener('pointermove', e=>{
      const r=card.getBoundingClientRect();
      const px=(e.clientX-r.left)/r.width-0.5, py=(e.clientY-r.top)/r.height-0.5;
      card.style.transform=`perspective(900px) rotateX(${-py*5}deg) rotateY(${px*6}deg) translateY(-3px)`;
    });
    card.addEventListener('pointerleave', ()=>{ card.style.transform=''; });
  });
}

function catCard(c){
  const n=CATCOUNT[c.s]||0, acc=ACCENT[c.ac];
  return `<a class="cat-card ${n?'':'empty'}" href="#/categories" data-pickcat="${c.s}">
    <span class="bar" style="background:${acc}"></span>
    <span class="ico" style="background:${acc}1f;color:${acc}"><svg viewBox="0 0 24 24"><path d="${CAT_ICON[c.s]||CAT_ICON['international-global']}"/></svg></span>
    <h3>${esc(catName(c))}</h3>
    <div class="sub en-text">${esc(state.lang==='ar'?c.en:c.ar)}</div>
    <div class="cnt">${n} ${t().occCount}</div>
  </a>`;
}

let catsSel='';
function ddHTML(){
  const cur = catsSel ? CATMAP[catsSel] : null;
  const total = OCC.length;
  return `<div class="dd" id="catDD">
    <button class="dd-btn" type="button" aria-haspopup="listbox" aria-expanded="false">
      <span class="dot" style="background:${cur?ACCENT[cur.ac]:'var(--muted)'}"></span>
      <span class="lbl">${cur?esc(catName(cur)):t().allCats}</span>
      <span class="n">${cur?(CATCOUNT[cur.s]||0):total}</span>
      <svg class="chev" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
    </button>
    <div class="dd-panel" hidden role="listbox">
      <button data-cat="" class="${catsSel?'':'sel'}" role="option">
        <span class="dot" style="background:var(--muted)"></span>
        <span class="nm">${t().allCats}</span><span class="n">${total}</span></button>
      ${CATS.map(c=>`<button data-cat="${c.s}" class="${catsSel===c.s?'sel':''}" role="option">
        <span class="dot" style="background:${ACCENT[c.ac]}"></span>
        <span class="nm">${esc(catName(c))}</span>
        <span class="n">${CATCOUNT[c.s]||0}</span></button>`).join('')}
    </div>
  </div>`;
}
function viewCategories(){
  const sel = catsSel ? CATMAP[catsSel] : null;
  let body;
  if(sel){
    const list = yearIndex(state.year).list.filter(r=>r.o.cat===sel.s && passes(r.o));
    body = `${filterBar()}
      ${list.length?`<div class="occ-grid">${list.map(occCard).join('')}</div>`
        :`<div class="empty-state"><b>${t().noResults}</b>${t().noResultsHint}</div>`}`;
  } else {
    body = `<div class="cat-grid">${CATS.map(catCard).join('')}</div>`;
  }
  return `<section class="band"><div class="wrap">
    <div class="sec-head">
      <div><div class="eyebrow">TACT DAYS</div><h2>${t().catsTitle}</h2><p>${t().catsLede}</p></div>
      ${ddHTML()}
    </div>
    ${body}
  </div></section>`;
}
function wireDropdown(){
  const dd=document.getElementById('catDD'); if(!dd) return;
  const btn=dd.querySelector('.dd-btn'), panel=dd.querySelector('.dd-panel');
  const close=()=>{ dd.classList.remove('open'); panel.hidden=true; btn.setAttribute('aria-expanded','false'); };
  const open =()=>{ dd.classList.add('open');  panel.hidden=false; btn.setAttribute('aria-expanded','true'); };
  btn.addEventListener('click', e=>{ e.stopPropagation(); dd.classList.contains('open')?close():open(); });
  panel.addEventListener('click', e=>{
    const b=e.target.closest('[data-cat]'); if(!b) return;
    catsSel=b.dataset.cat; close(); render();
  });
  document.addEventListener('click', ev=>{ if(!dd.contains(ev.target)) close(); }, {once:true});
  dd.addEventListener('keydown', e=>{ if(e.key==='Escape'){ close(); btn.focus(); } });
}

function viewCategory(slug){
  const c=CATMAP[slug];
  if(!c) return viewCategories();
  const idx=yearIndex(state.year);
  const list=idx.list.filter(r=>r.o.cat===slug && passes(r.o));
  const acc=ACCENT[c.ac];
  return `
  <section class="detail-hero">
    <div style="position:absolute;inset:0;background:${acc}"></div>
    <div style="position:absolute;inset:0;background:linear-gradient(135deg, rgba(0,0,0,.18), rgba(0,0,0,.42))"></div>
    <div class="wrap" style="position:relative">
      <div class="crumb"><a href="#/categories">${t().nav.cats}</a> ›</div>
      <h1>${esc(catName(c))}</h1>
      <div class="alt en-text">${esc(state.lang==='ar'?c.en:c.ar)} · ${CATCOUNT[slug]||0} ${t().occCount}</div>
    </div>
  </section>
  <section class="band"><div class="wrap">
    ${filterBar()}
    ${list.length?`<div class="occ-grid">${list.map(occCard).join('')}</div>`
      :`<div class="empty-state"><b>${t().noResults}</b>${t().noResultsHint}</div>`}
  </div></section>`;
}

function filterBar(extra){
  return `<div class="filters" data-filters>
    <button class="chip ${state.filters.global?'on':''}" data-f="global"><i style="background:var(--teal)"></i>${t().fGlobal}</button>
    <button class="chip ${state.filters.local?'on':''}" data-f="local"><i style="background:var(--yellow)"></i>${t().fLocal}</button>
    <button class="chip ${state.filters.hijri?'on':''}" data-f="hijri"><i style="background:var(--orange)"></i>${t().fHijri}</button>
    ${extra||''}
  </div>`;
}

let daysView={mode:'grid', month:0, cat:''};
function viewDays(){
  const idx=yearIndex(state.year);
  let list=idx.list.filter(r=>passes(r.o));
  if(daysView.month) list=list.filter(r=>r.m===daysView.month);
  if(daysView.cat)   list=list.filter(r=>r.o.cat===daysView.cat);

  const extra=`<span class="fill"></span>
    <select class="sel" data-sel="month">
      <option value="0">${t().allMonths}</option>
      ${t().months.map((m,i)=>`<option value="${i+1}" ${daysView.month===i+1?'selected':''}>${m}</option>`).join('')}
    </select>
    <select class="sel" data-sel="cat">
      <option value="">${t().allCats}</option>
      ${CATS.filter(c=>CATCOUNT[c.s]).map(c=>`<option value="${c.s}" ${daysView.cat===c.s?'selected':''}>${esc(catName(c))}</option>`).join('')}
    </select>
    <span class="seg">
      <button data-mode="grid" class="${daysView.mode==='grid'?'on':''}">${t().grid}</button>
      <button data-mode="cal" class="${daysView.mode==='cal'?'on':''}">${t().calendar}</button>
    </span>`;

  let bodyHtml;
  if(daysView.mode==='cal'){
    const months = daysView.month ? [daysView.month] : [1,2,3,4,5,6,7,8,9,10,11,12];
    bodyHtml = `<div class="occ-grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">
      ${months.map(m=>miniMonth(m, idx)).join('')}</div>`;
  } else {
    bodyHtml = list.length
      ? `<div class="occ-grid">${list.map(occCard).join('')}</div>`
      : `<div class="empty-state"><b>${t().noResults}</b>${t().noResultsHint}</div>`;
  }

  return `<section class="band"><div class="wrap">
    <div class="sec-head"><div><div class="eyebrow">TACT DAYS</div><h2>${t().daysTitle}</h2><p>${t().daysLede} · ${list.length} ${t().occCount}</p></div></div>
    ${filterBar(extra)}
    ${bodyHtml}
  </div></section>`;
}

function miniMonth(m, idx){
  const y=state.year, nd=daysInMonth(y,m), first=new Date(y,m-1,1).getDay();
  let cells='';
  for(let i=0;i<first;i++) cells+='<td></td>';
  let col=first;
  for(let d=1;d<=nd;d++){
    if(col===7){ cells+='</tr><tr>'; col=0; }
    const recs=(idx.byDay[m+'-'+d]||[]).filter(r=>passes(r.o));
    const dow=(first+d-1)%7;
    const kinds=[...new Set(recs.map(r=>r.o._k))];
    cells+=`<td class="${dow>=5?'we':''} ${recs.length?'has':''}" ${recs.length?`data-go="${recs[0].o.s}" title="${esc(recs.map(r=>nameOf(r.o)).join(' • '))}"`:''}>
      <span class="dn" style="color:var(--ink);font-size:13px">${d}</span>
      <span class="dots">${kinds.map(k=>`<i class="${k}"></i>`).join('')}</span></td>`;
    col++;
  }
  while(col<7){ cells+='<td></td>'; col++; }
  const cnt=idx.list.filter(r=>r.m===m&&passes(r.o)).length;
  return `<div style="background:var(--card);border:1px solid var(--line);border-radius:18px;overflow:hidden">
    <div style="padding:16px 18px;border-bottom:1px solid var(--line-soft);display:flex;justify-content:space-between;align-items:baseline">
      <b style="font-size:17px">${t().months[m-1]}</b>
      <span style="font-size:11.5px;color:var(--faint)">${cnt} ${t().occCount}</span>
    </div>
    <table style="width:100%;border-collapse:collapse;table-layout:fixed;padding:8px">
      <thead><tr>${t().dowsLetter.map((x,i)=>`<th style="font-size:10px;color:var(--faint);font-weight:500;padding:8px 0">${x}</th>`).join('')}</tr></thead>
      <tbody><tr>${cells}</tr></tbody>
    </table>
  </div>`;
}

function viewDay(slug){
  const o=OCC.find(x=>x.s===slug);
  if(!o) return `<section class="band"><div class="wrap"><div class="empty-state"><b>404</b>${t().noResults}</div></div></section>`;
  const acc=accentOf(o), c=CATMAP[o.cat];
  // show the NEXT occurrence, so the date and the countdown always agree
  let yr=TODAY.y, r=resolveDate(o,yr);
  if(!r.d || dayDelta(r.m,r.d,yr)<0){ yr=TODAY.y+1; r=resolveDate(o,yr); }
  const delta=dayDelta(r.m,r.d,TODAY.y) + (yr>TODAY.y ? daysInYear(TODAY.y) : 0);
  const d=descOf(o);
  const recLabel={annual_fixed:t().recFixed,annual_lunar:t().recLunar,annual_variable:t().recVar,month_long:t().recMonth}[o.rec];
  const related=yearIndex(yr).list.filter(x=>x.o.cat===o.cat && x.o.s!==o.s).slice(0,3);

  return `
  <section class="detail-hero">
    <div style="position:absolute;inset:0;background:${acc}"></div>
    <div style="position:absolute;inset:0;background:linear-gradient(135deg, rgba(0,0,0,.2), rgba(0,0,0,.5))"></div>
    <div class="wrap" style="position:relative">
      <div class="crumb"><a href="#/days">${t().nav.days}</a> › <a href="#/category/${o.cat}">${c?esc(catName(c)):''}</a></div>
      <h1>${esc(nameOf(o))}</h1>
      ${altOf(o)?`<div class="alt en-text">${esc(altOf(o))}</div>`:''}
      <div class="today-dates" style="margin-top:22px">
        <span class="date-chip" style="background:rgba(255,255,255,.16);border-color:rgba(255,255,255,.25);color:#fff">${t().gregorian}: <b>${fmtSpan(r.m,r.d,o.ed)} ${yr}</b></span>
        <span class="date-chip" style="background:rgba(255,255,255,.16);border-color:rgba(255,255,255,.25);color:#fff">${t().hijriCal}: <b>${fmtHijri(yr,r.m,r.d)}</b></span>
        <span class="date-chip" style="background:rgba(255,255,255,.16);border-color:rgba(255,255,255,.25);color:#fff">${
          delta===0?t().today : delta>0?`${t().countdown}: <b>${delta} ${t().days}</b>` : `<b>${Math.abs(delta)} ${t().days}</b> ${t().daysAgo}`}</span>
      </div>
    </div>
  </section>

  <div class="wrap"><div class="detail-grid">
    <div>
      <div class="panel">
        <h3>${t().about}</h3>
        ${d?`<p>${esc(d)}</p>`:`<div class="notice flat"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg><div>${t().pendingDesc}</div></div>`}
      </div>

      ${o.sen==='sensitive'?`<div class="panel"><div class="notice"><svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg><div><b>${t().sensitive}</b><br>${t().sensitiveNote}</div></div></div>`:''}

      <div class="panel">
        <h3>${t().marketingOpp}</h3>
        <p>${esc(oppLine(o))}</p>
        <a class="btn btn-primary btn-sm" style="margin-top:16px" href="#/idea/${o.s}">${t().genIdeas}</a>
      </div>

      ${related.length?`<div class="panel"><h3>${t().related}</h3>
        <div class="occ-grid" style="grid-template-columns:1fr;gap:0">
          ${related.map(miniOcc).join('')}
        </div></div>`:''}
    </div>

    <aside>
      <div class="panel">
        <div class="kv"><span>${t().category}</span><b>${c?esc(catName(c)):'—'}</b></div>
        <div class="kv"><span>${t().scopeL}</span><b>${o.sc==='local'?t().scopeLocal:t().scopeGlobal}</b></div>
        <div class="kv"><span>${t().recurrence}</span><b>${recLabel}</b></div>
        <div class="kv"><span>${t().source}</span><b>${o.src?`<a href="${esc(o.src)}" target="_blank" rel="noopener" style="color:var(--orange)">${esc(o.org||'link')} ↗</a>`:`<span style="color:var(--faint)">—</span>`}</b></div>
        <div class="kv"><span>&nbsp;</span><b><span class="tag">${t().unverified}</span></b></div>
      </div>
      <div class="panel" style="padding:18px">
        <button class="btn ${FAV.has(o.s)?'btn-primary':'btn-ghost'}" style="width:100%;margin-bottom:9px" data-fav="${o.s}" data-favbtn="1">
          <svg viewBox="0 0 24 24"><path d="M12 17.27l5.18 3.13-1.37-5.89 4.57-3.96-6.02-.52L12 4.5 9.64 10.03l-6.02.52 4.57 3.96-1.37 5.89z"/></svg>
          ${FAV.has(o.s)?t().inPlan:t().addPlan}</button>
        <button class="btn btn-dark" style="width:100%" data-share="${o.s}">
          <svg viewBox="0 0 24 24"><path d="M18 16.08a2.9 2.9 0 00-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.5.47 1.17.76 1.92.76a2.92 2.92 0 100-5.83 2.92 2.92 0 00-2.92 2.91c0 .24.04.47.09.7L8 9.81A2.9 2.9 0 006.08 9a2.92 2.92 0 000 5.83c.75 0 1.42-.29 1.92-.76l7.12 4.16c-.05.21-.08.43-.08.65A2.84 2.84 0 1018 16.08z"/></svg>
          ${t().shareColleagues}</button>
        <button class="btn btn-ghost" style="width:100%;margin-top:9px" data-card="${o.s}">
          <svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V5h14v14zm-7-3l-3-4-2 3h10l-3.5-5z"/></svg>
          ${t().downloadCard}</button>
        <button class="btn btn-ghost" style="width:100%;margin-top:9px" data-ics="${o.s}">
          <svg viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 18H5V9h14v12zM7 11h5v5H7v-5z"/></svg>
          ${t().addMyCal}</button>
      </div>
      ${o.cal==='hijri'?`<div class="panel"><div class="notice"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg><div>${t().hijriNote}</div></div></div>`:''}
      ${o.rec==='annual_variable'?`<div class="panel"><div class="notice flat"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg><div>${t().varNote}${o.rule?` <b class="en-text">(${esc(o.rule)})</b>`:''}</div></div></div>`:''}
      ${o.org==='secondary'?`<div class="panel"><div class="notice flat"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg><div>${t().secondarySrc}</div></div></div>`:''}
    </aside>
  </div></div>`;
}

/* ===================== Idea workspace ===================== */
const ANGLES = {
  "health-wellness":       {ar:["الوقاية تبدأ بخطوة صغيرة","المعرفة أقوى من الخوف","صحتك مسؤولية جماعية","افحص اليوم، لا غدًا"], en:["Prevention starts small","Knowledge beats fear","Health is a shared responsibility","Check today, not tomorrow"]},
  "environment-sustainability":{ar:["أثر صغير يتضاعف","الاستدامة قرار يومي","الأرض لا تنتظر","ما نتركه يبقى"], en:["A small act, multiplied","Sustainability is a daily decision","The planet will not wait","What we leave behind stays"]},
  "technology-innovation": {ar:["التقنية في خدمة الإنسان","ابتكار يُقاس بأثره","المستقبل يُبنى اليوم","أبسط مما تظن"], en:["Technology in service of people","Innovation measured by impact","The future is built today","Simpler than you think"]},
  "education-knowledge":   {ar:["المعرفة تُورَّث","كل سؤال بداية","التعلّم لا يتوقف","معلّم واحد يكفي"], en:["Knowledge is passed on","Every question is a beginning","Learning never stops","One teacher is enough"]},
  "culture-heritage":      {ar:["الجذور تصنع الهوية","حكاية تستحق أن تُروى","التراث حاضر لا ماضٍ","ما لا يُروى يُنسى"], en:["Roots shape identity","A story worth telling","Heritage is present tense","What is not told is lost"]},
  "business-economy":      {ar:["النمو يبدأ بثقة","القيمة قبل الحجم","شراكة تصنع فرقًا","الثقة عملة"], en:["Growth starts with trust","Value before volume","Partnership that moves things","Trust is currency"]},
  "sports-fitness":        {ar:["الحركة عادة","تحدَّ نفسك","المسافة تبدأ بخطوة","ابدأ اليوم"], en:["Movement as habit","Challenge yourself","Every distance starts with a step","Start today"]},
  "social-humanitarian":   {ar:["الإنسان أولًا","صوت لمن لا صوت له","التضامن فعل لا شعار","ابدأ بمن حولك"], en:["People first","A voice for the unheard","Solidarity is an act, not a slogan","Start with the person next to you"]},
  "food-agriculture":      {ar:["من الأرض إلى المائدة","الطعام ذاكرة","لا شيء يُهدر","صحن أقل هدرًا"], en:["From soil to table","Food is memory","Nothing goes to waste","One plate, less waste"]},
  "arts-creativity":       {ar:["الإبداع لغة","انظر بعين مختلفة","الفن يصنع المعنى","لا تنتظر الإلهام"], en:["Creativity is a language","See it differently","Art makes meaning","Do not wait for inspiration"]},
  "national-saudi":        {ar:["فخر يتجدد","نكتب فصلًا جديدًا","هوية نعتزّ بها","منّا وفينا"], en:["Pride renewed","Writing a new chapter","An identity we carry","Ours, and of us"]},
  "seasonal":              {ar:["لحظة تجمعنا","موسم يستحق الاحتفاء","ابدأ من جديد","لا تفوّتها"], en:["A moment that gathers us","A season worth marking","Begin again","Do not miss it"]},
  "awareness-campaigns":   {ar:["الوعي يبدأ بحديث","اكشف مبكرًا","لا أحد وحده","تحدّث عنها"], en:["Awareness starts with a conversation","Detect it early","No one is alone","Talk about it"]},
  "international-global":  {ar:["العالم في يوم","قضية تجمعنا","أثر يتجاوز الحدود","يوم واحد يكفي للبدء"], en:["The world in a day","A cause that unites","Impact beyond borders","One day is enough to begin"]}
};
const VARIANTS = {
  ar:[{k:"الحملة الأساسية",tone:"متوازنة بين الوعي والمشاركة"},
      {k:"نسخة جريئة",tone:"لافتة، تعتمد على مفارقة بصرية قوية"},
      {k:"نسخة لجهة حكومية",tone:"رصينة، تركّز على الخدمة العامة والشراكة"},
      {k:"نسخة منخفضة الميزانية",tone:"تنفيذ رقمي بالكامل بأصول بسيطة"}],
  en:[{k:"Core campaign",tone:"balanced between awareness and participation"},
      {k:"Bolder cut",tone:"attention-led, built on one strong visual contrast"},
      {k:"Government entity",tone:"measured, focused on public service and partnership"},
      {k:"Low-budget build",tone:"fully digital execution with simple assets"}]
};
function oppLine(o){
  const c=CATMAP[o.cat], nm=nameOf(o);
  if(state.lang==='ar'){
    if(o.sen==='sensitive') return `${nm} مناسبة توعوية حساسة: الزاوية المناسبة هي التوعية والمساهمة والشراكة مع جهة مختصة، لا العرض التجاري.`;
    if(o.sc==='local') return `${nm} مناسبة محلية بارتباط وجداني عالٍ بالجمهور السعودي — فرصة لمحتوى يتحدث بلغة المكان.`;
    return `${nm} مناسبة عالمية ضمن تصنيف ${c?catName(c):''} — فرصة لربط العلامة بقضية يتابعها الجمهور في اليوم نفسه.`;
  }
  if(o.sen==='sensitive') return `${nm} is a sensitive awareness occasion: the right angle is awareness, contribution and partnership with a specialist body — not a commercial offer.`;
  if(o.sc==='local') return `${nm} is a local occasion with strong emotional pull for Saudi audiences — an opening for content that speaks in the language of the place.`;
  return `${nm} is a global occasion in ${c?catName(c):''} — a chance to tie the brand to a conversation the audience is already having that day.`;
}
function buildBrief(o, vi){
  const lang=state.lang, c=CATMAP[o.cat], nm=nameOf(o);
  const angles=(ANGLES[o.cat]||ANGLES['international-global'])[lang];
  const v=VARIANTS[lang][vi % VARIANTS[lang].length];
  const angle=angles[vi % angles.length];
  const r=resolveDate(o,state.year);
  const sensitive=o.sen==='sensitive';
  const ar=lang==='ar';

  const blocks=[
    ["big", ar?"الفكرة الكبرى":"Creative big idea", angle],
    ["p", ar?"مفهوم الحملة":"Campaign concept",
      ar?`حملة ليوم ${nm} بنبرة ${v.tone}. المدخل: ${angle} — تُترجم إلى سلسلة محتوى قصيرة تنطلق قبل المناسبة بثلاثة أيام وتبلغ ذروتها في يومها (${fmtDate(r.m,r.d)}).`
        :`A campaign for ${nm}, ${v.tone}. The entry point: ${angle} — translated into a short content series that starts three days out and peaks on the day itself (${fmtDate(r.m,r.d)}).`],
    ["p", ar?"الهدف":"Objective",
      sensitive?(ar?"رفع الوعي ودفع الجمهور لخطوة ملموسة (فحص، تبرّع، مشاركة معلومة موثوقة) — لا مقاييس مبيعات.":"Raise awareness and drive one concrete action (a check-up, a donation, sharing verified information) — not sales metrics.")
      :(ar?"رفع التفاعل والارتباط بالعلامة عبر محتوى مرتبط بلحظة يتابعها الجمهور أصلًا.":"Lift engagement and brand affinity through content tied to a moment the audience is already watching.")],
    ["p", ar?"الجمهور":"Target audience",
      o.sc==='local'?(ar?"الجمهور السعودي العام، مع تركيز على الفئة 18–40 النشطة على المنصات الاجتماعية.":"General Saudi audience, weighted to 18–40 and active on social platforms.")
      :(ar?"جمهور إقليمي ناطق بالعربية مهتم بالقضايا العالمية، مع نسخة إنجليزية للجمهور الدولي.":"Regional Arabic-speaking audience interested in global causes, with an English cut for international reach.")],
    ["p", ar?"اسم الحملة المقترح":"Campaign name", `“${angle}”`],
    ["p", ar?"الاتجاه الإبداعي":"Creative direction",
      ar?`لوحة ألوان مستمدة من تصنيف «${c?catName(c):''}»، تصوير واقعي لا مصطنع، وتيبوغرافيا عربية واضحة بخط العلامة. حركة قليلة ومقصودة.`
        :`A palette drawn from the “${c?catName(c):''}” category, documentary-style imagery over staged shots, and clear Arabic typography in the brand face. Motion used sparingly.`],
    ["ul", ar?"أفكار محتوى السوشيال":"Social content ideas",
      ar?[`ريل ١٥ ثانية يفتح بسؤال مباشر عن ${nm}`,"كاروسيل ٥ شرائح: معلومة واحدة في كل شريحة","استطلاع ستوري يقيس وعي الجمهور قبل الحملة وبعدها","منشور بصري واحد قابل لإعادة النشر بلا سياق إضافي"]
        :[`A 15-second reel opening on a direct question about ${nm}`,"A 5-slide carousel: one fact per slide","A story poll measuring awareness before and after","One shareable visual that works without extra context"]],
    ["ul", ar?"عناوين ونصوص مقترحة":"Headlines & captions", angles.map(a=>`“${a}”`)],
    ["p", ar?"فكرة تفاعلية":"Interactive idea",
      ar?`اختبار قصير من ثلاثة أسئلة عن ${nm}، نتيجته بطاقة بصرية يشاركها المستخدم — يحوّل التمرير إلى مشاركة.`
        :`A three-question quiz about ${nm} that ends in a shareable result card — turning a scroll into a share.`],
    ["p", ar?"تفعيل ميداني":"On-ground activation",
      sensitive?(ar?"ركن توعوي بالشراكة مع جهة مختصة في موقع عالي الكثافة، مع مادة مطبوعة موثوقة المصدر.":"An awareness corner with a specialist partner in a high-footfall location, with printed material from a verified source.")
      :(ar?"تدخّل بسيط في مساحة عامة يصنع صورة قابلة للتصوير، مع دعوة واضحة للمشاركة.":"A simple public-space intervention that creates a photographable moment, with a clear invitation to take part.")],
    ["p", ar?"المؤثرون":"Influencer opportunities",
      sensitive?(ar?"مختصون وأصحاب تجربة حقيقية، لا صنّاع محتوى ترفيهي. الصدقية هنا تسبق الوصول.":"Specialists and people with genuine lived experience, not entertainment creators. Credibility outranks reach here.")
      :(ar?"ثلاثة إلى خمسة صنّاع محتوى متوسطي المتابعة في مجال التصنيف — تفاعل أعلى وتكلفة أقل.":"Three to five mid-tier creators inside the category — higher engagement at lower cost.")],
    ["p", ar?"الاتصال الداخلي":"Internal communications",
      ar?"رسالة داخلية قصيرة تشرح لماذا تشارك العلامة في هذه المناسبة، مع خلفية موحّدة لاجتماعات الفريق.":"A short internal note explaining why the brand is marking this occasion, plus a shared meeting background."],
    ["ul", ar?"المنصات المقترحة":"Suggested platforms",
      ar?["إنستقرام (ريلز + كاروسيل)","إكس للمحتوى النصي السريع","لينكدإن للزاوية المؤسسية","تيك توك إذا كانت الفكرة بصرية"]
        :["Instagram (Reels + carousel)","X for fast text","LinkedIn for the corporate angle","TikTok if the idea is visual"]],
    ["ul", ar?"خطة التنفيذ":"Execution plan",
      ar?["ي-١٠: اعتماد الفكرة والنصوص","ي-٧: إنتاج الأصول البصرية","ي-٣: بدء محتوى التشويق","اليوم: النشر الرئيسي + التفاعل اللحظي","ي+٢: منشور الحصاد والنتائج"]
        :["D-10: idea and copy approved","D-7: visual assets produced","D-3: teaser content live","Day of: main publish + live engagement","D+2: wrap-up post and results"]],
    ["ul", ar?"مؤشرات القياس":"Suggested KPIs",
      sensitive?(ar?["الوصول العضوي","معدل إكمال الفيديو","عدد المشاركات (مؤشر الصدى)","الإجراءات المكتملة مع الشريك"]
                   :["Organic reach","Video completion rate","Shares as a resonance signal","Completed actions with the partner"])
      :(ar?["معدل التفاعل","الوصول العضوي مقابل المدفوع","النمو في المتابعين","نقرات الرابط"]
          :["Engagement rate","Organic vs paid reach","Follower growth","Link clicks"])],
    ["p", ar?"التعقيد التقديري":"Estimated complexity",
      vi===3?(ar?"منخفض":"Low"):(vi===2?(ar?"متوسط":"Medium"):(ar?"متوسط":"Medium"))]
  ];
  return blocks.map(([kind,title,val])=>{
    let inner;
    if(kind==='ul') inner=`<ul>${val.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;
    else if(kind==='big') inner=`<div class="big">${esc(val)}</div>`;
    else inner=`<p>${esc(val)}</p>`;
    return `<div class="brief-block ${kind==='big'?'wide':''}"><h4>${title}</h4>${inner}</div>`;
  }).join('');
}

function viewIdea(slug){
  if(slug && OCC.some(o=>o.s===slug)) state.ideaOcc=slug;
  const o = state.ideaOcc ? OCC.find(x=>x.s===state.ideaOcc) : null;
  const picker = `
    <div class="search-wrap" style="margin-top:8px">
      <svg class="si" viewBox="0 0 24 24"><path d="M10 2a8 8 0 105.29 14.03l4.84 4.84 1.41-1.41-4.84-4.84A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/></svg>
      <input class="search-input" id="ideaSearch" placeholder="${t().pickOcc}…" autocomplete="off">
      <div id="ideaSuggest"></div>
    </div>`;

  return `
  <section class="idea-head"><div class="wrap">
    <div class="eyebrow">AI · TACT DAYS</div>
    <h1>${t().ideaTitle}</h1>
    <p>${t().ideaLede}</p>
  </div></section>
  <section class="band"><div class="wrap">
    <div class="notice" style="margin-bottom:26px">
      <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
      <div><b>${t().aiOffline}</b><br>${t().aiOfflineBody}</div>
    </div>
    ${o?'':picker}
    ${o?`
      <div class="sec-head">
        <div>
          <div class="eyebrow">${t().briefFor}</div>
          <h2>${esc(nameOf(o))}</h2>
          <p>${(()=>{let y=TODAY.y,rr=resolveDate(o,y); if(!rr.d||dayDelta(rr.m,rr.d,y)<0){y=TODAY.y+1;rr=resolveDate(o,y);} return fmtDate(rr.m,rr.d)+' '+y;})()} · ${esc(catName(CATMAP[o.cat]))}</p>
        </div>
        <button class="link-more" data-idea-clear="1">${t().changeOcc} ↺</button>
      </div>
      ${o.sen==='sensitive'?`<div class="notice" style="margin-bottom:18px"><svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg><div>${t().sensitiveNote}</div></div>`:''}
      <div class="quick-chips">
        ${VARIANTS[state.lang].map((v,i)=>`<button class="chip ${state.ideaVariant===i?'on':''}" data-variant="${i}">${v.k}</button>`).join('')}
      </div>
      <div class="brief">${buildBrief(o, state.ideaVariant)}</div>
      <div style="margin-top:22px;display:flex;gap:10px;flex-wrap:wrap">
        <a class="btn btn-ghost btn-sm" href="#/day/${o.s}">${t().details}</a>
        <button class="btn btn-ghost btn-sm" data-ics="${o.s}">${t().addMyCal}</button>
      </div>
    `:`<div class="empty-state" style="margin-top:22px"><b>${t().pickOcc}</b>${t().daysLede}</div>`}
  </div></section>`;
}

/* ===================== Calendar route ===================== */
function viewCalendar(){
  const y=state.year, idx=yearIndex(y);
  const quarters=["teal","yellow","purple","orange"];
  const cards=[];
  for(let m=1;m<=12;m++){
    const ac=quarters[Math.floor((m-1)/3)], acc=ACCENT[ac], dark=ACCENT_DARK[ac];
    const nd=daysInMonth(y,m), first=new Date(y,m-1,1).getDay();
    const seen={}, hv=[];
    for(let d=1;d<=nd;d++){ const h=toHijri(y,m,d); const k=h.year+'-'+h.month; if(!seen[k]){seen[k]=1;hv.push(h);} }
    const hlabel=hv.map(h=>hijriName(h.month)+' '+h.year).join(' / ');
    let cells='', col=first, prevHM=null;
    for(let i=0;i<first;i++) cells+='<td></td>';
    for(let d=1;d<=nd;d++){
      if(col===7){ cells+='</tr><tr>'; col=0; }
      const dow=(first+d-1)%7, h=toHijri(y,m,d);
      const newHM = prevHM!==null && prevHM!==h.month; prevHM=h.month;
      const recs=(idx.byDay[m+'-'+d]||[]).filter(r=>passes(r.o));
      const kinds=[...new Set(recs.map(r=>r.o._k))];
      cells+=`<td class="${dow>=5?'we ':''}${recs.length?'has':''}" ${recs.length?`data-cday="${m}-${d}" title="${esc(recs.map(r=>nameOf(r.o)).join(' • '))}"`:''}>
        <span class="dn">${d}</span>
        <span class="hn">${h.day}${(d===1||newHM)?` <b>${hijriName(h.month)}</b>`:''}</span>
        <span class="dots">${kinds.map(k=>`<i class="${k}"></i>`).join('')}</span></td>`;
      col++;
    }
    while(col<7){ cells+='<td></td>'; col++; }
    const fh=toHijri(y,m,1);
    const mlist=idx.list.filter(r=>r.m===m&&passes(r.o));
    cards.push(`<div class="mcard" id="cm${m}" data-m="${m}">
      <div class="mcard-head ${dark?'ondark':''}" style="background:${acc}">
        <div class="ix">${String(m).padStart(2,'0')}</div>
        <div class="mn">${t().months[m-1]}</div>
        <div class="hj">${hlabel}</div>
      </div>
      <table><thead><tr>${t().dowsLetter.map((x,i)=>`<th class="${i>=5?'we':''}">${x}</th>`).join('')}</tr></thead>
      <tbody><tr>${cells}</tr></tbody></table>
      <div class="mcard-foot">${t().startsOn} <b>${t().dows[first]}</b> — <b>${fh.day} ${hijriName(fh.month)} ${fh.year}</b> · <b>${mlist.length}</b> ${t().occCount}</div>
      <div class="mcard-days">${mlist.map(calItem).join('')||`<div style="padding:18px;color:#9A9A9D;font-size:13px">${t().noneFilter}</div>`}</div>
    </div>`);
  }

  return `<div class="cal-root" id="calRoot">
    <video class="cal-bg" autoplay muted loop playsinline preload="metadata" poster="assets/poster.jpg" aria-hidden="true">
      <source src="assets/tact-calendar.mp4" type="video/mp4"></video>
    <div class="cal-veil"></div>
    <div class="wrap">
      <div class="cal-top">
        <div><div class="eyebrow">TACT DAYS</div><h1>${t().calTitle}</h1><p>${t().calLede}</p></div>
        <div style="display:flex;gap:10px;align-items:center">
          <button class="btn btn-primary btn-sm" id="calBack" style="display:none">← ${t().backAll}</button>
          <select class="sel" id="yearSel" style="background:#3d3d40;border-color:rgba(255,255,255,.18);color:#F5F3F0">
            ${[2026,2027,2028,2029].map(yy=>`<option value="${yy}" ${yy===y?'selected':''}>${yy}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="cal-nav" id="calNav">
        ${t().months.map((mn,i)=>{
          const n=idx.list.filter(r=>r.m===i+1&&passes(r.o)).length;
          return `<button class="mbtn" data-cm="${i+1}"><span class="ring" data-n="${n}">${String(i+1).padStart(2,'0')}</span><span class="lbl">${mn}</span></button>`;
        }).join('')}
      </div>
      <div class="cal-layout">
        <aside class="cal-aside"><div class="cal-panel" id="calPanel"></div></aside>
        <div class="cal-grid" id="calGrid">${cards.join('')}</div>
      </div>
      <div style="margin-top:26px" class="notice flat">
        <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
        <div style="color:#9A9A9D">${t().hijriNote}</div>
      </div>
    </div>
  </div>`;
}
function calItem(rec){
  const o=rec.o;
  return `<a class="cal-item ${o._k}" href="#/day/${o.s}" data-ci="${o.s}">
    <span class="cd"><b>${rec.d}</b><i>${t().dowsMini[new Date(state.year,rec.m-1,rec.d).getDay()]}</i></span>
    <span class="ct">${esc(nameOf(o))}${altOf(o)?`<small class="en-text">${esc(altOf(o))}</small>`:''}</span>
  </a>`;
}
function renderCalPanel(m){
  const el=document.getElementById('calPanel'); if(!el) return;
  state.calMonth=m;
  const y=state.year, idx=yearIndex(y);
  const quarters=["teal","yellow","purple","orange"];
  const ac=quarters[Math.floor((m-1)/3)], acc=ACCENT[ac], dark=ACCENT_DARK[ac];
  const nd=daysInMonth(y,m), seen={}, hv=[];
  for(let d=1;d<=nd;d++){ const h=toHijri(y,m,d); const k=h.year+'-'+h.month; if(!seen[k]){seen[k]=1;hv.push(h);} }
  const list=idx.list.filter(r=>r.m===m&&passes(r.o));
  const ml=list.filter(r=>r.o.rec==='month_long');
  el.innerHTML=`
    <div class="cal-phead ${dark?'ondark':''}" style="background:${acc}">
      <div class="ey">${t().monthOcc}</div>
      <div class="mn">${t().months[m-1]}</div>
      <div class="hj">${hv.map(h=>hijriName(h.month)+' '+h.year).join(' / ')}</div>
    </div>
    ${ml.map(r=>`<div class="cal-banner"><span style="color:var(--orange)">●</span><div><b>${esc(nameOf(r.o))}</b><span style="color:#9A9A9D;font-size:11px" class="en-text">${esc(altOf(r.o))}</span></div></div>`).join('')}
    <div class="cal-filters">
      <button class="dchip ${state.filters.global?'on':''}" data-f="global"><i style="background:var(--teal)"></i>${t().fGlobal}</button>
      <button class="dchip ${state.filters.local?'on':''}" data-f="local"><i style="background:var(--yellow)"></i>${t().fLocal}</button>
      <button class="dchip ${state.filters.hijri?'on':''}" data-f="hijri"><i style="background:var(--orange)"></i>${t().fHijri}</button>
    </div>
    <div class="cal-list" id="calList">${list.map(calItem).join('')||`<div style="padding:26px;text-align:center;color:#9A9A9D;font-size:13px">${t().noneFilter}</div>`}</div>`;
  document.querySelectorAll('#calNav .mbtn').forEach(b=>b.classList.toggle('on', +b.dataset.cm===m));
}
let calObserver=null;
function wireCalendar(){
  const root=document.getElementById('calRoot'); if(!root) return;
  renderCalPanel(state.calSingle||1);
  const back=document.getElementById('calBack');
  document.getElementById('yearSel').addEventListener('change', e=>{
    state.year=+e.target.value; state.calSingle=null; render();
  });
  document.querySelectorAll('#calNav .mbtn').forEach(b=>{
    b.addEventListener('click', ()=>{
      const m=+b.dataset.cm;
      state.calSingle=m; root.classList.add('single');
      document.querySelectorAll('.mcard').forEach(c=>c.classList.toggle('open', +c.dataset.m===m));
      back.style.display='inline-flex';
      renderCalPanel(m);
      root.scrollIntoView({block:'start'});
    });
  });
  back.addEventListener('click', ()=>{
    state.calSingle=null; root.classList.remove('single');
    document.querySelectorAll('.mcard').forEach(c=>c.classList.remove('open'));
    back.style.display='none';
  });
  if(calObserver) calObserver.disconnect();
  if('IntersectionObserver' in window){
    calObserver=new IntersectionObserver(entries=>{
      if(state.calSingle) return;
      const vis=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(vis){ const m=+vis.target.dataset.m; if(m!==state.calMonth) renderCalPanel(m); }
    },{rootMargin:'-100px 0px -55% 0px', threshold:[0.05,0.3,0.6]});
    document.querySelectorAll('.mcard').forEach(c=>calObserver.observe(c));
  }
}

/* ===================== About ===================== */
function viewAbout(){
  const ar=state.lang==='ar';
  const items = ar ? [
    ["قاعدة بيانات منسّقة","لا توجد واجهة برمجية رسمية للأيام العالمية؛ الأمم المتحدة تنشر قائمتها كصفحة ويب فقط. لذلك قاعدة البيانات هنا منسّقة ومملوكة لتاكت، وكل سجل يمرّ بتحقق بشري قبل نشره."],
    ["تقويمان في كل مكان","كل تاريخ يظهر بالميلادي والهجري معًا. المناسبات الهجرية تُحسب لكل سنة ولا تُخزَّن بتاريخ ميلادي ثابت."],
    ["تصدير تقويم صحيح","ملفات ICS تستخدم تاريخ نهاية حصري للأحداث اليومية، ولا تُصدَّر قاعدة تكرار للمناسبات الهجرية أو متغيّرة التاريخ."],
    ["حساسية المناسبة","١٨ مناسبة موسومة كحساسة، وطبقة الأفكار تتعامل معها بزاوية توعوية لا ترويجية."]
  ] : [
    ["A curated database","There is no official API for global days; the UN publishes its list as a web page only. So this database is curated and owned by Tact, and every record passes human verification before it is published."],
    ["Two calendars everywhere","Every date appears in both Gregorian and Hijri. Hijri occasions are computed per year rather than stored as a fixed Gregorian date."],
    ["Correct calendar export","ICS files use an exclusive end date for all-day events, and no recurrence rule is written for Hijri or variable-date occasions."],
    ["Occasion sensitivity","18 occasions are flagged sensitive, and the idea layer treats them with an awareness angle rather than a promotional one."]
  ];
  return `<section class="band"><div class="wrap" style="max-width:860px">
    <div class="eyebrow">TACT DAYS</div>
    <h1 style="font-size:clamp(28px,4.4vw,44px)">${t().aboutTitle}</h1>
    <p style="margin-top:16px;font-size:17px;color:var(--muted)">${t().footTag}</p>
    <div style="margin-top:34px;display:grid;gap:14px">
      ${items.map(([h,b])=>`<div class="panel"><h3>${h}</h3><p>${b}</p></div>`).join('')}
    </div>
  </div></section>`;
}

/* ===================== Search modal ===================== */
function searchMatches(q){
  const s=q.trim().toLowerCase();
  if(!s) return [];
  const idx=yearIndex(state.year);
  return idx.list.filter(r=>{
    const o=r.o;
    return (o.ar||'').toLowerCase().includes(s) || (o.en||'').toLowerCase().includes(s)
        || (o.de||'').toLowerCase().includes(s) || (o.da||'').toLowerCase().includes(s)
        || (CATMAP[o.cat]&&(CATMAP[o.cat].en.toLowerCase().includes(s)||CATMAP[o.cat].ar.includes(s)));
  }).slice(0,9);
}
function hl(text,q){
  const s=q.trim(); if(!s) return esc(text);
  const i=text.toLowerCase().indexOf(s.toLowerCase());
  if(i<0) return esc(text);
  return esc(text.slice(0,i))+'<mark>'+esc(text.slice(i,i+s.length))+'</mark>'+esc(text.slice(i+s.length));
}
function suggestHTML(list,q){
  if(!list.length) return `<div class="suggest"><div style="padding:22px;text-align:center;color:var(--faint);font-size:13.5px"><b style="display:block;color:var(--muted)">${t().noResults}</b>${t().noResultsHint}</div></div>`;
  return `<div class="suggest">${list.map(r=>`
    <button data-pick="${r.o.s}">
      <span class="sd">${r.d} ${t().months[r.m-1]}</span>
      <span class="sn">${hl(nameOf(r.o),q)}${altOf(r.o)?`<small class="en-text">${esc(altOf(r.o))}</small>`:''}</span>
    </button>`).join('')}</div>`;
}
function openSearch(){
  const back=document.createElement('div');
  back.className='modal-back'; back.id='searchModal';
  back.innerHTML=`<div class="modal"><div class="search-wrap" style="max-width:none">
    <svg class="si" viewBox="0 0 24 24"><path d="M10 2a8 8 0 105.29 14.03l4.84 4.84 1.41-1.41-4.84-4.84A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z"/></svg>
    <input class="search-input" id="globalSearch" placeholder="${t().search}" autocomplete="off">
    <div id="globalSuggest"></div></div></div>`;
  document.body.appendChild(back);
  const input=back.querySelector('#globalSearch');
  input.focus();
  const upd=()=>{ back.querySelector('#globalSuggest').innerHTML=input.value.trim()?suggestHTML(searchMatches(input.value),input.value):''; };
  input.addEventListener('input',upd);
  input.addEventListener('keydown', e=>{
    const items=[...back.querySelectorAll('#globalSuggest [data-pick]')];
    if(!items.length) return;
    let i=items.findIndex(b=>b.classList.contains('cur'));
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){
      e.preventDefault();
      if(i>=0) items[i].classList.remove('cur');
      i = e.key==='ArrowDown' ? (i+1)%items.length : (i<=0?items.length-1:i-1);
      items[i].classList.add('cur');
      items[i].scrollIntoView({block:'nearest'});
    } else if(e.key==='Enter'){
      e.preventDefault();
      items[i>=0?i:0].click();
    }
  });
  back.addEventListener('click',e=>{ if(e.target===back) back.remove(); });
  back.addEventListener('keydown',e=>{ if(e.key==='Escape') back.remove(); });
  back.addEventListener('click',e=>{
    const b=e.target.closest('[data-pick]'); if(!b) return;
    back.remove(); location.hash='#/day/'+b.dataset.pick;
  });
}

/* ===================== Motion ===================== */
let cdPending=null;
const ROUTE_CLASS={'':'r-home',categories:'r-cats',category:'r-cat',days:'r-days',
                   day:'r-day',idea:'r-idea',calendar:'r-cal',about:'r-about'};
let routeBarEl=null;
function flashRouteBar(){
  if(!routeBarEl){
    routeBarEl=document.createElement('div');
    routeBarEl.className='route-bar';
    document.body.appendChild(routeBarEl);
  }
  routeBarEl.classList.remove('go');
  void routeBarEl.offsetWidth;
  routeBarEl.classList.add('go');
}
/* grids come in one item at a time, fastest first */
function staggerGrids(){
  document.querySelectorAll('#app .occ-grid, #app .cat-grid, #app .brief, #app .cal-grid, #app .hero-stats')
    .forEach(grid=>{
      grid.classList.add('stagger');
      [...grid.children].forEach((el,i)=>{
        el.style.animationDelay = Math.min(i,14)*42 + 'ms';
      });
    });
}
/* hero numbers count up on arrival */
function countUp(){
  document.querySelectorAll('#app .hero-stats b').forEach(el=>{
    const target=parseInt(el.textContent,10); if(isNaN(target)) return;
    if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const dur=900, t0=performance.now();
    el.textContent='0';
    const step=now=>{
      const p=Math.min(1,(now-t0)/dur);
      el.textContent = Math.round(target * (1-Math.pow(1-p,3)));
      if(p<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}
/* the hero drifts and dims slightly as the page scrolls past it */
let parallaxTarget=null;
function wireParallax(){
  parallaxTarget=document.querySelector('#app .hero');
  if(!parallaxTarget) return;
  const inner=parallaxTarget.querySelector('.hero-copy');
  parallaxTarget.addEventListener('pointermove', e=>{
    const r=parallaxTarget.getBoundingClientRect();
    parallaxTarget.style.setProperty('--mx', ((e.clientX-r.left)/r.width*100)+'%');
    parallaxTarget.style.setProperty('--my', ((e.clientY-r.top)/r.height*100)+'%');
  });
  parallaxTarget._inner=inner;
}
let scrollBarEl=null;
function onScroll(){
  if(!scrollBarEl){
    scrollBarEl=document.createElement('div');
    scrollBarEl.className='scroll-bar';
    document.body.appendChild(scrollBarEl);
  }
  const nav=document.querySelector('.nav');
  if(nav) nav.classList.toggle('shrunk', window.scrollY>90);
  const h=document.documentElement.scrollHeight-window.innerHeight;
  scrollBarEl.style.transform='scaleX('+(h>0?Math.min(1,window.scrollY/h):0)+')';
  if(parallaxTarget && parallaxTarget._inner){
    const y=window.scrollY;
    if(y < window.innerHeight){
      parallaxTarget._inner.style.transform='translateY('+(y*0.10)+'px)';
      parallaxTarget._inner.style.opacity = String(Math.max(0.15, 1 - y/760));
    }
  }
}
window.addEventListener('scroll', ()=>requestAnimationFrame(onScroll), {passive:true});

let revealObserver=null;
function revealBands(){
  const targets=[...document.querySelectorAll('#app section.band, #app .detail-grid > *')].slice(1);
  if(!targets.length) return;
  if(!('IntersectionObserver' in window)){ targets.forEach(el=>el.classList.add('in')); return; }
  if(revealObserver) revealObserver.disconnect();
  revealObserver=new IntersectionObserver((entries,obs)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
  },{rootMargin:'0px 0px -12% 0px', threshold:0.05});
  targets.forEach(el=>{ el.classList.add('reveal'); revealObserver.observe(el); });
}

/* ===================== Router ===================== */
function render(){
  const h=(location.hash||'#/').replace(/^#/,'');
  const app=document.getElementById('app');
  const parts=h.split('/').filter(Boolean);
  let html;
  if(parts.length===0) html=viewHome();
  else if(parts[0]==='categories') html=viewCategories();
  else if(parts[0]==='category')  html=viewCategory(parts[1]);
  else if(parts[0]==='days')      html=viewDays();
  else if(parts[0]==='day')       html=viewDay(parts[1]);
  else if(parts[0]==='idea')      html=viewIdea(parts[1]);
  else if(parts[0]==='calendar')  html=viewCalendar();
  else if(parts[0]==='about')     html=viewAbout();
  else html=viewHome();
  app.innerHTML=html;
  app.className='';
  void app.offsetWidth;                       // restart the entry animation
  app.className='route ' + (ROUTE_CLASS[parts[0]||''] || 'r-home');
  flashRouteBar();
  staggerGrids();
  revealBands();
  countUp();
  renderTray(false);
  if(cdPending && (parts[0]||'')===''){ startLiveCountdown(...cdPending); } else { clearInterval(cdTimer); }
  cdPending=null;
  wirePulse();
  animateRing();
  wireGame();
  wireMagnets();
  wireTilt();
  wireParallax();
  onScroll();
  wireDropdown();
  markActive();
  if(parts[0]==='calendar') wireCalendar();
  if(parts[0]==='idea' && !state.ideaOcc) wireIdeaPicker();
}
function wireIdeaPicker(){
  const input=document.getElementById('ideaSearch'); if(!input) return;
  const box=document.getElementById('ideaSuggest');
  input.addEventListener('input',()=>{
    box.innerHTML = input.value.trim() ? suggestHTML(searchMatches(input.value), input.value) : '';
  });
  box.addEventListener('click',e=>{
    const b=e.target.closest('[data-pick]'); if(!b) return;
    state.ideaOcc=b.dataset.pick; state.ideaVariant=0; render();
  });
  input.focus();
}

/* ===================== Global events ===================== */
document.addEventListener('click', e=>{
  const share=e.target.closest('[data-share]');
  if(share){ e.preventDefault(); shareOcc(share.dataset.share); return; }
  const ics=e.target.closest('[data-ics]');
  if(ics){ e.preventDefault(); downloadICS(ics.dataset.ics); return; }

  const f=e.target.closest('[data-f]');
  if(f){
    const k=f.dataset.f;
    const next={...state.filters, [k]:!state.filters[k]};
    if(!next.global && !next.local && !next.hijri) return;
    state.filters=next;
    if(document.getElementById('calRoot')){
      const keep=state.calSingle; render();
      if(keep){ const b=document.querySelector(`#calNav .mbtn[data-cm="${keep}"]`); if(b) b.click(); }
    } else render();
    return;
  }
  const mode=e.target.closest('[data-mode]');
  if(mode){ daysView.mode=mode.dataset.mode; render(); return; }

  const v=e.target.closest('[data-variant]');
  if(v){ state.ideaVariant=+v.dataset.variant; render(); return; }

  const clear=e.target.closest('[data-idea-clear]');
  if(clear){ state.ideaOcc=null; state.ideaVariant=0; location.hash='#/idea'; render(); return; }

  const pc=e.target.closest('[data-pickcat]');
  if(pc){ e.preventDefault(); catsSel=pc.dataset.pickcat; if(location.hash!=='#/categories'){location.hash='#/categories';} else render(); return; }

  /* ripple on every button press */
  const rb=e.target.closest('.btn');
  if(rb && !(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)){
    const r=rb.getBoundingClientRect(), size=Math.max(r.width,r.height);
    const sp=document.createElement('span');
    sp.className='ripple';
    sp.style.width=sp.style.height=size+'px';
    sp.style.left=(e.clientX-r.left-size/2)+'px';
    sp.style.top=(e.clientY-r.top-size/2)+'px';
    rb.appendChild(sp);
    setTimeout(()=>sp.remove(), 650);
  }

  const fav=e.target.closest('[data-fav]');
  if(fav){
    e.preventDefault(); toggleFav(fav.dataset.fav, fav);
    if(fav.dataset.favbtn){ render(); }
    return;
  }
  if(e.target.closest('[data-planclose]')){ togglePlan(); return; }
  if(e.target.closest('[data-planexport]')){ exportPlan(); return; }
  if(e.target.closest('[data-planclear]')){ FAV.clear(); saveFav(); planOpen=false; renderTray(false); render(); return; }

  const sp=e.target.closest('[data-surprise]');
  if(sp){ e.preventDefault(); rollSurprise(sp); return; }
  const cd=e.target.closest('[data-card]');
  if(cd){ e.preventDefault(); downloadCard(cd.dataset.card); return; }

  const go=e.target.closest('[data-go]');
  if(go){ location.hash='#/day/'+go.dataset.go; return; }

  const cday=e.target.closest('[data-cday]');
  if(cday){
    const [m,d]=cday.dataset.cday.split('-').map(Number);
    const rec=(yearIndex(state.year).byDay[m+'-'+d]||[]).filter(r=>passes(r.o))[0];
    if(!rec) return;
    if(m!==state.calMonth) renderCalPanel(m);
    const target=document.querySelector(`#calList [data-ci="${rec.o.s}"]`);
    if(target){
      target.scrollIntoView({block:'nearest',behavior:'smooth'});
      target.classList.add('flash'); setTimeout(()=>target.classList.remove('flash'),1200);
    }
    return;
  }
  const link=e.target.closest('.nav-links a');
  if(link) document.getElementById('navLinks').classList.remove('open');
});
document.addEventListener('change', e=>{
  const sel=e.target.closest('[data-sel]');
  if(!sel) return;
  if(sel.dataset.sel==='month') daysView.month=+sel.value;
  if(sel.dataset.sel==='cat')   daysView.cat=sel.value;
  render();
});
document.getElementById('langBtn').addEventListener('click', ()=>{
  state.lang = state.lang==='ar' ? 'en' : 'ar';
  try{ localStorage.setItem('td_lang', state.lang); }catch(e){}
  renderChrome(); render();
});
document.getElementById('searchBtn').addEventListener('click', openSearch);
document.getElementById('burger').addEventListener('click', ()=>{
  document.getElementById('navLinks').classList.toggle('open');
});
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){
    const m=document.getElementById('searchModal'); if(m) m.remove();
    const back=document.getElementById('calBack'); if(back && state.calSingle) back.click();
  }
  if((e.key==='k'||e.key==='K') && (e.metaKey||e.ctrlKey)){ e.preventDefault(); openSearch(); }
});
window.addEventListener('hashchange', ()=>{
  const app=document.getElementById('app');
  if(app && !(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)){
    app.classList.add('leaving');
    setTimeout(()=>{ window.scrollTo(0,0); render(); }, 150);
  } else { window.scrollTo(0,0); render(); }
});

renderChrome();
render();
