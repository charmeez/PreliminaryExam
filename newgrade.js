
const util = require('./app');

var grade = parseInt(grade);

deduct(grade%2,3);
deduct(grade,2);

  
   function deduct(grade,decrement){
    
    var failed = grade-decrement;
    
    if (failed<75)
    console.log('Your new grade is'+ failed);
   }
    function deduct(grade,increment){
    
    var passed = grade-increment;
    
    if (passed >=75)
    console.log('Your new grade is'+ passed);
   }




