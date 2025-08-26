function calculateInterest() {
  const start = new Date(document.getElementById("start").value);
  const endInput = document.getElementById("end").value;
  const end = endInput ? new Date(endInput) : new Date(); // default today
  const amount = parseFloat(document.getElementById("amount").value);
  const selectedRate = parseFloat(document.getElementById("rate").value);

  if (!start || isNaN(amount)) {
    alert("Please enter valid start date and amount.");
    return;
  }

  // calculate duration
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  let totalMonths = years * 12 + months;

  // apply day rounding rule
  if (days > 17) {
    totalMonths += 1;
  } else if (days > 5) {
    totalMonths += 0.5;
  }

  // Calculate interest + totals
  const interest1 = amount * 0.015 * totalMonths;
  const interest2 = amount * 0.02 * totalMonths;

  const total1 = amount + interest1;
  const total2 = amount + interest2;

  // highlight selected rate
  const highlightStyle = "color: green; font-weight: bold;";

  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <h2>Results</h2>
    <p><strong>Duration:</strong> ${years} years, ${months} months, ${days} days</p>
    <p><strong>Total months (with rounding):</strong> ${totalMonths}</p>
    <p>💰 Interest @ 1.5%: <span style="${selectedRate === 1.5 ? highlightStyle : ""}">₹${interest1.toFixed(2)}</span></p>
    <p>📊 Total @ 1.5%: <span style="${selectedRate === 1.5 ? highlightStyle : ""}">₹${total1.toFixed(2)}</span></p>
    <p>💰 Interest @ 2%: <span style="${selectedRate === 2 ? highlightStyle : ""}">₹${interest2.toFixed(2)}</span></p>
    <p>📊 Total @ 2%: <span style="${selectedRate === 2 ? highlightStyle : ""}">₹${total2.toFixed(2)}</span></p>;
}
