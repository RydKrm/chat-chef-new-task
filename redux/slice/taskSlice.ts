import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { taskInterFace, taskSingleInterFace } from "@/types/task.interface";
import { taskData } from "@/public/data/taskData";

const initialState: taskInterFace[] = taskData;

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<taskSingleInterFace>) => {
            const note = action.payload;
            console.log('Add text ', note)
            state.push(note);
            return state;
        },
        removeNote: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const tasks = state.filter((task) => task._id !== id);
            state = tasks;
            return state;
        },
        editTask: (state, action: PayloadAction<taskSingleInterFace>) => {
            const note = action.payload;
            const tasks = state.filter((task) => task._id !== note._id);
            const updateTask = [...tasks, note];
            state = updateTask;
            return state;
        },
        updateComplete: (state, action: PayloadAction<number>) => {
            const update = state.filter(item => item._id === action.payload);
            update[0].complete = !update[0].complete;
            return state;
        },
        updateStatus: (state, action: PayloadAction<boolean>) => {
            const update = initialState.filter(item => item.complete == action.payload);
            return update;
        },
        changeCategory: (state, action: PayloadAction<string>) => {
            const update = initialState.filter(item => item.category == action.payload);
            return update;
        },
        searchItem: (state, action: PayloadAction<string>) => {
            const search = action.payload;
            const update = initialState.filter(item => item.name.toLowerCase().includes(search));
            return update;
        },
    }
});

// actions
export const { addNote, removeNote, editTask, updateComplete, updateStatus, changeCategory, searchItem } = taskSlice.actions;
// selectors
export const selectTask = (state: RootState) => state;

export default taskSlice.reducer;
