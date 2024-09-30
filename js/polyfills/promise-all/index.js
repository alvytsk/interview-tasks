function myPromiseAll (promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        
        promises.forEach((promise, index) => {
            promise
                .then(result => {
                    results[index] = result;
                    if (results.length === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    reject(error);
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

myPromiseAll([promise1, promise2, promise3]).then(console.log, console.log);