import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../Context/Stateprovider";
import { actionTypes } from "../../Context/reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(alert.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" />
        <h1>Sign In to prathmesh HQ</h1>
        <p>Prathmesh programmer</p>
        <Button onClick={signIn}>Sign In</Button>
      </div>
    </div>
  );
}

export default Login;
