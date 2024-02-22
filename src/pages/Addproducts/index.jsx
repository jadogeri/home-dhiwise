import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  SelectBox,
  Switch,
  Text,
} from "components";
import AddProductsColumntitletextFive from "components/AddProductsColumntitletextFive";
import AddProductsColumntitletextOne from "components/AddProductsColumntitletextOne";
import AddProductsStackfieldtype from "components/AddProductsStackfieldtype";
import ProductsRowmegaphone from "components/ProductsRowmegaphone";

const randhirKumarOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sizeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const selectCountryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AddproductsPage = () => {
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
                  name="groupFiftyEight"
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
                className="flex flex-col items-center justify-end mb-[1388px] mt-0.5 pl-4 pr-[11px] pt-[13px] w-[90%]"
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
                    onClick={() => navigate("/")}
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
                    Add Product
                  </Text>
                  <div className="bg-white-A700 flex flex-col items-center justify-start mt-8 p-7 sm:px-5 rounded-md shadow-bs w-full">
                    <div className="flex flex-col items-start justify-start mb-3 w-full">
                      <Text
                        className="text-base text-gray-900_01"
                        size="txtInterBold16"
                      >
                        Information
                      </Text>
                      <AddProductsColumntitletextFive
                        className="flex flex-col items-start justify-start mt-[26px] w-full"
                        titletext="Product Name"
                      />
                      <AddProductsColumntitletextOne className="flex flex-col items-start justify-start mt-6 w-full" />
                      <Line className="bg-gray-300 h-px mt-10 w-full" />
                      <Text
                        className="mt-[31px] text-base text-gray-900_01"
                        size="txtInterBold16"
                      >
                        Images
                      </Text>
                      <div className="bg-white-A700 border border-dashed border-indigo-200 flex flex-col items-center justify-start mt-6 p-12 md:px-10 sm:px-5 rounded w-full">
                        <div className="flex flex-col gap-3.5 items-center justify-start w-[26%] md:w-full">
                          <Button
                            className="border border-gray-300 border-solid cursor-pointer min-w-[102px] text-base text-center"
                            shape="round"
                            color="white_A700"
                            size="md"
                            variant="fill"
                          >
                            Add File
                          </Button>
                          <Text
                            className="text-blue_gray-600 text-center text-sm"
                            size="txtInterRegular14Bluegray600"
                          >
                            Or drag and drop files
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-gray-300 h-px mt-10 w-full" />
                      <Text
                        className="mt-[29px] text-base text-gray-900_01"
                        size="txtInterBold16"
                      >
                        Price
                      </Text>
                      <div className="flex md:flex-col flex-row gap-7 items-center justify-between mt-[26px] w-full">
                        <AddProductsColumntitletextFive
                          className="flex md:flex-1 flex-col items-start justify-start w-[48%] md:w-full"
                          titletext="Product Price"
                        />
                        <AddProductsColumntitletextFive
                          className="flex md:flex-1 flex-col items-start justify-start w-[48%] md:w-full"
                          titletext="Discount Price"
                        />
                      </div>
                      <div className="flex flex-row gap-3 items-start justify-start mt-6 w-[36%] md:w-full">
                        <Switch
                          onColor="#1e5eff"
                          offColor="#d9e3ff"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={false}
                          className="w-[19%]"
                        />
                        <Text
                          className="mt-[3px] text-base text-gray-900_01"
                          size="txtInterRegular16Gray90001"
                        >
                          Add tax for this product
                        </Text>
                      </div>
                      <Line className="bg-gray-300 h-px mt-10 w-full" />
                      <Text
                        className="mt-[31px] text-base text-gray-900_01"
                        size="txtInterBold16"
                      >
                        Different Options
                      </Text>
                      <div className="flex flex-row gap-3 items-start justify-start mt-6 w-[46%] md:w-full">
                        <Switch
                          onColor="#1e5eff"
                          offColor="#d9e3ff"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={true}
                          className="w-[15%]"
                        />
                        <Text
                          className="mt-[3px] text-base text-gray-900_01"
                          size="txtInterRegular16Gray90001"
                        >
                          This product has multiple options
                        </Text>
                      </div>
                      <Text
                        className="mt-[43px] text-base text-gray-900_01"
                        size="txtInterBold16"
                      >
                        Option 1
                      </Text>
                      <div className="flex md:flex-col flex-row gap-7 items-center justify-between mt-5 w-full">
                        <AddProductsStackfieldtype className="flex md:flex-1 flex-col items-start justify-start w-[48%] md:w-full" />
                        <div className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full">
                          <AddProductsColumntitletextFive className="flex flex-col items-start justify-start w-full" />
                        </div>
                      </div>
                      <Text
                        className="mt-[22px] text-base text-blue-A700"
                        size="txtInterRegular16BlueA700"
                      >
                        Add More
                      </Text>
                      <Line className="bg-gray-300 h-px mt-[41px] w-full" />
                      <Text
                        className="mt-[31px] text-base text-gray-900_01"
                        size="txtInterBold16"
                      >
                        Shipping
                      </Text>
                      <div className="flex md:flex-col flex-row gap-7 items-center justify-between mt-6 w-full">
                        <AddProductsColumntitletextFive
                          className="flex md:flex-1 flex-col items-start justify-start w-[48%] md:w-full"
                          titletext="Weight"
                        />
                        <AddProductsStackfieldtype className="flex md:flex-1 flex-col items-start justify-start w-[48%] md:w-full" />
                      </div>
                      <div className="flex flex-row gap-3 items-start justify-start mt-6 w-[29%] md:w-full">
                        <Switch
                          onColor="#1e5eff"
                          offColor="#d9e3ff"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={false}
                          className="w-[23%]"
                        />
                        <Text
                          className="mt-[3px] text-base text-gray-900_01"
                          size="txtInterRegular16Gray90001"
                        >
                          This is digital item
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-7 items-end justify-start md:mt-0 mt-[18px] w-[32%] md:w-full">
                  <div className="flex flex-row gap-3 items-center justify-end w-[57%] md:w-full">
                    <Button
                      className="common-pointer border border-gray-300 border-solid cursor-pointer min-w-[101px] text-base text-center"
                      onClick={() => navigate("/")}
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
                  <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-center p-7 sm:px-5 rounded-md shadow-bs w-full">
                      <Text
                        className="mt-[3px] text-base text-gray-900_01"
                        size="txtInterBold16"
                      >
                        Categories
                      </Text>
                      <CheckBox
                        className="mt-6 text-base text-gray-900_01 text-left"
                        inputClassName="mr-[5px]"
                        name="text_Three"
                        id="text_Three"
                        label="Women"
                      ></CheckBox>
                      <CheckBox
                        className="mt-3 text-base text-gray-900_01 text-left"
                        inputClassName="mr-[5px]"
                        name="text_Four"
                        id="text_Four"
                        label="Men"
                      ></CheckBox>
                      <CheckBox
                        className="mt-3 text-base text-gray-900_01 text-left"
                        inputClassName="mr-[5px]"
                        name="text_Five"
                        id="text_Five"
                        label="T-Shirt"
                      ></CheckBox>
                      <CheckBox
                        className="mt-3 text-base text-gray-900_01 text-left"
                        inputClassName="mr-[5px]"
                        name="text_Six"
                        id="text_Six"
                        label="Hoodie"
                      ></CheckBox>
                      <CheckBox
                        className="mt-3 text-base text-gray-900_01 text-left"
                        inputClassName="mr-[5px]"
                        name="text_Seven"
                        id="text_Seven"
                        label="Dress"
                      ></CheckBox>
                      <Text
                        className="mt-[22px] text-base text-blue-A700"
                        size="txtInterRegular16BlueA700"
                      >
                        Create New
                      </Text>
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
                        <div className="flex flex-row gap-2 items-center justify-start mt-5 w-4/5 md:w-full">
                          <div className="flex flex-col items-center justify-start w-[41%]">
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[95px] pl-3 pr-2"
                              rightIcon={
                                <Img
                                  className="h-6 ml-[5px]"
                                  src="images/img_close.svg"
                                  alt="close"
                                />
                              }
                              shape="round"
                              color="indigo_50"
                              size="xs"
                              variant="fill"
                            >
                              <div className="text-left text-sm">T-Shirt</div>
                            </Button>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[57%]">
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[132px] pl-3 pr-2"
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
                                Men Clothes
                              </div>
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-2 w-[59%] md:w-full">
                          <Button
                            className="cursor-pointer flex items-center justify-center min-w-[173px] pl-3 pr-2"
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
                              Summer Collection
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-6 items-start justify-end p-7 sm:px-5 rounded-md shadow-bs w-full">
                      <Text
                        className="mt-[3px] text-base text-gray-900_01"
                        size="txtInterBold16"
                      >
                        SEO Settings
                      </Text>
                      <AddProductsColumntitletextFive
                        className="flex flex-col items-start justify-start w-full"
                        titletext="Title"
                      />
                      <AddProductsColumntitletextOne
                        className="flex flex-col items-start justify-start w-full"
                        titletext="Description"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-7 items-end justify-start w-full">
                <Line className="bg-gray-300 h-px w-full" />
                <div className="flex flex-row gap-3 items-center justify-end w-[18%] md:w-full">
                  <Button
                    className="common-pointer border border-gray-300 border-solid cursor-pointer min-w-[101px] text-base text-center"
                    onClick={() => navigate("/")}
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

export default AddproductsPage;
