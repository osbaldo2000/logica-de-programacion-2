let celsiusIngresados = [];

let celsius = parseFloat(prompt("Ingresa un numero en grados Celsius: "));
celsiusIngresados.push(celsius);

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusAKelvin(celsius) {
    return celsius + 273.15;
}

let fahrenheit = celsiusAFahrenheit(celsius);
let kelvin = celsiusAKelvin(celsius);

console.log(`los grados Celsius ingresados ${celsius} °C, Convertidos a Kelvin ${kelvin}°K y Fahrenheit ${fahrenheit}°F`);
