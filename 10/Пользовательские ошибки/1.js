class ValidationError extends SyntaxError {
    constructor(message) {
        super(message)
        this.name = 'ValidationError'
    }
}


let err = new ValidationError("ошибка форматирования");

console.log(err.message);
console.log(err.name);
console.log(err.stack);

console.log(err instanceof ValidationError);
console.log(err instanceof SyntaxError);