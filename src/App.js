import logo from './logo.svg';
import './App.css';

import { Profile } from './profile/Profile';
import Image from './profile/Profyle.jpg'
const styleObj = {width : '500px',height :'400px',margin:'40px'}
function App() {
 const handleName = (user) =>{
    alert(`this profile user is ${user}`)

  }
  return (
    <div className="App">
      <img src={Image} alt ="face" style = {styleObj}/>
      <Profile fullName = "Cute Puppy" bio ="Friend of msn" profession = "Company" handleName = {handleName} />
      
        
      
    </div>
  );
}


export default App;
