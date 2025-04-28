"use client"
import React from "react";
import styles from "./sidebar.module.scss";
import Crossicon from "./../../../assets/icons/crossicon";
import Logo from "@/assets/icons/logo";
import Link from "next/link";
import CommonButton from "@/app/components/commonbutton/button";
import Commonbuttonsecond from "@/app/components/commonbuttonsecond/commonbuttonsecond";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={`${styles.sidebaroverlay} ${isOpen ? styles.show : ""}`}
        onClick={onClose}
      ></div>
      <aside className={`${styles.sidebarmain} ${isOpen ? styles.show : ""}`}>
        <div className={styles.sidebarhead}>
          <Link href={"/"} className={styles.sidebarlogo}>
            <Logo />
          </Link>
          <div className={styles.crossicon} onClick={onClose}>
            <Crossicon />
          </div>
        </div>
        <div className={styles.sidebarbody}>
          <div className={styles.sidebarlinksflxmain}>
            <div className={styles.sidebarlink}>
              <Link href={"/"}>Home</Link>
            </div>
            <div className={styles.sidebarlink}>
              <Link href={"/"}>Humanize</Link>
            </div>
            <div className={styles.sidebarlink}>
              <Link href={"/"}>Pricing</Link>
            </div>
            <div className={styles.sidebarlink}>
              <Link href={"/"}>Blog</Link>
            </div>
            <div className={styles.sidebarlink}>
              <Link href={"/"}>Contact Us</Link>
            </div>
          </div>
        </div>
        <div className={styles.sidebarfooter}>
          <CommonButton Text="Sign In" Icon="" />
          <Commonbuttonsecond Text="Log In" Icon="" />
        </div>
      </aside>
    </>
  );
}
