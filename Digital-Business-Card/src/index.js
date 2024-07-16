import React from 'react';
import ReactDOM from 'react-dom';
import Image from '../src/components/image';
import User from './components/user'
import Email from './components/email'
import About from './components/aboutIntreat'
import Footer from './components/footer'

import '../src/index.css'
import '../src/components/user'
import '../src/components/email'
function Page(){
  return (
   <>
   <div className="personal-blog">
        <Image/>
        <User/>
        <Email/>
        <About/>
        <Footer/> 
     </div>
   </>
     
  )
}

ReactDOM.render(<Page/>, document.getElementById('root'));