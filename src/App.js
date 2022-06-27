import { Routes, Route } from 'react-router-dom'

//components
import Navigation from './components/navigation'

//pages
import Homepage from './pages/Homepage'
import Shop from './pages/ShopPage'
import ShopSubpage from './pages/ShopSubpage'
import Authentication from './pages/Authentication'
import CheckoutPage from './pages/CheckoutPage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Homepage/>}/>
          <Route path='/authentication' element={<Authentication/>}/>
          <Route path='/shop' element={<Shop/>}>
            <Route path='/shop/subpage' element={<ShopSubpage/>}/>
          </Route>
          <Route path='/checkout' element={<CheckoutPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
