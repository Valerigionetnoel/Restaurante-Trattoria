import { useState } from "react";

//Import the SIGNUP_USER Mutation once created
import {useMutation} from '@apollo/client';
//import Auth from '../utils/auth';
import { StyledLogin } from "../styled/Login.styled";

const SignupForm = () => {
    const[formData, setFormData] = useState({username: '', email: '', password: ''});

    const submitForm = () => {

    }

    return ( 
    <div>
        
        <StyledLogin onSubmit={submitForm}>
        <h3>Sign Up</h3>
            <label>Username: </label>
            <input type="text" value={formData.username} name='name' required />
            <label>Email: </label>
            <input type="email" value={formData.email} name='email' required/>
            <label>Password:</label>
            <input type="password" value={formData.password} name='password'required/>
            <button className="button">Submit</button>
        </StyledLogin>

    </div> );
}
 
export default SignupForm;