# CSS

Review the basics of CSS by reading this tutorial from Mozilla: [CSS tutorial](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics).

This exercise is not submitted to GitHub, it's enough to just read the tutorial

---

(Taking notes on the website...)

# Notes

- **CSS:** Cascading Style Sheets
  - code that styles web content
  - style sheet language (not markup or programming language)
  - selectively styles HTML elements

In order to make the CSS code work within an HTML document you must link it within the `<head></head>` tags.

```
<link href="styles/style.css" rel="stylesheet">
```

## CSS Anatomy

- **Selector**
  - HTML element name at the start of the rule
  - defines the element(s) to be styled
  - to style a different element, change the selector
- **Declaration**
  - a single rule
  - specifies which of the element's properties you want to style
- **Properties**
  - ways in which you can style an HTML element
  - you choose which properties you want to affect in the rule
- **Property value**
  - to the right of the property (after the colon)
  - one out of many possible appearances for a given property
- wrap rules with `{}`
- use `:` to separate properties from property value(s)
- end each rule with a `;`
- multiple selectors can be listed for a rule by separating with `,`

## Selector Types

| Selector Name                                              | What does it Select                                                                                             | Example                                                                           |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Element selector (sometimes called a tag or type selector) | All HTML elements of the specified type                                                                         | `p` selects `<p>`                                                                 |
| ID selector                                                | The element on the page with the specified ID. On a given HTML page, each id value should be unique.            | `#my-id` selects `<p id="my-id">` or `<a id="my-id">`                             |
| Class selector                                             | The element(s) on the page with the specified class. Multiple instances of the same class can appear on a page. | `.my-class` selects `<p class="my-class">` and `<a class="my-class">`             |
| Attribute selector                                         | The element(s) on the page with the specified attribute                                                         | `img[src]` selects `<img src="myimage.png">` but not `<img>`                      |
| Pseudo-class selector                                      | The specified element(s), but only when in the specified state (ex. hover, focus, active)                       | `a:hover` selects `<a>`, but only when a mouse pointer is hovering over the link. |

## Fonts and text

1. Add a link to the font css in the `<head></head>` tags

```
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
```

2. Use the font within the CSS rules sheet on `html` to apply to the full web document

```
html {
  font-size: 10px; /* px means "pixels": the base font size is now 10 pixels high  */
  font-family: "Open Sans", sans-serif; /* this should be the rest of the output you got from Google fonts */
}
```

3. Set font sizes on elements

```
h1 {
  font-size: 60px;
  text-align: center;
}

p, li {
  font-size: 16px;
  line-height: 2;
  letter-spacing: 1px;
}
```

## CSS Boxes

- think of HTML elements as boxes on the page, sitting on top of other boxes
- CSS layout is mostly based on the box model. Each box taking up space on your page has properties like:
  - **padding** - the space around the content
  - **border** - the solid line that is just outside the padding
  - **margin** - the space around the outside of the border
  - **width** - width of an element
  - **height** - height of an element
  - **background-color** - the color behind an element's content and padding
  - **color** - the color of an element's content
  - **text-shadow** - sets a drop shadow on the text inside an element
  - **display** sets the display mode of an element
  - _And many others_
