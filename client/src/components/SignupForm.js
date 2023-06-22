import { useState } from "react";
import {useMutation} from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { StyledLogin } from "../styled/Login.styled";

const SignupForm = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [addUser] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(event, name, value);

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState},
            });
            console.log(data);

            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
            console.log('LOG ERR', err);
        }
    };

    return ( 
    <div>
        
        <StyledLogin onSubmit={handleFormSubmit}>
        <h3>Sign Up</h3>
            <label>Username: </label>
            <input type="text" value={formState.username} name='username' onChange={handleChange} required />
            <label>Email: </label>
            <input type="text" value={formState.email} name='email' onChange={handleChange} required/>
            <label>Password:</label>
            <input type="password" value={formState.password} name='password' onChange={handleChange} required/>
            <button className="button">Submit</button>
        </StyledLogin>

    </div> );
}
 
export default SignupForm;