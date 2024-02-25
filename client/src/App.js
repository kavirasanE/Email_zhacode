import React from 'react'
import NavbarJS from './components/Navbar'
import Sidebar from './components/Sidebar'
import Layout from './components/Layout'

const App = () => {
  return (
    <div>
      <NavbarJS />
      <div className='row'>
        <div className='col'>
          <Sidebar />
        </div>
        <div className='col'>
          <Layout />
        </div>
      </div>

    </div>
  )
}

export default App