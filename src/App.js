import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Purches from './components/Purches/Purches/Purches';
import Login from './components/Login/Login/Login';
import Header from './components/Shared/Header/Header';
import Contact from './components/Contact/Contact';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/Login/Login/PrivateRoute/PrivateRoute';
import OrderReview from './components/OrderReview/OrderReview';
import Footer from './components/Shared/Footer/Footer';

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

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/purches/:purchesID">
              <Purches></Purches>
            </PrivateRoute>

            <PrivateRoute path="/orderReview">
              <OrderReview></OrderReview>
            </PrivateRoute>

            <Route path="/*">
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
