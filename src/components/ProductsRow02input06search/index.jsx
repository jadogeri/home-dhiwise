import React from "react";

import { Button, Img, Input, SelectBox } from "components";

const dropdown01RegOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductsRow02input06search = (props) => {
  return (
    <>
      <div className={props.className}>
        <SelectBox
          className="border border-gray-300_01 border-solid font-inter text-base text-left w-[18%] md:w-full"
          placeholderClassName="text-indigo-200"
          indicator={
            <Img
              className="h-6 mr-[0] w-6"
              src="images/img_arrowdown_blue_gray_400.svg"
              alt="arrow_down"
            />
          }
          isMulti={false}
          name="03dropdown01reg"
          options={dropdown01RegOptionsList}
          isSearchable={false}
          placeholder="Filter"
          shape="round"
          color="white_A700"
          size="xs"
          variant="fill"
        />
        <Input
          name="02input06search"
          placeholder="Search..."
          className="font-inter p-0 placeholder:text-indigo-200 text-base text-left w-full"
          wrapClassName="border border-gray-300_01 border-solid flex ml-3 md:ml-[0] rounded w-[34%] md:w-full"
          prefix={
            <Img
              className="h-6 mr-2 my-auto"
              src="images/img_rewind_blue_gray_400.svg"
              alt="rewind"
            />
          }
          shape="round"
          color="white_A700"
          size="sm"
          variant="fill"
        ></Input>
        <Button
          className="border border-gray-300 border-solid flex h-10 items-center justify-center md:ml-[0] ml-[420px] w-10"
          shape="round"
          color="white_A700"
          size="md"
          variant="fill"
        >
          <Img className="h-6" src="images/img_edit.svg" alt="edit" />
        </Button>
        <Button
          className="border border-gray-300 border-solid flex h-10 items-center justify-center ml-3 md:ml-[0] w-10"
          shape="round"
          color="white_A700"
          size="md"
          variant="fill"
        >
          <Img className="h-6" src="images/img_thumbsup.svg" alt="thumbsup" />
        </Button>
      </div>
    </>
  );
};

ProductsRow02input06search.defaultProps = {};

export default ProductsRow02input06search;
