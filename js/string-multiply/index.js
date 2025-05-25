//"abc".multiply(5)  ---> abcabcabcabc

String.prototype.multiply = function(n) {
    let result = "";
    for(let i = 0; i < n; i++) {
        result += this;
    }
    return result;
    
    
    //or just
    // return this.repeat(n);
}


console.log("abc".multiply(3))
