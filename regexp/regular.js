/*takes 2 params - pattern(text) and flag (optional)
RegExp constructor or usinng 2 //
gimsuy


//using RegExp object
let pattern  = 'love'
let flag = 'gi'
let regExp = new RegExp(pattern,flag)

//without regext constructor

let regexp = /love/gi

**/

//RegExp method
//test()  - without param
let str = 'coding is my passion'
let pattern = /my/
let output = pattern.test(str)
console.log(output)


