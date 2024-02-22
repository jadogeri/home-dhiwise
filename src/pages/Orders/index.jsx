import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, CheckBox, Img, Line, ReactTable, Text } from "components";
import AddProductsStackfieldtype from "components/AddProductsStackfieldtype";
import Header from "components/Header";
import OrdersRowmegaphone from "components/OrdersRowmegaphone";
import OrdersStackfieldtypeOne from "components/OrdersStackfieldtypeOne";

const OrdersPage = () => {
  const table1Data = React.useRef([
    {
      rownamesix: "#12512B",
      columnone: "May 5, 4:20 PM",
      columntwo: "Tom Anderson",
      columntwoOne: "Paid",
      columntwoTwo: "Ready",
      columntwoThree: "$49.90",
    },
    {
      rownamesix: "#12523C",
      columnone: "May 5, 4:15 PM",
      columntwo: "Jayden Walker",
      columntwoOne: "Paid",
      columntwoTwo: "Ready",
      columntwoThree: "$34.36",
    },
    {
      rownamesix: "#51232A",
      columnone: "May 5, 4:15 PM",
      columntwo: "Inez Kim",
      columntwoOne: "Paid",
      columntwoTwo: "Ready",
      columntwoThree: "$5.51",
    },
    {
      rownamesix: "#23534D",
      columnone: "May 5, 4:12 PM",
      columntwo: "Francisco Henry",
      columntwoOne: "Paid",
      columntwoTwo: "Shipped",
      columntwoThree: "$29.74",
    },
    {
      rownamesix: "#12512B",
      columnone: "May 5, 4:12 PM",
      columntwo: "Violet Phillips",
      columntwoOne: "Paid",
      columntwoTwo: "Shipped",
      columntwoThree: "$23.06",
    },
  ]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("rownamesix", {
        cell: (info) => (
          <div className="flex flex-row gap-3 items-center justify-start p-2">
            <Button
              className="flex h-5 items-center justify-center my-2 w-5"
              shape="round"
              color="blue_A700"
              size="sm"
              variant="fill"
            >
              <Img src="images/img_checkmark.svg" alt="checkmark" />
            </Button>
            <Text className="text-gray-900_01 text-sm" size="txtInterMedium14">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start min-w-[220px] p-2 sm:w-full">
            <CheckBox
              className="my-1 text-blue_gray-600 text-left text-sm"
              inputClassName="mr-[5px]"
              name="name_Six"
              id="name_Six"
              label="Order"
            ></CheckBox>
          </div>
        ),
      }),
      table1ColumnHelper.accessor("columnone", {
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
      table1ColumnHelper.accessor("columntwo", {
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
            Customer
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("columntwoOne", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center pr-3.5 py-3.5">
            <Button
              className="cursor-pointer min-w-[45px] mr-[101px] text-center text-sm"
              shape="round"
              color="green_A100"
              size="sm"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[160px] py-[13px] text-blue_gray-600 text-center text-sm"
            size="txtInterRegular14Bluegray600"
          >
            Payment status
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("columntwoTwo", {
        cell: (info) => (
          <Text
            className="py-3.5 rounded text-center text-sm text-white-A700"
            size="txtInterRegular14"
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
      table1ColumnHelper.accessor("columntwoThree", {
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
            className="min-w-[194px] py-[13px] text-blue_gray-600 text-sm"
            size="txtInterRegular14Bluegray600"
          >
            Total
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
          src="images/img_megaphone_blue_gray_600.svg"
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
      <div className="bg-gray-100 flex flex-col font-inter items-center justify-end mx-auto pr-4 pt-4 w-full">
        <div className="flex flex-col gap-4 justify-end mx-auto md:px-5 w-full">
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
                className="flex flex-col items-center justify-end mb-[839px] mt-0.5 pl-4 pr-[11px] pt-[13px] w-[90%]"
              >
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
                <OrdersRowmegaphone className="flex flex-row items-start justify-end" />
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-7 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                  size="txtInterBold24"
                >
                  Orders
                </Text>
                <Button
                  className="border border-gray-300 border-solid cursor-pointer min-w-[98px] md:ml-[0] ml-[772px] text-base text-center"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  Export
                </Button>
                <div className="bg-blue-A700 h-10 md:h-6 ml-3 md:ml-[0] p-2 relative rounded w-[14%] md:w-full">
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
              </div>
              <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-col items-start justify-start p-2 rounded-md w-full">
                <div className="md:h-10 h-[60px] ml-5 md:ml-[0] relative w-[97%] md:w-full">
                  <div className="absolute bottom-[0] flex flex-row gap-3 inset-x-[0] items-center justify-end mx-auto md:pl-10 sm:pl-5 pl-[962px] w-full">
                    <Button
                      className="border border-gray-300 border-solid flex h-10 items-center justify-center w-10"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </Button>
                    <Button
                      className="common-pointer border border-gray-300 border-solid flex h-10 items-center justify-center w-10"
                      onClick={() => navigate("/frame1116606620")}
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                    </Button>
                  </div>
                  <AddProductsStackfieldtype
                    className="absolute flex h-10 md:h-4 justify-end left-[0] pt-6 top-[0] w-[18%]"
                    arrowdownOne="images/img_arrowdown_blue_gray_400.svg"
                    filtertext="Filter"
                  />
                  <OrdersStackfieldtypeOne className="absolute flex h-10 md:h-4 justify-end left-[18%] pt-6 top-[0] w-[34%]" />
                </div>
                <div className="overflow-auto ml-5 md:ml-[0] mt-5 w-[97%]">
                  <ReactTable
                    columns={table1Columns}
                    data={table1Data.current}
                    rowClass={"border-b border-indigo-50"}
                    headerClass="bg-white-A700"
                  />
                </div>
                <Text
                  className="mb-[39px] md:ml-[0] ml-[986px] mt-[504px] text-base text-blue_gray-600 text-right"
                  size="txtInterRegular16"
                >
                  274 Results
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
