$ (document).ready(function(){

    $('imput[name=Fahrenheit]').on('input', function () {
        var fahrenheit = parseFloat($(this).val());
        var kelvin, celsius;
        kelvin = fahrenheitToKelvin(fahrenheit);
        celsius = fahrenheitToCelsius(fahrenheit);

        $('input[name=Kelvin').val(kelvin);
        $('input[name=Celsius').val(celsius);
    });

    $('input[name=Kelvin]').on('input', function () {
        var kelvin = parseFloat($(this).val());
        var fahrenheit, celsius;
        fahrenheit = kelvinToFahrenheit(kelvin);
        celsius = kelvinToCelsius(kelvin);

        $('input[name=Fahrenheit]').val(fahrenheit);
        $('input[name=Celsius').val(celsius);
    });

    $('input[name=Celsius]').on('input', function (){
        var celsius = parseFloat($(this).val());
        var fahrenheit, kelvin;
        fahrenheit = celsiusToFahrenheit(celsius);
        kelvin = celsiusToKelvin(celsius);

        $('input[name=Fahrenheit').val(fahrenheit);
        $('input[name=Kelvin').val(kelvin);
    });
});

function fahrenheitToKelvin(temperature) {
    var kelvin;
    kelvin = (temperature + 459.67) * 5/9;
    return kelvin;
}

function fahrenheitToCelsius(temperature) {
    var celsius;
    celsius = (temperature - 32) * 5/9;
    return celsius;
}

function kelvinToFahrenheit (temperature) {
    var fahrenheit;
    fahrenheit = temperature * 9 / 5 - 459.67;
    return fahrenheit;
}

function kelvinToCelsius(temperature) {
    var celsius;
    celsius = temperature - 273,15;
    return celsius;
}

function celsiusToFahrenheit(temperature) {
    var fahrenheit;
    fahrenheit = temperature * 9/5 + 32;
    return fahrenheit;
}

function celsiusToKelvin(temperature) {
    var kelvin;
    kelvin = temperature + 273.15;
    return kelvin;
}