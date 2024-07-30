import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe(); //when component unbound
  }, []);

  const hanadleGptSearchClick = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
  };

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={LOGO} alt='logo' />
      {user && (
        <div className='flex p-2'>
          <select className='p-2 m-2 bg-gray-700 text-white'>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className=' my-2 mx-4 bg-purple-800 text-white py-2 px-4  bg-opacity-50 rounded-lg'
            onClick={hanadleGptSearchClick}
          >
            GPT SEARCH
          </button>
          <img
            className='w-12 h-12 rounded-full'
            alt='usericon'
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className='font-bold text-white '>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
