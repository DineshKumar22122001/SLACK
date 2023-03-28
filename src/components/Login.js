import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
const [state,dispatch]=useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
            type:actionTypes.SET_USER,
            user:result.user,
        })
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaeUSn6az3w_sR784pPCdxQGG7R198zd6Tw&usqp=CAU"
          alt="logo"
        ></img>
        <h1>Sign in </h1>
        <p>clever Programmer.slack.com</p>
        <Button onClick={signIn}>Sign in With Google</Button>
      </div>
    </div>
  );
};

export default Login;
