import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const Frame1116606620Modal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[38%]"
      overlayClassName="bg-gray-900_7e fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start my-[26px] p-3 md:px-5 rounded w-full">
          <div className="flex flex-col items-start justify-start mb-4 w-[97%] md:w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="mt-[17px] text-gray-900_01 text-xl"
                size="txtInterBold20"
              >
                Delete Items
              </Text>
              <Img
                className="common-pointer h-6 w-6"
                src="images/img_close.svg"
                alt="close"
                onClick={props.onRequestClose}
              />
            </div>
            <Text
              className="mt-[25px] text-base text-gray-900_01"
              size="txtInterRegular16Gray90001"
            >
              Are you sure you want to delete 4 selected items?
            </Text>
            <div className="flex flex-row gap-7 items-center justify-end md:ml-[0] ml-[305px] mt-10 w-[36%] md:w-full">
              <Text
                className="text-base text-red-A400 text-right"
                size="txtInterRegular16RedA400"
              >
                Cancel
              </Text>
              <Button
                className="cursor-pointer min-w-[98px] text-base text-center"
                shape="round"
                color="red_A400"
                size="md"
                variant="fill"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default Frame1116606620Modal;
