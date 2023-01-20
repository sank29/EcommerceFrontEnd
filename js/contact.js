let form = document.getElementById("form");
let cart = document.getElementById("pills-profile-tab");
let home = document.getElementById("pills-home-tab");
let login = document.getElementById("pills-login-tab");

cart.addEventListener("click", (event) => {
  console.log("Hii somebody click me");

  window.location.href = "../cart.html";
});

home.addEventListener("click", (event) => {
  window.location.href = "../allProduct.html";
});

login.addEventListener("click", (event) => {
  window.location.href = "../index.html";
});
