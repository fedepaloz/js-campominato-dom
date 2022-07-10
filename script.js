//al click del bottone devo generare la griglia.
//recupero il bottone dal html
//al momento del click ossia addeventlistener faccio apparire la griglia.
//monto griglia con un array


//recupero elementi dal dom
const button = document.getElementById("play")
const cellContainer = document.getElementById("cell-container")
const container = document.getElementById("container")

//faccio 100 celle con un ciclo for


let score = 0


function cellGen() {
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div')
        cell.className = "cell"
        cellContainer.appendChild(cell)
        cell.innerText = i
        cell.addEventListener('click', function () {
            if (this.classList.contains('clicked')) return
            cell.classList.add("clicked")
            const isGameOver = checkGameOver(cell, bombs);
            if (!isGameOver) score++;
            console.log(score)
        })
    }

}



//funzione gameover

function checkGameOver(cell, bombs) {
    const cellNumber = parseInt(cell.innerText);
    if (bombs.includes(cellNumber)) {
        cell.classList.add("bomb");
        gameOver(score, false)
        return true
    } else {
        cell.classList.add('safe');
        if (score + 1 === winningPoints) {
            gameOver(winningPoints, true)
            return true
        }
        return false;
    }
}

function gameOver(score, hasWon) {
    let message = ''
    if(hasWon){
        message = 'hai vinto, punteggio è ' + score;
    }
    else {message = 'hai perso, punti totalizzati ' + score}

    alert (message)
}


    button.addEventListener('click', cellGen)

const totalCells = 100
const totalBombs = 16

//punteggio massimo 
const winningPoints = totalCells - totalBombs

//funzione per generare i numeri delle bombe

const bombs = generateBombs(totalBombs, totalCells)

function generateBombs(totalBombs, totalCells) {
    const bombs = [];

    while (bombs.length < totalBombs) {
        let randomNumber
        do {
            randomNumber = Math.floor(Math.random() * totalCells) + 1
        } while (bombs.includes(randomNumber));
        bombs.push(randomNumber)
    }
    return bombs
}

console.log(bombs)