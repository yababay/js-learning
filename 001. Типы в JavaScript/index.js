module.exports = {checkNumber}

function checkNumber(n){
    return typeof n === 'number'
}

// TODO: Разобраться с мудулями
// TODO: Дописать функции для всех типов данных (7 типов)

function types(n){
    return typeof n
}

console.log(types('string')) // string
console.log(types(10)) //number
console.log(types(types)) // function
console.log(types({})) // object
let x 
console.log(types(x)) // undefined
x = true
console.log(types(x)) // boolean
x = !!"" // значение x = false
console.log(x)
x = Symbol("id")
console.log(types(x)) // symbol

