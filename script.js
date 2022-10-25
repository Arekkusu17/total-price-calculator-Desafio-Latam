const price = document.querySelector("#price").textContent;
const quantity = document.querySelector("#quantity");
const button = document.querySelector("#button");
const chosenColor = document.querySelector("#chosenColor");
const total = document.querySelector("#totalPrice");
const totalQty = document.querySelector("#quantityToBuy");
const circle = document.querySelector("#color-circle");

button.addEventListener("click", () => {
  total.textContent = formatPrice(parseInt(price) * parseInt(quantity.value));
  totalQty.textContent = quantity.value;
  circle.style.display = "inline-block";
  circle.style.backgroundColor = chosenColor.value;
  console.log(price, quantity.value, chosenColor.value);
});

function formatPrice(num) {
  const str = num.toString();
  let newStr = "";
  let count = 0;
  let i = 0;
  while (i < str.length) {
    if (count === 3) {
      newStr = "." + newStr;
      count = 0;
    }
    count++;
    i++;
    newStr = str[str.length - i] + newStr;
  }
  return newStr;
}
