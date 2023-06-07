import React from 'react'
import Footer from '../home/Footer'
import NavBar from '../home/NavBar'



export default function Layout({children}:any){
  return (
    <div>
          <NavBar />
          {children}
          <Footer/>
    </div>
  )
}

