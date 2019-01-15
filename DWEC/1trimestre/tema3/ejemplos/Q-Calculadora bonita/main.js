var calculator = document.getElementById('calculator');
var output = document.getElementById('calculator-output');

calculator.addEventListener('click', calculatorClick);

function calculatorClick(event) {
  var target = event.target;
  var dataset = target.dataset;
  var value = dataset.value;
  var type = dataset.type;

  if (type) {
    console.log(dataset);
    if (type === "number") {
      output.innerHTML = value;
    }
  }
}