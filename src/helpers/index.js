const toCurrency = function (value, unit = 'USD', dir = 'right') {
    if (dir === 'right') {
        return value + ' ' + unit;
    }
    return unit + ' ' + value;
};
export {
    toCurrency
}