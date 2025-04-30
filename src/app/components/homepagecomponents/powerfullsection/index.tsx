import React from "react";
import styles from "./powerfullsection.module.scss";
import CommonButton from "../../commonbutton/button";

export default function Powerfullsection() {
  return (
    <div className={styles.powerfullsectionmain}>
      <div className="container">
        <div className={styles.powerfullsection}>
          <div className={styles.powerfullsectionleft}>
            <h1>Powerful Features for Accurate AI Detection</h1>
            <p>
              Our AI detection tool is designed for precision and ease of use,
              helping you detect AI-generated content with confidence. Each
              feature is crafted to ensure reliability, speed, and security in
              your detection process.
            </p>
            <CommonButton Text="Trial For Free Now" Icon="" buttonslim="" />
          </div>
          <div className={styles.powerfullsectionright}>
            <div className={styles.powerfullsectionrightbox}>
              <h1>
                <span>01.</span>High Accuracy Detection
              </h1>
              <p>
                Built on advanced AI models, providing you with highly accurate
                and reliable detection results every time.
              </p>
            </div>
            <div className={styles.powerfullsectionrightbox}>
              <h1>
                <span>02.</span>Easy-to-Use Interface
              </h1>
              <p>
                Simply upload your text and analyze instantly—no technical
                expertise is required.
              </p>
            </div>
            <div className={styles.powerfullsectionrightbox}>
              <h1>
                <span>03.</span>Detailed Insights
              </h1>
              <p>
                Get probability scores and breakdowns that help you understand
                content origin and authenticity.
              </p>
            </div>
            <div className={styles.powerfullsectionrightbox}>
              <h1>
                <span>04.</span>Customizable Settings
              </h1>
              <p>
                Adjust detection sensitivity to meet the unique needs of your
                institution or business.
              </p>
            </div>
            <div className={styles.powerfullsectionrightbox}>
              <h1>
                <span>05.</span>Data Privacy & Security
              </h1>
              <p>
                Your data remains private, encrypted, and is not stored after
                analysis, ensuring complete confidentiality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
