import React from 'react'

import './Main.css'

const Main = (props, children) => {
  return (
    <div className='main'>
        {console.log(props)}
        <h1 className="title">{props.title}</h1>
        <img src={props.img_src} />
        <p>{props.content}</p>
    </div>
  )
}

export default Main