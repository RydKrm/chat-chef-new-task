'use client'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useAppDispatch } from '@/redux/hook';
import { changeCategory, updateStatus } from '@/redux/slice/taskSlice';

interface SideBarProps {
    handleOpen: () => void,
}

const categories: { _id: number, category: string }[] = [
    { _id: 1, category: 'Front-end' },
    { _id: 2, category: 'Back-end' },
    { _id: 3, category: 'Team Task' },
    { _id: 4, category: 'Personal Task' },
]

const SideBar: React.FC<SideBarProps> = ({ handleOpen }) => {
    const dispatch = useAppDispatch();

    const handleStatus = (status: boolean) => {
        dispatch(updateStatus(status))
    }

    const handleCategory = (category: string) => {
        dispatch(changeCategory(category))
    }

    return (
        <>
            <div className='f_col bg-white dark:bg-black mt-6 lg:ms-10 lg:mt-24'>
                <p className=' lg:hidden mb-5 bg-c_tertiary dark:bg-c_primary text-white pt-1 pl-2 w-8 h-8 rounded-md' onClick={handleOpen}><FontAwesomeIcon icon={faBars} /> </p>
                <div>
                    <h2 className='text-xl mb-4 mt-10'> Select Category</h2>
                    {
                        categories.map(category => <p onClick={() => { handleCategory(category.category) }} className='ms-2 w-48 text-sm  my-1 cursor-pointer' key={category._id}>{category.category}</p>)
                    }
                    <h2 className='text-xl mb-4 mt-10'> Select Status </h2>
                    <p className=' w-48 text-sm ms-2 my-1 cursor-pointer' onClick={() => { handleStatus(true) }}>Complete</p>
                    <p className=' w-48 text-sm ms-2 my-1 cursor-pointer' onClick={() => { handleStatus(false) }}> Pending </p>
                </div>
            </div>
        </>


    )
}

export default SideBar