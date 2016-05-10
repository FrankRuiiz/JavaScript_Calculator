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
    
}


function updateDisplay() {
   inputStorage.forEach(function(value) {
       $('.output').find('.value').text(value);
   });
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
