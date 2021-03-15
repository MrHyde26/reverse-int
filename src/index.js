module.exports = function reverse (n) {
    let result = String(Math.abs(n));
    return result.split('').reverse().join('');   
}
