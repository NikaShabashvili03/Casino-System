import React, { useState } from "react";
import './App.css';
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  let [number, setNumber] = useState(1);
  let [number2, setNumber2] = useState(2);
  let [number3, setNumber3] = useState(3);
  let [money, setMoney] = useState(10);
  let [isDisabled, setDisabled] = useState(false);
  let [isDisabled2, setDisabled2] = useState(true);
  const Spin = () => {
      for(let i = 0; i <= 0; i++){
       setNumber(Math.floor(Math.random() * 10))
       setNumber2(Math.floor(Math.random() * 10))
       setNumber3(Math.floor(Math.random() * 10))
      }
      setMoney(money -= 1);  
      if(money <= 0){
        setDisabled(true);
      }
  }
  const amountAdd = () => {
        setMoney(money += 5);
        setDisabled(false);
        if(money > 0){
          setDisabled2(true);
        }
  }
  if(isDisabled == true){
     isDisabled2 = false;
  } 
  if(money > 0){
    if (number == number2 && number == number3 ) {
      money += 5;
    }
    if(number == 7 && number2 == 7 && number3 == 7){
      money += 1000;
    }
  }
  return (
    <div className="App">
      <h1>{isDisabled}</h1>
      <Header isDisabled2={isDisabled2} money={money} amountAdd={amountAdd}/>
      <Body number={number} number2={number2} number3={number3}/>
      {number == number2 && number == number3 && money > 0 && number != 7 && number2 != 7 && number3 != 7
         ? (
          <h2 id="winanim">WIN 5$</h2>
         )
         :( 
          <h2></h2> 
         )
      }
      {number == 7 && number2 == 7 && number3 == 7 && money > 0
         ? (
          <h2 id="biganim">BIIIIIIG WIIIIIIIN JACKPOT + 1000 $</h2>
         )
         :( 
          <h2></h2> 
         )
      }
      {money !== 0
        ? <h2></h2>
        : <h2>You Dont Have a Money Plese Fill It</h2>
      }
      <Footer isDisabled={isDisabled} spin={Spin}/>
    </div>
  );
}

export default App;
