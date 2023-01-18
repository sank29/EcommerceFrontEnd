let uuid = localStorage.getItem("uuidkey");

let getAllProudct = async () => {
  let url = `http://localhost:8888/products?key=${uuid}`;

  let data = await fetch(url);

  let data1 = await data.json();

  console.log(data1);

  return data1;
};

getAllProudct();
