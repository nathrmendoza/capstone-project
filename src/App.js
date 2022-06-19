import { Routes, Route } from 'react-router-dom'

import Navigation from './components/navigation'
import Homepage from './pages/Homepage'
import Shop from './pages/ShopPage'
import ShopSubpage from './pages/ShopSubpage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Homepage/>}/>
          <Route path='/shop' element={<Shop/>}>
            <Route path='/shop/subpage' element={<ShopSubpage/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
