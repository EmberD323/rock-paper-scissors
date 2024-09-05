
function playGame(){ //5 rounds
    let humanScore = 0;
    let computerScore = 0;
    const buttons = document.querySelectorAll("button");
        buttons.forEach((button) => { // each time a button is clicked, take the button selection and play a round
            button.addEventListener("click", function(e) {
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
                console.log("Computer selection is " + computerSelection);
                let humanSelection = button.id;
                console.log("Human selection is " + humanSelection);//human choice
                function playRound (humanChoice,computerChoice){//1 round of the game
                    let resultText = document.querySelector("#resultText");
                    resultText.textContent = "";
                    
                    let humanChoicefix;
                    humanChoicefix = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();//make sure human choice is case insensitive
                    //if computerscore and humanscore is equal to 5 - print and rest scores
                    if(computerScore ==5){
                        resultText.textContent = "The computer was the first to win 5 games, better luck next time!"
                        computerScore = 0;
                        humanScore = 0;
                        return;

                    }
                    else if(humanScore ==5){
                        resultText.textContent = "You were the first to win 5 games, well done!"
                        computerScore = 0;
                        humanScore = 0;
                        return;

                    }
                    //else keep going
                    else{
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
                    }}    
                
                    //2 figure out how to increment score
                    resultText.textContent = result;
                    return result;
                }
                console.log(playRound(humanSelection,computerSelection));
                console.log("human score is " + humanScore);
                console.log("computer score is " + computerScore)
            });
        });
        

    /*if (humanScore > computerScore){ // if statement for game end
        window.alert("Darn! You have bested me this time you won " + humanScore + " out of 5 games. Congrats Bailey! Reload the page to play again!")
    }
    else if (computerScore > humanScore ){
        window.alert("Haha Bailey got beaten by a computer! I won " + computerScore + " out of 5 games. Time to take over the world! Reload the page to play again!")
    }
    else if (computerScore == humanScore){
        window.alert("A worthy apponent! We both won 2 rounds, want to play another game Bailey? Reload the page!")
    }

    console.log("human score is " + humanScore);
    console.log("computer score is " + computerScore)*/
}
playGame();








