import React from "react";

type Props = {};

function CandidateCard({}: Props) {
  return (
    <>
      <div className=" flex items-center justify-between pr-8">
        <div className=" flex items-center gap-5">
        <div>
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="user profile photo"
            className=" w-12 h-12 rounded-md"
          />
        </div>
        <div>
          <p className=" text-sm font-bold">Saurav Singh</p>
          <p className=" text-sm text-gray-400">saurav@gmail.com</p>
        </div>
        </div>
        <div className=" text-2xl text-green-500 font-bold">78%</div>
      </div>
    </>
  );
}

export default CandidateCard;
