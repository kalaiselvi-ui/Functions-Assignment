function PrintLeapYear(year){
    if(year % 4 == 0 ){
        return "Y"
    }
    else{
        return "N"
    }
}

var year = 2020;

console.log(PrintLeapYear(year), "leap year??")