import React from "react";
import { InputBox, InputButton, InputBoxName } from "./GlobalComponents";
class HandleSignUp extends React.Component {
    state = {
        email: '',
        number: '',
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
        const subNum = this.state.number;

        function checkEmail(email) {
            const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return !!email.value.match(validRegex);
        }

        function checkNumber(num) {
            if (isNaN(num)) {
                return false;
            }
            const actual = parseInt(num);
            if (actual.length!==13) {
                return false;
            }
        }

        function checkUsername(user) {
            return 4 <= user.length <= 16;
        }

        function checkPassword(pass) {
            return 6 <= pass.length <= 16;
        }

        alert(checkNumber(subNum));
        alert(checkEmail(subEmail));
        alert(checkUsername(subUser));
        alert(checkPassword(subPass));
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
                            onChange={this.handleOnChange}
                        />
                        <InputBoxName
                            className={"lastname"}
                            placeholder={"*Last name"}
                            name={"lastname"}
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