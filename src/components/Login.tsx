import React, { SyntheticEvent } from "react";
import { AuthenService } from "../services/AuthenService";

interface LoginProps {
    authenService: AuthenService 
}

interface LoginState {
    userName: string,
    password: string,
    loginAttenpted: boolean,
    loginSuccesfull: boolean
}

// pour gerer les events
interface customEvent {
    target: HTMLInputElement
}

export class Login extends React.Component <LoginProps, LoginState> {

    state: LoginState = {
        userName: '',
        password: '',
        loginAttenpted: false,
        loginSuccesfull: false

    }

    //Should be called everytime the value of user (UN and PW) change
    private setUserName(event: customEvent) {
        this.setState({userName: event.target.value})
        console.log('Setting username to: ' + event.target.value)
    }

    private setPassword(event: customEvent) {
        this.setState({password: event.target.value})
    }

    // async because we will try to access our services
    private async handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        const result = await this.props.authenService.login(
            this.state.userName,
            this.state.password
        )
        if (result) {
            console.log(result)
        } else {
            console.log('Wrong login')
        }
        
    }


    // What we should render/display to the User 
    render(){
        return (
            <div>
                <h2>please login</h2>
                <form onSubmit = {e => this.handleSubmit(e)}>
                    <input value = {this.state.userName} onChange = {e => this.setUserName(e)} /> <br/> {/* Handle input events into our App  */}
                    <input value = {this.state.password} onChange = {e => this.setPassword(e)} type = 'password'></input> <br/>
                    <input type = 'submit' value = 'Login'/>
                </form>
            </div>
      
        )
      }

    
}