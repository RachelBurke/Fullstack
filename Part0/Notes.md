# General Information

- Introduction to modern web development
  - Javascript (ReactJS, React Native, TypeScript)
  - SPA
  - REST ~ GraphQL and Node.js
  - debugging, config, runtime environments, NoSQL dbs (MongoDB)
- Material part of a course offered by the University of Helsinki (10 credit hours)
  - do not need to attend the course exam or register to the Open University course in order to obtain the course certificate
  - [submission system for certificate](https://studies.cs.helsinki.fi/stats/courses/fullstackopen)
    - submit one part at a time

# Fundamentals of Web Applications

## Web Browsers

- [example](https://studies.cs.helsinki.fi/exampleapp)
- **The 1st rule of web development**: Always keep the developer console open on your browser. Windows: `F12` or `ctrl-shift-i` simultaneously
- server and the web browser communicate with each other using the HTTP protocol

## Traditional Web Applications

- **Traditional web application** - when entering the page, the browser fetches the HTML document detailing the structure and the textual content of the page from the server
- **Static** - saved in server's directory
- **dynamic** - according to application code (ex. database data)
- browser is "dumb" and only fetches HTML from server and logic only exists on the server

## Event Handlers & Callback Functions

- **Event handler functions** are called _callback_ functions.
- application code does not invoke the functions itself, but the runtime environment (browser) invokes the function at an appropriate time when the event has occurred

## The DOM

- **DOM** - Document Object Model - an Application Programming Interface, (an API), which enables programmatic modification of the element trees corresponding to web-pages

## CSS

- **CSS** - Cascading Style Sheets - a markup language used to determine the appearance of web pages

## AJAX

- **AJAX** - Asynchronous Javascript and XML - enables the fetching of content to web pages using JavaScript included within the HTML without needing to re-render the page

## SPA

- **SPA** - Single Page Application - comprise only one HTML page fetched from the server whose contents of which are manipulated with JavaScript that executes in the browser instead of fetching each page separately from the server

## JavaScript Libraries

- tool sets that are easier to use than working with the DOM-API when manipulating pages
- Examples:
  - JQuery
  - Angular
  - React
  - Redux
  - VueJS

## Full Stack Web Development

- layers of a web application
- frontend (browser & JavaScript), backend (server), and database
