import React, { useState } from 'react'
import './Home.css';
import axios from 'axios'
import { Link } from 'react-router-dom';


const Home = () => {

    const [task, setTask] = useState ([])
      

    const getTask  = () => { 
        axios.get ('http://jsonplaceholder.typicode.com/users')
        .then(
           (response) => {
               setTask ( response.data);
               console.log (task);
           }
       );

       };




    return (
        <div className='main'>
           <div className='boss'>
           
               <h1>Meme Generator</h1>
           </div>
          
           <div className='boss1'> 
           <label className='lb1'>Top Text  </label>
           <input type='text' placeholder='Input Your Top Text' />
          <br/>
           <label className='lb2'>Bottom Text </label>
           <input className='input1'  type='text' placeholder='Input Your Bottom Text' />
            <br/>
           <button button onClick={getTask}
           className='btn1'> <h5>Submit </h5></button>

           <div className='boss2'>
                {task.map((tasks) => (<h1 key={tasks.id} >  {tasks.id.name} </h1>))}  


           
</div>

            </div>
            

        
        </div>
    )
}

export default Home
