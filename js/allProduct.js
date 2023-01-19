let uuid = localStorage.getItem("uuidkey");

////////////////////////////////check user is login or not/////////////////

let loginORNot = async () => {
  let url = `http://localhost:8888/checkLogin/${uuid}`;

  let loginOrNot = await fetch(url);

  let data = await loginOrNot.json();

  console.log();

  if (!data.loginOrNot) {
    alert("Please login before accessing this page!!!!");

    window.location.href = "../index.html";
  }

  displayAllProduct();
};

loginORNot();

///////////////////////////////////////end of check user is login or not //////////////////

let allProduct = document.getElementById("allProduct");

let getAllProudct = async () => {
  let url = `http://localhost:8888/products?key=${uuid}`;

  let data = await fetch(url);

  let data1 = await data.json();

  console.log(data1);

  return data1;
};

let displayAllProduct = async () => {
  let productData = await getAllProudct();

  let newDiv = document.createElement("div");

  productData.forEach((eachProuct) => {
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");
    let para3 = document.createElement("p");
    let para4 = document.createElement("p");
    let para5 = document.createElement("p");

    let img = document.createElement("img");
    img.setAttribute("class", "productImg");
    img.style.width = "200px";

    // img.
    img.src = eachProuct.productImg;

    para4.append(img);

    para1.innerText = eachProuct.productName;

    para2.innerText = eachProuct.quantity;

    para3.innerText = eachProuct.type;

    allProduct.append(para4, para1, para2, para3);
  });
};
