import React from 'react'

const TopBar = () => {
  return (
    <header className='top-bar'>
        <h1 className='top-bar__welcome-message'>where in the word?</h1>
        <button className='top-bar__theme-switcher'> {`(Icon)`}Dark Mode</button>
    </header>
  )
}

export default TopBar