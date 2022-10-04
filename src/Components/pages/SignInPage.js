import React, { useState } from "react";
import SignIn from "../Signin/SignIn";
import UserPage from "../UserPage/UserPage";

function SignInPage() {
  const appUser = {
    username: "usmonzo",
    password: "usmonzo",
  };
  const [user, setUser] = useState({ username: "", password: "" });

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
      {user.username !== "" ? (
        <UserPage Logout={Logout} />
      ) : (
        <SignIn Login={Login} />
      )}
    </>
  );
}

export default SignInPage;
