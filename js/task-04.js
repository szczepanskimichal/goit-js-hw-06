const valueElement = document.getElementById("value");
const decrementButton = document.querySelector(
  "button[data-action='decrement']"
);
const incrementButton = document.querySelector(
  "button[data-action='increment']"
);

let counterValue = 0;

function incrementCounter() {
  counterValue++;
  updateView();
}

function decrementCounter() {
  counterValue--;
  updateView();
}

function updateView() {
  valueElement.textContent = counterValue;
}

decrementButton.addEventListener("click", decrementCounter);
incrementButton.addEventListener("click", incrementCounter);

updateView();
