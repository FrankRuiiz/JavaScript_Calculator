/**
 * Created by FrankyR on 2/4/2016.
 */

//GLOBAL VARIABLES

var inputStorage = [''];
var storageIndex = 0;


//takes in the buttonNumberValue from the click event
function storeNumber(buttonNumberValue){
    console.log('store number button_value', buttonNumberValue);

    //Takes the array inputStorage at the current storageIndex and adds the buttonNumberValue to it
    inputStorage[storageIndex]+=buttonNumberValue;
    console.log('input storage: ', inputStorage);

    //runs the function to update the display
    updateDisplay();
}


//takes in the buttonOperatorValue from the click event
function storeOperator(buttonOperatorValue) {
    console.log('store buttonOperatorValue', buttonOperatorValue);

    //increase storage index number by one
    storageIndex++;

    //sets input storage at the current index to empty string otherwise we get undefined for the next addition
    inputStorage[storageIndex] = '';

    //takes the array inputStorage at the current storageIndex and adds the buttonOperatorValue to it
    inputStorage[storageIndex]+=buttonOperatorValue;

    //increase storage index number by one
    storageIndex++;

    //sets input storage at the current index to empty string otherwise we get undefined for the next addition
    inputStorage[storageIndex] = '';

    //runs the function to update the display
    updateDisplay();

}

//takes info from storeOperator and storeNumber and shows it on the calculators display
function updateDisplay(){

    //ses variable output to empty string where the display text will be stored
    var output = '';

    //this loop iterates through inputStorage array and adds each index value to the ouput variable
    for(var i = 0; i < inputStorage.length; i++) {
        output+=(inputStorage[i]);
    }

    //selects the display class and sets the text to the information stored in the output variable
    $('#display').text(output);
}

function performCalculation(num1,num2,operator){
    var result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    return result;

}

function parseMath(){
    var num1;
    var num2;
    var operator;
    inputStorage.forEach(function(ele) {
        console.log('ele ' + parseInt(ele));
        if(isNaN(ele)) {
           console.log('first conditional '+ ele);
            operator = ele;
        }
        else if(!isNaN(ele) && num1 == undefined){
            num1 = parseFloat(ele);
            console.log(num1);
        }
        else if(!isNaN(ele) && num2 == undefined) {
            num2 = parseFloat(ele);
            console.log(num2);
        }
    });
    var result = performCalculation(num1,num2,operator);
    console.log("This is the result", result);
    $('#display').text(result);
}



$(document).ready(function(){

    //click handler for the numbers keys, including decimal, on the calculator
    $('.number').click(function(){
        // passes the text from the dom to the function storeNumber
       storeNumber($(this).text());
    });

    //click handler for the operator keys, including equals on the calculator
    $('.operator').click(function(){
        // passes the text from the dom to the function storeOperator
        storeOperator($(this).text());
    });

    $('.equals').click(function() {
        parseMath();
    });
});