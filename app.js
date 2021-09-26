const squares = document.querySelectorAll('.square')
const mole  = document.querySelector('.mole')
const timeLeft = document.querySelectorAll('.time-left')
const score = document.querySelector('.score')

let result = 0
let hitPosition
let currentTime = 9
let timerId = null

function randomSquare() {
    squares.forEach(squares => {
        squares.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random()*9)]
    console.log(randomSquare)
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }



    })
})

function moveMole() {

    timerId = setInterval(randomSquare, 500)

}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime==0) {
        clearInterval(timerId)
        clearInterval(countDownTimerId)
        alert('Game over = ' +result)

    }
}


let countDownTimerId = setInterval(countDown, 1000)
