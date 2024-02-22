import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Input, SelectBox, Text } from "components";
import OrdersStackfieldtypeOne from "components/OrdersStackfieldtypeOne";
import ProductsRowmegaphone from "components/ProductsRowmegaphone";

const randhirKumarOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ArticlePage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

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
        <Text className="bg-gray-900 font-bold h-4 justify-center my-1 px-1.5 rounded-lg text-center text-white-A700 text-xs w-[26px]">
          16
        </Text>
      ),
      href: "/orders",
      active: window.location.pathname === "/orders",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_television.svg"
          alt="television"
        />
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
        <Img className="h-6 w-6" src="images/img_settings.svg" alt="settings" />
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
          className="h-6 mb-0.5 w-6"
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
                  name="groupSeventyFive"
                  options={randhirKumarOptionsList}
                  isSearchable={false}
                  placeholder="Randhir kumar"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter gap-[25px] items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[250px] bg-blue_gray-900 flex h-screen md:hidden justify-start overflow-auto top-[0]"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "9px 9px 9px 15px",
                    gap: "16px",
                    color: "#ffffff",
                    fontSize: "14px",
                    borderRadius: "4px",
                    [`&:hover, &.ps-active`]: {
                      color: "#5a607f",
                      fontWeight: "400 !important",
                      backgroundColor: "#ffffffff !important",
                    },
                  },
                }}
                className="flex flex-col items-center justify-start mb-[1094px] mt-0.5 pl-4 pr-[11px] pt-[13px] w-[90%]"
              >
                <div className="flex flex-col gap-[-0.07px] items-center justify-start w-full">
                  {sideBarMenu?.map((menu, i) => (
                    <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                  <ProductsRowmegaphone
                    className="flex flex-row items-center justify-end rounded"
                    badgetext="16"
                  />
                </div>
                <div className="flex flex-col items-center justify-end mt-[100px] w-full">
                  <MenuItem
                    icon={
                      <Img
                        className="h-6 mb-0.5 w-6"
                        src="images/img_profile.svg"
                        alt="profile"
                      />
                    }
                  >
                    <Text>Knowledge Base</Text>
                  </MenuItem>
                </div>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col md:gap-10 gap-[258px] items-center justify-start md:mt-0 mt-[30px] w-full">
              <div className="flex flex-col gap-7 items-start justify-start w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                  <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start mb-0.5 w-[17%] md:w-full">
                    <div className="flex flex-row items-center justify-start w-[28%] md:w-full">
                      <Img
                        className="h-2.5"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                      <Text
                        className="ml-1 text-blue_gray-600 text-sm"
                        size="txtInterRegular14Bluegray600"
                      >
                        Back
                      </Text>
                    </div>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                      size="txtInterBold24"
                    >
                      Getting Started
                    </Text>
                  </div>
                  <OrdersStackfieldtypeOne className="flex h-10 md:h-4 justify-end md:mt-0 mt-[18px] pt-6 relative w-3/4 md:w-full" />
                </div>
                <div className="flex flex-col gap-2 items-center justify-start w-[23%] md:w-full">
                  <div className="flex flex-col h-11 md:h-auto items-center justify-start px-5 rounded-[5px] w-[255px]">
                    <Text
                      className="text-gray-900_02 text-sm w-auto"
                      size="txtInterBold14"
                    >
                      Introduction to Product
                    </Text>
                  </div>
                  <div className="flex flex-col h-11 md:h-auto items-center justify-start px-5 rounded-[5px] w-[255px]">
                    <Text
                      className="text-gray-900_02 text-sm w-auto"
                      size="txtInterBold14"
                    >
                      Tutorials for Beginners
                    </Text>
                  </div>
                  <div className="flex flex-col h-11 md:h-auto items-center justify-start px-5 rounded-[5px] w-[255px]">
                    <Text
                      className="text-gray-900_02 text-sm w-auto"
                      size="txtInterBold14"
                    >
                      Moving to Bolt System
                    </Text>
                  </div>
                  <Input
                    name="frame1116606591"
                    placeholder="Accessibility"
                    className="font-bold md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-left text-sm w-full"
                    wrapClassName="w-full"
                    shape="round"
                    color="blue_gray_900"
                    size="md"
                    variant="fill"
                  ></Input>
                  <div className="flex flex-col h-11 md:h-auto items-center justify-start px-5 rounded-[5px] w-[255px]">
                    <Text
                      className="text-gray-900_02 text-sm w-auto"
                      size="txtInterBold14"
                    >
                      Content Management
                    </Text>
                  </div>
                  <div className="flex flex-col h-11 md:h-auto items-center justify-start px-5 rounded-[5px] w-[255px]">
                    <Text
                      className="text-gray-900_02 text-sm w-auto"
                      size="txtInterBold14"
                    >
                      Generating Reports
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="md:text-5xl text-[120px] text-black-900_01"
                size="txtInterBold120"
              >
                UNER PROCESSING
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
