// Set up the board
const X_ = "X"
const O_ = "O"
const boxElements = document.querySelectorAll(".box");
const turnsText = document.querySelector("#turnsText");
const resetBtn = document.querySelector("#resetBtn");
const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];

let cells = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = X_;
let isgameRunning = true;

startGame()


function startGame(){
    boxElements.forEach(box => box.addEventListener("click", handleClick));
    resetBtn.addEventListener("click", resetGame);
    turnsText.textContent = `${currentPlayer}'s turn`;
    isgameRunning = true;
}

function handleClick() {
    const boxIndex = this.getAttribute("boxIndex");

    if (cells[boxIndex] != "" || !isgameRunning){
        return;
    }

    updateBox(this, boxIndex);
    checkWin();
    
}

function updateBox(box, index){
    cells[index] = currentPlayer;
    box.textContent = currentPlayer;



}

function switchPlayer(){
    currentPlayer = currentPlayer == X_ ? O_ : X_;
    turnsText.textContent = `${currentPlayer}'s turn`;
}


function checkWin(){
    let winner = false;

    for (let i = 0; i < winningCondition.length; i++){
        const condition = winningCondition[i];
        const box1 = cells[condition[0]];
        const box2 = cells[condition[1]];
        const box3 = cells[condition[2]];

        if(box1 == "" || box2 == "" || box3 == ""){
            continue;
        }
        if(box1 == box2 && box2 == box3){
            winner = true;
            break;
        }
    }

    if (winner){
        turnsText.textContent = `${currentPlayer} wins the game!`;
        isgameRunning = false;
    }

    else if(!cells.includes("")){
        turnsText.textContent = 'Draw!';
        isgameRunning = false;
    }

    else{
        switchPlayer();
    }
}

function resetGame(){
    currentPlayer = X_;
    cells = ["", "", "", "", "", "", "", "", ""];
    turnsText.textContent = `${currentPlayer}'s turn`;
    boxElements.forEach(box => box.textContent = "");
    isgameRunning = true;
    
}

startGame()


    //Track the player (x, o)


    //Track how many plays have occured
    // Create 9 boxes and append to the board element
        //boxes need a click listener
            //check to make sure the box is not taken
            // add the value for the current player (x, o)
            // possibly remove lick event listener
            //check for the win
            //check that hameCount is < 9
            // update the current player
            // update a message on the screen so you know who's turn it is 


//Take turn

//Check for win
    // if someone wins display message

    //if not a win, switch player