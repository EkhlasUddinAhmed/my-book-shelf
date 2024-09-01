import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { AuthContext } from "../AuthProvider/AuthProvider";

const LogIn = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const REDIRECT_URL = location?.state ? location.state : "/";
  console.log({ locationInLogIn: location });
  const { loginCustomUser } = useContext(AuthContext);
  const handleCustomLoggedInUser = async (e) => {
    try {
      e.preventDefault();
      setError(null);

      console.log({ email, password });

      const userCredential = await loginCustomUser(email, password);
      const user = userCredential.user;
      setLoggedUser(user);
      console.log(user);
      setEmail("");
      setPassword("");
      if (!user?.emailVerified) {
        prompt("Go To Your Email and Verify Your Email");
        return;
      }
      navigate(REDIRECT_URL);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    try {
      e.preventDefault();
      await sendPasswordResetEmail(auth, email);
      prompt(
        "Password Reset Email is Sent to Your Email. Please Check Your Email and Reset your Password"
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="h-screen bg-stone-200">
      <div className="h-screen bg-stone-200">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <p>{loggedUser && loggedUser?.displayName}</p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleCustomLoggedInUser} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="label">
                    <a
                      onClick={handleResetPassword}
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                    <span className="text-[12px]">
                      New this site?{" "}
                      <Link to="/registration" className="text-blue-500">
                        Go to Register
                      </Link>
                    </span>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <p>{error && error}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
