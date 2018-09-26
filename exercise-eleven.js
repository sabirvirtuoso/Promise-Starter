'use-strict';

const all = (promiseOne, promiseTwo) => {
    return new Promise((fulfill, reject) => {
        var counter = 0;
        var out = [];

        promiseOne.then((value) => {
            out[0] = value;
            counter++;

            if (counter >= 2) {
                fulfill(out)
            }
        })

        promiseTwo.then((value) => {
            out[1] = value;
            counter++;

            if (counter >= 2) {
                fulfill(out)
            }
        })
    })
}

all(getPromise1(), getPromise2()).then(console.log)