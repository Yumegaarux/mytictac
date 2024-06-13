let turns = 1;
let p1checkedTiles = [];
let p2checkedTiles = [];
let gameTiles = [];

function play(selectedTile, useTiles){
    let usedTiles = useTiles();
    if (gameTiles.indexOf(selectedTile) === -1){
        pushTiles(gameTiles, usedTiles, selectedTile);
        defSymbol(selectedTile);
        turns++;
    }
    else{
        alert("That tile is already used!");
    }
    
}

function defSymbol(selectedTile){
    turns & 2 != 0 ? document.getElementById(selectedTile).textContent = 'X' : 
    document.getElementById(selectedTile).textContent = 'O'; 
}

function pushTiles(gameTiles, usedTiles, selectedTile){
    gameTiles.push(selectedTile);
    usedTiles.push(selectedTile)
}

function useTiles(){
    if (turns % 2 != 0){
        return p1checkedTiles;
    }
    else{
        return p2checkedTiles;
    }
}

function checkWin(){
    
}
