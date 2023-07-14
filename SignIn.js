import { useState, useEffect } from "react";
import { auth, provider, provider2 } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
import "./SignIn.css"
const LogIn = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickFb = () => {
    signInWithPopup(auth, provider2)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div className="Sign">
      {value ? (
        <Home />
      ) : (
        <div className="signbtn">
          <button onClick={handleClick}>Sign In with Google</button>
          <button onClick={handleClickFb}>Sign In with Facebook</button>
        </div>
      )}
    </div>
  );
};

export default LogIn;
