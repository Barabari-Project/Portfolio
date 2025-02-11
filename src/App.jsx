import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Public } from './components/Public'
import { Heading } from './components/Heading'
import { Footer } from './components/Footer'
import { Feature } from './components/Feature'
import { Chats } from './components/Chats'
// import { Chats1 } from './components/Chats1'
import { Chats2 } from './components/Chats2'

function App() {
  return (
    <>
      <Chats />
      {/* <Chats1 /> */}
      {/* <Chats2 /> */}
      <Heading />
      <div>
        <h1 className='featureH1'>Featured Projects</h1>
        <div className='card-div1'>
          <div className='cards'>
            <Feature title="Sprint Up Website"
              description="E-learning platform landing page"
              image="img1.png" />
          </div>

          <div className='cards'>
            <Feature title="Sprint Up Website"
              description="E-learning platform landing page"
              image="img2.png" />

          </div>

          <div className='cards'>
            <Feature title="Sprint Up Website"
              description="E-learning platform landing page"
              image="img3.png" />

          </div>
        </div>

        <div className='card-div2'>
          <div className='cards'>
            <Feature title="Sprint Up Website"
              description="E-learning platform landing page"
              image="img4.png" />
          </div>

          <div className='cards'>
            <Feature title="Sprint Up Website"
              description="E-learning platform landing page"
              image="img4.png" />

          </div>

          <div className='cards'>
            <Feature title="Sprint Up Website"
              description="E-learning platform landing page"
              image="img4.png" />
          </div>
        </div>
      </div>
      <Header />
      <Public />
      <Footer/>

    </>
  )


}

export default App
