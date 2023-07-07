function findCircleCircumference(radius){
    if(isNaN(radius) || radius <0 ){
        return "Error";
    }else{
        var circumference = 2 * 3.14 * radius;
        return circumference.toFixed(2);    
    }
   }

   var r = 3;
   var circumferenceResult = findCircleCircumference(r);
   console.log("The circle circumference is", circumferenceResult);
