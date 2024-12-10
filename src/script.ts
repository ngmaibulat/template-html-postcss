export function themeSwitch() {
  console.log("script.js loaded");
  const doc = document.documentElement;
  const attr = doc.getAttribute("data-theme");

  if (attr === "light") {
    doc.setAttribute("data-theme", "dark");
  } else {
    doc.setAttribute("data-theme", "light");
  }
}

const elem = document.getElementById("theme-switch");

if (elem) {
  elem.addEventListener("click", themeSwitch);
}
