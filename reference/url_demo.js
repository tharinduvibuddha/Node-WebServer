const URL = require('url').URL;

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active%27');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//Hostname
console.log(myUrl.hostname);

//PathName

console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Params Object
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`));