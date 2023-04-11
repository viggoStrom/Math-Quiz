const answers = document.querySelectorAll(".answers a p:last-of-type")
const currentScoreElement = document.querySelector(".level #score")
const questionElement = document.querySelector(".level #question")
let currentScore = 0
currentScoreElement.innerHTML = currentScore
let currentQuestion = 0

// give all the a tags the onclick attribute
answers.forEach(element => {
    element.setAttribute("onclick", "checkAnswer(event)")
})

// for debug purposes
let questions = [
    { question: "1+6=?", answers: ["1", "4", "0", "7", "5", "6"], correctAnswerIndex: 3 },
    { question: "3-2=?", answers: ["5", "2", "4", "7", "1", "3"], correctAnswerIndex: 4 },
    { question: "10+5=?", answers: ["15", "10", "20", "25", "30", "5"], correctAnswerIndex: 0 },
    { question: "8-3=?", answers: ["2", "5", "6", "3", "1", "0"], correctAnswerIndex: 1 },
    { question: "12+7=?", answers: ["20", "19", "21", "18", "16", "14"], correctAnswerIndex: 1 },
    { question: "15-9=?", answers: ["6", "9", "5", "7", "3", "2"], correctAnswerIndex: 0 },
    { question: "25+13=?", answers: ["38", "28", "30", "35", "32", "26"], correctAnswerIndex: 0 },
    { question: "17-8=?", answers: ["10", "9", "11", "8", "5", "6"], correctAnswerIndex: 1 },
    { question: "9+6=?", answers: ["14", "13", "16", "15", "12", "10"], correctAnswerIndex: 3 },
    { question: "20-4=?", answers: ["16", "18", "14", "22", "12", "15"], correctAnswerIndex: 0 },
    { question: "11+9=?", answers: ["20", "18", "21", "19", "15", "17"], correctAnswerIndex: 1 },
    { question: "30-12=?", answers: ["18", "20", "22", "24", "16", "14"], correctAnswerIndex: 0 },
    { question: "13+18=?", answers: ["32", "28", "27", "22", "21", "19"], correctAnswerIndex: 2 },
    { question: "24-14=?", answers: ["8", "7", "6", "5", "4", "3"], correctAnswerIndex: 3 },
    { question: "19+7=?", answers: ["26", "25", "23", "22", "20", "18"], correctAnswerIndex: 4 },
    { question: "31-17=?", answers: ["12", "13", "14", "15", "16", "18"], correctAnswerIndex: 5 },
    { question: "11+15=?", answers: ["25", "23", "22", "20", "19", "17"], correctAnswerIndex: 2 },
    { question: "27-8=?", answers: ["19", "18", "16", "15", "14", "12"], correctAnswerIndex: 5 },
    { question: "23+12=?", answers: ["34", "31", "29", "27", "26", "24"], correctAnswerIndex: 3 },
    { question: "16-5=?", answers: ["11", "10", "9", "8", "6", "4"], correctAnswerIndex: 4 },
    { question: "28+10=?", answers: ["38", "35", "33", "30", "29", "26"], correctAnswerIndex: 3 },
    { question: "20-9=?", answers: ["11", "10", "8", "7", "6", "4"], correctAnswerIndex: 2 },
]

const promptQuestion = (question) => {
    // refresh question
    questionElement.innerHTML = question.question

    // refresh awnser alternatives so they're correct
    answers.forEach(element => {
        element.innerHTML = question.answers[parseInt(element.className) - 1]
    })
}

const checkAnswer = (event) => {
    const response = questions[currentQuestion].answers[parseInt(event.srcElement.className) - 1]
    const correctAnswer = questions[currentQuestion].answers[questions[currentQuestion].correctAnswerIndex]

    if (response == parseInt.(correctAnswer)) {
        console.log("correct");
        currentScore++;
        currentScoreElement.innerHTML = currentScore

        if (currentQuestion == questions.length - 1) {
            currentQuestion = 0;
        } else {
            currentQuestion++;
        }
        promptQuestion(questions[currentQuestion])
    } else {
        // lose state
        window.alert(`You lost. Score: ${currentScore}`)
        window.location.replace("../index.html")
    }
}

promptQuestion(questions[currentQuestion])