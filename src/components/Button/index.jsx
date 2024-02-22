import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded" };
const variants = {
  fill: {
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
    red_A400: "bg-red-A400 text-white-A700",
    blue_50: "bg-blue-50",
    green_A100: "bg-green-A100 text-green-A700",
    white_A700: "bg-white-A700 text-blue-A700",
    indigo_50: "bg-indigo-50 text-blue_gray-600",
    blue_A700: "bg-blue-A700 text-white-A700",
  },
};
const sizes = {
  xs: "py-px",
  sm: "p-[5px]",
  md: "p-2.5",
  lg: "p-3.5",
  xl: "p-[17px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "blue_gray_900",
    "red_A400",
    "blue_50",
    "green_A100",
    "white_A700",
    "indigo_50",
    "blue_A700",
  ]),
};

export { Button };
