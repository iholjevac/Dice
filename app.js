/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game



var scores, activePlayer,roundScore, gamePlaying, lastDice;

init();

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;



document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
    var dice1 = Math.floor((Math.random()*6)+1);
    var dice2 = Math.floor((Math.random()*6)+1);
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    
    if(dice1 !== 1 && dice2 !== 1){
        roundScore += dice1 + dice2
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
    } 
    /*if(dice === 6 && lastDice === 6){
        scores[activePlayer] = 0;
        document.getElementById('score-' + activePlayer).textContent = '0';
        nextPlayer();
    }else if(dice !== 1){
        roundScore += dice
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
    } 
    lastDice = dice;
 
} 
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    var finalScore = document.querySelector('.final-score').value;
    var input;

    if(finalScore){
        input = finalScore;
    } else{
        input = 100;
    }

    if(scores[activePlayer] >= input){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else{
        nextPlayer();
    }
}
})


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    //document.querySelector('.player-0-panel').classList.toggle('active');
    //document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    if(activePlayer === 1){
    document.querySelector('.player-0-panel').classList.remove('active');   
    document.querySelector('.player-1-panel').classList.add('active');
    }else{
        document.querySelector('.player-1-panel').classList.remove('active');   
        document.querySelector('.player-0-panel').classList.add('active');
    }
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

*/




init();
var score = [0,0];
var activePlayer = 0;
var roundScore = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
var gamePlaying;


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else{        
        nextPlayer();
    }
}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    score[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
    console.log('winner')
    if(score[activePlayer] > 100){
        document.getElementById('name-' + activePlayer).textContent = 'winner!'
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('Winner!')
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else{
        nextPlayer();
    }
}
});


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;       
    document.getElementById('current-' + activePlayer).textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    gamePlaying = true;
    score = [0,0]
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('Winner!');
    document.querySelector('.player-1-panel').classList.remove('Winner!');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#name-0').textContent = 'Player-1';
    document.querySelector('#name-1').textContent = 'Player-2';
}