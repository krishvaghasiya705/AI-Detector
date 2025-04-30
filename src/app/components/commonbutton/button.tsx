import React from "react";
import styles from "./commonbutton.module.scss";

interface CommonButtonprop {
  Text: string;
  Icon: JSX.Element | string;
  buttonslim: any;
}

export default function CommonButton({ Text, Icon, buttonslim }: CommonButtonprop) {
  return (
    <button type="button" className={`${styles.commonbutton} ${styles[buttonslim]}`}>
      {Icon}
      <span>{Text}</span>
    </button>
  );
}
