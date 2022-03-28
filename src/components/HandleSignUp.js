import React from "react";
import { InputBox, InputButton, InputBoxName } from "./GlobalComponents";
import SignUpDataService from "../services/signup.service.js";

class HandleSignUp extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleOnChange = event => {
        this.setState ({[ event.target.name]: event.target.value })
    }

    handleSubmit = () => {
        const subEmail = this.state.email;
        const subPass = this.state.password;

        function submitDetails() {
            var data = {
                email: subEmail,
                password: subPass,
            };

            SignUpDataService.create(data)
                .then(response => {
                    this.setState({
                    })
                })
        }




        function checkNumber(num) {
            const actual = parseInt(num);
            if (actual.length === 0){
                return true;
            }
            if (isNaN(num)) {
                return false;
            }
            return actual.length === 13;
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