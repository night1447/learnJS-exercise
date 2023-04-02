Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
};

function func() {
    alert("Hello!");
}

func.defer(1000);
