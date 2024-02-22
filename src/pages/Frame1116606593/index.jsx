import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, List, Switch, Text } from "components";
import Frame1116606593Rowbitmap from "components/Frame1116606593Rowbitmap";
import Frame1116606593Rowbitmap1 from "components/Frame1116606593Rowbitmap1";
import Frame1116606593Rowbitmap2 from "components/Frame1116606593Rowbitmap2";
import Frame1116606593Rowbitmap3 from "components/Frame1116606593Rowbitmap3";
import Frame1116606593RowbitmapFive from "components/Frame1116606593RowbitmapFive";
import Frame1116606593RowbitmapFour from "components/Frame1116606593RowbitmapFour";

const Frame1116606593Page = () => {
  return (
    <>
      <div className="bg-gray-800 flex sm:flex-col md:flex-col flex-row font-inter gap-[19px] items-start mx-auto p-2.5 w-full">
        <Sidebar className="!sticky !w-[399px] border border-dashed border-deep_purple-A200 flex h-screen md:hidden justify-start ml-3.5 md:ml-[0] md:mt-0 mt-4 overflow-auto md:px-5 rounded-[5px] top-[0]">
          <div className="border border-dashed border-deep_purple-A200 flex flex-col gap-5 items-center justify-start ml-6 md:ml-[0] mr-20 p-5 rounded-[5px] w-[74%]">
            <div className="flex flex-col h-11 md:h-auto items-center justify-start px-5 rounded-[5px] w-[255px]">
              <Text
                className="text-gray-900_02 text-sm w-auto"
                size="txtInterBold14"
              >
                Introduction to Product
              </Text>
            </div>
            <Text
              className="bg-blue_gray-900 h-11 justify-center pl-5 sm:pr-5 pr-[35px] py-[13px] rounded-[5px] text-sm text-white-A700 w-[255px]"
              size="txtInterBold14WhiteA700"
            >
              Introduction to Product
            </Text>
          </div>
          <div className="bg-blue-A700 flex flex-col h-12 items-center justify-start md:ml-[0] ml-[61px] mr-[290px] mt-[89px] rounded-[50%] w-12">
            <Img
              className="h-12 md:h-auto rounded-[50%] w-12"
              src="images/img_bitmap_2.png"
              alt="bitmap"
            />
          </div>
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                flexDirection: "column",
                color: "#131523",
                fontSize: "14px",
                paddingLeft: "54px",
                paddingRight: "54px",
                [`&:hover, &.ps-active`]: {
                  color: "#5a607f",
                  fontWeight: "400 !important",
                },
              },
            }}
            className="flex flex-col items-center justify-start mb-11 sm:pr-5 pr-6 w-full"
          >
            <div className="flex flex-col gap-2 items-center justify-start w-full">
              <MenuItem>
                <div className="flex items-center justify-start md:px-10 sm:px-5">
                  <Text>Alisson Mack</Text>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex items-end justify-start md:px-10 sm:px-5">
                  <Text>I want to complain about item</Text>
                </div>
              </MenuItem>
            </div>
            <div className="bg-blue-A700 flex flex-col items-center justify-start mt-[70px] rounded-[24px] w-full">
              <Img
                className="h-12 md:h-auto rounded-[50%] w-full"
                src="images/img_bitmap_2.png"
                alt="bitmap_One"
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-start w-full">
              <MenuItem>
                <div className="flex items-center justify-start md:px-10 sm:px-5">
                  <Text>Alisson Mack</Text>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex items-end justify-start md:px-10 sm:px-5">
                  <Text className="text-blue_gray-600">
                    I want to complain about item
                  </Text>
                </div>
              </MenuItem>
            </div>
            <div className="bg-blue-A700 flex flex-col items-center justify-start mt-[110px] rounded-[24px] w-full">
              <div className="h-12 relative w-full">
                <Img
                  className="h-12 m-auto rounded-[50%] w-full"
                  src="images/img_bitmap_48x399.png"
                  alt="bitmap_Two"
                />
                <div className="absolute bg-green-A400 border-4 border-solid border-white-A700 bottom-[0] h-4 inset-x-[0] mx-auto rounded-lg w-full"></div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 items-center justify-start w-full">
              <MenuItem>
                <div className="flex items-start justify-start md:px-10 sm:px-5">
                  <Text>Barry George</Text>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex items-end justify-start sm:px-5">
                  <Text className="text-blue_gray-600">
                    Is there any chance to get a refu...
                  </Text>
                </div>
              </MenuItem>
            </div>
            <div className="bg-blue-A700 flex flex-col items-center justify-start mt-[69px] rounded-[24px] w-full">
              <div className="h-12 relative w-full">
                <Img
                  className="h-12 m-auto rounded-[50%] w-full"
                  src="images/img_bitmap_48x399.png"
                  alt="bitmap_Three"
                />
                <div className="absolute bg-green-A400 border-4 border-solid border-white-A700 bottom-[0] h-4 inset-x-[0] mx-auto rounded-lg w-full"></div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 items-center justify-start w-full">
              <MenuItem>
                <div className="flex items-start justify-start md:px-10 sm:px-5">
                  <Text>Barry George</Text>
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex items-end justify-start sm:px-5">
                  <Text className="text-blue_gray-600">
                    Is there any chance to get a refu...
                  </Text>
                </div>
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>
        <div className="flex-1 md:h-[1537px] h-[722px] sm:h-[790px] mb-[78px] mr-[46px] md:px-5 relative w-full">
          <div className="absolute flex flex-col gap-6 h-max inset-y-[0] justify-start left-[0] my-auto w-[26%]">
            <div className="flex flex-col gap-[50px] items-start justify-start md:ml-[0] ml-[42px] w-[84%] md:w-full">
              <Text
                className="text-base text-gray-900_01"
                size="txtInterBold16"
              >
                Conversations
              </Text>
              <Input
                name="frame1116606595"
                placeholder="Search..."
                className="md:h-auto p-0 placeholder:text-indigo-200 sm:h-auto text-base text-left w-full"
                wrapClassName="border border-gray-300_01 border-solid flex w-full"
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
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <List
                className="flex flex-col gap-px items-center w-full"
                orientation="vertical"
              >
                <Frame1116606593Rowbitmap className="flex flex-row gap-4 h-24 md:h-auto items-center justify-start my-0 sm:px-5 px-8 w-[350px]" />
                <Frame1116606593Rowbitmap1 className="flex flex-row gap-4 h-24 md:h-auto items-center justify-start my-0 sm:px-5 px-8 w-[350px]" />
              </List>
              <Frame1116606593RowbitmapFour className="flex flex-row gap-4 h-24 md:h-auto items-center justify-start sm:px-5 px-8 w-[350px]" />
              <Frame1116606593RowbitmapFive className="flex flex-row gap-4 h-24 md:h-auto items-center justify-start sm:px-5 px-8 w-[350px]" />
              <List
                className="flex flex-col gap-px items-center w-full"
                orientation="vertical"
              >
                <Frame1116606593Rowbitmap2 className="flex flex-row gap-4 h-24 md:h-auto items-center justify-start my-0 sm:px-5 px-8 w-[350px]" />
                <Frame1116606593Rowbitmap3 className="flex flex-row gap-4 h-24 md:h-auto items-center justify-start my-0 sm:px-5 px-8 w-[350px]" />
              </List>
            </div>
          </div>
          <List
            className="absolute bottom-[4%] flex flex-col gap-8 right-[0] w-[74%]"
            orientation="vertical"
          >
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="border border-dashed border-deep_purple-A200 flex md:flex-1 flex-col gap-5 items-center justify-start md:mt-0 mt-[29px] p-5 rounded-[5px] w-[39%] md:w-full">
                <div className="flex flex-row gap-4 h-24 md:h-auto items-center justify-start sm:px-5 px-8 w-[350px]">
                  <div className="bg-blue-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                    <div className="h-12 relative w-12">
                      <Img
                        className="h-12 m-auto rounded-[50%] w-12"
                        src="images/img_bitmap_3.png"
                        alt="bitmap"
                      />
                      <div className="absolute bg-green-A400 border-4 border-solid border-white-A700 bottom-[0] h-4 right-[0] rounded-[50%] w-4"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[81%]">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-start w-full">
                        <Text
                          className="text-gray-900_01 text-sm"
                          size="txtInterBold14Gray90001"
                        >
                          Tom Anderson
                        </Text>
                        <Text
                          className="bg-blue-A700 flex h-4 items-center justify-center ml-[9px] rounded-[50%] text-center text-white-A700 text-xs w-4"
                          size="txtInterBold12"
                        >
                          8
                        </Text>
                        <Text
                          className="ml-[41px] text-indigo-200 text-right text-sm"
                          size="txtInterRegular14Indigo200"
                        >
                          12:24 AM
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-600 text-sm"
                        size="txtInterRegular14Bluegray600"
                      >
                        Hello, I’m interested in this item...
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50_02 flex flex-row gap-4 h-24 md:h-auto items-center justify-start sm:px-5 px-8 w-[350px]">
                  <div className="bg-blue-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                    <div className="h-12 relative w-12">
                      <Img
                        className="h-12 m-auto rounded-[50%] w-12"
                        src="images/img_bitmap_3.png"
                        alt="bitmap_One"
                      />
                      <div className="absolute bg-green-A400 border-4 border-solid border-white-A700 bottom-[0] h-4 right-[0] rounded-[50%] w-4"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[81%]">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-start w-full">
                        <Text
                          className="text-gray-900_01 text-sm"
                          size="txtInterBold14Gray90001"
                        >
                          Tom Anderson
                        </Text>
                        <Text
                          className="bg-blue-A700 flex h-4 items-center justify-center ml-[9px] rounded-[50%] text-center text-white-A700 text-xs w-4"
                          size="txtInterBold12"
                        >
                          8
                        </Text>
                        <Text
                          className="ml-[41px] text-indigo-200 text-right text-sm"
                          size="txtInterRegular14Indigo200"
                        >
                          12:24 AM
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-600 text-sm"
                        size="txtInterRegular14Bluegray600"
                      >
                        Hello, I’m interested in this item...
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-dashed border-deep_purple-A200 flex md:flex-1 flex-col gap-5 items-center justify-start mb-[29px] p-5 rounded-[5px] w-[39%] md:w-full">
                <div className="flex flex-row gap-4 h-24 md:h-auto items-center justify-start sm:px-5 px-8 w-[350px]">
                  <div className="bg-blue-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_bitmap_5.png"
                      alt="bitmap_Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end w-[81%]">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-gray-900_01 text-sm"
                          size="txtInterRegular14Gray90001"
                        >
                          Jenny Lloyd
                        </Text>
                        <Text
                          className="text-indigo-200 text-right text-sm"
                          size="txtInterRegular14Indigo200"
                        >
                          Yesterday
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-600 text-sm"
                        size="txtInterRegular14Bluegray600"
                      >
                        I’m not sure if this is what I want
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50_02 flex flex-row gap-4 h-24 md:h-auto items-center justify-start sm:px-5 px-8 w-[350px]">
                  <div className="bg-blue-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_bitmap_5.png"
                      alt="bitmap_Three"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-end w-[81%]">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-gray-900_01 text-sm"
                          size="txtInterRegular14Gray90001"
                        >
                          Jenny Lloyd
                        </Text>
                        <Text
                          className="text-indigo-200 text-right text-sm"
                          size="txtInterRegular14Indigo200"
                        >
                          Yesterday
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-600 text-sm"
                        size="txtInterRegular14Bluegray600"
                      >
                        I’m not sure if this is what I want
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-dashed border-deep_purple-A200 flex md:flex-1 flex-col gap-5 items-center justify-start md:mt-0 mt-[126px] p-5 rounded-[5px] w-[9%] md:w-full">
                <Switch
                  onColor="#1e5eff"
                  offColor="#d9e3ff"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  value={false}
                  className="w-full"
                />
                <Switch
                  onColor="#1e5eff"
                  offColor="#d9e3ff"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  value={true}
                  className="w-full"
                />
              </div>
              <div className="border border-dashed border-deep_purple-A200 flex md:flex-1 flex-col gap-5 items-center justify-start md:mt-0 mt-[126px] p-5 rounded-[5px] w-[6%] md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_checkmark_white_a700.svg"
                  alt="checkmark"
                />
                <div className="flex flex-col h-5 items-center justify-start w-5">
                  <Button
                    className="flex h-5 items-center justify-center w-5"
                    shape="round"
                    color="blue_A700"
                    size="sm"
                    variant="fill"
                  >
                    <Img src="images/img_checkmark.svg" alt="checkmark_One" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-7 items-start justify-between w-4/5 md:w-full">
              <div className="border border-dashed border-deep_purple-A200 flex flex-col gap-5 items-center justify-start mb-[34px] p-5 rounded-[5px] w-[49%] md:w-full">
                <div className="flex flex-row gap-4 h-24 md:h-auto items-center justify-start sm:px-5 px-8 w-[350px]">
                  <div className="bg-blue-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                    <div className="h-12 relative w-12">
                      <Img
                        className="h-12 m-auto rounded-[50%] w-12"
                        src="images/img_bitmap_4.png"
                        alt="bitmap"
                      />
                      <div className="absolute bg-green-A400 border-4 border-solid border-white-A700 bottom-[0] h-4 right-[0] rounded-[50%] w-4"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[81%]">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-start w-full">
                        <Text
                          className="text-gray-900_01 text-sm"
                          size="txtInterBold14Gray90001"
                        >
                          Luis Pittman
                        </Text>
                        <Text
                          className="bg-blue-A700 flex h-4 items-center justify-center ml-2 rounded-[50%] text-center text-white-A700 text-xs w-4"
                          size="txtInterBold12"
                        >
                          5
                        </Text>
                        <Text
                          className="ml-[57px] text-indigo-200 text-right text-sm"
                          size="txtInterRegular14Indigo200"
                        >
                          10:50 AM
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-600 text-sm"
                        size="txtInterRegular14Bluegray600"
                      >
                        Hi, can I ask if there is anything...
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50_02 flex flex-row gap-4 h-24 md:h-auto items-center justify-start sm:px-5 px-8 w-[350px]">
                  <div className="bg-blue-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                    <div className="h-12 relative w-12">
                      <Img
                        className="h-12 m-auto rounded-[50%] w-12"
                        src="images/img_bitmap_4.png"
                        alt="bitmap_One"
                      />
                      <div className="absolute bg-green-A400 border-4 border-solid border-white-A700 bottom-[0] h-4 right-[0] rounded-[50%] w-4"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[81%]">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-start w-full">
                        <Text
                          className="text-gray-900_01 text-sm"
                          size="txtInterBold14Gray90001"
                        >
                          Luis Pittman
                        </Text>
                        <Text
                          className="bg-blue-A700 flex h-4 items-center justify-center ml-2 rounded-[50%] text-center text-white-A700 text-xs w-4"
                          size="txtInterBold12"
                        >
                          5
                        </Text>
                        <Text
                          className="ml-[57px] text-indigo-200 text-right text-sm"
                          size="txtInterRegular14Indigo200"
                        >
                          10:50 AM
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-600 text-sm"
                        size="txtInterRegular14Bluegray600"
                      >
                        Hi, can I ask if there is anything...
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-dashed border-deep_purple-A200 flex flex-col gap-5 items-center justify-start md:mt-0 mt-[34px] p-5 rounded-[5px] w-[49%] md:w-full">
                <div className="flex flex-row gap-4 h-24 md:h-auto items-center justify-start sm:px-5 px-8 w-[350px]">
                  <div className="bg-blue-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_bitmap_6.png"
                      alt="bitmap_Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[81%]">
                    <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-gray-900_01 text-sm"
                          size="txtInterRegular14Gray90001"
                        >
                          Andrew Larson
                        </Text>
                        <Text
                          className="text-indigo-200 text-right text-sm"
                          size="txtInterRegular14Indigo200"
                        >
                          Yesterday
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-600 text-sm"
                        size="txtInterRegular14Bluegray600"
                      >
                        Can you help me choose from t…
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50_02 flex flex-row gap-4 h-24 md:h-auto items-center justify-start sm:px-5 px-8 w-[350px]">
                  <div className="bg-blue-A700 flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_bitmap_6.png"
                      alt="bitmap_Three"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[81%]">
                    <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text
                          className="text-gray-900_01 text-sm"
                          size="txtInterRegular14Gray90001"
                        >
                          Andrew Larson
                        </Text>
                        <Text
                          className="text-indigo-200 text-right text-sm"
                          size="txtInterRegular14Indigo200"
                        >
                          Yesterday
                        </Text>
                      </div>
                      <Text
                        className="text-blue_gray-600 text-sm"
                        size="txtInterRegular14Bluegray600"
                      >
                        Can you help me choose from t…
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <List
            className="absolute sm:flex-col flex-row gap-[17px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center right-[3%] top-[0] w-auto"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-col h-[70px] md:h-auto items-center justify-center px-3 rounded-md shadow-bs w-52">
              <div className="flex flex-row gap-[39px] items-center justify-center w-auto">
                <div className="flex flex-col items-center justify-start pt-1 w-[45%]">
                  <Text
                    className="text-base text-gray-900_01"
                    size="txtInterBold16"
                  >
                    $10.540
                  </Text>
                  <Text
                    className="text-[10px] text-blue_gray-600"
                    size="txtInterRegular10"
                  >
                    Total Revenue
                  </Text>
                  <div className="flex flex-row gap-[7px] items-start justify-between mt-0.5 w-full">
                    <Text
                      className="mt-0.5 text-[10px] text-green-A700"
                      size="txtInterRegular10GreenA700"
                    >
                      22.45%
                    </Text>
                    <Img
                      className="h-3 mt-0.5 w-3"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                  </div>
                </div>
                <Button
                  className="flex h-7 items-center justify-center rounded-[50%] w-7"
                  shape="circle"
                  color="blue_50"
                  size="md"
                  variant="fill"
                >
                  <Img className="h-3" src="images/img_user.svg" alt="user" />
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col h-[70px] md:h-auto items-center justify-center px-3 rounded-md shadow-bs w-52">
              <div className="flex flex-row gap-[39px] items-center justify-center w-auto">
                <div className="flex flex-col items-start justify-end pt-[5px] w-[45%]">
                  <Text
                    className="text-base text-gray-900_01"
                    size="txtInterBold16"
                  >
                    1,056
                  </Text>
                  <Text
                    className="text-[10px] text-blue_gray-600"
                    size="txtInterRegular10"
                  >
                    Orders
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-between mt-0.5 w-full">
                    <Text
                      className="mt-0.5 text-[10px] text-green-A700"
                      size="txtInterRegular10GreenA700"
                    >
                      15.34%
                    </Text>
                    <Img
                      className="h-3 mt-0.5 w-3"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                  </div>
                </div>
                <Button
                  className="flex h-7 items-center justify-center rounded-[50%] w-7"
                  shape="circle"
                  color="blue_50"
                  size="md"
                  variant="fill"
                >
                  <Img
                    className="h-3"
                    src="images/img_cart_blue_a700.svg"
                    alt="cart"
                  />
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-start justify-start px-3 rounded-md shadow-bs w-52">
              <div className="flex flex-row gap-[39px] items-center justify-center w-auto">
                <div className="flex flex-col items-start justify-start py-1 w-[35%]">
                  <Text
                    className="text-[10px] text-blue_gray-600"
                    size="txtInterRegular10"
                  >
                    Unique Visits
                  </Text>
                  <Text
                    className="text-base text-gray-900_01"
                    size="txtInterBold16"
                  >
                    5.420
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start mb-[5px] py-[3px] w-[88%] md:w-full">
                    <Text
                      className="text-[10px] text-red-A400"
                      size="txtInterRegular10RedA400"
                    >
                      10.24%
                    </Text>
                    <Img
                      className="h-3 w-3"
                      src="images/img_arrowdown_red_a400.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <Img
                  className="h-[50px] w-[78px]"
                  src="images/img_chart.svg"
                  alt="chart"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col h-[70px] md:h-auto items-start justify-start px-3 rounded-md shadow-bs w-52">
              <div className="flex flex-row gap-[39px] items-center justify-center w-auto">
                <div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-[35%]">
                  <Text
                    className="text-[10px] text-blue_gray-600"
                    size="txtInterRegular10"
                  >
                    New Users
                  </Text>
                  <Text
                    className="mt-0.5 text-base text-gray-900_01"
                    size="txtInterBold16"
                  >
                    1.650
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start mb-1.5 py-[3px] w-[92%] md:w-full">
                    <Text
                      className="text-[10px] text-green-A700"
                      size="txtInterRegular10GreenA700"
                    >
                      15.34%
                    </Text>
                    <Img
                      className="h-3 w-3"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                  </div>
                </div>
                <Img
                  className="h-[50px] w-[78px]"
                  src="images/img_chart_white_a700.svg"
                  alt="chart"
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start rounded-md shadow-bs w-full">
              <div className="flex flex-row gap-[39px] items-center justify-center w-auto">
                <div className="flex flex-col items-start justify-start py-1 w-[35%]">
                  <Text
                    className="text-[10px] text-blue_gray-600"
                    size="txtInterRegular10"
                  >
                    Existing Users
                  </Text>
                  <Text
                    className="text-base text-gray-900_01"
                    size="txtInterBold16"
                  >
                    9.653
                  </Text>
                  <div className="flex flex-row gap-[7px] items-center justify-start mb-[5px] py-[3px] w-[88%] md:w-full">
                    <Text
                      className="text-[10px] text-green-A700"
                      size="txtInterRegular10GreenA700"
                    >
                      22.45%
                    </Text>
                    <Img
                      className="h-3 w-3"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                  </div>
                </div>
                <Img
                  className="h-[50px] w-[78px]"
                  src="images/img_settings_white_a700_50x78.svg"
                  alt="settings"
                />
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default Frame1116606593Page;
