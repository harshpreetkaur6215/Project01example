import  {useState} from 'react'
import Users from './conponents/Users'

import Form from './conponents/form'
const App = () => {
  const [name,SetName] = useState("");
  const [count,SetCount] =useState(0);
  const [age,SetAge] = useState(0);

  const decrease =()=>{
    if (count> 0 ){
      SetCount(count -1);
    }
  }

  const handlesubmit=(e)=>{
    e.preventDefault();
    alert("form submitted successfully");
    SetName("");
    SetAge(0);
  }

  const handlechange=(e)=>{
  SetName(e.target.value);
  }
  const handleage=(e)=>{
    SetAge(e.target.value);
  }
  return (
    <div>
          <Users/>
  
  <h1>Count :{count}</h1>
 
  <button onClick={()=>SetCount(count+ 1)}> Increase</button>
    <br/>
      <button onClick={decrease}> Decrease </button>
   

   <form onSubmit={handlesubmit} >
     <input type='text' placeholder='Enter name ' value={name}onChange={handlechange}/>
    <input type="number" value={age} onChange={handleage}/>
    <button>Submit</button>
    </form> 


    <h1>Here is form new</h1>
    <Form />
    </div>
    
  
  )
}

export default App