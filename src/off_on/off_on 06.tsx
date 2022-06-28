import React, {useState} from "react";

type PropsType = {
   // on: boolean
}


export function OffOn(props: PropsType) {
// перерисовка только компоненты оффон а не всего апп при нажатии и изменении. Если изменнеия нет то и перерисовки не будет.

    let [on,setOn]=useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding:'2px',
        backgroundColor:on?'green':'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft:'5px',
        padding:'2px',
        backgroundColor:on?'white':'red'

    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft:'5px',
        backgroundColor:on?'green':'red'


    }
    const onClickChangeHandlerOn=()=>{setOn(true); }
    const onClickChangeHandlerOff=()=>{setOn(false);}

    return (
        <div>
            <div style={onStyle} onClick={onClickChangeHandlerOn}>ON</div>
            <div style={offStyle} onClick={onClickChangeHandlerOff}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}