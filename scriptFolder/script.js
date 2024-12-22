let playGame = confirm("Shall we play rock, paper or scissors?");

if(playGame){
    // play
    let playerChoice = prompt("Please enter rock, paper and scissors");

    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();

        if
        (
            playerOne === "rock"||
            playerOne === "paper"||
            playerOne === "scissors"
        ){
            let computerChoice = Math.floor(Math.random()*3+1);
            let computer = 
                            computerChoice ===1
                            ?"rock"
                            :computerChoice ===2
                            ?"paper"
                            :"scissors";

            let result = playerOne ===computer
            ?"Tie game!"
            :playerOne === "rock" && computer === "paper"
            ?`playerOne:${playerOne} \nComputer:${computer}\n computer wins! `
            :playerOne === "paper" && computer ==="scissors"
            ?`playerOne:${playerOne} \nComputer:${computer}\n computer wins! `
            :playerOne === "scissors" && computer ==="rock"
            ?`playerOne:${playerOne} \nComputer:${computer}\n computer wins! `
            :`playerOne:${playerOne} \nComputer:${computer}\n playerOne wins! `

            alert(result);
            let playAgain = confirm("play again:)?");
            playAgain ? location.reload():alert("ok Thanks for playing.");

        }
        else{
            alert("You didn't enter rock, paper, or scissors");
        }
    }
    else{
        alert("I guess you changed your mind. May be next time");
    }
}
else{
    alert("okay may be next time")
}