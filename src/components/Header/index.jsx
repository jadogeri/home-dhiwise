import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="h-[29px] md:mt-0 mt-[5px] w-[9%]"></div>
        <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[103px] md:mt-0 my-1.5 w-[7%] md:w-full">
          <Img className="h-6 w-6" src="images/img_rewind.svg" alt="rewind" />
          <Text className="text-sm text-white-A700" size="txtInterRegular14">
            Search...
          </Text>
        </div>
        <div className="flex flex-col h-6 items-center justify-start md:ml-[0] ml-[737px] md:mt-0 my-1.5 w-6">
          <Img className="h-6 w-6" src="images/img_trophy.svg" alt="trophy" />
        </div>
        <div className="h-7 md:h-[30px] mb-1.5 ml-5 md:ml-[0] md:mt-0 mt-0.5 relative w-7">
          <Img
            className="absolute bottom-[0] h-6 left-[0] w-6"
            src="images/img_00general01.svg"
            alt="00generalOne"
          />
          <Text
            className="absolute bg-blue-A700 flex h-4 items-center justify-center right-[0] rounded-[50%] text-center text-white-A700 text-xs top-[0] w-4"
            size="txtInterBold12"
          >
            5
          </Text>
        </div>
        <div className="flex flex-row items-center justify-between ml-9 md:ml-[0] w-[14%] md:w-full">
          <Text
            className="bg-green-A400 flex h-9 items-center justify-center rounded-[50%] text-center text-lg text-white-A700 w-9"
            size="txtInterBold18"
          >
            R
          </Text>
          <Text className="text-sm text-white-A700" size="txtInterRegular14">
            Randhir kumar
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowdown_gray_50.svg"
            alt="arrowdown"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
