import React, { useState } from "react";
import { Button} from 'antd';
import ChildComponent from "../ChildComponent";
import SiblingComponent from "../SiblingComponent";

const ParentComponent = ()=>{
    const [counter, setCounter] =useState(0);
    return(
        <>          
            <span className="parent"> {counter}</span>
            <Button className="parent" type="primary" onClick={()=>setCounter(counter=>counter+1)}>Increase</Button>
            <Button className="parent" type="primary" onClick={()=>setCounter(counter=>counter-1)}>Decrease</Button>
            <Button className="parent" type="primary" onClick={()=>setCounter(0)}>Reset</Button>
            <Button className="parent" type="primary" onClick={()=>setCounter(Math.round(Math.random()*10))}>Random</Button><br/>
            <ChildComponent name='Maks' counter={counter}/><br/>
            <SiblingComponent/>
        </>
        
    )
}
export default ParentComponent;