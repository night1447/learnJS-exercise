//user
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let human = makeUser();

console.log(human.ref.name);//undefined
