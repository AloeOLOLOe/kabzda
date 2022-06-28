import React from "react";

type switcherPropsType = {
    status: boolean
}

export function Switcher(props: switcherPropsType) {
    return (
        <div>
            <SwitcherOn/>
            {!props.status && <SwitcherOff/>}

        </div>
    )
}

const SwitcherOn = () => {
    return (<div >

            <div>
                <button>On-green</button>
                <button>Off</button>
            </div>
            <div>lamp green</div>
        </div>
    )
}
const SwitcherOff = () => {
    return (<div>
            <div>
                <button>On</button>
                <button>Off-red</button>
            </div>
            <div>lamp red</div>
        </div>
    )
}
//как покрасить и логика в ccs
/*
import React from "react";

type PropsType = {
    on: boolean
}

export function OffOn(props: PropsType) {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding:'2px',
        backgroundColor:props.on?'green':'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft:'5px',
        padding:'2px',
        backgroundColor:props.on?'white':'red'

    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft:'5px',
        backgroundColor:props.on?'green':'red'


    }
    return (
        <div>
            <div style={onStyle}>ON</div>
            <div style={offStyle}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}*/
