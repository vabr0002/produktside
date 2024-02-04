const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
  .then((response) => response.json())
  .then(dataReceived);

function dataReceived(data) {
  //We have the data
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log("product");
  const tempalte = document.querySelector("template").content;
  const clone = template.cloneNode(true);
}
