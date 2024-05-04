import React from "react";
import { MdEdit } from "react-icons/md";
import { IoDocumentsSharp } from "react-icons/io5";
import { BsBoxFill } from "react-icons/bs";
import CandidateCard from "./utill/CandidateCard";

type Props = {};

export default function Assignment({}: Props) {
  return (
    <>
      <div className=" w-1/4 ">
        <div className=" flex mb-2  flex-col gap-1">
          <p className=" text-xs">
            <span className=" text-gray-400">Pages</span>/{" "}
            <span>Assignment</span>
          </p>
          <p className=" font-bold">Sales BDE</p>
        </div>
        <div className=" bg-white  shadow-xl p-3 rounded-xl">
          <div className=" flex justify-between py-2 ">
            <p className=" font-bold text-xl">Sales BDE</p>
            <div className=" gap-2 flex">
              <p className=" text-xl text-green-500 font-bold "> Active</p>
              <div className=" shadow-xl rounded-md border-2">
                <MdEdit className="  text-2xl " />
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-3">
            <div className=" flex  items-center justify-between text-sm text-gray-400">
              <div className=" font-bold"> Assignment Link</div>
              <div className=" text-blue-500 text-xs">
                https://tiny.url/asknakdna/
              </div>
            </div>

            <div className=" flex  items-center justify-between text-sm text-gray-400">
              <div className=" font-bold"> Assignment Hour</div>
              <div className="  ">3 hours</div>
            </div>

            <div className=" flex  items-center justify-between text-sm text-gray-400">
              <div className=" font-bold"> Assignment Ends at</div>
              <div className="  ">11 March 2024</div>
            </div>
          </div>

          <div className=" flex gap-3">
            <div className=" items-center text-sm shadow-xl p-2 w-32 mt-2 border-2 rounded-xl flex gap-2">
              <div>
                <BsBoxFill />
              </div>
              <div>TO REVIEW</div>
            </div>
            <div className=" items-center text-sm shadow-xl p-2 w-36 mt-2 border-2 rounded-xl flex gap-2">
              <div>
                <IoDocumentsSharp />
              </div>
              <div>SHORTLISTED</div>
            </div>
          </div>

          <div className="flex justify-between pr-8 mt-2 text-gray-500 text-sm">
            <div>CANDIDATE</div>
            <div>SCORE</div>
          </div>

          <div className=" flex flex-col gap-2">
            <CandidateCard/>
            <CandidateCard/>
            <CandidateCard/>
            <CandidateCard/>
          </div>
          <div className='my-20'>

    
</div>
        </div>
      </div>
    </>
  );
}
