import React from "react";

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
      className="badge"
    >
      {text ? text : children}
    </div>
  );
};

export default Badge;
