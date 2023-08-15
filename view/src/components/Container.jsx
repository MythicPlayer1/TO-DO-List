
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditNotificationsOutlinedIcon from '@mui/icons-material/EditNotificationsOutlined';
import { IconButton } from '@mui/material';
import React, { useState } from 'react'
import './Container.css'



export const Container = (props) => {
  const [NewText, setNewText] = useState();

  const [date, setDate]=useState();

  const textchangeHandler = (event) => {
    setNewText(event.target.value);
  }
  const timehandler=(event)=>{
    
    setDate(event.target.value)    
  }

  const submithandler = async (event) => {


    event.preventDefault();
    props.senddata(NewText);
    const response = await fetch('http://localhost:5600/post_name', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        NewText:NewText,
        Date:date
      })

    })
   
    props.apifetch();
    const data = await response.json()
    console.log({date, NewText})

    setNewText(" ")

  }
  return (
    <div className='container'>
      <form onSubmit={submithandler} style={{ width: "100%" }}>
        <label></label>
        <input className='input-txt' type='text' onChange={textchangeHandler} value={NewText} placeholder='Add a text'></input>
        <div className='sub-container-1'>
          <div className='inner-container-1'>
            <IconButton>
              <input type='date' id='date' onChange={timehandler} ></input>
              <CalendarMonthIcon style={{ color: 'rgb(90, 90, 90)' }} ></CalendarMonthIcon>
            </IconButton>
              
            {/* <EditNotificationsOutlinedIcon style={{ color: 'rgb(90, 90, 90)' }}></EditNotificationsOutlinedIcon> */}
          </div>
          <button className='Button' >Add</button>
        </div></form>

    </div>
  )
}
