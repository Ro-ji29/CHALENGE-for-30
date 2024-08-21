// ⬇️ DOMContentLoadedévénement est déclenché lorsque le document HTML a été entièrement analysé
document.addEventListener("DOMContentLoaded", () => {
  const touches = document.querySelectorAll("[data-value]");
  const ecran = document.getElementById("display");

  //🔻 parcours toutes la nodeListe 🔻 🖱️click 🖱️
  touches.forEach((button) => {
    button.addEventListener("click", () => {
      //🔻 recupert les valeur  🔻
      const value = button.getAttribute("data-value");

      if (value === "C") {
        ecran.value = "";
      } else if (value === "=") {
        try {
          ecran.value = eval(ecran.value);
        } catch (error) {
          ecran.value = "Error";
        }
      } else {
        ecran.value += value;
      }
    });
  });

  // ⌨️keydown⌨️ ⌨️
  document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (/[0-9+\-*/.]/.test(key)) {
      ecran.value += key;
    } else if (key === "Enter") {
      try {
        ecran.value = eval(ecran.value);
      } catch (e) {
        ecran.value = "Error";
      }
    } else if (key === "Backspace") {
      ecran.value = ecran.value.slice(0, -1);
    } else if (key === "Escape") {
      ecran.value = "";
    }
  });
});
