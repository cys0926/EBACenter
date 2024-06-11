import React from "react";
import CenterLeaderInfo from "../../src/components/info/CenterLeaderInfo";
import CenterLeaderCareer from "../../src/components/info/CenterLeaderCareer";
import HorizontalRule from "../../src/components/common/HorizontalRule";
import CenterLeaderEducation from "../../src/components/info/CenterLeaderEducation";
import HeadMeta from "../../src/components/common/Layout/HeadMeta";
import ViceCenterLeaderInfo from "../../src/components/info/ViceCenterLeaderInfo";
import ViceCenterLeaderCareer from "../../src/components/info/ViceCenterLeaderCareer";
import ViceCenterLeaderEducation from "../../src/components/info/ViceCenterLeaderEducation";

function Center_info() {
  return (
    <div>
      <HeadMeta title={"EBA | 센터장 소개"} description={"EBA센터장 소개"} />
      <CenterLeaderInfo />
      <CenterLeaderCareer />
      <HorizontalRule />
      <CenterLeaderEducation />
      <ViceCenterLeaderInfo />
      <ViceCenterLeaderCareer />
      <HorizontalRule />
      <ViceCenterLeaderEducation />
    </div>
  );
}

export default Center_info;
