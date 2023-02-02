import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Animation from "./Animation/Animation";

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
          .then(() => {})
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

    fetch("https://jobstack-server.vercel.app/users", {
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
    <div className="flex justify-around bg-pink-50">
      <div className="mt-20 ">
        <Animation></Animation>
      </div>
      {/* form */}
      <div className="h-[800px] flex mt-10">
        <div className="w-96 p-7 ">
          <h2 className="text-xl text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Name</span>
              </label>
              <input
                placeholder="Full Name"
                type="text"
                {...register("name", {
                  required: "Name is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                })}
                className="input input-bordered w-full max-w-xs"
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
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
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                {...register("role")}
                className="select select-bordered  w-full max-w-xs"
              >
                {/* <option disabled selected>
                Pick your Role
              </option> */}
                <option>JobSeeker</option>
                <option>Recruiter</option>
              </select>
            </div>
            <input
              className="btn btn-accent w-full mt-4"
              value="Sign Up"
              type="submit"
            />
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </form>
          <p>
            Already have an account{" "}
            <Link className="text-orange-500" to="/login">
              Please Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-success w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
