const typographyClasses = {
  textMargin: "text-margin",
  small: "small",
  breakWord: "break-word",
  uppercase: "uppercase",
  align: null,
  className: null,
};

export const generateStyles = (props) => {
  const classNames = [];

  Object.keys(typographyClasses).forEach((attribute) => {
    if (props[attribute]) {
      classNames.push(typographyClasses[attribute] || props[attribute]);
    }
  });

  return classNames.join(" ");
};

export const typographyDefaultProps = {
  textMargin: false,
  small: false,
  uppercase: false,
  breakWord: false,
  align: null,
  className: "",
};
