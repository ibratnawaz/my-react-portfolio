import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [resumeData, setResumeData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getResumeData = async () => {
      setLoading(true)
      let res = await axios.get('/data')
      console.log(res.data)
      setResumeData(res.data)
      setLoading(false)
    }
    getResumeData()
  }, [])

  return (
    <div className='App'>
      {loading ? (
        ''
      ) : (
        <>
          <Header main={resumeData.main} />
          <About main={resumeData.main} />
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
