import "./signinform.scss";
import { Button } from "@mui/material";
import {
  signInWithGooglePopUp,
  signInUserWithEmailAndPassword,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import SignUpForm from "./signUpForm";
import { Link, useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const goToHandler = () => {
    navigate("/");
  };
  const defultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defultFormFields);
  };
  const signInwithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocument(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
      goToHandler();
    } catch (error) {
      console.log("error in user signIn", error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="SignInFormContainer">
      <form className="signInForm" onSubmit={handleSubmit}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          className="input"
          id="email"
        />
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
          className="input"
          id="password"
        />
        <div className="btn-group">
          <Button variant="contained" type="submit" color="success">
            Sign In
          </Button>
          <Button
            variant="contained"
            onClick={signInwithGoogle}
            color="success"
          >
            Sign In with google
          </Button>
        </div>
        <div className="redirect">
          Don't have an account yet?{" "}
          <Link className="signuplink" to="SignUp">
            sign Up
          </Link>
        </div>
      </form>
      {/* <SignUpForm /> */}
    </div>
  );
};

export default SignInForm;
