import React from 'react'
import { data_set } from "./dataset";

const clied = ()=>{
 // alert("this wad cliked");
};

function Place(props) {
  //
  return [
    <div onMouseEnter={clied}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image image = {props.image}  />
        <div className="px-6 py-4">
          <Title title = {props.title} />
          <Description description = {props.description} />
        </div>
        <div className="px-6 py-4 ">
          <Tags tag="Tourism" />
          <Tags tag="Spot" />
          <Tags tag="Sight" />
        </div>
      </div>
    </div>,
  ];
}
const Image = (props) => (
  <img
    className="w-full"
    src={props.image}
    alt="Display"
  />
);
function Getitem(){
  return(
      data_set.map((ti)=>
        <Place key={ti.id} title={ti.title} description={ti.description} image={ti.image} />
      )
  )
}


const Title = (props) => (
  <div className="font-bold text-purple-500 text-xl mb-2">
    {props.title}
  </div>
);
const Description = (props) => (
  <div>
    <p className="text-gray-700 text-base">
      {props.description}
    </p>
  </div>
);

const Tags = (props) => (
  <span className="inline-block bg-indigo-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
    # {props.tag}
  </span>
);

export default Getitem
