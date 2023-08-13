
import './App.css';
import "@stripe/stripe-js";
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';

import Listcars from './Components/Listcars';

import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';

//import AdressAndPaymentMethod from './Components/AdressAndPaymentMethod';


import AddCar from './Components/AddCar';
import AdminPage from './Components/AdminPage';
import BookCar from './Components/BookCar';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Navbar/>
          <HomePage/>
        </Route>
        <Route exact path='/login'>
        <Navbar/>
          <Login/>
        </Route>
        <Route exact path='/forgotpassword'>
          <ForgotPassword/>
        </Route>
        <Route exact path='/register'>
        <Navbar/>
        <Register/>
        </Route>
        <Route exact path='/aboutus'>
          <Navbar/>
          <Aboutus/>
        </Route>
        <Route exact path='/contactus'>
          <Navbar/>
          <Contactus/>
        </Route>
        <Route exact path='/listcars/:startDate/:endDate/:carLocation'>
          <Navbar/>
          <Listcars/>
        </Route>
        <Route exact path='/adminpage'>
        <Navbar/>
          <AdminPage/>
        </Route>
        <Route exact path='/addcar'>
          <Navbar/>
          <AddCar/>
        </Route>
        <Route exact path='/addcar/:id'>
          <Navbar/>
          <AddCar/>
        </Route>
        <Route exact path='/car/:id'>
          <Navbar/>
          <BookCar/>
        </Route>
        
        {/* <Route exact path='/authhome'>
        <NavbarAfterLogin/>
        <HomePage/>
        </Route> */}
        {/* <Route exact path='/login'>
        <NavbarLoginRegister/>
          <Login/>
        </Route>

        <Route exact path='/register'>
        <NavbarLoginRegister/>
        <Register/>
        </Route>
        <Route exact path='/cart'>
        <NavbarLoginRegister/>
          <Cart/>
        </Route>
        <Route exact path='/order'>
        <NavbarLoginRegister/>
          <Orders/>
        </Route>
        <Route exact path='/deliveryaddress'>
        <Navbar/>
          <AdressAndPaymentMethod/>
        </Route>
        
      
        <Route exact path='/grocery'>
          <Navbar/>
          <Grocery/>
        </Route>
        <Route exact path='/authgrocery'>
          <NavbarAfterLogin/>
          <Grocery/>
        </Route>
        <Route exact path='/fruits'>
          <Navbar/>
          <Fruits/>
        </Route>
        <Route exact path='/authfruits'>
          <NavbarAfterLogin/>
          <Fruits/>
        </Route>
        <Route exact path='/vegetables'>
          <Navbar/>
          <Vegetables/>
        </Route>
        <Route exact path='/authvegetables'>
          <NavbarAfterLogin/>
          <Vegetables/>
        </Route>
        <Route exact path='/dairyproducts'>
          <Navbar/>
          <DairyProducts/>
        </Route>
        <Route exact path='/authdairyproducts'>
          <NavbarAfterLogin/>
          <DairyProducts/>
        </Route>
        <Route exact path='/aboutus'>
          <Navbar/>
          <Aboutus/>
        </Route>
        <Route exact path='/contactus'>
          <Navbar/>
          <Contactus/>
        </Route>
        
        <Route exact path='/product/:id'>
          <Navbar/>
          <ProductDetails/>
        </Route>
        <Route exact path='/search/:pname'>
          <NavbarSearch/>
          <Products/>
        </Route>
        <Route exact path='/authsearch/:pname'>
          <NavbarAfterLogin/>
          <Products/>
        </Route>
        <Route exact path='/addproduct/:id'>
        <Navbar/>
          <AddProduct/>
        </Route> */}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
