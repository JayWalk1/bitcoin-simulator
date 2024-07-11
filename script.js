const tips = [
    "Bitcoin is a decentralized digital currency.",
    "Bitcoin's value can be very volatile.",
    "Always store your Bitcoin in a secure wallet.",
    "Consider dollar-cost averaging for your investments.",
    "Never invest more than you can afford to lose."
];

function startSimulation() {
    const investmentInput = document.getElementById('investment');
    const investment = parseFloat(investmentInput.value);
    if (isNaN(investment) || investment <= 0) {
        alert('Please enter a valid investment amount.');
        return;
    }

    const initialInvestmentElement = document.getElementById('initial-investment');
    const finalValueElement = document.getElementById('final-value');
    const tipElement = document.getElementById('tip');

    initialInvestmentElement.textContent = `Initial Investment: $${investment.toFixed(2)}`;

    // Simulate market fluctuation (simple random multiplier for demonstration)
    const marketChange = (Math.random() * 0.4) - 0.2; // Random change between -20% to +20%
    const finalValue = investment * (1 + marketChange);

    finalValueElement.textContent = `Final Value: $${finalValue.toFixed(2)}`;

    // Display a random educational tip
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipElement.textContent = randomTip;
}
