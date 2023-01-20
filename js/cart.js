let home = document.getElementById("pills-home-tab");
let login = document.getElementById("pills-login-tab");

////////////////////////////////check user is login or not/////////////////
let uuid = localStorage.getItem("uuidkey");

let loginORNot = async () => {
  let url = `http://localhost:8888/checkLogin/${uuid}`;

  let loginOrNot = await fetch(url);

  let data = await loginOrNot.json();

  console.log();

  if (!data.loginOrNot) {
    alert("Please login before accessing this page!!!!");

    window.location.href = "../index.html";
  }
};

loginORNot();

///////////////////////////////////////end of check user is login or not //////////////////

home.addEventListener("click", (event) => {
  window.location.href = "../allProduct.html";
});

login.addEventListener("click", (event) => {
  window.location.href = "../index.html";
});
