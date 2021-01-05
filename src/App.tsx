import React from 'react'
import { StoreProvider } from './stores'
import { BrowserRouter as Router } from 'react-router-dom'
import { ShopRoutes, TechnicianRoutes } from './containers'
import './tailwind.output.css'

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <ShopRoutes />
        <TechnicianRoutes />
        {/* <AdminRoutes /> */}
      </Router>
    </StoreProvider>
  )
}

export default App
