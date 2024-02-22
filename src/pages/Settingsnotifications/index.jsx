import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, SelectBox, Switch, Text } from "components";
import ProductsRowmegaphone from "components/ProductsRowmegaphone";
import SettingsNotificationsTabs from "components/SettingsNotificationsTabs";

const randhirKumarOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SettingsnotificationsPage = () => {
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
                  name="groupFiftyFour"
                  options={randhirKumarOptionsList}
                  isSearchable={false}
                  placeholder="Randhir kumar"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[250px] bg-blue_gray-900 flex h-screen md:hidden justify-start overflow-auto top-[0]"
            >
              <Menu
                menuItemStyles={{
                  button: {
                    padding: "8px 8px 8px 15px",
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
                className="flex flex-col items-center justify-start mb-[164px] mt-0.5 pl-4 pr-[11px] pt-[13px] w-[90%]"
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
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start py-2.5 rounded w-full">
                  <Img
                    className="h-6"
                    src="images/img_trophy_white_a700.svg"
                    alt="trophy_One"
                  />
                  <Text
                    className="text-sm text-white-A700"
                    size="txtInterRegular14"
                  >
                    Inbox
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-center justify-start mt-7 w-full">
                  <Text
                    className="text-white-A700 text-xs"
                    size="txtInterRegular12"
                  >
                    Other Information
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <MenuItem
                      icon={
                        <Img
                          className="h-6 mb-0.5 w-6"
                          src="images/img_profile_white_a700.svg"
                          alt="profile"
                        />
                      }
                    >
                      <Text>Knowledge Base</Text>
                    </MenuItem>
                    <MenuItem
                      icon={
                        <Img
                          className="h-6 mb-0.5 w-6"
                          src="images/img_home_white_a700.svg"
                          alt="home_One"
                        />
                      }
                    >
                      <Text>Product Updates</Text>
                    </MenuItem>
                  </div>
                </div>
                <div className="flex flex-col gap-[11px] items-center justify-end mt-[29px] w-full">
                  <Text
                    className="text-white-A700 text-xs"
                    size="txtInterRegular12"
                  >
                    Settings
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <MenuItem
                      icon={
                        <Img
                          className="h-6 mb-0.5 w-6"
                          src="images/img_lock.svg"
                          alt="lock"
                        />
                      }
                    >
                      <Text>Personal Settings</Text>
                    </MenuItem>
                    <MenuItem
                      icon={
                        <Img
                          className="h-6 mb-0.5 w-6"
                          src="images/img_search_white_a700.svg"
                          alt="search_One"
                        />
                      }
                    >
                      <Text>Global Settings</Text>
                    </MenuItem>
                  </div>
                </div>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start w-full">
                <div className="flex flex-row md:gap-10 items-end justify-between w-full">
                  <Text
                    className="mb-0.5 mt-[7px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                    size="txtInterBold24"
                  >
                    Settings
                  </Text>
                  <div className="flex flex-row gap-3 items-center justify-between w-[18%]">
                    <Button
                      className="border border-gray-300 border-solid cursor-pointer min-w-[101px] text-base text-center"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="cursor-pointer min-w-[86px] text-base text-center"
                      shape="round"
                      color="blue_A700"
                      size="md"
                      variant="fill"
                    >
                      Save
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-3 rounded-md shadow-bs w-full">
                  <div className="flex flex-col items-center justify-start mb-7 w-[98%] md:w-full">
                    <SettingsNotificationsTabs className="h-14 pt-4 relative w-full" />
                    <div className="flex flex-row md:gap-10 items-center justify-between mt-[29px] w-full">
                      <div className="flex flex-col gap-2 items-start justify-start">
                        <Text
                          className="text-base text-gray-900_01"
                          size="txtInterBold16"
                        >
                          Personalized Offers
                        </Text>
                        <Text
                          className="text-blue_gray-600 text-sm"
                          size="txtInterRegular14Bluegray600"
                        >
                          Receive offers made special for you
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[5%]">
                        <Switch
                          onColor="#1e5eff"
                          offColor="#d9e3ff"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={true}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <Line className="bg-indigo-50 h-px mt-6 w-full" />
                    <div className="flex flex-row md:gap-10 items-center justify-between mt-[25px] w-full">
                      <div className="flex flex-col gap-2 items-start justify-start">
                        <Text
                          className="text-base text-gray-900_01"
                          size="txtInterBold16"
                        >
                          Online Webinars
                        </Text>
                        <Text
                          className="text-blue_gray-600 text-sm"
                          size="txtInterRegular14Bluegray600"
                        >
                          Get notified about upcoming webinars
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[5%]">
                        <Switch
                          onColor="#1e5eff"
                          offColor="#d9e3ff"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={true}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <Line className="bg-indigo-50 h-px mt-6 w-full" />
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[26px] w-full">
                      <div className="flex flex-col gap-2 items-start justify-start">
                        <Text
                          className="text-base text-gray-900_01"
                          size="txtInterBold16"
                        >
                          New Features
                        </Text>
                        <Text
                          className="text-blue_gray-600 text-sm"
                          size="txtInterRegular14Bluegray600"
                        >
                          Updates about new features and product releases
                        </Text>
                      </div>
                      <div className="flex sm:flex-1 flex-col items-center justify-start w-[5%] sm:w-full">
                        <Switch
                          onColor="#1e5eff"
                          offColor="#d9e3ff"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={true}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <Line className="bg-indigo-50 h-px mt-6 w-full" />
                    <div className="flex flex-row md:gap-10 items-center justify-between mt-[27px] w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <Text
                          className="text-base text-gray-900_01"
                          size="txtInterBold16"
                        >
                          Security and Billing
                        </Text>
                        <Text
                          className="text-blue_gray-600 text-sm"
                          size="txtInterRegular14Bluegray600"
                        >
                          Account security and notifications about billing
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[5%]">
                        <Switch
                          onColor="#1e5eff"
                          offColor="#d9e3ff"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={false}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <Line className="bg-indigo-50 h-px mt-6 w-full" />
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[27px] w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <Text
                          className="text-base text-gray-900_01"
                          size="txtInterBold16"
                        >
                          Marketing
                        </Text>
                        <Text
                          className="text-blue_gray-600 text-sm"
                          size="txtInterRegular14Bluegray600"
                        >
                          Receive marketing newsletters about our new products.
                        </Text>
                      </div>
                      <div className="flex sm:flex-1 flex-col items-center justify-start w-[5%] sm:w-full">
                        <Switch
                          onColor="#1e5eff"
                          offColor="#d9e3ff"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={false}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-7 items-end justify-start w-full">
                <Line className="bg-gray-300 h-px w-full" />
                <div className="flex flex-row gap-3 items-center justify-end w-[18%] md:w-full">
                  <Button
                    className="border border-gray-300 border-solid cursor-pointer min-w-[101px] text-base text-center"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="cursor-pointer min-w-[86px] text-base text-center"
                    shape="round"
                    color="blue_A700"
                    size="md"
                    variant="fill"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsnotificationsPage;
