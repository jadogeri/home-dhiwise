import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Line, Text } from "components";
import LoginColumntitletext from "components/LoginColumntitletext";

const EmailconfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-center justify-start mx-auto p-[251px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-12 md:px-5 rounded-md shadow-bs w-[58%] md:w-full">
          <div className="flex flex-col gap-2.5 items-center justify-start pt-0.5 w-[95%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_01"
              size="txtInterBold32"
            >
              Confirm Email
            </Text>
            <div className="flex flex-col items-center justify-end w-full">
              <Text
                className="text-base text-blue_gray-600 text-center"
                size="txtInterRegular16"
              >
                Check Your Email and Enter Confirmation Code
              </Text>
            </div>
          </div>
          <LoginColumntitletext className="flex flex-col items-start justify-start mt-10 w-[95%] md:w-full" />
          <Button
            className="common-pointer cursor-pointer min-w-[420px] sm:min-w-full mt-6 text-base text-center"
            onClick={() => navigate("/registrationcomplete")}
            shape="round"
            color="blue_gray_900"
            size="lg"
            variant="fill"
          >
            Confirm Email
          </Button>
          <Line className="bg-gray-300 h-px mt-12 w-[95%]" />
          <Text
            className="mt-[26px] text-blue_gray-600 text-center text-sm"
            size="txtInterRegular14Bluegray600"
          >
            Haven’t received your code?
          </Text>
          <Button
            className="border border-gray-300 border-solid cursor-pointer min-w-[420px] sm:min-w-full mt-6 text-base text-center"
            shape="round"
            color="white_A700"
            size="lg"
            variant="fill"
          >
            Resend Code
          </Button>
        </div>
      </div>
    </>
  );
};

export default EmailconfirmationPage;
