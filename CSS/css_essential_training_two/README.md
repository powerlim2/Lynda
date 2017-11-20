Course Note: CSS Essential 2
============================

Author: Joon Lim


## 0 Review of CSS Selectors

```css
selector {
    /* comment */
    property: value
}
```

- external CSS: `<link rel="stylesheet" href="css/style.css">`
- internal CSS: `<style></style>`
- inline CSS: `<p style></p>`

### Attribute Selector

```css
[attr] {/* styles here */}
[attr=value] {/* styles here */}
```

### Child Combinator

Choose the direct children, not decendents:
```css
parent > child {/* styles here */}
```

### Sibling Combinator

Choose the **first** sibling after the base:
```css
base + sibling {/* styles here */}
```

Choose the **any** siblings after the base:
```css
base ~ sibling {/* styles here */}
```

### Pseudo Class Selector

-type vs. -child:
```css
p:first-child {
    /* styles here */
}
p:last-child {
    /* styles here */
}

p:first-of-type {
    /* styles here */
}
p:last-of-type {
    /* styles here */
}

element:nth-child(odd) {
    /* styles here */
}
element:nth-child(5) {
    /* selects 5th */
}
element:nth-child(3n + 1) {
    /* selects 1, 4, 7th */
}

element:nth-of-type(odd) {
    /* styles here */
}
element:nth-of-type(5) {
    /* selects 5th */
}
element:nth-of-type(3n + 1) {
    /* selects 1, 4, 7th */
}
```

### Pseudo Element Selector

```css
p:before {
    content: "add characters here"; /* required */
    color: red;
    font-size: 28px;
}
p:after {
    /* same as the above */
}
```

## 1 Layout 

### Review of Box Model

width, height, padding, margin, border

**box model fix**
```css
html {
    box-sizing: border-box;
}
*, *:before, *:after {
    box-sizing: inherit;
}
```

### Horizontal Nav with Display

- aligning page components (make sure to account for the extra space)
- aligning element that need to be **center aligned**
- doesn't change the page's natrual page flow

```html
<nav class="display">
    <a href="#>nav item1</a>
    <a href="#>nav item2</a>
    <a href="#>nav item3</a>
    <a href="#>nav item4</a>
</nav>
```

```css
.display {
    text-align: center;
    font-size: 0; /* remove the space between */
}

.display a {
    padding: 10px;
    display: inline-block
    width: 25%
    /* margin-left: -1% */
    font-size: 10px;
}
```

3 approaches to remove the space between nav items: 1) adjust the width, 2) set the negative margin-left and 3) use different font-sizes between the nav and nav attribute (recommended). 


### Horizontal Nav with Float

- variable and flexible content (e.g., image surrounded by text or blog posts with different lengths)
- global or large page structures (e.g., header, footer, and sidebar)

```html
<nav class="float">
    <a href="#>nav item1</a>
    <a href="#>nav item2</a>
    <a href="#>nav item3</a>
    <a href="#>nav item4</a>
</nav>
```

```css
.float {
    overflow: hidden;
    tex-align: center;
}

.float a {
    float: left;
    padding: 10px;
    width: 25%;
}
```

### Position

- positioning elements relative to another element
- aligning elements outside of the document flow
- positioning elements to a specific spot in the document 

```css
position: static/ relative/ fixed/ absolute/ sticky

.parent {
    position: relative;
}
.relative {
    position: relative;
    top: 10px;
    left: 40px;
}
.absolute {
    position: absolute;
    left: 60px;
    bottom: 10px;
}
.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%
}
```

- HTML elements are positioned **static** by default.
- An element with position: relative; is positioned relative to its normal position.
- An element with position: **fixed**; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
- An element with position: **absolute**; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
- An element with position: **sticky**; is positioned based on the user's scroll position. Note: A "positioned" element is one whose position is anything except static.
- When elements are positioned, they can overlap other elements. The **z-index** property specifies the stack order of an element (which element should be placed in front of, or behind, the others).

**float, display, and position** can not be used together on the same element.

### Stacking Context

x-axis, y-axis, z-axis

block1 will be on top of block 2 if:
```css
.block1 {
   background: pink;
   position: relative;
   z-index: 100;
}
.block2 {
   background: red;
   margin: -60px 0 0 20px;
   position: relative;
   z-index: 100;
}
```

## 2 Tips & Tools

### CSS Reset

A CSS Reset (or “Reset CSS”) is a short, often compressed (minified) set of CSS rules that resets the styling of all HTML elements to a consistent baseline.

In case you didn’t know, every browser has its own default ‘user agent’ stylesheet, that it uses to make unstyled websites appear more legible. For example, most browsers by default make links blue and visited links purple, give tables a certain amount of border and padding, apply variable font-sizes to H1, H2, H3 etc. and a certain amount of padding to almost everything. Ever wondered why Submit buttons look different in every browser?

Obviously this creates a certain amount of headaches for CSS authors, who can’t work out how to make their websites look the same in every browser. (NB: article coming soon about why this is a false notion!)

Using a CSS Reset, CSS authors can force every browser to have all its styles reset to null, thus avoiding cross-browser differences as much as possible.

Eric Meyer’s “Reset CSS” 2.0:
```css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
```

### Icon Fonts

[Font Awesome](https://fontawesome.com/):
```css
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>

<i class="fa fa-car"></i>
<i class="fa fa-car" style="font-size:48px;"></i>
<i class="fa fa-car" style="font-size:60px;color:red;"></i>

</body>
</html>
```

### Background Property

```css
.background {
    height: 400 px;
    background-color: black;
    background-image: url(http://...)
    background-repeat: no-repeat;
    background-position: top right;
    background-attachment: fixed;
    background-size: 100%;
}
```

shorthand syntax (the order matters!):
```css
selector {
    background: blue url(image.jpg) no-repeat;
    background-size: cover;
}
```

RGBA:
```css
/* one approach */
.image-bg {
    background: url(image.png)
}
.alpha-bg {
    background: rgba(195, 64, 4, 0.8);
}
 /* another approach */
selector {
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(199,21,13, 0.5)), url(image.png) no-repeat;
}
```

### Free Images

- [unsplash.com](http://unsplash.com)
- [publicdomainarchive.com](http://publicdomainarchive.com)


## 3 Responsive Design and Mobile

- graceful degradation and mobile
    - desktop first
- progressive enhancement and mobile
    - mobile first
- fluid vs. responsive
    - fluid layouts are relative, but the content and components only get wider or narrower.
    - responsive layouts change based on screen size.

### Media Query

- Media Types: print, speech, screen, all
- Media Features

```css
@media (max-width: 768px) {
    /* 768px and smaller (most tablets) */
}
@media (min-width: 768px) {
    /* 768px and larger (most landscape tablets and computers) */
}
```

Example:
```css
/* Media Queries
-------------------------*/
@media (min-width: 900px) {
  .col-narrow {
    width: 30%;
    float: left;
  }
  .col-wide {
    width: 70%;
    float: left;
    padding-left: 20px;
  }
}
@media (max-width: 899px){
  header {
    text-align: center;
  }
  .profile-img {
    width: 200px;
  }
}
```




