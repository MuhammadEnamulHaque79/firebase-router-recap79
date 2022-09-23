import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Reviews from './components/Reviews/Reviews';

function App() {

  return (
    <div className='App'>
      <Header></Header>
      <h1>Hey,keep patience !!</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/orders" element={
          <RequireAuth><Orders/></RequireAuth>
        }></Route>
        <Route path="/reviews" element={<Reviews/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
