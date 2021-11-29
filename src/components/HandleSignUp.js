import React from "react";
import { Button, InputBox, InputButton } from "./GlobalComponents";

class HandleSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault();
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
                                  value={this.state.value}
                                  onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <InputBox
                            placeholder={"Username"}
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <InputBox placeholder={"Password"}
                                  type={"password"}
                                  value={this.state.value}
                                  onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <InputButton
                            type="submit"
                            value="Sign Up"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export { HandleSignUp };