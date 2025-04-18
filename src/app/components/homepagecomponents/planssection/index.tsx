import React from "react";
import styles from "./planssection.module.scss";
import CommonButton from "./../../commonbutton/button";
import Falseicon from "./../../../../assets/icons/falseicon";
import Trueicon from "./../../../../assets/icons/trueicon";

export default function Planssection() {
  return (
    <div className={styles.planssectionmain}>
      <div className="container">
        <div className={styles.planssection}>
          <div className={styles.planssectiontitle}>
            <h1>Flexible Plans to Fit Your Needs</h1>
          </div>
          <div className={styles.planssectiongrid}>
            <div className={styles.plantypedetailsboxmain}>
              <div className={styles.palntimelinemain}>
                <div className={styles.palntimelinebuttons}>
                  <button type="button" className={styles.planbutton}>
                    <span>Monthly</span>
                  </button>
                  <button type="button" className={styles.planbuttonblank}>
                    <span>Yearly</span>
                  </button>
                </div>
              </div>
              <div className={styles.slectedplandetails}>
                <h5>Features</h5>
                <div className={styles.slectedplandetailsflxverticle}>
                  <div className={styles.slectedplandetailsgrd}>
                    <Falseicon />
                    <p>Unlock the Full Pro Experience</p>
                  </div>
                  <div className={styles.slectedplandetailsgrd}>
                    <Trueicon />
                    <p>Analyze up to <span>1,00,000</span> words for AI detection</p>
                  </div>
                  <div className={styles.slectedplandetailsgrd}>
                    <Falseicon />
                    <p>file upload checks included</p>
                  </div>
                  <div className={styles.slectedplandetailsgrd}>
                    <Falseicon />
                    <p>Generate detailed PDF reports for your AI detections</p>
                  </div>
                  <div className={styles.slectedplandetailsgrd}>
                    <Trueicon />
                    <p>Access the complete history of all your AI Detection</p>
                  </div>
                  <div className={styles.slectedplandetailsgrd}>
                    <Trueicon />
                    <p>Transform up to <span>15,00</span> words with the AI Humanizer</p>
                  </div>
                  <div className={styles.slectedplandetailsgrd}>
                    <Trueicon />
                    <p>Upgrade plan at anytime</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.plantypeveticleflx}>
              <div className={styles.plantypeboxactive}>
                <div className={styles.plantypeboxandprice}>
                  <div className={styles.planname}>
                    <div className={styles.cuscheckbox}></div>
                    <p>Free</p>
                  </div>
                  <div className={styles.plantypeboxprice}>
                    <h6>$0</h6>
                    <span>/Unlimited</span>
                  </div>
                </div>
                <button type="button" className={styles.planbutton}>
                  <span>Choose Plan</span>
                </button>
              </div>
              <div className={styles.plantypebox}>
                <div className={styles.plantypeboxandprice}>
                  <div className={styles.planname}>
                    <div className={styles.cuscheckbox}></div>
                    <p>Pro</p>
                  </div>
                  <div className={styles.plantypeboxprice}>
                    <h6>$4.49</h6>
                    <span>/monthly</span>
                  </div>
                </div>
                <button type="button" className={styles.planbutton}>
                  <span>Choose Plan</span>
                </button>
              </div>
              <div className={styles.plantypebox}>
                <div className={styles.plantypeboxandprice}>
                  <div className={styles.planname}>
                    <div className={styles.cuscheckbox}></div>
                    <p>Max</p>
                  </div>
                  <div className={styles.plantypeboxprice}>
                    <h6>$5.99</h6>
                    <span>/monthly</span>
                  </div>
                </div>
                <button type="button" className={styles.planbutton}>
                  <span>Choose Plan</span>
                </button>
              </div>
              <div className={styles.plantypebox}>
                <div className={styles.plantypeboxandprice}>
                  <div className={styles.planname}>
                    <div className={styles.cuscheckbox}></div>
                    <p>Lifetime</p>
                  </div>
                  <div className={styles.plantypeboxprice}>
                    <h6>$99.99</h6>
                    <span>/lifetime</span>
                  </div>
                </div>
                <button type="button" className={styles.planbutton}>
                  <span>Choose Plan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
