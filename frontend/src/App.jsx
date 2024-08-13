// import axios from "axios";
import { createContext } from "react";
import { Outlet } from "react-router-dom";

export const MyContext = createContext();
function App() {
  let contexValue = JSON.parse(localStorage.getItem("user"));

  return (
    <MyContext.Provider value={contexValue}>
      <Outlet />
    </MyContext.Provider>
  );
}

export default App;
