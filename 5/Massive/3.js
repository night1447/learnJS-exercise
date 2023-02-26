let arr = ["a", "b"];

arr.push(function () {
    console.log(this)
});

arr[2](); // данный массив [ 'a', 'b', function]