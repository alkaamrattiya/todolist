import React, { useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Listn = (props) => {
  const [line,setLine]=useState(false);
  const cutIt=(()=>{
  setLine(true);
  })
  const re =()=>{
    setLine(false);
  }

  return (
    <>
    <div className='todo_style'>
   
  <li style={{textDecoration:line ? "line-through": "none"}}>{props.text} <span onDoubleClick={re} onClick={cutIt}>{<DeleteForeverIcon className='deleteicon'/>}</span></li>
     </div>
    </>
  )
}

export default Listn