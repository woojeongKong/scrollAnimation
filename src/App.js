import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="flex justify-center gap-[100px] m-[200px] ">
        <Link
          to="/stroke"
          className="w-[300px] h-[200px] flex flex-col justify-center items-center bg-[#D6CC99] rounded-lg cursor-pointer  font-mono antialiased font-bold"
        >
          SAMPLE 1
        </Link>
        <Link
          to="/card"
          className="w-[300px] h-[200px] flex justify-center items-center bg-[#FDE5D4] rounded-lg cursor-pointer  font-mono antialiased font-bold"
        >
          SAMPLE 2
        </Link>
      </div>
    </div>
  );
}

export default App;
