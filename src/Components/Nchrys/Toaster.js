import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';


toast.configure()

const Toaster = () => {


//  toastify
const onSubmit =() => {
    toast ('Login sucessful!')
}


    return (

        <div>


            <button onClick={onSubmit} >SIGN IN</button>
            
        </div>
    )
}

export default Toaster




