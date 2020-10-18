import React from 'react'
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

const Layout:React.FC<{preview:boolean, children:React.ReactChild}> = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout;