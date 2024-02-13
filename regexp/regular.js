//Period - any character except new linw, a and any other character except new line
let pattern = /[a].+/g
const txt = 'Apple and banana are fruits'
let output = txt.match(pattern)
console.log(output)