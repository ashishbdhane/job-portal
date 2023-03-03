
import React, {useState} from "react"
// import { Button, Checkbox } from "antd";
// import Form from "antd/es/form";
// import Input from "antd/es/input";
import "./App.css";
import { Login } from "./login";
import { Register } from "./Register";


function App() {

  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    
    <div className="appBg">
      {/* <Login /> */}
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
