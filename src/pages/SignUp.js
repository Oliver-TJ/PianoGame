import React from 'react';
import { Button, InputBox } from '../components/GlobalComponents.js';

function SignUp() {
    return (
    <div>
        <div>
            <p> Sign up and get started! </p>
        </div>
        <div>
            <InputBox placeholder={"Email"}/>
        </div>
        <div>
            <InputBox placeholder={"Username"}/>
        </div>
        <div>
            <InputBox placeholder={"Password"}/>
        </div>
        <div>
            <Button class={"button"} ref={'/SignIn'}>Sign Up</Button>
            <Button class={"button"}>Sign In</Button>
        </div>
    </div>
    )
}



export default SignUp;