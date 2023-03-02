
import React, {useState} from "react";

import { Button, Checkbox } from "antd";
import Form from "antd/es/form";
import Input from "antd/es/input";
import "./App.css";
import FormItem from "antd/es/form/FormItem";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
  }

  return(
      <div className="appBg">
      <form className="lg" onSubmit={handleSubmit}>
      <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]} >
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="your username" id="email" name="email" ></input>
      </Form.Item>
      <Form.Item label="password" name="password" rules={[{ required: true, message: 'Please input your password!' }]} >
        <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="your password" id="password" name="password" ></input>
      </Form.Item>


      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>    
        <FormItem className="dont">Don't have an account?<button className="uses" onClick={() => props.onFormSwitch('register')}>Register</button></FormItem>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}></Form.Item>

      {/* <button className="sci uses" type="submit">Log in</button> */}
      </form>
      
      </div>
  )
}
// function App() {

//   const login=()=>{
//     MessageChannel.success('Login Successful!')
//   }
  

//   return (
//     <div className="appBg">
//     <Form className="lg">
//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[{ required: true, message: 'Please input your username!' }]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[{ required: true, message: 'Please input your password!' }]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item>

//       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
        
//       </Form.Item>

//       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        
//       </Form.Item>
//     </Form>
//         <Button method="POST" action="regis.js">
//           Register
//         </Button>


//     </div>
//   );
// }

// export default login;
