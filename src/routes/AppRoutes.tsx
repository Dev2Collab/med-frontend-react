import {  BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../components/layout/Layout'
import HomePage from '../pages/HomePage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
