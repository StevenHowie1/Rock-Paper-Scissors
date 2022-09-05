const pickButtons = document.getElementsByClassName('pick')
const select = document.querySelector('[data-select]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const myscoreSpan = document.querySelector('[data-my-score]')
const PICKS = [
    {
        name: 'rock',
        // img: '',
        beats: 'scissors'
    },
    {
        name: 'paper',
        // img: ,
        beats: 'rock'
    },
    {
        name: 'scissors',
        // img: ,
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

    // addSelectionResult(computerpick, computerWinner)
    // addSelectionResult(pick, computerWinner)

    if (yourWinner) incrementScore(myscoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

// function addSelectionResult(pick, winner) {
//     const div = document.createElement('div')
//     div.innerText = pick.img
//     div.classList.add('selection')
//     if (winner) div.classList.add('winner')
// select.after(div)
// }

function isWinner (pick, opponentpick) {
    return pick.beats === opponentpick.name
}

function randomPick() {
const randomIndex = Math.floor(Math.random() * PICKS.length)
return PICKS[randomIndex]
}