import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { data } from './data.json'

function App() {
  const [resumeData, setResumeData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log(data)
    setResumeData(data)
    setLoading(false)
  }, [])

  return (
    <div className='App'>
      {loading ? (
        ''
      ) : (
        <>
          <Header main={resumeData.main} />
          {/* <About main={resumeData.main} /> */}
          <Portfolio portfolio={resumeData.portfolio} />
          <Resume resume={resumeData.resume} />
          <Contact main={resumeData.main} />
          <Footer main={resumeData.main} />
        </>
      )}
    </div>
  )
}

export default App
