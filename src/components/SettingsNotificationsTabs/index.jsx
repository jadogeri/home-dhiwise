import React from "react";

import { Line, Text } from "components";

const SettingsNotificationsTabs = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3.5 h-10 md:h-auto items-center justify-center mb-[-1px] ml-[360px] mt-auto w-auto z-[1]">
          <Text
            className="text-base text-indigo-A400 w-auto"
            size="txtInterRegular16IndigoA400"
          >
            {props?.securitytext}
          </Text>
          <Line className="bg-indigo-A400_01 h-0.5 w-full" />
        </div>
        <div className="flex flex-col items-center justify-center mb-[-1px] ml-[241px] mt-auto w-auto z-[1]">
          <Text
            className="text-base text-blue_gray-600 w-auto"
            size="txtInterRegular16"
          >
            {props?.accountstext}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center mb-[-1px] ml-[97px] mt-auto w-auto z-[1]">
          <Text
            className="text-base text-blue_gray-600 w-auto"
            size="txtInterRegular16"
          >
            {props?.notificationstext}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center mb-[-1px] mt-auto w-auto z-[1]">
          <Text
            className="text-base text-blue_gray-600 w-auto"
            size="txtInterRegular16"
          >
            {props?.profiletext}
          </Text>
        </div>
        <Line className="bg-indigo-50 h-px mt-auto mx-auto w-full" />
      </div>
    </>
  );
};

SettingsNotificationsTabs.defaultProps = {
  securitytext: "Security",
  accountstext: "Accounts",
  notificationstext: "Notifications",
  profiletext: "Profile",
};

export default SettingsNotificationsTabs;
