const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

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

  Object.keys(inputValidator).forEach((item) => (inputValidator[item] = false));
  sendMessage.disabled = true;
  e.target.reset();
});
