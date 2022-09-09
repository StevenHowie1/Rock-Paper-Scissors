![Website Front Cover](assets/images/Screenshot%202022-09-09%20at%2008.55.24.png)

## Rock, Paper, Scissors Game

On this site, you can play the enjoyable game of Rock, Paper, Scissors. Challenge yourself against the computer and see who wins. The live site can be found here -

------

## Features

------

## The Main Page

You can see on the main page what the game is about. It clearly shows how to play the game and the rules of the game. As I was using white images, I wanted to use a darker background so you can see them clearly. I also changed the colours of the player and computer as they're playing against each other. I've made a hover on the images so you know you should click on them to play the game.

![Main Page](assets/images/Screenshot%202022-09-09%20at%2010.07.36.png)

As you start to play the game, whoever wins will see their score go up, unless it's a draw. 

![Scores](assets/images/Screenshot%202022-09-09%20at%2010.12.55.png)

You can see the rules of the game, underneath the scoring. 

![Rules](assets/images/Screenshot%202022-09-09%20at%2010.14.21.png)

------

## Features Left to Implement 

- A reset button
- To play the game in rounds

------

## Design

- Colour Scheme
 - The three main colours are Black, Grey & White.

 - Typography
  - The Prata font family is used for this website.

  - Imagery 
   - The three images used to play the game.

------

## Technologies Used

------

## Languages Used

- HTML5 

- CSS3

- Javascript

------

## Testing

------

## Validator Testing

- HTML

 ![HTML](assets/images/Screenshot%202022-09-09%20at%2010.31.25.png)

 - CSS

 ![CSS](assets/images/Screenshot%202022-09-09%20at%2010.24.22.png)

 - Lighthouse 

 ![Lighthouse](assets/images/Screenshot%202022-09-09%20at%2010.39.39.png)

I really found the Javascript quite difficult. My main issue was trying to get the game to work so the numbers would increase for whoever wins. I had to do a lot of research to find out how to do this. 

I originally had all buttons with a different class eg. "Rock", "Paper", "Scissors, but my game wasn't working. I then found that I should make them all the same class and add in document.getElementsByClassName('pick'). 

I also wasn't sure how to programme the images so it would clearly show rock beats scissors etc. I noticed in javascript you can name: "scissors" beats: "paper" and further down function isWinner (pick, opponentpick) {
    return pick.beats === opponentpick.name
}

I thought I had everything figured out but the score wasn't changing. I added - Array.prototype.forEach.call(pickButtons, (pickButton => {
    pickButton.addEventListener('click', e => {
const pickName = pickButton.dataset.pick 
const pick = PICKS.find(picks => picks.name === pickName)
makepick(pick)
    })
})) 

This is what made it work (Thankfully).

- I've tested this site on Google Chrome, Firefox and Safari.

------

## Bugs

- 