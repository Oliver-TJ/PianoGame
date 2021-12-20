import React from "react";
import { useState } from "react";
import { InputBox, InputButton } from "./GlobalComponents";

class HandleSignUp extends React.Component {



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