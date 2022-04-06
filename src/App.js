import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Rank from './components/Rank/Rank';
import Particle from './components/Particle/Particle';
import FacePrediction from './components/FacePrediction/FacePrediction';
import Signin from './components/Signin/Signin';
import SigninFn from './components/Signin/SigninFn';
import Register from './components/Register/Register';
import RegisterFn from './components/Register/RegisterFn';


const initialstate = {
  input : "",
  imageUrl : "",
  box: {},
  route: '',
  issignedin : false,
  user : {
    id: '',
    name: '',
    email: '',
    password: '',
    entries: 0,
    joined: '',
    input: ''
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = initialstate;
    // console.log("Hi", this.state)
  }

  loadUser = (data) => {
    this.setState({user : {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      entries: data.entries,
      joined: data.joined
    }})
    console.log(this.state)
  }


  onInputChange = (event) =>  {
    this.setState({input: event.target.value});
    // console.log('Input Changed:', event.target.value)
  }

  calculateFaceLocation = (response) => {
    const clarifaiFace = response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage')
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(height, width)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box})
  }

  onButtonChange = () => {
    this.setState({imageUrl: this.state.input});
    fetch('http://10.1.5.17:3000/imageurl', {
      method : 'POST',
      mode: 'cors',
      headers : {'Content-Type' : 'application/json'},
      body: JSON.stringify({
          input : this.state.input,
      }) 
      })
      .then(response => response.json())
      .then(response => {
        if (response){
          fetch('http://10.1.5.17:3000/image', {
            method : 'PUT',
            mode: 'cors',
            headers : {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                'id': this.state.user.id,
            }) 
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user,
            {
            entries: count
          }))
        })
        .catch(err => console.log(err));

        }
        this.displayFaceBox(this.calculateFaceLocation(response))})
      .catch(err => console.log(err));
  }
  
  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState(initialstate)
    }else if (route === 'home'){
      this.setState({issignedin: true})
    }
    this.setState({route: route})
  }

  render() {
    const { route, issignedin, imageUrl, box, user } = this.state;
    console.log("route", route);
    return (
      <div className="App">
        {/* <Particle className="particles"/> */}
        <Navigation onRouteChange={this.onRouteChange} issignedin={issignedin}/>
        {route === 'home' 
        ? <div>
        <Logo />
        <Rank name={user.name} entries={user.entries}/>
        <ImageLinkForm inputChange={this.onInputChange} buttonChange={this.onButtonChange}/>
        <FacePrediction box={box} imgUrl={imageUrl}/>
        </div>
        : (route === 'signin' 
        ? 
        // <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        <SigninFn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        : 
        // <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
        <RegisterFn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
        )}
      </div>
    );
  }
}

export default App;
