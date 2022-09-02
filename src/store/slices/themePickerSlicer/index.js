import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageEnum, ThemeEnum } from "../../../enums";
import changeTheme from "./changeTheme";

export const themePickerSlicer = createSlice({
  name: "themePicker",
  initialState: {
    theme: localStorage.getItem(LocalStorageEnum.THEME) || ThemeEnum.DEFAULT,
  },
  reducers: {
    change: (state, action) => {
      const themeName = action.payload;
      state.theme = themeName;
      localStorage.setItem(LocalStorageEnum.THEME, themeName);
      changeTheme(themeName);
    },
  },
});

changeTheme(themePickerSlicer.getInitialState().theme);

export const { change } = themePickerSlicer.actions;

export default themePickerSlicer.reducer;
