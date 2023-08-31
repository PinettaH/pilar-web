import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/todos/todoSlice";

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    }
})