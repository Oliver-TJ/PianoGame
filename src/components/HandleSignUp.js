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

    handleSubmit = () => {
        const subEmail = this.state.email;
        const subUser = this.state.username;
        const subPass = this.state.password;

        function checkEmail(email) {
            const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return !!email.value.match(validRegex);
        }

        function checkUsername(user) {
            return 4 <= user.length <= 16;
        }

        function checkPassword(pass) {
            return 6 <= pass.length <= 16;
        }

        alert(checkEmail(subEmail));
        alert(checkUsername(subUser));
        alert(checkPassword(subPass));
    }


    render() {
        return(
            <div>
                <div>
                    <p> Sign up </p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <InputBox
                            placeholder={"Email"}
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
                        <InputBox
                            placeholder={"Password"}
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