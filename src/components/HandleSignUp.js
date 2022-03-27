import React from "react";
import { InputBox, InputButton, WordLink } from "./GlobalComponents";
import SignUpDataService from "../services/signup.service.js";

class HandleSignUp extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleOnChange = event => {
        this.setState ({[ event.target.name]: event.target.value })
        /* Sets the name to the value when it is entered */
    }

    handleSubmit() {
        var data = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(data);
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
                            I already have an account
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

export { HandleSignUp };