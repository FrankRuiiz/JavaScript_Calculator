/**
 * Created by FrankyR on 2/4/2016.
 */

//GLOBAL VARIABLES

var inputStorage = [''];
var storageIndex = 0;



function storeNumber(buttonNumberValue){ //takes in the buttonValue from the click event $(this).text
    console.log('store number button_value', buttonNumberValue);
    inputStorage[storageIndex]+=buttonNumberValue;
    console.log('input storage: ', inputStorage);
    updateDisplay();
}

function storeOperator(buttonOperatorValue) {
    console.log('store buttonOperatorValue', buttonOperatorValue);
    storageIndex++;
    inputStorage[storageIndex] = '';
    inputStorage[storageIndex]+=buttonOperatorValue;
    storageIndex++;
    inputStorage[storageIndex] = '';
    updateDisplay();
}


function updateDisplay(){
    var output = '';
    for(var i = 0; i < inputStorage.length; i++) {
        output+=(inputStorage[i]);
    }
    $('#display').text(output);
}

function







$(document).ready(function(){

    //click handler for the numbers keys, including decimal, on the calculator
    $('.number').click(function(){
       //console.log('this is', $(this).text());
       storeNumber($(this).text());
    });

    //click handler for the operator keys, including equals on the calculator
    $('.operator').click(function(){
        storeOperator($(this).text());
    });


});