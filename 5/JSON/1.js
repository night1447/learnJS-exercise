//Преобразуйте объект в JSON, а затем обратно в обычный объект
let user = {
    name: "Василий Иванович",
    age: 35
};
const objectToJSON = JSON.stringify(user);
const json = JSON.parse(objectToJSON);
