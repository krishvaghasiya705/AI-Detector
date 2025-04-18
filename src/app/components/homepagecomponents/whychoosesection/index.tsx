import React from "react";
import styles from "./whychoosesection.module.scss";
import Image from "next/image";
import Circleringimage from "@/assets/image/circlerings.png";
import Educatoricon from './../../../../assets/icons/educatoricon';
import Creatoricon from './../../../../assets/icons/creatoricon';

export default function Whychoosesection() {
  return (
    <div className={styles.whychoosesectionmain}>
      <div className="container">
        <div className={styles.whychoosesection}>
          <div className={styles.circleimage}>
            <Image
              src={Circleringimage}
              alt="Circleringimage"
              width={1000}
              height={1000}
            />
          </div>
          <div className={styles.whychooseverticleflx}>
            <div className={styles.whychoosecardbox}>
              <div className={styles.whychoosecardboxtitle}>
                <div className={styles.whychoosecardboxtitleicon}>
                  <Educatoricon />
                </div>
                <h4>For Educators</h4>
              </div>
              <p>
                Uphold academic standards by detecting AI-generated assignments,
                helping students maintain originality in their work.
              </p>
            </div>
            <div className={styles.whychoosecardbox}>
              <div className={styles.whychoosecardboxtitle}>
                <div className={styles.whychoosecardboxtitleicon}>
                  <Creatoricon />
                </div>
                <h4>For Content Creators</h4>
              </div>
              <p>
                Keep your platforms genuine by verifying content authenticity,
                protecting your brand's voice and message.
              </p>
            </div>
          </div>
          <div className={styles.whychoosetitle}>
            <h1>Why Choose Our AI Content Detector?</h1>
          </div>
          <div className={styles.whychooseverticleflx}>
            <div className={styles.whychoosecardbox}>
              <div className={styles.whychoosecardboxtitle}>
                <div className={styles.whychoosecardboxtitleicon}>
                  <Educatoricon />
                </div>
                <h4>For Publishers</h4>
              </div>
              <p>
                Improve editorial accuracy by quickly filtering out AI-written
                material, maintaining high-quality, human-generated content.
              </p>
            </div>
            <div className={styles.whychoosecardbox}>
              <div className={styles.whychoosecardboxtitle}>
                <div className={styles.whychoosecardboxtitleicon}>
                  <Creatoricon />
                </div>
                <h4>For Businesses</h4>
              </div>
              <p>
                Safeguard your brand's reputation by identifying AI-created user
                content, ensuring only trusted information is displayed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
