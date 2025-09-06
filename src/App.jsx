import Body from './Body'
import './App.css'
import Login from './Login'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'

function App() {

  return (

    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Body />} >
          <Route path="/login" element={<Login />} />
          </Route>
       </Routes>
     </BrowserRouter>
    </div>
  )
}


export default App
