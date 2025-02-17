var playing = false;
var score = 0;
var action;
var interval = 1000;
var timer;
var correctAnswer;

document.getElementById('startReset').onclick = function(){
    if (playing){
        location.reload();
    }else{
        score = 0;
        playing = true;
        timer = 60;

        showElement('timer')
        changeElement('score', score);
        changeElement('timerValue', timer);
        changeElement('startReset', 'Reset Game');
        hideElement('gameOver');

        // Starting timer
        startCountdown();

        // Display Question
        generateQA();
    }
    
}


document.getElementById("option1").onclick = function(){checkAnswer(this.innerHTML)}
document.getElementById("option2").onclick = function(){checkAnswer(this.innerHTML)}
document.getElementById("option3").onclick = function(){checkAnswer(this.innerHTML)}
document.getElementById("option4").onclick = function(){checkAnswer(this.innerHTML)}

function checkAnswer(selected){
    if(playing){
        if(selected == correctAnswer){
            score ++;
            changeElement('score', score);
            hideElement('wrong');
            showElement('correct');
            setTimeout(function(){
                hideElement('correct');
            }, 1000)
            generateQA();
        }else{
            hideElement('correct');
            showElement('wrong');
            setTimeout(function(){
                hideElement('wrong')
            }, 1000)
        }
    }
}

function startCountdown(){
    action = setInterval(() => {
        timer -= 1
        changeElement('timerValue', timer)
        if (timer == 0){
           stopCountdown();
           changeElement('finalScore', score)
           showElement('gameOver');
           hideElement('timer');
           hideElement('correct');
           hideElement('wrong');
           playing = false;
           changeElement('startReset', "Start Game")
        }
    }, interval);
}

function stopCountdown(){
    clearInterval(action)
}


function hideElement(Id){
    document.getElementById(Id).style.display = 'none';
}

function showElement(Id){
    document.getElementById(Id).style.display = 'block';
}


function changeElement(Id, text){
    document.getElementById(Id).innerHTML = text;
}


function generateQA(){
    var x = Math.round(10 * Math.random());
    var y = Math.round(10 * Math.random());
    var operation = ['+', '-', 'x', '/'];

    var operationIndex = Math.round(3 * Math.random());

    var question = x + operation[operationIndex] + y;

    if(x<y){
        question = y + operation[operationIndex] + x;
    }else if(operation[operationIndex] == '/'){
        if(x % y != 0){
            x = x + (y - x % y)
            question = x + operation[operationIndex] + y;
        }
    }

    correctAnswer = parseInt(eval(question.replace('x', '*').replace('/', '/')));

    // console.log(question)
    // console.log(correctAnswer)

    changeElement('question', question)

    var correctPosition = 1 + Math.round(3 * Math.random())


    changeElement("option"+correctPosition, correctAnswer)
    
    var optionList = [correctAnswer]

    for(i=1; i<=4; i++){
        if(i != correctPosition){
            do{
                var wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()))
            }while(optionList.indexOf(wrongAnswer) > -1)
            
            changeElement('option'+i, wrongAnswer);
            optionList.push(wrongAnswer);
        }
    }
}