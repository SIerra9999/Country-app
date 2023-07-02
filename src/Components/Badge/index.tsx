import React from "react";
import { useTheme } from "../ThemeContext";
const Badge: React.FC<React.PropsWithChildren<{ text?: string }>> = ({
  children,
  text,
}) => {

  return (
    <div
      onClick={text? () => {
        window.location.replace(
          `${window.location.origin}/#/details/${text}`
        );
        window.location.reload();
      }: ()=>{}}
      className={`badge badge--${useTheme().theme}`}
    >
      {text ? text : children}
    </div>
  );
};

export default Badge;
