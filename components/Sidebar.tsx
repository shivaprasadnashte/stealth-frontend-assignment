import React from "react";
import { FaHome } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

type Props = {};

function Sidebar({}: Props) {
  return (
    <>
      <div className=" md:w-1/6   flex flex-col gap-5">
        <div className=" flex items-center my-3 pb-2 border-b-2 gap-2 font-bold">
          <img src="../asets/userlogo.svg" alt="" />
          <p>Hi, AltWord</p>
        </div>
        <div className=" flex item-center my-4 gap-2">
          <FaHome className=" text-2xl text-[#32abca] bg-white p-1 rounded-md" />
          <p>Dashboard</p>
        </div>
        <div className=" flex flex-col justify-evenly rounded-xl p-4 h-42 w-56 my-3 bg-[#32abca]">
          <div>
            <GoPlus className="  rounded-lg bg-white text-black text-4xl" />
          </div>
          <div className=" text-white">
            <p className=" font-bold text-sm">New Assignment ?</p>
            <p className=" text-xs mt-1">
              Select from pre-defined questions to have a quick turnaround
            </p>
          </div>
          <button className=" text-xs bg-white  rounded-xl py-2">
            Create New Assignment
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
