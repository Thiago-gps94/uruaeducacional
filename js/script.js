const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu ul");
const form = document.getElementById("form-contato");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

if (form) {
  form.addEventListener("submit", () => {
    alert("Sua mensagem está sendo enviada.");
  });
}