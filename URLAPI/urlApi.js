/**
 * hash
A USVString containing a '#' followed by the fragment identifier of the URL.
host
A USVString containing the domain (that is the hostname) followed by (if a port was specified) a ':' and the port of the URL.
hostname
A USVString containing the domain of the URL.
href
A stringifier that returns a USVString containing the whole URL.
origin Read only
Returns a USVString containing the origin of the URL, that is its scheme, its domain and its port.
password
A USVString containing the password specified before the domain name.
pathname
Is a USVString containing an initial '/' followed by the path of the URL, not including the query string or fragment.
port
A USVString containing the port number of the URL.
protocol
A USVString containing the protocol scheme of the URL, including the final ':'.
search
A USVString indicating the URL's parameter string; if any parameters are provided, this string includes all of them, beginning with the leading ? character.
searchParams Read only
A URLSearchParams object which can be used to access the individual query parameters found in search.
username
A USVString containing the username specified before the domain name.
 */


let address = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL_API");
let host = address.host;
let path = address.pathname;
console.log("host:" +host)
console.log("path:" +path)


let myUsername = "someguy";
let addr = new URL("https://mysite.com/login");
addr.username = myUsername;
console.log(addr)

