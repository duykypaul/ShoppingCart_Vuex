const toCurrency = function (value, unit = 'USD', dir = 'right') {
    if (dir === 'right') {
        return value + ' ' + unit;
    }
    return unit + ' ' + value;
};
const validateQuantity = function (value){
    // value is '' -> return 1
    // value <= 0 -> return 2;
    // value is string -> return 3;
    // value is valid ->return 0
    if(value.length == 0) {
        return 1;
    }
    let number = parseInt(value);
    if(!isFinite(value)){
        return 3;
    }
    return number >= 1 ? 0 : 2;
}
export {
    toCurrency,
    validateQuantity
}