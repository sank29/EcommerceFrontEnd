let home = document.getElementById("pills-home-tab");
let login = document.getElementById("pills-login-tab");
let contact = document.getElementById("pills-contact-tab");
let cartProduct = document.getElementById("allProduct");

////////////////////////////////check user is login or not/////////////////
let uuid = localStorage.getItem("uuidkey");

let loginORNot = async () => {
  let url = `http://localhost:8888/checkLogin/${uuid}`;

  let loginOrNot = await fetch(url);

  let data = await loginOrNot.json();

  if (!data.loginOrNot) {
    alert("Please login before accessing this page!!!!");

    window.location.href = "../index.html";
  }

  let allProduct = await getAllProudct();

  if (typeof allProduct === "object") {
    alert("No product to show please keep shopping");
    window.location.href = "../allProduct.html";
  }

  console.log(allProduct);

  allProduct.forEach((eachProduct) => {
    let div = document.createElement("div");
    div.style.border = "1px solid black";
    div.setAttribute("class", "eachDiv");

    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    let para3 = document.createElement("p");
    let para4 = document.createElement("p");

    let cartButton = document.createElement("button");
    cartButton.style.background = "green";
    cartButton.style.color = "white";

    let img = document.createElement("img");
    img.setAttribute("class", "productImg");
    img.style.width = "200px";

    img.src = eachProuct.productImg;

    // para4.append(img);

    para1.innerText = eachProuct.productName;

    para2.innerText = eachProuct.quantity;

    para3.innerText = eachProuct.type;

    cartButton.innerText = "Add To Cart";

    div.append(para4, para1, para2, para3, cartButton);

    cartProduct.append(div);
  });
};

loginORNot();

///////////////////////////////////////end of check user is login or not //////////////////

home.addEventListener("click", (event) => {
  window.location.href = "../allProduct.html";
});

login.addEventListener("click", (event) => {
  window.location.href = "../index.html";
});

contact.addEventListener("click", (event) => {
  window.location.href = "../contact.html";
});

let getAllProudct = async () => {
  let url = `http://localhost:8888/addtocart?key=${uuid}`;

  let product = {};

  let data = await fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(product),
  });

  let data1 = await data.json();

  console.log(data1);

  return data1;
};
