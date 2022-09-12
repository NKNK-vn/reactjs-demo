import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect }  from 'react';

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
  return <button onClick={(e) => activateFeedbackOnClick()}>{props.feedback} {props.count}</button>
}

function App() {
  // const y = z.map(item => <Car brand={item} />)
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hi');

  const [checkpoint1, setCheckpoint1] = useState(0);
  const [checkpoint2, setCheckpoint2] = useState(0);


  useEffect(() => {
    if (count === 10) {
      alert('Go 1')
      setCheckpoint1(10)
    }
  }, [count])


  useEffect(() => {
    if (checkpoint1 === 10) {
      setCheckpoint2(20)
      alert('Go 2')
    }
  }, [checkpoint1])

  
  const [materials, setMaterials] = useState([])

  // useEffect(() => {
  //   // listmaterials

  //   listmaterials().then((res) => {
  //     if (res.status === 200) {
  //       setMaterials(res.data || []);
  //     }
  //   })
  // }, [])


  // useEffect(() => {
  //   if (materials.length > 0) {
  //     // Call api to get material status.

  //   }
  // }, [materials])


  useEffect(() => {
    console.log('---go')
  }, [])

  const button = b.map(item => <Button feedback={item} />)

  let x = <div>
      {button}
    </div>

  const plusOnClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    setMessage(`I am ${count}`)
  }


  const displayMessage = () => {
    if (count > 1) {
      return <>Better than 1</>
    }
  }

  return <>
    {count}
    <button onClick={() => plusOnClick()}> Plus </button>
    <Button count={count} feedback='Hello' />
    <div>
      {message}
    </div>
    {displayMessage()}
  </>
}

export default App;
