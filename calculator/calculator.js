window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let values = { amount: 10000, years: 10, rate: 4.5};
  let amountVis = document.getElementById("loan-amount");
  amountVis.value = values.amount;
  let yearsVis = document.getElementById("loan-years");
  yearsVis.value = values.years;
  let rateVis = document.getElementById("loan-rate");
  rateVis.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthRate = (values.rate / 100) / 12;
  let n = Math.floor(values.years * 12);
  return(
    (monthRate * values.amount) /
    (1- Math.pow((1+monthRate), -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthVis = document.getElementById("monthly-payment");
  monthVis.innerText = `$${monthly}`;
}
