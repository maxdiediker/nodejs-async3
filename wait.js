

var wait = function(arg, callback){
  //var delay = Math.round(Math.random()*3000);

  setTimeout(function(){
    callback(null, arg);
  }, 3000)
}

module.exports = wait;
