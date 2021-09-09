// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];


function fibonacci(n) {
          var fibo = [0, 1];
          for (var i = 2; i <= n; i++) {
                    fibo[i] = fibo[i - 1] + fibo[i - 2];
                    // console.log(fibo[i], fibo[i-1], fibo[i-2]);
          }
          return fibo;
}
var result = fibonacci(10);
// console.log(result);

function fibonacci(n){
          if(n == 0){
                    return[0];
          }
          else if(n == 1){
                    return[0, 1];
          }
          else{
          //           var fibo = fibonacci(n-1)
          //           var nextElement = fibo[n-1] + fibo[n-2];
          //           fibo.push(nextElement);
          //           return fibo;
                    var fibo = fibonacci(n-1);
                    var nextElement = fibo[n-1] + fibo[n-2];
                    fibo.push(nextElement);
                    return fibo;
          }
}
var result = fibonacci(10);
console.log(result);