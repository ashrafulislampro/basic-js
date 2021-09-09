function isPrimeNumber(num) {
          for (var i = 2; i <= num - 1; i++) {
                    if (num % i == 0) {
                              return "Not a Prime Number";
                           
                    }
          }
          return "Your Number is Prime Number";
}
var primeNumber = isPrimeNumber(57);
console.log(primeNumber);



