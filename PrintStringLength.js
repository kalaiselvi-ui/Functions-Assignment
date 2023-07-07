function removingWhiteSpaces(str){
    var whitespaceremove = str.replace(/\s/g, '');
    const length = whitespaceremove.length;
    console.log(length);
}

const string = "hai kalai"
removingWhiteSpaces(string);
