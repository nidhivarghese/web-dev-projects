let displayValue = '';

let allButton = document.getElementsByClassName('btn');


for(let i in allButton){

    allButton[i].addEventListener('click', function(){
        
        let clickedValue = this.innerHTML;

        if( clickedValue === '=' ){
        
            let evaluateValue =  displayValue.replace(/\x/g, '*');
            let result = eval(evaluateValue);

            displayValue = result+'';

            document.getElementById('resultArea').innerHTML = result;
        
        }else if(clickedValue === 'AC'){
        
            displayValue = '';
            document.getElementById('operationArea').innerHTML = '';
            document.getElementById('resultArea').innerHTML = '';
        
        }else if(clickedValue === '%'){

            let evaluateValue =  displayValue.replace(/\x/g, '*');
            let result = (eval(evaluateValue)/100);
            displayValue = String(result);
            document.getElementById('resultArea').innerHTML = result;

        }else if( clickedValue.includes('fa-arrow-left') ){
        
            displayValue = displayValue.substr(0, displayValue.length-1);
            document.getElementById('operationArea').innerHTML = displayValue;
        
        }else{
        
            displayValue = displayValue.concat(clickedValue);
            document.getElementById('operationArea').innerHTML = displayValue;
        
        }

    }, false);
}