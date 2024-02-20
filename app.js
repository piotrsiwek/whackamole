document.getElementById('startButton').addEventListener('click', startGame);

    function startGame() {
        const squares = document.querySelectorAll('.square')
        const mole  = document.querySelector('.mole')
        const timeLeft = document.querySelectorAll('.time-left')
        const score = document.querySelector('.score')

        let result = 0
        let hitPosition
        let currentTime = 10
        let timerId = null
        let countDownTimerId = null


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
                    score.textContent = + result
                    hitPosition = null
                }
            })
        })

        function moveMole() {
            timerId = setInterval(randomSquare, 750)

        }
        moveMole()
        function countDown() {
            currentTime--
            timeLeft.textContent = 'Time Left: ' + currentTime

            if (currentTime==0) {
                clearInterval(timerId)
                clearInterval(countDownTimerId)
                alert('Game over = ' +result)

            }
        }
      
        countDownTimerId = setInterval(countDown, 1000)
    }


