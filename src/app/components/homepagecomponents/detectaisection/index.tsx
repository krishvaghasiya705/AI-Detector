import React from "react";
import styles from "./detctaisection.module.scss";
import Documenticon from './../../../../assets/icons/documenticon';
import Documentfindicon from "@/assets/icons/documentfindicon";
import Papericon from './../../../../assets/icons/papericon';

export default function Detctaisection() {
  return (
    <div className={styles.detctaisectionmain}>
      <div className="container">
        <div className={styles.detctaisectiontitle}>
          <h1>Detect AI Content in Seconds</h1>
          <p>
            Our AI Detection tool makes it easy to instantly analyze and
            identify AI-generated text. Designed with advanced machine learning
            algorithms, it delivers precise and reliable detection for
            educators, publishers, businesses, and more.
          </p>
        </div>
        <div className={styles.detctaisectiongrid}>
          <div className={styles.detectaicardmainparent}>
            <div className={styles.detectaicardcircleright}></div>
            <div className={styles.detectaicardmain}>
              <div className={styles.detectaicard}>
                <div className={styles.detectcardcontentbox}>
                  <div>
                    <div className={styles.detectcardsiconbox}>
                      <Documenticon />
                    </div>
                    <h3>Upload or Paste Text</h3>
                  </div>
                  <p>
                    Easily upload your document or paste the text you want to
                    analyze. The tool is designed for simplicity, requiring no
                    technical setup.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.detectaicardmainparent}>
            <div className={styles.detectaicardmainsc}>
              <div className={styles.detectaicard}>
                <div className={styles.detectcardcontentbox}>
                  <div>
                    <div className={styles.detectcardsiconbox}>
                      <Documentfindicon />
                    </div>
                    <h3>Instant Analysis</h3>
                  </div>
                  <p>
                    Our AI detection model scans the content, identifying
                    patterns and markers typical of AI-generated text in just
                    seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.detectaicardmainparent}>
            <div className={styles.detectaicardcircleleft}></div>
            <div className={styles.detectaicardmain}>
              <div className={styles.detectaicard}>
                <div className={styles.detectcardcontentbox}>
                  <div>
                    <div className={styles.detectcardsiconbox}>
                      <Papericon />
                    </div>
                    <h3>Receive a Detailed Report</h3>
                  </div>
                  <p>
                    Get a comprehensive report with probability scores and
                    confidence levels, giving you a clear assessment of your
                    content’s authenticity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
