import React from "react";

import { Button, Img, Text } from "components";

const AddProductsColumntitletextFive = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start">
          <Text
            className="text-blue_gray-600 text-sm"
            size="txtInterRegular14Bluegray600"
          >
            {props?.titletext}
          </Text>
        </div>
        <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-start justify-start mt-1 p-2 rounded w-full">
          <div className="flex flex-row items-center justify-start ml-2 md:ml-[0] w-[85%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[22%]">
              <div className="h-6 relative w-full">
                {!!props?.xl ? (
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[64px] pl-3 pr-[7px]"
                    rightIcon={
                      <Img
                        className="h-6 ml-1"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                    shape="round"
                    color="indigo_50"
                    variant="fill"
                  >
                    <div className="font-inter text-left text-sm">
                      {props?.xl}
                    </div>
                  </Button>
                ) : null}
                {!!props?.closeOne ? (
                  <Img
                    className="absolute h-6 inset-y-[0] my-auto right-[15%] w-6"
                    alt="close_One"
                    src={props?.closeOne}
                  />
                ) : null}
                {!!props?.namesix1 ? (
                  <Text
                    className="absolute h-max inset-y-[0] left-[22%] my-auto text-blue_gray-600 text-sm"
                    size="txtInterRegular14Bluegray600"
                  >
                    {props?.namesix1}
                  </Text>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col items-center justify-start ml-[7px] w-[24%]">
              {!!props?.xl ? (
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[64px] pl-3 pr-[7px]"
                  rightIcon={
                    <Img
                      className="h-6 ml-1"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  }
                  shape="round"
                  color="indigo_50"
                  variant="fill"
                >
                  <div className="font-inter text-left text-sm">
                    {props?.xl}
                  </div>
                </Button>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-start ml-[7px] w-[22%]">
              <div className="h-6 relative w-full">
                {!!props?.xl ? (
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[64px] pl-3 pr-[7px]"
                    rightIcon={
                      <Img
                        className="h-6 ml-1"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                    shape="round"
                    color="indigo_50"
                    variant="fill"
                  >
                    <div className="font-inter text-left text-sm">
                      {props?.xl}
                    </div>
                  </Button>
                ) : null}
                {!!props?.closeOne ? (
                  <Img
                    className="absolute h-6 inset-y-[0] my-auto right-[15%] w-6"
                    alt="close_One"
                    src={props?.closeOne}
                  />
                ) : null}
                {!!props?.namesix1 ? (
                  <Text
                    className="absolute h-max inset-y-[0] left-[22%] my-auto text-blue_gray-600 text-sm"
                    size="txtInterRegular14Bluegray600"
                  >
                    {props?.namesix1}
                  </Text>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col items-center justify-start ml-[7px] w-1/4">
              {!!props?.xl ? (
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[64px] pl-3 pr-[7px]"
                  rightIcon={
                    <Img
                      className="h-6 ml-1"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  }
                  shape="round"
                  color="indigo_50"
                  variant="fill"
                >
                  <div className="font-inter text-left text-sm">
                    {props?.xl}
                  </div>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AddProductsColumntitletextFive.defaultProps = { titletext: "Value" };

export default AddProductsColumntitletextFive;
