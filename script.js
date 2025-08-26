function calculateInterest() {
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);
  const principal = parseFloat(document.getElementById("amount").value);

  if (isNaN(startDate) || isNaN(endDate) || isNaN(principal)) {
    alert("Please enter all fields correctly!");
    return;
  }

  // Calculate months & days
  let totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  let dayDiff = endDate.getDate() - startDate.getDate();
  if (dayDiff < 0) {
    totalMonths -= 1;
    const prevMonthDays = new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
    dayDiff = prevMonthDays + dayDiff;
  }

  // Apply rules
  let displayDays = dayDiff;
  if (dayDiff <= 5) {
    dayDiff = 0;
  } else if (dayDiff > 5 && dayDiff <= 17) {
    dayDiff = 15;
  } else if (dayDiff > 17) {
    totalMonths += 1;
    dayDiff = 0;
    displayDays = 0;
  }

  // Convert 15 days = half month
  let effectiveMonths = totalMonths + (dayDiff === 15 ? 0.5 : 0);

  // Interest rates
  const interest1 = (principal * 0.015 * effectiveMonths).toFixed(2);
  const interest2 = (principal * 0.02 * effectiveMonths).toFixed(2);

  const total1 = (principal + parseFloat(interest1)).toFixed(2);
  const total2 = (principal + parseFloat(interest2)).toFixed(2);

  document.getElementById("output").innerHTML = `
    <div class="result">
      <p><strong>Duration:</strong> ${totalMonths} month(s) ${displayDays > 0 ? displayDays + " day(s)" : ""}</p>
      <p><strong>Interest @1.5%:</strong> ₹${interest1} → Total: ₹${total1}</p>
      <p><strong>Interest @2%:</strong> ₹${interest2} → Total: ₹${total2}</p>
    </div>;
}
