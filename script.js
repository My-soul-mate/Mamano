// ===== البيانات =====
const PASSWORD = "حبيقزون";

const BG_IMAGES = ["h1.jpg","h2.jpg","h3.jpg"];

const QUALITIES = [
  {
    img:"t1.jpg",
    title:"حنونة 🤍",
    desc:"لأن قلبكِ يتسع للدفء واللطف، وكل من يقترب منكِ يشعر بالأمان."
  },
  {
    img:"t2.jpg",
    title:"صبورة 🌿",
    desc:"لأنكِ تتحملين الكثير بهدوء، وتواجهين الحياة بقوة وحكمة لا يراها إلا من يعرفكِ."
  },
  {
    img:"t3.jpg",
    title:"طيبة 💛",
    desc:"لأن طيبة قلبكِ لا تُخفى، وتظهر في كلامكِ، واهتمامكِ، وطريقتكِ مع الجميع."
  },
  {
    img:"t4.jpg",
    title:"كريمة 🌸",
    desc:"لأنكِ تعطين من قلبكِ قبل يديكِ، وتزرعين الخير دون انتظار مقابل."
  },
  {
    img:"t5.jpg",
    title:"محترمة 👑",
    desc:"لأن حضوركِ راقٍ، وكلامكِ موزون، ومكانتكِ في القلوب كبيرة جدًا."
  },
  {
    img:"t6.jpg",
    title:"جميلة 🌹",
    desc:"لأن جمالكِ ينبع من روحكِ النقية، ومن نوركِ الذي يسبقكِ أينما ذهبتِ."
  },
  {
    img:"l1.jpg",
    title:"ضحكتكِ مشرقة ☀️",
    desc:"لأن ضحكتكِ تدخل السعادة إلى القلب، وتترك في المكان راحةً لا توصف."
  }
];

const UNSAID = [
  {
    label:"الرسالة الأولى 💌",
    text:"أريد أن أشكركِ على تضحياتكِ، وعلى ترككِ كثيرًا من أحلامكِ من أجلنا. أنا أقدّر هذا كثيرًا، حتى لو لم أقله لكِ كل يوم."
  },
  {
    label:"الرسالة الثانية 💌",
    text:"أتمنى أن تسامحيني على الأخطاء التي ارتكبتها معكِ، والتي أجبرتكِ على قول أشياء لم تكوني مضطرة لقولها."
  },
  {
    label:"الرسالة الثالثة 💌",
    text:"أنتِ السبب الذي جعلني أواصل طريقي نحو مستقبلي، وأنتِ من ساعدتني في كل شيء في حياتي، وفي بناء شخصية قوية مثلكِ."
  }
];

const PROMISES = [
  "أعدكِ أن أصل إلى ما تتمنين أن تريني عليه.",
  "أعدكِ أن أكون إلى جانبكِ في الوقت الذي تحتاجينني فيه.",
  "أعدكِ أن أحفظ أسراركِ ما حييت.",
  "أعدكِ أنني، إن شاء الله، سأوفي بوعودي لكِ."
];

const HEARTWORDS = [
  "دعواتكِ ترافقني في كل خطوة.",
  "أنتِ أمي نوال، وهذا فخر لي.",
  "لن أنسى مكانتكِ في قلبي أبدًا.",
  "طيبة قلبكِ تغمرنا دائمًا بالسعادة والراحة."
];

const MEANINGS = [
  "أمي نوال تعني لي…",
  "الأمان…",
  "الحنان…",
  "الدعاء الصادق…",
  "البيت الثاني…",
  "القلب الكبير…",
  "الطمأنينة…",
  "النعمة التي أحمد الله عليها كل يوم."
];

const GRATITUDE_LEAVES = [
  "شكرًا يا أمي نوال",
  "نحبكِ دائمًا",
  "دعواتكِ ترافقنا",
  "حنانكِ أمان",
  "وجودكِ نعمة",
  "قلبكِ كبير",
  "ضحكتكِ تشرح القلب",
  "طيبة روحكِ لا تُنسى",
  "مكانتكِ محفوظة",
  "صبركِ علّمنا الكثير",
  "وجودكِ راحة",
  "أنتِ البركة",
  "نصائحكِ تنير الطريق",
  "حضنكِ وطن",
  "كلامكِ أمان",
  "قلبكِ بيت دافئ",
  "حضوركِ جميل",
  "أثركِ لا يزول",
  "لكِ في القلب مقام",
  "الخير يشبهكِ",
  "الدفء يبدأ منكِ",
  "أنتِ أجمل نعمة",
  "فضلكِ لا يُنسى",
  "نوركِ في البيت",
  "أنتِ السند",
  "الرحمة في قلبكِ",
  "كرمكِ لا يُنسى",
  "حنانكِ يكفينا",
  "أنتِ الطمأنينة",
  "يا أمي نوال… شكرًا لكل شيء"
];

const STAR_POEMS = [
  "يا أمي نوال، فيكِ من الطيبة ما يكفي لتهدئة قلبٍ متعب.",
  "إذا ذُكر الحنان، حضرتِ أنتِ أولًا في الذاكرة.",
  "في صوتكِ راحة، وفي حضوركِ نور، وفي قلبكِ بيت من دفء.",
  "مكانتكِ لا تُكتب بحبر، بل تُحفَظ في القلب عمرًا كاملًا.",
  "من عرف قلبكِ، عرف أن الخير لا يزال حيًّا في هذه الدنيا.",
  "أنتِ امرأة يسبقها أثرها الطيب قبل حضورها.",
  "في وجهكِ هدوء، وفي روحكِ جمال، وفي قلبكِ رحمة لا تُنسى.",
  "يا أمي نوال، لو جُمعت كل كلمات الشكر، لما أوفتكِ حقكِ.",
  "أنتِ من الناس الذين يتركون في القلب نورًا لا ينطفئ.",
  "وجودكِ بيننا رزق لا يُقاس بالكلمات."
];

const STAR_POSITIONS = [
  {top:"5%",left:"42%"},
  {top:"15%",left:"18%"},
  {top:"15%",left:"65%"},
  {top:"30%",left:"8%"},
  {top:"30%",left:"42%"},
  {top:"30%",left:"75%"},
  {top:"50%",left:"20%"},
  {top:"50%",left:"62%"},
  {top:"65%",left:"30%"},
  {top:"65%",left:"54%"}
];

const MEMORIES = [
  "أتذكرين يا أمي حين كنتِ تؤدبيننا بشدة، وأنتِ ترين في ذلك مصلحتنا.",
  "أتذكرين حرف Y.",
  "أتذكرين عندما كنتِ تلعبين معي، حين لم يكن أحد يريد اللعب معي.",
  "أتذكرين أنه في كل عيد ميلاد لي، كنتِ تعطينني نصيحة حتى لا أعيد أخطاءكِ، وكانت تلك هديتي نظرًا للظروف.",
  "أتذكرين عندما كنتُ أتعرض للتنمر، وكنتُ أجمع شتات نفسي طوال الأسبوع، إلا يوم السبت، حين كان يأتيني انهيار عصبي، فكنتِ تحتضنينني، وتتحملينني، وتسمعينني، ولا تحاولين قمع مشاعري في أسوأ حالاتي.",
  "أتذكرين عندما كنتِ تخرجيننا لتشتري لنا أشياء جميلة رغم الظروف، لتساعدينا على بناء شخصية قوية تنفعنا في حياتنا، وكل الفضل لكِ في ذلك."
];

const GIFT_CARDS = [
  "شكرًا لأنكِ علّمتِنا الصبر.",
  "دعواتكِ هي درعنا في هذه الحياة.",
  "طيبة قلبكِ هي أجمل ما ورثناه منكِ.",
  "ذكرياتنا معكِ أغلى كنز نملكه.",
  "أعدكِ أن أكون دائمًا فخرًا لكِ."
];

const LANGUAGES = [
  {word:"أحبكِ يا أمي",lang:"عربي"},
  {word:"كانبغيك أ الواليدة",lang:"مغربي"},
  {word:"أركم تيريغ أ يما",lang:"أمازيغي"},
  {word:"I love you, Mom",lang:"إنجليزي"},
  {word:"Je t'aime, maman",lang:"فرنسي"},
  {word:"Te amo, mamá",lang:"إسباني"},
  {word:"Ti amo, mamma",lang:"إيطالي"},
  {word:"Ich liebe dich, Mama",lang:"ألماني"},
  {word:"Seni seviyorum, anne",lang:"تركي"},
  {word:"妈妈，我爱你",lang:"صيني"},
  {word:"엄마 사랑해요",lang:"كوري"},
  {word:"お母さん、大好き",lang:"ياباني"},
  {word:"Я люблю тебя, мама",lang:"روسي"},
  {word:"Eu te amo, mãe",lang:"برتغالي"},
  {word:"دوستت دارم مادر",lang:"فارسي"},
  {word:"Σ' αγαπώ, μαμά",lang:"يوناني"},
  {word:"मैं तुमसे प्यार करता हूँ, माँ",lang:"هندي"},
  {word:"Aku sayang ibu",lang:"إندونيسي"},
  {word:"Kocham cię, mamo",lang:"بولندي"},
  {word:"Mahal kita, Inay",lang:"فلبيني"},
  {word:"Jag älskar dig, mamma",lang:"سويدي"},
  {word:"Ik hou van je, mama",lang:"هولندي"},
  {word:"Miluji tě, mami",lang:"تشيكي"},
  {word:"אני אוהבת אותך, אמא",lang:"عبري"},
  {word:"ฉันรักแม่",lang:"تايلندي"},
  {word:"Мен сені жақсы көремін, ана",lang:"كازاخي"},
  {word:"Tôi yêu mẹ",lang:"فيتنامي"},
  {word:"Ma armastan sind, ema",lang:"إستوني"},
  {word:"Mina rakastan sinua, äiti",lang:"فنلندي"},
  {word:"Volim te, mama",lang:"كرواتي"},
  {word:"Обичам те, мамо",lang:"بلغاري"},
  {word:"Ég elska þig, mamma",lang:"آيسلندي"},
  {word:"Es tevi mīlu, mammu",lang:"لاتفي"},
  {word:"Aš tave myliu, mama",lang:"ليتواني"},
  {word:"Te iubesc, mamă",lang:"روماني"},
  {word:"Ljubim te, mama",lang:"سلوفيني"},
  {word:"Iniibig kita, Nanay",lang:"تاغالوغ"},
  {word:"Мен сени сүйөм, апа",lang:"قيرغيزي"},
  {word:"Men seni söýýärin, eje",lang:"تركمانستاني"},
  {word:"Nakupenda, mama",lang:"سواحيلي"},
  {word:"Ngiyakuthanda, mama",lang:"زولو"},
  {word:"Ndirakukunda, mama",lang:"تشيتشيوا"}
];

const EYES_CARDS = [
  {
    name:"إيمان",
    text:"أمي نوال ليست مجرد اسم جميل في حياتي، بل هي قلب كبير، ودفء لا يُنسى، وراحة أشعر بها كلما اقتربتُ منها. مكانتها في قلبي محفوظة، وأثرها في حياتي لا يمكن أن تمحوه الأيام."
  },
  {
    name:"محمد أمين",
    text:"قد لا يجمعني بأمي نوال نسب، لكن يجمعني بها تقدير كبير، ومكانة محفوظة في القلب. هي امرأة عظيمة، يعرف فضلها كل من اقترب من روحها، ويعرف أن حضورها وحده يكفي ليترك راحة لا تُنسى."
  }
];

const WISDOM = [
  "لا تكرروا أخطائي.",
  "لا تكونوا مثلي.",
  "لا تدعوا أحدًا يتنمر عليكم أو يسيء إليكم.",
  "لا تستسلموا، وابذلوا جهدكم، واجتهدوا في دراستكم، فهي مستقبلكم."
];

const POLAROID_IMGS = [
  {img:"l1.jpg",rot:"-3deg"},
  {img:"l2.jpg",rot:"2deg"},
  {img:"l3.jpg",rot:"-1.5deg"}
];

const DARIJA = [
  "يا أمي نوال، راكِ نعمة كبيرة في حياتنا.",
  "وجودكِ حدانا راحة ما كتتوصفش.",
  "ضحكتكِ تنوّر المكان كامل.",
  "حنانكِ ما يتعوض بحتى حاجة.",
  "قلبكِ كبير علينا كامل.",
  "حضنكِ راحة، وكلامكِ أمان.",
  "مهما نقول عليكِ، يبقى قليل.",
  "لي عندو أمي نوال، عندو كنز.",
  "أنتِ البركة ديال الدار.",
  "وجودكِ وحده يكفينا."
];

const FAMILY_TREE = {
  level1:[
    {name:"حمد",role:"جذور العائلة"},
    {name:"فاطمة",role:"أصل الحنان"}
  ],
  level2:[
    {name:"أمي نوال",role:"قلب البيت",highlight:true},
    {name:"أبي محمد",role:"سند العائلة"}
  ],
  level3:[
    {name:"إيمان",role:"غصن من القلب"},
    {name:"آدم",role:"غصن من الروح"},
    {name:"عمر",role:"غصن من النور"}
  ],
  distant:{name:"محمد أمين",role:"قريب من القلب"}
};

// ===== المتغيرات =====
let pwAttempts = 0;
let bgIndex = 0;
let siteReady = false;
let leafInterval = null;
let wisdomIndex = 0;
let wisdomTimer = null;
let twIndex = 0;

// ===== العناصر =====
const $ = id => document.getElementById(id);

const bgLayer = $("bgLayer");
const preloader = $("preloader");
const passwordScreen = $("passwordScreen");
const voiceScreen = $("voiceScreen");
const app = $("app");
const pwInput = $("pwInput");
const pwBtn = $("pwBtn");
const pwErr = $("pwErr");
const playVoiceBtn = $("playVoiceBtn");
const enterBtn = $("enterBtn");
const voiceAudio = $("voiceAudio");
const bgMusic = $("bgMusic");
const musicToggle = $("musicToggle");
const soundWave = $("soundWave");
const leavesContainer = $("leaves");

// ===== التحميل =====
setTimeout(()=>{
  preloader.classList.add("hidden");
  passwordScreen.classList.remove("hidden");
  startLeaves();
},2000);

// ===== الأوراق =====
const LEAF_EMOJIS = ["🍃","🍂","🌿","🍀","🌱"];

function startLeaves(){
  leafInterval = setInterval(()=>{
    const leaf = document.createElement("span");
    leaf.className = "leaf";
    leaf.textContent = LEAF_EMOJIS[Math.floor(Math.random()*LEAF_EMOJIS.length)];
    leaf.style.left = `${Math.random()*100}%`;
    leaf.style.fontSize = `${1+Math.random()*1.2}rem`;
    const dur = 6+Math.random()*8;
    leaf.style.animationDuration = `${dur}s`;
    leaf.style.animationDelay = `${Math.random()*2}s`;
    leavesContainer.appendChild(leaf);
    setTimeout(()=>leaf.remove(), dur*1000+2000);
  },600);
}

// ===== كلمة المرور =====
function norm(s){return s.replace(/\s+/g," ").trim()}

function checkPW(){
  if(norm(pwInput.value)===norm(PASSWORD)){
    pwErr.textContent="";
    passwordScreen.classList.add("hidden");
    voiceScreen.classList.remove("hidden");
  } else {
    pwAttempts++;
    pwErr.textContent="كلمة المرور غير صحيحة، حاولي مجددًا";
    pwInput.value="";
  }
}

pwBtn.addEventListener("click",checkPW);
pwInput.addEventListener("keydown",e=>{if(e.key==="Enter")checkPW()});

// ===== الصوت =====
playVoiceBtn.addEventListener("click",async()=>{
  try{await voiceAudio.play()}catch(e){}
  soundWave.classList.add("playing");
  setTimeout(()=>enterBtn.classList.remove("hidden"),800);
});

voiceAudio.addEventListener("ended",()=>{
  soundWave.classList.remove("playing");
  enterBtn.classList.remove("hidden");
});

enterBtn.addEventListener("click",async()=>{
  voiceScreen.classList.add("hidden");
  app.classList.remove("hidden");
  if(!siteReady){initSite();siteReady=true}
  try{
    await bgMusic.play();
    musicToggle.textContent="⏸ إيقاف";
  }catch(e){
    musicToggle.textContent="▶ تشغيل";
  }
});

musicToggle.addEventListener("click",async()=>{
  if(bgMusic.paused){
    try{await bgMusic.play();musicToggle.textContent="⏸ إيقاف"}catch(e){}
  }else{
    bgMusic.pause();
    musicToggle.textContent="▶ تشغيل";
  }
});

// ===== تهيئة الموقع =====
function initSite(){
  rotateBg();
  setInterval(rotateBg,5000);
  buildFamilyTree();
  buildQualities();
  buildUnsaid();
  buildPromises();
  buildHeartwords();
  buildMeanings();
  buildGratitude();
  buildStars();
  buildMemories();
  buildGiftCards();
  buildLanguages();
  buildEyes();
  buildWisdom();
  buildPolaroid();
  buildDarija();
  initMirror();
  initEnvelope();
  initScrollAnimations();
}

// ===== الخلفية =====
function rotateBg(){
  bgIndex=(bgIndex+1)%BG_IMAGES.length;
  bgLayer.style.backgroundImage=`url("${BG_IMAGES[bgIndex]}")`;
}

// ===== شجرة العائلة =====
function buildFamilyTree(){
  const container = $("familyTree");
  container.innerHTML="";

  // المستوى 1
  const lv1 = document.createElement("div");
  lv1.className="tree-level";
  FAMILY_TREE.level1.forEach(n=>{
    lv1.appendChild(makeNode(n));
  });
  container.appendChild(lv1);

  // خط
  container.appendChild(makeLine());

  // المستوى 2
  const lv2 = document.createElement("div");
  lv2.className="tree-level";
  FAMILY_TREE.level2.forEach(n=>{
    const node = makeNode(n);
    if(n.highlight){
      node.style.border="2px solid var(--gold)";
      node.style.background="rgba(201,168,76,0.12)";
      node.style.boxShadow="0 0 20px rgba(201,168,76,0.2)";
    }
    lv2.appendChild(node);
  });
  container.appendChild(lv2);

  // خط
  container.appendChild(makeLine());

  // المستوى 3
  const lv3 = document.createElement("div");
  lv3.className="tree-level";
  FAMILY_TREE.level3.forEach(n=>{
    lv3.appendChild(makeNode(n));
  });
  container.appendChild(lv3);

  // غصن بعيد
  const distWrap = document.createElement("div");
  distWrap.style.cssText="margin-top:24px;opacity:.75;display:flex;flex-direction:column;align-items:center;gap:6px";
  const distLabel = document.createElement("p");
  distLabel.textContent="— غصن قريب من القلب —";
  distLabel.style.cssText="color:var(--muted);font-size:.85rem";
  distWrap.appendChild(distLabel);
  const distNode = makeNode(FAMILY_TREE.distant);
  distNode.classList.add("distant");
  distWrap.appendChild(distNode);
  container.appendChild(distWrap);
}

function makeNode(n){
  const div = document.createElement("div");
  div.className="tree-node";
  div.innerHTML=`<div class="name">${n.name}</div><div class="role">${n.role}</div>`;
  return div;
}

function makeLine(){
  const div = document.createElement("div");
  div.className="tree-line";
  return div;
}

// ===== الصفات =====
function buildQualities(){
  const grid = $("qualitiesGrid");
  grid.innerHTML="";
  QUALITIES.forEach(q=>{
    const card = document.createElement("div");
    card.className="q-card";
    card.innerHTML=`
      <img src="${q.img}" alt="">
      <div class="q-hint">اضغطي لتظهر الصفة</div>
      <div class="q-card-content">
        <h3>${q.title}</h3>
        <p>${q.desc}</p>
      </div>`;
    card.addEventListener("click",()=>card.classList.toggle("show"));
    grid.appendChild(card);
  });
}

// ===== رسائل لم أقلها =====
function buildUnsaid(){
  const container = $("unsaidCards");
  container.innerHTML="";
  UNSAID.forEach(u=>{
    const card = document.createElement("div");
    card.className="unsaid-card";
    card.innerHTML=`
      <div class="unsaid-label">${u.label} — اضغطي لتقرئي</div>
      <div class="unsaid-text">${u.text}</div>`;
    card.addEventListener("click",()=>card.classList.toggle("open"));
    container.appendChild(card);
  });
}

// ===== الوعود =====
function buildPromises(){
  const list = $("ringList");
  list.innerHTML=PROMISES.map(p=>`<li>${p}</li>`).join("");
}

// ===== كلمات القلب =====
function buildHeartwords(){
  const box = $("typewriterBox");
  box.innerHTML="";
  HEARTWORDS.forEach((line,i)=>{
    const p = document.createElement("p");
    p.className="tw-line";
    p.textContent=line;
    p.style.animationDelay=`${i*0.8}s`;
    box.appendChild(p);
  });
}

// ===== ماذا تعنين لي =====
function buildMeanings(){
  const list = $("meaningList");
  list.innerHTML="";
  MEANINGS.forEach(m=>{
    const item = document.createElement("div");
    item.className="meaning-item";
    item.textContent=m;
    list.appendChild(item);
  });

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const items = list.querySelectorAll(".meaning-item");
        items.forEach((item,i)=>{
          setTimeout(()=>item.classList.add("visible"),i*300);
        });
        observer.disconnect();
      }
    });
  },{threshold:0.3});

  observer.observe(list);
}

// ===== شجرة الامتنان =====
function buildGratitude(){
  const tree = $("gratitudeTree");
  tree.innerHTML="";
  GRATITUDE_LEAVES.forEach(leaf=>{
    const btn = document.createElement("button");
    btn.className="g-leaf";
    btn.textContent="🍃";
    btn.title=leaf;
    btn.addEventListener("click",()=>{
      if(btn.classList.contains("revealed")){
        btn.textContent="🍃";
        btn.classList.remove("revealed");
      } else {
        btn.textContent=leaf;
        btn.classList.add("revealed");
      }
    });
    tree.appendChild(btn);
  });
}

// ===== نجوم الشكر =====
function buildStars(){
  const field = $("starsField");
  const modal = $("starModal");
  const modalText = $("starModalText");
  const closeBtn = $("closeStarModal");
  field.innerHTML="";

  STAR_POEMS.forEach((poem,i)=>{
    const btn = document.createElement("button");
    btn.className="star-btn";
    btn.innerHTML="⭐";
    btn.style.top=STAR_POSITIONS[i].top;
    btn.style.left=STAR_POSITIONS[i].left;
    btn.style.animationDelay=`${i*0.3}s`;
    btn.addEventListener("click",()=>{
      modalText.textContent=poem;
      modal.classList.remove("hidden");
    });
    field.appendChild(btn);
  });

  closeBtn.addEventListener("click",()=>modal.classList.add("hidden"));
  modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.add("hidden")});
}

// ===== الذكريات =====
function buildMemories(){
  const tl = $("timelineEl");
  tl.innerHTML="";
  MEMORIES.forEach(m=>{
    const item = document.createElement("div");
    item.className="tl-item";
    item.innerHTML=`<p>${m}</p>`;
    tl.appendChild(item);
  });
}

// ===== الظرف =====
function initEnvelope(){
  const envelope = $("envelope");
  const content = $("letterContent");
  envelope.addEventListener("click",()=>{
    envelope.classList.toggle("opened");
    content.classList.toggle("hidden");
  });
}

// ===== صندوق الامتنان =====
function buildGiftCards(){
  const box = $("giftBox2");
  const cards = $("giftCards");

  box.addEventListener("click",()=>{
    box.classList.toggle("open");
    if(box.classList.contains("open")){
      cards.classList.remove("hidden");
      cards.innerHTML="";
      GIFT_CARDS.forEach((gc,i)=>{
        const item = document.createElement("div");
        item.className="gift-card-item";
        item.textContent=gc;
        item.style.animationDelay=`${i*0.2}s`;
        cards.appendChild(item);
      });
    } else {
      cards.classList.add("hidden");
    }
  });
}

// ===== 42 لغة =====
function buildLanguages(){
  const grid = $("langGrid");
  grid.innerHTML="";
  LANGUAGES.forEach(l=>{
    const card = document.createElement("div");
    card.className="lang-card";
    card.innerHTML=`
      <span class="lang-word">${l.word}</span>
      <span class="lang-name">${l.lang}</span>`;
    grid.appendChild(card);
  });
}

// ===== في عيوننا =====
function buildEyes(){
  const container = $("eyesCards");
  container.innerHTML="";
  EYES_CARDS.forEach(e=>{
    const card = document.createElement("div");
    card.className="eye-card";
    card.innerHTML=`<h3>من ${e.name}</h3><p>${e.text}</p>`;
    container.appendChild(card);
  });
}

// ===== حكم =====
function buildWisdom(){
  const slider = $("wisdomSlider");
  slider.innerHTML="";
  WISDOM.forEach(w=>{
    const item = document.createElement("div");
    item.className="wisdom-item";
    item.textContent=w;
    slider.appendChild(item);
  });
}

// ===== بولارويد =====
function buildPolaroid(){
  const wrap = $("polaroidWrap");
  wrap.innerHTML="";
  POLAROID_IMGS.forEach(p=>{
    const card = document.createElement("div");
    card.className="polaroid-card";
    card.style.setProperty("--rot",p.rot);
    card.innerHTML=`<img src="${p.img}" alt="لحظة جميلة">`;
    wrap.appendChild(card);
  });
}

// ===== بالدارجة =====
function buildDarija(){
  const container = $("darijaCards");
  container.innerHTML="";
  DARIJA.forEach(d=>{
    const item = document.createElement("div");
    item.className="darija-item";
    item.textContent=d;
    container.appendChild(item);
  });
}

// ===== المرآة =====
function initMirror(){
  const frame = $("mirrorFrame");
  const img = $("mirrorImg");
  const words = $("mirrorWords");
  const msg = $("mirrorMsg");

  const mirrorWords = ["الحنان","البركة","الرحمة","الطمأنينة"];

  frame.addEventListener("click",()=>{
    frame.classList.add("active");
    img.classList.remove("hidden");
    words.classList.remove("hidden");
    msg.classList.remove("hidden");

    words.innerHTML="";
    mirrorWords.forEach((w,i)=>{
      const span = document.createElement("span");
      span.className="mirror-word";
      span.textContent=w;
      span.style.animationDelay=`${i*0.4}s`;
      words.appendChild(span);
    });
  });
}

// ===== تأثيرات التمرير =====
function initScrollAnimations(){
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.opacity="1";
        e.target.style.transform="translateY(0)";
      }
    });
  },{threshold:0.1});

  document.querySelectorAll(".sec-card").forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(30px)";
    card.style.transition="opacity 0.7s ease, transform 0.7s ease";
    observer.observe(card);
  });
    }
