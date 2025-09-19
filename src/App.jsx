import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='work' element={<div>Work page</div>} />
    </Routes>
  )
}

export default App
