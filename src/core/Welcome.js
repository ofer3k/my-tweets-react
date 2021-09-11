import React from 'react'
import { Link } from "react-router-dom";
import NavBar from './NavBar';

export default function Welcome() {
  // console.log(process.env.REACT_APP_CLIENT_SERVER,'REACT_APP_CLIENT_SERVER');
  // console.log(process.env.REACT_SERVER_API1,'REACT_SERVER_API');
  
    return (
        <div>
        <NavBar/>
        <div className={"wrapper fadeInDown"}>
        <div id={"formContent"}>
      {<h2 className={"inactive underlineHover"}>The application uses the following technologies:</h2>}
      
    {/* {error.isError&&<h2>{error.msg}</h2>} */}
    <form>
      <input disabled type="text"  className="fadeIn second"  placeholder="NodeJS"/>
      <input disabled type="text"  className="fadeIn second"  placeholder="React"/>
      <input disabled type="text"  className="fadeIn second"  placeholder="MongoDB"/>
      <input disabled type="text"  className="fadeIn second"  placeholder="Cloudinary"/>
      <input disabled type="text"  className="fadeIn second"  placeholder="AWS"/>
      <input disabled type="text"  className="fadeIn second"  placeholder="Bootstrap"/>
      <input disabled type="text"  className="fadeIn second"  placeholder="MaterialUI"/>

      {/* <input type="text" id={"password"} className={"fadeIn third"} name={'password'} onChange={handeleChange} placeholder="password"/> */}
      {/* <input type="submit" onClick={handleSubmit} className={"fadeIn fourth"} value="Log In"/> */}
    </form>

    <div id="formFooter">
    </div>
  </div>
</div>
        </div>
    )
}
