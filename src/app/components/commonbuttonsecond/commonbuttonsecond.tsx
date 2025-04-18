import React from "react";
import styles from "./commonbutton.module.scss";

interface Commonbuttonsecondprop {
  Text: string;
}

export default function Commonbuttonsecond({ Text}: Commonbuttonsecondprop) {
  return (
    <div className={styles.commonbuttonsecondmain}>
      <button type="button" className={styles.commonbuttonsecond}>
        <span>{Text}</span>
      </button>
    </div>
  );
}
