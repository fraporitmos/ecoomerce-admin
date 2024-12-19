import React from 'react'
import {  RouterProvider } from 'react-router-dom'
import { RoutesAdmin } from './routes/RoutesAdmin'

const App = () => {
  return <RouterProvider router={RoutesAdmin} />
}

export default App