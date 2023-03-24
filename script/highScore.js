const scores = document.querySelectorAll(".levelSelectArea a p:last-of-type")

const refreshScore = () => {
    scores.forEach(element => {
        let score = localStorage.getItem(element.className)
        if (score == null) {
            score = 0
            localStorage.setItem(element.className, score)
        }
        element.innerHTML = `${localStorage.getItem(element.className)} p.`
    })
}

refreshScore()











// debug
document.addEventListener("keydown", event => {
    if (event.key == "u") {
        let score = parseInt(localStorage.getItem(scores[0].className))
        score += 1
        localStorage.setItem(scores[0].className, score)
    }
    if (event.key == "i") {
        let score = parseInt(localStorage.getItem(scores[1].className))
        score += 1
        localStorage.setItem(scores[1].className, score)
    }
    if (event.key == "o") {
        let score = parseInt(localStorage.getItem(scores[2].className))
        score += 1
        localStorage.setItem(scores[2].className, score)
    }
    if (event.key == "j") {
        let score = parseInt(localStorage.getItem(scores[3].className))
        score += 1
        localStorage.setItem(scores[3].className, score)
    }
    if (event.key == "k") {
        let score = parseInt(localStorage.getItem(scores[4].className))
        score += 1
        localStorage.setItem(scores[4].className, score)
    }
    if (event.key == "l") {
        let score = parseInt(localStorage.getItem(scores[5].className))
        score += 1
        localStorage.setItem(scores[5].className, score)
    }
    if (event.key == "å"){
        localStorage.clear()
    }
    refreshScore()
})