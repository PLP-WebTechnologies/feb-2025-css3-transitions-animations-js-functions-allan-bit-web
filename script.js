document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("animateBtn");
    const themeSelect = document.getElementById("themeSelect");
    const body = document.body;
  
    // Load saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.className = savedTheme;
      themeSelect.value = savedTheme;
    }
  
    // Save new theme on change
    themeSelect.addEventListener("change", () => {
      const selectedTheme = themeSelect.value;
      body.className = selectedTheme;
      localStorage.setItem("theme", selectedTheme);
    });
  
    // Add animation on button click
    button.addEventListener("click", () => {
      button.classList.add("animate");
  
      // Remove the animation class after it completes
      setTimeout(() => {
        button.classList.remove("animate");
      }, 1000);
    });
  });
  