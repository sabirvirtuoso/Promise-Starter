'use-strict';

require('es6-promise');

const alwaysThrows = () => {
    throw new Error('OH NOES')
}

const onReject = (error) => {
    console.log(error.message)
}

const iterate = (num) => {
    console.log(num)

    return num + 1
}

var promise = Promise.resolve(1)

promise
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(onReject)
