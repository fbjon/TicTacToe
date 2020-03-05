var allTds = document.querySelectorAll('td');
var td1 = document.getElementById('11')
var td2 = document.getElementById('12')
var td3 = document.getElementById('13')
var td4 = document.getElementById('21')
var td5 = document.getElementById('22')
var td6 = document.getElementById('23')
var td7 = document.getElementById('31')
var td8 = document.getElementById('32')
var td9 = document.getElementById('33')
var header = document.querySelector('h1');
var gameOver = false;
var array = [];

window.onload = function () {
    var i = Math.random();
    console.log(i);
    if (i > 0.5) {
        addO();
    } else {
        addEventlisters();
    }
}

function addX() {
    if (!this.classList.contains('X') && !this.classList.contains('O')) {
        array.push('X');
        this.classList.add('X');
        checkGameOver();
        removeEventListeners()
        if (gameOver === false) {
            setTimeout(addO, 500);
        }
    }
}

function addO() {
    if (array.length < 9) {
        array.push('O');
        var emptySlots = document.querySelectorAll("td:not(.X):not(.O)")
        var i = Math.floor(Math.random() * (emptySlots.length));
        emptySlots[i].classList.add('O');
        addEventlisters();
        checkGameOver();
    }
}

function checkGameOver() {
    /*
    This function is easy to understand: it checks for victory/draw conditions. However there's two
    challenges, 
    a) how would you know if there's a typo in one of the if-clauses, i.e. how would you 
      (easily) test all the different possibilities of winning and not-winning, especially since the actual
      gameplay is random and not deterministic, and 
    b) what if you want a game with a 5x5 board or larger?.
    
    Not that the game needs to be highly configurable, but here's a more expandable approach:
    
    function checkVictoryX(cellList) { 
        // TODO check if list of cells contain 3 X'es in a row and return true/false, or "X"/null
        return null;
    }
    
    And likewise with checkVictoryY(). You can then run these two functions on all combinations of rows, 
    columns and diagonals like so:
    if(checkVictoryX([td1,td2,td3]) {
        ...
    } else if(checkVictoryY([td1,td2,td3])) ...
    
    Next, instead of writing out the different rows, columns and diagonals multiple times you could have
    an array of arrays:
    let checkCells = [
        [td1, td2, td3],
        ...
        [td1, td4, td7],
        ...
    ]
    Finally, you could even combine the two victory checks and do something like this:
    
    let victory = checkCells.find(function(rowColOrDiag) {
        let result = checkVictory(rowColOrDiag); // returns "X", "Y", or null
        if(result == "X") {
            endGameX();
            return true;
        } else if(result == "Y") {
            endGameY();
            return true;
        } 
        return false;
    });
    
    // 'victory' will be either undefined or the winning row/col/diagonal
    if(victory) {
        ...
    } else if (array.length === 9) {
        endGame();
    }
    
    Finally, you might combine and change the endGame-functions to take a parameter of who won (if anyone).
    
    This game doesn't need this level of complexity, but it's a place to experiment with different levels
    of abstractions:
    
    Too little abstraction -> difficult to modify and expand
    Too much abstraction -> difficult to understand
    
    */
    if (td1.classList.contains('X') && td2.classList.contains('X') && td3.classList.contains('X')) {
        endGameX();
    } else if (td4.classList.contains('X') && td5.classList.contains('X') && td6.classList.contains('X')) {
        endGameX();
    } else if (td7.classList.contains('X') && td8.classList.contains('X') && td9.classList.contains('X')) {
        endGameX();
    } else if (td1.classList.contains('X') && td4.classList.contains('X') && td7.classList.contains('X')) {
        endGameX();
    } else if (td2.classList.contains('X') && td5.classList.contains('X') && td8.classList.contains('X')) {
        endGameX();
    } else if (td3.classList.contains('X') && td6.classList.contains('X') && td9.classList.contains('X')) {
        endGameX();
    } else if (td1.classList.contains('X') && td5.classList.contains('X') && td9.classList.contains('X')) {
        endGameX();
    } else if (td3.classList.contains('X') && td5.classList.contains('X') && td7.classList.contains('X')) {
        endGameX();
    } else if (td1.classList.contains('O') && td2.classList.contains('O') && td3.classList.contains('O')) {
        endGameO()
    } else if (td4.classList.contains('O') && td5.classList.contains('O') && td6.classList.contains('O')) {
        endGameO()
    } else if (td7.classList.contains('O') && td8.classList.contains('O') && td9.classList.contains('O')) {
        endGameO()
    } else if (td1.classList.contains('O') && td4.classList.contains('O') && td7.classList.contains('O')) {
        endGameO()
    } else if (td2.classList.contains('O') && td5.classList.contains('O') && td8.classList.contains('O')) {
        endGameO()
    } else if (td3.classList.contains('O') && td6.classList.contains('O') && td9.classList.contains('O')) {
        endGameO()
    } else if (td1.classList.contains('O') && td5.classList.contains('O') && td9.classList.contains('O')) {
        endGameO()
    } else if (td3.classList.contains('O') && td5.classList.contains('O') && td7.classList.contains('O')) {
        endGameO()
    } else if (array.length === 9) {
        endGame();
    }
}

function endGameX() {
    header.innerHTML = "<img src='pics/X.jpg' alt='X' width='42' height='42' align='center'> wins!"
    gameOver = true;
    removeEventListeners();
}

function endGameO() {
    header.innerHTML = "<img src='pics/O.png' alt='O' width='42' height='42' align='center'> wins!"
    gameOver = true;
    removeEventListeners();
}

function endGame() {
    removeEventListeners();
    header.innerHTML = "Game Over!"
}

function addEventlisters() {
    allTds.forEach(function (td) {
        td.addEventListener('click', addX)
    })
}

function removeEventListeners() {
    allTds.forEach(function (td) {
        td.removeEventListener('click', addX)
    })
}
