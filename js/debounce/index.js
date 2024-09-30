const fetchUrl = function (url) {
    console.log(this);
    console.log(`fetching ${url} ${this.name} ...`);
}

const user = {
    name: 'John',
}

function debounce(cb, delay = 1000) {
    let timer;

    return (...args) => {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

const fetching = debounce(fetchUrl.bind(user), 300)

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);