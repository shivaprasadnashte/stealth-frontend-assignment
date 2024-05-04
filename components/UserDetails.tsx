import CandidateCard from "./utill/CandidateCard";
import ProgressBar from "./utill/ProgressBar";
import VideoCarousel from "./utill/VideoCrousel";

type Props = {};

function UserDetails({}: Props) {
  return (
    <>
      <div className=" bg-white shadow-lg  flex w-1/2 rounded-md">
        <div className=" w-1/2">
          <div className=" ">
            <CandidateCard />
          </div>
          <div className=" flex flex-col gap-3">
            <div className=" flex  justify-between items-center w-full">
              <p className=" text-xs ">Behevioural</p>
              <div className=" w-full flex justify-end gap-3 items-center">
                <ProgressBar />
                <p className=" text-xs text-green-600">9/10</p>
              </div>
            </div>
            <div className=" flex  justify-between items-center w-full">
              <p className=" text-xs ">Communication</p>
              <div className=" w-full flex justify-end gap-3 items-center">
                <ProgressBar />
                <p className=" text-xs text-green-600">9/10</p>
              </div>
            </div>
            <div className=" flex  justify-between items-center w-full">
              <p className=" text-xs w-full ">Situation Handling</p>
              <div className=" w-full flex justify-end gap-3 items-center">
                <ProgressBar />
                <p className=" text-xs text-green-600">9/10</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className=" font-bold">About</p>
              <p className=" text-xs text-gray-500">
                Lorem ipsum snobis repudiandae id alias. Obcaecati impedit odio
                eos voluptas similique?
              </p>
            </div>
            <div>
              <p className=" font-bold">Experience</p>
              <p className=" text-xs text-gray-500">
                Lorem ipsum snobis repudiandae id alias. Obcaecati impedit odio
                eos voluptas similique?
              </p>
            </div>
            <div>
              <p className=" font-bold">Hobbies</p>
              <p className=" text-xs text-gray-500">
                Lorem ipsum snobis repudiandae id alias. Obcaecati impedit odio
                eos voluptas similique?
              </p>
            </div>
            <div>
              <p className=" font-bold">Introduction</p>
              <p className=" text-xs text-gray-500">
                Lorem ipsum snobis repudiandae id alias. Obcaecati impedit odio
                eos voluptas similique?
              </p>
            </div>
          </div>
          <button className=" bg-[#32abca] text-white font-bold  w-52 p-1 rounded-md">
            SHORTLIST
          </button>
        </div>
        <div className=" w-1/2" >
          <VideoCarousel/>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
