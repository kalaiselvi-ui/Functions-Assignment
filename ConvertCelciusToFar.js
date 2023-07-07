//Convert Celcius to Fareheint

function convertCelciusToFar(celcius){
    var F = (celcius * 9/5) + 32;
    return F;
}

var celcius = 12;

var F = convertCelciusToFar(celcius);

console.log("Fahrenheit value is", F);



//Convert Fareheint to Celcius
function convertFarToCelcius(far){
    var celcius1 = (far -32) * 5/9;
    return celcius1;
}

var far = 15;

var celcius1 = convertFarToCelcius(far);

console.log("Fahrenheit value is", celcius1);
