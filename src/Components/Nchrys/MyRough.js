// import React, {useState} from 'react';
// import './Nchrys/Login.css';
// import { Link } from 'react-router-dom';
// import { useHistory,  } from 'react-router-dom';
// import axios from 'axios';
// import { useFormik } from 'formik';
// import 'react-toastify/dist/ReactToastify.css'
// import { toast } from 'react-toastify';





// toast.configure()

// const Login = ({onAdd}) => {

//     const [email, setEmail] = useState ('')
//     const [password, setPassword] = useState ('')
//     const [notify, setNotify] = useState ('')



//     const history = useHistory();


//     const onSubmit = (e) => {
//         e.preventDefault()
//         let data = {email: "eve.holt@reqres.in", password: "cityslick"}
//         console.log(data);
//         axios.post('https://reqres.in/api/login', data)
//         .then(res=> {
//             // console.log (data)
//             if(res.data.token){
//                 setNotify('login succesful')
//                 history.push('./')
//                 localStorage.setItem('token', res.data.token)
//             }
//             else {
//                 setNotify('login failed')
//             }
//         }    )
              
        
//         .catch (error => {
//             console.log(error, 'check error while logging in')
//             setNotify('login failed')
           
//         }
//             )





//         if (!email)  {
//             alert ('please add a task')
//         }
     
//       function onAdd ({ email, password}) {

     
        
//         setEmail ('')
//         setPassword ('')
        
//     }
        
//     }
//  //formik
//  const validate = values => {
//     const errors = {}

//  if(!values.email) {
//      errors.email='Type Email!'
//  } else if (values.email.length < 5) {
//      errors.email= 'Must be 5 characters or more'
//  }
 
//  if(!values.password) {
//      errors.password='Type Password!'
//  } else if (values.password.length < 6) {
//      errors.password= 'Must be 6 characters or more'
//  }
 

//  return errors
//   }


//  const formik = useFormik ( {
//    initialValues:{
//        email:'',
//        password:'',
//    },
//    validate,

//    onSubmit: values => {
//      alert(JSON.stringify(values, null, 2))
//  }
//  })
   

// //  toastify
// const Notify =() => {
//     toast ('Login Sucessful!')
// }




//     return (
//         <div className='Header'>
  

//          <div className='border'>
        
           
//              <div className='mouth'>
            
//             <h1>ACCOUNT LOGIN</h1><span><img src='./Nchrys/henry4.jpeg' /></span> 
//             <form onSubmit={ onSubmit } >
               
               
//             <div className='div-input'>
               
//                 <lab htmlFor='email'>
//                     <input
//                     type='text' placeholder='Email'  value={email} onChange={(e) =>setEmail(e.target.value)  }   />
//                 </lab>
                
//             </div>
//             {formik.errors.email ?  <div  style={{color:'red'}}>{formik.errors.email}  </div>: null}
//             <div className='div-input2'>
//                 <lab htmlFor='password'>
//                     <input type='Password' placeholder='Password'  value={password} onChange={(e) =>setPassword(e.target.value)  }  />
//                 </lab>
//             </div>
//             {formik.errors.password ?  <div   style={{color:'red'}}>{formik.errors.password}  </div>: null}
//             <div className='div-botton'>
//             <button onSubmit={notify}  type='notify'><p>SIGN IN</p></button>
//             <div style={{color:'green'}} >{notify}</div>
//             </div>
           
//             <div className='div-span'>
//                 <span>Forgot </span><span className='span2'>User name / password?</span>
//             <Link to='Signup'> <h4>SIGN UP</h4> </Link>
//             </div>
             
//             </form> 
            
//             </div>
           
//          </div>



            
//         </div>
//     )
// }

// export default Login









// import React, {useState} from 'react'
// import './Signup.css';
// import { Link } from 'react-router-dom';
// import { useHistory,  } from 'react-router-dom'
// import axios from 'axios';
// import { useFormik } from 'formik'



// const Signup = ({onAdd}) => {
  
//     const [firstname, setFirstname] = useState ('')
//     const [lastname, setLastname] = useState ('')
//     const [email, setEmail] = useState ('')
//     const [username, setUsername] = useState ('')
//     const [password, setPassword] = useState ('')
//     const [confirmpassword, setConfirmpassword] = useState ('')
//     const [message, setMessage] = useState ('')



//     const history = useHistory();


//     const onSubmit = (e) => {
//         e.preventDefault()
//         let data = {firstname,lastname,email:'eve.holt@reqres.in',username, password:'pistol',confirmpassword}
//         console.log(data);
//         axios.post('https://reqres.in/api/register', data)
//         .then(res=> {
//             console.log (data)
//             if(res.data.id.token){
//                 setMessage('login succesful')
//                 history.push('./login')
//                 localStorage.setItem('id','token', res.data.id.token)
//             }
//             else {
//                 setMessage('login failed')
//             }
//         }    )
              
        
//         .catch (error => {
//             console.log(error, 'check error while logging in')
//             setMessage('login failed')
           
//         }
//             )








//         if (!email)  {
//             alert ('please add a task')
//         }
     
//        function onAdd ({ firstname,lastname,email,username, password,confirmpassword}) {
     
//         setFirstname('')
//         setLastname('')
//         setEmail ('')
//         setUsername('')
//         setPassword ('')
//         setConfirmpassword ('')
      
        
//        }
        
//     }
//  //formik
//  const validate = values => {
//     const errors = {}

//  if(!values.email) {
//      errors.email='Type Email!'
//  } else if (values.email.length < 5) {
//      errors.email= 'Must be 5 characters or more'
//  }
 
//  if(!values.password) {
//      errors.password='Type Password!'
//  } else if (values.password.length < 6) {
//      errors.password= 'Must be 6 characters or more'
//  }
 

//  return errors
//   }


//  const formik = useFormik ( {
//    initialValues:{
//     firstname:'',
//     lastname:'', 
//     email:'',
//        password:'',
//        confirmpassword:'',
//    },
//    validate,

//    onSubmit: values => {
//      alert(JSON.stringify(values, null, 2))
//  }
//  })
   




//     return (
//         <div className='Header2'>

//          <div className='border2'>
//              <div className='mouth2'>
//             <h1>ACCOUNT SIGN UP</h1>
//             <form onSubmit={onSubmit } >
//             <div className='div-input3'>
//                 <lab>
//                     <input type='text' placeholder='First Name'value={firstname} onChange={(e) =>setFirstname(e.target.value)  }  />
//                 </lab>
//             </div>
//             <div className='div-input3'>
//                 <lab>
//                     <input type='text' placeholder='Last Name' value={lastname} onChange={(e) =>setLastname(e.target.value)  }  />
//                 </lab>
//             </div>
//             <div className='div-input3'>
//                 <lab>
//                     <input type='text' placeholder='Email Address' value={email} onChange={(e) =>setEmail(e.target.value)  }  />
//                 </lab>
//             </div>
//             <div className='div-input3'>
//                 <lab>
//                     <input type='text' placeholder='User name' value={username} onChange={(e) =>setUsername(e.target.value)  } />
//                 </lab>
//             </div>
           
//             <div className='div-input4'>
//                 <lab>
//                     <input type='Password' placeholder='Password' value={password} onChange={(e) =>setPassword(e.target.value)  }  />
//                 </lab>
//             </div>
//             <div className='div-input4'>
//                 <lab>
//                     <input type='Password' placeholder='Confirm Password' value={confirmpassword} onChange={(e) =>setConfirmpassword(e.target.value)  }  />
//                 </lab>
//             </div>
//             <div className='div-botton2'>
//             <button onClick={onSubmit}><p>SIGN Up</p></button>
//             <div style={{color:'green'}} >{message}</div>
//             </div>
//             <div className='div-span2'>
//                 <Link to='Login'> <span>LOGIN </span></Link><span className='span2'>If you have an account</span>
//             </div>
//             </form>
//             </div>
//          </div>



            
//         </div>
//     )
// }

// export default Signup 
