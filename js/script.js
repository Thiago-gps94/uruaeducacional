const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu-list");
const form = document.getElementById("form-contato");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");

    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
  });
}

if (form) {
  form.addEventListener("submit", () => {
    alert("Sua mensagem está sendo enviada.");
  });
}