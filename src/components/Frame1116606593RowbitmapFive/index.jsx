import React from "react";

import { Img, Text } from "components";

const Frame1116606593RowbitmapFive = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
          <div className="h-12 relative w-12">
            <Img
              className="absolute h-12 inset-[0] justify-center m-auto rounded-[50%] w-12"
              src="images/img_bitmap_48x399.png"
              alt="bitmap_Five"
            />
            <div className="absolute bg-green-A400 border-4 border-solid border-white-A700 bottom-[0] h-4 right-[0] rounded-[50%] w-4"></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[81%]">
          <div className="flex flex-col gap-[7px] items-center justify-start w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="text-gray-900_01 text-sm"
                size="txtInterRegular14Gray90001"
              >
                {props?.username}
              </Text>
              <Text
                className="text-indigo-200 text-right text-sm"
                size="txtInterRegular14Indigo200"
              >
                {props?.time}
              </Text>
            </div>
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtInterRegular14Bluegray600"
            >
              {props?.message}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

Frame1116606593RowbitmapFive.defaultProps = {
  username: "Barry George",
  time: "09:54 AM",
  message: "Is there any chance to get a refu...",
};

export default Frame1116606593RowbitmapFive;
