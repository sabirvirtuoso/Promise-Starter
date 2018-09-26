'use-strict';

require('es6-promise');

var promise = new Promise((fulfill, reject) => {

    setTimeout(() => {
        reject(new Error('REJECTED!'))
    }, 300)
})

promise.then(null, (error) => {
    console.log(error.message)
})