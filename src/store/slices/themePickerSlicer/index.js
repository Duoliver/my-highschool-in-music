import { createSlice } from "@reduxjs/toolkit";
import { ThemeEnum } from "../../../enums";

export const themePickerSlicer = createSlice({
  name: "themePicker",
  initialState: {
    theme: ThemeEnum.DEFAULT,
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { change } = themePickerSlicer.actions;

export default themePickerSlicer.reducer;
