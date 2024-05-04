type Props = {
  width: number;
};
function ProgressBar({width}: Props) {
  const wd=width*10
  console.log(wd)
  return (
    <>
    {  (width ) && 
      
     <div className=" p-1  w-32 sm:w-36">
        <div className="bg-purple-500/20 h-2 rounded-full overflow-hidden">
          <div
            className={`bg-green-500 flex justify-center items-center w-[${wd}%] h-full text-xs text-white font-bold`}
          ></div>
        </div>
      </div>}
    </>
  );
}

export default ProgressBar;
