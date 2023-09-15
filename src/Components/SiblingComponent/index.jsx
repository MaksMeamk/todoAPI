import React from "react";
import {useState} from  "react";
import {Button} from 'antd';

const SiblingComponent =()=>{
    const [text, setText] = useState('MIKS');
     return(
        <>          
        <span>Текущий текст: {text}</span> 
        <Button className="parent" type="primary" onClick={()=>setText('REDEV')}>Edit</Button>
        </>    
     )
}
export default SiblingComponent;