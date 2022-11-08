let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let totalCount = 0

function increment() {
    count += 0.5
    countEl.textContent = count
    totalCount += 0.5
    totalEl.textContent = totalCount
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
