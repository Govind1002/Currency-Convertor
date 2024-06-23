// Define the currencies and their corresponding exchange rates to USD
const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    INR: 73.50,
    AUD: 1.35,
    CAD: 1.25,
    // Add more currencies and their exchange rates as needed
};

// Populate the currency select elements
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');

for (const currency in exchangeRates) {
    const option1 = document.createElement('option');
    option1.value = currency;
    option1.textContent = currency;
    
    fromCurrency.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = currency;
    option2.textContent = currency;
    toCurrency.appendChild(option2);
}

// Add event listener to the convert button
document.getElementById('convertBtn').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    const convertedAmount = (amount / exchangeRates[from]) * exchangeRates[to];
    document.getElementById('result').textContent = 
        `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
});
