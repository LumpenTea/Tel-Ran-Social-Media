import { configureStore } from "@reduxjs/toolkit";
import { statsReducer, userReducer } from "./reducers";

export const store = configureStore({
    reducer: {
        user: userReducer,
        stats: statsReducer
    }
})