import React from "react";
import styles from "./commonbutton.module.scss";

interface CommonButtonprop {
  Text: string;
  Icon: string;
}

export default function CommonButton({ Text, Icon }: CommonButtonprop) {
  return (
    <button type="button" className={styles.commonbutton}>
      {Icon}
      <span>{Text}</span>
    </button>
  );
}
