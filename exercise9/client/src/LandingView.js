import React from 'react'

import Main from './Main'

import { MAIN_DATA } from './data'

const LandingView = () => {
  return (
    <Main title={MAIN_DATA[0].title} img_src={MAIN_DATA[0].img_src} content={MAIN_DATA[0].content}/>
  )
}

export default LandingView