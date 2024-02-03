import React, { useCallback, useState } from "react";
import sunIcon from "../../assets/icons/sun.png";
import moonIcon from "../../assets/icons/moon.png";
import Child from "./Child";

const CallbackHook = () => {
    const [isDark, setIsDark] = useState(true);

    const fn = useCallback(() => {
      console.log("It's just a function");
    }, [isDark]);
  
    return (
      <div
        className={
          "flex justify-center items-center flex-col m-6 rounded-xl border min-h-80 min-w-80 max-h-80 max-w-80 " +
          (isDark ? "bg-gray-700 border-white " : "bg-white border-gray-700 ")
        }>

        <p
          className={
            "text-xl font-bold w-full text-center " +
            (isDark ? "text-white " : "text-gray-700 ")
          }>
          useCallback Hook
        </p>
        
        <button
          className={
            "m-2 py-2 px-8 rounded-xl outline-none border " +
            (isDark ? "border-white " : "border-gray-700 ")
          }
          onClick={() => setIsDark(!isDark)}>
          <img
            className="w-8 h-8"
            src={isDark ? moonIcon : sunIcon}
            alt="ThemeIcon"
          />
        </button>

        <Child fn={fn} />
      </div>
    );
}

export default CallbackHook;