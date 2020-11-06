const once = (fn, fn1) => {
    /* At first, you received a function. Then, you have another function 
    that will run just one time */
    let done = false;
    return (...args) => {
        if (!done) {
            done = true;
            fn(...args);
        } else {
            fn1();
        }
    };
};

// const speak = a => console.log(a, ' speak!!');
// speak('original');
// speak('original');
// speak('original');
// console.log('Test once:');
// const speakOnce = once(speak);
// speakOnce('original');
// speakOnce('original');
// speakOnce('original');