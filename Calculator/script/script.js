function display(value) {
  let display = document.getElementById("display");
  let currentValue = display.value;

  const lastChar = currentValue.charAt(currentValue.length - 1);
  const operators = ["+", "-", "*", "/", "%", "."];

  if (currentValue === "" && operators.includes(value)) {
    return;
  }

  if (operators.includes(lastChar) && operators.includes(value)) {
    return;
  }

  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let display = document.getElementById("display");
  display.value = eval(display.value);
}
