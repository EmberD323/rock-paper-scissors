


function playGame(){ //5 rounds
    let humanScore = 0;
    let computerScore = 0;
    const rounds = 6;
    for (let i = 1; i<rounds; i++){
    function getComputerChoice(){ // function to choose rock, paper or scissors at randomn
        let randomNumber = Math.random(); //get random number between 0 and 1
        randomNumber = randomNumber.toFixed(2) //round to 2 decimal points
        let randomChoice;
        if (randomNumber <= 0.33){ //if..else statement to assign randomn number to rock, paper or scissors
            randomChoice = "Rock";
        }
        else if (randomNumber>0.33 && randomNumber<=0.66){
            randomChoice = "Paper";
        }
        else if (randomNumber>0.66 && randomNumber<=1) {
            randomChoice = "Scissors";
        }
        else{
            randomChoice = "Somethings gone wrong"; // just incase
        }
        return randomChoice;
    }
    let computerSelection = getComputerChoice();
    function getHumanChoice() { // function to promp for human choics
        let humChoice; 
        humChoice = prompt("Let's play 5 rounds of Rock, Paper or Scissors. This is game " + i + ", good luck! Please input your choice.");
        return humChoice;
    }
    let humanSelection = getHumanChoice();
    function playRound (humanChoice,computerChoice){//1 round
        let humanChoicefix;
        humanChoicefix = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();//make sure human choice is case insensitive
        if (humanChoicefix == "Rock"){ // if human chooses rock
            if (computerChoice == "Rock"){
                result = "You draw! " + humanChoicefix + " draws with " + humanChoicefix;
            }
            else if (computerChoice == "Paper"){
                result = "You lose! " + computerChoice + " beats " + humanChoicefix;
                ++computerScore;
            }
            else{
                result = "You win! " + humanChoicefix + " beats " + computerChoice;
                ++humanScore;
            }
        }
        else if (humanChoicefix == "Paper"){ // if human chooses paper
            if (computerChoice == "Paper"){
                result = "You draw! " + humanChoicefix + " draws with " + computerChoice;
            }
            else if (computerChoice == "Scissors"){ 
                result = "You lose! " + computerChoice + " beats " + humanChoicefix;
                ++computerScore;
            }
            else{
                result = "You win! " + humanChoicefix + " beats " + computerChoice;
                ++humanScore;
            }
        }
        else if (humanChoicefix == "Scissors"){// if human chooses scissors
            if (computerChoice == "Scissors"){
                result = "You draw! " + humanChoicefix + " draws with " + computerChoice;
            }
            else if (computerChoice == "Rock"){
                result = "You lose! " + computerChoice + " beats " + humanChoicefix;
                ++computerScore;
            }
            else{
                result = "You win! " + humanChoicefix + " beats " + computerChoice;
                ++humanScore;
            }
        }
        else{ //if human does not choose one of these 3 options
            result = "Invalid choice. Please input Rock, Paper or Scissors."
        }
    
        //2 figure out how to increment score
        window.alert(result);
        return result;
    }
    console.log(playRound(humanSelection,computerSelection));
    }
    if (humanScore > computerScore){ // if statement for game end
        window.alert("Darn! You have bested me this time you won " + humanScore + " out of 5 games. Congrats Bailey! Reload the page to play again!")
    }
    else if (computerScore > humanScore ){
        window.alert("Haha Bailey got beaten by a computer! I won " + computerScore + " out of 5 games. Time to take over the world! Reload the page to play again!")
    }
    else if (computerScore == humanScore){
        window.alert("A worthy apponent! We both won 2 rounds, want to play another game Bailey? Reload the page!")
    }
    
    console.log("human score is " + humanScore);
    console.log("computer score is " + computerScore);
}
playGame();








