'use-strict';

require('es6-promise');

const parsePromised = (json) => {
    try {
        JSON.parse(json)

        return Promise.resolve()
    } catch (error) {
        return Promise.reject(error.message)
    } 
}

parsePromised(process.argv[2]).then(null, console.log)