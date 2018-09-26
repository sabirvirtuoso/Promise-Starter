'use-strict';

var HTTP = require("q-io/http");

HTTP.read(`http://localhost:7000/`)
.then((id) => {
    return HTTP.read(`http://localhost:7001/${id}`)
})
.then((json) => {
    console.log(JSON.parse(json))
})
.then(null, console.error)
.done()