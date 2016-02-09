/**
 * Created by FrankyR on 2/4/2016.
 */

//GLOBAL VARIABLES

var inputStorage = [''];
var storageIndex = 0;


//takes in the buttonNumberValue from the click event
function storeNumber(buttonNumberValue){
    console.log('store number button_value', buttonNumberValue);
    if(!isNaN(inputStorage[storageIndex])) {
        console.log('two numbers in a row');
        //Takes the array inputStorage at the current storageIndex and adds the buttonNumberValue to it
        inputStorage[storageIndex] += buttonNumberValue;
        console.log('input storage: ', inputStorage);
    }
    else {
        storageIndex++;
        inputStorage[storageIndex] = '';
        inputStorage[storageIndex] = buttonNumberValue;
    }
    console.log(inputStorage[storageIndex]);
    //runs the function to update the display
    updateDisplay();
}


//takes in the buttonOperatorValue from the click event
function storeOperator(buttonOperatorValue) {
    console.log('store buttonOperatorValue', buttonOperatorValue);
    if(isNaN(inputStorage[storageIndex])) {
        console.log('Opertator isNaN');
        console.log(inputStorage[storageIndex]);
        inputStorage[storageIndex] = '';
        inputStorage[storageIndex] = buttonOperatorValue;
        console.log(inputStorage[storageIndex]);
    }
    else {
        //increase storage index number by one
        storageIndex++;

        //sets input storage at the current index to empty string otherwise we get undefined for the next addition
        inputStorage[storageIndex] = '';

        //takes the array inputStorage at the current storageIndex and adds the buttonOperatorValue to it
        inputStorage[storageIndex] = buttonOperatorValue;
        console.log('input storage: ', inputStorage);
    }
    //runs the function to update the display
    updateDisplay();
}



//takes info from storeOperator and storeNumber and shows it on the calculators display
function updateDisplay(){

    //sets variable output to empty string where the display text will be stored
    var output = '';

    //this loop iterates through inputStorage array and adds each index value to the output variable
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

//takes the input values from inputStorage, parses them and stores them in variables
function parseMath(){
    //for loop iterates through inputStorage
    for(var i = 0; i < inputStorage.length; i++) {
        var num1;
        var num2;
        var operator;
        console.log('ele ' + parseFloat(inputStorage[i]));
        if(isNaN(inputStorage[i])) {
            operator = inputStorage[i];
            console.log('first conditional '+ operator);
        }
        else if(!isNaN(inputStorage[i]) && num1 == undefined){
            num1 = parseFloat(inputStorage[i]);
            console.log('num1 is: ',num1);
        }
        else if(!isNaN(inputStorage[i]) && num2 == undefined) {
            num2 = parseFloat(inputStorage[i]);
            console.log('num1 is: ',num2);
        }
    }
    if (num1 != undefined && num2 != undefined && operator != undefined) {
        //calls performCalculation function with parameters and stores them in the result variable
        var result = performCalculation(num1,num2,operator);
        inputStorage.unshift(result);
        inputStorage.splice(1,3);
        console.log("This is the result", result);
        //displays the results to the display screen
        $('#display').text(result);
    }

}


function clearAll(){
    inputStorage = [''];
    storageIndex = 0;
    updateDisplay();
}

function specialClear() {
    inputStorage = [''];
    storageIndex = 0;
    updateDisplay();
}






$(document).ready(function(){

    //click handler for the numbers keys, including decimal, on the calculator
    $('.number').click(function(){
        // passes the text from the html to the function storeNumber
       storeNumber($(this).text());
    });

    //click handler for the operator keys on the calculator
    $('.operator').click(function(){
        // passes the text from the html to the function storeOperator
        storeOperator($(this).text());
    });

    //click handler for the equals operator on the calculator, runs the function parseMath
    $('.equals').click(function() {
        for(var i = 0; i < inputStorage.length; i++) {
            parseMath();
        }
    });

    $('.clearContainer div button:first-child').click(function(){
        clearAll();
    });

    $('.clearContainer div button:last-child').click(function(){
        specialClear();
    });
});