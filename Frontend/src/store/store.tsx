import { configureStore } from "@reduxjs/toolkit";
import isDarkReducer from "./isDark"; 

const store = configureStore({
    reducer: {
        isDark: isDarkReducer
    }
});

export default store;