import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Districts name="jahidul islam" special="vibag"  ></Districts>
      <Districts name="mahidul islam" special="maramari"  ></Districts>
      <Districts name="rakibul islam" special="santovai "  ></Districts>
      <Districts name="ramima islam" special="moynamoti "  ></Districts>
      <Loadpost></Loadpost>
      
    </div>
  );
}


function Loadpost(){
  const [posts,setPost]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setPost(data));
  },[])

  return(
    <div>
      <h3>post length:{posts.length}</h3>
      {
        posts.map(post=> <p>{post.title}</p> )
      }

    </div>

  )
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
