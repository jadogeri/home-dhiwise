import React from "react";

import { Img, Text } from "components";

const OrdersStackfieldtypeOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 border border-gray-300_01 border-solid bottom-[0] h-4 inset-x-[0] mx-auto rounded w-full"></div>
        <div className="absolute bottom-[0] flex flex-col items-start justify-start pr-0.5 pt-0.5 right-[5%]">
          <Text
            className="text-base text-indigo-200"
            size="txtInterRegular16Indigo200"
          >
            {props?.placeholder}
          </Text>
        </div>
        <Img
          className="absolute bottom-[0] h-2 left-[5%]"
          src="images/img_rewind_blue_gray_400.svg"
          alt="rewind_One"
        />
      </div>
    </>
  );
};

OrdersStackfieldtypeOne.defaultProps = { placeholder: "Search..." };

export default OrdersStackfieldtypeOne;
