let form = document.getElementById("form");
let cart = document.getElementById("pills-profile-tab");
let home = document.getElementById("pills-home-tab");
let contact = document.getElementById("pills-contact-tab");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  let url = "http://localhost:8888/login";

  let mobile = document.getElementById("mobile").value;

  let password = document.getElementById("password").value;

  let customerDetails = {
    mobileNo: mobile,
    password: password,
  };

  let data = await fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(customerDetails),
  });

  let data1 = await data.json();

  let uuidKey = data1.uuid;

  localStorage.setItem("uuidkey", uuidKey);
});

// cart.addEventListener("click", (event) => {
//   console.log("Hii somebody click me");

//   window.location.href = "../cart.html";
// });

home.addEventListener("click", (event) => {
  window.location.href = "../allProduct.html";
});

contact.addEventListener("click", (event) => {
  window.location.href = "../contact.html";
});
