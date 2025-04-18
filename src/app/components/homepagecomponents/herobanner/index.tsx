import React from "react";
import styles from "./herobanner.module.scss";
import Image from "next/image";
import dectbox from "@/assets/image/detectbox.png";
import shapedbackground from "@/assets/image/shapedbackground.png";
import CommonButton from "../../commonbutton/button";
import Commonbuttonsecond from "../../commonbuttonsecond/commonbuttonsecond";
import Sparkle from "@/assets/icons/sparkle";

export default function Herobanner() {
  return (
    <div className={styles.homeherobannermain}>
      <div className={styles.homeherobannerhshapedbgimage}>
        <Image src={shapedbackground} alt="shapedbackground" />
      </div>
      <div className="container">
        <div className={styles.herobannertopcontent}>
          <h1>
            Instantly{" "}
            <p>
              <span>Detect AI</span>{" "}
              <Image src={dectbox} alt="dectbox" width={1000} height={1000} />
            </p>{" "}
            Generated Content with Confidence
          </h1>
          <p className={styles.herobannerparagraph}>
            Detect AI-generated content with precision and safeguard
            authenticity across your digital platforms.
          </p>
        </div>
        <div className={styles.herobannerchatsectionmain}>
          <div className={styles.herobannereffectbuttonmainflx}>
            <div className={styles.herobannereffectbuttonmain}>
              <button type="button" className={styles.herobannereffectbutton}>
                <Sparkle />
                <span>Easy</span>
              </button>
            </div>
            <div className={styles.herobannereffectbuttonmain}>
              <button type="button" className={styles.herobannereffectbutton}>
                <Sparkle />
                <span>Aggresive</span>
              </button>
            </div>
          </div>
          <div className={styles.herobannerchatboxgrid}>
            <div className={styles.herobannerchat}>
              <textarea placeholder="To rewrite or check your content, type or paste it here and click on the button below"></textarea>
              <div className={styles.herobannerchatbottom}>
                <div className={styles.herobannerchataitotalwords}>
                  <span>0/1000</span>
                </div>
                <Commonbuttonsecond Text="Check For AI" />
              </div>
            </div>
            <div className={styles.herobannerchat}>
              <textarea></textarea>
              <div className={styles.herobannerchatbottom}>
                <CommonButton Text="Humanize" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
