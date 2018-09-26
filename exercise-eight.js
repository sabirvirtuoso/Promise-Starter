'use-strict';

require('es6-promise');

const attachTitle = (name) => `DR. ${name}`

var promise = Promise.resolve('MANHATTAN')

promise.then(attachTitle).then(console.log)