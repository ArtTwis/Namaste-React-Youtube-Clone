import React, { useMemo, useState } from "react";
import sunIcon from "../../assets/icons/sun.png";
import moonIcon from "../../assets/icons/moon.png";
import { getNthPrime } from "../../utils/utils";

const MemoHook = () => {
  const [inputText, setInputText] = useState(0);
  const [isDark, setIsDark] = useState(true);

  const nthPrime = useMemo(() => {
    getNthPrime(inputText);
  }, [inputText]);


  return (
    <div
      className={
        "flex justify-center items-center flex-col m-12 rounded-xl border min-h-80 min-w-80 max-h-80 max-w-80 " +
        (isDark ? "bg-gray-700 border-white " : "bg-white border-gray-700 ")
      }>
      <input
        type="number"
        value={inputText}
        className={
          "py-2 px-4 mb-4 rounded-lg outline-none bg-transparent border " +
          (isDark
            ? "border-gray-200 text-gray-200 "
            : "border-gray-700 text-gray-800 ")
        }
        onChange={(e) => setInputText(e.target.value)}
      />
      <p
        className={
          "my-2 text-base font-bold w-full text-center " +
          (isDark ? "text-white " : "text-gray-700 ")
        }>
        Nth Prime : {nthPrime}
      </p>
      <p
        className={
          "text-xl font-bold w-full text-center " +
          (isDark ? "text-white " : "text-gray-700 ")
        }>
        useMemo Hook
      </p>
      
      <button
        className={
          "m-2 py-2 px-8 rounded-xl outline-none border " +
          (isDark ? "border-white " : "border-gray-700 ")
        }
        onClick={() => setIsDark(!isDark)}>
        <img
          className="w-8 h-8 "
          src={isDark ? moonIcon : sunIcon}
          alt="ThemeIcon"
        />
      </button>
    </div>
  );
};

export default MemoHook;
