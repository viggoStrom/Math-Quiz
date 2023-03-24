const answers = document.querySelectorAll(".answers a p:last-of-type")
const currentScore = document.querySelector(".level #score")

// give all the a tags the onclick attribute
answers.forEach(element => {
    element.setAttribute("onclick", "checkAnswer(event)")
})

// kinda for debug purposes
const question = {
    question: "1+1=?",
    answers: ["1", "3", "2", "4", "5", "6"],
    correctAnswerIndex: 2
}

const refreshAnswers = () => {
    answers.forEach(element => {
        element.innerHTML = question.answers[parseInt(element.className) - 1]
    })
    currentScore.innerHTML = 0
}

const checkAnswer = (event) => {
    const response = question.answers[parseInt(event.srcElement.className) - 1]
    const correctAnswer = question.answers[question.correctAnswerIndex]

    // if (response == correctAnswer) {
    //     console.log("Correct answer");
    //     score = parseInt(currentScore.innerHTML)
    //     currentScore.innerHTML = score + 1
    // }
}

refreshAnswers()