import "./components/XInput.js";
import "./components/XIcon.js";
import "./components/XCard.js";
import "./components/XProvinciesCard.js";
import "./ui/faqQuestion.js";
import "./ui/Nav.js";
import "./ui/requestEditItem.js";
import "./ui/suggestionSearch.js";
import "./ui/editPopup.js";
import "./page/home.js";
import "./page/dashboard.js";
import "./page/peta.js";
import "./page/login.js";

const routes = {
  "/": "page-home",
  "/login": "page-login",
  "/dashboard": "page-dashboard",
  "/peta": "page-peta",
};

function router() {
  const main = document.querySelector("#main-content");
  const hash = location.hash.slice(1).toLowerCase() || "/";
  const parts = hash.split("/");

  const base = `/${parts[1] || ""}`; // "/", "/peta", "/login"
  const sub = parts[2] || ""; // "jawa", "sumatra", etc.

  const isPeta = base === "/peta";

  // If page-peta already exists, do NOT reload the component
  if (isPeta) {
    const existing = main.querySelector("page-peta");

    if (existing) {
      existing.setAttribute("data-sub", sub);
      return; // stop here → no fade, no DOM replace
    }
  }

  // Normal page load with fade
  const tag = routes[base] || "page-home";

  main.classList.add("fade");

  setTimeout(() => {
    if (isPeta) {
      main.innerHTML = `<${tag} data-sub="${sub}"></${tag}>`;
    } else {
      main.innerHTML = `<${tag}></${tag}>`;
    }

    setTimeout(() => main.classList.remove("fade"), 300);
  }, 300);
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
