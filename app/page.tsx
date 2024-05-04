"use client";
import Sidebar from "@/components/Sidebar";
import Assignment from "@/components/Assignment";
import UserDetails from "@/components/UserDetails";
import UserContextProvider from "@/context/UserContextProvider";
export default function Home() {
  return (
    <div className=" flex lg:flex-row flex-col justify-between p-5  bg-gray-100 min-h-screen">
      <UserContextProvider>
        <Sidebar />
        <div className="md:w- flex flex-col lg:w-5/6 ">
          <div className=" flex flex-col ml-5 mb-2 w-5/6   gap-1">
            <p className=" text-xs">
              <span className=" text-gray-400">Pages</span>/{" "}
              <span>Assignment</span>
            </p>
            <p className=" font-bold">Sales BDE</p>
          </div>
          <div className=" flex lg:flex-row gap-4 lg:gap-1  items-end  lg:items-start flex-col w-full  justify-evenly">
            <Assignment />
            <UserDetails />
          </div>
        </div>
      </UserContextProvider>
    </div>
  );
}
