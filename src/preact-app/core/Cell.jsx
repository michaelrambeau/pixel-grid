import { h, Component } from 'preact';
/** @jsx h */

export default class Cell extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.cell.color !== this.props.cell.color
  }
  render() {
    const { id, cell: { color, width }, onMouseDown, onMouseUp, onMouseOver } = this.props;
    const styles = {
      flex: `0 0 ${width}%`,
      paddingBottom: `${width}%`,
      backgroundColor: `${color}`
    };
    // console.log('Render cell');
    return (
      <div
        className="grid-cell"
        onMouseDown={() => onMouseDown(id)}
        onMouseUp={() => onMouseUp(id)}
        onMouseOver={() => onMouseOver(id)}
        style={styles}
      />
    )
  }
}
