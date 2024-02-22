import React from "react";

import { Input, Text } from "components";

const LoginColumntitletext = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start">
          <Text
            className="text-blue_gray-600 text-sm"
            size="txtInterRegular14Bluegray600"
          >
            {props?.confirmationcodetext}
          </Text>
        </div>
        <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-start mt-1 p-3 rounded w-full">
          {!!props?.inputtext ? (
            <Input
              name="texttype"
              placeholder="Enter Code"
              value={props?.inputtext}
              className="font-inter p-0 placeholder:text-indigo-200 text-base text-indigo-200 text-left w-full"
              wrapClassName="w-[98%]"
              size="xs"
            ></Input>
          ) : null}
        </div>
      </div>
    </>
  );
};

LoginColumntitletext.defaultProps = {
  confirmationcodetext: "Confirmation Code",
};

export default LoginColumntitletext;
