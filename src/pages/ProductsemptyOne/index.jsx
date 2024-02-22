import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";
import OrdersRowmegaphone from "components/OrdersRowmegaphone";

const ProductsemptyOnePage = () => {
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
          src="images/img_megaphone_blue_gray_600.svg"
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
      <div className="bg-gray-100 flex font-inter h-[800px] justify-end mx-auto relative w-full">
        <div className="flex flex-col h-full items-end justify-start mb-10 mt-auto mx-auto pl-[290px] md:px-5 w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[120px] md:px-10 sm:px-5 rounded-md shadow-bs w-full">
            <div className="flex flex-col gap-[25px] items-center justify-start w-[17%] md:w-full">
              <Img
                className="h-[140px] w-[140px]"
                src="images/img_illustration.svg"
                alt="illustration"
              />
              <Text
                className="text-center text-gray-900_01 text-xl"
                size="txtInterBold20"
              >
                No Orders Yet
              </Text>
            </div>
            <Text
              className="leading-[24.00px] mt-[13px] text-base text-blue_gray-600 text-center"
              size="txtInterRegular16"
            >
              <>
                All the upcoming orders from your store will be visible in this
                page.
                <br />
                You can add orders by yourself if you sell offline.{" "}
              </>
            </Text>
            <div className="bg-blue-A700 h-10 md:h-12 mt-6 p-2 relative rounded w-[17%]">
              <Img
                className="absolute h-6 inset-y-[0] left-[14%] my-auto"
                src="images/img_group.svg"
                alt="group"
              />
              <Text
                className="absolute h-max inset-y-[0] my-auto right-[14%] text-base text-white-A700"
                size="txtInterRegular16WhiteA700"
              >
                Add Order
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
        <div className="absolute flex flex-col gap-4 h-full inset-[0] justify-center m-auto pr-4 pt-4 w-full">
          <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[72px] mr-3 md:px-5 shadow-bs w-full">
            <div className="h-[29px] md:mt-0 mt-[5px] w-[9%]"></div>
            <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[135px] md:mt-0 my-[9px] md:pl-10 sm:pl-5 pl-[47px] w-[5%] md:w-full">
              <Text
                className="text-sm text-white-A700"
                size="txtInterRegular14"
              >
                Search...
              </Text>
            </div>
            <Img
              className="h-6 md:ml-[0] ml-[737px] md:mt-0 my-1.5 w-6"
              src="images/img_trophy.svg"
              alt="trophy"
            />
            <div className="h-7 md:h-[30px] mb-1.5 ml-5 md:ml-[0] md:mt-0 mt-0.5 relative w-7">
              <Img
                className="absolute bottom-[0] h-6 left-[0] w-6"
                src="images/img_00general01_gray_50.svg"
                alt="00generalOne"
              />
              <Text
                className="absolute bg-blue-A700 flex h-4 items-center justify-center right-[0] rounded-[50%] text-center text-white-A700 text-xs top-[0] w-4"
                size="txtInterBold12"
              >
                5
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row items-center justify-between ml-9 md:ml-[0] w-[14%] md:w-full">
              <Text
                className="bg-green-A400 flex h-9 items-center justify-center rounded-[50%] text-center text-lg text-white-A700 w-9"
                size="txtInterBold18"
              >
                R
              </Text>
              <Text
                className="text-sm text-white-A700"
                size="txtInterRegular14"
              >
                Randhir kumar
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_gray_50.svg"
                alt="arrowdown"
              />
            </div>
          </header>
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[371px] bg-blue_gray-900 flex h-screen md:hidden justify-start mr-[1053px] overflow-auto md:px-5 top-[0]"
          >
            <Menu
              menuItemStyles={{
                button: {
                  padding: "9px 9px 9px 31px",
                  gap: "16px",
                  color: "#ffffff",
                  fontSize: "14px",
                  borderRadius: "4px",
                  [`&:hover, &.ps-active`]: {
                    color: "#5a607f",
                    fontWeight: "400 !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-end mt-0.5 pt-[13px] w-full"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
              <OrdersRowmegaphone className="bg-white-A700 flex flex-row items-start justify-start sm:pl-5 rounded" />
            </Menu>
            {!collapsed && (
              <div className="flex flex-col items-end justify-end mb-[666px] pl-0.5 py-0.5 w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                  size="txtInterBold24"
                >
                  Orders
                </Text>
              </div>
            )}
          </Sidebar>
        </div>
      </div>
    </>
  );
};

export default ProductsemptyOnePage;
