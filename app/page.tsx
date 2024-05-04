import Sidebar from "@/components/Sidebar";
import Assignment from "@/components/Assignment"
import UserDetails from "@/components/UserDetails";
export default function Home() {
  return (
   <div className=" flex justify-evenly p-5  bg-gray-100 min-h-screen">
   <Sidebar/>
   <Assignment/>
   <UserDetails/>
   </div>
  );
}
