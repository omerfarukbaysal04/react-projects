import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Content from './Contents'

function App() {
  return(
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/notlar' element={<Content />} />
    </Routes>

  )
  
}
export default App
