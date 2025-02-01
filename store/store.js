import { configureStore } from "@reduxjs/toolkit"; 
import increment from "../reducer";

const store = configureStore({
    reducer: increment
});

export default store;
