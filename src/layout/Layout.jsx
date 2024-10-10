import React from 'react'
import Header from './Header.jsx'

function Layout({children}) {
  return (
    <>
        <Header/>
        <div className="container mx-auto p-4">
          {children}
        </div>
    </>
  )
}

export default Layout