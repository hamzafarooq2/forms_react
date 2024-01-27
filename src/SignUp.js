import React from "react";
import "./SignUp.css";

export default function SignUp() {
  const [signUpData, setSignUpData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinNewsLetter: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setSignUpData((prevSignUpData) => ({
      ...prevSignUpData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  console.log(signUpData);

  function handleSubmit(event) {
    event.preventDefault();
    if(signUpData.password === signUpData.confirmPassword) {
      console.log("Sucessfully signed up")
    } else {
      console.log("Passwords don't match")
      return
    }
    if(signUpData.joinNewsLetter) {
      console.log("Thanks for signing up for our newsletter!")
    } else {
      console.log("PLease check join newsletter")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={signUpData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={signUpData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={signUpData.confirmPassword}
          onChange={handleChange}
        />
        <div className="checkbox-flex">
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinNewsLetter"
            onChange={handleChange}
            checked={signUpData.joinNewsLetter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button>Sign up</button>
      </form>
      <br />
      <br />
      ---------------------Full Form---------------------------
      <br />
      <br />
    </div>
  );
}
