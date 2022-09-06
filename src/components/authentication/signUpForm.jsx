import "./signUpForm.scss";
import { Button } from "@mui/material";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const goToHandler = () => {
    navigate("/");
  }
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords does not Match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocument(user, { displayName });
      console.log(formFields);
      resetFormFields();
      goToHandler();
    } catch (error) {
      console.log("error in creating user instance", error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="SignUpFormContainer">
      <form className="signUpForm" onSubmit={handleSubmit}>
        <h4>Create an Account</h4>
        <label className="label">displayName</label>
        <input
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
          className="input"
        />
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          className="input"
        />
        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          className="input"
        />
        <label className="label">confirmPassword</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
          className="input"
        />
        <Button variant="contained" type="submit" color="success">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
