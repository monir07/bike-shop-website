import './App.css';
import Header from './pages/shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Footer from './pages/shared/Footer/Footer';
import ContactUs from './pages/ContactUs/ContactUs';
import Services from './pages/Home/Services/Services';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/SignUp/SignUp';
import Details from './pages/Details/Details';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import AddPackage from './pages/AddPackage/AddPackage';
import AllOrder from './pages/AllOrder/AllOrder';
import MyOrder from './pages/MyOrder/MyOrder';
import Footer2 from './pages/shared/Footer2/Footer2';
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path='/booking/:detailId'>
              <Details></Details>
            </PrivateRoute>
            <Route path='/contact-us'>
              <ContactUs></ContactUs>
            </Route>

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
              <Login></Login>
            </Route>
            <Route path='/sign-up'>
              <SignUp></SignUp>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* <Footer></Footer> */}
          <Footer2></Footer2>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
