import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import AddProductsColumntitletextFive from "components/AddProductsColumntitletextFive";
import AddProductsColumntitletextOne from "components/AddProductsColumntitletextOne";
import AddProductsStackfieldtype from "components/AddProductsStackfieldtype";
import ProductsRowmegaphone from "components/ProductsRowmegaphone";

const randhirKumarOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const chooseOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AddcustomerPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

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
          src="images/img_settings_blue_gray_400.svg"
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
  const addProductsColumntitletextFivePropList = [
    { titletext: "First Name" },
    { titletext: "Last Name" },
    { titletext: "Email Address" },
    { titletext: "Phone Number" },
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
                  name="groupEightySeven"
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
                className="flex flex-col items-center justify-end mb-[901px] mt-0.5 pl-4 pr-[11px] pt-[13px] w-[90%]"
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
            <div className="flex flex-1 flex-col gap-7 items-center justify-start w-full">
              <div className="flex flex-row md:gap-10 items-end justify-between w-full">
                <div className="flex flex-col items-start justify-start mb-1 w-[16%]">
                  <Button
                    className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[50px]"
                    onClick={() => navigate("/customers")}
                    leftIcon={
                      <div className="mr-1 bg-blue_gray-400 my-[3px]">
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      </div>
                    }
                    size="xs"
                  >
                    <div className="text-blue_gray-600 text-left text-sm">
                      Back
                    </div>
                  </Button>
                  <Text
                    className="mt-[3px] text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                    size="txtInterBold24"
                  >
                    Add Customer
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-between mt-[18px] w-[18%]">
                  <Button
                    className="common-pointer border border-gray-300 border-solid cursor-pointer min-w-[101px] text-base text-center"
                    onClick={() => navigate("/customers")}
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer min-w-[86px] text-base text-center"
                    onClick={() => navigate("/customers")}
                    shape="round"
                    color="blue_A700"
                    size="md"
                    variant="fill"
                  >
                    Save
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-7 sm:px-5 rounded-md shadow-bs w-full">
                <div className="flex flex-col items-start justify-start mb-3 w-full">
                  <Text
                    className="text-base text-gray-900_01"
                    size="txtInterBold16"
                  >
                    Customer Information
                  </Text>
                  <Text
                    className="mt-2 text-blue_gray-600 text-sm"
                    size="txtInterRegular14Bluegray600"
                  >
                    Most important information about the customer
                  </Text>
                  <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-6 w-full">
                    {addProductsColumntitletextFivePropList.map(
                      (props, index) => (
                        <React.Fragment
                          key={`AddProductsColumntitletextFive${index}`}
                        >
                          <AddProductsColumntitletextFive
                            className="flex flex-1 flex-col items-start justify-start w-full"
                            {...props}
                          />
                        </React.Fragment>
                      ),
                    )}
                  </div>
                  <Line className="bg-indigo-50 h-px mt-10 w-full" />
                  <Text
                    className="mt-[30px] text-base text-gray-900_01"
                    size="txtInterBold16"
                  >
                    Customer Address
                  </Text>
                  <Text
                    className="mt-2 text-blue_gray-600 text-sm"
                    size="txtInterRegular14Bluegray600"
                  >
                    Shipping address information
                  </Text>
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-6 w-full">
                    <AddProductsColumntitletextFive
                      className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full"
                      titletext="Address"
                    />
                    <AddProductsColumntitletextFive
                      className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full"
                      titletext="Apartment"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row gap-6 items-center justify-between mt-6 w-full">
                    <AddProductsColumntitletextFive
                      className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full"
                      titletext="City"
                    />
                    <AddProductsStackfieldtype className="flex md:flex-1 flex-col items-start justify-start w-[24%] md:w-full" />
                    <AddProductsColumntitletextFive
                      className="flex md:flex-1 flex-col items-start justify-start w-[24%] md:w-full"
                      titletext="Postal Code"
                    />
                  </div>
                  <AddProductsColumntitletextFive
                    className="flex flex-col items-start justify-start mt-6 w-[49%] md:w-full"
                    titletext="Phone"
                  />
                  <Line className="bg-indigo-50 h-px mt-10 w-full" />
                  <Text
                    className="mt-[30px] text-base text-gray-900_01"
                    size="txtInterBold16"
                  >
                    Customer Notes
                  </Text>
                  <Text
                    className="mt-[7px] text-blue_gray-600 text-sm"
                    size="txtInterRegular14Bluegray600"
                  >
                    Add notes about customer
                  </Text>
                  <AddProductsColumntitletextOne
                    className="flex flex-col items-start justify-start mt-[25px] w-full"
                    titletext="Notes"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-7 items-end justify-start w-full">
                <Line className="bg-gray-300 h-px w-full" />
                <div className="flex flex-row gap-3 items-center justify-end w-[18%] md:w-full">
                  <Button
                    className="common-pointer border border-gray-300 border-solid cursor-pointer min-w-[101px] text-base text-center"
                    onClick={() => navigate("/customers")}
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Cancel
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer min-w-[86px] text-base text-center"
                    onClick={() => navigate("/customers")}
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

export default AddcustomerPage;
