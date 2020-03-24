import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItemDetail from './component/ItemDetail/ItemDetail';
import NotFound from './component/NotFound/NotFound';
import Cart from './component/Cart/Cart';
import Login from './component/Login/Login';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/menu/:category">
            <Shop></Shop>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
           <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/item/:productKey">
            <ItemDetail></ItemDetail>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
