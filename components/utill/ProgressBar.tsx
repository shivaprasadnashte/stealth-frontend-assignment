import React from "react";

type Props = {};

function ProgressBar({}: Props) {
  return (
    <>
      <div className=" p-1 w-36">
        <div className="bg-purple-500/20 h-2 rounded-full overflow-hidden">
          <div className="bg-green-500 flex justify-center items-center w-[90%] h-full text-xs text-white font-bold"></div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
