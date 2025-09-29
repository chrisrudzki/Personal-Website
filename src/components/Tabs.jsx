import TabButton from "./TabButton.jsx";
import { useState } from "react";
import '../App.css'

export default function Tabs({ onSelectTabs, curTab }) {
  if (curTab) {
    //PUT TAB CONTENT HERE !!
    //content = <div id="tab-content"></div>;
  }

  return (
    <>
      <div className="tabs">
        <TabButton className="top-button"
          isSelected={curTab === "Projects"}
          onClick={() => onSelectTabs("Projects")}
        >
          Projects
        </TabButton>

        <TabButton className="top-button"
          isSelected={curTab === "Art"}
          onClick={() => onSelectTabs("Art")}
        >
          Drawings
        </TabButton>

        {/* <TabButton className="side-button" */}
        <TabButton className="top-button"
          isSelected={curTab === "About"}
          onClick={() => onSelectTabs("About")}
        >
          About
        </TabButton>
      </div>
    </>
  );
}
