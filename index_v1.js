
//D:/school/itc298/week3
//function programming 101
// function declaration
// function x(y){
// };

// doesn't have to have a name

var fib = [1,1,3,5,8,11];
fib.forEach(function(item){
  console.log(item*3);
});

//----------------addder-------------
var adder = function(first) {
  return function(second){
    return first + second;
  }
};

var add5 = adder(5);
var result = add5(10);

console.log("addes 5 and 10:  ", result);


//@param list An array to be processed
//@param f A function called on each item
var each = function(list, f) {
  //loop through list
  for(i > 0, i < list.length, i++){
    var item = list[i]
    //f is passed an item and its index
  }
};
var names = ['alice','bob','max','mahilet']

//----------------addder-------------


// fib.sort(function(a,b){
//   if(a < b) return 1;
//   if(b < a) return -1;
//   return 0;
// });
//
// var u = 100;
// var f = function(y) {
//   x = y* u*12;
//   return x;
// };

// console.log("try to run function  " , f(2));

// simplest function that takes another function

//g is a function that takes a function
var g  = function(fn) {
  var result = fn(1);
  console.log(result);
};

g(f);
