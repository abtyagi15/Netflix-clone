import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'

const Netflix = () => {
  return (
    <div>
        <BackgroundImage/>
        <Header/>
        <h1>Unlimited movies, TV shows and more</h1>
        <h3>Watch anywhere. Cancel anytime</h3>
        <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
        <div  className="form">
            <input type="email" name="email" placeholder="Email Adderess" />
            <button>Get Started</button>
        </div>

    </div>
  )
}

export default Netflix