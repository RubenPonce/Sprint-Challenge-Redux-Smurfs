1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? 
- concat, filter, map

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- actions define the type of data that you want to pass. Reducers preform the logic on the data that you choose to pass from the actions. and the store manages the exporting and receiving of the data on state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
- Application state is the global state of the entire app, and component state is localized to that component and it's children. Application state is good for small applications and component state is better for larger ones because it is easier to manage.

1.  What is middleware?
- middleware extends the functionality of frameworks that was not available in the vanilla version
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
- redux tuhnk allows us to preform asynchronous operations especially fetching data from a server and then use it in our action creators
1.  Which `react-redux` method links up our `components` with our `redux store`?
the connect method does that by passing state and the action functions to the props on the component
