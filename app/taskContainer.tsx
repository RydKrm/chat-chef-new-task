import React from 'react'
import Singletask from './singleTask';
import { taskInterFace } from '@/types/task.interface';
import Link from 'next/link';
import { useAppSelector } from '@/redux/hook';
import { selectTask } from '@/redux/slice/taskSlice';
import SearchBar from './search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export interface ProjectContentProps {
    handleOpen: () => void,
}

const TaskContenter: React.FC<ProjectContentProps> = ({ handleOpen }) => {
    const taskData = useAppSelector(selectTask).task;

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between mx-8 lg:mx-10">
                <p className='mb-5 ms-2  text-gray-700  pt-1 pl-2 w-12 h-12 rounded-md lg:hidden ' onClick={handleOpen}><FontAwesomeIcon icon={faBars} /></p>
                <SearchBar />
                <Link href='/addTask' className='border border-blue-500 w-28 bg-blue-500 rounded-md px-3 lg:py-1 text-white text-lg ps-4 me-8 lg:me-20' >Add Task</Link>
            </div>
            {
                taskData.length == 0 ? <h1> No Task Availble </h1> :
                    <div className='max-w-screen-lg mx-auto divide-y mt-8'>
                        <div className="mt-7 pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
                            {
                                taskData.map((project: taskInterFace) => (<Singletask key={project.id} {...project}
                                />))
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default TaskContenter;