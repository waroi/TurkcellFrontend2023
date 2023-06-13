import React from 'react'
import { Outlet } from 'react-router-dom'

const MainView = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default MainView