import { useRef } from 'react';
import '../styles/drawingPanel.scss';
import Row from "./Row"
import { exportComponentAsPNG } from "react-component-export-image";

const DrawingPanel = ({ width, height, selectedColor }) => {

  let rows = []
  const panelRef = useRef();

  for(let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
  }

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
      <button className='button' onClick={() => exportComponentAsPNG(panelRef)}>Export as PNG</button>
    </div>
  )
}

export default DrawingPanel 
