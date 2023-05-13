const btn = document.querySelector('.box-btn')
const containers = document.querySelectorAll('.container')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    containers[0].classList.add('up')
    startGame()
})

function startGame() {
    const board = document.querySelector('.board')
    let data = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    const colors = {
        2: '#615b3b', 4: '#cf35d9', 8: '#35c865', 16: '#859245',
        32: '#da37ba', 64: '#8e8810', 128: '#48b3a7', 256: '#dd67d2',
        512: '#b2cfad', 1024: '#c03397', 2048: '#766abd', 4096: '#756c2e'
    }
    addNumber()
    addNumber()
    render()

    function addNumber() {
        let isAdded = false
        while (!isAdded) {
            const num1 = getRandomNumber(0, 3)
            const num2 = getRandomNumber(0, 3)
            if (data[num1][num2] === 0) {
                isAdded = true
                const size = getRandomNumber(0, 9)
                data[num1][num2] = size < 8 ? 2 : 4
            }
        }
    }

    function getRandomNumber(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min))
    }

    function render() {
        data.forEach(row => row.forEach(el => draw(el)))

        function draw(num) {
            const square = document.createElement('div')
            square.classList.add('square')
            square.innerHTML = num ? num : ''
            square.style.backgroundColor = colors[num]
            board.append(square)
        }
    }
}