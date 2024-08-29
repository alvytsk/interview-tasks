class PubSub {
    constructor() {
        this.events = {};
    }

    subscribe(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }

    unsubscribe(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }

    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => {
                callback(data);
            });
        }
    }
}


const pubSub = new PubSub();

const log1 = data => console.log('1', data)
const log2 = data => console.log('2', data)
const log3 = data => console.log('3', data)

pubSub.subscribe('13', log1);
pubSub.subscribe('13', log3);
pubSub.subscribe('2', log2);
pubSub.emit('13', 'first');
pubSub.emit('2', 'second');

//should output 
//1 first
//3 first
//2 second