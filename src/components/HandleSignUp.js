import React from "react";
import { Button, InputBox } from "./GlobalComponents";

class HandleSignUp extends React.Component {
    Username = () => {

    }

    render() {
        return(
            <div>
                <div>
                    <p> Sign up and get started! </p>
                </div>
                <div>
                    <InputBox placeholder={"Email"}
                              id={"Username"}
                    />
                </div>
                <div>
                    <InputBox
                        placeholder={"Username"}
                        id={"Username"}
                    />
                </div>
                <div>
                    <InputBox placeholder={"Password"}
                              type={"password"}
                              id={"Password"}
                    />
                </div>
                <div>
                    <Button class={"button"}
                            id={"SignUp"}
                    >Sign Up</Button>
                    <Button class={"button"}
                            id={"SignIn"}
                    >Sign In</Button>
                </div>
            </div>
        )
    }
}

export { HandleSignUp };