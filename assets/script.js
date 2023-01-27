const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const rules = document.getElementById('rules')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btns')
const currentQuestionIndex = document.getElementById('question-container')
var correct = "Correct";
var wrong = "wrong";

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

 function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    rules.classList.add('hide')
    questionContainer.classList.remove('hide')
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion(){
resetState()
showQuestion(currentQuestionIndex)
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
 }

 function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        console.log('correct')
    } else {
        console.log('wrong')
    }
}

function clearStatusClass(element) {
    console.log.remove('correct')
    console.log.remove('wrong')
}

const question = [
    {
        question: 'mkmkmk?',
        answers: [
            { text: 'Dylan', correct: true},
            {text: 'Ryan', correct: false},
            {text: 'Patrick', correct: false},
            {text: 'Elijah', correct: false}
        ]
    },
    {
        question: 'ybybyvy?',
        answers: [
            { text: 'Cijn', correct: false},
            { text: 'ihuhu', correct: false},
            { text: 'bubub', correct: true},
            { text: 'mmkmk', correct: false}
        ]
    },
    {
        question: 'nnvtvt?', 
        answers: [
            { text: 'Brianna', correct: true},
            { text: 'Dylan', correct: false},
            { text: 'Elijah', correct: true},
            { text: 'Skylar', correct: false}
        ]
    },

]