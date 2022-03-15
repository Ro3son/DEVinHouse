//S03EX01

function celsiusToFahrenheit(celsius) {
    celsius = (celsius * 9) / 5 + 32;
    console.log(`${celsius}°F`);
}
celsiusToFahrenheit(77); // 170.6°F

function fahrenheitToCelsius(fahrenheit) {
    fahrenheit = (fahrenheit - 32) * (5 / 9);
    console.log(`${fahrenheit}°C`);
}
fahrenheitToCelsius(77); // 25°
