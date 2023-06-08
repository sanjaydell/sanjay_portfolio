import React from 'react'
import './header.scss'
import { Button } from '@mui/material'

function Header() {
  return (
    <div className='header'>
      <Button className='header-button' href="#introduction">Intro</Button>
      <Button className='header-button' href="#about">About</Button>
      <Button className='header-button' href="#projects">Projects</Button>
      <Button className='header-button' href="#experience">Experience</Button>
      <Button className='header-button' href="#contacts">Contact</Button>
    </div>
  )
}

export default Header