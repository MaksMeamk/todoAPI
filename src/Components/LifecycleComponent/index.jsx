import React from "react";
import {Button} from 'antd'
import Counter from "../Counter";

class LifecycleComponent extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {visible: true}
    }
    
    


    render() {
       
        return(
            <div style={{margin:'20px'}}>             
                {this.state.visible ? <Counter/> : <div>Counter deleted</div>}
                <Button type="primary" onClick={()=>this.setState((stat)=>({visible:!stat.visible}))}>Delet counter</Button>
            </div>
        
        )
        }
}

export default LifecycleComponent