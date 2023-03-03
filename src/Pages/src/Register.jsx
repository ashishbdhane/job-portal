
import React, {useState} from "react";
import Form from "antd/es/form";
import { Button, Checkbox } from "antd";

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
  }

  return(
    <div className="appBg">
    <form className="lg" onSubmit={handleSubmit}>
    <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]} >
      <input value={name} onChange={(e) => setName(e.target.value)}type="email" placeholder="your username" id="name" name="name" ></input>
    </Form.Item>
    <Form.Item label="Email     :" name="Email" rules={[{ required: true, message: 'Please input your Email!' }]} >
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
    <button className="uses" onClick={() => props.onFormSwitch('login')}>Else Login</button>
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}></Form.Item>

    {/* <button className="sci uses" type="submit">Log in</button> */}
    </form>
    
    </div>
)

}

// import { Button, Checkbox } from "antd";
// import Form from "antd/es/form";
// import Input from "antd/es/input";
// import "./App.css";

// function App() {

//   const login=()=>{
//     MessageChannel.success('Login Successful!')
//   }


//   return (
//     <div className="appBg">
//     <Form className="lg">
//       <Form.Item
//         label="rname"
//         name="rname"
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

//       <Form.Item
//         label="Password"
//         name="Type again Password"
//         rules={[{ required: true, message: 'Please re-type your password!' }]}
//       >
//         <Input.Password />
//       </Form.Item>
//       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>


//     </div>
//   );
// }

// export default Register;
