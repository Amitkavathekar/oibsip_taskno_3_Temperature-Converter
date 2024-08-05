function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temperatureInput)) {
        resultDiv.innerHTML = 'Please enter a valid number !!';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let result;

    if (unit === 'Celsius') {
        result = `${(temperature * 9/5 + 32).toFixed(2)} °F (Fahrenheit), ${(temperature + 273.15).toFixed(2)} K (Kelvin)`;
    } else if (unit === 'Fahrenheit') {
        result = `${((temperature - 32) * 5/9).toFixed(2)} °C (Celsius), ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K (Kelvin)`;
    } else if (unit === 'Kelvin') {
        result = `${(temperature - 273.15).toFixed(2)} °C (Celsius), ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F (Fahrenheit)`;
    }

    resultDiv.innerHTML = `Converted Temperature: ${result}`;
}
