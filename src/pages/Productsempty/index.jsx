import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Img, SelectBox, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const randhirKumarOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductsemptyPage = () => {
  const sideBarMenu = [
    {
      icon: <Img className="h-6 w-6" src="images/img_home.svg" alt="home" />,
      label: "Dashboard",
      href: "/dashboard",
      active: window.location.pathname === "/dashboard",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_megaphone.svg"
          alt="megaphone"
        />
      ),
      label: "Orders",
      suffix: (
        <Text className="bg-gray-900 font-bold h-4 justify-center mr-0.5 my-1 px-1.5 rounded-lg text-center text-white-A700 text-xs w-[26px]">
          16
        </Text>
      ),
      href: "/orders",
      active: window.location.pathname === "/orders",
    },
    {
      icon: (
        <Img className="h-6 mb-0.5 w-6" src="images/img_sort.svg" alt="sort" />
      ),
      label: "Products",
      href: "/",
      active: window.location.pathname === "/",
    },
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          src="images/img_folder.svg"
          alt="folder"
        />
      ),
      label: "Categories",
      href: "/categoriesempty",
      active: window.location.pathname === "/categoriesempty",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_settings.svg"
          alt="settings"
        />
      ),
      label: "Customers",
      href: "/customers",
      active: window.location.pathname === "/customers",
    },
    {
      icon: (
        <Img
          className="h-6 mb-0.5 w-6"
          src="images/img_settings_white_a700.svg"
          alt="settings_One"
        />
      ),
      label: "Reports",
    },
    {
      icon: (
        <Img
          className="h-6 mb-1 w-6"
          src="images/img_signal.svg"
          alt="signal"
        />
      ),
      label: "Coupons",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-rubikglitch items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-black-900 flex flex-row items-center justify-start p-[9px] shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-2.5 md:px-5 w-[98%]">
              <div className="flex flex-row gap-[9px] items-center justify-start w-[13%] md:w-full">
                <Img className="h-12" src="images/img_cart.svg" alt="cart" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                  size="txtRubikGlitchRegular25"
                >
                  fastcart
                </Text>
              </div>
              <div className="flex flex-row font-inter gap-2 items-center justify-center md:ml-[0] ml-[103px] w-[7%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_rewind.svg"
                  alt="rewind"
                />
                <Text
                  className="text-sm text-white-A700"
                  size="txtInterRegular14"
                >
                  Search...
                </Text>
              </div>
              <div className="flex flex-col h-6 items-center justify-start md:ml-[0] ml-[737px] w-6">
                <Img
                  className="h-6 w-6"
                  src="images/img_trophy.svg"
                  alt="trophy"
                />
              </div>
              <div className="font-inter md:h-6 h-7 ml-5 md:ml-[0] relative w-7">
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
              <div className="flex flex-row font-inter gap-3 items-center justify-between ml-9 md:ml-[0] w-[14%] md:w-full">
                <Text
                  className="bg-green-A400 flex h-9 items-center justify-center rounded-[50%] text-center text-lg text-white-A700 w-9"
                  size="txtInterBold18"
                >
                  R
                </Text>
                <SelectBox
                  className="text-left text-sm text-white-A700 w-3/4 sm:w-full"
                  placeholderClassName="text-white-A700"
                  indicator={
                    <Img
                      className="h-6 mr-[0] w-6"
                      src="images/img_arrowdown_gray_50.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="groupTwentySeven"
                  options={randhirKumarOptionsList}
                  isSearchable={false}
                  placeholder="Randhir kumar"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar1 className="!sticky !w-[250px] bg-blue_gray-900 flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                size="txtInterBold24"
              >
                Products
              </Text>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[120px] md:px-10 sm:px-5 rounded-md shadow-bs w-full">
                <div className="flex flex-col gap-[25px] items-center justify-start w-[17%] md:w-full">
                  <Img
                    className="h-[140px] w-[140px]"
                    src="images/img_illustration_gray_300.svg"
                    alt="illustration"
                  />
                  <Text
                    className="text-center text-gray-900_01 text-xl"
                    size="txtInterBold20"
                  >
                    Add Products
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] mt-[13px] text-base text-blue_gray-600 text-center"
                  size="txtInterRegular16"
                >
                  <>
                    Start making sales by adding your products.
                    <br />
                    You can import and manage your products at any time.
                  </>
                </Text>
                <div className="bg-blue-A700 h-10 md:h-12 mt-6 p-2 relative rounded w-[19%]">
                  <Img
                    className="absolute h-6 inset-y-[0] left-[12%] my-auto"
                    src="images/img_group.svg"
                    alt="group"
                  />
                  <Text
                    className="absolute h-max inset-y-[0] my-auto right-[12%] text-base text-white-A700"
                    size="txtInterRegular16WhiteA700"
                  >
                    Add Product
                  </Text>
                </div>
                <a
                  href="javascript:"
                  className="mt-[18px] text-base text-blue-A700 text-center"
                >
                  <Text size="txtInterRegular16BlueA700">Read More</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsemptyPage;
