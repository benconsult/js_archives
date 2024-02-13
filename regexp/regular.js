//Period + any character one or more times
let pattern = /[a].+/g
const txt = 'Apple and banana are fruits'
let output = txt.match(pattern)
console.log(output)