
//@ strings match with |
const txt = 'Milk and Bannana are very good for the body. Dringing milk and eating bannana is not too bad unless you dring Milk too much'
let pattern = /[Mm]ilk|[Bb]annana/g
let output = txt.match(pattern)

console.log(output)