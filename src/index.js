import React from "react";
import ReactDom from "react-dom";
import "./assets/main.css";


//import Getitem from './Getitem';
//import ErrorExample from './UseState/Usestate-error'
//import ArrayExample from "./UseState/Usestate-array";
//import Usestatecounter from "./UseState/Usestate-counter";
//import Example from './UseEffect/useeffect-example';
//import Useeffectcleanup from './UseEffect/useeffect-cleanup';
//import UseeffectFetch from "./UseEffect/useeffect-fetch";
//import Conditional_rendering from "./Conditional-Rendering/conditional_rendering";
//import Shortcircuit from './ShortCircuit/short-circuiteval';
//import Controlinputs from './Form/control-inputs';
//import Multiple from './Form/multilpe-inputs';
//import TextInputWithFocusButton from './Useref/useref-example';
import { Main } from "./Container/main";

function PlaceList() {
  return [
    <div>
      <Main>
        <div>test</div>
      </Main>
      {/* <h1 className="text-center text-4xl py-4">TEST TEST TEST</h1>
      <section className="container bg-black mx-auto grid grid-cols-3 gap-4 "> */}
        {/* <Getitem /> */}
        {/* <ArrayExample/> */}
        {/* <Usestatecounter/> */}
        {/* <Example/> */}
        {/* <Useeffectcleanup/> */}
        {/* <UseeffectFetch/> 
        <Conditional_rendering/>  */}
        {/* <Shortcircuit/> */}
        {/* <Controlinputs/>
        </section>
        <TextInputWithFocusButton/> */}
    </div>  
  ];
}
ReactDom.render(<PlaceList />, document.getElementById("root"));