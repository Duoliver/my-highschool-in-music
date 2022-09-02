import { ThemeEnum } from "../../../enums";

const html = document.querySelector("html");
const metaThemeColour = document.querySelector("meta[name=theme-color]");

const getStyle = (styleName) =>
  window.getComputedStyle(html).getPropertyValue(styleName);

const defaultTheme = {
  background: getStyle("--background"),
  color: getStyle("--color"),
  overlay: getStyle("--overlay"),
};

const darkTheme = {
  background: "black",
  color: "white",
  overlay: "#FFFFFF80",
};

const themes = {
  [ThemeEnum.DEFAULT]: defaultTheme,
  [ThemeEnum.DARK]: darkTheme,
};

const changeTheme = (themeName) => {
  const colours = themes[themeName] || {};
  metaThemeColour.setAttribute("content", colours.background);
  Object.keys(colours).map((key) =>
    html.style.setProperty(`--${key}`, colours[key])
  );
};

export default changeTheme;
