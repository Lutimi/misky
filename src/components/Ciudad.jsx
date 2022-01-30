import React from "react";

const ciudad = (props) => {
  return (
    <div className="Ciudad font-bold
     bg-gray-200  py-20 text-gray-700 px-4 flex  flex-col my-20 ">
      <hr />
    <div className="grid grid-cols-3 space-y-20 gap-4 "></div>
      <h1>Ciudades</h1>
      <div className=" bg-white flex flex-col  text-black rounded-md px-4 ">
        <h1 className="">Ciudad: {props.ciudad} </h1>
        <h1>Pais: {props.pais} </h1>
      </div>
      <div className=" bg-white flex flex-col  space-between text-black rounded-md px-4 ">
        <h1 className="">Ciudad: {props.ciudad} </h1>
        <h1>Pais: {props.pais} </h1>
      </div>
    </div>
  );
};
export default ciudad;
