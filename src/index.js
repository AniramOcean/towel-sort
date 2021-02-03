module.exports = function towelSort (matrix) {
    let arr = [];
    if (matrix && matrix.length > 0) {
        matrix.forEach((item, index) => index % 2 !== 0 ? arr.push(item.reverse()) : arr.push(item))
    }
    return arr.flat();
}
