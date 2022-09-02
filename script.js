const choices = ['ROCK', 'PAPER', 'SCISSORS'];
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    indexNum = Math.round(Math.random() * (choices.length - 1));
    return choices[indexNum];
}

function userPlay() {
    userInput = prompt('🪨 📜 ✂️ Which One ', "").toUpperCase().trim();
    if (userInput === 'ROCK' || userInput === 'SCISSORS' || userInput === 'PAPER' || userInput === 'Q') {
        return userInput;
    }
    else {
        console.log('Error, please type: rock, paper or scissors.');
    }
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'TIE';
    if (playerChoice === 'ROCK') {
        if (computerChoice === 'SCISSORS') return 'PLAYER';
        if (computerChoice === 'PAPER') return 'COMPUTER';
    }
    if (playerChoice === 'PAPER') {
        if (computerChoice === 'SCISSORS') return 'COMPUTER';
        if (computerChoice === 'ROCK') return 'PLAYER';
    }
    if (playerChoice === 'SCISSORS') {
        if (computerChoice === 'ROCK') return 'COMPUTER';
        if (computerChoice === 'PAPER') return 'PLAYER';
    }
}

function quitGame() {
    alert("Quiting game...");
    return result(computerScore,playerScore);
  }

/*SINGLE ROUND
  const playerSelection = 'ROCK';
  const computerSelection = computerPlay();
  console.log(computerSelection)
  console.log(determineWinner(playerSelection,computerSelection));*/

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = userPlay();

        if(playerSelection === undefined){             
            i--;
            continue;   
        }
        if (playerSelection === 'Q') return quitGame();

        let computerSelection = computerPlay();

        //call the winner function
        let result = determineWinner(playerSelection,computerSelection);
        console.log("%c %s", "color:#FF6138; font-size: 16pt",`💻Choice:${computerSelection} ` + `🆚` + ` 💁🏼Choice:${playerSelection}`);
       
        //Determine the Winner
        if(result === "COMPUTER"){
            computerScore++;

            console.log("%c %s", "color:#FFFF9D;  font-size: 16pt",'You lost 😢')
            console.log("%c %s", "color:#BEEB9F; font-size: 16pt",`C: ${computerScore} P: ${playerScore}`)
        }
        if(result === "PLAYER"){
            playerScore++;

            console.log("%c %s", "color:#FFFF9D;  font-size: 16pt","YIEEE YOU WON🎉")
            console.log("%c %s", "color:#BEEB9F; font-size: 16pt",`C: ${computerScore} P: ${playerScore}`)
        }
        if(result === "TIE"){
            console.log("%c %s", "color:#FFFF9D;  font-size: 16pt","It's a tie 😲");
            
            computerScore = computerScore;
            playerScore = playerScore;

            console.log("%c %s", "color:#BEEB9F; font-size: 16pt",`C: ${computerScore} P: ${playerScore}`)
        } 
    }
    
    result(computerScore,playerScore)       
}

function result(computerScore,playerScore){
    let x = '⤵'; 
    console.log("%c %s", "color:#00A388; font-size: 16pt",`${x.repeat(20)}`)

    if(computerScore > playerScore){ 
        console.log("%c %s", "color:#79BD8F; font-size: 16pt",`YOU LOST LAST SCORE: ${computerScore} - ${playerScore}`)
    }
    else if(playerScore > computerScore){ 
        console.log("%c %s", "color:#79BD8F; font-size: 16pt",`YOU WON LAST SCORE: ${computerScore} - ${playerScore}`)
    }
    else{
        console.log("%c %s", "color:#79BD8F; font-size: 16pt",`YOU ARE TIED LAST SCORE: ${computerScore} - ${playerScore}`)
    }

    x = '⤴'; 
    console.log("%c %s", "color:#00A388; font-size: 16pt",`${x.repeat(20)}`);

}

game()