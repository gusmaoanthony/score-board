let homeScore = 0
let guestScore = 0

function homePlus1() {
    let homeElement = document.getElementById("home-score")
    homeScore += 1
    
    homeElement.textContent = homeScore
}

function homePlus2() {
    let homeElement = document.getElementById("home-score")
    homeScore += 2
    
    homeElement.textContent = homeScore
}

function homePlus3() {
    let homeElement = document.getElementById("home-score")
    homeScore += 3
    
    homeElement.textContent = homeScore
}

function guestPlus1() {
    let guestElement = document.getElementById("guest-score")
    guestScore += 1
    
    guestElement.textContent = guestScore
}

function guestPlus2() {
    let guestElement = document.getElementById("guest-score")
    guestScore += 2
    
    guestElement.textContent = guestScore
}

function guestPlus3() {
    let guestElement = document.getElementById("guest-score")
    guestScore += 3
    
    guestElement.textContent = guestScore
}
