        const squares = document.querySelectorAll('.square')
        const mole  = document.querySelector('.mole')
        const timeLeft = document.querySelector('.countdown')
        const score = document.querySelector('.score')
        const startButton = document.getElementById('startButton');


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
    
        function countDown() {
            currentTime--
            timeLeft.textContent = currentTime
    
            if (currentTime === 0) {
                clearInterval(timerId)
                clearInterval(countDownTimerId)
                alert('Game over! Your score is ' + result)
                currentTime = 10
                timeLeft.textContent = currentTime
                result = 0
                score.textContent = result
            }
        }
    
        startButton.addEventListener('click', () => {
            moveMole()
            countDownTimerId = setInterval(countDown, 1000)
        });
