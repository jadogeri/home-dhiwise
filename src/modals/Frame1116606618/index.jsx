import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const Frame1116606618Modal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[38%]"
      overlayClassName="bg-gray-900_7e fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-3 md:px-5 rounded-md w-full">
          <Img
            className="common-pointer h-6 w-6"
            src="images/img_close.svg"
            alt="close"
            onClick={props.onRequestClose}
          />
          <Button
            className="flex h-[58px] items-center justify-center mt-[27px] w-[58px]"
            shape="circle"
            color="blue_50"
            size="xl"
            variant="fill"
          >
            <Img
              className="h-6"
              src="images/img_checkmark_blue_a700.svg"
              alt="checkmark"
            />
          </Button>
          <Text
            className="mt-[18px] text-center text-gray-900_01 text-xl"
            size="txtInterBold20"
          >
            Export Successfull
          </Text>
          <Button
            className="cursor-pointer min-w-[99px] my-7 text-base text-center"
            shape="round"
            color="blue_A700"
            size="md"
            variant="fill"
          >
            Continue
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
};

export default Frame1116606618Modal;
