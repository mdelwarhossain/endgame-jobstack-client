import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import image from "../../../src/assest/images/login_image.png";

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
    <section className="py-20" data-theme="night">
      <hr />
      <div className="flex justify-around mt-12">
        <div className="hidden md:block">
          <img src={image} alt="img" style={{ height: '500px', width: '540px' }} />
        </div>
        <div className="w-96 p-7 mx-4 border-solid border-2 border-sky-100 ... rounded-md shadow-md shadow-slate-400">
          <div className="">
            <h2 className="text-2xl font-bold text-white text-center">Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  className="input input-bordered input-success w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs my-2">
                <label className="label">
                  {" "}
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                  className="input input-bordered input-success w-full max-w-xs"
                />
                <label className="label">
                  {" "}
                  <span className="label-text italic">Forget Password?</span>
                </label>
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>
              <input
                className="btn btn-active btn-md btn-primary w-full max-w-xs"
                value="Login"
                type="submit"
              />
              <div>
                {loginError && <p className="text-red-600">{loginError}</p>}
              </div>
            </form>
            <p className="text-white mt-1 text-sm">
              New to Jobstack
              <Link className="text-orange-400 ml-2" to="/signup">
                Create new Account
              </Link>
            </p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-md btn-primary max-w-xs w-full">
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
