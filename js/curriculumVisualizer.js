let visualizerState = false;

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
