import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import Registration from "./Components/Registration";
import Tasks from "./Components/Tasks";
import Authorization from "./Components/Authorization";
import PrivateRoute from "./Components/hoc/PrivateRoute";
import RouteTokenTrue from "./Components/hoc/RouteTokenTrue";

function App() {
  return (
    <div className="App">
      <HashRouter >
        <Routes>
          <Route path="*" element={<RouteTokenTrue><Authorization /></RouteTokenTrue>} />
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
