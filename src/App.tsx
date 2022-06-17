import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
     <Accordion titleValue={'Menu'} collapsed={true}/>
     <Accordion titleValue={'Users'} collapsed={true}/>
    </div>
  );
}

type PageTitlePropsType={
  title:string
}
function PageTitle(props:PageTitlePropsType){
  return(<h1>{props.title}</h1>)
}
export default App;
