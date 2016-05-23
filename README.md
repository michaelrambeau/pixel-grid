# pixel-grid (Work in progress)

GOAL: Create a dumb component that renders a grid of pixels.

This is a component made for [pixel-art-react](https://github.com/jvalen/pixel-art-react) project by Javier Valencia.

The grid renders any array of cells and triggers events when the user interacts with the grid by either:
* clicking on a cell
* doing drag-and-drop on the grid

See the module pages for more details:
* React implementation: [pixel-grid-react](packages/pixel-grid-react) module
* Preact implementation: coming soon!

REQUIREMENT: it has to be fast!

## How to use it

```js
<Grid
  cells={[]}
  onCellEvent={fn}
/>
```

The grid will trigger a `onCellEvent(id)` callback every time a cell is clicked or dragged-and-dropped.

## Development

```
npm start
```

## Production deploy

Step 1: build the minified JavaScript file in `www/build/` folder

```
npm run build
```

Step 2: push `www` folder to surge.sh (a wondeful web static hosting service)

```
npm run deploy
```
