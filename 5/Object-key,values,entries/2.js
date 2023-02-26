
let user = {
    name: 'John',
    age: 30
};
const getCountFields = (object = {}) => Object.keys(object).length;

getCountFields(user);