const startButton = document.getElementById('start-btn')
const rules = document.getElementById('rules')
const questionContainer = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    rules.classList.add('hide')
    questionContainer.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){

}

function selectAnswer(){

}
