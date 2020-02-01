const toCurrency = function (value, unit = 'USD', dir = 'right') {
    if (dir === 'right') {
        return value + ' ' + unit;
    }
    return unit + ' ' + value;
};
const validateQuantity = function (value){
    let number = parseInt(value);
    if(number == value && !isNaN(number)){
        return number >= 1;
    }
    return false;
}
export {
    toCurrency,
    validateQuantity
}