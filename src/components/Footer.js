import React from 'react'

const Footer = ({ main }) => {
  const { name, social } = main

  return (
    <footer>
      <div className='row'>
        <div className='twelve columns'>
          <ul className='social-links'>
            {social.map((network) => (
              <li key={network.name}>
                <a href={network.url} target='_blank' rel='noreferrer'>
                  <i className={network.className}></i>
                </a>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              Created with love by{' '}
              <p style={{ display: 'inline', fontSize: '1.8rem' }}>{name}</p> ♥️
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
