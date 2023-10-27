var str = "I am very good IT Developer";
count = 0;
var vowelsCap = "AEIOU";

for (let index = 0; index <= str.length - 1; index++) {
  var char = str.charAt(index).toUpperCase();

  if (vowelsCap.includes(char)) {
    count = count + 1;
  }
}
console.log(`Total number of Vowels are: ${count}`);

console.log(`---------Sum of Numbers----------`);
var result = 0;
for (let index = 0; index <= 5; index++) {
  result = result + index * index * index;
}
console.log(`Sum of Numbers: ${result}`);

console.log(`------------------------------`);

function oddPositionedChar(str) {
  for (let index = 0; index < str.length - 1; index++) {
    if (index % 2 != 0 && str.charAt(index) != " ") {
      console.log(str.charAt(index));
    }
  }
}
oddPositionedChar("Hard work always pays back");
console.log(`------ Step 3.2----------`);
oddPositionedChar("Soon I will be UI IT Champ");
