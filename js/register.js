let form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  let url = "http://localhost:8888/registerCustomer";

  let name = document.getElementById("name").value;

  let mobileNumber = document.getElementById("mobileNumber").value;

  let password = document.getElementById("password").value;

  let email = document.getElementById("email").value;

  let customerDetails = {
    name: name,
    mobileNo: mobileNumber,
    password,
    email: email,
  };

  // let data = await fetch(url, {
  //   method: "POST",

  //   headers: {
  //     "Content-Type": "application/json",
  //   },

  //   body: JSON.stringify(customerDetails),
  // });

  let data1 = await data.json();

  if (!data1.errorMsg) {
    alert(
      "You have succefully register in our database. You are redirecting towards login page"
    );

    window.location.href = "../index.html";
  } else {
    alert(data1.errorMsg + ". Please login.");
  }
});
