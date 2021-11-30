import React from "react";
import { InputBox, InputButton } from "./GlobalComponents";

class HandleSignUp extends React.Component {
    state = {
        email: '',
        username: '',
        password: ''
    };

    handleOnChange = event => {
        this.setState ({[ event.target.name]: event.target.value })
    }

    handleSubmit() {
        const subEmail = this.state.email;
        alert(subEmail)
        const subUser = this.state.username;
        const subPass = this.state.password;
        alert("Starting");

        function checkEmail(email) {
            const validRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            /* checks whether the values inputted fit the format of an email */
            return !!email.value.match(validRegex);
        }
    }


    render() {
        return(
            <div>
                <div>
                    <p> Sign up and get started! </p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <InputBox placeholder={"Email"}
                                  name={"email"}
                                  className={"email"}
                                  onChange={this.handleOnChange}
                        />
                    </div>
                    <div>
                        <InputBox
                            className={"username"}
                            placeholder={"Username"}
                            name={"username"}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div>
                        <InputBox placeholder={"Password"}
                                  type={"password"}
                                  name={"password"}
                                  className={"password"}
                                  onChange={this.handleOnChange}
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
}

export { HandleSignUp };