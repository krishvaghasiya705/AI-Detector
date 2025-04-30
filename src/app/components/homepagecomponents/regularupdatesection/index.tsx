import React from "react";
import style from "./regularupdatesection.module.scss";
import Cardimage1 from "@/assets/image/cardimage1.png";
import Cardimage2 from "@/assets/image/cardimage2.png";
import Cardimage3 from "@/assets/image/cardimage3.png";
import Image from "next/image";
import Link from "next/link";

export default function Regularupdatesection() {
  return (
    <div className={style.regularupdatesectionmain}>
      <div className="container">
        <div className={style.regularupdatesection}>
          <div className={style.regularupdatesectiontitle}>
            <h1>Our Regular Update Blog and media </h1>
          </div>
          <div className={style.regularupdatesectioncardsgrd}>
              <div className={style.regularupdatecard}>
                  <Image
                    className={style.regularupdatecardimage}
                    src={Cardimage1}
                    alt="Cardimage1"
                    width={1000}
                    height={1000}
                  />
                <div className={style.regularupdatecardcontent}>
                  <div className={style.regularupdatecardnameanddate}>
                    <p>Kevin Gohil</p>
                    <span>Nov 06, 2024</span>
                  </div>
                  <div className={style.regularupdatecardparagraph}>
                    <p>Is it possible for teachers to detect chatgpt?</p>
                  </div>
                  <span className={style.readmorelink}>Read More</span>
                </div>
              </div>
              <div className={style.regularupdatecard}>
                  <Image
                    className={style.regularupdatecardimage}
                    src={Cardimage2}
                    alt="Cardimage2"
                    width={1000}
                    height={1000}
                  />
                <div className={style.regularupdatecardcontent}>
                  <div className={style.regularupdatecardnameanddate}>
                    <p>Kevin Gohil</p>
                    <span>Nov 06, 2024</span>
                  </div>
                  <div className={style.regularupdatecardparagraph}>
                    <p>How to Detect AI Writing - Write like a human</p>
                  </div>
                  <span className={style.readmorelink}>Read More</span>
                </div>
              </div>
              <div className={style.regularupdatecard}>
                  <Image
                    className={style.regularupdatecardimage}
                    src={Cardimage3}
                    alt="Cardimage3"
                    width={1000}
                    height={1000}
                  />
                <div className={style.regularupdatecardcontent}>
                  <div className={style.regularupdatecardnameanddate}>
                    <p>Kevin Gohil</p>
                    <span>Nov 06, 2024</span>
                  </div>
                  <div className={style.regularupdatecardparagraph}>
                    <p>AI Content Detection: How does it work?</p>
                  </div>
                  <span className={style.readmorelink}>Read More</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
