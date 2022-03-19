import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Districts name="jahidul islam" special="vibag"  ></Districts>
      <Districts name="mahidul islam" special="maramari"  ></Districts>
      <Districts name="rakibul islam" special="santovai "  ></Districts>
      <Districts name="ramima islam" special="moynamoti "  ></Districts>
      
      
    </div>
  );
}

const districstyle={
  backgroundColor:'lightblue',
  padding:'23px',
  margin:'20px',
  borderRadius:'20px'

}
function Districts(props){
  const[power,setPower]=useState(1);
  const boostPower=()=>{
    const newPower=power*2;
    setPower(newPower);

  }

  return(

    <div style={districstyle} >
      <h2>Name :{props.name} </h2>
      <p>Speciality :{props.special}</p>
      <h4>Power :{power}</h4>
      <button onClick={boostPower} >Boost the power</button>

    </div>
  )
}

export default App;
