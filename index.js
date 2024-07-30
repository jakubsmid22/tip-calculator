const totalE = document.getElementById("total");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const calcBtn = document.getElementById("calcBtn");

calcBtn.addEventListener("click", () => {
    if (!billInput.value && !tipInput.value) {
        alert("Please enter bill and tip");
        return;
    }

    const bill = parseInt(billInput.value);
    const tip = parseInt(tipInput.value);
    const total = bill + ((bill / 100) * tip);
    totalE.textContent = `$${parseFloat(total.toFixed(2))}`;
});