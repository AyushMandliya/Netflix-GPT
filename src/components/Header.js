import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44'
        src='https://imgs.search.brave.com/vq4rM2jnG_LzMeZHGVj-BEoZt4Dh_sgI32r0Q2xK5bw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n'
        alt='logo'
      />
      {user && (
        <div className='flex p-2'>
          <img className='w-12 h-12' alt='usericon' src={user?.photoURL} />
          <button onClick={handleSignOut} className='font-bold text-white '>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
