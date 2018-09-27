module.exports = function getZerosCount(number) {
    let count = 0
    let del = 5
    let division = 2

    while (division > 1) {
        division = Math.floor(number / del)
        del *= 5
        count += division
    }

    return count
}
