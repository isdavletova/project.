document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("mortgage-form");
    const amountInput = document.getElementById("amount");
    const termInput = document.getElementById("term");
    const rateInput = document.getElementById("rate");
    const repaymentType = document.querySelectorAll("input[name='mortgage-type']");
    const monthlyRepayment = document.getElementById("monthly-repayment");
    const totalRepayment = document.getElementById("total-repayment");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const principal = parseFloat(amountInput.value);
        const years = parseFloat(termInput.value);
        const interestRate = parseFloat(rateInput.value) / 100 / 12;
        const totalPayments = years * 12;
        let repayment;
        
        if (repaymentType[0].checked) { // Repayment type
            repayment = (principal * interestRate) / (1 - Math.pow(1 + interestRate, -totalPayments));
        } else { // Interest Only
            repayment = principal * (parseFloat(rateInput.value) / 100) / 12;
        }
        
        monthlyRepayment.textContent = `\u00A3${repayment.toFixed(2)}`;
        totalRepayment.textContent = `\u00A3${(repayment * totalPayments).toFixed(2)}`;
    });
});