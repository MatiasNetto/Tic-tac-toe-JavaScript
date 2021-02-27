//HTML DOM objects
const spacesInput = document.querySelectorAll(`.game__space`);
const resetBTN = document.querySelectorAll(`.options__reset-BTN`);
//player data
const player1ScoreDom = document.getElementById(`player1Score`);
const player2ScoreDom = document.getElementById(`player2Score`);
const player1Name = document.getElementById(`player1Name`);
const player2Name = document.getElementById(`player2Name`);
const winCard1 = document.getElementById(`winCard1`);
const winCard2 = document.getElementById(`winCard2`);
let player1Score = 0;
let player2Score = 0;
//miscellaneous
let spaces = [];
let player = "X"
let winner;

//Space class
class Space {
    constructor(position) {
        this.position = position;
        this.content = null;
    }
    //set the counter and actualizate the dom object
    setContent(position,player){
        this.content = player;
        spacesInput[position].innerHTML = player;
    }
}

//add event reset to the reset buttons
for (let i = 0; i < resetBTN.length; i++) {
    resetBTN[i].addEventListener(`click`,resetGame);
}



//create the Space objects and add event listener
for (let i = 0; i < spacesInput.length; i++) {

    spaces[i] = new Space(i);

    spacesInput[i].addEventListener(`click`,()=>{
        //if the game has not eded yet
        if (winner == undefined) {

            //onClick call setContent
            if (spaces[i].content == null) {
                spaces[i].setContent(i,player)
                //change the turn
                if (player == "X") player = "O";
                else player = "X";
            } else {
                console.log("Ya esta ocupado")
            }

            //set placeholders X and O
            for (let i = 0; i < spacesInput.length; i++) {
                spacesInput[i].classList.remove(`game__space-player1`,`game__space-player2`);

                if (spaces[i].content == null) {
                    if (player == "X") spacesInput[i].classList.add(`game__space-player1`);
                    else spacesInput[i].classList.add(`game__space-player2`);
                }
            }

            //verify if someone has won
            verifyWin()
        }
    })
}

//this variables are just to make add legibility to the code
let space1,space2,space3,space4,space5,space6,space7,space8,space9;

function verifyWin() {
    //set each value
    space1 = spaces[0].content;
    space2 = spaces[1].content;
    space3 = spaces[2].content;
    space4 = spaces[3].content;
    space5 = spaces[4].content;
    space6 = spaces[5].content;
    space7 = spaces[6].content;
    space8 = spaces[7].content;
    space9 = spaces[8].content;

    //verify if some convination is ok
    if (space1 != null && space1 == space2 && space2 == space3) {
        winner = space1;
    } else if (space4 != null && space4 == space5 && space5 == space6) {
        winner = space4;
    } else if (space7 != null && space7 == space8 && space8 == space9) {
        winner = space7;
    } else if (space1 != null && space1 == space4 && space4 == space7) {
        winner = space1;
    } else if (space2 != null && space2 == space5 && space5 == space8) {
        winner = space2;
    } else if (space3 != null && space3 == space6 && space6 == space9) {
        winner = space3;
    } else if (space1 != null && space1 == space5 && space5 == space9) {
        winner = space1;
    } else if (space3 != null && space3 == space5 && space5 == space7) {
        winner = space3;
    }

    //verify if all the spaces are ocupped, if it´s true reset the game
    if (space1 != null && space2 != null && space3 != null && space4 != null && space5 != null && space6 != null && space7 != null && space8 != null && space9 != null) {
        setTimeout(resetGame,1500);
        }

    //if winner exists add score and show win card
    if (winner != undefined) {
        setTimeout(()=>{
            if (winner == "X") {
                player1Score += 1;
                player1ScoreDom.innerHTML = player1Score;
                winCard1.classList.remove(`options__status-hidden`);
            } else {
                player2Score += 1;
                player2ScoreDom.innerHTML = player2Score;
                winCard2.classList.remove(`options__status-hidden`);
            }
        },10);

        for (let i = 0; i < spacesInput.length; i++) {
            spacesInput[i].classList.remove(`game__space-player1`,`game__space-player2`);
        }
    }
}

//reset all the paramethers like innerHTMLs, .content, winner and winning cards
function resetGame() {
    for (let i = 0; i < spacesInput.length; i++) {
        spacesInput[i].innerHTML = "";
        spaces[i].content = null;

        if (player == "X") spacesInput[i].classList.add(`game__space-player1`);
        else spacesInput[i].classList.add(`game__space-player2`);
    }
    winCard1.classList.add(`options__status-hidden`);
    winCard2.classList.add(`options__status-hidden`);
    winner = undefined;
}

resetGame();

