import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./Components/Registration";
import Tasks from "./Components/Tasks";
import Autorization from "./Components/Autorization";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Autorization />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
