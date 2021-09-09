function factorial(n) {
          var fact = 1;
          var i = 1;
          while (i <= n) {
                    fact = fact * i;
                    i++;
                    console.log(fact);
                
          }
          return fact;
}
var result = factorial(10);
//  console.log(result);

// 3628800


function factorial(n){
          if(n == 0){
                    return 1;
          }
          else{
                    return n*factorial(n - 1);
          }
};
var result = factorial(1);
console.log(result);

function fibonacci(number){
          if(number <=1){
                    return 1;
          }
          else{
                    return fibonacci(number - 1)+fibonacci(number - 2);
          }
}
var result = fibonacci(5);
console.log(result);