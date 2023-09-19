import { useState } from "react";
import "./App.css";
import LifecycleClassComponent from './Components/LifecycleClassComponent'
import LifecycleFunctionComponent from './Components/LifecycleFunctionComponent'
import { Button } from 'antd'

function App() {
  const [visible, setVisible] = useState({ class: true, function: true })
  return (
    <div className="App">
      <div>
        <h3>Class Component</h3>
        {visible.class ? <LifecycleClassComponent key='1' /> : <div style={{ height: '53px' }}>counter component removed</div>}<Button type="primary" onClick={() => setVisible((visible) => ({ ...visible, class: !visible.class }))}>{visible.class ? <div>Delet class counter</div> : <div>Mount class counter</div>}</Button>
      </div>

      <div>
        <h3>Function Component</h3>
        {visible.function ? <LifecycleFunctionComponent /> : <div style={{ height: '53px' }}>counter component removed</div>}<Button type="primary" onClick={() => setVisible((visible) => ({ ...visible, function: !visible.function }))}>{visible.function ? <div>Delet function counter</div> : <div>Mount function counter</div>}</Button>
      </div>
    </div>
  );
}

export default App;
