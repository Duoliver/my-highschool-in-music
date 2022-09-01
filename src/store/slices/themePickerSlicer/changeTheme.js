import { ThemeEnum } from "../../../enums";

const html = document.querySelector("html");

const getStyle = (styleName) =>
  window.getComputedStyle(html).getPropertyValue(styleName);

const defaultTheme = {
  background: getStyle("--background"),
  color: getStyle("--color"),
};

const darkTheme = {
  background: "black",
  color: "white",
};

const themes = {
  [ThemeEnum.DEFAULT]: defaultTheme,
  [ThemeEnum.DARK]: darkTheme,
};

const changeTheme = (themeName) => {
  const colours = themes[themeName] || {};
  Object.keys(colours).map((key) =>
    html.style.setProperty(`--${key}`, colours[key])
  );
};

export default changeTheme;
