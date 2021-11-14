import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import SignInSide from './pages/Login/Login/SignInSide';
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/SignUp/SignUp';
import Booking from './pages/Booking/Booking';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AddPackage from './pages/AddPackage/AddPackage';
import AllOrder from './pages/AllOrder/AllOrder';
import MyOrder from './pages/MyOrder/MyOrder';
import Dashboard from './pages/dashboard/dashboard/Dashboard';
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/products'>
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path='/product/:bookId'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path='/add-package'>
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path='/all-orders'>
              <AllOrder></AllOrder>
            </PrivateRoute>
            <PrivateRoute path='/my-orders'>
              <MyOrder></MyOrder>
            </PrivateRoute>

            <Route path='/login'>
              <SignInSide></SignInSide>
            </Route>
            <Route path='/sign-up'>
              <SignUp></SignUp>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
