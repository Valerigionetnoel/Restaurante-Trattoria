import { useState } from "react";
//Import the LOGIN_USER Mutation once created
import {useMutation} from '@apollo/client';
//import Auth from '../utils/auth';
import { Col, Divider, Row } from 'antd';
import { StyledLogin } from "../styled/Login.styled";

const LoginForm = () => {
    const [formData, setFormData] = useState({email: '', password: ''});
   // const [login, {error}] = useMutation(SIGNUP_USER);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    };

    const handleFormSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        try{
           // const {data} = await login({
          //      variables: {...formData}
           // });
           // console.log(data);
          //  Auth.login(data.login.token);
        }catch (err){
            console.error(err);
            //Add an alert right here
        }
        setFormData({
            email: '',
            password: ''
        })
    }

    return (

<div>
      <Col className="gutter-row" span={24}>
      <StyledLogin onSubmit={handleFormSubmit}>
        <h3>Login</h3>
            <label>Email: </label>
            <input type="email" value={formData.email} name='email' required/>
            <label>Password:</label>
            <input type="password" value={formData.password} name='password'required/>
            <button className="button">Submit</button>
        </StyledLogin>
      </Col>

    </div>
);
    }
export default LoginForm;