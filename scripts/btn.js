//Buttons will be used to switch between screens
// Click 'Start Game' -> goes to Game Screen
// Click 'End Game' -> clear game data & goes back to Title Screen


//Grab elements from HTML
const btnStart = document.getElementById('btn-start');
const btnEnd = document.getElementById('btn-end');
const screenOpening = document.getElementById('title-screen');
const screenGame = document.getElementById('game-screen');

btnStart.addEventListener('click', function(){
   screenOpening.style.display="none";
})

btnEnd.addEventListener('click', function(){
    location.reload();
 })

