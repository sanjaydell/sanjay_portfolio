import React from 'react'
import './header.scss'
import { Button } from '@mui/material'

function Header() {
  return (
    <div className='header'>
      <Button>Intro</Button>
      <Button>About</Button>
      <Button>Projects</Button>
      <Button>Experience</Button>
      <Button>Contact</Button>
    </div>
  )
}

export default Header