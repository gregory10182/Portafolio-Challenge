let englishText = false;

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

const changeLanguage = () => {
  englishText = !englishText;

  const greeting = document.querySelector("#Greeting");
  const career = document.querySelector(".Career");
  const summary = document.querySelector("#Summary");
  const aboutMeTitle = document.querySelector("#aboutMeTitle");
  const aboutMePart1 = document.querySelector("#aboutMePart1");
  const aboutMePart2 = document.querySelector("#aboutMePart2");
  const aboutMeButton = document.querySelector(".CV");
  const techStackTitle = document.querySelector("#TechStackTitle");
  const techStackOther = document.querySelector("#other");
  const projectsTitle = document.querySelector("#ProjectsTitle");
  const pokedexSummary = document.querySelector("#pokedexSummary");
  const recetarioTitle = document.querySelector("#recetarioTitle");
  const recetarioSummary = document.querySelector("#recetarioSummary");
  const seguimientoTitle = document.querySelector("#seguimientoTitle");
  const seguimientoSummary = document.querySelector("#seguimientoSummary");

  greeting.innerHTML =
    englishText === true ? "Hi, my name is" : "Hola, mi nombre es";
  career.innerHTML =
    englishText === true ? "Software Engineer" : "Ingeniero de Software";
  summary.innerHTML =
    englishText === true
      ? "Recently graduated from the Universidad Politécnico Grancolombiano, I specialize in web frontend programming with backend knowledge. Eager to apply my skills and knowledge in challenging and exciting projects."
      : "Recien egresado de la Universidad Politécnico Grancolombiano, me especializo en programación web frontend con conocimientos de backend. Ansioso por aplicar mis habilidades y conocimientos en proyectos desafiantes y emocionantes.";
  aboutMeTitle.innerHTML = englishText === true ? "About me" : "Acerca de Mi";
  aboutMePart1.innerHTML =
    englishText === true
      ? "I am a web development enthusiast with a desire to learn and improve my skills. I studied software engineering at the Universidad Politécnico Grancolombiano and since then I have been exploring the different tools and languages that are used to create attractive and functional websites. Some of the ones I have used are HTML, CSS, JavaScript and React for the frontend, and node.js, python, mongodb and sql for the backend. I also have knowledge of the internet of things and 3D printing, and I master Linux and Windows as operating systems."
      : "Soy un entusiasta del desarrollo web con ganas de aprender y mejorar mis habilidades. Estudié ingenieria de software en la Universidad Politécnico Grancolombiano y desde entonces he estado explorando las diferentes herramientas y lenguajes que se usan para crear sitios web atractivos y funcionales. Algunos de los que he usado son HTML, CSS, JavaScript y React para el frontend, y node.js, python, mongodb y sql para el backend. También tengo conocimientos en internet de las cosas e impresión 3D, y domino Linux y Windows como sistemas operativos.";
  aboutMePart2.innerHTML =
    englishText === true
      ? "In addition to my academic training, I have participated in training programs such as the Microsoft LaunchX Latam bootcamp and the Oracle ONE program from Oracle. I have also taken technology courses at Platzi to expand my knowledge. In my free time, I enjoy soccer, motor racing, cooking and video games."
      : "Además de mi formación académica, he participado en programas de capacitación como el bootcamp de Microsoft LaunchX Latam y actualmente el programa Oracle ONE de Oracle. También he tomado cursos de tecnología en Platzi para ampliar mis conocimientos. En mi tiempo libre, disfruto del fútbol, el automovilismo, la cocina y los videojuegos.";
  aboutMeButton.innerHTML =
    englishText === true ? "Download CV" : "Descargar CV";
  techStackTitle.innerHTML =
    englishText === true ? "Technologies" : "Tecnologias";
  techStackOther.innerHTML = englishText === true ? "Others" : "Otros";
  projectsTitle.innerHTML = englishText === true ? "Projects" : "Proyectos";
  pokedexSummary.innerHTML =
    englishText === true
      ? "Activity of the BootCamp LaunchX latam of Innovaccion and Microsoft, I completed a project that simulates a gadget from the famous Pokemon series that store information about the Pokemons."
      : "Actividad del BootCamp LaunchX latam de Innovaccion y Microsoft, completé un proyecto que simula un artilugio de la famosa serie Pokemon que guarda información sobre los Pokemones.";
  recetarioTitle.innerHTML =
    englishText === true ? "Digital Recipe Book" : "Recetario Digital";
  recetarioSummary.innerHTML =
    englishText === true
      ? "I developed a digital recipe book to help me organize and adjust my cooking and baking recipes. The recipe book has an intuitive interface and useful features such as automatic ingredient adjustment."
      : "Desarrollé un recetario digital para ayudarme a organizar y ajustar mis recetas de cocina y panadería. El recetario cuenta con una interfaz intuitiva y funciones útiles como el ajuste automático de ingredientes.";
  seguimientoTitle.innerHTML =
    englishText === true ? "Sales Tracking" : "Seguimiento de venta";
  seguimientoSummary.innerHTML =
    englishText === true
      ? "I am currently developing a web application for the daily sales tracking of a commercial store. The application allows to monitor data such as the monthly goal, the daily sale and the progress towards the achievement of the goal."
      : "Actualmente estoy desarrollando de una aplicación web para el seguimiento de ventas diarias de un local comercial. La aplicación permite monitorear datos como la meta del mes, la venta del día y el progreso hacia el cumplimiento de la meta.";
};
