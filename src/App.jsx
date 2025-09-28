import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Layout from './components/layout/Layout'
import CreateCustomer from './pages/CreateCustomer/CreateCustomer'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/landing'
          element={
            <Layout>
              <Landing />
            </Layout>
          }
        />
        <Route
          path='/createCustomer'
          element={
            <Layout>
              <CreateCustomer />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App