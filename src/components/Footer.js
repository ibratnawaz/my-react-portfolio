import React from 'react'

const Footer = ({ main }) => {
  const { name, social } = main
  const networks = social.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url} target='_blank' rel='noreferrer'>
          <i className={network.className}></i>
        </a>
      </li>
    )
  })
  return (
    <footer>
      <div className='row'>
        <div className='twelve columns'>
          <ul className='social-links'>{networks}</ul>

          <ul>
            <li>Created with love by ${name} ♥️</li>
          </ul>

          <ul className='copyright'>
            <li>
              &copy; All design credit goes to Tim Baker - Copyright 2017 Tim
              Baker
            </li>
            <li>
              Design by{' '}
              <a
                title='Styleshout'
                href='http://www.styleshout.com/'
                target='_blank'
                rel='noreferrer'>
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div id='go-top'>
          <a className='smoothscroll' title='Back to Top' href='#home'>
            <i className='icon-up-open'></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer