export default function ProjectsContent({ onDisplay }) {
  const disc_text = <div style={{
              fontSize: "15px",
              marginTop: "2px",
              padding: "0px"
            }}> <p> Developed in Gadot using GD Script, Island Defender is a 2D action shooter inspired by zombie horde games. <br></br><br></br> The yellow ducks' pathfinding is implamented with Creig Ryenolds' boid flocking algorithm. Their position is determined by the balance of centre of mass, collision avoidance, velocity of nearby birds. The enemy pathfinding allows for dynamic player navigation between clumps of enemies. Active spawn locations are limited and change periodically to further promote engadging gameplay.  
 </p></div>;
  
  const disc_text2 = <div style={{
              fontSize: "15px",
              marginTop: "2px",
              padding: "0px"
            }}> <p> Firmware to control and store the temperature of various components within a Formula 1 electric vehicle for the UVic Formula 1 Racing Team. <br></br><br></br>  ISOspi was implemented to send temperatures from various boards over a large distance to a central component (TMS). Temperatures were dynamically stored and updated within the TMS. CAN bus communication was implemented to transmit temperatures to various other subsystems of the vehicle. FreeRTOS real time operating system is used to ensure deterministic reliable communication.
 </p></div>;

  const video1 = document.getElementById("slide-1")
  
  const chickenFunPhotos = [
  "ChickenFunScreenshot1.png",
  "ChickenFunScreenshot2.png",
  "ChickenFunScreenshot3.png",
  "ChickenFunScreenshot4.png"
];

  return (
    <>
         <div class="content-container">
            <div class="proj-col">


            <h2>Temperature Regulation Software for Electric Vehicle</h2>

            <button 
            style={{fontWeight: "bold",
              fontSize: "17px",
              margin: "2px"

            }} class="repo-button" onClick={() => window.open('https://github.com/UVicFormulaMotorsport/EV26-TMS/tree/Chris-R-TMS', '_blank')}>
            GitHub repository
            </button>

            {disc_text2}

            <div class="parent">
            <img src="ProjPhotos/f1working.png" alt="working on f1 car" class="centerd-image" width="862"></img>

            </div>

            <div height="10px">

            </div>


            <h2>Island Defender</h2>

            <button 
            style={{fontWeight: "bold",
              fontSize: "17px",
              margin: "2px"


            }} class="repo-button" onClick={() => window.open('https://github.com/chrisrudzki/Chicken-Fun', '_blank')}>
            GitHub repository
            </button>

            {disc_text}


            <div class="parent">
            <video class="centerd-image" width="862" height="510" controls >
            <source src="/Videos/ChickenFunGameplay3.mp4" type="video/mp4" />
            </video> 
            </div>
          
            <h2>Features</h2>
            
            <ul>
                <li>3 weapons with upgrades</li>
                <li>3 enemies</li>
                <li>Currency system and shop</li>
                <li>Intellegent enemy flocking</li>
            </ul>
          
        <div class="gallery-row">
          {chickenFunPhotos.slice(0, 4).map((imgName, i) => (
            <div class="gallery-image">
              <img
                className="zoom-image"
                onClick={() => onDisplay(imgName)}
                key={i}
                src={`/ProjPhotos/${imgName}`}
                alt={`Image ${i}`}
                style={{ height: "200px" }, { width: "100%" }}
              />
            </div>
          ))}
        </div>

        
        </div>
    </div> 

    </>
  );
}
