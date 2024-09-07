import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState("Login");
  const [details, setDetails] = useState({
    email: '',
    password: '',
    name:''
  });
  const [registerDetails, setRegisterDetails] = useState({
    name:'',
    email: '',
    password: '',
    confirmPassword: '' // Additional fields for registration
  });
  
  return (
    <div className="h-[100vh] w-[100vw] back relative">
      <div className="absolute inset-0 flex items-center justify-center">
        {page === "Login" ? (
          <Login page={page} setPage={setPage} details={details} setDetails={setDetails} />
        ) : (
          <Register page={page} setPage={setPage} registerDetails={registerDetails} setRegisterDetails={setRegisterDetails} />
        )}
      </div>
    </div>
  );
}

export default App;
