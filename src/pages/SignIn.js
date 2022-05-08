import React from 'react';
import {InputBox, InputButton, WordLink} from "../components/GlobalComponents";

function SignIn() {
    return (
        <div>
            <HandleSignIn/>
        </div>
    )
}

class HandleSignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChangeUs = this.handleChange.bind(this);
        this.handleChangePa = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(this.state);
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h2>
                        Sign In
                    </h2>
                </div>
                <div>
                    <InputBox
                        type="email"
                        value={this.state.value}
                        onChange={this.handleChangeUs}
                        placeholder={"*Email"}
                    />
                </div>
                <div>
                    <InputBox
                        type="password"
                        value={this.state.value}
                        onChange={this.handleChangePa}
                        placeholder={"*Password"}
                    />
                </div>
                <div>
                    <WordLink href={"../SignUp"}>
                        I need to make an account
                    </WordLink>
                    <InputButton type="submit" value="Sign In" />
                </div>
            </form>
        );
    }
}



export default  SignIn;