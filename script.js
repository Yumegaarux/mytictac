let turns = 1;
let p1CheckedTiles = [];
let p2CheckedTiles = [];
let gameTiles = [];
const winningTiles = [
    [1 , 2 , 3] , [1 , 4 , 7] , [7 , 8 , 9],
    [9 , 3 , 6] , [1 , 5 , 9] , [3 , 5 , 7],
    [2 , 5 , 8]
]

function play(selectedTile, useTiles){
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

function checkWin(){
    let i;
    if (turns % 2 != 0){
        for (let tiles of winningTiles){
            console.log(tiles.includes(p1CheckedTiles.indexOf(i)));
            i++;
        }
    }
    else{
        
    }
}
