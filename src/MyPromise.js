/*
-- This is an implementation of Promise polyfill.

-- This is still just a basic prototype and many functionalities need to be added:
    -- then() method should take two arguments, both fulfilledCallback and failedCallback.
    -- resolve (and reject) methods should pass appropriate data( or error) to the callback functions in then and catch.
    -- The case where multiple then methods are attached to the same promise needs to be handled well. All the callbacks should be called.
       Like, what happens in this case :
        let pr =  new MyPromise(executor);
        pr.then(callback1)
        pr.then(callback2)
       Both the callbacks should get called.
        
*/

        

export default function MyPromise (executor) {
    let isresolve = 0;
    let isreject = 0;
    let onresolve;
    let onreject;
    let thendata;
    let catchdata;
    
    this.then = function(fulfilledCallback) {
        onresolve = fulfilledCallback;
        if (isresolve) {
            onresolve(thendata);
        }
        return this;
    }

    this.catch = function(failedCallback) {
        onreject = failedCallback;
        if(isreject) {
            onreject(catchdata);
        }
        return this;
    }

    function resolve(data) {
        if(isresolve || isreject) {
            return;
        }
        isresolve = 1;
        thendata = data;
        if(onresolve) {
            onresolve(thendata);
        }
    }

    function reject(err) {
        if(isresolve || isreject) {
            return;
        }
        isreject = 1;
        catchdata = err;
        if(onreject) {
            onreject(catchdata);
        }
    }

    executor(resolve, reject);
}