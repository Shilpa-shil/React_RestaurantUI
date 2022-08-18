import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home'
import RestaurantDetails from './component/RestaurantDetails';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'

function App() {
  return (
   <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<RestaurantDetails/>}/>
      </Routes>
      </Router>
  );
}

export default App;
