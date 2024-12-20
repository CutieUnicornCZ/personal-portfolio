const menuButtonClose = document.getElementById("btnMenuClose");
const navMenu = document.getElementById("navMenu");
const menuButtonOpen = document.getElementById("btnMenuOpen");

menuButtonClose.addEventListener("click", () => {
  navMenu.classList.remove("flex");
  navMenu.classList.add("hidden");
  menuButtonOpen.classList.remove("hidden");
  menuButtonOpen.classList.add("block");
});

menuButtonOpen.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
  navMenu.classList.add("flex");
  menuButtonOpen.classList.add("hidden");
});
