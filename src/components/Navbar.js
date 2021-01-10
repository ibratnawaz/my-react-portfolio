import React from 'react'

const Navbar = () => {
  return (
    <nav id='nav-wrap' className='nav-bg'>
      <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
        Show navigation
      </a>
      <a className='mobile-btn' href='#!' title='Hide navigation'>
        Hide navigation
      </a>

      <ul id='nav' className='nav'>
        <li className='current' id='p-home'>
          <a className='smoothscroll' href='#home'>
            Home
          </a>
        </li>
        <li id='p-works'>
          <a className='smoothscroll' href='#portfolio'>
            Works
          </a>
        </li>
        <li id='p-extras'>
          <a className='smoothscroll' href='#resume'>
            Extras
          </a>
        </li>
        <li id='p-contact'>
          <a className='smoothscroll' href='#contact'>
            Get In Touch
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
