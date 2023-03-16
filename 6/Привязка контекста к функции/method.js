"use strict";

function f() {
    console.log(this); // window,object else use strict -> null
}

let user = {
    g: f.bind(null)
};

user.g();