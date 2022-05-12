import React from 'react';
import axios from "../api/axios";
import {InputBox, InputButton, WordLink} from "../components/GlobalComponents";

function SignUp() {
        return (
        <div>
            <HandleSignUp/>
        </div>
    )
}


const PWD_REGEX = /^[A-z][A-z0-9-_]{5,23}$/;
    const REGISTER_URL = '/register';

class HandleSignUp extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleOnChange = event => {
        this.setState ({[ event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        const subEmail = this.state.email;
        const subPass = this.state.password;

        if (PWD_REGEX.test(subPass)) { // means that the password and the email are valid
            try {
                axios.create(REGISTER_URL,
                    JSON.stringify({username: subEmail, password: subPass}),
                    {
                        headers: {'Content-Type': 'application/json'},
                        withCredentials: true
                    }
                );
                alert("Successfully created a new account");
            } catch (err) {
                if (!err?.response) { // if there is no response from the node server
                    alert('No Server Response');
                } else {
                    alert('Registration Failed')
                }
            }
        } else {
            // have to make sure the password is valid
            alert(
                "Please make sure that your password is valid:" +
                "  It has to be between 5 and 25 characters and contain no characters"
            )
            alert(
                "Please re enter your email and password"
            )
        }
    }


    render() {
        return(
            <div>
                <div>
                    <h2> Sign up </h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <InputBox
                            placeholder={"*Email"}
                            name={"email"}
                            type={"email"}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div>
                        <InputBox
                            placeholder={"*Password"}
                            type={"password"}
                            name={"password"}
                            className={"password"}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div>
                        <WordLink href={"../SignIn"}>
                            I Already have an account
                        </WordLink>
                        <InputButton
                            type="Submit"
                            value="Sign Up"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;