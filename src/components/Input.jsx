import React from 'react'
import Img from "../image/image.png"
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something ...' style={{ backgroundColor: 'lightgrey'}}/>
      <div className='send'>
        <img src="" alt =""/>
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
          <img src={Img} alt =""/>
        </label>
        <button>Send</button>
      </div>

    </div>
  )
}

export default Input