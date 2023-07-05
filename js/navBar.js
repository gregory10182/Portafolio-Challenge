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
const menuResponsive = document.querySelector(".MenuResponsive");
menuResponsive.addEventListener("click", () => navBar());
