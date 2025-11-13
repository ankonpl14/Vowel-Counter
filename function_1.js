function countvowels(str) {
    let count = 0;
    for (const char of str) {
        if ( 
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u" 
        ) {
            count++;
        }
    }
    return count;
}

let num = countvowels("Ankon");
console.log(num); 