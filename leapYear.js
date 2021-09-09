function leapYear(year){
          if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
                    return "This is a leap year.";
          }
                    return "This is not a leap year.";
}
var result = leapYear(366);
console.log(result);
