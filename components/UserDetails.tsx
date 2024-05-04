// @ts-nocheck
"usse client";
import UserContext from "@/context/Usercontext";
import { use, useContext, useEffect, useState } from "react";
import ProgressBar from "./utill/ProgressBar";
import VideoCarousel from "./utill/VideoCrousel";
type Props = {};

function UserDetails({}: Props) {
  const { user } = useContext(UserContext);
  const [use, setUse] = useState();

  return (
    <>
      {" "}
      {user ? (
        <div className=" bg-white shadow-lg gap-4 w-full lg:w-2/3  flex md:flex-row flex-col rounded-xl p-3">
          <div className=" flex flex-col  gap-3 items-center md:w-1/2">
            <div className="flex items-center w-full justify-between p-1 ">
              <div className="flex  items-center gap-4">
                <div>
                  <img
                    src={user.profile_picture_url}
                    alt="user profile photo"
                    className="w-12 h-12  rounded-md"
                  />
                </div>
                <div>
                  <p className="text-sm w-32 overflow-scroll no-scrollbar font-bold">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                </div>
              </div>
              <div className="text-2xl text-green-500 font-bold">
                {user.total_score_percentage}%
              </div>
            </div>
            <div className="flex justify-start w-full "></div>

            <div className=" flex flex-col   gap-4 w-full">
              <div className=" flex  justify-between   items-center w-full">
                <div className=" text-xs ">Behevioural</div>
                <div className=" w-full flex justify-end gap-3 items-center">
                  <ProgressBar width={user.behavioral_scores} />
                  <p className=" text-xs text-green-600">
                    
                    {user.behavioral_scores}/10
                  </p>
                </div>
              </div>
              <div className=" flex  justify-between  items-center w-full">
                <p className=" text-xs ">Communication</p>
                <div className=" w-full flex justify-end gap-3 items-center">
                  <ProgressBar width={user.communication} />
                  <p className=" text-xs text-green-600" >{user.communication}/10</p>
                </div>
              </div>
              <div className=" flex  justify-between items-center w-full">
                <p className=" text-xs w-full ">Situation Handling</p>
                <div className=" w-full flex justify-end gap-3 items-center">
                  <ProgressBar width={user.situation_handling} />
                  <p className=" text-xs text-green-600">{user.situation_handling}/10</p>
                </div>
              </div>
            </div>

            <div className=" flex flex-col gap-4">
              <div>
                <p className=" font-bold">About</p>
                <p className=" text-xs text-gray-500">
                 {user.about}
                </p>
              </div>
              <div>
                <p className=" font-bold">Experience</p>
                <p className=" text-xs text-gray-500">
                 {user.experience}
                </p>
              </div>
              <div>
                <p className=" font-bold">Hobbies</p>
                <p className=" text-xs text-gray-500">
                  {user.hobbies}
                </p>
              </div>
              <div>
                <p className=" font-bold">Introduction</p>
                <p className=" text-xs text-gray-500">
                  {user.introduction}
                </p>
              </div>
            </div>
           {!user.shortlisted && 
            <button className=" bg-[#32abca] text-white font-bold  w-52 p-1 rounded-md">
              SHORTLIST
            </button>}
          </div>
          <div className="  md:w-1/2">
            <VideoCarousel videoLinks={user.video_urls} />
          </div>
        </div>
      ): <div className="w-full h-full flex justify-center items-center">No user found</div>}
    </>
  );
}

export default UserDetails;
