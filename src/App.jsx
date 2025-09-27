import "./App.css";

import Navbar from "./Components/Navbar";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const fetchPromise = fetchData();

  return (
    <div className="bgColor">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
