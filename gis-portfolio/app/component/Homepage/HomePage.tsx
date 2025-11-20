import React from 'react'
import Profile from './Profile'
import Services from './Services'
import AboutSection from './AboutSection'
import Experience from './Experience'
import Education from './Education'
import Contact from './Contact'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className="w-full overflow-hidden">
        <Profile/>
        <Services/>
        <AboutSection/>
        <Experience/>
        <Education/>
        <Contact />
    </div>
  )
}

export default HomePage