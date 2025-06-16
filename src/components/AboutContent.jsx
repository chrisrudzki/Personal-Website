export default function AboutContent({ onDisplay }) {
  return (
    <>
    <div class="content-container">
        
              <img
                className="zoom-image"
                key="pers"
                src={`/Photos/PersonalPhoto.png`}
                alt={`personal photo`}
                style={{ aspectRatio: "4 / 3", width: "300px" }}
                //style={{ aspect-ratio: "4/3" }, { width: 300px; }}
              />
    <div class="text-cont">
      <p>Hello, <br /> <br /> I'm Christopher Rudzki, a software developer currently based in Victoria, Canada. I am a Computer Science and Visual Arts undergrad at the University of Victoria. <br /><br />   With expirence in fullstack development, algorithm, game development, design and art I am open to new horizons and any opportunities. <br /> <br /> In my free time I enjoy drawing and painting. <br /> <br /> Please do not hesitate to reach out. <br /> <br /> <br /> <br />  chrisrudzki7@gmail.com</p>
      </div>
   </div>
    </>
  );
}