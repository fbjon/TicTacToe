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


allTds.forEach(function (td) {
    td.addEventListener('click', function () {
        this.classList.add('X');
        setTimeout(add0, 500);
        gameOver();
    })
})

function add0() {
    let emptySlots = document.querySelectorAll("td:not(.X):not(.O)")
    let i = Math.floor(Math.random() * (emptySlots.length));
    emptySlots[i].classList.add('O');
    gameOver();
}

function gameOver() {
    if (td1.classList.contains('X') && td2.classList.contains('X') && td3.classList.contains('X')) {
        console.log("X wins!")
        removeEventlistener()
    } else if (td4.classList.contains('X') && td5.classList.contains('X') && td6.classList.contains('X')) {
        console.log("X wins!")
        removeEventlistener()
    } else if (td7.classList.contains('X') && td8.classList.contains('X') && td9.classList.contains('X')) {
        console.log("X wins!")
        removeEventlistener()
    } else if (td1.classList.contains('X') && td4.classList.contains('X') && td7.classList.contains('X')) {
        console.log("X wins!")
        removeEventlistener()
    } else if (td2.classList.contains('X') && td5.classList.contains('X') && td8.classList.contains('X')) {
        console.log("X wins!")
        removeEventlistener()
    } else if (td3.classList.contains('X') && td6.classList.contains('X') && td9.classList.contains('X')) {
        console.log("X wins!")
        removeEventlistener()
    } else if (td1.classList.contains('X') && td5.classList.contains('X') && td9.classList.contains('X')) {
        console.log("X wins!")
        removeEventlistener()
    } else if (td3.classList.contains('X') && td5.classList.contains('X') && td7.classList.contains('X')) {
        console.log("X wins!")
        removeEventlistener()
    } else if (td1.classList.contains('O') && td2.classList.contains('O') && td3.classList.contains('O')) {
        console.log("O wins!")
        removeEventlistener()
    } else if (td4.classList.contains('O') && td5.classList.contains('O') && td6.classList.contains('O')) {
        console.log("O wins!")
        removeEventlistener()
    } else if (td7.classList.contains('O') && td8.classList.contains('O') && td9.classList.contains('O')) {
        console.log("O wins!")
        removeEventlistener()
    } else if (td1.classList.contains('O') && td4.classList.contains('O') && td7.classList.contains('O')) {
        console.log("O wins!")
        removeEventlistener()
    } else if (td2.classList.contains('O') && td5.classList.contains('O') && td8.classList.contains('O')) {
        console.log("O wins!")
        removeEventlistener()
    } else if (td3.classList.contains('O') && td6.classList.contains('O') && td9.classList.contains('O')) {
        console.log("O wins!")
        removeEventlistener()
    } else if (td1.classList.contains('O') && td5.classList.contains('O') && td9.classList.contains('O')) {
        console.log("O wins!")
        removeEventlistener()
    } else if (td3.classList.contains('O') && td5.classList.contains('O') && td7.classList.contains('O')) {
        console.log("O wins!")
    }
}

function removeEventlistener(){
    allTds.forEach(function (td) {
        td.removeEventListener('click', function () {
            this.classList.add('X')
        
        })
    })
}