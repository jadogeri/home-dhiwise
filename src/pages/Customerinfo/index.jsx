import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, ReactTable, Text } from "components";
import AddProductsColumntitletextFive from "components/AddProductsColumntitletextFive";
import AddProductsColumntitletextOne from "components/AddProductsColumntitletextOne";
import CustomerInfoRowsignal from "components/CustomerInfoRowsignal";
import Header from "components/Header";
import ProductsRowmegaphone from "components/ProductsRowmegaphone";

const CustomerinfoPage = () => {
  const table3Data = React.useRef([
    {
      nameSeven: "#23534D",
      columnone: "May 25, 3:12 PM",
      columntwo: "Pending",
      columntwoOne: "$29.74",
    },
    {
      nameSeven: "#12512B",
      columnone: "May 10, 2:00 PM",
      columntwo: "Completed",
      columntwoOne: "$23.06",
    },
    {
      nameSeven: "#23534D",
      columnone: "April 18, 8:00 AM",
      columntwo: "Completed",
      columntwoOne: "$29.74",
    },
    {
      nameSeven: "#76543E",
      columnone: "April 12, 8:00 AM",
      columntwo: "Completed",
      columntwoOne: "$23.06",
    },
    {
      nameSeven: "#51323C",
      columnone: "April 10, 4:12 PM",
      columntwo: "Completed",
      columntwoOne: "$23.06",
    },
  ]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [
      table3ColumnHelper.accessor("nameSeven", {
        cell: (info) => (
          <Text
            className="pl-2 py-[17px] text-gray-900_01 text-sm"
            size="txtInterMedium14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[188px] pl-2 py-[13px] text-blue_gray-600 text-sm"
            size="txtInterRegular14Bluegray600"
          >
            Order
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("columnone", {
        cell: (info) => (
          <Text
            className="py-[17px] text-gray-900_01 text-sm"
            size="txtInterRegular14Gray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[160px] py-[13px] text-blue_gray-600 text-sm"
            size="txtInterRegular14Bluegray600"
          >
            Date
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("columntwo", {
        cell: (info) => (
          <Text
            className="py-3.5 rounded text-blue_gray-600 text-center text-sm"
            size="txtInterRegular14Bluegray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[160px] py-[13px] text-blue_gray-600 text-center text-sm"
            size="txtInterRegular14Bluegray600"
          >
            Order Status
          </Text>
        ),
      }),
      table3ColumnHelper.accessor("columntwoOne", {
        cell: (info) => (
          <Text
            className="py-[17px] text-gray-900_01 text-sm"
            size="txtInterRegular14Gray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[166px] py-[13px] text-blue_gray-600 text-sm"
            size="txtInterRegular14Bluegray600"
          >
            Price
          </Text>
        ),
      }),
    ];
  }, []);

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

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-inter items-center justify-end mx-auto pr-4 pt-4 w-full">
        <div className="flex flex-col gap-4 justify-start mx-auto md:px-5 w-full">
          <Header className="bg-black-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[72px] shadow-bs w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-3 w-full">
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
                className="flex flex-col items-center justify-end mb-[768px] mt-0.5 pl-4 pr-[11px] pt-[13px] w-[90%]"
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
            <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[66%] md:w-full">
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
                    className="mt-0.5 text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                    size="txtInterBold24"
                  >
                    Customer Information
                  </Text>
                  <div className="bg-white-A700 flex flex-col items-center justify-start mt-[33px] p-7 sm:px-5 rounded-md shadow-bs w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                        <div className="flex sm:flex-1 flex-row gap-[18px] items-start justify-between w-[49%] sm:w-full">
                          <Text
                            className="bg-indigo-200 flex h-[72px] items-center justify-center mb-5 sm:px-5 rounded-[50%] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-[72px]"
                            size="txtInterBold32WhiteA700"
                          >
                            R
                          </Text>
                          <div className="flex flex-col gap-2.5 items-start justify-start">
                            <Text
                              className="text-base text-gray-900_01"
                              size="txtInterBold16"
                            >
                              Randhir Kumar
                            </Text>
                            <Text
                              className="leading-[20.00px] text-blue_gray-600 text-sm"
                              size="txtInterRegular14Bluegray600"
                            >
                              <>
                                India
                                <br />5 Orders
                                <br />
                                Customer for 2 years
                              </>
                            </Text>
                          </div>
                        </div>
                        <CustomerInfoRowsignal className="flex sm:flex-1 flex-row items-center justify-evenly sm:mt-0 mt-3 w-[18%] sm:w-full" />
                      </div>
                      <div className="flex flex-col gap-[30px] items-start justify-start mt-10 w-full">
                        <Line className="bg-indigo-50 h-px w-full" />
                        <Text
                          className="text-base text-gray-900_01"
                          size="txtInterBold16"
                        >
                          Customer Notes
                        </Text>
                      </div>
                      <AddProductsColumntitletextOne
                        className="flex flex-col items-start justify-start mt-[25px] w-full"
                        titletext="Notes"
                      />
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-[17px] items-start justify-end mt-[30px] p-5 rounded-md shadow-bs w-full">
                    <Text
                      className="ml-2 md:ml-[0] mt-[7px] text-base text-gray-900_01"
                      size="txtInterBold16"
                    >
                      Customer Orders
                    </Text>
                    <div className="overflow-auto ml-2 md:ml-[0] w-[98%]">
                      <ReactTable
                        columns={table3Columns}
                        data={table3Data.current}
                        rowClass={"border-b border-indigo-50"}
                        headerClass="bg-white-A700"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-7 items-end justify-start md:mt-0 mt-[18px] w-[32%] md:w-full">
                  <div className="flex flex-row gap-3 items-center justify-end w-[57%] md:w-full">
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
                  <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col items-center justify-end p-5 rounded-md shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start mt-[9px] w-[95%] md:w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-base text-gray-900_01"
                            size="txtInterBold16"
                          >
                            Overview
                          </Text>
                          <Text
                            className="text-base text-blue-A700 text-right"
                            size="txtInterRegular16BlueA700"
                          >
                            Edit
                          </Text>
                        </div>
                        <Text
                          className="mt-[27px] text-indigo-200 text-sm"
                          size="txtInterRegular14Indigo200"
                        >
                          Address
                        </Text>
                        <Text
                          className="leading-[20.00px] mt-2 text-blue_gray-600 text-sm"
                          size="txtInterRegular14Bluegray600"
                        >
                          <>
                            Panapur langa
                            <br />
                            Hajipur,vaishali
                            <br />
                            844124
                            <br />
                            India
                          </>
                        </Text>
                        <Text
                          className="mt-[25px] text-indigo-200 text-sm"
                          size="txtInterRegular14Indigo200"
                        >
                          Email Address
                        </Text>
                        <Text
                          className="mt-2 text-blue_gray-600 text-sm"
                          size="txtInterRegular14Bluegray600"
                        >
                          randhirppl@gmail.com
                        </Text>
                        <Text
                          className="mt-[25px] text-indigo-200 text-sm"
                          size="txtInterRegular14Indigo200"
                        >
                          Phone
                        </Text>
                        <Text
                          className="mt-1.5 text-blue_gray-600 text-sm"
                          size="txtInterRegular14Bluegray600"
                        >
                          +91 8804789764
                        </Text>
                        <div className="flex flex-col gap-[21px] items-start justify-start mt-[29px] w-full">
                          <Line className="bg-indigo-50 h-px w-full" />
                          <Text
                            className="text-red-A400 text-sm"
                            size="txtInterRegular14RedA400"
                          >
                            Delete Customer
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-end p-7 sm:px-5 rounded-md shadow-bs w-full">
                      <div className="flex flex-col items-start justify-start mt-[3px] w-full">
                        <Text
                          className="text-base text-gray-900_01"
                          size="txtInterBold16"
                        >
                          Tags
                        </Text>
                        <AddProductsColumntitletextFive
                          className="flex flex-col items-start justify-start mt-6 w-full"
                          titletext="Add Tags"
                        />
                        <div className="flex flex-row gap-2 items-center justify-start mt-5 w-[82%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-[58%]">
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[138px] pl-3 pr-2"
                              rightIcon={
                                <Img
                                  className="h-6 ml-1"
                                  src="images/img_close.svg"
                                  alt="close"
                                />
                              }
                              shape="round"
                              color="indigo_50"
                              size="xs"
                              variant="fill"
                            >
                              <div className="text-left text-sm">
                                Vip Customer
                              </div>
                            </Button>
                          </div>
                          <div className="flex flex-col items-center justify-start w-2/5">
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[95px] pl-3 pr-2"
                              rightIcon={
                                <Img
                                  className="h-6 ml-1"
                                  src="images/img_close.svg"
                                  alt="close"
                                />
                              }
                              shape="round"
                              color="indigo_50"
                              size="xs"
                              variant="fill"
                            >
                              <div className="text-left text-sm">Europe</div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default CustomerinfoPage;
