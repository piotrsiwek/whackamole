const squares = document.querySelectorAll('.square')
const mole  = document.querySelector('.mole')
const timeLeft = document.querySelectorAll('.time-left')
const score = document.querySelector('.score')

document.querySelectorAll('#score')

    let result = 0

function randomSquare() {
    squares.forEach(squares => {
        squares.classList.remove('mole')
    })
    let randomPosition = squares[Math.floor(Math.random()*9)]
    console.log(randomPosition)
}

randomSquare()