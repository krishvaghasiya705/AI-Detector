import React from "react";
import styles from "./commonbutton.module.scss";

interface Commonbuttonsecondprop {
  Text: string;
  Icon: JSX.Element | string;
}

export default function Commonbuttonsecond({ Text, Icon}: Commonbuttonsecondprop) {
  return (
    <button type="button" className={styles.commonbuttonsecondmain}>
      <div className={styles.commonbuttonsecond}>
        {Icon}
        <span>{Text}</span>
      </div>
    </button>
  );
}
