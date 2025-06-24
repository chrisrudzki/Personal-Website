export default function ProjectsContent({ onDisplay }) {
  const disc_text = <p> Developed in Gadot using GD Script, Chicken Fun is an action shooter inspired by zombie horde zombie games. You play as a lonesome boy who has been suddenly attacked by ducks. How long can you last? </p>;
  
  const disc_text_2 = <p>   I dedicated most of my time in this project to explore enemy behavior. 

The yellow ducks are designed with Creig Ryenolds popular boid flocking algorithm. Their position is determined by the centre of mass, collision avoidance, and velocity of nearby birds along along their path towards the player. This enemy tracking allows for dynamic player navigation between clumps of enemies when many are closely chasing. Active spawn locations are limited to 2 of 9 at a time to promote clumping.  

A alternateive map with separate areas between barriers or walls would further enphsize this at cost to the game's simplicity. 

</p>

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
            <h2>Chicken Fun</h2>

            <button class="repo-button" onClick={() => window.open('https://github.com/chrisrudzki/Chicken-Fun', '_blank')}>
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
                
                <li>Three unique wepons</li>
                <li>Three unique enemies</li>
                <li>Currency system with weapon upgrade tree</li>
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


        <h2>Note on ememy behavior</h2>

        {disc_text_2}


        </div>
    </div> 



    </>
  );
}
