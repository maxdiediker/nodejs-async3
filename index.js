//D:/school/itc298/week3

var z = 12;

var f = function(y){
  // y is the tempory variable
  var x = y;
  x += 12;
  return x;
};

var x = f(1);

// var g = function(fn) {
//   var result = fn(1);
//   console.log(result);
// };

//g is being called because it has parens after it
// f is not being executed in this function call
//it is being executed above
//if you put parens next to the f below
//you are calling result of f, now a number, not a function
// g(f());


var fibonacci = [1,1,2,3,5,8];

fibonacci.forEach(function(i){
  console.log(i*2);
});


// //@param list An array to be processed
// //@param f A function to be called on each item
// var each = function(list,f){
//   //loop through list
//   for(i=0;i < list.length; i++){
//     //f is passed an item and its index
//     var item  = list[i];
//     f(item, i);
//   }
// };
//
// var names = ["alice","Bob","Carla"];
// var greet = function(name,index){
//   console.log(arguments);
//   console.log("hello  " + name + "(#" + index +")");
// };
//
// each(names, greet);

console.log("Math.random..." +Math.random());
console.log("Math.round(Math.random..  " +Math.round(Math.random()));
console.log("Math.round(.0002..  " +Math.round(.0002));

setTimeout(function(){
  console.log("hellllooooo.....")
},3000);

setTimeout();
