/*

async.each
@param list An array to be processed
@param iterator A function to be called on each item
@param complete a function to be called when all items are complete

*/

var wait = require("./wait");

console.log("first");
//
// wait("echooOOOOOOOOOOOOOOOOO00000....",function(err, value){
//   console.log(value);
// });

var asyncEach = function(list,iterator,complete){
  console.log("starting asynce");
  //when done, call the complete function
  var counter = 0;
  //loop through list
  list.forEach(function(item,index){
    console.log("starting item", item);
    //for each item...
    // call iterator
    iterator(item, function(){
        console.log("done with item", item);
        debugger;
          console.log("currently completed:", item);
      //add one to the totall processed items
      counter++;
        console.log("starting item", item);
      //if counter == # of items, call complete
      if (counter == list.length){
          console.log("all items are complete");
        complete();
      }
    });
  })
};

names = ["alice","bob","carlai"];

asyncEach(names, function(name, callback){
  wait(name, function(err, data){
    console.log(data);
    callback();
  })
}, function(){
  console.log("goodbye!!")
})
