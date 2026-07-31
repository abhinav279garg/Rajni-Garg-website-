const copy = {
  en: {
    brand: "Made with patient hands",
    back: "All creations",
    switchLanguage: "Switch language",
    share: "Share this page",
    pageCopied: "The page link is copied.",
    copyFailed: "Copy the address from your browser to share this page."
  },
  hi: {
    brand: "धैर्य और स्नेह से निर्मित",
    back: "सभी रचनाएँ",
    switchLanguage: "भाषा बदलें",
    share: "यह पन्ना साझा करें",
    pageCopied: "पन्ने का लिंक कॉपी हो गया है।",
    copyFailed: "यह पन्ना साझा करने के लिए ब्राउज़र से इसका पता कॉपी करें।"
  }
};

let language = localStorage.getItem("rajni-language") === "hi" ? "hi" : "en";
const body = document.body;
const status = document.querySelector("[data-status]");

function applyLanguage(next) {
  language = next;
  body.dataset.lang = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-lang-view]").forEach((element) => {
    element.hidden = element.dataset.langView !== language;
  });
  document.querySelectorAll("[data-copy]").forEach((element) => {
    const value = copy[language][element.dataset.copy];
    if (value) element.textContent = value;
  });
  const languageButton = document.querySelector("[data-language]");
  languageButton.setAttribute("aria-label", copy[language].switchLanguage);
  document.querySelector("[data-lang-label]").textContent = language === "en" ? "हिंदी" : "English";
  localStorage.setItem("rajni-language", language);
}

applyLanguage(language);
document.querySelector("[data-language]").addEventListener("click", () => applyLanguage(language === "en" ? "hi" : "en"));

document.querySelector("[data-share]").addEventListener("click", async () => {
  const title = document.querySelector(`[data-page-title][data-lang-view="${language}"]`).textContent;
  const data = { title, url: location.href };
  if (navigator.share) {
    try {
      await navigator.share(data);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  try {
    await navigator.clipboard.writeText(location.href);
    status.textContent = copy[language].pageCopied;
  } catch {
    status.textContent = copy[language].copyFailed;
  }
});
