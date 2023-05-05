const answers = document.querySelectorAll(".answers a p:last-of-type")
const aTags = document.querySelectorAll(".answers a")
const currentScoreElement = document.querySelector(".level #score")
const questionElement = document.querySelector(".level #question")
let currentScore = 0
window.localStorage.setItem("currentScore", 0)
currentScoreElement.innerHTML = currentScore
let currentQuestion = 0



const randomNumber = (topRange, scale = false) => {
    let modifier
    if (scale) {
        modifier = 1 + window.localStorage.getItem("currentScore") / 50
    } else {
        modifier = 1
    }
    return Math.floor(Math.random() * (topRange + 1) * modifier)
}
const replaceSub = (int) => {
    return int.toString().replace(/-/g, "–")
}

const populateAlternatives = (question, answer, rangeHigh, rangeLow = 0) => {
    for (let i = 0; i < question.answers.length; i++) {
        ans = randomNumber(rangeHigh) - randomNumber(rangeLow)

        while (ans == answer || question.answers.includes(ans) == true) {
            ans = randomNumber(rangeHigh) - randomNumber(rangeLow)
        }

        question.answers[i] = ans
    }
}

const addQuestionGenerator = () => {
    question = {
        question: "",
        answers: new Array(6),
        correctAnswerIndex: 0
    }

    const number1 = randomNumber(10)
    const number2 = randomNumber(10)
    const answer = number1 + number2

    populateAlternatives(question, answer, 10, -10)

    question.question = `${replaceSub(number1)}+${replaceSub(number2)}=?`
    question.correctAnswerIndex = randomNumber(5)
    question.answers[question.correctAnswerIndex] = answer

    return question
}
const subQuestionGenerator = () => {
    question = {
        question: "",
        answers: new Array(6),
        correctAnswerIndex: 0
    }

    const number1 = randomNumber(10) - randomNumber(10)
    const number2 = randomNumber(10) - randomNumber(10)
    const answer = number1 - number2

    populateAlternatives(question, answer, 10, -10)

    question.question = `${replaceSub(number1)}–${replaceSub(number2)}=?`
    question.correctAnswerIndex = randomNumber(5)
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
        correctAnswerIndex: 0
    }

    const number1 = randomNumber(10)
    const number2 = randomNumber(10)
    const answer = number1 * number2

    populateAlternatives(question, answer, 30)

    question.question = `${replaceSub(number1)}×${replaceSub(number2)}=?`
    question.correctAnswerIndex = randomNumber(5)
    question.answers[question.correctAnswerIndex] = answer
    return question
}
const divQuestionGenerator = () => {
    question = {
        question: "",
        answers: new Array(6),
        correctAnswerIndex: 0
    }

    let number1 = randomNumber(15) + 1
    let number2 = randomNumber(15) + 1
    while (number1 % number2 != 0) {
        number1 = randomNumber(15) + 1
        number2 = randomNumber(15) + 1
    }
    const answer = number1 / number2

    populateAlternatives(question, answer, 20)

    question.question = `${number1}÷${number2}=?`
    question.correctAnswerIndex = randomNumber(5)
    question.answers[question.correctAnswerIndex] = answer
    return question
}
const multDivQuestionGenerator = () => {
    if (Math.round(Math.random()) == 1) {
        return multQuestionGenerator()
    }
    else {
        return divQuestionGenerator()
    }
}
const addSubMultDivQuestionGenerator = () => {
    const selector = Math.floor(Math.random() * 4)

    switch (selector) {
        case 0:
            return addQuestionGenerator()
        case 1:
            return subQuestionGenerator()
        case 2:
            return multQuestionGenerator()
        case 3:
            return divQuestionGenerator()
        default:
            break;
    }
}
const algebraQuestionGenerator = () => {
    question = {
        question: "",
        answers: new Array(6),
        correctAnswerIndex: 0
    }

    let operator = "+"
    let number1 = randomNumber(10, true)
    let answer = randomNumber(10, true)
    let number3

    const selector = Math.floor(Math.random() * 3).toString()
    switch (selector) {
        case "0":
            operator = "-"
            number3 = number1 - answer
            break;
        case "1":
            operator = "+"
            number3 = number1 + answer
            break;
        case "2":
            operator = "×"
            number3 = number1 * answer
            while (number1 == 0) {
                console.log("object");
                number1 = randomNumber(10, true)
                number3 = number1 * answer
            }
            break;
        default:
            break;
    }

    populateAlternatives(question, answer, 20)

    question.question = `${replaceSub(number1)}${replaceSub(operator).replace(/\*/g, "×")}x=${replaceSub(number3)}`
    question.correctAnswerIndex = randomNumber(5)
    question.answers[question.correctAnswerIndex] = answer
    return question
}



const addOnclick = () => {
    // give all the a tags the onclick attribute
    aTags.forEach(element => {
        element.setAttribute("onclick", `checkAnswer(event)`)
    })
}

const setCurrentQuestion = (question) => {
    window.localStorage.setItem("currentQuestion", JSON.stringify(question))
}
const getCurrentQuestion = () => {
    return JSON.parse(window.localStorage.getItem("currentQuestion"))
}

const promptQuestion = (question) => {
    setCurrentQuestion(question)

    // refresh question
    questionElement.innerHTML = getCurrentQuestion().question

    // refresh awnser alternatives so they're correct
    for (let index = 0; index < answers.length; index++) {
        answers[index].innerHTML = getCurrentQuestion().answers[index]
    }
}

const checkAnswer = (event) => {
    const response = parseInt(getCurrentQuestion().answers[parseInt(event.srcElement.className) - 1])
    const correctAnswer = parseInt(getCurrentQuestion().answers[getCurrentQuestion().correctAnswerIndex])

    if (response == parseInt(correctAnswer)) {
        console.log("correct answer");
        currentScore++;
        currentScoreElement.innerHTML = currentScore

        window.localStorage.setItem("currentScore", currentScore)

        promptQuestion(eval(document.getElementById("questionGenerator").innerHTML))

    } else {
        // lose state
        const level = document.getElementsByClassName("level")[0].classList[1]

        if (window.localStorage.getItem(level) < window.localStorage.getItem("currentScore")) {
            window.localStorage.setItem(level, window.localStorage.getItem("currentScore"))
            window.alert(`You lost. New highscore!: ${window.localStorage.getItem("currentScore")}`)
        }
        else {
            window.alert(`You lost. Score: ${window.localStorage.getItem("currentScore")}`)
        }

        window.onbeforeunload = null
        window.location.replace("../index.html")

        // in case redirect fails
        aTags.forEach(element => {
            element.setAttribute("onclick", "")
            element.setAttribute("href", "../index.html")
        })
    }
}

// window.onbeforeunload = function (event) {
//     return "string"
// };