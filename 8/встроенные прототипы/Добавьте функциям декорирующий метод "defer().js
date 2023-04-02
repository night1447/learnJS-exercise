
Function.prototype.defer = function(ms) {
    let context = this;
    return function(...args) {
        setTimeout(() => context.apply(this, args), ms);
    }
};
function f(first, second) {
    alert( first + second );
}

f.defer(1000)(1, 2);
