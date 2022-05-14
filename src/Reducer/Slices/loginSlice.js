import { createSlice } from "@reduxjs/toolkit";
import { getAPIData } from "../../Services/getAPIData";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        token: "",
        isLogged: false
    },
    reducers: {
        setLogin: (state, action) => {
            state.token = action.payload;
            state.isLogged = true;
        },  // reducers are defined as functions
        setLogout: (state, action) => {
            state.token = [];
            state.isLogged = false;
        }
    }
})

export const { setLogin, setLogout } = loginSlice.actions;
export default loginSlice.reducer;

export const fetchLogin = (formData) => (dispatch) => {
    const data = {
        type: "login",
        method: 'POST',
        params: {},
        data: {
            email: formData.email,
            password: formData.password
        }
    }
    getAPIData(data)
        .then(res => {
            dispatch(setLogin(res.access));
            localStorage.setItem("token", res.access)
        })
        .catch(err => {
            console.log(err);
        })
}