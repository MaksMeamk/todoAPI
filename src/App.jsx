import "./App.css";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Registration from "./Components/Registration";
import Tasks from "./Components/Tasks";
import Authorization from "./Components/Authorization";
import PrivateRoute from "./Components/hoc/PrivateRoute";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/todoAPI">
        <Routes>
          <Route path="*" element={<Authorization />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/tasks"
            element={
              <PrivateRoute>
                <Tasks />
              </PrivateRoute>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
