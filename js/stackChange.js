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
