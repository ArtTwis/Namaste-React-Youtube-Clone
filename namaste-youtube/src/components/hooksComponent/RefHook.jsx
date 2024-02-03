import React, { useRef, useState } from "react";
import sunIcon from "../../assets/icons/sun.png";
import moonIcon from "../../assets/icons/moon.png";

const RefHook = () => {
  const [isDark, setIsDark] = useState(true);
  const [num, setNum] = useState(0);
  const ref = useRef(0);
 
  let val = 0;

  const increaseVal = () => {
    val += 1;
    console.log('val :>', val);
  }

  const increaseRef = () => {
    ref.current += 1;
    console.log('ref :>', ref.current);
  }

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
        useRef Hook
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
      <div className="mt-3">
        <button
          className={
            "mr-3 py-1 px-2 border rounded-lg text-sm " +
            (isDark ? "text-white " : "text-gray-700 ")
          }
          onClick={increaseVal}>
          Increase Val
        </button>
        <span
          className={
            "ml-3 text-base font-bold w-full text-center " +
            (isDark ? "text-white " : "text-gray-700 ")
          }>
          let Val = {val}
        </span>
      </div>
      <div className="mt-3">
        <button
          className={
            "mr-3 py-1 px-2 border rounded-lg text-sm " +
            (isDark ? "text-white " : "text-gray-700 ")
          }
          onClick={() => setNum(num + 1)}
          >
          Increase Num
        </button>
        <span
          className={
            "ml-3 text-base font-bold w-full text-center " +
            (isDark ? "text-white " : "text-gray-700 ")
          }>
          State num = {num}
        </span>
      </div>
      <div className="mt-3">
        <button
          className={
            "mr-3 py-1 px-2 border rounded-lg text-sm " +
            (isDark ? "text-white " : "text-gray-700 ")
          }
          onClick={increaseRef}
          >
          Increase Ref
        </button>
        <span
          className={
            "ml-3 text-base font-bold w-full text-center " +
            (isDark ? "text-white " : "text-gray-700 ")
          }>
          Ref ref = {ref.current}
        </span>
      </div>
    </div>
  );
};

export default RefHook;
