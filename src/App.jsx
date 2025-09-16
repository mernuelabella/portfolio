import { Routes, Route } from 'react-router'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<div>Homepage</div>} />
      <Route path='work' element={<div>Work page</div>} />
    </Routes>
  )
}

export default App
