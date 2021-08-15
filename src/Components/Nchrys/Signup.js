import axios from 'axios'
import React, { useState } from 'react'
import './Signup.css';
import { Link } from 'react-router-dom'
import { useHistory,  } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';




toast.configure()


const Signup = ({onAdd}) => {

    const history = useHistory();


    const [firstname, setFirstname] = useState ('')
    const [lastname, setLastname] = useState ('')
    const [email, setEmail] = useState ('')
    const [username, setUsername] = useState ('')
    const [password, setPassword] = useState ('')
    const [confirmpassword, setConfirmpassword] = useState ('')
    const [message, setMessage] = useState ('')
    


    
    const onSubmit = (e) => {
        e.preventDefault()
        let data = {email:'eve.holt@reqres.in',password:'pistol'}
        console.log(data);
        axios.post('https://reqres.in/api/register', data)
    .then(res=> {
        if(res.data.token){
            toast('Register sucessful')
            history.push('./Login')
            localStorage.setItem('token', res.data.token)
        }else {
            toast('Register failed')
        }
    }    )
    .catch (error => {
        console.log(error, 'this is an error')
        toast('Register failed')
    }
        )
     
    if (!email)  {
        alert ('please add a task')
    }

 
    onAdd ({ firstname,lastname,email,username, password,confirmpassword})
 
    setFirstname('')
   setLastname('')
    setEmail ('')
    setUsername('')
    setPassword ('')
    setConfirmpassword ('')
    

    
     }
 
     
     
    return (
        <div className='Header2'>

        <div className='border2'>
            <div className='mouth2'>
           <h1>ACCOUNT SIGN UP</h1>
           <form onSubmit={onSubmit } >
           <div className='div-input3'>
               <lab>
                   <input type='text' placeholder='First Name'value={firstname} onChange={(e) =>setFirstname(e.target.value)  }  />
               </lab>
           </div>
           <div className='div-input3'>
               <lab>
                   <input type='text' placeholder='Last Name' value={lastname} onChange={(e) =>setLastname(e.target.value)  }  />
               </lab>
           </div>
           <div className='div-input3'>
               <lab>
                   <input type='text' placeholder='Email Address' value={email} onChange={(e) =>setEmail(e.target.value)  }  />
               </lab>
           </div>
           <div className='div-input3'>
               <lab>
                   <input type='text' placeholder='User name' value={username} onChange={(e) =>setUsername(e.target.value)  } />
               </lab>
           </div>
          
           <div className='div-input4'>
               <lab>
                   <input type='Password' placeholder='Password' value={password} onChange={(e) =>setPassword(e.target.value)  }  />
               </lab>
           </div>
           <div className='div-input4'>
               <lab>
                   <input type='Password' placeholder='Confirm Password' value={confirmpassword} onChange={(e) =>setConfirmpassword(e.target.value)  }  />
               </lab>
           </div>
           <div className='div-botton2'>
           <button onClick={onSubmit}><p>SIGN Up</p></button>
           <div style={{color:'green'}} >{message}</div>
           </div>
           <div className='div-span2'>
               <Link to='Login'> <span>LOGIN </span></Link><span className='span2'>If you have an account</span>
           </div>
           </form>
           </div>
        </div>



           
       </div>
    )
    }


// CSS in JS

export default Signup
