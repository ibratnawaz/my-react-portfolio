import React from 'react'
import Navbar from './Navbar'

const Header = ({ main }) => {
  const {
    name,
    occupation,
    description,
    image,
    social,
    resumeDownload,
    address: { country },
  } = main

  return (
    <header id='home'>
      <Navbar />
      <div className='row banner'>
        <img
          className='profile-pic'
          src={`images/${image}`}
          alt='My Profile Pic'
        />
        <div className='banner-text'>
          <h1 className='responsive-headline'>I'm {name}.</h1>
          <h3>
            I'm a <span>{occupation}</span> from {country}. {description}
          </h3>
          <hr />
          <ul className='social'>
            {social.map((network) => (
              <li key={network.name}>
                <a href={network.url} target='_blank' rel='noreferrer'>
                  <i className={network.className}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p>
          <a
            href={resumeDownload}
            target='_blank'
            rel='noreferrer'
            className='button'>
            <i className='fa fa-download'></i> View Resume
          </a>
        </p>
      </div>

      <p className='scrolldown'>
        <a className='smoothscroll' href='#portfolio'>
          <i className='icon-down-circle'></i>
        </a>
      </p>
    </header>
  )
}

export default Header
