import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';

const myElement = <Car brand="Ford" />;

// const z = ['Toyota', 'Ford']
const b = ['1', '2', '3', '4']

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;

}

function Bike() {
  return <h2>Hi, I am a Bike!</h2>;
}


function Button(props) {
  function activateFeedbackOnClick(){
    return <h2>Hi, I am a Bike!</h2>;
  }
  return <button onClick={(e) => activateFeedbackOnClick()}>{props.feedback}</button>
}

function App() {
  // const y = z.map(item => <Car brand={item} />)
  const button = b.map(item => <Button feedback={item} />)
  let x = <div>
      {/* <p>Hello world</p>
      <img src="https://dictionary.cambridge.org/vi/images/thumb/sports_noun_002_35307.jpg?version=5.0.250" alt="Italian Trulli"></img>
      <a href="https://protonx.io/">protonx</a>
      {/* <Car brand="Ford" /> */}
      {/* <Car brand="Toyota"/> */}
      {/* {y} */}
      {button}
    </div>
  return x
}

export default App;
