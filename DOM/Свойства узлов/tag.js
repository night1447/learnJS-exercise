let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

console.log(body.firstChild.textContent); // что выведет? --> body
