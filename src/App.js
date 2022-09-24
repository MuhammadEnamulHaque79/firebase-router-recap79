import './App.css';
import Header from './components/Header/Header';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import Reviews from './components/Reviews/Reviews';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';


function App() {

  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
