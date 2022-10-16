import React, { useEffect } from 'react'
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
import products from './containers/Products';
import orders from './containers/Orders';



function App() {


  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());

    }
 

  }, []);

  return (
    <div className="App">

      <Switch>  
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/Products" component={products} />
        <PrivateRoute path="/orders" component={orders} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>



    </div>
  );
}

export default App;