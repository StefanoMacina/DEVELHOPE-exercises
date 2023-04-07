# Exercise Promise chaining

x Write a first `promise` that takes as parameter the variable `isLogged` found in the `exercise.js` file.

x If the variable is true, then we return a random number from the resolve, otherwise we dispatch an error.

x We write a second `promise` that takes a variable of type number as a parameter. 

x If the input parameter is greater than 0.5, in the resolve we must return the following data: `{name: "John", age: 24}`, otherwise we must dispatch an `error`.

x Once this is done, try to chain the promises to eventually return the final object `{name: "John", age: 24}`

Tips:

- If in doubt, watch the lesson
- To understand how they work, you can try adding `setTimeout` to the promise functions
