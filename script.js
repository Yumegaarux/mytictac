let turns = 1;
let isRunning = true;
let p1CheckedTiles = [];
let p2CheckedTiles = [];
let gameTiles = [];
const winningTiles = [
    [1 , 2 , 3] , [1 , 4 , 7] , [7 , 8 , 9],
    [9 , 3 , 6] , [1 , 5 , 9] , [3 , 5 , 7],
    [2 , 5 , 8]
]

for(let i = 0; i <= 9 ; i++){
    const bigCell = document.createElement("div");
    bigCell.className = 'bigCell';
    bigCell.id = i;

    for(let j = 0; j <= 9 ; j++){
        const smallCell = document.createElement("div");
        smallCell.className = 'smallCell';
        smallCell.id = j;
    }
}


function play(selectedTile, useTiles){
    if (isRunning){
        let usedTiles = useTiles();
        if (gameTiles.indexOf(selectedTile) === -1){
            pushTiles(gameTiles, usedTiles, selectedTile);
            defSymbol(selectedTile);
        }
        else{
            alert("That tile is already used!");
        }
        
        if (turns >= 5){ 
            checkWin();
        }
        turns++;
    }
}

function defSymbol(selectedTile){
    turns % 2 != 0 ? document.getElementById(selectedTile).textContent = 'X' : 
    document.getElementById(selectedTile).textContent = 'O'; 
}

function pushTiles(gameTiles, usedTiles, selectedTile){
    gameTiles.push(selectedTile);
    usedTiles.push(selectedTile);
}

function useTiles(){
    if (turns % 2 != 0){
        return p1CheckedTiles;
    }
    else{
        return p2CheckedTiles;
    }
}

function checkWin() {
    let playerTiles = turns % 2 != 0 ? p1CheckedTiles : p2CheckedTiles;
    
    for (let combination of winningTiles) {
        if (combination.every(tile => playerTiles.includes(tile))) {
            alert(`Player ${turns % 2 != 0 ? '1' : '2'} wins!`);
            isRunning = false;
            return;
        }
    }
}
