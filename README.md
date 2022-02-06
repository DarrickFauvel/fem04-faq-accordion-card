# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

<img src="https://github.com/DarrickFauvel/fem04-faq-accordion-card/blob/main/screenshot-mobile.png" width="200" />
<img src="https://github.com/DarrickFauvel/fem04-faq-accordion-card/blob/main/screenshot-desktop.png" width="400" />

### Links

- Solution URL: [https://github.com/DarrickFauvel/fem04-faq-accordion-card](https://github.com/DarrickFauvel/fem04-faq-accordion-card)
- Live Site URL: [https://fem04-faq-accordion-card-drrck.netlify.app/](https://fem04-faq-accordion-card-drrck.netlify.app/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- BEM
- [Sass](https://www.sass-lang.com) - CSS with superpowers
- [Parcel](https://parceljs.org) - Zero config build tool

### What I learned

I learned to use the CSS `clip` property, and then discovered it has been deprecated. I also learned how to use the `clip-path` property that replaces it. Instead of using a simple `rect()` function, the `clip-path` property allows for using a more capable `polygon()` function using x y coordinates.

For example, this `clip-path`:

```css
.some-image {
  clip-path: polygon(0 0, 175px 0, 175px 113px, 0 113px);
}
```

Replaces this `clip`:

```css
.some-image {
  clip: rect(0, 175px, 113px, 0);
}
```

I also learned a lot more about Sass and how to organize and use partials.

### Useful resources

- [MDN: clip - CSS Property](https://developer.mozilla.org/en-US/docs/web/css/clip) - This helped me learn how to use `clip` and that it is deprecated.
- [MDN: clip-path - CSS Propeerty](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path) - This is helped me learn how to use `clip-path`.

## Author

- Website - [Darrick Fauvel](https://www.darrickfauvel.com)
- Frontend Mentor - [@DarrickFauvel](https://www.frontendmentor.io/profile/DarrickFauvel)
