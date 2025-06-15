import TabButton from "./TabButton.jsx";
import { useState } from "react";

export default function Tabs({ onSelectTabs, curTab }) {
  if (curTab) {
    //PUT TAB CONTENT HERE !!
    //content = <div id="tab-content"></div>;
  }

  return (
    <>
      <div id="tabs">
        <TabButton
          isSelected={curTab === "Projects"}
          onClick={() => onSelectTabs("Projects")}
        >
          Projects
        </TabButton>
        <TabButton
          isSelected={curTab === "Art"}
          onClick={() => onSelectTabs("Art")}
        >
          Art
        </TabButton>
        <TabButton
          isSelected={curTab === "About"}
          onClick={() => onSelectTabs("About")}
        >
          About
        </TabButton>
      </div>
    </>
  );
}
