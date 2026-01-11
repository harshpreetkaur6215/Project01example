import  { useEffect, useState } from 'react'

const form = () => {
    const [formDetails,SetformDetails] = useState({
        name:"",
        age:"",
        email:""
    })

    const handlechange=(e)=>{
        const {name , value } =e.target;
        SetformDetails({
            ...formDetails,
            [name]:value,
        })
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        alert("Data Submitted successfully");

    }
  
useEffect(() => {
  console.log("Form data change hua:", formDetails);
}, [formDetails]);

  return (
    <div>
        <form onSubmit={handlesubmit} >

        <input type="Text" value={formDetails.name} placeholder='Enter Name ' onChange={handlechange}/>
<br/>
        <input type="number" value={formDetails.age}  onChange={handlechange}/>

<br/>
        <input type="email" value={formDetails.email} placeholder='Enter email ' onChange={handlechange}/>
<br/>

<button>submit</button>
        </form>
    </div>
  )
}

export default form