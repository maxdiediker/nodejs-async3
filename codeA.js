
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
console.log(computerChoice);

var check = function(computerChoice) {
    if(computerChoice <= .33){
        computerChoice = "rock";
        return computerChoice;
        }else if (computerChoice <= .67){
            computerChoice = "scissors";
            return computerChoice;
            }else{
                 computerChoice = "paper";
                return computerChoice;
                };
    };
console.log(computerChoice);
