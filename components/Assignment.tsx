"use client";
import { useState } from "react";
import { BsBoxFill } from "react-icons/bs";
import { IoDocumentsSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import CandidateCard from "./utill/CandidateCard";
type Props = {};

export default function Assignment({}: Props) {
  const [toReview, setToreview] = useState(true);
  return (
    <>
      <div className=" w-full lg:w-[300px] ">
        <div className=" bg-white  h-[550px] shadow-xl p-3 rounded-xl">
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
              <div className=" font-bold text-xs md:text-sm">
                {" "}
                Assignment Link
              </div>
              <div className=" text-blue-500 text-xs">
                https://tiny.url/asknakdna/
              </div>
            </div>

            <div className=" flex  items-center justify-between text-sm text-gray-400">
              <div className=" font-bold text-xs md:text-sm">
                {" "}
                Assignment Hour
              </div>
              <div className="text-xs md:text-sm  ">3 hours</div>
            </div>

            <div className=" flex  items-center justify-between text-sm text-gray-400">
              <div className=" font-bold text-xs md:text-sm">
                {" "}
                Assignment Ends at
              </div>
              <div className=" text-xs md:text-sm ">11 March 2024</div>
            </div>
          </div>

          <div className=" flex my-3 gap-3">
            <div className={`items-center text-sm ${toReview?"shadow-md border-2":""} p-2 w-32  rounded-md flex gap-2`}>
              <div>
                <BsBoxFill />
              </div>
              <div
                className="text-xs md:text-sm"
                onClick={() => {
                  setToreview(true);
                }}
              >
                TO REVIEW
              </div>
            </div>
            <div className={`items-center text-sm ${!toReview?"shadow-md border-2":""} p-2 w-32  rounded-md flex gap-2`}>
              <div>
                <IoDocumentsSharp />
              </div>
              <div
                className="text-xs md:text-sm"
                onClick={() => {
                  setToreview(false);
                }}
              >
                SHORTLISTED
              </div>
            </div>
          </div>

          <div className="flex justify-between md:pr-8 mt-2 p-1 text-gray-500 text-sm">
            <div>CANDIDATE</div>
            <div>SCORE</div>
          </div>

          <div className=" flex justify-evenly h-72 overflow-scroll no-scrollbar  mt-2 flex-col gap-4">
            <CandidateCard toReview={toReview} />
          </div>
          <div className="my-20"></div>
        </div>
      </div>
    </>
  );
}
