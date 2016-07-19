

const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
  
});

 
rl.question('Enter your grade? ', (lgrade) => {
var grade = parseInt(lgrade);

deduct(lgrade%2,3);
deduct(lgrade,2);
 rl.close();

 });
module.exports = {
    grade :lgrade
   
};