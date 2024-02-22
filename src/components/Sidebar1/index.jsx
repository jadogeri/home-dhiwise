import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar1 = (props) => {
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
          src="images/img_folder_blue_gray_400.svg"
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
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <Menu
          menuItemStyles={{
            button: {
              padding: "9px 9px 9px 15px",
              gap: "16px",
              color: "#ffffff",
              fontSize: "14px",
              fontFamily: "Inter",
              borderRadius: "4px",
              [`&:hover, &.ps-active`]: {
                color: "#5a607f",
                fontWeight: "400 !important",
                backgroundColor: "#ffffffff !important",
              },
            },
          }}
          className="flex flex-col items-center justify-end mb-[421px] mt-0.5 pl-4 pr-[11px] pt-[13px] w-[90%]"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
