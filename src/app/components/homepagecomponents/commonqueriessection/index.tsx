"use client"
import React, { useState } from "react";
import styles from "./commonqueriessection.module.scss";
import commonqueriesimage from "@/assets/image/commonqueriesimage.png";
import Image from "next/image";
import Plusicon from "./../../../../assets/icons/plusicon";

const faqs = [
  {
    question: "How accurate is the AI detection?",
    answer:
      "Our tool uses advanced algorithms trained on the latest AI models, providing over 95% accuracy in identifying AI-generated content.",
  },
  {
    question: "Can your tool detect AI content in multiple languages?",
    answer:
      "Yes, our tool supports detection in several major languages with high accuracy.",
  },
  {
    question: "How long does it take to analyze content?",
    answer: "Most content is analyzed in under 10 seconds.",
  },
  {
    question: "Is my data safe and private?",
    answer:
      "Absolutely. We prioritize your privacy and use industry-standard encryption for all data handling.",
  },
];

export default function Commonqueriessection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className={styles.commonqueriessectionmain}>
      <div className="container">
        <div className={styles.commonqueriessection}>
          <div className={styles.commonqueriessectiontitle}>
            <h1>Your common queries answered with additional FAQs</h1>
            <p>
              Get the insights you need to make the most of our platform’s
              features and capabilities.
            </p>
          </div>
          <div className={styles.commonqueriessectionflx}>
            <div className={styles.commonquerisfaqmain}>
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={index}
                    className={`${styles.faqitem} ${isActive ? styles.active : ""}`}
                  >
                    <div
                      className={`${styles.commonquerisfaqbox}`}
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className={styles.faqtitle}>
                        <p>{faq.question}</p>
                      </div>
                      <div className={styles.commonplusicon}>
                        <Plusicon />
                      </div>
                    </div>
                    <div className={styles.commonquerisfaqmessage}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
              <Image
                src={commonqueriesimage}
                alt="commonqueriesimage"
                className={styles.commonqueriessectionflximage}
                width={1000}
                height={1000}
              />
          </div>
        </div>
      </div>
    </div>
  );
}
