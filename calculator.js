document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".button");
  let currentInput = "";
  let prevInput = "";
  let operator = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonValue = button.textContent;

      if (!isNaN(buttonValue) || buttonValue === ".") {
        currentInput += buttonValue;
        display.textContent = currentInput;
      } else if (buttonValue === "C") {
        clearCalculator();
      } else if (buttonValue === "=") {
        performCalculation();
      } else {
        operator = buttonValue;
        prevInput = currentInput;
        currentInput = "";
        display.textContent = `${prevInput} ${operator}`;
      }
    });
  });

  function clearCalculator() {
    currentInput = "";
    prevInput = "";
    operator = "";
    display.textContent = "0";
  }

  function performCalculation() {
    const num1 = parseFloat(prevInput);
    const num2 = parseFloat(currentInput);

    if (operator === "+") {
      currentInput = (num1 + num2).toString();
    } else if (operator === "-") {
      currentInput = (num1 - num2).toString();
    } else if (operator === "*") {
      currentInput = (num1 * num2).toString();
    } else if (operator === "/") {
      currentInput = (num1 / num2).toString();
    }

    display.textContent = currentInput;
    prevInput = "";
    operator = "";
  }
});
