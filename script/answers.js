const answers = document.querySelectorAll(".answers a p:last-of-type")
const aTags = document.querySelectorAll(".answers a")
const currentScoreElement = document.querySelector(".level #score")
const questionElement = document.querySelector(".level #question")
let currentScore = 0
currentScoreElement.innerHTML = currentScore
let currentQuestion = 0


// for debug purposes
// const addSubQuestions = [
//     { question: "12+7=?", answers: ["20", "19", "21", "18", "16", "14"], correctAnswerIndex: 1 },
//     { question: "30-12=?", answers: ["18", "20", "22", "24", "16", "14"], correctAnswerIndex: 0 },
//     { question: "13+18=?", answers: ["32", "28", "31", "22", "21", "19"], correctAnswerIndex: 2 },
//     { question: "9+6=?", answers: ["14", "13", "16", "15", "12", "10"], correctAnswerIndex: 3 },
//     { question: "20-4=?", answers: ["16", "18", "14", "22", "12", "15"], correctAnswerIndex: 0 },
//     { question: "28+10=?", answers: ["30", "35", "33", "38", "29", "26"], correctAnswerIndex: 3 },
//     { question: "15-9=?", answers: ["6", "9", "5", "7", "3", "2"], correctAnswerIndex: 0 },
//     { question: "11+15=?", answers: ["25", "23", "26", "20", "19", "17"], correctAnswerIndex: 2 },
//     { question: "24-14=?", answers: ["8", "7", "6", "10", "4", "3"], correctAnswerIndex: 3 },
//     { question: "17-8=?", answers: ["10", "9", "11", "8", "5", "6"], correctAnswerIndex: 1 },
//     { question: "3-2=?", answers: ["5", "2", "4", "7", "1", "3"], correctAnswerIndex: 4 },
//     { question: "19+7=?", answers: ["20", "25", "23", "22", "26", "18"], correctAnswerIndex: 4 },
//     { question: "8-3=?", answers: ["2", "5", "6", "3", "1", "0"], correctAnswerIndex: 1 },
//     { question: "11+9=?", answers: ["20", "18", "21", "19", "15", "17"], correctAnswerIndex: 0 },
//     { question: "1+6=?", answers: ["1", "4", "0", "7", "5", "6"], correctAnswerIndex: 3 },
//     { question: "27-8=?", answers: ["19", "18", "16", "15", "14", "12"], correctAnswerIndex: 0 },
//     { question: "31-17=?", answers: ["12", "13", "14", "15", "16", "18"], correctAnswerIndex: 2 },
//     { question: "20-9=?", answers: ["8", "10", "11", "7", "6", "4"], correctAnswerIndex: 2 },
//     { question: "10+5=?", answers: ["15", "10", "20", "25", "30", "5"], correctAnswerIndex: 0 },
//     { question: "23+12=?", answers: ["34", "31", "29", "35", "26", "24"], correctAnswerIndex: 3 },
//     { question: "16-5=?", answers: ["6", "10", "9", "8", "11", "4"], correctAnswerIndex: 4 },
//     { question: "25+13=?", answers: ["38", "28", "30", "35", "32", "26"], correctAnswerIndex: 0 },
// ]
// const multQuestions = [
//     { question: "6×4=?", answers: ["18", "16", "24", "22", "20", "15"], correctAnswerIndex: 2 },
//     { question: "9×3=?", answers: ["27", "30", "24", "21", "18", "15"], correctAnswerIndex: 0 },
//     { question: "5×7=?", answers: ["35", "40", "30", "28", "25", "20"], correctAnswerIndex: 0 },
//     { question: "4×8=?", answers: ["28", "32", "36", "24", "20", "16"], correctAnswerIndex: 1 },
//     { question: "2×9=?", answers: ["18", "20", "16", "14", "12", "10"], correctAnswerIndex: 0 },
//     { question: "10×2=?", answers: ["20", "18", "22", "24", "16", "14"], correctAnswerIndex: 0 },
//     { question: "7×3=?", answers: ["21", "24", "18", "15", "12", "10"], correctAnswerIndex: 0 },
//     { question: "6×9=?", answers: ["54", "48", "63", "45", "36", "27"], correctAnswerIndex: 0 },
//     { question: "3×7=?", answers: ["21", "24", "28", "30", "18", "15"], correctAnswerIndex: 0 },
//     { question: "4×5=?", answers: ["20", "18", "24", "22", "16", "14"], correctAnswerIndex: 0 },
//     { question: "8×6=?", answers: ["48", "40", "56", "44", "36", "24"], correctAnswerIndex: 0 },
//     { question: "9×5=?", answers: ["45", "40", "50", "54", "36", "30"], correctAnswerIndex: 0 },
//     { question: "2×6=?", answers: ["12", "14", "10", "8", "16", "18"], correctAnswerIndex: 0 },
//     { question: "7×5=?", answers: ["35", "40", "30", "28", "25", "20"], correctAnswerIndex: 0 },
//     { question: "8×7=?", answers: ["56", "48", "63", "45", "36", "27"], correctAnswerIndex: 0 },
//     { question: "3×4=?", answers: ["12", "14", "10", "8", "16", "18"], correctAnswerIndex: 0 },
//     { question: "6×8=?", answers: ["48", "40", "56", "44", "36", "24"], correctAnswerIndex: 0 },
//     { question: "5×6=?", answers: ["30", "36", "24", "28", "25", "20"], correctAnswerIndex: 0 },
//     { question: "7×4=?", answers: ["28", "32", "24", "22", "20", "16"], correctAnswerIndex: 0 },
//     { question: "9×6=?", answers: ["54", "48", "63", "45", "36", "27"], correctAnswerIndex: 0 },


const addQuestionGenerator = () => {
    question = {
        question: "",
        answers: new Array(6),
        correctAnswerIndex: 0
    }

    const randomNumber = (topRange) => {
        return Math.floor(Math.random() * (topRange + 1))
    }

    const number1 = randomNumber(10)
    const number2 = randomNumber(10)
    const answer = number1 + number2

    question.question = `${number1}+${number2}=?`
    question.correctAnswerIndex = randomNumber(6)
    question.answers[question.correctAnswerIndex] = answer
    return question
}
const subQuestionGenerator = () => {
    question = {
        question: "",
        answers: new Array(6),
        correctAnswerIndex: 0
    }

    const randomNumber = (topRange) => {
        return Math.floor(Math.random() * (topRange + 1))
    }

    const number1 = randomNumber(10)
    const number2 = randomNumber(10)
    const answer = number1 - number2

    question.question = `${number1}-${number2}=?`
    question.correctAnswerIndex = randomNumber(6)
    question.answers[question.correctAnswerIndex] = answer
    return question
}
const addSubQuestionGenerator = () => {
    if (Math.round(Math.random()) == 1) {
        return addQuestionGenerator()
    }
    else {
        return subQuestionGenerator()
    }
}
const multQuestionGenerator = () => {
    question = {
        question: "",
        answers: new Array(6),
        correctAnswerIndex: 0,
    }

    const randomNumber = (topRange) => {
        return Math.floor(Math.random() * (topRange + 1))
    }

    const number1 = randomNumber(10)
    const number2 = randomNumber(10)
    const answer = number1 * number2

    question.question = `${number1}×${number2}=?`
    question.correctAnswerIndex = randomNumber(6)
    question.answers[question.correctAnswerIndex] = answer
    return question
}

// ]



const addOnclick = (questionGenerator) => {
    // give all the a tags the onclick attribute
    aTags.forEach(element => {
        element.setAttribute("onclick", `checkAnswer(event, ${questionGenerator})`)
    })
}

const promptQuestion = (question) => {
    // refresh question
    questionElement.innerHTML = question.question

    // refresh awnser alternatives so they're correct
    answers.forEach(element => {
        element.innerHTML = question.answers[parseInt(element.className) - 1]
    })
}

const checkAnswer = (event, generatedQuestion) => {
    const response = generatedQuestion.answers[parseInt(event.srcElement.className) - 1]
    const correctAnswer = generatedQuestion.answers[generatedQuestion.correctAnswerIndex]

    if (response == parseInt(correctAnswer)) {
        console.log("correct answer");
        currentScore++;
        currentScoreElement.innerHTML = currentScore

        // continuously update the localstorage in case of missclick out of page which would otherwise not save score 
        const level = document.getElementsByClassName("level")[0].classList[1]
        if (localStorage.getItem(level) < currentScore) {
            localStorage.setItem(level, currentScore)
        }

        promptQuestion(generatedQuestion)

    } else {
        // lose state
        const level = document.getElementsByClassName("level")[0].classList[1]

        if (localStorage.getItem(level) < currentScore) {
            localStorage.setItem(level, currentScore)
            window.alert(`You lost. New highscore!: ${currentScore}`)
        }
        else {
            window.alert(`You lost. Score: ${currentScore}`)
        }

        window.location.replace("../index.html")

        // in case redirect fails
        aTags.forEach(element => {
            element.setAttribute("onclick", "")
            element.setAttribute("href", "../index.html")
        })
    }
}
