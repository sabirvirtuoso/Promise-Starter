'use-strict';

var HTTP = require("q-io/http");

HTTP.read(`http://localhost:1337`)
.then((json) => {
    console.log(JSON.parse(json))
})
.then(null, console.error)
.done()