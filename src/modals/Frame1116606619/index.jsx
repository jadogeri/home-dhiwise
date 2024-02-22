import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Input, SelectBox, Text } from "components";
import AddProductsColumntitletextFive from "components/AddProductsColumntitletextFive";
import AddProductsStackfieldtype from "components/AddProductsStackfieldtype";

const chooseAProductOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Frame1116606619Modal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[38%]"
      overlayClassName="bg-gray-900_7e fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-3 md:px-5 rounded w-full">
          <div className="flex flex-col items-start justify-start mb-4 w-[97%] md:w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="mt-[19px] text-gray-900_01 text-xl"
                size="txtInterBold20"
              >
                Add Category
              </Text>
              <Img
                className="common-pointer h-6 w-6"
                src="images/img_close.svg"
                alt="close"
                onClick={props.onRequestClose}
              />
            </div>
            <AddProductsColumntitletextFive
              className="flex flex-col items-start justify-start mt-[27px] w-[97%] md:w-full"
              titletext="Category Name"
            />
            <AddProductsStackfieldtype className="flex flex-col items-start justify-start mt-6 w-[97%] md:w-full" />
            <div className="flex flex-row gap-7 items-center justify-end md:ml-[0] ml-[229px] mt-7 w-[51%] md:w-full">
              <div className="flex flex-col items-center justify-end">
                <Text
                  className="text-base text-blue-A700 text-right"
                  size="txtInterRegular16BlueA700"
                >
                  Cancel
                </Text>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-10 items-center justify-end p-2"
                style={{ backgroundImage: "url('images/img_group19.svg')" }}
              >
                <Text
                  className="mt-[3px] text-base text-white-A700"
                  size="txtInterRegular16WhiteA700"
                >
                  Create Category
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default Frame1116606619Modal;
