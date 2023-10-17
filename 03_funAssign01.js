
console.log("====== Function type:function with no arguments and no return type ===== ");

 function myFavoriteGames(){
        console.log("Favorite Game: Cricket");
         console.log("Player Name: MSD");
         console.log("Number: 7");
         console.log("Role: Captain");
         console.log("Shot: Helicopter");

 }
 myFavoriteGames();

 function personalDetails(firstName,lastName,collegeName){
        console.log("First Name: Sanket");
        console.log("Last Name: Kadam");
         console.log("college Name: Tkiet");

 }
 personalDetails();


 function swap(valueOne,valueTwo){
      console.log("Before Swap:", valueOne,valueTwo); 

      var temp = valueOne;

      valueOne = valueTwo;

      valueTwo = temp;
       
      console.log("After Swap:", valueOne,valueTwo);

 }

     swap("Virat","Anushka");
     swap("1000","2000");


     function addThreeValues(num1,num2,num3){
        var result = num1 + num2 + num3;
        return result;

     }
     var addThreeValues = addThreeValues(10.43,600,40);
     console.log('num is 10.43,600,40 and its addition', addThreeValues);

     