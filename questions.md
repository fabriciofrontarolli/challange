1. What is the difference between Component and PureComponent? give an
example where it might break my app.

A PureComponent has an internal comparison on the props that are passed to it. Internally it looks at the props and does a comparison if they changed or not in order to know if it should re-render.

Components does not implement, so if you need special handling if it should re-render or not it has to be implemented by the developer.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
that?

Context is a "separate" state, different than props. someone might be implementing shouldComponentUpdate just looking at the props that are being passed to be component. However, if a component is part of a context, it might cause unexpected re-renders (side effects) due to be listening to context changes and prop changes.

3. Describe 3 ways to pass information from a component to its PARENT.

Context: It can be passed via context (calling the set function)
Function Handlers: It can be passed by invoking a function handler that was passed to the child, and as argument of the function pass the data.
Hook Set Function: If a parent has a useState() being used, if the parent pass the setter function to the child component, it can be invoked and directly change the state in the parent
Redux: Using regular redux to change the root state.

4. Give 2 ways to prevent components from re-rendering.

**shouldComponentUpdate**: You can use shouldComponentUpdate to set a boolean flag if a component should render or not, 
**React.memo**: React.memo uses internally a shouldComponentUpdate performing a shallow comparison on the props to prevent re-render

5. What is a fragment and why do we need it? Give an example where it might
break my app.

React only accepts one single child per parent. Fragment is a component use can use in React when we need to wrap multiple child content but we don't necessarily want to use a visual parent (like a div, span or section).

6. Give 3 examples of the HOC pattern.

Higher Order Components are components which functionalities are augmented by a function. By receiving a component as function, we can wrap that component and add extra behavior to it. Examples of HoC commonly used in React are

- Redux: mapStateToProps - Adding global state as props to the child component.
- React Router: useRouter - Adding props and functions to the component so the user can navigate and see route informations.
- Custom: Any custom functionality we want to add as part of our business rules, where we want to augment the component funcionality.


7. what's the difference in handling exceptions in promises, callbacks and
async...await.

In *Promises* we use the reject handler of the promise to inspect what error was thrown in the asyncronous execution.

In *Async/Await* we use regular try/catch to handle exceptions

In *callbacks* are normally used error first callback, as vastly used in Node, by checking the first argument returned from the callback in order to know if an error is defined or undefined.


8. How many arguments does setState take and why is it async.

It has 2 arguments

previousState: So we can compare what were the previous state looking like
props: the component props


9. List the steps needed to migrate a Class to Function Component.

**constructor**: anything defined in constructor can be set directly inside the functions. If any state is being declared we switch to use hooks.

**lifecycle**: We should switch any lifecycle methods in class components to use useEffect hooks.

**render**: Whatever is being returned from the render function, we just set it as return of the function, so it will get rendered in the UI.


10. List a few ways styles can be used with components.

**Imported Directly**: We can directly import css files, so they will be globally added to the page/components. The downside is that css names can collide.

**Css Modules**: We can use CSS Modules to scope styles within our pages/components. The Styles will be available as objects in the code so we can use them as classNames.

**Styled Components**: We can define styles using styled components. With this the styles will be able to be dynamic looking at props and will be scoped.

**3rd Part**: We can import 3rd part styles (Bootstrap, Tailwind) and use the classes these lib provide to us.

11. How to render an HTML string coming from the server.

Already did it before, but I don't remember now (without consulting). There might be a lib for it. In real life everyone will probably lookup :D
