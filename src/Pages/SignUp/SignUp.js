import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import image from "../../../src/assest/images/login_image.png";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, providerLogin } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    console.log(data);
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        updateUser({ displayName: data.name, photoURL: data.image })
          .then(() => { })
          .catch((err) => {
            console.log(err);
          });
        saveUser(
          data.name,
          data.email,
          data.number,
          data.country,
          data.image,
          data.password,
          data.role
        );
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };
  const saveUser = (name, email, number, country, image, password, role) => {
    const user = { name, email, number, country, image, password, role };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user", data);
        toast.success("please login with email and password");
        navigate("/userProfile");
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
    toast.success("please login with google");
    navigate("/userProfile");
  };

  return (
    <section className="py-20" data-theme="night">
      <hr />
      <div className="flex justify-around mt-7" >
        <div className="hidden md:block">
          <img src={image} alt="img" style={{ height: '500px', width: '550px' }} />
        </div>
        <div className="w-96 p-7 mx-4 border-solid border-2 border-sky-200 ... rounded-md shadow-md shadow-slate-400">
          <div className="">
            <div className="">
              <h2 className="text-2xl text-center font-bold text-white">Sign Up</h2>
              <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    {" "}
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    placeholder="Enter your name"
                    type="text"
                    {...register("name", {
                      required: "Name is Required",
                    })}
                    className="input input-bordered input-success w-full max-w-xs"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    {" "}
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: true,
                    })}
                    className="input input-bordered input-success w-full max-w-xs"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                {/* <div className="form-control w-full max-w-xs">

            <label className="label">
              {" "}
              <span className="label-text">Number</span>
            </label>
            <input
              type="text"
              {...register("number", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.number && (
              <p className="text-red-500">{errors.number.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Country</span>
            </label>
            <input
              type="text"
              {...register("country", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.country && (
              <p className="text-red-500">{errors.country.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              {...register("image", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div> */}
                <div className="form-control w-full max-w-xs">
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
                        message: "Password must be 6 characters long",
                      },
                      pattern: {
                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                        message:
                          "Password must have uppercase, number and special characters",
                      },
                    })}
                    className="input input-bordered input-success w-full max-w-xs"
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-white">Role</span>
                  </label>
                  <select
                    {...register("role")}
                    className="select select-bordered select-success select-sm w-full max-w-xs"
                  >
                    {/* <option disabled selected>
                Pick your Role
              </option> */}
                    <option>JobSeeker</option>
                    <option>Recruiter</option>
                  </select>
                </div>
                <input
                  className="btn btn-md btn-primary w-full mt-4 max-w-xs"
                  value="Sign Up"
                  type="submit"
                />
                {signUpError && <p className="text-red-600">{signUpError}</p>}
              </form>
              <p className="text-white mt-1 text-sm">
                Already have an account{" "}
                <Link className="text-orange-400 ml-1" to="/login">
                  Please Login
                </Link>
              </p>
              <div className="divider text-white">OR</div>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-success w-full max-w-xs"
              >
                CONTINUE WITH GOOGLE
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SignUp;
