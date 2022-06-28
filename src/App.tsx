import React from 'react';

import './App.css';
import {Accordion} from "./Accordion/Accordion";
import {Rating} from "./Rating/Rating";
import {Switcher} from "./On_Off/OnOff";
import {OffOn} from "./off_on/off_on 06";

function App() {
    return (
        <div className="App">
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <div>--------------------</div>
            <Switcher status={false}/>
            <div>--------------------</div>
            <OffOn />


        </div>
    );
}

    type PageTitlePropsType
= {
    title: string
}

    function PageTitle
(
    props: PageTitlePropsType)
{
    return
    ( <
    h1>
    {props.title
    }
</h1>)
}

    export default App;
