import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState : [],
    reducers : {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const existingUser = state.find((user, index) => index === id);
            if (existingUser) {
                existingUser.name = name;
                existingUser.email = email;
            }
        },
        deleteUser: (state, action) => {
            return state.filter((_, index) => index !== action.payload);
        },
    },

})

export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;
