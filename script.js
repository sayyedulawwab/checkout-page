const increaseButton = document.querySelectorAll("#increaseBtn");
const decreaseButton = document.querySelectorAll("#decreaseBtn");
const input = document.querySelectorAll(".input");

for (let i = 0; i < increaseButton.length; i++) {
  increaseButton[i].addEventListener("click", () => {
    if (input[i].value >= 1) {
      input[i].value++;
    }
  });
}

for (let i = 0; i < decreaseButton.length; i++) {
  decreaseButton[i].addEventListener("click", () => {
    if (input[i].value > 1) {
      input[i].value--;
    }
  });
}
