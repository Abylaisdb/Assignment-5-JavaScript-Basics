const hoverBox = document.getElementById("hoverBox");
const originalColor = "#8fa3c7";

hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.backgroundColor = "#e8a317";
  hoverBox.textContent = "Mouse is over!";
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.backgroundColor = originalColor;
  hoverBox.textContent = "Hover over me";
});

const liveInput = document.getElementById("liveInput");
const liveText = document.getElementById("liveText");

liveInput.addEventListener("keyup", function () {
  liveText.textContent = liveInput.value;
});

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const calcResult = document.getElementById("calcResult");

function calculate(operator) {
  if (num1.value === "" || num2.value === "") {
    calcResult.textContent = "Enter both numbers";
    return;
  }

  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  let result;

  switch (operator) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/":
      if (b === 0) {
        calcResult.textContent = "Cannot divide by zero";
        return;
      }
      result = a / b;
      break;
  }
  calcResult.textContent = Math.round(result * 1e10) / 1e10;
}

document.querySelectorAll(".calc-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    calculate(btn.dataset.op);
  });
});
