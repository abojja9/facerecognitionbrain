import React, { Component } from 'react'

class Register extends Component{
    constructor(props){
        super();
        this.state = {
            email : '',
            password: '',
            name: ''
        }

    }

    onNameChange = (event) => {
        this.setState({name : event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onRegisterSubmit = (event) => {
        console.log("onRegisterSubmit:", event)
        // fetch('http://10.1.5.17:3000/register', {
        //     method : 'POST',
        //     mode: 'cors',
        //     headers : {'Content-Type' : 'application/json',
        //     'Accept': 'application/json'},
        //     body: JSON.stringify({
        //         'email': this.state.email,
        //         'password': this.state.password,
        //         'name': this.state.name
        //     }) 
        // })
        // .then(response => response.json())
        // .then(user => {
        //     console.log("OnRegister:", user, this.props)
        //     if (user.id){
        //       this.props.loadUser(user);
        //       this.props.onRouteChange('home')
        //     } else{
        //       this.props.onRouteChange('signin');
        //     }
        //     // this.props.onRouteChange('home');
        //     // if (user){
        //     //     this.props.loadUser(user)
        //     //     this.props.onRouteChange('home');
        //     // }
        // })
        // // .then(
        // //     this.props.onRouteChange('home')
        // // )
        // .catch(err => {
        //   console.log(err)
        // });
        // // this.props.loadUser(user)

        
        
        
    }
    // = ({ onRouteChange }) => {
    render(){
        // const { onRouteChange } = this.props;
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
        <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="text" 
              name="name"  
              id="name"
              onChange={this.onNameChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input 
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="email" 
              name="email-address"  
              id="email-address"
              onChange={this.onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="password" 
              name="password"  
              id="password"
              onChange={this.onPasswordChange}
              />
            </div>
           
          </fieldset>
          <div className="">
            <input
            onSubmit={this.onRegisterSubmit} 
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Register"
            />
          </div>
          
        </form>
      </main>
      </article>
    )
    }
}

export default Register;
