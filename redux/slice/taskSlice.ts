import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { taskInterFace, taskSingleInterFace } from "@/types/task.interface";
import { task } from "@/db.json";
import axios from "axios";

interface FetchDataResponse {
    data: taskInterFace[];
}

export const fetchData = createAsyncThunk<taskInterFace[]>(
    'task/fetchData',
    async () => {
        const response = await axios.get<FetchDataResponse>('http://localhost:8000/task');
        console.log('res data ', response.data.data)
        return response.data.data;
    }
);

 interface updateInterface{
   id:number,
   complete:boolean
}

 const initialState: taskInterFace[] = task;
export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addNote:  (state, action: PayloadAction<taskSingleInterFace>) => {
            axios.post(`http://localhost:8000/task`, action.payload)
                .then(res => {
                    return res.data;
                })
                .catch(err => console.log(err));
            return state;
        },
        removeNote: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            axios.delete(`http://localhost:8000/task/${id}`)
             .then(res=>{
               return state;
             })
             .catch(err=>console.log(err));
            return state;
        },
        editTask: (state, action: PayloadAction<taskSingleInterFace>) => {
            const note = action.payload;
            const id = action.payload.id;
            axios.put(`http://localhost:8000/task/${id}`, note)
                .then(res => {
                    return state;
                })
                .catch(err => console.log(err));
            return state;
        },
        updateComplete: (state, action: PayloadAction<updateInterface>) => {
            const id = action.payload.id;
            console.log('id => ',id)
            axios.patch(`http://localhost:8000/task/${id}`,{complete:!action.payload.complete})
            .then(res=>{
                return state;
            })
            .catch(err=>console.log(err));
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
                return action.payload;
            });
    }
});
// actions
export const { addNote, removeNote, editTask, updateComplete, updateStatus, changeCategory, searchItem } = taskSlice.actions;
// selectors
export const selectTask = (state: RootState) => state;

export default taskSlice.reducer;
