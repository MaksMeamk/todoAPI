import React from "react";
import { Button } from 'antd'
import { useState } from "react";
import { useEffect } from "react";

const LifecycleFunctionComponent = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('Компонент смонтирован')
        return () => console.log('Компонент удалён')
    }, [])

    useEffect(() => {
        console.log('Компонент обновлён')
    }, [count])




    return (
        <div >
            <Button type="primary" onClick={() => setCount(count => count + 1)}>+</Button>
            <span style={{ display: "inline-block", width: '30px' }}>{count}</span>
            <Button type="primary" onClick={() => setCount(count => count - 1)}>-</Button><br /><br />
        </div>
    )

}

export default LifecycleFunctionComponent