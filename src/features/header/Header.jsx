import React from 'react'
import './header.scss'
import { Button } from '@mui/material'

function Header() {
  return (
    <div className='header'>
      <Button className='header-button'>Intro</Button>
      <Button className='header-button'>About</Button>
      <Button className='header-button'>Projects</Button>
      <Button className='header-button'>Experience</Button>
      <Button className='header-button'>Contact</Button>
    </div>
  )
}

export default Header