let visualizerState = false;

const stackChange = (stack) => {
  const selections = document.querySelectorAll(".selection");
  const frontEndStack = document.getElementById("FrontEndStack");
  const backEndStack = document.getElementById("BackEndStack");
  const otherStack = document.getElementById("OtherStack");

  if (stack === "frontend") {
    selections[1].classList.remove("Selected");
    selections[2].classList.remove("Selected");
    selections[0].classList.add("Selected");
    frontEndStack.style.display = "flex";
    backEndStack.style.display = "none";
    otherStack.style.display = "none";
  } else if (stack === "backend") {
    selections[0].classList.remove("Selected");
    selections[2].classList.remove("Selected");
    selections[1].classList.add("Selected");
    frontEndStack.style.display = "none";
    backEndStack.style.display = "flex";
    otherStack.style.display = "none";
  } else if (stack === "other") {
    selections[0].classList.remove("Selected");
    selections[1].classList.remove("Selected");
    selections[2].classList.add("Selected");
    frontEndStack.style.display = "none";
    backEndStack.style.display = "none";
    otherStack.style.display = "flex";
  }
};

const navBar = () => {
  const navigation = document.querySelector(".Navigation");
  const lines = document.querySelectorAll(".MenuLine");

  if (!navigation.classList.contains("NavbarIntro")) {
    navigation.classList.add("NavbarIntro");
    navigation.classList.remove("NavbarOutro");
    lines[0].classList.add("OpenTop");
    lines[1].classList.add("OpenMid");
    lines[2].classList.add("OpenBottom");
    lines[0].classList.remove("CloseTop");
    lines[1].classList.remove("CloseMid");
    lines[2].classList.remove("CloseBottom");
  } else if (navigation.classList.contains("NavbarIntro")) {
    navigation.classList.add("NavbarOutro");
    navigation.classList.remove("NavbarIntro");
    lines[0].classList.add("CloseTop");
    lines[1].classList.add("CloseMid");
    lines[2].classList.add("CloseBottom");
    lines[0].classList.remove("OpenTop");
    lines[1].classList.remove("OpenMid");
    lines[2].classList.remove("OpenBottom");

    setTimeout(() => {
      navigation.classList.remove("NavbarOutro");
    }, 600);
  }
};

const changeTheme = () => {
  const body = document.querySelector("body");

  if (body.classList.contains("Dark")) {
    body.classList.add("Light");
    body.classList.remove("Dark");
  } else if (body.classList.contains("Light")) {
    body.classList.add("Dark");
    body.classList.remove("Light");
  }
};

const changeLanguage = (url) => {
  window.location.href = url;
};

const curriculumVisualizer = () => {
  const cvVisualizer = document.querySelector(".curriculumVisualizer");

  if (visualizerState === false) {
    cvVisualizer.style.display = "flex";
    setTimeout(() => {
      cvVisualizer.style.opacity = 1;
    }, 50);
    visualizerState = !visualizerState;
  } else {
    cvVisualizer.style.opacity = 0;

    setTimeout(() => {
      cvVisualizer.style.display = "none";
    }, 450);

    visualizerState = !visualizerState;
  }
};

const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", (e) => {
  event.preventDefault();

  const mailTo = document.querySelector("#mailTo");

  const data = new FormData(e.target);

  const subject = `${data.get("name")} / ${data.get("email")} / ${data.get(
    "subject"
  )}`;

  mailTo.setAttribute(
    "href",
    `mailto:Gregory10183@gmail.com?subject=${subject}&body=${data.get(
      "message"
    )}`
  );

  mailTo.click();

  e.target.reset();
});
