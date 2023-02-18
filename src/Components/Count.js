import React, { useState } from "react";

function Count(props) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((preCount) => preCount + 1);
  };
  const decrement = () => {
    setCount((preCount) => preCount - 1);
  };
  return (
    <div>
      {" "}
      <div class="max-w-md mx-auto mt-10  ">
        <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
          <div id="count" class="text-2xl font-semibold">
            {count}
          </div>
          <div class="flex space-x-3">
            <button
              id="increment"
              onClick={increment}
              class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            >
              Increment
            </button>
            <button
              id="decrement"
              onClick={decrement}
              class="bg-red-400 text-white px-3 py-2 rounded shadow"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Count;
