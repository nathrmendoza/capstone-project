import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//pages
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import ShopSubpage from './pages/ShopSubpage';

//components
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigation/>}>
            <Route index element={<Homepage/>}/>
            <Route path='/shop' element={<ShopPage/>}>
              <Route path='/shop/subpage' element={<ShopSubpage/>}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
