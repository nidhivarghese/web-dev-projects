document.getElementById('tip_percent').oninput = function(){
    document.getElementById('tip_percent_display').innerHTML = this.value+'%';
}


function calculateTip(){
console.log(document.getElementById('bill_amount'));
let bill_amount = document.getElementById('bill_amount').value;
let tip_percent = document.getElementById('tip_percent').value;
let no_of_people = document.getElementById('no_of_people').value;

let total_amount = bill_amount*(1+(tip_percent/100));
let per_person_amount = 0.00;

if(no_of_people != 0){
per_person_amount = total_amount/no_of_people;
per_person_amount = per_person_amount.toFixed(2);
}

total_amount = total_amount.toFixed(2);

document.getElementById('total_amount').innerHTML = '$'+total_amount;
document.getElementById('per_person_amount').innerHTML = '$'+per_person_amount;

}

function clearData(){
document.getElementById('bill_amount').value = 0.00;
document.getElementById('tip_percent').value = 20;
document.getElementById('no_of_people').value = 0;
document.getElementById('tip_percent_display').innerHTML = '20%';

document.getElementById('total_amount').innerHTML = '$0.00';
document.getElementById('per_person_amount').innerHTML = '$0.00';
}