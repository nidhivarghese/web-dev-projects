const winningScoreSelector = document.querySelector('#winningScoreSelect');
const resetButton = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let playing = true;

let player1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1score')
}

let player2 = { 
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2score')
}

function reset(){
    playing = true;

    player1.score = 0;
    player2.score = 0;

    player1.display.textContent = 0;
    player2.display.textContent = 0;

    player1.display.classList.remove('has-text-success', 'has-text-danger');
    player2.display.classList.remove('has-text-success', 'has-text-danger');
    
    player1.button.disabled = false;
    player2.button.disabled = false;
}

function updateScores(player, opponent){
    console.log(player.score, opponent.score);
    if(playing){
        player.score += 1;
        if (player.score === winningScore){
            playing = false;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


winningScoreSelector.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
});

player1.button.addEventListener('click', function(){
    updateScores(player1, player2)
});

player2.button.addEventListener('click', function(){
    updateScores(player2, player1)
});


resetButton.addEventListener('click', reset);