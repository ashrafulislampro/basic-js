function addNumbers(num1, num2){
          // console.log(arguments[5]);
          var sum = 0;
          for (let i = 0; i < arguments.length; i++) {
                    const num = arguments[i];
                    console.log(num);
                    sum = sum + num;
                    
          }
          return sum;
        
}
var result = addNumbers(13, 3, 45 , 76, 8, 65, 87, 12, 34, 1, 5);
console.log(result);