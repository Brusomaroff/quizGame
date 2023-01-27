const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const rules = document.getElementById('rules')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btns')
/* Should be var instead of const but wont display questions */
const currentQuestionIndex = document.getElementById('question-container')
var correct = "Correct";
var wrong = "wrong";

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
/* Start Game function */
 function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    rules.classList.add('hide')
    questionContainer.classList.remove('hide')
    currentQuestionIndex = 0
    setNextQuestion()
}
/* Next Question */
function setNextQuestion(){
resetState()
showQuestion(currentQuestionIndex)
}
/* Show Question*/
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers(answer => {
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
/* Reset Question */
 function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
/* Answer Selection*/
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
/* If Correct */
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
/* List of Questions */
const question = [
    {
        question: 'What does HTML mean ?',
        answers: [
            { text: 'HyperText Markup Language', correct: true},
            {text: 'HyperText Markdown Language', correct: false},
            {text: 'HyperText+ Markup Language', correct: false},
            {text: 'HyperText+ Markdown Language', correct: false}
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
            { text: 'eee', correct: true},
            { text: 'dedd', correct: false},
            { text: 'detd', correct: true},
            { text: 'me', correct: false}
        ]
    },

]