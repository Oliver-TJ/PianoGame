import React from 'react';
import { useState } from "react";
import { InputBox, InputButton } from "../components/GlobalComponents";

function SignUp() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }


    return (
        <div>
            <div>
                <p> Sign up and get started! </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <InputBox placeholder={"Email"}
                              className={"email"}
                              value={inputs.email}
                              onChange={handleChange}
                    />
                </div>
                <div>
                    <InputBox
                        className={"username"}
                        placeholder={"Username"}
                        value={inputs.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <InputBox placeholder={"Password"}
                              type={"password"}
                              value={inputs.password}
                              onChange={handleChange}
                    />
                </div>
                <div>
                    <InputButton
                        type="Submit"
                        value="Sign Up"
                    />
                </div>
            </form>
        </div>
    )
}

export default SignUp;