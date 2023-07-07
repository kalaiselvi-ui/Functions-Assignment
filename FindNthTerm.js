function findNthTerm(N){
    if(N <0 && N === 0 ){
        return 'Error';
    }
    else{
        return N * N;
    }
    
}
 var NthTerm = 15;

 console.log(findNthTerm(NthTerm), "nthTerm is");