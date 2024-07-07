import { configureStore } from "@reduxjs/toolkit";
//store ko un reducers ki knowledge chahiye hoti thi
import todoReducer from '../features/todo/todoSlice';
export const store = configureStore({
    reducer: todoReducer
})