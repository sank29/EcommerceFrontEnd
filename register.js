let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let url = "http://localhost:8888/registerCustomer";

  console.log("Hii");

  let mobileNumber = document.getElementById("mobileNumber").value;

  let password = document.getElementById("password").value;

  let customerDetails = { mobileNo: mobileNumber, password };

  let data = fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(response),
  });
});
