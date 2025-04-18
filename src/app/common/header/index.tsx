import styles from "./header.module.scss";
import Logo from "./../../../assets/icons/logo";
import Link from "next/link";
import CommonButton from "@/app/components/commonbutton/button";
import Commonbuttonsecond from "@/app/components/commonbuttonsecond/commonbuttonsecond";

export default function Header() {
  return (
    <header className={styles.headermain}>
      <div className="container">
        <div className={styles.headerflx}>
          <div className={styles.headerlogo}>
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div className={styles.headerlinksmain}>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Humanize</Link>
            <Link href={"/"}>Pricing</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>Contact Us</Link>
          </div>
          <div className={styles.headerbuttons}>
            <CommonButton Text="Sign In" />
            <Commonbuttonsecond Text="Log In"/>
          </div>
        </div>
      </div>
    </header>
  );
}
