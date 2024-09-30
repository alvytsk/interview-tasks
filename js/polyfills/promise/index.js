function MyPromise(executor) {
    let onResolve;
    let onReject;
    let isFullfilled = false;
    let isRejected = false;
    let isCbCalled = false; //indicates callback has been called
    let value;
    let error;

    function resolve(val) {
        isFullfilled = true;
        value = val;
        console.log(value);
        if(typeof onResolve === 'function' && !isCbCalled) {
            onResolve(value);
            isCbCalled = true;
            console.log(this);
        }
    }

    function reject(err) {
        isRejected = true;
        error = err;
        if(typeof onReject === 'function' && !isCbCalled) {
            onReject(error);
            isCbCalled = true;
        }
    }

    this.then = function (thenHandler) {
        console.log(thenHandler);
        onResolve = thenHandler;
        if(!isCbCalled && isFullfilled) {
            onResolve(value);
            isCbCalled = true;
        }
        return this;
    }
    this.catch = function (catchHandler) {
        console.log('catch', this);
        onReject = catchHandler;
        if(!isCbCalled && isRejected) {
            onReject(error);
            isCbCalled = true;
        }
        return this;
    }

    

    executor(resolve, reject);
}

let myPromise = new MyPromise(function executor(resolve, reject) {
    reject(10);
});

myPromise.then(console.log).catch(console.log)