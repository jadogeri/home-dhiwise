import React from "react";

import { useNavigate } from "react-router-dom";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Line, Text } from "components";
import LoginColumntitletext from "components/LoginColumntitletext";

const LoginPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-center justify-start mx-auto p-[89px] md:px-10 sm:px-5 w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-end mb-[121px] p-[37px] md:px-5 rounded-md shadow-bs w-[43%] md:w-full">
          <div className="flex flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[23px] mt-[11px] pt-[5px] px-[5px] w-[91%] md:w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_01"
              size="txtInterBold32"
            >
              Sign In
            </Text>
            <div className="flex flex-row gap-[7px] items-center justify-center w-3/4 md:w-full">
              <Text
                className="text-base text-blue_gray-600 text-center"
                size="txtInterRegular16"
              >
                New to Our Product?
              </Text>
              <a
                href="javascript:"
                className="text-base text-blue-A700 text-center"
              >
                <Text size="txtInterRegular16BlueA700">Create an Account</Text>
              </a>
            </div>
          </div>
          <LoginColumntitletext
            className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] mt-10 w-[91%] md:w-full"
            confirmationcodetext="Email"
          />
          <LoginColumntitletext
            className="flex flex-col items-start justify-start md:ml-[0] ml-[23px] mt-6 w-[91%] md:w-full"
            confirmationcodetext="Password"
          />
          <div className="flex flex-row gap-3 items-start justify-start md:ml-[0] ml-[23px] mt-4 w-[34%] md:w-full">
            <Img
              className="h-5 w-5"
              src="images/img_checkmark_white_a700.svg"
              alt="checkmark"
            />
            <Text
              className="mt-0.5 text-blue_gray-600 text-sm"
              size="txtInterRegular14Bluegray600"
            >
              Keep me signed in
            </Text>
          </div>
          <div
            className="common-pointer bg-blue_gray-900 flex flex-col items-center justify-start md:ml-[0] ml-[23px] mt-4 p-3 rounded w-[91%] md:w-full"
            onClick={() => navigate("/dashboard")}
          >
            <div className="flex flex-col items-end justify-end">
              <a
                href="javascript:"
                className="mr-3.5 text-base text-white-A700"
              >
                <Text size="txtInterRegular16WhiteA700">Create Account</Text>
              </a>
            </div>
          </div>
          <a className="md:ml-[0] ml-[157px] mt-[26px] text-blue-A700 text-center text-sm">
            <Text
              className="common-pointer"
              size="txtInterRegular14BlueA700"
              onClick={() => navigate("/passwordreset")}
            >
              Forgot your password?
            </Text>
          </a>
          <Line className="bg-gray-300 h-px md:ml-[0] ml-[23px] mt-6 w-[91%]" />
          <Text
            className="md:ml-[0] ml-[179px] mt-[26px] text-blue_gray-600 text-center text-sm"
            size="txtInterRegular14Bluegray600"
          >
            Or sign in using:
          </Text>
          <Button
            className="common-pointer border border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[420px] sm:min-w-full md:ml-[0] ml-[23px] mt-[35px]"
            onClick={() => googleSignIn()}
            leftIcon={
              <Img
                className="h-6 mr-2.5"
                src="images/img_google.svg"
                alt="google"
              />
            }
            shape="round"
            color="white_A700"
            size="md"
            variant="fill"
          >
            <div className="text-base text-left">Continue with Google</div>
          </Button>
          <Button
            className="border border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[420px] sm:min-w-full md:ml-[0] ml-[23px] mt-3"
            leftIcon={
              <Img
                className="h-6 mr-1"
                src="images/img_facebook.svg"
                alt="facebook"
              />
            }
            shape="round"
            color="white_A700"
            size="md"
            variant="fill"
          >
            <div className="text-base text-left">Continue with Facebook</div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
