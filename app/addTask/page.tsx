'use client'
import { categoryData } from "@/public/data/categoryData"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { addNote, selectTask } from "@/redux/slice/taskSlice"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
    name: string,
    category: string,
    description: string
}

const AddTask: React.FC = () => {
    const dispatch = useAppDispatch();
    const task = useAppSelector(selectTask).task;
    const router = useRouter();

    const { register, handleSubmit, reset } = useForm<FormData>()
    const onSubmit: SubmitHandler<FormData> = (data) => {
        const newData = {
            ...data,
            complete: false,
            id: task.length + 1
        }
        dispatch(addNote(newData));
        reset();
        router.push('/');

    }
    return (
        <div className='w-full lg:max-w-5xl justify-center mx-auto mt-3 lg:mt-10 shadow-md  bg-gray-100 mb-20'>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  p-10 justify-center lg:mx-20 ">
                <div className="flex flex-row justify-between">
                    <h2 className='text-3xl text-center'>Add A New Task</h2>
                    <Link href='/' className=" bg-blue-700 text-white me-10 h-10 rounded-md hover:bg-blue-800 w-16 pt-2 ps-2 content-center" > Home </Link>
                </div>

                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col my-5 lg:me-10 w-full lg:w-1/2">
                        <label >Enter Task Name</label>
                        <input className="h-10 border border-black rounded-md ps-3 mt-2" type="text" {...register("name")} required />
                    </div>
                    <div className="flex flex-col my-5 lg:me-10 w-full lg:w-1/2">
                        <label>Category</label>
                        <select className="h-10 border border-black rounded-md ps-3 mt-2 bg-white" {...register("category")} required>
                            <option >Select Category</option>
                            {categoryData.map(cat => <option key={cat._id} value={cat.category}>{cat.category}</option>)
                            }
                        </select>
                    </div>
                </div>

                <div className="flex flex-col my-y">
                    <label>Description</label>
                    <textarea className="mt-3 px-3 pt-3 border border-black rounded-md" {...register("description")} cols={5} rows={5} required></textarea>
                </div>
                <input className=" bg-blue-700 text-white mx-10 mt-10 h-10 rounded-md hover:bg-blue-800" type="submit" />
            </form>
        </div>

    )
}

export default AddTask;