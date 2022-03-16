//S03EX01

function celsiusToFahrenheit(celsius) {
    celsius = (celsius * 9) / 5 + 32;    // constantes dentro da função
    console.log(`${celsius}°F`);
}
celsiusToFahrenheit(77); // 170.6°F

function fahrenheitToCelsius(fahrenheit) {
    fahrenheit = (fahrenheit - 32) * (5 / 9);
    console.log(`${fahrenheit}°C`);
}
fahrenheitToCelsius(77); // 25°C

// var celsius = 77;
// var toFahrenheit = (celsius * 9) / 5 + 32;  // Constantes fora da função

// function celsiusToFahrenheit() {
//     var resultado = toFahrenheit;
//     console.log(`${resultado}°F`);
// }
// celsiusToFahrenheit();

// var fahrenheit = 77;
// var toCelsius = (fahrenheit - 32) * (5 / 9);

// function fahrenheitToCelsius() {
//     var resultado = toCelsius;
//     console.log(`${resultado}°C`);
// }
// fahrenheitToCelsius();
