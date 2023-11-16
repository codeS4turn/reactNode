
import './App.css'
import Home from './components/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from './components/Product'
import ShowProduct from './components/ShowProduct'
import Update from './components/Update'

function App() {

  return(
    <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/addProduct' element={<Product/>}/>
  <Route path='/showProduct' element={<ShowProduct/>}/>
  <Route path='/updateProduct' element={<Update/>} />
  </Routes>
  </BrowserRouter>
  )
  

  

 
}

export default App
