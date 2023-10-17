import React from 'react'
import './Footer.css'

const Footer = () => {

  const currentYear = () => {
    return new Date().getFullYear
  }

  return (
    <footer>
        <div className='company'>Under Construction Applications</div>
        <div className='copywrite'> ©2023</div>
    </footer>
  )
}

export default Footer