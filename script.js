const convertBtn = document.getElementById('convertBtn');

convertBtn.addEventListener('click', () => {
  const temperatureInput = parseFloat(document.getElementById('temperature').value);
  const originalUnitSelect = document.getElementById('originalUnit');
  const targetUnitSelect = document.getElementById('targetUnit');
  const resultElement = document.getElementById('result');
  
  if (isNaN(temperatureInput)) {
    resultElement.textContent = 'Please enter a valid number';
    return;
  }
  
  const originalUnit = originalUnitSelect.options[originalUnitSelect.selectedIndex].value;
  const targetUnit = targetUnitSelect.options[targetUnitSelect.selectedIndex].value;
  
  let convertedTemperature;
  let convertedUnit;
  
  if (originalUnit === 'celsius' && targetUnit === 'fahrenheit') {
    convertedTemperature = (temperatureInput * 9/5) + 32;
    convertedUnit = 'Fahrenheit';
  } else if (originalUnit === 'fahrenheit' && targetUnit === 'celsius') {
    convertedTemperature = (temperatureInput - 32) * 5/9;
    convertedUnit = 'Celsius';
  } else if (originalUnit === 'celsius' && targetUnit === 'kelvin') {
    convertedTemperature = temperatureInput + 273.15;
    convertedUnit = 'Kelvin';
  } else if (originalUnit === 'fahrenheit' && targetUnit === 'kelvin') {
    convertedTemperature = (temperatureInput + 459.67) * 5/9;
    convertedUnit = 'Kelvin';
  } else if (originalUnit === 'kelvin' && targetUnit === 'celsius') {
    convertedTemperature = temperatureInput - 273.15;
    convertedUnit = 'Celsius';
  } else if (originalUnit === 'kelvin' && targetUnit === 'fahrenheit') {
    convertedTemperature = (temperatureInput * 9/5) - 459.67;
    convertedUnit = 'Fahrenheit';
  } else {
    convertedTemperature = temperatureInput;
    convertedUnit = targetUnit.charAt(0).toUpperCase() + targetUnit.slice(1);
  }
  
  resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
});
