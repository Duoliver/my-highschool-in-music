import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { SmallButtonVariantEnum, ThemeEnum } from "../../../enums";
import routes from "../../../routes";
import { change } from "../../../store/slices/themePickerSlicer";
import { SmallButton } from "../../atoms/Buttons";
import { TitleTwo } from "../../atoms/typography";
import "./styles.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themePicker.theme);

  const atMain = location.pathname === routes.MAIN;

  const isSticky = (e) => {
    const header = document.getElementById("header");
    if (window.pageYOffset >= window.innerHeight) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

  const getButton = useCallback(() => {
    if (atMain) {
      return (
        <SmallButton
          variant={SmallButtonVariantEnum.PLAY}
          onClick={() => navigate(`${routes.YEAR_ROOT}/17`)}
        />
      );
    }
    return (
      <SmallButton
        variant={SmallButtonVariantEnum.ARROW_LEFT}
        onClick={() => navigate(routes.MAIN)}
      />
    );
  }, [atMain, navigate]);

  const handleThemeChange = useCallback(() => {
    const nextTheme =
      theme === ThemeEnum.DEFAULT ? ThemeEnum.DARK : ThemeEnum.DEFAULT;
    dispatch(change(nextTheme));
  }, [dispatch, theme]);

  useEffect(() => {
    if (atMain) {
      window.addEventListener("scroll", isSticky);
    }
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [atMain]);

  return (
    <header className={`header ${!atMain ? "sticky" : ""}`} id="header">
      {getButton()}
      <SmallButton onClick={() => handleThemeChange()} />
      <TitleTwo className="header-first-title" uppercase>
        Meu Colegial Em Música 2017-2021/1
      </TitleTwo>
      <TitleTwo className="header-second-title">`17-`21</TitleTwo>
    </header>
  );
};

export default Header;
