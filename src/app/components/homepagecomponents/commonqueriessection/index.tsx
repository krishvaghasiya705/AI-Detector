import React from "react";
import styles from "./commonqueriessection.module.scss";
import commonqueriesimage from "@/assets/image/commonqueriesimage.png";
import Image from "next/image";
import Plusicon from "./../../../../assets/icons/plusicon";

export default function Commonqueriessection() {
  return (
    <div className={styles.commonqueriessectionmain}>
      <div className="container">
        <div className={styles.commonqueriessection}>
          <div className={styles.commonqueriessectiontitle}>
            <h1>Your common queries answered with additional FAQs</h1>
            <p>
              Get the insights you need to make the most of our platform’s
              features and capabilities.
            </p>
          </div>
          <div className={styles.commonqueriessectionflx}>
            <div className={styles.commonquerisfaqmain}>
              <div>
                <div className={styles.commonquerisfaqboxopen}>
                  <div className={styles.faqtitle}>
                    <p>How accurate is the AI detection?</p>
                  </div>
                  <div className={styles.commonplusicon}>
                    <Plusicon />
                  </div>
                </div>
                <div className={styles.commonquerisfaqmessage}>
                  <p>
                    Our tool uses advanced algorithms trained on the latest AI
                    models, providing over 95% accuracy in identifying
                    AI-generated content.
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.commonquerisfaqbox}>
                  <div className={styles.faqtitle}>
                    <p>Can your tool detect AI content in multiple languages?</p>
                  </div>
                  <div className={styles.commonplusicon}>
                    <Plusicon />
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.commonquerisfaqbox}>
                  <div className={styles.faqtitle}>
                    <p>How long does it take to analyze content?</p>
                  </div>
                  <div className={styles.commonplusicon}>
                    <Plusicon />
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.commonquerisfaqbox}>
                  <div className={styles.faqtitle}>
                    <p>Is my data safe and private?</p>
                  </div>
                  <div className={styles.commonplusicon}>
                    <Plusicon />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.commonqueriessectionflximage}>
              <Image
                src={commonqueriesimage}
                alt="commonqueriesimage"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
