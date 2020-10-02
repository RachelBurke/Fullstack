# HTML Forms Assignment

Learn about the basics of HTML forms by reading Mozilla's tutorial [Your first form](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form).

This exercise is not submitted to GitHub, it's enough to just read the tutorial

---

# Notes

- **Web forms** - way for user and a website/application to interact
- Server side - user inputs data and sent to a web server for processing and storage
- Client side - user inputs data and updates are made on the user interface in some way
- Web Form HTML
  - made up of **form controls** or **widgets**
  - ex. text fields, dropdown boxes, buttons, checkboxes, radio buttons

## Designing Forms

- consider UI & UX (user interface and user experience)
- try drawing mockups

1. Start with a `<form>` element

```
<form action="/my-handling-form-page" method="post">

</form>
```

2. Add `<label>`, `<input>`, and `<textarea>` elements

```
<form action="/my-handling-form-page" method="post">
 <ul>
  <li>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name">
  </li>
  <li>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" name="user_email">
  </li>
  <li>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </li>
 </ul>
</form>
```

3. Add the `<button>` element

```
<form action="/my-handling-form-page" method="post">
 <ul>
  ...
  <li class="button">
    <button type="submit">Send your message</button>
  </li>
 </ul>
</form>
```

## Basic Form Styling

1. Add `<style>` to HTML head

```
<style>

</style>
```

2. Add CSS

```
form {
  /* Center the form on the page */
  margin: 0 auto;
  width: 400px;
  /* Form outline */
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

form li + li {
  margin-top: 1em;
}

label {
  /* Uniform size & alignment */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input,
textarea {
  /* To make sure that all text fields have the same font settings
     By default, textareas have a monospace font */
  font: 1em sans-serif;

  /* Uniform text field size */
  width: 300px;
  box-sizing: border-box;

  /* Match form field borders */
  border: 1px solid #999;
}

input:focus,
textarea:focus {
  /* Additional highlight for focused elements */
  border-color: #000;
}

textarea {
  /* Align multiline text fields with their labels */
  vertical-align: top;

  /* Provide space to type some text */
  height: 5em;
}

.button {
  /* Align buttons with the text fields */
  padding-left: 90px; /* same size as the label elements */
}

button {
  /* This extra margin represent roughly the same space as the space
     between the labels and their text fields */
  margin-left: .5em;
}
```

## Sending Form Data to Web Servers

- the `<form>` element defines where and how to send the data using the `action` and `method` attributes
  - `action` - the url to send the data
  - `method` - type of HTTP method to send the data
- provide a `name` to each form control (important to both sides- the client and the server)
  - used to tell the browser which name to give each piece of data
  - used by the server to handle each piece of data by name
- form data is sent to the server as name/value pairs

```
<form action="/my-handling-form-page" method="post">
 <ul>
  <li>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" />
  </li>
  <li>
    <label for="mail">E-mail:</label>
    <input type="email" id="mail" name="user_email" />
  </li>
  <li>
    <label for="msg">Message:</label>
    <textarea id="msg" name="user_message"></textarea>
  </li>

  ...
```
