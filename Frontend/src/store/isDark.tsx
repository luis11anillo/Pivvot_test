import { createSlice } from "@reduxjs/toolkit"; 

export const isDarkSlice = createSlice({
    name: 'isDark',
    initialState: {
        value: false
    },
    reducers: {
        toggle: (state) => {
            state.value = !state.value;
        }
    }
})

export const { toggle } = isDarkSlice.actions

export const selectIsDark = (state) => state.isDark.value;

export default isDarkSlice.reducer;

