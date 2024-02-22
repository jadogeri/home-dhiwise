import React from "react";

import { Img } from "components";

const CustomerInfoRowsignal = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-6 w-6"
          src="images/img_signal_amber_a400.svg"
          alt="signal"
        />
        <Img
          className="h-6 w-6"
          src="images/img_signal_amber_a400.svg"
          alt="signal_One"
        />
        <Img
          className="h-6 w-6"
          src="images/img_signal_amber_a400.svg"
          alt="signal_Two"
        />
        <Img
          className="h-6 w-6"
          src="images/img_signal_amber_a400.svg"
          alt="signal_Three"
        />
        <Img
          className="h-6 w-6"
          src="images/img_signal_indigo_200.svg"
          alt="signal_Four"
        />
      </div>
    </>
  );
};

CustomerInfoRowsignal.defaultProps = {};

export default CustomerInfoRowsignal;
