"use client"
import styles from "./header.module.scss";
import Logo from "./../../../assets/icons/logo";
import Link from "next/link";
import CommonButton from "@/app/components/commonbutton/button";
import Commonbuttonsecond from "@/app/components/commonbuttonsecond/commonbuttonsecond";
import Menuicon from './../../../assets/icons/menuicon';
import Sidebar from "../sidebar";
import { useState } from "react";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className={styles.headermain}>
        <div className="container">
          <div className={styles.headerflx}>
            <div className={styles.headerlogo}>
              <Link href={"/"}>
                <Logo />
              </Link>
            </div>
            <div className={styles.headerlinksmain}>
              <Link href={"/"} className={styles.linkactive}>Home</Link>
              <Link href={"/"}>Humanize</Link>
              <Link href={"/"}>Pricing</Link>
              <Link href={"/"}>Blog</Link>
              <Link href={"/"}>Contact Us</Link>
            </div>
            <div className={styles.headerbuttons}>
              <CommonButton Text="Sign In" Icon="" buttonslim=""/>
              <Commonbuttonsecond Text="Log In" Icon="" buttonslim=""/>
            </div>
            <div
              className={styles.headermenuicon}
              onClick={toggleSidebar}
            >
              <Menuicon />
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
