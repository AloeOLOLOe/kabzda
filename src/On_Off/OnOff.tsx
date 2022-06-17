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