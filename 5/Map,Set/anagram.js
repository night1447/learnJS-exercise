// Отфильтруйте анаграммы
const aclean = (array = []) => {
    const map = new Map();
    for (let key of array) {
        const item = key.toLowerCase().split('').sort().join('');
        map.set(item, key);
    }
    return Array.from(map.values());
}
console.log(aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]));