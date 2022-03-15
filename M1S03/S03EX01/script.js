//S03EX01

function ctof(celsius) {
    celsius = (celsius * 9) / 5 + 32;
    console.log(`${celsius}°F`);
}
ctof(0); // 32°F

function ftoc(fahrenheit) {
    fahrenheit = (fahrenheit - 32) * (5 / 9);
    console.log(`${fahrenheit}°C`);
}
ftoc(32); // 0°F
