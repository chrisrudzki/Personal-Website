//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ArtContent from './components/ArtContent.jsx'
import AboutContent from './components/AboutContent.jsx'
import ProjectsContent from './components/ProjectsContent.jsx'
import Tabs from './components/Tabs.jsx'
import ComponentToRender from './components/ComponentToRender.jsx'

import { useState, useEffect } from "react";

export default function App() {
  const [curTab, setCurTab] = useState("Projects");

  const [curFullDisplay, setCurFullDisplay] = useState(null);

  const [curFullArtDisplay, setCurFullArtDisplay] = useState(null);
  const [curFullProjDisplay, setCurFullProjDisplay] = useState(null);

  function handleSelectTabs(selctedTopic) {
    setCurTab(selctedTopic);
  }

  const contentMap = {
    Art: ArtContent,
    About: AboutContent,
    Projects: ProjectsContent,
  };

  const ComponentToRender = contentMap[curTab];

  const displayArtImage = (
    <div className="overlay">
      <img
        className="fullscreen-image"
        onClick={() => { setCurFullDisplay(null), setCurFullArtDisplay(null)}}
        key={curFullArtDisplay}
        src={`/ArtPhotos/${curFullArtDisplay}`}
        alt={`Image ${curFullArtDisplay}`}
      />
    </div>
  );

   const displayProjImage = (
    <div className="overlay">
      <img
        className="fullscreen-image"
        onClick={() => {setCurFullDisplay(null), setCurFullProjDisplay(null)}}
        key={curFullProjDisplay}
        src={`/ProjPhotos/${curFullProjDisplay}`}
        alt={`Image ${curFullProjDisplay}`}
      />
    </div>
  );

  useEffect(() => {
    console.log("change eff")
  if (curFullDisplay !== null) {
    if (curFullDisplay.slice(0, 3) === "Art") {
      setCurFullArtDisplay(curFullDisplay);
      setCurFullProjDisplay(null);
    } else if (curFullDisplay.slice(0, 3) === "Chi") {
      setCurFullProjDisplay(curFullDisplay);
      setCurFullArtDisplay(null);
    }
  } else {
    setCurFullArtDisplay(null);
    setCurFullProjDisplay(null);
  }
}, [curFullDisplay]);

  return (
    <>
    <div className="App">
      {curFullArtDisplay ? displayArtImage : undefined}
      {curFullProjDisplay ? displayProjImage : undefined}
    
      <div className="leftSide">
        <h1>
          Christopher <br /> Rudzki
        </h1>
        <Tabs onSelectTabs={handleSelectTabs} curTab={curTab}></Tabs>
      </div>
      {ComponentToRender ? (
       <ComponentToRender onDisplay={setCurFullDisplay}></ComponentToRender>
      ) : (
        <p>No content</p>
      )}
    </div>

    </>
  );


}
