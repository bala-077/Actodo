import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = (props) => {
    const [Username, setUsername] = useState()
    const [Password, setPassword] = useState()
    const [Rpassword, setRpassword] = useState()
    const navigate = useNavigate()


    const data = props.data
    const setData = props.setData

    const handleUser = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleRpassword = (event) => {
        setRpassword(event.target.value)
    }

    const handleEvent = () => {
        if(Password === Rpassword){
        setData([...data,{username: Username, password: Password}])
        console.log(data.username)
        console.log("Sucess")
        navigate('/')
        }
        else{
            console.log("Unsucess")
        }
    }

  return(
  <div className="bg-black p-10">
    <div className="bg-[#efefef] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey hi👋</h1>
        <p>I Help You Manage Your Activities After You Login</p>
        <div className="flex flex-col gap-2 my-2">
            <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="UserName" onChange={handleUser}/>
            <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password" onChange={handlePassword}/>
            <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Confirm Password" onChange={handleRpassword}/>
            <button className="bg-[#8272da] w-24 p-1 rounded-md" onClick={handleEvent}>Signup</button>
            <p>Already Have An Account? <Link to={'/'}>Login</Link></p>
        </div>
    </div>
  </div>
  )
};

export default Signup;
