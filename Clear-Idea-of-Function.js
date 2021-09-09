function evenify(num){
       
                    if(num % 2 == 0){
                           result = num;
                    }
                    else{
                             result = num*2;
                    }  
                    
                    return result;          
}


var result2 = evenify(13);
var result = result2*result2;
console.log(result);

function evenify_all(num){
          var even_array = [];
          for (let i = 0; i < num.length; i++) {
                    const element = num[i];
                    var result = evenify(element);
                    even_array.push(result);

          }
          return even_array;
}




var nums = [5, 12, 34, 15, 40, 45, 50, 55, 60];
//  var friends_age = [15, 17, 34, 55, 40, 45, 47,];
var result34 =  evenify_all(nums);
console.log(result34);
