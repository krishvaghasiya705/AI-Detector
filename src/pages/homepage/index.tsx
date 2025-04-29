import Herobanner from "@/app/components/homepagecomponents/herobanner";
import Detctaisection from "@/app/components/homepagecomponents/detectaisection";
import Powerfullsection from "@/app/components/homepagecomponents/powerfullsection";
import Whychoosesection from "@/app/components/homepagecomponents/whychoosesection";
import Whocansection from "@/app/components/homepagecomponents/whocansection";
import Trustedexpertsection from "@/app/components/homepagecomponents/trustedexpertsection";
import Planssection from "@/app/components/homepagecomponents/planssection";
import Commonqueriessection from "@/app/components/homepagecomponents/commonqueriessection";
import Regularupdatesection from "@/app/components/homepagecomponents/regularupdatesection";
import Subsnewlatter from "@/app/components/homepagecomponents/subscribenewslatter";

export default function Home() {
  return (
    <>
      <Herobanner />
      <Detctaisection />
      <Powerfullsection />
      <Whychoosesection />
      <Whocansection />
      <Trustedexpertsection />
      <Planssection />
      <Commonqueriessection />
      <Regularupdatesection />
      <Subsnewlatter />
    </>
  );
}
