function calculateSimpleInterest(principal, startDateStr, endDateStr = null) {
    const startDate = new Date(startDateStr);
    const endDate = endDateStr ? new Date(endDateStr) : new Date();

    if (isNaN(principal) || isNaN(startDate)) {
        return "Invalid principal or start date.";
    }

    const msPerDay = 1000 * 60 * 60 * 24;
    const durationDays = Math.floor((endDate - startDate) / msPerDay);
    const durationYears = durationDays / 365;

    const interestRate = 0.02; // 2% per annum
    const interest = principal * interestRate * durationYears;

    return `Simple interest on ₹${principal.toFixed(2)} from ${startDate.toDateString()} to ${endDate.toDateString()} at 2% per annum is ₹${interest.toFixed(2)}.`;
}

function calculateInterest() {
    const principal = parseFloat(document.getElementById("principal").value);
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    const result = calculateSimpleInterest(principal, startDate, endDate);
    document.getElementById("result").innerText = result;
}
