import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Animation from "../SignUp/Animation/Animation";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, providerLogin, logOut, user } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  // navigate
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // navigate(from, { replace: true });
        toast.success("successfully login");
        navigate("/newsfeed");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
    toast.success("please login");
    navigate("/newsfeed");
  };

  return (
    <div className="flex justify-around " data-theme="night">
      <div className="mt-20 ">
        <Animation></Animation>
      </div>
      {/* form */}
      <div className="border-solid border-2 border-sky-100 ... rounded-md shadow-2xl shadow-slate-400 my-16">

        <div className="h-[500px] flex mt-8">
          {/* <div className="h-[800px] flex justify-center items-center"> */}
          <div className="w-96 p-7">
            <h2 className="text-xl text-center">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {" "}
                  <span className="label-text">Forget Password?</span>
                </label>
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>
              <input
                className="btn btn-accent w-full"
                value="Login"
                type="submit"
              />
              <div>
                {loginError && <p className="text-red-600">{loginError}</p>}
              </div>
            </form>
            <p>
              New to Jobstack{" "}
              <Link className="text-orange-500" to="/signup">
                Create new Account
              </Link>
            </p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success w-full">
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
