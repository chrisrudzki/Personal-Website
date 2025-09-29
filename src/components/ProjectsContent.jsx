export default function ProjectsContent({ onDisplay }) {
  const disc_text = <div style={{
              fontSize: "15px",
              marginTop: "2px",
              padding: "0px"
            }}> <p> Developed in Gadot using GD Script, Island Defender is a 2D action shooter inspired by zombie horde games. <br></br><br></br> The yellow ducks' pathfinding is implamented with Creig Ryenolds' boid flocking algorithm. Their position is determined by the centre of mass, collision avoidance, velocity of nearby birds. The enemy tracking allows for dynamic player navigation between clumps of enemies. Active spawn locations are limited and change periodically to promote clumping.  
 </p></div>;
  
  const disc_text_2 = <div style={{
              fontSize: "15px",
              marginTop: "2px",
              padding: "0px"
            }}> <p>

 Pathfinding is implamented with Creig Ryenolds' boid flocking algorithm. Position is determined by the centre of mass, collision avoidance, velocity of nearby birds. The enemy tracking allows for dynamic player navigation between clumps of enemies. Active spawn locations are limited and change periodically to promote clumping.  

</p> </div>
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
