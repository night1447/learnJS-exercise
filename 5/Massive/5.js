





const array = [1, -2, 3, 4, -9, 6];
const getMaxSubSum = (arr = []) => {
    let maxSum = 0;
    let sum = 0;
    arr.forEach(item => {
        sum += item;
        if (sum > 0 && maxSum < sum) {
            maxSum = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    })
    return maxSum;
}
console.log(getMaxSubSum(array));