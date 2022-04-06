// import React, { Component } from 'react'

import React, {useState} from 'react'

const SigninFn = ({ loadUser, onRouteChange }) => {
  const [data, setData] = useState({
    email : 'abhi',
    password : 'shek'
  })


  const onInputChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const onInputSubmit = (e) => {
    e.preventDefault();
    fetch('https://mysterious-fjord-08911.herokuapp.com/signin', {
            method : 'POST',
            mode: 'cors',
            headers : {'Content-Type' : 'application/json',
            'Accept': 'application/json'},
            body: JSON.stringify({
                'email': data.email,
                'password': data.password
            }) 
    })
    .then(response => response.json())
    .then(user => {
      console.log("signIn:", user)
        if (user.id){
          
          loadUser(user);
          onRouteChange('home');
            // this.props.onRouteChange('home')
        }
        // else{
        //   onRouteChange('signin')
        // }
    }) 
    .catch(err => {
      console.log(err)
      onRouteChange('signin')
    });
        

  }

  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
        <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              onChange={onInputChange}
              type="email" name="email"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 inpu t-reset ba bg-transparent hover-bg-black hover-white w-100" 
              onChange={onInputChange}
              type="password" name="password"  id="password"/>
            </div>
           
          </fieldset>
          <div className="">
            <input
            onClick={onInputSubmit} 
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <p
            onClick={() => onRouteChange('register')} 
            href="#0" className="f6 link dim black db pointer">Register</p>
            
          </div>
        </form>
      </main>
      </article>
  )
}

export default SigninFn;


// class Signin extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             signInEmail : 'abhi',
//             signInPassword : 'shek'
//         }    
//     }

//     onSigninEmailChange = (event) => {
//         this.setState({signInEmail: event.target.value})
//     }

//     onSigninPasswordChange = (event) => {
//         this.setState({signInPassword: event.target.value})
//     }

//     // componentDidMount(){
//     //     fetch('http://10.1.5.17:3000/')
//     //     .then(response => response.json())
//     //     .then(console.log)

//     // }

//     onSigninSubmit = (event) => {
//         // console.log(this.state)
//         fetch('http://10.1.5.17:3000/signin', {
//             method : 'POST',
//             mode: 'cors',
//             headers : {'Content-Type' : 'application/json',
//             'Accept': 'application/json'},
//             body: JSON.stringify({
//                 'email': this.state.signInEmail,
//                 'password': this.state.signInPassword
//             }) 
//         })
//         .then(response => {
//           console.log('response:', response)
//           response.json()})
//         .then(user => {
//           console.log("signIn:", user)
//             if (user.id){
              
//                 (this.props.loadUser(user))
               
//                 // this.props.onRouteChange('home')
//             }
//             // else{
//             //   this.props.onRouteChange('signin')
//             // }
//         }) 
//         .then( id => {
//           console.log(id);
//           this.props.onRouteChange('home')
//         }
//         )
//         .catch(err => {
//           console.log(err)
//         });
        
        
//     }

//     render(){
//     const { onRouteChange } = this.props;
//     //  = ({ onRouteChange }) => {
//     return (
//         <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
//         <main className="pa4 black-80">
//         <form className="measure">
//           <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//             <legend className="f1 fw6 ph0 mh0">Sign In</legend>
//             <div className="mt3">
//               <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
//               <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
//               onChange={this.onSigninEmailChange}
//               type="email" name="email-address"  id="email-address"/>
//             </div>
//             <div className="mv3">
//               <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
//               <input className="b pa2 inpu t-reset ba bg-transparent hover-bg-black hover-white w-100" 
//               onChange={this.onSigninPasswordChange}
//               type="password" name="password"  id="password"/>
//             </div>
           
//           </fieldset>
//           <div className="">
//             <input
//             onClick={this.onSigninSubmit} 
//             className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
//             type="submit" 
//             value="Sign in"
//             />
//           </div>
//           <div className="lh-copy mt3">
//             <p
//             onClick={() => onRouteChange('register')} 
//             href="#0" className="f6 link dim black db pointer">Register</p>
            
//           </div>
//         </form>
//       </main>
//       </article>
//     )
// }
// }

// export default Signin;
