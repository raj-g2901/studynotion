import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";


export default function Template({
  title,
  desc1,
  desc2,
  image,
  formType,
  setIsLoggedIn,
}) {
  return (
    <div>
      <div>
        <h1>{title}</h1>

        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn}/> 
        : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>
          <p>Sign Up With Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frameImage}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="students"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 "
        />
      </div>
    </div>
  );
}
