import React from 'react'

const Resume = ({ resume }) => {
  const { educations, skillMessage, skills, works } = resume

  return (
    <section id='resume'>
      <div className='row skill'>
        <div className='three columns header-col'>
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className='nine columns main-col'>
          <p>{skillMessage}</p>

          <div className='bars'>
            <ul className='skills'>
              {skills.map((skill) => (
                <li key={skill.name}>
                  <span
                    style={{ width: skill.level }}
                    className={`bar-expand ${skill.name.toLowerCase()}`}></span>
                  <em>{skill.name}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='row work'>
        <div className='three columns header-col'>
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className='nine columns main-col'>
          {works.map((work) => (
            <div key={work.company}>
              <h3>{work.company}</h3>
              <p className='info'>
                {work.title}
                <span>&bull;</span> <em className='date'>{work.years}</em>
              </p>
              <p>{work.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='row education'>
        <div className='three columns header-col'>
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className='nine columns main-col'>
          <div className='row item'>
            <div className='twelve columns'>
              {educations.map((education) => (
                <div key={education.school}>
                  <h3>{education.school}</h3>
                  <p className='info'>
                    {education.degree} <span>&bull;</span>
                    <em className='date'>{education.graduated}</em>
                  </p>
                  <p>{education.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
