function myPromiseAllSettled (promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        
        promises.forEach((promise, index) => {
            promise
                .then(result => {
                    results[index] = {value: result, status: 'fulfilled'}
                    if (results.length === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    results[index] = {value: error, status: 'rejected', reason: error};
                    if (results.length === promises.length) {
                        resolve(results);
                    }
                });
        });
    })
}


const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'one');
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 200, 'two');
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, 'three');
});

myPromiseAllSettled([promise1, promise2, promise3]).then(console.log);