import React from "react";

import { Img, Text } from "components";

const Frame1116606593Rowbitmap2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
          <Img
            className="h-12 md:h-auto rounded-[50%] w-12"
            src="images/img_bitmap_5.png"
            alt="bitmap"
          />
        </div>
        <div className="flex flex-col items-center justify-end w-[81%]">
          <div className="flex flex-col gap-[5px] items-start justify-start w-full">
            <div className="flex flex-row items-center justify-between w-full">
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
                {props?.userdate}
              </Text>
            </div>
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtInterRegular14Bluegray600"
            >
              {props?.usermessage}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

Frame1116606593Rowbitmap2.defaultProps = {
  username: "Jenny Lloyd",
  userdate: "Yesterday",
  usermessage: "I’m not sure if this is what I want",
};

export default Frame1116606593Rowbitmap2;
