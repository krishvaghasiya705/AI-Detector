import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import Linkedinicon from "./../../../assets/icons/linkedinicon";
import Facebookicon from "./../../../assets/icons/facebookicon";
import Instaicon from "./../../../assets/icons/instaicon";
import Twittericon from "./../../../assets/icons/twittericon";
import CommonButton from "./../../components/commonbutton/button";
import Logo from "@/assets/icons/logo";

export default function Footer() {
  return (
    <footer className={styles.footermain}>
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
        <div className={styles.footercontentmain}>
          <div className={styles.footercontentleft}>
            <Logo />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className={styles.footercontentright}>
            <div className={styles.footerlinksboxmain}>
                <p>Useful Links</p>
                <div className={styles.footerlinksflx}>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>Pricing</Link>
                    <Link href={"/"}>Blog</Link>
                    <Link href={"/"}>Contact Us</Link>
                </div>
            </div>
            <div className={styles.footerlinksboxmain}>
                <p>Company</p>
                <div className={styles.footerlinksflx}>
                    <Link href={"/"}>Sitemap</Link>
                    <Link href={"/"}>Privacy Policy</Link>
                    <Link href={"/"}>Terms & Condition</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footercopyrightlinemain}>
        <div className="container">
          <div className={styles.footercopyrightlineflx}>
            <p>Copyright AI Detector © 2024. All Rights Reserved</p>
            <div className={styles.footersocialmediaicons}>
              <a href="https://in.linkedin.com/">
                <div className={styles.footersocialmedialink}>
                  <Linkedinicon />
                </div>
              </a>
              <a href="https://www.facebook.com/">
                <div className={styles.footersocialmedialink}>
                  <Facebookicon />
                </div>
              </a>
              <a href="https://www.instagram.com/">
                <div className={styles.footersocialmedialink}>
                  <Instaicon />
                </div>
              </a>
              <a href="https://x.com/?lang=en">
                <div className={styles.footersocialmedialink}>
                  <Twittericon />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
