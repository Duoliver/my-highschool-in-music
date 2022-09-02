import { configureStore } from "@reduxjs/toolkit";
import themePickerReducer from "./slices/themePickerSlicer";

export default configureStore({
  reducer: {
    themePicker: themePickerReducer,
  },
});
