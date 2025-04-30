import React from "react";
import styles from "./commonbutton.module.scss";

interface Commonbuttonsecondprop {
  Text: string;
  Icon: JSX.Element | string;
  buttonslim: any;
}

export default function Commonbuttonsecond({
  Text,
  Icon,
  buttonslim
}: Commonbuttonsecondprop) {
  return (
    <button
      type="button"
      className={`${styles.commonbuttonsecondmain} ${styles[buttonslim]}`}
    >
      <div className={styles.commonbuttonsecond}>
        {Icon}
        <span>{Text}</span>
      </div>
    </button>
  );
}
