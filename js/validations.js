const inputs = document.querySelectorAll(".inputV");
const sendMessage = document.querySelector(".sendMessage");
const pathname = window.location.pathname;

let inputValidator = {
  Nombre: false,
  Email: false,
  Asunto: false,
  Mensaje: false,
};

const inputValidation = (input) => {
  if (!input.validity.valid) {
    inputValidator[input.placeholder] = false;
    if (input.type !== "email") {
      input.parentElement.classList.add("inputContainerInvalid");
    } else if (input.validity.valueMissing) {
      input.nextElementSibling.nextElementSibling.textContent =
        pathname === "/English.html"
          ? "The email field cannot be empty"
          : "El campo correo no puede estar vacio";
      input.parentElement.classList.add("inputContainerInvalid");
    } else if (input.validity.patternMismatch) {
      input.nextElementSibling.nextElementSibling.textContent =
        pathname === "/English.html"
          ? "The email format isn't valid"
          : "El formato del correo no es valido";
      input.parentElement.classList.add("inputContainerInvalid");
    }
  } else {
    inputValidator[input.placeholder] = true;
    input.parentElement.classList.remove("inputContainerInvalid");
  }
};

inputs.forEach((input) => {
  console.log(window.location.pathname);
  input.addEventListener("input", (input) => {
    inputValidation(input.target);
    let allTrue = Object.keys(inputValidator).every((item) => {
      return inputValidator[item] === true;
    });

    if (allTrue) {
      sendMessage.disabled = false;
    } else {
      sendMessage.disabled = true;
    }
  });
  input.addEventListener("blur", (input) => {
    inputValidation(input.target);
  });
});
