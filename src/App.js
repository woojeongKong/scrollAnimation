function App() {
  return (
    <div className="App">
      <div className="grid grid-rows-1 grid-flow-col gap-4 m-[200px]">
        <div
          className="w-[300px] h-[200px] flex flex-col justify-center items-center bg-[#D6CC99] rounded-lg cursor-pointer  font-mono antialiased font-bold"
          onClick={() => {
            window.location.href = "/stroke"
          }}
        >
          SAMPLE 1
        </div>
        <div
          className="w-[300px] h-[200px] flex justify-center items-center bg-[#FDE5D4] rounded-lg cursor-pointer  font-mono antialiased font-bold"
          onClick={() => {
            window.location.href = "/card"
          }}
        >
          SAMPLE 2
        </div>
      </div>
    </div>
  );
}

export default App;
