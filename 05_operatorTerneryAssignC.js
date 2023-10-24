

function maleMarriageEligibility(gender, age, boyName){
    var  result = gender=='Male' && age>=21
    ?`Hey ${boyName} you are eligible for marriage, congrats!`
    :`Her ${boyName} you are not eligible for marriage, try next time!`;
    return(result);

}
     var result=  maleMarriageEligibility("Male", "25", "Billgates");
     console.log(result);
     var result = maleMarriageEligibility("Male","17","Stew Jobs");
     console.log(result);


     function femaleMarriageEligibility(gender,age,girlName){
     var result = gender=='Female' && age>=18
     ?`Hey ${girlName} you are eligible for marriage,congrats!`
     :`Hey ${girlName} you are not eligible for marriage, try next time!`;
      return(result);

     }
         var result= femaleMarriageEligibility("Female", "16","Jennifer")
         console.log(result);
         var result = femaleMarriageEligibility("Female","27","Malinda Gates")
         console.log(result);