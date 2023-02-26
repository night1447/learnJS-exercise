let arr = ["HTML", "JavaScript", "CSS"];
const copySorted = (array = []) => {
    let result = [...array];
    return result.sort();
};
let sorted = copySorted(arr);
console.log(sorted);
console.log(arr);
