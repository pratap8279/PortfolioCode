import React  from 'react'
import Index from './components/intro/index'
import './App.scss'
import './components/style.scss'
import Blog from './components/blogs/index'
import Footer from './components/footer'
import Contact from './components/contact'
import Skills from './components/skills/index'
const App=()=>{
    return(
        <div>
    <p><Index/>
      <Skills/>
      <Blog/>
      <Contact/>
      <Footer/>
    </p>
        </div>
    )
}

// service id= service_g1t7lxj
// template id =template_ytny7se
// public key =zqB3wKa4yujEWegfx

export default App;