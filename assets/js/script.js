const pickButtons = document.getElementsByClassName('pick')
const select = document.querySelector('[data-select]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const myscoreSpan = document.querySelector('[data-my-score]')
const PICKS = [
    {
        name: 'rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        beats: 'paper'
    }
]

Array.prototype.forEach.call(pickButtons, (pickButton => {
    pickButton.addEventListener('click', e => {
const pickName = pickButton.dataset.pick 
const pick = PICKS.find(picks => picks.name === pickName)
makepick(pick)
    })
}))

function makepick(pick) {
    const computerpick= randomPick()
    const yourWinner = isWinner(pick, computerpick)
    const computerWinner = isWinner(computerpick, pick)
    console.log(computerpick)

    if (yourWinner) incrementScore(myscoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function changetoMessage(name) {
    if (name === "rock") return "Rock";
    if (name === "paper") return "Paper";
    if (name === "scissors") return "Scissors"
}
function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function isWinner (pick, opponentpick) {
    return pick.beats === opponentpick.name
}

function randomPick() {
const randomIndex = Math.floor(Math.random() * PICKS.length)
return PICKS[randomIndex]
}