import React from "react";

import { Img, Line, Text } from "components";

const RegistrationcompletePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-center justify-start mx-auto p-[257px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-10 md:px-5 rounded-md shadow-bs w-[59%] md:w-full">
          <Img
            className="h-[140px] w-[140px]"
            src="images/img_mail.svg"
            alt="mail"
          />
          <Text
            className="mt-[43px] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_01"
            size="txtInterBold32"
          >
            Almost There!
          </Text>
          <div className="flex flex-col items-center justify-start my-2 w-[92%] md:w-full">
            <div className="flex flex-col items-center justify-start pt-[3px] px-[3px] w-full">
              <Text
                className="text-base text-blue_gray-600 text-center"
                size="txtInterRegular16"
              >
                Check your email inbox and confirm your account
              </Text>
            </div>
            <Line className="bg-indigo-50 h-px mt-12 w-full" />
            <Text
              className="mt-[26px] text-blue_gray-600 text-center text-sm"
              size="txtInterRegular14Bluegray600"
            >
              Didn’t receive any mail?
            </Text>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-end justify-start mt-6 p-3 rounded w-full">
              <div className="flex flex-col items-end justify-end mr-[110px]">
                <Text
                  className="text-base text-blue-A700"
                  size="txtInterRegular16BlueA700"
                >
                  Resend Confirmation
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationcompletePage;
