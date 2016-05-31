## pixel-grid-react: a React component to display a grid of pixels

This is the React version of [pixel-grid](https://github.com/michaelrambeau/pixel-grid).


Concept: you pass an array of cells and the component renders it, listening to mouse events (clicks and drag and drops).

The component has been optimized to avoid unnecessary renderings.

This component has been created for [pixel-art-react](https://github.com/jvalen/pixel-art-react), a project by Javier Valencia.

### How to install it

```
npm install pixel-grid-react
```

### How to use it

Include the CSS code:

```css
.grid-container{
  cursor: pointer;
}
.grid-container > div{
  border: 1px solid #585858;
  border-width: 0 1px 1px 0;
  float: left;
}
```

Include the JS code (ES6 syntax, to be used with Webpack bundler for example)

```js
import Grid from 'pixel-grid-react'
```

```jsx
<Grid
  cells={[]}
  onCellEvent={fn}
/>
```

`cells` is an array of object with 2 attributes:
* `color`
* `id`

```
[
  {
    id: 0,
    color: '#ff0000'
  },
  {
    id: 1,
    color: '#ff00ff'
  }
]
```

The grid will trigger a `onCellEvent(id)` callback every time a cell is clicked or dragged-and-dropped.
