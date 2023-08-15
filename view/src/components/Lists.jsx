
import React, { useState } from 'react'
import './Container.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { IconButton } from '@mui/material';

export const Lists = (props) => {
  const [flag, setflag] = useState(false)
  const [text, setText]=useState();

  console.log(props)

  const textchangeHandler = (event) => {
    setText(event.target.value);
  }

  
  const deletehandler = async () => {
    let result = await fetch("http://localhost:5600/delete/" + props.item._id, {
      method: "DELETE"
    });
    result = await result.json();
    props.apifetch()


    console.log(result)

  }

  const edithandler = async () => {
    // let result = await fetch("http://localhost:5600/delete/" + props.item._id, {
    //   method: "PUT",
    //   headers:{
    //     'Content-Type':'application/json'
    //   },
    //   body: JSON.stringify(
    //     NewText
    //   )

    // });
    // result = await result.json();
    //props.apifetch()
    setflag(true)
    // console.log(result)


  }

  const editHandlerUpdate=async()=>{
     let result = await fetch("http://localhost:5600/put",{
      method: "PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(
       {text:text}
      )

    });
    result = await result.json();
    props.apifetch()
    console.log(result)

  }
  return (
    <div className='top-main'>
      <div className='main-list'>
        <div className='list-input'>
          <div className='innerlist-input'>
            <div><input className='round-btn1' type='checkbox' ></input></div>
            {props.item.NewText}
          </div>
          <div className='icons_field'>
            <p>Due Date:{props.item.Date}</p>
            <IconButton
              onClick={deletehandler}
            >
              <DeleteOutlineIcon></DeleteOutlineIcon>
            </IconButton>
            <IconButton onClick={edithandler}>
              <ModeEditOutlineIcon></ModeEditOutlineIcon>
            </IconButton>

          </div>
        </div>
        {flag ? <div className='list-input'>

          <div className='innerlist-input'>
            {/* <div><input className='round-btn1' type='checkbox' ></input></div> */}
            <input className='input-txt' type='text'style={{width:'1200px'}} onChange={textchangeHandler} value={text} placeholder='Add a text'></input>
          </div>
          <div>
            {/* <IconButton
              onClick={deletehandler}
            >
              <DeleteOutlineIcon></DeleteOutlineIcon>
            </IconButton> */}
            <IconButton onClick={editHandlerUpdate}>
              <ModeEditOutlineIcon></ModeEditOutlineIcon>
            </IconButton>

          </div>

        </div> : <div></div>}

      </div>
    </div>
  )
}
