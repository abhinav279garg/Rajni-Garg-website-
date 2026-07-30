const WHATSAPP_NUMBER = "919425437122";

const translations = {
  en: {
    brandTag: "A living craft archive", navWork: "The work", navStory: "Her story", navLearn: "Learn", navContact: "Enquire",
    heroEyebrow: "Made by hand · Bhopal, India", heroTitleOne: "Made slowly.", heroTitleTwo: "Kept close.", heroIntro: "A living archive of Rajni ji’s handmade knots, small keepsakes and the quiet joy of passing a craft forward.", heroPrimary: "Explore her work", heroSecondary: "Meet Rajni ji", heroNote: "Real work · photographed in her studio",
    manifestoEyebrow: "Her practice", manifesto: "A cord becomes a loop. A loop becomes a knot. And in patient hands, an everyday thread becomes something worth remembering.",
    valueOneTitle: "Made with attention", valueOneBody: "Each piece begins at the worktable, shaped slowly by hand.", valueTwoTitle: "Rooted in feeling", valueTwoBody: "Small objects made for gifting, keeping and everyday delight.", valueThreeTitle: "Shared generously", valueThreeBody: "A practice kept alive by teaching the next pair of hands.",
    workEyebrow: "Selected archive", workTitle: "Knots with a story", workIntro: "A carefully selected record of real pieces, process and finished batches from Rajni ji’s own archive.",
    filterAll: "All", filterDolls: "Dolls & charms", filterWear: "Wear & carry", filterSeasonal: "Seasonal", filterProcess: "Process",
    craftOne: "The dancing knot doll", craftDollType: "Doll keychain · gallery piece", craftTwo: "Rose & slate lanyard", craftLanyardType: "Wearable cord work · gallery piece", craftThree: "Rose-knot thread", craftSeasonalType: "Seasonal keepsake · archive", craftFour: "White macramé set", craftMacrameType: "Straps & charm · gallery piece", craftFive: "At the packing table", craftProcessType: "Behind the scenes · process", craftSix: "The knot doll family", craftBatchType: "Documented batch · archive",
    archiveNote: "This is an enquiry-led archive. Rajni ji personally confirms what can be recreated, along with price and timing.",
    storyEyebrow: "The maker", storyTitle: "A creative practice, found again.", storyLead: "Rajni Garg makes with the kind of attention that cannot be hurried.", storyBodyOne: "Her archive holds experiments, gifts, small batches and the visible steps of learning: cord measured, colours paired, knots tightened, a face painted by hand.", storyBodyTwo: "This website is not a factory shelf. It is a respectful home for that practice—and an invitation to ask, learn and keep the knowledge moving.", storyQuote: "The joy is in seeing a simple thread become something that makes another person smile.",
    learnEyebrow: "Learn with Rajni ji", learnTitleOne: "The craft lives", learnTitleTwo: "when it is shared.", learnOneTitle: "Small learning circles", learnOneBody: "Warm, beginner-friendly sessions for small groups, subject to Rajni ji’s confirmation.", learnTwoTitle: "Schools & communities", learnTwoBody: "Enquiries from schools, neighbourhood groups and cultural communities are welcome.", learnThreeTitle: "Stories of making", learnThreeBody: "Future guides will document materials, techniques and the memories held in each form.", learnCta: "Ask about learning",
    contactEyebrow: "Begin a conversation", contactTitle: "Have a piece, occasion or learning idea in mind?", contactBody: "Share the starting point. Rajni ji or an authorised family member will personally confirm design feasibility, price and timing.", contactCta: "Share your idea", contactNote: "No automatic price or delivery promises",
    footerTag: "Made with care in Bhopal", footerLine: "A family-supported digital legacy for handmade knowledge.", privacy: "Privacy", aiNotice: "AI notice",
    dialogStatus: "Status", dialogStatusValue: "Gallery record · availability by confirmation", dialogPromise: "Promise", dialogPromiseValue: "No price or date is assumed", dialogCta: "Ask about this creation",
    formEyebrow: "A thoughtful beginning", formTitle: "Tell us what you have in mind.", formIntro: "Your answers stay in your browser until you choose to continue on WhatsApp.", formName: "Your name", formCity: "City", formInterest: "What are you interested in?", formMessage: "A few details", formConsent: "I understand that Rajni ji personally confirms feasibility, price and timing.", formSubmit: "Continue on WhatsApp", formSafe: "Nothing is sent automatically.", optionCreation: "A creation", optionCustom: "A custom idea", optionLearning: "Learning or workshop", optionAppreciation: "Sharing appreciation"
  },
  hi: {
    brandTag: "हस्तकला का जीवंत संग्रह", navWork: "कला संग्रह", navStory: "उनकी कहानी", navLearn: "सीखें", navContact: "पूछताछ",
    heroEyebrow: "हाथों से निर्मित · भोपाल, भारत", heroTitleOne: "धीरे बनाया।", heroTitleTwo: "दिल से सँजोया।", heroIntro: "Rajni ji की हाथ से बुनी गाँठों, छोटी यादगार creations और कला को आगे बढ़ाने की शांत खुशी का एक जीवंत संग्रह।", heroPrimary: "उनकी कला देखें", heroSecondary: "Rajni ji से मिलें", heroNote: "वास्तविक कारीगरी · उनके स्टूडियो की तस्वीर",
    manifestoEyebrow: "उनकी साधना", manifesto: "एक डोरी घेरा बनती है। घेरा गाँठ बनता है। और धैर्यवान हाथों में, रोज़मर्रा का धागा एक याद बन जाता है।",
    valueOneTitle: "ध्यान से बनाया", valueOneBody: "हर creation काम की मेज़ से शुरू होती है और धीरे-धीरे हाथों में आकार लेती है।", valueTwoTitle: "भावना से जुड़ा", valueTwoBody: "उपहार, याद और रोज़ की छोटी खुशी के लिए बनी चीज़ें।", valueThreeTitle: "दिल खोलकर साझा", valueThreeBody: "अगले हाथों को सिखाकर जीवित रखी गई कला।",
    workEyebrow: "चुना हुआ संग्रह", workTitle: "हर गाँठ में एक कहानी", workIntro: "Rajni ji के अपने archive से वास्तविक creations, process और तैयार batches का सावधानी से चुना गया रिकॉर्ड।",
    filterAll: "सभी", filterDolls: "गुड़िया और charms", filterWear: "पहनें और साथ रखें", filterSeasonal: "त्योहार", filterProcess: "बनाने की प्रक्रिया",
    craftOne: "नाचती गाँठ वाली गुड़िया", craftDollType: "डॉल की-चेन · संग्रह", craftTwo: "गुलाबी-स्लेट लैनयार्ड", craftLanyardType: "हाथ से बुनी डोरी · संग्रह", craftThree: "गुलाब-गाँठ धागा", craftSeasonalType: "त्योहार की याद · संग्रह", craftFour: "सफेद मैक्रामे सेट", craftMacrameType: "स्ट्रैप और charm · संग्रह", craftFive: "पैकिंग की मेज़ पर", craftProcessType: "पर्दे के पीछे · प्रक्रिया", craftSix: "गाँठ वाली गुड़ियों का परिवार", craftBatchType: "तैयार batch · संग्रह",
    archiveNote: "यह enquiry आधारित संग्रह है। क्या दोबारा बनाया जा सकता है, उसकी कीमत और समय—इन सबकी अंतिम पुष्टि Rajni ji स्वयं करती हैं।",
    storyEyebrow: "कलाकार", storyTitle: "एक रचनात्मक साधना, फिर से मिली।", storyLead: "Rajni Garg उस धैर्य से बनाती हैं जिसे जल्दबाज़ी में नहीं पाया जा सकता।", storyBodyOne: "उनके archive में प्रयोग, उपहार, छोटे batches और सीखने के दिखते कदम हैं—डोरी नापना, रंग मिलाना, गाँठ कसना और हाथ से चेहरा बनाना।", storyBodyTwo: "यह website किसी factory की shelf नहीं है। यह उनकी साधना का सम्मानपूर्ण घर है—पूछने, सीखने और ज्ञान को आगे बढ़ाने का निमंत्रण।", storyQuote: "खुशी तब मिलती है जब एक साधारण धागा किसी के चेहरे पर मुस्कान ले आता है।",
    learnEyebrow: "Rajni ji के साथ सीखें", learnTitleOne: "कला जीवित रहती है", learnTitleTwo: "जब उसे साझा किया जाए।", learnOneTitle: "छोटे learning circles", learnOneBody: "छोटे समूहों के लिए सहज beginner sessions, Rajni ji की पुष्टि के बाद।", learnTwoTitle: "स्कूल और समुदाय", learnTwoBody: "स्कूलों, पड़ोस के समूहों और सांस्कृतिक समुदायों की enquiries का स्वागत है।", learnThreeTitle: "बनाने की कहानियाँ", learnThreeBody: "आने वाली guides में materials, techniques और हर form से जुड़ी यादों को दर्ज किया जाएगा।", learnCta: "सीखने के बारे में पूछें",
    contactEyebrow: "बातचीत शुरू करें", contactTitle: "कोई creation, अवसर या सीखने का विचार मन में है?", contactBody: "अपना शुरुआती विचार साझा करें। Design की संभावना, price और timing की पुष्टि Rajni ji या परिवार का अधिकृत सदस्य करेगा।", contactCta: "अपना विचार साझा करें", contactNote: "Price या delivery का automatic वादा नहीं",
    footerTag: "भोपाल में स्नेह से निर्मित", footerLine: "हस्तकला के ज्ञान की परिवार-संरक्षित digital विरासत।", privacy: "गोपनीयता", aiNotice: "AI सूचना",
    dialogStatus: "स्थिति", dialogStatusValue: "संग्रह record · उपलब्धता की पुष्टि आवश्यक", dialogPromise: "हमारा वादा", dialogPromiseValue: "कोई कीमत या तारीख अनुमान से नहीं", dialogCta: "इस creation के बारे में पूछें",
    formEyebrow: "एक सुंदर शुरुआत", formTitle: "हमें अपने मन की बात बताइए।", formIntro: "जब तक आप WhatsApp पर आगे बढ़ना नहीं चुनते, आपके उत्तर केवल आपके browser में रहते हैं।", formName: "आपका नाम", formCity: "शहर", formInterest: "आपकी रुचि किसमें है?", formMessage: "थोड़ी जानकारी", formConsent: "मैं समझता/समझती हूँ कि design की संभावना, price और timing की पुष्टि Rajni ji स्वयं करती हैं।", formSubmit: "WhatsApp पर आगे बढ़ें", formSafe: "कुछ भी अपने-आप नहीं भेजा जाता।", optionCreation: "कोई creation", optionCustom: "Custom idea", optionLearning: "सीखना या workshop", optionAppreciation: "प्रशंसा साझा करना"
  }
};

const crafts = {
  "RG-001": { image: "assets/yellow-knot-doll.jpg", en: ["The dancing knot doll", "A joyful hand-knotted character with a painted wooden face and clip—documented in Rajni ji’s working archive."], hi: ["नाचती गाँठ वाली गुड़िया", "हाथ से गाँठों में बनी, painted wooden face और clip वाली खुशमिज़ाज छोटी गुड़िया—Rajni ji के working archive में दर्ज।"] },
  "RG-002": { image: "assets/rose-slate-lanyard.jpg", en: ["Rose & slate lanyard", "A long, two-colour cord composition with wooden beads, a small bow detail and a metal clasp."], hi: ["गुलाबी-स्लेट लैनयार्ड", "दो रंग की लंबी hand-knotted डोरी, wooden beads, छोटी bow detail और metal clasp के साथ।"] },
  "RG-003": { image: "assets/rose-knot-thread.jpg", en: ["Rose-knot thread", "A soft peach thread piece centred by a rose bead, preserved as part of the seasonal archive."], hi: ["गुलाब-गाँठ धागा", "Peach रंग के धागे और बीच में rose bead से बना seasonal archive का एक नमूना।"] },
  "RG-004": { image: "assets/white-macrame-set.jpg", en: ["White macramé set", "An exploration of repeating knots, wooden rings and tassels across coordinated straps and a small charm."], hi: ["सफेद मैक्रामे सेट", "दोहराई गई गाँठों, wooden rings और tassels के साथ matching straps और charm का प्रयोग।"] },
  "RG-005": { image: "assets/packing-table.jpg", en: ["At the packing table", "A documentary view of finished charms, backing cards and the careful work of preparing a batch."], hi: ["पैकिंग की मेज़ पर", "तैयार charms, backing cards और batch को सावधानी से pack करने की वास्तविक झलक।"] },
  "RG-006": { image: "assets/knot-doll-family.jpg", en: ["The knot doll family", "A row of early knot-doll forms in mustard, maroon, blue and yellow—evidence of iteration and play."], hi: ["गाँठ वाली गुड़ियों का परिवार", "Mustard, maroon, blue और yellow में शुरुआती knot-doll forms—प्रयोग और रचनात्मक खेल का प्रमाण।"] }
};

const body = document.body;
const header = document.querySelector("[data-header]");
const nav = document.querySelector(".site-nav");
const menu = document.querySelector("[data-menu]");
let language = localStorage.getItem("rajni-language") || "en";
let selectedCraft = "";

function applyLanguage(lang) {
  language = lang;
  body.dataset.lang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = translations[lang][el.dataset.i18n];
    if (value) el.textContent = value;
  });
  document.querySelector("[data-lang-label]").textContent = lang === "en" ? "हिंदी" : "English";
  localStorage.setItem("rajni-language", lang);
}

applyLanguage(language);
document.querySelector("[data-language]").addEventListener("click", () => applyLanguage(language === "en" ? "hi" : "en"));
document.querySelector("[data-year]").textContent = new Date().getFullYear();

window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 24), { passive: true });
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menu.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { nav.classList.remove("is-open"); menu.setAttribute("aria-expanded", "false"); }));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("[data-filter]").forEach(item => item.classList.remove("is-active"));
  button.classList.add("is-active");
  document.querySelectorAll("[data-category]").forEach(card => card.classList.toggle("is-hidden", button.dataset.filter !== "all" && card.dataset.category !== button.dataset.filter));
}));

const craftDialog = document.querySelector("[data-craft-dialog]");
document.querySelectorAll("[data-craft]").forEach(button => button.addEventListener("click", () => {
  selectedCraft = button.dataset.craft;
  const craft = crafts[selectedCraft];
  const [title, description] = craft[language];
  craftDialog.querySelector("[data-dialog-id]").textContent = selectedCraft;
  craftDialog.querySelector("[data-dialog-title]").textContent = title;
  craftDialog.querySelector("[data-dialog-description]").textContent = description;
  const image = craftDialog.querySelector("[data-dialog-image]");
  image.src = craft.image;
  image.alt = title;
  craftDialog.showModal();
  body.classList.add("modal-open");
}));

function closeDialog(dialog) { dialog.close(); body.classList.remove("modal-open"); }
document.querySelector("[data-dialog-close]").addEventListener("click", () => closeDialog(craftDialog));
craftDialog.addEventListener("click", event => { if (event.target === craftDialog) closeDialog(craftDialog); });

const enquiryDialog = document.querySelector("[data-enquiry-dialog]");
function openEnquiry(craft = "", intent = "") {
  selectedCraft = craft;
  const form = enquiryDialog.querySelector("form");
  form.elements.craft.value = craft;
  if (intent === "learning") form.elements.interest.value = "Learning or workshop";
  enquiryDialog.showModal();
  body.classList.add("modal-open");
}
document.querySelectorAll("[data-open-enquiry]").forEach(button => button.addEventListener("click", () => openEnquiry("", button.dataset.intent)));
document.querySelector("[data-enquire-craft]").addEventListener("click", () => { closeDialog(craftDialog); openEnquiry(selectedCraft); });
document.querySelector("[data-enquiry-close]").addEventListener("click", () => closeDialog(enquiryDialog));
enquiryDialog.addEventListener("click", event => { if (event.target === enquiryDialog) closeDialog(enquiryDialog); });

document.querySelector("[data-enquiry-form]").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const lines = language === "hi"
    ? [`नमस्ते 🙏 मेरा नाम ${data.get("name")} है।`, data.get("city") ? `शहर: ${data.get("city")}` : "", `रुचि: ${data.get("interest")}`, data.get("craft") ? `Creation ID: ${data.get("craft")}` : "", `विवरण: ${data.get("message")}`, "", "मैं समझता/समझती हूँ कि design, price और timing की अंतिम पुष्टि Rajni ji करेंगी।"]
    : [`Namaste 🙏 My name is ${data.get("name")}.`, data.get("city") ? `City: ${data.get("city")}` : "", `Interest: ${data.get("interest")}`, data.get("craft") ? `Creation ID: ${data.get("craft")}` : "", `Details: ${data.get("message")}`, "", "I understand that Rajni ji personally confirms design, price and timing."];
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.filter(Boolean).join("\n"))}`, "_blank", "noopener,noreferrer");
});

const noticeDialog = document.querySelector("[data-notice-dialog]");
const noticeContent = noticeDialog.querySelector("[data-notice-content]");
const notices = {
  privacy: {
    en: `<p class="eyebrow">Privacy</p><h2>Your enquiry stays yours.</h2><p>This website does not create an account, use invasive tracking or send form details to a server. Information entered in the enquiry form remains in your browser until you choose to open WhatsApp. WhatsApp then processes your message under its own terms.</p><p>Please do not share sensitive payment information or photographs of children through the first enquiry. You may ask the family to correct or delete information you have shared.</p>`,
    hi: `<p class="eyebrow">गोपनीयता</p><h2>आपकी enquiry आपकी रहती है।</h2><p>यह website account नहीं बनाती, invasive tracking नहीं करती और form की जानकारी किसी server पर नहीं भेजती। आपके उत्तर तब तक browser में रहते हैं जब तक आप WhatsApp खोलना नहीं चुनते। उसके बाद WhatsApp अपनी terms के अनुसार message process करता है।</p><p>पहली enquiry में sensitive payment details या बच्चों की तस्वीरें न भेजें। साझा जानकारी को सुधारने या हटाने के लिए परिवार से कह सकते हैं।</p>`
  },
  ai: {
    en: `<p class="eyebrow">AI notice</p><h2>Assistance without impersonation.</h2><p>A future digital craft assistant may help with greetings, navigation, approved catalogue information and collecting an enquiry. It will identify itself and will never pretend to be Rajni ji.</p><p>Rajni ji or an authorised family member always confirms custom feasibility, final price, production capacity, delivery dates, workshops, complaints and sensitive matters.</p>`,
    hi: `<p class="eyebrow">AI सूचना</p><h2>सहायता, बिना किसी की नकल किए।</h2><p>भविष्य का digital craft assistant greetings, navigation, approved catalogue information और enquiry collect करने में मदद कर सकता है। वह अपनी पहचान स्पष्ट बताएगा और कभी Rajni ji बनकर बात नहीं करेगा।</p><p>Custom feasibility, final price, production capacity, delivery dates, workshops, complaints और sensitive matters की पुष्टि हमेशा Rajni ji या परिवार का authorised सदस्य करेगा।</p>`
  }
};
function openNotice(type) { noticeContent.innerHTML = notices[type][language]; noticeDialog.showModal(); body.classList.add("modal-open"); }
document.querySelector("[data-open-privacy]").addEventListener("click", () => openNotice("privacy"));
document.querySelector("[data-open-ai]").addEventListener("click", () => openNotice("ai"));
document.querySelector("[data-notice-close]").addEventListener("click", () => closeDialog(noticeDialog));
noticeDialog.addEventListener("click", event => { if (event.target === noticeDialog) closeDialog(noticeDialog); });

document.addEventListener("keydown", event => {
  if (event.key === "Escape") body.classList.remove("modal-open");
});
