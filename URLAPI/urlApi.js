let address = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL_API");
let host = address.host;
let path = address.pathname;


let myUsername = "someguy";
let addr = new URL("https://mysite.com/login");
addr.username = myUsername;
console.log(addr)