import { useState } from "react";
import { LOGIN_USER} from '../utils/mutations';
import {useMutation} from '@apollo/client';
import Auth from '../utils/auth';
import { StyledLogin } from "../styled/Login.styled";

const LoginForm = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }

        setFormState({
            email: '',
            password: '',
        });
    };

    return (

<div>
      <StyledLogin onSubmit={handleFormSubmit}>
        <h3>Login</h3>
            <label>Email: </label>
            <input type="text" value={formState.email} name='email' onChange={handleChange} required/>
            <label>Password:</label>
            <input type="password" value={formState.password} name='password' onChange={handleChange} required/>
            <button className="button">Submit</button>
        </StyledLogin>
    </div>
);
    }
export default LoginForm;