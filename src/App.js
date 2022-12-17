import React from "react";
import Home from "./Home";
import { Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom"
// import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Log from "./pages/Log";
import Landing from "./pages/landing";
import Upload from "../src/upload.jsx";

const App = () => {
  return (
    
    <>
    {/* <PasswordStrengthChecker/> */}
      <Switch>
        <Route exact path="/landing" component={Landing}></Route>  
         <Route exact path="/" component={Home}></Route> 
        {/* <Route path="/about" component={About}></Route> */}
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route  path={"/Signup"} component={Register}></Route> 
        <Route path={"/login"} component={Log}></Route>   

        <Route component={Error}></Route>
      </Switch>
      <Router>
      
          {/* <Routes>
            <Route path='/Logim' element={<Log />} />
            <Route path='/Signup' element={<Register />} />
          </Routes> */}
    </Router>
    </>
  );
};

export default App;
