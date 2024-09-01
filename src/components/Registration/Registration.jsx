import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Registration = () => {
  const [newUser, setNewUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  // Create a New Custom User With email and Password
  const { createNewCustomUser } = useContext(AuthContext);
  const handleCreateNewUser = async (e) => {
    try {
      e.preventDefault();

      setSuccess(null);
      setError(null);
      const result = await createNewCustomUser(email,password);

      const user = await result.user;
      console.log(user);
      setNewUser(user);
      setSuccess("User is created Successfully.");

      await updateProfile(user, {
        displayName: `${name}`,
        photoURL:
          "https://i.pinimg.com/originals/5b/97/1b/5b971b2dae6fac42bb7c1a566d876a50.png",
      });

      const sendEmailVerificationEmail = await sendEmailVerification(user);
      console.log({ sendEmailVerificationEmail });

      if (!user?.emailVerified) {
        prompt("Go To Your Email and Verify Your Email Please");
        return;
      }
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  return (
    <div className="h-screen bg-stone-200">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleCreateNewUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
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
                  <span className="text-[12px]">
                    Already Registered?{" "}
                    <Link to="/login" className="text-blue-500">
                      Go to Login
                    </Link>
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="text-green-800">{success && success}</p>
              <p className="text-red-800">{error && error}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
