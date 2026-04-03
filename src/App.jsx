import { useState,useEffect } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
      <div className="min-h-screen p-4 bg-slate-50 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
       <button
  onClick={() => setDark(prev => !prev)}
  className="
  mb-4 px-5 py-2 rounded-full font-medium
  bg-black text-white 
  dark:bg-white dark:text-black
  hover:shadow-lg hover:scale-105
  transition-all duration-300
"
>
  {dark ? "Light ☀️" : "Dark 🌙"}
</button>
<Dashboard/>
    </div>
  );
}

export default App;