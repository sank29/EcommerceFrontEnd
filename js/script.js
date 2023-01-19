let form = document.getElementById("form");

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

  console.log(data1);

  console.log(uuidKey);

  localStorage.setItem("uuidkey", uuidKey);
});
