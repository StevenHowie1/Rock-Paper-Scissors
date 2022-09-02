const pickButtons = document.querySelectorAll('data-pick')
const PICKS = [
    {
        name: 'rock',
        img: ''
        beats: 'scissors'
    },
    {
        name: 'paper',
        img:
        beats: 'rock'
    },
    {
        name: 'scissors',
        img:
        beats: 'paper'
    }
]
pickButtons.forEach(pickButton => {
    pickButton.addEventListener('click', e => {
const pickName = pickButton.dataset.pick 
const pick = PICKS.find(picks => pick.name === pickName)
makepick(pickName)
    })
})

function makepick(pick) {
    const computerpick= randomPick()
    const yourWinner = isWinner(pick, computerpick)
    const computerWinner = isWinner(computerpick, pick)
    console.log(computerSelection)
}

function isWinner (pick, opponentpick) {
    return pick.beats === opponentpick.name
}

function randomPick() {
const randomIndex = Math.floor(Math.random() * PICKS.length)
return PICKS[randomIndex]
}