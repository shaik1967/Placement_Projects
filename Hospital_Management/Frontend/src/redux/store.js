import { configureStore } from "@reduxjs/toolkit";
import { alertslice } from "./features/alertslice";

export default configureStore({
    reducer: {
        alerts: alertslice.reducer,
    },
});
