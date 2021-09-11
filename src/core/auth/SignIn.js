import React, { useContext, useState } from 'react'
import { Link,useHistory } from "react-router-dom";
import {signInUser} from '../../server'
import NavBar from '../NavBar';
import '../styles/sign_up.css'

// import SignInContext from '../../contexts/SignIn-context'
export default function SignIn() {
    // const {signInInfo,dispatch} = useContext(SignInContext);
    const [signInInfo,SetSingInInfo]=useState({email:"ofer3klein@gmail.com",password:"ofer3k1998"})
    const [error,setError]=useState({isError:false,msg:''})
    let history = useHistory();
   
    
    const handeleChange=(e)=>{
        SetSingInInfo({...signInInfo,[e.target.name]:e.target.value})
        console.log(signInInfo)
    }
    const handleSubmit= async (e)=>{
        e.preventDefault()
        try {
            const data=await signInUser(signInInfo)   
            if(data.error)
            {
                console.log(data.error)
                setError({isError:true,msg:data.error})
                return
            }      
            setError(false)
            localStorage.setItem('token', data.token);            
            // setInterval(() => {
            //     localStorage.clear()
            // }, 2*60*60*1000);
            history.push("/main");
            return

        } catch (error) {
            setError({isError:true,msg:error})
        }

    }

    return (
        <span>
        <NavBar/>
        <div className={"wrapper fadeInDown"}>
  <div id={"formContent"}>
      {!error.isError&&<h2 className={"inactive underlineHover"}>Sign In </h2>}
    {error.isError&&<h2>{error.msg}</h2>}
    <form>
      <input onChange={handeleChange} type="text" id={"login"} className="fadeIn second" name={'email'} placeholder="email"/>

      <input type="password" id={"password"} className={"fadeIn third"} name={'password'} onChange={handeleChange} placeholder="password"/>
      <input type="submit" onClick={handleSubmit} className={"fadeIn fourth"} value="Log In"/>
    </form>

    <div id="formFooter">
    </div>
  </div>
</div>
   
        </span>
    )
}
