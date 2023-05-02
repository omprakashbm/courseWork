import {useState, useEffect, useContext } from "react";

import { TrackingContext } from "../Context/Tracking";
import { Nav1, Nav2, Nav3 } from "../Components/Index";

import style from './style.module.css'
import styles from './animation.module.css'
export default () => {
  const [state, setState] = useState(false);
  const { currentUser, connectWallet } = useContext (TrackingContext);
  const [account, setAccount] = useState(false)
  
 
  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if(!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <div className={styles.nav_animation} style={{marginTop:'20px'}}>
    <nav 
     className= {` pb-5 md:text-sm ${
      state
      ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
      :""
     }`}
    >
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 ">
        <div
          className={`flex-1 items-center mt-18 md:mt-0 md:flex $ {
            state ? "block" : "hidden"}`}>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0 cursor-pointer"  >
              {currentUser ? (
                <p onMouseEnter={() => setAccount(true)}
                  onMouseLeave={() => setAccount(false)}
                  className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium bg-gray-800 hover:bg-gray-700 active:bg gray-900 rounded-full md:inline-flex">
                  {account ? <p className ={style.navtext}>{currentUser}</p> : (<p className ={style.navtext}>{currentUser.slice(0,25)}..</p>)}
                  
                </p>
              ) : (
                
                <button
                  onClick={() => connectWallet()}
                  className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                  >
                    <span className={style.button}>Connect Wallet</span> 
                    <Nav3 />
                  </button>
                  
              )}
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};