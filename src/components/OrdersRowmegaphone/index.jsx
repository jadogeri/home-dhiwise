import React from "react";

import { MenuItem } from "react-pro-sidebar";

import { Img, Text } from "components";

const OrdersRowmegaphone = (props) => {
  return (
    <>
      <MenuItem
        icon={
          <Img
            className="h-6 w-6"
            src="images/img_megaphone_blue_gray_600.svg"
            alt="megaphone"
          />
        }
        suffix={
          <Text className="bg-gray-900 font-bold font-inter h-4 justify-center ml-[84px] mr-0.5 my-1 px-1.5 rounded-lg text-center text-white-A700 text-xs w-[26px]">
            {props?.badgetext}
          </Text>
        }
        active={window.location.pathname === "/orders"}
      >
        <Text className="font-inter ml-4 mt-[3px] text-sm text-white-A700">
          {props?.orderstext}
        </Text>
      </MenuItem>
    </>
  );
};

OrdersRowmegaphone.defaultProps = { orderstext: "Orders", badgetext: "16" };

export default OrdersRowmegaphone;
