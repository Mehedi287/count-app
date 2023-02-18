import logo from "./logo.svg";
import "./App.css";
import Count from "./Components/Count";

function App() {
  return (
    <div className=" w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <Count />
        <Count />
        <Count />
      </div>
      <div className="mx-auto bg-white mx-w-md space-y-5 w-52">
        <h1 className="font-bold text-center text-3xl m-3 p-3 ">
          total count = 0
        </h1>
      </div>
    </div>
  );
}

export default App;
