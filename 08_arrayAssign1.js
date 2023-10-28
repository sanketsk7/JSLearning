
let arrayNumbers = [22,11,44,33,55,77];
console.log(arrayNumbers);
let sum = 0;
for (let index = 0; index<arrayNumbers.length; index++) {
   
    if (index%2==0) {
        const element = arrayNumbers[index];
        console.log(element);
        
    }
    
    
}
  console.log(`--------sum of numbers-----------`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum= element +sum;
    console.log(sum);
    
}