import { useState } from "react";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  // form email/password data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const user = auth.currentUser;

  const handleEmailAuth = async (e) => {
    e.preventDefault();

    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {};

  return (
    <div className="auth-container">
      {!user ? (
        <div className="auth-card">
          <h2>Welcome to Listo 🛍️</h2>
          <p>{isSignup ? "Create your account" : "Sign in to continue"}</p>

          <form onSubmit={handleEmailAuth} className="auth-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              // this is controlled element
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              //  // this conrolled elements
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error-text">{error}</p>}
            <button type="submit" className="email-btn">
              {isSignup ? "Sign Up" : "Login"}
            </button>
          </form>

          <p className="toggle-auth">
            {isSignup ? "Already have an account?" : "New user?"}{" "}
            <span onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? "Login here" : "Sign up here"}
            </span>
          </p>

          <div className="divider">or</div>

          <button className="google-btn" onClick={handleGoogleLogin}>
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />
            Sign in with Google
          </button>
        </div>
      ) : (
        <div className="auth-logged">
          <div className="user-info">
            <img src={user.photoURL || "/user-icon.png"} alt="user" />
            <div>
              <p>
                Hello, <strong>{user.displayName || user.email}</strong>
              </p>
              <small>{user.email}</small>
            </div>
          </div>
          {/* <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button> */}
        </div>
      )}
    </div>
  );
}
