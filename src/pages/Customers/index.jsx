import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  ReactTable,
  SelectBox,
  Text,
} from "components";
import Header from "components/Header";
import ProductsRowmegaphone from "components/ProductsRowmegaphone";

const dropdown01RegOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CustomersPage = () => {
  const table2Data = React.useRef([
    {
      rownamefive: "Rakesh Mishra",
      columntwo: "Sawaynchester",
      columntwoOne: "5",
      columntwoTwo: "$96.14",
    },
    {
      rownamefive: "Lakshman singh",
      columntwo: "Kaydenville",
      columntwoOne: "12",
      columntwoTwo: "$22.18",
    },
    {
      rownamefive: "Dinanath sah",
      columntwo: "East Freidaton",
      columntwoOne: "6",
      columntwoTwo: "$59.64",
    },
  ]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("rownamefive", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start p-2">
            <Img
              className="h-5 w-5"
              src="images/img_checkmark_white_a700.svg"
              alt="checkmark"
            />
            <Text
              className="bg-indigo-200 flex h-12 items-center justify-center ml-3 my-1 rounded-[50%] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-12"
              size="txtInterBold24WhiteA700"
            >
              R
            </Text>
            <Text
              className="ml-4 text-gray-900_01 text-sm"
              size="txtInterMedium14"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start min-w-[530px] p-2 sm:w-full">
            <CheckBox
              className="my-1 text-blue_gray-600 text-left text-sm"
              inputClassName="mr-[5px]"
              name="name_Five"
              id="name_Five"
              label="Name"
            ></CheckBox>
          </div>
        ),
      }),
      table2ColumnHelper.accessor("columntwo", {
        cell: (info) => (
          <Text
            className="py-[27px] text-gray-900_01 text-sm"
            size="txtInterRegular14Gray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[200px] py-[13px] text-blue_gray-600 text-sm"
            size="txtInterRegular14Bluegray600"
          >
            Location
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("columntwoOne", {
        cell: (info) => (
          <Text
            className="py-[27px] text-gray-900_01 text-sm"
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
            Orders
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("columntwoTwo", {
        cell: (info) => (
          <Text
            className="py-[27px] text-gray-900_01 text-sm"
            size="txtInterRegular14Gray90001"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[164px] py-[13px] text-blue_gray-600 text-sm"
            size="txtInterRegular14Bluegray600"
          >
            Spent
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
      label: "Add  To Batch",
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
                    padding: "10px 10px 10px 16px",
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
                  className="flex flex-row gap-4 items-center justify-start rounded"
                  orderstext="Add  To Batch"
                />
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-7 items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                  size="txtInterBold24"
                >
                  Customers
                </Text>
                <div className="flex sm:flex-1 flex-row gap-3 items-center justify-between w-[26%] sm:w-full">
                  <Button
                    className="border border-gray-300 border-solid cursor-pointer min-w-[98px] text-base text-center"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Export
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[178px]"
                    onClick={() => navigate("/addcustomer")}
                    leftIcon={
                      <Img
                        className="h-6 mr-1"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    }
                    shape="round"
                    color="blue_A700"
                    size="md"
                    variant="fill"
                  >
                    <div className="text-base text-left">Add Customer</div>
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-3 rounded-md shadow-bs w-full">
                <div className="flex flex-col items-start justify-start ml-4 md:ml-[0] pr-4 pt-4 w-[98%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-600 w-auto"
                        size="txtInterRegular16"
                      >
                        All Customers
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-600 w-auto"
                        size="txtInterRegular16"
                      >
                        New Customers
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-600 w-auto"
                        size="txtInterRegular16"
                      >
                        From Europe
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-blue_gray-600 w-auto"
                        size="txtInterRegular16"
                      >
                        Returning Customers
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end ml-4 md:ml-[0] mt-5 pl-[3px] w-[98%] md:w-full">
                  <SelectBox
                    className="border border-gray-300_01 border-solid text-base text-left w-[18%] md:w-full"
                    placeholderClassName="text-indigo-200"
                    indicator={
                      <Img
                        className="h-6 mr-[0] w-6"
                        src="images/img_arrowdown_blue_gray_400.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="03dropdown01reg"
                    options={dropdown01RegOptionsList}
                    isSearchable={false}
                    placeholder="Filter"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                  <Input
                    name="02input06search"
                    placeholder="Search..."
                    className="p-0 placeholder:text-indigo-200 text-base text-left w-full"
                    wrapClassName="border border-gray-300_01 border-solid flex ml-4 md:ml-[0] rounded w-[34%] md:w-full"
                    prefix={
                      <Img
                        className="h-6 mr-2 my-auto"
                        src="images/img_rewind_blue_gray_400.svg"
                        alt="rewind"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  ></Input>
                  <Button
                    className="border border-gray-300 border-solid flex h-10 items-center justify-center md:ml-[0] ml-[413px] w-10"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <Img className="h-6" src="images/img_edit.svg" alt="edit" />
                  </Button>
                  <Button
                    className="border border-gray-300 border-solid flex h-10 items-center justify-center ml-3 md:ml-[0] w-10"
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
                <div className="overflow-auto ml-4 md:ml-[0] mt-5 w-[98%]">
                  <ReactTable
                    columns={table2Columns}
                    data={table2Data.current}
                    rowClass={"border-b border-indigo-50"}
                    headerClass="bg-white-A700"
                  />
                </div>
                <Text
                  className="mb-[35px] md:ml-[0] ml-[983px] mt-[540px] text-base text-blue_gray-600 text-right"
                  size="txtInterRegular16"
                >
                  154 Results
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersPage;
