function printTableofNine(n){
    if (n === 0){
        console.log('Null');
    }
    else{
        let table='';
        for(let i = 1; i <=9; i++){
            table += (9 * i) + ' ';

        }
        console.log(table.trim());
    }
}
const num = 2;
printTableofNine(num);