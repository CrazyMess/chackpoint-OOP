//total price function
function updateTotal() {
  let totalPrice = 0;

  const products = [
    { price: 100, quantity: countQte1 }, // Baskets
    { price: 20, quantity: countQte2 }, // Socks
    { price: 50, quantity: countQte3 }, // Bag
  ];

  products.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });

  document.getElementById("total").textContent = totalPrice + " $";
}

//product 1 quantity + and -
let Qte1 = document.getElementById("Qte1");
let countQte1 = 1;

document.getElementById("add1").addEventListener("click", function () {
  countQte1++;
  Qte1.textContent = countQte1;
  updateTotal();
});
document.getElementById("sub1").addEventListener("click", function () {
  if (countQte1 > 1) {
    countQte1--;
  }
  Qte1.textContent = countQte1;
  updateTotal();
});

//product 2 quantity + and -
let Qte2 = document.getElementById("Qte2");
let countQte2 = 1;

document.getElementById("add2").addEventListener("click", function () {
  countQte2++;
  Qte2.textContent = countQte2;
  updateTotal();
});
document.getElementById("sub2").addEventListener("click", function () {
  if (countQte2 > 1) {
    countQte2--;
  }
  Qte2.textContent = countQte2;
  updateTotal();
});

//product 3 quantity + and -
let Qte3 = document.getElementById("Qte3");
let countQte3 = 1;

document.getElementById("add3").addEventListener("click", function () {
  countQte3++;
  Qte3.textContent = countQte3;
  updateTotal();
});
document.getElementById("sub3").addEventListener("click", function () {
  if (countQte3 > 1) {
    countQte3--;
  }
  Qte3.textContent = countQte3;
  updateTotal();
});

//delete products
const trashIcons = document.querySelectorAll(".fa-trash-alt");

trashIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    this.closest(".card").remove();
  });
});

//like items
const heartIcons = document.querySelectorAll(".fa-heart");

heartIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    if (this.style.color === "red") {
      this.style.color = "black";
    } else {
      this.style.color = "red";
    }
  });
});

updateTotal();
