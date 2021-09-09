// function largestNumber(n) {
//           for (let i = 0; i < n.length; i++) {
//                     var element = n[i];
//                     var larger = n[0];
//                     if (element > larger) {
//                               larger = element;
//                               return larger;
//                     }
                   
//           }
          
// }
// var marks = [45, 67, 78, 98, 76, 54];
// var output = largestNumber(marks);
// console.log('output',output);



function largestNumber(marks){
          var larger = marks[0];
          for(let i = 0; i < marks.length; i++) {
                    const element = marks[i];
                    if (element > larger) {
                              larger = element;
                           
                    }
          }
          return larger;
}
var output = largestNumber([45, 67, 78, 98, 76, 54, 234, 65]);
console.log('output',output);