function callBack(name, age, task){
          task()
          console.log("name : ", name);
          console.log("age : ", age);
} 


function washHand(){
          console.log("Wash Hand with Soap");
}
function takeShower(){
          console.log("Take Shower With Soap");
}
function scrollFacebook(){
          console.log("Scroll Facebook But don't any post");
}
callBack("Kamal Uddin", 24, washHand);
callBack("Jamal Uddin", 30, takeShower);
callBack("Jafor Uddin", 56, scrollFacebook);


