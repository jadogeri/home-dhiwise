import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, SelectBox, Text } from "components";
import ProductsRowmegaphone from "components/ProductsRowmegaphone";

const randhirKumarOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_home_blue_gray_600.svg"
          alt="home"
        />
      ),
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
        <Img
          className="h-6 mb-0.5 w-6"
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
  ];

  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-inter items-start justify-end mx-auto w-auto sm:w-full md:w-full">
        <div className="h-[1174px] pr-[1190px] md:px-5 relative w-[1440px] md:w-full">
          <div className="flex m-auto w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[250px] bg-blue_gray-900 flex h-screen md:hidden justify-start my-auto overflow-auto top-[0]"
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
                className="flex flex-col items-center justify-end mb-[839px] mt-[70px] pl-4 pr-[11px] pt-[13px] w-[90%]"
              >
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
                <ProductsRowmegaphone
                  className="flex flex-row items-start justify-end rounded"
                  badgetext="16"
                />
              </Menu>
            </Sidebar>
            <div className="bg-white-A700 flex flex-row font-rubikglitch h-[68px] md:h-auto items-center justify-start max-w-[1440px] ml-[-250px] mr-auto pb-[9.77px] pt-2.5 px-5 shadow-bs w-full z-[1]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex flex-row h-12 md:h-auto items-center justify-between w-[362px]">
                  <div className="flex flex-row gap-[9px] items-center justify-start w-[47%]">
                    <Img
                      className="h-12"
                      src="images/img_cart.svg"
                      alt="cart"
                    />
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtRubikGlitchRegular25"
                    >
                      fastcart
                    </Text>
                  </div>
                  <div className="flex flex-row font-inter gap-2 h-6 md:h-auto items-center justify-start w-[90px]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_rewind.svg"
                      alt="rewind"
                    />
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtInterRegular14"
                    >
                      Search...
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-row font-inter items-start justify-between w-[22%] md:w-full">
                  <Img
                    className="h-6 mt-1.5 w-6"
                    src="images/img_trophy.svg"
                    alt="trophy"
                  />
                  <div className="h-7 md:h-[26px] mt-0.5 pl-3 relative w-7">
                    <div className="bg-blue-A700 flex flex-col h-full items-center justify-start ml-auto px-1 rounded-[50%] w-4">
                      <Text
                        className="text-center text-white-A700 text-xs"
                        size="txtInterBold12"
                      >
                        5
                      </Text>
                    </div>
                    <Img
                      className="absolute h-6 right-[0] top-[0] w-4"
                      src="images/img_00general01.svg"
                      alt="00generalOne"
                    />
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-between w-[64%]">
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
                      name="groupThirtyEight"
                      options={randhirKumarOptionsList}
                      isSearchable={false}
                      placeholder="Randhir kumar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto pb-[1007px] right-full w-[78%]">
            <div className="flex flex-col h-[132px] md:h-auto items-center justify-end max-w-[1110px] w-full">
              <div className="flex flex-row md:gap-10 h-10 md:h-auto items-center justify-between max-w-[1110px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl w-auto"
                  size="txtInterBold24"
                >
                  Dashboard
                </Text>
                <Button
                  className="border border-gray-300 border-solid cursor-pointer flex items-center justify-center min-w-[129px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-1"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  <div className="text-base text-left">Manage</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
