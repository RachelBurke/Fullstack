# Part 1 A: Introduction to React

- The [React](https://reactjs.org/) Library - used to make `React` applications
- Easy starter method - `create-react-app` tool

```
$ npx create-react-app part1
$ cd part1
$ npm start
```

- default starts on localhost port 3000 (http://localhost:3000)
- uses Chrome
- code for application in `/src`

**index.js:**

```
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <div>
    <p>Hello world</p>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
```

## Component

Breaking down `index.js`:

```
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  console.log('Hello from component')

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
```

- defines a `React Component` with the name **App**
- **App** is a constant variable with a JavaScript function that returns a `div` with some `p` containing `Hello world`
- uses JS version [ECMAScript6](http://es6-features.org/#Constants) (ES6)
- [arrow functions](http://es6-features.org/#Constants) are a part of ES6
- the function that defines **App** can contain:
  - any JS code (ex. console)
  - dynamic content (ex. Date, math)

```
ReactDOM.render(<App />, document.getElementById('root'))
```

- renders the contents of **App** into the _div_ element in _public/index.html_ with the _id_ value _root_

## JSX

- React components only **seem** to return HTML markup
- layout of React components is mostly written using [JSX](layout of React components is mostly written using JSX)
  - JSX looks like HTML but is really just a way to handle JS
  - JSX returned from React components is compiled into JS
- compiled using [Babel](https://babeljs.io/repl/)
- is possible to not use JSX and write with "pure JavaScript" **(not advised)**
- JSX is like HTML w/ the distinction that with JSX dynamic content can be embedded by writing JS within curly braces
- all tags must be enclosed (`<br>` to `<br />`)

## Multiple Components

```
const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

- new component **Hello** and used it inside the component **App**
- **Hello** can be used multiple times and returns the same code multiple times
- **\*Reusable Components** are a core part of React's philosophy
- **\*Root Component** is another strong React convention (top of the component tree for an application)

## Props: Passing Data to Components

- data can be passed to components using [props](https://reactjs.org/docs/components-and-props.html)
- any number of props can be passed
- props can be "hard coded" or JS expressions
- JS must be wrapped in `{}`

```
const Hello = ({name, age}) => {
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
    </div>
  )
}
```

```
const App = () => {
  const age = 23
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Rachel" age={age}/>
      <Hello name="Nathan" age={age - 5}/>
      <Hello name="Adam" age={age - 8}/>
    </div>
  )
}
```

## Things to Note

- React has been configured to generate quite clear error messages
- Best practice is to try and make very small steps incrementally
- Console should **always** be open
- React component names must be capitalized
- Can use empty elements `<>` to wrap multiple React components and elements together at root

# Part 1 B: JavaScript

- official name of the JavaScript standard is ECMAScript
- latest version released in June of 2019 (ES10)
- browsers don't always support all of JS functionality
- code run in browsers _transpiled_ to newer version
  - `create-react-app` and `Babel` handle this
- [Node.js](https://nodejs.org/en/) - JS runtime environment
- can be written in the browser developer console

## Variables

```
const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
x = 4               // causes an error
```

- **const** - constant
- ** let** - changeable variable

## Arrays

```
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})
```

- can be modified even when declared as `const` using functions for `Arrays`
  - forEach
  - split
  - push (adds element)
  - concat (returns a new array with both old and new items))
  - map (creates new array based on function return)

```
const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)
```

- can be destructured using `...`
- variables first and second will receive the first two integers of the array as their values
- remaining integers are "collected" into an array of their own which is then assigned to the variable rest

## Objects

- object literals use `{}`

```
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}
```

- property values can be of any type

```
console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age'
console.log(object1[fieldName])    // 35 is printed
```

- properties referenced using `.` or `[]` notation
- properties can be added at any time using `.` or `[]` notation

## Functions

**Arrow Functions:**

```
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

const result = sum(1, 5)
console.log(result)

const square = p => {
  console.log(p)
  return p * p
}

const square = p => p * p

const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
// tSquared is now [1, 4, 9]
```

**Function Declarations**

```
function product(a, b) {
  return a * b
}

const result = product(2, 6)
// result is now 12
```

**Function Expressions**

```
const average = function(a, b) {
  return (a + b) / 2
}

const result = average(2, 5)
// result is now 3.5
```

## Object methods and "this"

- `this` (the object itself)
  - Arrow functions and functions defined using the `function` keyword vary substantially when it comes to how they behave with respect to the keyword this
- assign methods to an object by defining function properties

```

const arto = {
name: 'Arto Hellas',
age: 35,
education: 'PhD',
greet: function() {
console.log('hello, my name is ' + this.name)
},
}

arto.greet() // "hello, my name is Arto Hellas" gets printed

```

- assign methods to objects after object creation

```

const arto = {
name: 'Arto Hellas',
age: 35,
education: 'PhD',
greet: function() {
console.log('hello, my name is ' + this.name)
},
}

arto.growOlder = function() {
this.age += 1
}

console.log(arto.age) // 35 is printed
arto.growOlder()
console.log(arto.age) // 36 is printed

```

- the value of [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) is defined based on _how the method is called_
- when calling methods through a reference, the value of `this` becomes the [global-object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)
- can avoid problems by using "this-less" JS
- timeouts can cause `this` to "disappear"
- can preserve `this` using a method called `bind` (tells where to point `this`)

## Classes

```

class Person {
constructor(name, age) {
this.name = name
this.age = age
}
greet() {
console.log('hello, my name is ' + this.name)
}
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()

```

- there is no class mechanism like in OOP
- can "simulate" object-oriented classes in JS
- `class` was introduced in ES6 to simplify simulating class definitions in JS
- "classes" in JS are reminiscent of Java and behave quite similarly to Java
- ES6 class syntax is used a lot in **"old" React**
- Instead of classes we are using the new **Hooks** feature of React

## JavaScript materials

- [Mozilla's JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [A re-introduction to JavaScript (JS Tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)

# Part 1 C: Component State & Event Handlers

Example:

```
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
```

## Component Helper Functions

Expand _Hello_ component:

```
const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
```

- logic for guessing the year of birth is separated into its own function that is called when the component is rendered
- person's age does not have to be passed as a parameter to the function, since it can directly access all props that are passed to the component

## Destructuring

```
props = {
  name: 'Arto Hellas',
  age: 35,
}

const Hello = (props) => {
  const name = props.name
  const age = props.age

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
```

- ES6 enabled the ability to [destructure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) values from objects and arrays

```
props = {
  name: 'Arto Hellas',
  age: 35,
}

const Hello = (props) => {
  const { name, age } = props
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
```

We can go one step further:

```
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
```

## Page Re-rendering

- need to change things when user interacts with a page
  - Ex. increase a counter on button click

```
const App = (props) => {
  const {counter} = props
  return (
    <div>{counter}</div>
  )
}

let counter = 1

ReactDOM.render(
  <App counter={counter} />,
  document.getElementById('root')
)
```

- need to call `ReactDOM.render` a second time

```
const App = (props) => {
  const { counter } = props
  return (
    <div>{counter}</div>
  )
}

let counter = 1

const refresh = () => {
  ReactDOM.render(<App counter={counter} />,
  document.getElementById('root'))
}

refresh()
counter += 1
refresh()
counter += 1
refresh()
```

- above happens too fast and is hard to notice
- changing to below refreshes every second

```
setInterval(() => {
  refresh()
  counter += 1
}, 1000)
```

- still not ideal, there are better ways of re-rendering pages

## Stateful Components

- Using React's [state hook](https://reactjs.org/docs/hooks-state.html)

```
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```

`useState`

- adds state to the component
- returns a state variable and a function to _modify_ the state variable's value
- the initial value is the input of the `useState` function
- can update state instead to re-render the page

```
const [ counter, setCounter ] = useState(0)

setTimeout(
  () => setCounter(counter + 1),
  1000
)
```

- use `console` to help debug and see whats going on if things do not happen when you think they should

```
const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}
```

## Event Handling

- called when specific events occur (ex. user interaction)
  - on click
  - input

```
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>
        plus
      </button>
    </div>
  )
}
```

- can be used to cause page re-rendering

```const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}>
        zero
      </button>
    </div>
  )
}
```

## Event Handler is a Function

```
<button onClick={() => setCounter(counter + 1)}>
  plus
</button>
```

VS.

```
<button onClick={setCounter(counter + 1)}>
  plus
</button>
```

- event handlers are function calls
- need to be cautious over use to ensure pages are only re-rendered when desired

```
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)

  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}
```

## Passing State to Child Components

- write React components that are small and reusable across the application and even across projects
- best practice in React is to lift the state up in the component hierarchy

_Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor._

```
const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />
    </div>
  )
}
```

- naming convention suggestion to use `handleClick` -> not required

## Changes in State Cause Re-rendering

## Refactoring Components

```
const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
```

- use `destructuring`

```
const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
```

- use `compact arrow functions`

```
const Display = ({ counter }) => <div>{counter}</div>
```
