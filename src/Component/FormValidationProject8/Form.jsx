import React, { useState } from "react";
import "./style.css";
const Form = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const [errorUserName, seterrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (username.length > 8) {
      seterrorUserName("");
      setUserColor("green");
    } else {
      seterrorUserName("Username must be more than 8 characters");
      setUserColor("red");
    }

    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Email should have @gmail");
      setEmailColor("red");
    }
    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    }else{
      setErrorPassword("Password must be more than 8 characters");
      setPasswordColor("red")
    }
    if(password!= "" && confirmPassword==password){
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    }else{
      setErrorConfirmPassword("Password and Confirm Password should be same");
      setConfirmPasswordColor("red");
    }
  }
  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor: userColor }}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <p className="error">{errorUserName}</p>

          <input
            type="text"
            placeholder="Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>
          <input
            type="password"
            placeholder="Password"
            style={{ borderColor: passwordColor }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error">{errorPassword}</p>

          <input
            type="password"
            placeholder="Confirm Password"
            style={{borderColor:confirmPasswordColor}}
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
          <p className="error">{errorConfirmPassword}</p>

          <button className="submit-btn" type="submit" onClick={validate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
