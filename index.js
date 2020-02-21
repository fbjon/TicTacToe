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
    header.innerHTML = "<img src='pics/X.jpg' width='42' height='42' align='center'> wins!"
    gameOver = true;
    removeEventListeners();
}

function endGameO() {
    header.innerHTML = "<img src='pics/O.png' width='42' height='42' align='center'> wins!"
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