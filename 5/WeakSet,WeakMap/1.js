//Хранение отметок "не прочитано"
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

const readMessages = new WeakSet();

readMessages.add(messages[0]);
messages.shift();