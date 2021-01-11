// Case 1

function processResult(someData) {
    //..
}
// wrong way
fetch("some/remote/url").then(function(data) {
    processResult(data);
});
// correct way
fetch("some/remote/url").then(processResult); // This way you avoid a function calling

// especial situation
fetch("some/remote/url").then(function(data) {
    myObject.store(data);
});

fetch("some/remote/url").then(myObject.store); // doesn't works
fetch("some/remote/url").then(myObject.store.bind(myObject)); // it does works

// Case 1 end