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

# Part 1 B:
