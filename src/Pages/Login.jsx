import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [ruser, setRuser] = useState(true);
  const navigate = useNavigate()

  const data = props.data;

  const Username = (event) => {
    setUsername(event.target.value);
  };

  const Password = (event) => {
    setPassword(event.target.value);
  };

  const handleChange = () => {
    console.log(data);
    var checkData = false;
    data.forEach(function (item) {
      console.log(item, "hello");
      if (item.username === username && item.password === password) {
        console.log("Login Sucessfull");
        checkData = true;
        navigate('/landing',{state:{user:username}})
        setUsername('')
        setPassword('')
      }
    });
    if (checkData === false) {
      console.log("Login Unsucessfull");
      setRuser(false)
    }
  };

  return (
    <div className="bg-black p-10">
      <div className="bg-[#efefef] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey hi👋</h1>
        {ruser ? (
          <p>I Help You Manage Your Activities After You Login</p>
        ) : (
          <p
            className="text-red-700
            "
          >
            Please Signup Before You Login
          </p>
        )}

        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="UserName"
            onChange={Username}
          />
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password"
            onChange={Password}
          />
          <button
            className="bg-[#8272da] w-24 p-1 rounded-md"
            onClick={handleChange}
          >
            Login
          </button>
          <p>
            Don't Have An Account? <Link to={"/signup"}>Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
