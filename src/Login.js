import React, { useState } from "react";
import "./login.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "./firebase"; // Import the correct functions

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // For toggling between sign in and sign up
  const [name, setName] = useState(""); // For sign-up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/"); // Redirect after successful login
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signin(email, password); // Corrected function name
      navigate("/"); // Redirect after successful sign-in
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signup(name, email, password); // Corrected function name
      navigate("/"); // Redirect after successful signup
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>
        {error && <p className="error-message">{error}</p>}

        {!isSignUp && (
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={isSignUp ? handleSignup : handleSignin}
          disabled={loading}
        >
          {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
        </button>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          style={{ backgroundColor: "red", color: "white", marginTop: "10px" }}
        >
          {loading ? "Processing..." : "Sign In with Google"}
        </button>

        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span
            onClick={() => setIsSignUp((prev) => !prev)}
            style={{ cursor: "pointer", color: "blue", marginLeft: "5px" }}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
