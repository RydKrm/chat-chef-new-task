'use client'
import { useState } from "react";
import SideBar from "./sidebar";
import TaskContenter from "./taskContainer";

const HomePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='flex flex-col lg:flex lg:flex-row w-screen relative lg:static lg:mt-20'>
      <div className={`absolute lg:static w-full md:w-6/12 lg:w-2/12 mt-5  ${isOpen ? "block " : "  hidden "} z-40 lg:block  `}>
        <SideBar handleOpen={handleOpen} />
      </div>
      <div className="w-full lg:w-10/12 bg-white dark:bg-black absolute lg:static sm:ms-10 md:ms-20 lg:ms-0">
        <TaskContenter handleOpen={handleOpen} />
      </div>
    </div>
  )

}

export default HomePage;