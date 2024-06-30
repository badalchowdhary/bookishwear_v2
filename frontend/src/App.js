import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart.jsx'
import SingleProduct from './Pages/SingleProduct';
import TshirtsPage from './Pages/TshirtsPage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Payment from './Pages/Payment';
import { useSelector } from 'react-redux';


function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <TshirtsPage/>
        </Route>
        <Route path="/product/:id">
          <SingleProduct/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/payment">
          <Payment/>
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/"/> : <Login/>}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/"/> : <Register/>}
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
