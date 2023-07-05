const languageButtonES = document.querySelector("#languageButtonES");
const languageButtonEN = document.querySelector("#languageButtonEN");

if (languageButtonES) {
  languageButtonES.addEventListener(
    "click",
    () => (window.location.href = "./English.html")
  );
}

if (languageButtonEN) {
  languageButtonEN.addEventListener(
    "click",
    () => (window.location.href = "./")
  );
}
