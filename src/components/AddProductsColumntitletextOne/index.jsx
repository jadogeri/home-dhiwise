import React from "react";

import { Input, Text } from "components";

const AddProductsColumntitletextOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start pt-0.5">
          <Text
            className="text-blue_gray-600 text-sm"
            size="txtInterRegular14Bluegray600"
          >
            {props?.titletext}
          </Text>
        </div>
        {!!props?.inputtext ? (
          <Input
            name="groupEleven"
            placeholder="Product description"
            value={props?.inputtext}
            className="font-inter p-0 placeholder:text-indigo-200 text-base text-left w-full"
            wrapClassName="border border-gray-300_01 border-solid mt-1 rounded w-full"
            shape="round"
            color="white_A700"
            size="lg"
            variant="fill"
          ></Input>
        ) : null}
      </div>
    </>
  );
};

AddProductsColumntitletextOne.defaultProps = {
  titletext: "Product Description",
};

export default AddProductsColumntitletextOne;
