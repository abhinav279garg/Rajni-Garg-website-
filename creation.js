const pieces = {
  "knot-dolls": {
    image: "assets/knot-doll-family.jpg", secondary: "assets/yellow-knot-doll.jpg",
    en: { family: "Characters & charms", title: "The knot-doll family", intro: "A lively row of hand-knotted characters, each with its own colour, expression and playful presence.", materials: "Coloured cord, wooden face beads and metal clips", character: "Cheerful, playful and made for gifting", storyTitle: "Personality arrives one knot at a time.", story: "Repeated knots shape the body; a bead becomes a tiny face; colour turns the same starting idea into a family of different characters. The real charm lies in the small variations made by hand." },
    hi: { family: "गुड़ियाँ और आकर्षक लटकन", title: "गाँठों वाली गुड़ियों का परिवार", intro: "हाथ से गाँठों में बनी चंचल गुड़ियों की एक रंगीन पंक्ति—हर गुड़िया का अपना रंग, भाव और व्यक्तित्व।", materials: "रंगीन डोरी, लकड़ी के चेहरे वाले मोती और धातु की क्लिप", character: "खुशनुमा, चंचल और उपहार के लिए प्यारी", storyTitle: "हर गाँठ के साथ एक नया व्यक्तित्व उभरता है।", story: "दोहराई गई गाँठें शरीर बनाती हैं, एक मोती नन्हा चेहरा बनता है और अलग रंग एक ही विचार को पूरे परिवार में बदल देते हैं। हाथ से बने छोटे-छोटे अंतर ही इनका असली आकर्षण हैं।" }
  },
  "rose-lanyard": {
    image: "assets/rose-slate-lanyard.jpg", secondary: "assets/white-macrame-set.jpg",
    en: { family: "Wearable knotwork", title: "Rose & slate lanyard", intro: "A long, two-tone cord composition that balances soft rose with deep slate and warm wooden beads.", materials: "Rose and slate cord, wooden beads, bow detail and metal clasp", character: "Useful, expressive and softly colourful", storyTitle: "A useful cord becomes something personal.", story: "The alternating colours and repeated knots create rhythm along the length. Wooden beads add warmth, while the clasp turns the handwork into an everyday companion." },
    hi: { family: "पहनने योग्य गाँठ-कला", title: "गुलाबी और स्लेटी लैनयार्ड", intro: "लंबी, दो रंगों वाली डोरी—कोमल गुलाबी, गहरे स्लेटी रंग और लकड़ी के गर्माहट भरे मोतियों का सुंदर संतुलन।", materials: "गुलाबी-स्लेटी डोरी, लकड़ी के मोती, छोटी बो और धातु की क्लिप", character: "उपयोगी, अभिव्यक्तिपूर्ण और हल्के रंगों वाली", storyTitle: "एक उपयोगी डोरी, अपनी-सी रचना बन जाती है।", story: "बदलते रंग और दोहराई गई गाँठें पूरी लंबाई में एक लय बनाती हैं। लकड़ी के मोती गर्माहट जोड़ते हैं और क्लिप इसे रोज़ साथ रखी जा सकने वाली रचना बनाती है।" }
  },
  "rose-thread": {
    image: "assets/rose-knot-thread.jpg", secondary: "assets/rose-slate-lanyard.jpg",
    en: { family: "Festive keepsakes", title: "The rose-knot thread", intro: "A soft peach hand-knotted thread centred by a small rose bead—a delicate piece from Rajni ji’s festive work.", materials: "Peach cord, rose-shaped bead and adjustable knotwork", character: "Delicate, warm and celebratory", storyTitle: "A small flower holds the centre.", story: "The rose bead is framed by textured knots and fine threads. Its modest scale and soft colour give the piece the feeling of a personal festive gesture." },
    hi: { family: "त्योहारों की यादगार रचनाएँ", title: "गुलाब वाली गाँठ-डोरी", intro: "मुलायम आड़ू रंग की हाथ से गाँठी डोरी, जिसके बीच में छोटा गुलाब का मोती है—राजनी जी के त्योहारों से जुड़े काम की एक नाज़ुक रचना।", materials: "आड़ू रंग की डोरी, गुलाब के आकार का मोती और समायोजित होने वाली गाँठें", character: "कोमल, आत्मीय और उत्सवभरी", storyTitle: "बीच में खिला एक छोटा-सा गुलाब।", story: "गुलाब के मोती को बनावट वाली गाँठें और पतली डोरियाँ सँभालती हैं। इसका छोटा आकार और कोमल रंग इसे त्योहार पर दिए गए व्यक्तिगत स्नेह जैसा एहसास देते हैं।" }
  },
  "white-macrame": {
    image: "assets/white-macrame-set.jpg", secondary: "assets/rose-knot-thread.jpg",
    en: { family: "Macramé details", title: "The ivory knot collection", intro: "Coordinated ivory straps and a tasselled charm that let the structure of each repeated knot take centre stage.", materials: "Ivory cord, wooden rings, wooden bead, metal clip and tassels", character: "Calm, textural and quietly detailed", storyTitle: "When one colour reveals every knot.", story: "A restrained ivory palette draws attention to technique: the density of each knot, the spaces between them and the movement of the tassels. Rings and clips give the samples practical possibilities." },
    hi: { family: "मैक्रामे की बारीकियाँ", title: "सफेद मैक्रामे संग्रह", intro: "एक-दूसरे से मेल खाते सफेद स्ट्रैप और लटकन, जिनमें हर दोहराई गई गाँठ की बनावट साफ़ दिखाई देती है।", materials: "सफेद डोरी, लकड़ी के छल्ले और मोती, धातु की क्लिप और लटकन", character: "शांत, बनावटभरा और बारीकियों से सुंदर", storyTitle: "एक ही रंग में हर गाँठ स्पष्ट दिखती है।", story: "सफेद रंग का संयम तकनीक पर ध्यान खींचता है—हर गाँठ का कसाव, उनके बीच की जगह और लटकनों की हलचल। छल्ले और क्लिप इन नमूनों को उपयोगी संभावनाएँ देते हैं।" }
  },
  "yellow-doll": {
    image: "assets/yellow-knot-doll.jpg", secondary: "assets/knot-doll-family.jpg",
    en: { family: "Characters & charms", title: "The sunshine knot doll", intro: "A bright yellow character with a painted wooden face, white cord details and a useful clip.", materials: "Yellow and white cord, painted wooden bead and metal clip", character: "Sunny, light-hearted and full of movement", storyTitle: "A tiny character with an unmistakable mood.", story: "Yellow cord loops into arms, body and legs around a small wooden face. The long loose ends create movement, giving this simple handmade character a dancing quality." },
    hi: { family: "गुड़ियाँ और आकर्षक लटकन", title: "धूप-सी पीली गाँठ-गुड़िया", intro: "चमकीले पीले रंग की गुड़िया—हाथ से बने लकड़ी के चेहरे, सफेद डोरी की बारीकियों और उपयोगी क्लिप के साथ।", materials: "पीली और सफेद डोरी, हाथ से रंगा लकड़ी का मोती और धातु की क्लिप", character: "धूप-सी उजली, हल्की-फुल्की और चंचल", storyTitle: "नन्ही-सी गुड़िया, अपना साफ़ मिज़ाज।", story: "पीली डोरी एक छोटे लकड़ी के चेहरे के चारों ओर हाथ, शरीर और पैर का आकार लेती है। खुली लंबी डोरियाँ इसमें गति भरती हैं, मानो यह सरल-सी गुड़िया नाच रही हो।" }
  }
};

const copy = {
  en: {
    brand: "Made with patient hands", back: "All creations", materialsLabel: "What you can see", characterLabel: "The feeling", availabilityLabel: "Availability", availability: "Confirmed personally after an enquiry",
    ask: "Ask about this creation", share: "Share this page", storyEyebrow: "The making story", realTitle: "Real work", realBody: "Shown through Rajni ji’s own craft photograph.",
    humanTitle: "Human reply", humanBody: "No automated promise about price, timing or recreation.", personalTitle: "Personal possibility", personalBody: "Colour or use ideas can begin a conversation.",
    next: "Continue discovering Rajni ji’s work", browse: "Browse all creations", formEyebrow: "A thoughtful beginning", formTitle: "Ask about this creation",
    formIntro: "Prepare a message, then copy or share it. Your details are not stored here.", name: "Your name", city: "Your city", message: "Your question or idea",
    consent: "I understand that possibility, price and timing are confirmed personally.", copy: "Copy enquiry", shareMessage: "Share message", copied: "The enquiry is copied and ready to paste.", pageCopied: "The page link is copied."
  },
  hi: {
    brand: "धैर्य और स्नेह से निर्मित", back: "सभी रचनाएँ", materialsLabel: "जो दिखाई देता है", characterLabel: "इसका एहसास", availabilityLabel: "उपलब्धता", availability: "संदेश के बाद व्यक्तिगत रूप से पुष्टि",
    ask: "इस रचना के बारे में पूछें", share: "यह पन्ना साझा करें", storyEyebrow: "बनने की कहानी", realTitle: "वास्तविक काम", realBody: "राजनी जी की अपनी हस्तकला की तस्वीर में दर्ज।",
    humanTitle: "अपनों का उत्तर", humanBody: "मूल्य, समय या दोबारा बनाने का कोई स्वचालित वादा नहीं।", personalTitle: "आपकी अपनी संभावना", personalBody: "रंग या उपयोग का विचार बातचीत की शुरुआत बन सकता है।",
    next: "राजनी जी की और रचनाएँ देखिए", browse: "सभी रचनाएँ देखें", formEyebrow: "एक आत्मीय शुरुआत", formTitle: "इस रचना के बारे में पूछें",
    formIntro: "संदेश तैयार करें, फिर उसे कॉपी या साझा करें। आपकी जानकारी यहाँ सहेजी नहीं जाती।", name: "आपका नाम", city: "आपका शहर", message: "आपका प्रश्न या विचार",
    consent: "मैं समझता/समझती हूँ कि संभावना, मूल्य और समय की पुष्टि व्यक्तिगत रूप से होगी।", copy: "संदेश कॉपी करें", shareMessage: "संदेश साझा करें", copied: "संदेश कॉपी हो गया है और पेस्ट करने के लिए तैयार है।", pageCopied: "पन्ने का लिंक कॉपी हो गया है।"
  }
};

const params = new URLSearchParams(location.search);
const pieceKey = pieces[params.get("piece")] ? params.get("piece") : "knot-dolls";
const piece = pieces[pieceKey];
let language = localStorage.getItem("rajni-language") === "hi" ? "hi" : "en";
const body = document.body;

function applyLanguage(next) {
  language = next;
  body.dataset.lang = language;
  document.documentElement.lang = language;
  const text = piece[language];
  document.querySelector("[data-piece-family]").textContent = text.family;
  document.querySelector("[data-piece-title]").textContent = text.title;
  document.querySelector("[data-piece-intro]").textContent = text.intro;
  document.querySelector("[data-piece-materials]").textContent = text.materials;
  document.querySelector("[data-piece-character]").textContent = text.character;
  document.querySelector("[data-piece-story-title]").textContent = text.storyTitle;
  document.querySelector("[data-piece-story]").textContent = text.story;
  document.querySelectorAll("[data-copy]").forEach((element) => { element.textContent = copy[language][element.dataset.copy]; });
  document.querySelector("[data-lang-label]").textContent = language === "en" ? "हिंदी" : "English";
  document.querySelector("[data-piece-image]").alt = text.title;
  document.querySelector("[data-piece-secondary]").alt = text.title;
  document.title = `${text.title} — Rajni Garg`;
  document.querySelector('meta[property="og:title"]').content = `${text.title} — Rajni Garg`;
  localStorage.setItem("rajni-language", language);
}

document.querySelector("[data-piece-image]").src = piece.image;
document.querySelector("[data-piece-secondary]").src = piece.secondary;
document.querySelector('meta[property="og:image"]').content = new URL(piece.image, location.href).href;
applyLanguage(language);
document.querySelector("[data-language]").addEventListener("click", () => applyLanguage(language === "en" ? "hi" : "en"));

const status = document.querySelector("[data-status]");
document.querySelector("[data-share]").addEventListener("click", async () => {
  const data = { title: document.title, text: piece[language].intro, url: location.href };
  if (navigator.share) {
    try { await navigator.share(data); return; } catch (error) { if (error.name === "AbortError") return; }
  }
  await navigator.clipboard.writeText(location.href);
  status.textContent = copy[language].pageCopied;
});

const dialog = document.querySelector("[data-enquiry-dialog]");
const form = document.querySelector("[data-enquiry-form]");
const formStatus = document.querySelector("[data-form-status]");
document.querySelector("[data-enquire]").addEventListener("click", () => { dialog.showModal(); body.classList.add("modal-open"); });
document.querySelector("[data-enquiry-close]").addEventListener("click", () => { dialog.close(); body.classList.remove("modal-open"); });
dialog.addEventListener("click", (event) => { if (event.target === dialog) { dialog.close(); body.classList.remove("modal-open"); } });

function message() {
  const data = new FormData(form);
  return language === "hi"
    ? `नमस्ते 🙏 मेरा नाम ${data.get("name")} है।\n${data.get("city") ? `मैं ${data.get("city")} से लिख रहा/रही हूँ।\n` : ""}मुझे “${piece.hi.title}” के बारे में जानना है।\nमेरा संदेश: ${data.get("message")}\n\nमैं समझता/समझती हूँ कि संभावना, मूल्य और समय की पुष्टि राजनी जी या उनका परिवार व्यक्तिगत रूप से करेगा।`
    : `Namaste 🙏 My name is ${data.get("name")}.\n${data.get("city") ? `I am writing from ${data.get("city")}.\n` : ""}I would like to ask about “${piece.en.title}”.\nMy message: ${data.get("message")}\n\nI understand that Rajni ji or her family will personally confirm possibility, price and timing.`;
}

async function copyMessage(text) {
  await navigator.clipboard.writeText(text);
  formStatus.textContent = copy[language].copied;
}

form.addEventListener("submit", async (event) => { event.preventDefault(); await copyMessage(message()); });
document.querySelector("[data-share-enquiry]").addEventListener("click", async () => {
  if (!form.reportValidity()) return;
  const text = message();
  if (navigator.share) {
    try { await navigator.share({ title: piece[language].title, text }); return; } catch (error) { if (error.name === "AbortError") return; }
  }
  await copyMessage(text);
});
