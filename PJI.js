const themeStorageKey = "peace-site-theme";
const savedTheme = localStorage.getItem(themeStorageKey);
let currentTheme = savedTheme === "light" ? "light" : "dark";

function applyTheme(theme) {
  currentTheme = theme;
  document.body.dataset.theme = theme;
  localStorage.setItem(themeStorageKey, theme);

  const nextTheme = theme === "dark" ? "light" : "dark";
  themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
}

const themeToggle = document.createElement("button");
themeToggle.className = "theme-toggle";
themeToggle.type = "button";
const themeIcon = document.createElement("img");
themeIcon.className = "theme-icon";
themeIcon.src = "images/moonsun.png";
themeIcon.alt = "";
themeToggle.append(themeIcon);
themeToggle.addEventListener("click", () => {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});

document.body.dataset.theme = currentTheme;
document.querySelector(".navbar").append(themeToggle);
applyTheme(currentTheme);