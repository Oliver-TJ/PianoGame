import React from "react";
import { InputBox, InputButton, InputBoxName } from "./GlobalComponents";
import SignUpDataService from "../services/signup.service.js";

class HandleSignUp extends React.Component {
    state = {
        email: '',
        number: '',
        firstname: '',
        lastname: '',
        password: ''
    };

    handleOnChange = event => {
        this.setState ({[ event.target.name]: event.target.value })
    }

    handleSubmit = () => {
        const subEmail = this.state.email;
        const subFirst = this.state.firstname;
        const subLast = this.state.lastname
        const subPass = this.state.password;
        const subNum = this.state.number;

        function submitDetails() {
            var data = {
                email: subEmail,
                firstname: subFirst,
                lastname: subLast,
                password: subPass,
                number: subNum
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
                        <InputBoxName
                            className={"firstname"}
                            placeholder={"*First name"}
                            name={"username"}
                            type={"name"}
                            onChange={this.handleOnChange}
                        />
                        <InputBoxName
                            className={"lastname"}
                            placeholder={"*Last name"}
                            name={"lastname"}
                            type={"name"}
                            onChange={this.handleOnChange}
                        />
                    </div>
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
                            placeholder={"Mobile Number"}
                            name={"mobile"}
                            type={"number"}
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