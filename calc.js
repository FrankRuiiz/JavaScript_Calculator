var inputStorage = [''];
var storageIndex = 0;


function storeNumber(num) {
    if(inputStorage[storageIndex] === undefined) {
        inputStorage[storageIndex] = '';
    }
    else {
        inputStorage[storageIndex] += num;
    }

    updateDisplay();
}

function storeOperator(op) {
    if(!isNaN(inputStorage[storageIndex])) {
        storageIndex++;
        inputStorage[storageIndex] = '' + op;
        storageIndex++;
        inputStorage[storageIndex] = '';
    }
    updateDisplay();
}

function doMath() {
    
}





















function updateDisplay() {
    //sets variable output to empty string where the display text will be stored
    var output = '';

    //this loop iterates through inputStorage array and adds each index value to the output variable
    for(var i = 0; i < inputStorage.length; i++) {
        output+=(inputStorage[i]);
    }

    //selects the display class and sets the text to the information stored in the output variable
    $('.output').find('.value').text(output);
}



$(document).ready(function() {
    
    //click handler for adding numbers & decimal
    $('.number').click(function() {
       var $num = $(this).find('span').text();
        storeNumber($num);
    });
    
    //click handler for operators 
    $('.operator').not('.equals').click(function() {
       var $op = $(this).find('span').text();
        storeOperator($op);
    });
    
});
