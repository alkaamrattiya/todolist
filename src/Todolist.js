import { Button, List, TextField} from '@mui/material';
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Listn from './Listn';



const Todolist = () => {
 const [item,setItem]=useState('')
 const [nitem, setNitem]=useState([]);

 const eventI=(e)=>{
  setItem(e.target.value)
 }
 const btnevent=()=>{
  setNitem((prev)=>{
    return [...prev,item]

  })
  setItem('')
 }
  return (
   <>
    <div className='main_div'>
     <div className='center_div'>
     <br/>
     <h1>TodoList</h1>
     <br/>
     <TextField className='input' value={item} onChange={eventI} id="filled-basic" label="Filled" variant="filled" />
     <Button onClick={btnevent} className='newBtn' startIcon={<AddIcon/>} variant="contained" color="primary"></Button>
     <br/>
     <ol>
     {nitem.map((val,i)=>{
      return (
        <Listn text={val}
          key={i}
          id={i}
        />
      )
     })}
     
     </ol>
    <br/>
     </div>



    </div>
    </>
  )
}

export default Todolist;