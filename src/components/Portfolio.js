import React from 'react'

const Portfolio = ({ portfolio }) => {
  const { projects } = portfolio

  const projectsContainer = projects.map(function (projects) {
    var projectImage = 'images/portfolio/' + projects.image
    return (
      <div key={projects.title} className='columns portfolio-item'>
        <div className='item-wrap'>
          <img alt={projects.title} src={projectImage} />
          <div className='overlay'>
            <div className='portfolio-item-meta'>
              <h5>{projects.title}</h5>
              <p>{projects.desc}</p>
              <span>
                <a
                  href={projects.url}
                  target='_blank'
                  rel='noreferrer'
                  title='Visit site'>
                  <i className='fa fa-link'></i>
                </a>
                <a
                  href={projects.code}
                  target='_blank'
                  rel='noreferrer'
                  title='Go to source code'>
                  <i className='fa fa-github'></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <section id='portfolio'>
      <div className='row'>
        <div className='twelve columns collapsed'>
          <h1>Check Out Some of My Works.</h1>

          <div
            id='portfolio-wrapper'
            className='bgrid-quarters s-bgrid-thirds cf'>
            {projectsContainer}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
