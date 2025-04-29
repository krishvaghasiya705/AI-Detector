import React from "react";
import CommonButton from "../../commonbutton/button";
import styles from "./subscribenewslatter.module.scss";

export default function Subsnewlatter() {
  return (
    <>
      <div className="container">
        <div className={styles.footersubsection}>
          <div className={styles.footersubtitle}>
            <h1>Subscribe Our Newslatter</h1>
            <p>Get started to up your business personal AI Detector</p>
          </div>
          <div className={styles.footersubfieldsmain}>
            <input type="email" placeholder="Enter your email" />
            <CommonButton Text="Subscribe Now" Icon="" />
          </div>
        </div>
      </div>
    </>
  );
}
