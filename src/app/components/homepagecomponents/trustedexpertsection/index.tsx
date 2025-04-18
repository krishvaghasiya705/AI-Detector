import React from "react";
import styles from "./trustedexpertsection.module.scss";
import Marquee from "react-fast-marquee";
import Quetsicon from "./../../../../assets/icons/quetsicon";
import Image from "next/image";
import Kevingohilprofile from "@/assets/image/kevingohilimage.png";
import Staricon from "./../../../../assets/icons/staricon";

export default function Trustedexpertsection() {
  return (
    <div className={styles.trustedexpertsectionmain}>
      <div className="container">
        <div className={styles.trustedexpertsectiontitle}>
          <h1>Trusted by Experts and Organizations Worldwide</h1>
        </div>
      </div>
      <Marquee>
        <div className={styles.trustedexpertcard}>
          <div className={styles.trustedexpertcardprofile}>
            <div className={styles.trustedexpertcardprofileimage}>
              <Image src={Kevingohilprofile} alt="Kevingohil" />
            </div>
            <div className={styles.profileratingandname}>
              <h5>Kevin Gohil</h5>
              <div className={styles.ratingstar}>
                <Staricon />
                <Staricon />
                <Staricon />
                <Staricon />
                <Staricon />
              </div>
            </div>
          </div>
          <div className={styles.trustedexpertcardchat}>
            <Quetsicon />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className={styles.trustedexpertcard}>
          <div className={styles.trustedexpertcardprofile}>
            <div className={styles.trustedexpertcardprofileimage}>
              <Image src={Kevingohilprofile} alt="Kevingohil" />
            </div>
            <div className={styles.profileratingandname}>
              <h5>Kevin Gohil</h5>
              <div className={styles.ratingstar}>
                <Staricon />
                <Staricon />
                <Staricon />
                <Staricon />
                <Staricon />
              </div>
            </div>
          </div>
          <div className={styles.trustedexpertcardchat}>
            <Quetsicon />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className={styles.trustedexpertcard}>
          <div className={styles.trustedexpertcardprofile}>
            <div className={styles.trustedexpertcardprofileimage}>
              <Image src={Kevingohilprofile} alt="Kevingohil" />
            </div>
            <div className={styles.profileratingandname}>
              <h5>Kevin Gohil</h5>
              <div className={styles.ratingstar}>
                <Staricon />
                <Staricon />
                <Staricon />
                <Staricon />
                <Staricon />
              </div>
            </div>
          </div>
          <div className={styles.trustedexpertcardchat}>
            <Quetsicon />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className={styles.trustedexpertcard}>
          <div className={styles.trustedexpertcardprofile}>
            <div className={styles.trustedexpertcardprofileimage}>
              <Image src={Kevingohilprofile} alt="Kevingohil" />
            </div>
            <div className={styles.profileratingandname}>
              <h5>Kevin Gohil</h5>
              <div className={styles.ratingstar}>
                <Staricon />
                <Staricon />
                <Staricon />
                <Staricon />
                <Staricon />
              </div>
            </div>
          </div>
          <div className={styles.trustedexpertcardchat}>
            <Quetsicon />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className={styles.trustedexpertcard}>
          <div className={styles.trustedexpertcardprofile}>
            <div className={styles.trustedexpertcardprofileimage}>
              <Image src={Kevingohilprofile} alt="Kevingohil" />
            </div>
            <div className={styles.profileratingandname}>
              <h5>Kevin Gohil</h5>
              <div className={styles.ratingstar}>
                <Staricon />
                <Staricon />
                <Staricon />
                <Staricon />
                <Staricon />
              </div>
            </div>
          </div>
          <div className={styles.trustedexpertcardchat}>
            <Quetsicon />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
}
