

function  stringHandsOn(){
    var givenStr =  "    Hey you are doing good, keep it up    ";

               console.log("-----Step 1----------"); 

    console.log(`1.Given string is:${givenStr}`) ;

          console.log("-----Step 2----------");

    console.log(`2.String length is:${givenStr.length}`);

    console.log("-----Step 3 and 4----------");

    var lengthBeforeTrim = givenStr.length;
    console.log("Before trim length:", givenStr.length);
    var result = givenStr.trim();
    console.log("After trim length:",result);
     var lengthAfterTrim = result.length;
     var result = lengthBeforeTrim - lengthAfterTrim;
     console.log("Remove Extra spaces are: ", result);

     console.log("-----Step 5----------");

     var lastIndexChar = givenStr.charAt(givenStr.length- 5 );
     console.log("Last index char:", lastIndexChar);

     var lastIndexChar = givenStr.charAt(givenStr.length- 38);
     console.log("First index char:", lastIndexChar);

     console.log("-----Step 6----------");

     var words =  givenStr.split(" ");
     console.log("Total words:",result);

            console.log("-----Step 7----------");
     var result = givenStr.search("good");
     console.log(result);
     
         console.log("-----Step 8----------");

         var givenStr =   "Hey you are doing good, keep it up";
         var result = givenStr.slice(22);
         console.log(result);

        
         console.log("-----Step 9----------");
         var result = givenStr.trim();
         var value = result.endsWith('up');
         console.log(value);
           
            
         console.log("-----Step 10----------");
         var result = givenStr.trim();
         var value = result.startsWith('Hey');
         console.log(value);



     


}
stringHandsOn();