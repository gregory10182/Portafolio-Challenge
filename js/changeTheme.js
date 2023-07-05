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
const changeThemeButton = document.querySelector(".changeTheme");
changeThemeButton.addEventListener("click", () => changeTheme());
