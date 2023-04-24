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

const shuffle = () => {
    const levels = document.querySelectorAll(".levelSelectArea a")
    window.location.replace(levels[Math.floor(Math.random() * levels.length)].getAttribute("href"))
}

