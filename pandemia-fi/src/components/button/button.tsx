import React from "react";
import classnames from "classnames";
import "./button.css";

type ButtonType = "primary" | "muted";

/**
 * Button properties.
 */
interface ButtonProps {
  /** onClick description */
  onClick: () => void;
  /** type description */
  type?: ButtonType;
}

/**
 * Button component
 */
const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  type = "primary",
  children,
}) => {
  return (
    <button
      className={classnames("button", {
        "button--primary": type === "primary",
        "button--muted": type === "muted",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
