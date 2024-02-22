import React from "react";

import { Img, Text } from "components";

const AddProductsStackfieldtype = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.fieldtype ? (
          <div className="absolute bg-white-A700 border border-gray-300_01 border-solid bottom-[0] h-4 inset-x-[0] mx-auto rounded w-full"></div>
        ) : null}
        {!!props?.arrowdownOne ? (
          <Img
            className="absolute bottom-[0] h-2 right-[4%]"
            alt="arrowdown_One"
            src={props?.arrowdownOne}
          />
        ) : null}
        <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[9%] pr-0.5 pt-0.5">
          {!!props?.filtertext ? (
            <Text
              className="text-base text-indigo-200"
              size="txtInterRegular16Indigo200"
            >
              {props?.filtertext}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

AddProductsStackfieldtype.defaultProps = {};

export default AddProductsStackfieldtype;
