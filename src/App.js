
import RegistrationForm from './components/RegistrationForm';
import LoginScreen from './components/LoginScreen';
import Header from './components/Header';
import UserListScreen from './components/UserListScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
const App = () => {
 
  return (

    <Router>
           <div className="App">

            <Header/>
            
 
            <Routes>
           

           
          

       
          


          
           <Route path="register" element ={ <RegistrationForm />}   />

           <Route path="login" element ={ <LoginScreen />}   />
          
           <Route path="Details" element ={ <UserListScreen />}   />
            


        </Routes>
            </div>
      </Router>
    
  
  );
};

export default App;
