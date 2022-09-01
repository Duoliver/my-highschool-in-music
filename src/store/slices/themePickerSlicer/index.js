import { createSlice } from "@reduxjs/toolkit";
import { ThemeEnum } from "../../../enums";
import changeTheme from "./changeTheme";

export const themePickerSlicer = createSlice({
  name: "themePicker",
  initialState: {
    theme: ThemeEnum.DEFAULT,
  },
  reducers: {
    change: (state, action) => {
      const themeName = action.payload;
      state.theme = themeName;
      changeTheme(themeName);
    },
  },
});

export const { change } = themePickerSlicer.actions;

export default themePickerSlicer.reducer;
