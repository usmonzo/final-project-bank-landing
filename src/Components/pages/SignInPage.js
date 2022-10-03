import React, { useState } from "react";
import SignIn from "../Signin/SignIn";

function SignInPage() {
  const appUser = {
    username: "usmonzo",
    password: "usmonzo",
  };
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.username === appUser.username &&
      details.password === appUser.password
    ) {
      console.log("Logged in !");
      setUser({
        username: details.username,
        password: details.password,
      });
    } else {
      console.log("Details do not match...");
    }
  };
  const Logout = () => {
    console.log("logout: ");
    setUser({ username: "", password: "" });
  };
  return (
    <>
      {user.username != "" ? (
        <>
          <h1 style={{ color: "#fff" }}>welcome {user.username}</h1>
          <button onClick={Logout}> heeeeee</button>
        </>
      ) : (
        <SignIn Login={Login} error={error} />
      )}
    </>
  );
}

export default SignInPage;
