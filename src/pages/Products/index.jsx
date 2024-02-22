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
import ProductsRow02input06search from "components/ProductsRow02input06search";
import ProductsRowmegaphone from "components/ProductsRowmegaphone";

const randhirKumarOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dropdown01RegOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ProductsPage = () => {
  const tableData = React.useRef([
    {
      rownamesix: "Hoodies",
      columntwo: "96 in stock",
      columntwoOne: "Black",
      columntwoTwo: "$49.90",
      columntwoThree: "5.0 (32 Votes)",
    },
    {
      rownamesix: "T-Shirt",
      columntwo: "56 in stock",
      columntwoOne: "White",
      columntwoTwo: "$34.90",
      columntwoThree: "4.8 (24 Votes)",
    },
    {
      rownamesix: "T-Shirt",
      columntwo: "78 in stock",
      columntwoOne: "White",
      columntwoTwo: "$40.90",
      columntwoThree: "5.0 (54 Votes)",
    },
  ]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rownamesix", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-start p-2">
            <Button
              className="flex h-5 items-center justify-center my-[18px] w-5"
              shape="round"
              color="blue_A700"
              size="sm"
              variant="fill"
            >
              <Img src="images/img_checkmark.svg" alt="checkmark" />
            </Button>
            <div className="bg-blue-50 flex flex-col h-12 items-center justify-start ml-3 my-1 rounded w-12">
              <Img
                className="h-12 md:h-auto object-cover rounded w-12"
                src="images/img_bitmap.png"
                alt="bitmap"
              />
            </div>
            <div className="flex flex-col items-start justify-start ml-4">
              <Text
                className="text-gray-900_01 text-sm"
                size="txtInterMedium14"
              >
                Men Grey Hoodie
              </Text>
              <Text
                className="text-blue_gray-600 text-sm"
                size="txtInterRegular14Bluegray600"
              >
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex sm:flex-1 flex-row items-center justify-start min-w-[366px] p-2 sm:w-full">
            <CheckBox
              className="my-1 text-blue_gray-600 text-left text-sm"
              inputClassName="mr-[5px]"
              name="name_Six"
              id="name_Six"
              label="Product"
            ></CheckBox>
          </div>
        ),
      }),
      tableColumnHelper.accessor("columntwo", {
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
            Inventory
          </Text>
        ),
      }),
      tableColumnHelper.accessor("columntwoOne", {
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
            Color
          </Text>
        ),
      }),
      tableColumnHelper.accessor("columntwoTwo", {
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
            Price
          </Text>
        ),
      }),
      tableColumnHelper.accessor("columntwoThree", {
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
            className="min-w-[208px] py-[13px] text-blue_gray-600 text-sm"
            size="txtInterRegular14Bluegray600"
          >
            Rating
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
                  name="groupSeventy"
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
                className="flex flex-col items-center justify-end mb-[825px] mt-0.5 pl-4 pr-[11px] pt-[13px] w-[90%]"
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
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl"
                  size="txtInterBold24"
                >
                  Products
                </Text>
                <div className="flex sm:flex-1 flex-row gap-3 items-center justify-between w-1/4 sm:w-full">
                  <Button
                    className="common-pointer border border-gray-300 border-solid cursor-pointer min-w-[98px] text-base text-center"
                    onClick={() => navigate("/frame1116606618")}
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Export
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center min-w-[163px]"
                    onClick={() => navigate("/addproducts")}
                    rightIcon={
                      <Img
                        className="ml-[-123px]"
                        src="images/img_group.svg"
                        alt="Group"
                      />
                    }
                    shape="round"
                    color="blue_A700"
                    size="md"
                    variant="fill"
                  >
                    <div className="text-base text-left">Add Product</div>
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-[22px] sm:px-5 rounded-md shadow-bs w-full">
                <ProductsRow02input06search className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-1.5 md:ml-[0] w-[99%] md:w-full" />
                <div className="overflow-auto ml-1.5 md:ml-[0] mt-[26px] w-[99%]">
                  <ReactTable
                    columns={tableColumns}
                    data={tableData.current}
                    rowClass={"border-b border-gray-300"}
                    headerClass="bg-white-A700"
                  />
                </div>
                <Text
                  className="mb-[25px] md:ml-[0] ml-[972px] mt-[540px] text-base text-blue_gray-600 text-right"
                  size="txtInterRegular16"
                >
                  146 Results
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
