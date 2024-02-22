import React from "react";

import { Img, Text } from "components";

const Frame1116606593Rowbitmap3 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
          <Img
            className="h-12 md:h-auto rounded-[50%] w-12"
            src="images/img_bitmap_6.png"
            alt="bitmap"
          />
        </div>
        <div className="flex flex-col items-center justify-start w-[81%]">
          <div className="flex flex-col gap-[7px] items-start justify-start w-full">
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
                {props?.date}
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

Frame1116606593Rowbitmap3.defaultProps = {
  username: "Andrew Larson",
  date: "Yesterday",
  message: "Can you help me choose from t…",
};

export default Frame1116606593Rowbitmap3;
