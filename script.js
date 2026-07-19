const number = document.querySelectorAll(".number");
const display = document.getElementById("display");
const buttonFunc = document.querySelectorAll(".button__func__calculate");
const equals = document.getElementById("equals");
const history = document.getElementById("history");

let array = [];
let num = "";
let symbol = "";
let result = "";

number.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    if (symbol != "") {
      array.push(symbol);
      symbol = "";
    }
    num += element.textContent;
    display.innerText = num;
  });
});

buttonFunc.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    array.push(Number(num));
    symbol = element.textContent;
    display.innerText = symbol;
    num = "";
  });
});

equals.addEventListener("click", (event) => {
  event.preventDefault;
  array.push(Number(num));
  num = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      array.splice(i, 1);
      i = 0;
    } else {
      continue;
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (i < 2) {
      if (Number.isFinite(array[i])) {
        if (array[1] === "+") {
          result = array[0] + array[2];
        } else if (array[1] === "-") {
          result = array[0] - array[2];
        } else if (array[1] === "*") {
          result = array[0] * array[2];
        } else if (array[1] === "/") {
          result = array[0] / array[2];
        }
      }
    } else {
      if (Number.isFinite(array[i]) && i > 2) {
        if (array[i - 1] === "+") {
          result = Number(result) + array[i];
        } else if (array[i - 1] === "-") {
          result = Number(result) - array[i];
        } else if (array[i - 1] === "*") {
          result = Number(result) * array[i];
        } else if (array[i - 1] === "/") {
          result = Number(result) / array[i];
        }
      } else {
        continue;
      }
    }
  }
  display.innerText = Number(result);
  history.innerText = array.join(" ");
  array.length = 0;
  array.push(Number(result));
});
