import React from 'react'

import Main from './Main'

import { MAIN_DATA } from './data'

const Hobbies = () => {
  return (
    <Main title={MAIN_DATA[1].title} img_src={MAIN_DATA[1].img_src} content={MAIN_DATA[1].content}/>
  )
}

export default Hobbies