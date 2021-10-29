 
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import AuthProvider from './context/AuthProvider';
 

function App() {
  return (
    <div className="App">
          
        <AuthProvider>
        <Router>
            <Header></Header>
            <Switch>
                  <Route exact path="/">
                         <Home></Home>  
                  </Route>
                  <Route  path="/home">
                         <Home></Home>  
                  </Route>
                  <Route   path="/login">
                          <Login></Login>
                  </Route>

                  <PrivateRoute path="/services/:_id">
                    <ServiceDetail></ServiceDetail>
                  </PrivateRoute>

                   <Route path="/myorders">
                      <MyOrders></MyOrders>
                   </Route>

                  <Route path="*">
                    <NotFound></NotFound>
                  </Route>
            </Switch>
          </Router>
           
        </AuthProvider>
        
    </div>
  );
}

export default App;
