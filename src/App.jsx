import { useState } from "react";
import "./App.css";
import LifecycleClassComponent from "./Components/LifecycleClassComponent";
import LifecycleFunctionComponent from "./Components/LifecycleFunctionComponent";
import { Button, Switch, ConfigProvider } from "antd";
import { useTheme } from "./Context/ThemeContext";

function App() {
  const { theme, changeTheme } = useTheme();
  const [visible, setVisible] = useState({ class: true, function: true });
  const [toggle, setToggle] = useState(true);
  const changeToggle = (e) => {
    changeTheme(e);
    setToggle(() => e);
  };

  return (
    <div className={`App ${theme}`}>
      <span>Dark</span>
      <Switch
        checked={toggle}
        style={{ margin: "0 10px 0 10px" }}
        onChange={(e) => changeToggle(e)}
      />
      <span>Light</span>
      <ConfigProvider
        theme={{
          components: {
            Button: { fontSize: "22px", colorPrimary: "red" },
          },
        }}
      >
        <div>
          <h3>Class Component</h3>
          {visible.class ? (
            <LifecycleClassComponent />
          ) : (
            <div style={{ height: "53px" }}>counter component removed</div>
          )}
          <Button
            type="primary"
            onClick={() =>
              setVisible((visible) => ({ ...visible, class: !visible.class }))
            }
          >
            {visible.class ? (
              <div>Delet class counter</div>
            ) : (
              <div>Mount class counter</div>
            )}
          </Button>
        </div>
      </ConfigProvider>

      <div>
        <h3>Function Component</h3>
        {visible.function ? (
          <LifecycleFunctionComponent />
        ) : (
          <div style={{ height: "53px" }}>counter component removed</div>
        )}
        <Button
          type="primary"
          onClick={() =>
            setVisible((visible) => ({
              ...visible,
              function: !visible.function,
            }))
          }
        >
          {visible.function ? (
            <div>Delet function counter</div>
          ) : (
            <div>Mount function counter</div>
          )}
        </Button>
      </div>
    </div>
  );
}

export default App;
