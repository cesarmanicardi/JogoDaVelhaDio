var player, winner = null;
var playerSymbol = document.getElementById("symbol");
var actualWinner = document.getElementById("winner");
var allSquare = document.getElementsByClassName("square");

actualPlayer("X");

function choosenSquare(id){    
    if(winner !== null){
        return
    };
    
    let square = document.getElementById(id);
    if(square.innerHTML !== "-"){
        return;
    };
    
    square.innerHTML = player;
    

    if(player === "X"){
        player = "O";
        square.style.color = "orange";
    } else {
        player = "X";
        square.style.color = "blue";
    };

    actualPlayer(player);
    checkTheWinner();
};

function actualPlayer(value){
    player = value;
    playerSymbol.innerHTML = player;
}


function checkTheWinner(){
    
    let firstSquare = document.getElementById(1);
    let secondSquare = document.getElementById(2);
    let thirdSquare = document.getElementById(3);
    let fourthSquare = document.getElementById(4);
    let fifthSquare = document.getElementById(5);
    let sixthSquare = document.getElementById(6);
    let seventhSquare = document.getElementById(7);
    let eigthSquare = document.getElementById(8);
    let ninthSquare = document.getElementById(9);
    
    if(sequelChecker(firstSquare, secondSquare, thirdSquare)){
        changeTheColor(firstSquare, secondSquare, thirdSquare);
        changeTheWinner(firstSquare);
    } else if(sequelChecker(fourthSquare, fifthSquare, sixthSquare)){
        changeTheColor(fourthSquare, fifthSquare, sixthSquare);
        changeTheWinner(fourthSquare);
    } else if(sequelChecker(seventhSquare, eigthSquare, ninthSquare)){
        changeTheColor(seventhSquare, eigthSquare, ninthSquare);
        changeTheWinner(seventhSquare);
    } else if(sequelChecker(seventhSquare, eigthSquare, ninthSquare)){
        changeTheColor(seventhSquare, eigthSquare, ninthSquare);
        changeTheWinner(seventhSquare);
    } else if(sequelChecker(firstSquare, fourthSquare, seventhSquare)){
        changeTheColor(firstSquare, fourthSquare, seventhSquare);
        changeTheWinner(firstSquare);
    } else if(sequelChecker(firstSquare, fourthSquare, seventhSquare)){
        changeTheColor(firstSquare, fourthSquare, seventhSquare);
        changeTheWinner(firstSquare);
    } else if(sequelChecker(firstSquare, fourthSquare, seventhSquare)){
        changeTheColor(firstSquare, fourthSquare, seventhSquare);
        changeTheWinner(firstSquare);
    } else if(sequelChecker(secondSquare, fifthSquare, eigthSquare)){
        changeTheColor(secondSquare, fifthSquare, eigthSquare);
        changeTheWinner(secondSquare);
    } else if(sequelChecker(thirdSquare, sixthSquare, ninthSquare)){
        changeTheColor(thirdSquare, sixthSquare, ninthSquare);
        changeTheWinner(thirdSquare);
    } else if(sequelChecker(firstSquare, fifthSquare, ninthSquare)){
        changeTheColor(firstSquare, fifthSquare, ninthSquare);
        changeTheWinner(firstSquare);
    } else if(sequelChecker(seventhSquare, fifthSquare, thirdSquare)){
        changeTheColor(seventhSquare, fifthSquare, thirdSquare);
        changeTheWinner(seventhSquare);
    } 
};

function changeTheWinner(value){
    winner = value.innerHTML;
    actualWinner.innerHTML = winner;
};

function sequelChecker(sq1, sq2, sq3){
    let itsASequence = false;
    if(sq1.innerHTML !== "-" && sq1.innerHTML === sq2.innerHTML && sq2.innerHTML === sq3.innerHTML){
        itsASequence = true;
    }
    return itsASequence;
};


function changeTheColor(sq1, sq2, sq3){
    sq1.style.backgroundColor = "#05f005";
    sq2.style.backgroundColor = "#05f005";
    sq3.style.backgroundColor = "#05f005";
};

function restart(){
    winner = null;
    actualWinner.innerHTML = "";

    for(let i = 1; i <= 9; i++){
        let square = document.getElementById(i);
        square.style.backgroundColor = "#b5b5b5";
        square.style.color = "#b5b5b5";
        square.innerHTML = "-";
    };
    actualPlayer("X")
};