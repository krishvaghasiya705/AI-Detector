import React from "react";
import styles from "./commonbutton.module.scss";

interface CommonButtonprop {
  Text: string;
}

export default function CommonButton({ Text }: CommonButtonprop) {
  return (
    <button type="button" className={styles.commonbutton}>
      <span>{Text}</span>
    </button>
  );
}
