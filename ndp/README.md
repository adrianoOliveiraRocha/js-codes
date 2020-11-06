Simply rules to avoid a callback hell:

1 - You must exit as soon as possible. Use return , continue , or break , depending
on the context, to immediately exit the current statement instead of writing (and
nesting) complete if...else statements. This will help keep our code shallow.

2 - You need to create named functions for callbacks, keeping them out of closures
and passing intermediate results as arguments. Naming our functions will also
make them look better in stack traces.

3 - You need to modularize the code. Split the code into smaller, reusable functions
whenever it's possible.

Where do you stop?
Executing a known set of tasks in sequence, page 81

Patterns:

    We guarantee that a callback is invoked asynchronously by deferring its
    execution using process.nextTick().

    