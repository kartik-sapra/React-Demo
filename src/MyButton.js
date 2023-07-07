import {React,Component} from 'react'
 function MyButton()
{
    const dojob=()=>alert("hello")
    return(
        <div>
            <button onClick={dojob}>le pad le</button>
        </div>
    )
}
export default MyButton;