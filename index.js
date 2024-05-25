//Black Jack Game 
//let firstCard = getRandomCard() //Variables
//let secondCard = getRandomCard() //Variables
//Player objects with values
let player = {
    name: "Puso",
    chips: 300 
}
let cards = [] //Variables | This was changed and added to the startGame Function
let sum = 0 //Variables | By default the number on the sum of cards should be zero before you generate the cards
let hasBlackJack = false //Booleans
let isAlive = false //Booleans | Must be set to false(default) because you have not started game yet 
let message = " "  //Empty String To Be Added At Functions
//Do you want to draw card message
let messageEl = document.getElementById("message-el") //Variables
//Accumulated card number you have in game
let sumEl = document.getElementById("sum-el") //Variables
//Cards JavaScript selector variable
let cardsEl = document.getElementById("cards-el") //Variables


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": R" + player.chips


//Creating Randomness For Cards Drawn
function getRandomCard() {
    let randomNumber =  Math.floor( Math.random() * 13 ) + 1
    if ( randomNumber > 10 ) {
        return 10
    } else if ( randomNumber === 1 ) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {   
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    //Added loop for displaying array - very important for me to remeber
    for (let i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + "  "
    }
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card"
    }   
    else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackJack = true
    }
    else  {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if ( isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        //Pushed card to array
        cards.push(card) 
        renderGame()
    }
}











/*

//Club Admission
let age = 22 

if (age < 21) {
    console.log("You cannto enter club!")
} 
else {
    console.log("Welcome!")
}

//Norway King Letter
let age = 100

if (age < 100) {
    console.log("Not elegible")
} 
else if (age === 100) {
    console.log("Here is your birthday card from the King!")
}
else {
    console.log("Not elegible, you already got one!")
}

*/