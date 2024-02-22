import React from "react";

const sizeClasses = {
  txtInterBold14WhiteA700: "font-bold font-inter",
  txtInterRegular14Bluegray600: "font-inter font-normal",
  txtInterRegular14Gray90001: "font-inter font-normal",
  txtInterRegular16IndigoA400: "font-inter font-normal",
  txtInterRegular10RedA400: "font-inter font-normal",
  txtInterRegular16Indigo200: "font-inter font-normal",
  txtInterRegular14GreenA700: "font-inter font-normal",
  txtInterBold32WhiteA700: "font-bold font-inter",
  txtInterBold24: "font-bold font-inter",
  txtInterBold20: "font-bold font-inter",
  txtInterRegular16Gray90001: "font-inter font-normal",
  txtRubikGlitchRegular25: "font-normal font-rubikglitch",
  txtInterRegular14BlueA700: "font-inter font-normal",
  txtInterRegular14Indigo200: "font-inter font-normal",
  txtInterBold24WhiteA700: "font-bold font-inter",
  txtInterBold18: "font-bold font-inter",
  txtInterRegular16BlueA700: "font-inter font-normal",
  txtInterRegular16WhiteA700: "font-inter font-normal",
  txtInterRegular10: "font-inter font-normal",
  txtInterBold14: "font-bold font-inter",
  txtInterBold16: "font-bold font-inter",
  txtInterBold32: "font-bold font-inter",
  txtInterRegular16RedA400: "font-inter font-normal",
  txtInterRegular10GreenA700: "font-inter font-normal",
  txtInterBold12: "font-bold font-inter",
  txtInterMedium14: "font-inter font-medium",
  txtInterRegular14RedA400: "font-inter font-normal",
  txtInterBold14Gray90001: "font-bold font-inter",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterBold120: "font-bold font-inter",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
