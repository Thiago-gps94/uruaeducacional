const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu ul");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const form = document.getElementById("form-contato");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
})