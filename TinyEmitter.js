
class TinyEmitter {
    constructor() {
        this.listenerObjects = [];
    }

    on = (eventName, listener) => {
        this.listenerObjects.push({
            eventName: eventName,
            listener: listener
        })
    }
    off = (eventName, listener) => {
        if (!eventName) {
            return;
        }
        if (!listener) {
            this.listenerObjects = this.listenerObjects.filter((obj) => {
                return obj.eventName !== eventName;
            });
        } else {
            this.listenerObjects = this.listenerObjects.filter((obj) => {
                return !(obj.eventName === eventName && obj.listener === listener);
            });
        }
    }

    clear = () => {
        this.listenerObjects = [];
    }

    emit = (eventName, ...args) => {
        const listenerObjects = this.listenerObjects;
        const resultArray = [];
        for (let i = 0; i < listenerObjects.length; i++) {
            const listenerObject = listenerObjects[i];
            if (listenerObject.eventName === eventName) {
                const func = listenerObject.listener;
                let res;
                if (typeof func === "function") {
                    res = func(...args);
                }
                resultArray.push(res);
            }
        }
        return resultArray;
    }
}


export {
    TinyEmitter
}
