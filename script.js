let turns = 1;
let p1checkedTiles = [];
let p2checkedTiles = [];
function play(selectedTile, checkTiles){
    if (checkTiles.indexOf(selectedTile) == -1){
        checkTiles.push(selectedTile);
        if (turns % 2 != 0){
            document.getElementById(selectedTile).textContent = 'X';
            turns++;
        }
        else{
            document.getElementById(selectedTile).textContent = 'O';
            turns++;
        }
    }
    else{
        alert("That tile is already used!");
    }


}

function checkTiles(){
    if (turns % 2 != 0){
        return p1checkedTiles;
    }
    else{
        return p2checkedTiles;
    }
}

