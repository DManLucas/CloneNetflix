import React, { useEffect, useState } from 'react'
import netflixLogo from './images/logo.png'
import netflixAvatar from './images/NetflixAvatar.jpg'

function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.addEventListener('scroll')
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img src={netflixLogo} alt='Netflix Logo' className='nav_logo' />
      <img src={netflixAvatar} alt='Netflix Avatar' className='nav_avatar' />
    </div>
  )
}

export default Nav
