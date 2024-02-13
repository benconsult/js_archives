//square bracket - g global
//without g, print the index of the match pattern. If g, picks all the match text in the word
const txt = 'Milk is very good for the body. Dringing milk is not too bad unless you dring Milk too much'
let pattern = /[Mm]ilk/g
let output = txt.match(pattern)

console.log(output)