import React from 'react'
import Nav from './Components/Nav'

const Layout = (props) => {
  return (
    <>
    <Nav/>
    <div className='w-full h-full'>{props.children}</div>
    </>
  )
}

export default Layout