function checkFunction(fn){
    return typeof fn === 'function'
}

function checkArray(arr){
    return Array.isArray(arr)
}

function checkObject(obj){
    return typeof obj === 'object'
}

function checkNumber(n){
    return typeof n === 'number'
}

function getType(n){
    return typeof n
}

module.exports = {checkNumber, getType, checkObject, checkArray, checkFunction}
