import React from "react";
import styles from "./whocansection.module.scss";
import Image from "next/image";
import whocanimage1 from "@/assets/image/whocanimage1.png";
import whocanimage2 from "@/assets/image/whocanimage2.png";
import whocanimage3 from "@/assets/image/whocanimage3.png";
import whocanimage4 from "@/assets/image/whocanimage4.png";
import Educatorcapicon from "./../../../../assets/icons/educatorcapicon";
import Contentcreatoricon from './../../../../assets/icons/contentcreatoricon';
import Publishinghouseicon from './../../../../assets/icons/publishinghouseicon';
import Goventitiesicon from './../../../../assets/icons/goventitiesicon';

export default function Whocansection() {
  return (
    <div className={styles.whocansectionmain}>
      <div className="container">
        <div className={styles.whocansection}>
          <div className={styles.whocansectiontitle}>
            <h1>Who Can Use the AI Detector Tool?</h1>
            <p>
              Our AI Detector tool is versatile and valuable across industries,
              providing accurate content verification to meet diverse needs.
            </p>
          </div>
          <div className={styles.whocancardsgrid}>
            <div className={styles.whocancard}>
              <div className={styles.whocancardimage}>
                <Image src={whocanimage1} alt="whocanimage1" className={styles.whocancardimage} />
              </div>
              <div className={styles.whocancardcontent}>
                <div className={styles.whocancardcontenticondiv}>
                  <Educatorcapicon />
                </div>
                <div>
                  <h5>Educators</h5>
                  <p>
                    Ensure academic integrity by quickly identifying
                    AI-generated assignments and papers. This helps maintain
                    originality and holds students accountable for authentic
                    work, fostering a culture of trust and fairness.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.whocancard}>
              <div className={styles.whocancardimage}>
                <Image src={whocanimage2} alt="whocanimage2" />
              </div>
              <div className={styles.whocancardcontent}>
                <div className={styles.whocancardcontenticondiv}>
                  <Contentcreatoricon />
                </div>
                <div>
                  <h5>Content Creators</h5>
                  <p>
                    Protect the authenticity of your personal or brand voice by
                    detecting AI-generated content across platforms. This tool
                    ensures that followers engage with genuine, human-created
                    material, building deeper trust.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.whocancard}>
              <div className={styles.whocancardimage}>
                <Image src={whocanimage3} alt="whocanimage3" />
              </div>
              <div className={styles.whocancardcontent}>
                <div className={styles.whocancardcontenticondiv}>
                  <Publishinghouseicon />
                </div>
                <div>
                  <h5>Publishing Houses</h5>
                  <p>
                    Streamline editorial processes by detecting and removing
                    AI-generated submissions, ensuring all published content is
                    human-written. This improves accuracy, quality, and
                    credibility across publications.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.whocancard}>
              <div className={styles.whocancardimage}>
                <Image src={whocanimage4} alt="whocanimage4" />
              </div>
              <div className={styles.whocancardcontent}>
                <div className={styles.whocancardcontenticondiv}>
                  <Goventitiesicon />
                </div>
                <div>
                  <h5>Government and Legal Entities</h5>
                  <p>
                    Safeguard information authenticity by analyzing content
                    submissions for AI influence, protecting sensitive data and
                    ensuring transparency in legal or governmental
                    communications.
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
