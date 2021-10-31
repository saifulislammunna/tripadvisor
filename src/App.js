 
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import AuthProvider from './context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
 import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddService from './components/AddService/AddService';
import Footer from './components/Footer/Footer';
 

function App() {
  return (
    <div className="App">
          
        <AuthProvider>
        <Router>
            <Header></Header>
            <Banner></Banner>
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

                   <PrivateRoute path="/orders">
                      <MyOrders></MyOrders>
                   </PrivateRoute>
                      
                 
                      
                   <PrivateRoute path="/manageallorders">
                        <ManageAllOrders></ManageAllOrders>
                   </PrivateRoute>

                   <PrivateRoute path="/addservice">
                       <AddService></AddService>
                   </PrivateRoute>

                  <Route path="*">
                    <NotFound></NotFound>
                  </Route>
            </Switch>
            <Footer></Footer>
          </Router>
           
        </AuthProvider>
        
    </div>
  );
}

export default App;
