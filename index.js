let countEl = document.getElementById("count-el") // pass in arguments
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1 // count = count + 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

let welcomeEl = document.getElementById("welcome-el")

let name = "Damari"
let greeting = "Welcome back "
welcomeEl.innerText = greeting + name

welcomeEl.innerText += "👋"