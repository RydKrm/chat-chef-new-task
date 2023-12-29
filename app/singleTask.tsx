
import { useAppDispatch } from '@/redux/hook';
import { removeNote, updateComplete } from '@/redux/slice/taskSlice';
import { emptyFunction, taskInterFace } from '@/types/task.interface';
import Link from 'next/link';
import React from 'react'



const Singletask = (project: taskInterFace) => {
    const dispatch = useAppDispatch();
    
    const handleDelete: emptyFunction = () => {
        dispatch(removeNote(project.id))
    }

    const handleComplete: emptyFunction = () => {
        const data = {
            id:project.id,
            complete:project.complete
        }
        dispatch(updateComplete(data))
    }

    return (
        <div className='shadow-md w-[280px] my-5 flex flex-col justify-center font-poppins  dark:bg-zinc-950 px-4'>
            <h2 className='text-xl'>{project.name}</h2>
            <h4 className='font-medium text-md'>{project.category}</h4>
            <p className='text-sm font-normal text-justify' >{project.description.slice(0, 200)}</p>
            <div className="flex flex-row mb-5 mt-2 ">
                <button onClick={handleComplete} className={`border w-24 text-sm rounded-md ${project.complete ? 'bg-green-400' : 'bg-red-400'} text-white me-2 `}>{project.complete ? 'Completed' : 'Pending'}</button>
                <Link href={`/editTask/${project.id}`} className={`border w-20 text-sm rounded-md bg-blue-500 text-white ps-5 me-1`} >
                    Edit</Link>
                <button className={`border w-20 text-sm rounded-md bg-red-500 text-white`} onClick={handleDelete} >
                    delete</button>
            </div>

        </div>
    )
}

export default Singletask;
