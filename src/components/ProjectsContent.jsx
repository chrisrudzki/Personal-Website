export default function ProjectsContent({ onDisplay }) {
  const disc_text = <p> Developed in Gadot using GD Script, Chicken Fun is an action shooter inspired by zombie horde zombie games. You play as a lonesome boy who has been suddenly attacked by ducks. How long can you last? </p>;
  
  const disc_text_2 = <p> Enemy design

Yellow ducks are designed with popular bird like flocking algorithm by Creig Ryenolds. Their position is determined by the centre of mass collision avoidance, and velocity of nearby birds along with direction towards the player. This enemy tracking allows for dynamic player navigation between clumps of enemies when many are closely chasing. Spawn locations are limited to 2 and rotate between 9 around the island to promote clumping. 

A map with separate areas between barriers would increase dynamic navigation at cost to the game's simplicity.

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
          
            <h2>features</h2>
            
            <ul>
                
                <li>3 unique wepons</li>
                <li>3 unique enemies</li>
                <li>currenty system with weapeon upgrade tree</li>
                <li>intellegent enemy flocking</li>

                {disc_text_2}



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
