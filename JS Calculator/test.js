const buttons = document.querySelectorAll(".calc-btn");
const numpad = document.querySelectorAll(".number");
const keypad = document.querySelectorAll(".display");
const operators = document.querySelectorAll(".operator");
let calcScreen = document.getElementById("screen-text");
let history = document.getElementById("eqs");
let resultShown = false;

const calc = [
  function sum(accumulator, element) {
    return accumulator + element;
  },
  function sub(accumulator, element) {
    return accumulator - element;
  },
  function mult(accumulator, element) {
    return accumulator * element;
  },
  function divi(accumulator, element) {
    return accumulator / element;
  },
];

function calculator() {
  const newItem = document.createElement("li");
  let str = calcScreen.innerHTML;
  let operator;
  let nums;
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i]) && str[i] != ".") {
      operator = str[i];
    }
  }
  switch (operator) {
    case "+":
      nums = str.split("+");
      nums = nums.map((number) => Number(number));
      newItem.textContent = nums.join(" + ") + " = " + nums.reduce(calc[0]);
      history.insertBefore(newItem, history.firstChild);
      return nums.reduce(calc[0]);
    case "-":
      nums = str.split("-");
      nums = nums.map((number) => Number(number));
      newItem.textContent = nums.join(" - ") + " = " + nums.reduce(calc[1]);
      history.insertBefore(newItem, history.firstChild);
      return nums.reduce(calc[1]);
    case "*":
      nums = str.split("*");
      nums = nums.map((number) => Number(number));
      res = nums.reduce(calc[2]);
      newItem.textContent = nums.join(" * ") + " = " + res;
      history.insertBefore(newItem, history.firstChild);
      if (isFloat(res)) {
        return res.toFixed(2);
      } else {
        return res;
      }
    case "/":
      nums = str.split("/");
      nums = nums.map((number) => Number(number));
      res = nums.reduce(calc[3]);
      newItem.textContent = nums.join(" / ") + " = " + res;
      history.insertBefore(newItem, history.firstChild);
      if (isFloat(res)) {
        return res.toFixed(2);
      } else {
        return res;
      }
    default:
      return "err";
  }
}
reset();
backspace();
makePercentage();
equals();
posNeg();
//Writes to the calcScreen.innerHTML.
//calcScreen auto resets if there is an error
keypad.forEach((key) => {
  key.addEventListener("click", (event) => {
    if (calcScreen.innerHTML == "err") {
      calcScreen.innerHTML = "";
    }
    calcScreen.innerHTML += event.target.innerText;
  });
});

//Removes the last character displayed in calcScreen
function backspace() {
  document.getElementById("backspace").addEventListener("click", () => {
    calcScreen.innerHTML = calcScreen.innerHTML.slice(0, -1);
  });
}

//Resets the calcScreen
function reset() {
  document.getElementById("CE").addEventListener("click", () => {
    calcScreen.innerHTML = "";
  });
}
//Divides the number on screen to a percentage
function makePercentage() {
  document.getElementById("per").addEventListener("click", () => {
    if (!isNaN(Number(calcScreen.innerHTML))) {
      calcScreen.innerHTML = calcScreen.innerHTML /= 100;
    } else {
      return;
    }
  });
}

function posNeg() {
  document.getElementById("pos-neg").addEventListener("click", () => {
    let str = calcScreen.innerHTML;
    let operator;
    let nums;
    for (let i = 0; i < str.length; i++) {
      if (isNaN(str[i]) && str[i] != ".") {
        operator = str[i];
        break;
      }
    }
    if (operator) {
      nums = calcScreen.innerHTML.split(operator);
      if (!isNaN(Number(nums[-1]))) {
        if (nums[-1] < 0) {
          nums[-1] = Math.abs(nums[-1]);
        } else if (nums[-1] > 0) {
          nums[-1] = -nums[-1];
        }
      }
      calcScreen.innerHTML = nums.join(operator);
    } else {
      if (Number(calcScreen.innerHTML) < 0) {
        calcScreen.innerHTML = Math.abs(Number(calcScreen.innerHTML));
      } else {
        calcScreen.innerHTML = -Number(calcScreen.innerHTML);
      }
    }
  });
}

//Writes the result of the equations into calcScreen
function equals() {
  document.getElementById("equals").addEventListener("click", () => {
    let results = calculator();
    calcScreen.innerHTML = results;
  });
}
//Checks if a number is a float
function isFloat(n) {
  return n === +n && n !== (n | 0);
}
//checks if a number is an integer
function isInteger(n) {
  return n === +n && n === (n | 0);
}
