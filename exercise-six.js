'use-strict';

require('es6-promise');

var promiseSuccess = Promise.resolve('FULFILLED')
promiseSuccess.then(console.log)

var promiseFailure = Promise.reject(new Error('REJECTED'))
promiseFailure.catch(error => console.log(error.message))