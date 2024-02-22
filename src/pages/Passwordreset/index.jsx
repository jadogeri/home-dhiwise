import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Line, Text } from "components";
import LoginColumntitletext from "components/LoginColumntitletext";

const PasswordresetPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-center justify-start mx-auto p-[251px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-12 md:px-5 rounded-md shadow-bs w-[58%] md:w-full">
          <div className="flex flex-col gap-[9px] items-center justify-start pt-[3px] w-[95%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_01"
              size="txtInterBold32"
            >
              Password Reset
            </Text>
            <div className="flex flex-col items-center justify-start pt-[3px] px-[3px] w-full">
              <Text
                className="text-base text-blue_gray-600 text-center"
                size="txtInterRegular16"
              >
                We Will Help You Reset your Password
              </Text>
            </div>
          </div>
          <LoginColumntitletext
            className="flex flex-col items-start justify-start mt-10 w-[95%] md:w-full"
            confirmationcodetext="Email"
          />
          <Button
            className="common-pointer cursor-pointer min-w-[420px] sm:min-w-full mt-6 text-base text-center"
            onClick={() => navigate("/emailconfirmation")}
            shape="round"
            color="blue_gray_900"
            size="lg"
            variant="fill"
          >
            Reset Password
          </Button>
          <Line className="bg-gray-300 h-px mt-12 w-[95%]" />
          <Text
            className="mt-[26px] text-blue_gray-600 text-center text-sm"
            size="txtInterRegular14Bluegray600"
          >
            Remembered your Password?
          </Text>
          <Button
            className="common-pointer border border-gray-300 border-solid cursor-pointer min-w-[420px] sm:min-w-full mt-6 text-base text-center"
            onClick={() => navigate("/login")}
            shape="round"
            color="white_A700"
            size="lg"
            variant="fill"
          >
            Back to Sign In
          </Button>
        </div>
      </div>
    </>
  );
};

export default PasswordresetPage;
