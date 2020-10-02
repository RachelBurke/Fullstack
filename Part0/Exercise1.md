# HTML

Review the basics of HTML by reading this tutorial from Mozilla: [HTML tutorial](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics).

This exercise is not submitted to GitHub, it's enough to just read the tutorial

---

(Taking notes on the website...)

# Notes

- **HTML** - **H**yper**t**ext **M**arkup **L**anguage: code used to structure a web page and its content
- NOT A PROGRAMMING LANGUAGE -> **_Markup Language_**
- consists of _elements_ used to enclose content for appearance or give function
  - may contain a data item or a chunk of text or an image, or perhaps nothing
  - typical element includes an opening tag with some attributes, enclosed text content, and a closing tag
- _tags_ create elements and the name of the element appears within the tag
  - contain attributes that extend elements in order to change behavior or provide metadata
    - these do not appear in the actual content

## Four Main Parts of an Element

1. **The opening tag:** This consists of the name of the element, wrapped in opening and closing **angle brackets**. This states where the element begins or starts to take effect.
1. **The closing tag:** This is the same as the opening tag, except that it includes a forward slash before the element name. This states where the element ends.
   1. _Note: Failing to add a closing tag is one of the standard beginner errors and can lead to strange results._
1. **The content:** This is the content of the element..
1. **The element:** The opening tag, the closing tag, and the content together comprise the element.

## An attribute should always have the following:

1. A space between it and the element name (or the previous attribute, if the element already has one or more attributes).
1. The attribute name followed by an equal sign.
1. The attribute value wrapped by opening and closing quotation marks.

## Nesting Elements

- putting elements inside other elements
- ensure proper nesting by closing child element tags before parent ones

## Empty Elements

- elements with no content
- do not wrap anything
- do not have a closing tag or inner content
- ex. img

## Anatomy of HTML Documents

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image">
  </body>
</html>
```

- `<!DOCTYPE html>`
  - required preamble.
  - originally meant to act as links to a set of rules that the HTML page had to follow to be considered good HTML
    - ex. automatic error checking
  - today they don't do much
    - needed to make sure your document behaves correctly
- `<html></html>`
  - element that wraps all the content on the entire page
  - usually called the root element
- `<head></head>`
  - element that acts as a container for all the stuff you want to include on the HTML page that isn't the content you are showing to your page's viewers
    - ex. keywords, a page description for search results, CSS to style our content, character set declarations
- `<meta charset="utf-8">`
  - element that sets the character set your document should use to UTF-8 which includes most characters from the vast majority of written languages
    - page can now handle any textual content
    - no reason not to set this and it can help avoid some problems
- `<title></title>`
  - sets the title of your page, which is the title that appears in the browser tab the page is loaded in
  - also used to describe the page when you bookmark/favorite it
- `<body></body>`

  - contains all the content that you want to show to web users when they visit your page
  - ex. text, images, videos, games, playable audio tracks, etc

  ## Images

  ```
  <img src="images/firefox-icon.png" alt="My test image">
  ```

  - embeds image on page in position it appears
  - link the image through `src` attribute
  - use the `alt` attribute for descriptive text used in case users are unable to visually see the image (due to visual impariment or incorrect `src` link)

  ## Text Markup

  - Headings (`<h1> - <h6>`)
  - Paragraphs (`<p>`)
  - Lists (`<ul>` or `<ol>`, with `<li>`)
  - Links (`<a href="link">`)
