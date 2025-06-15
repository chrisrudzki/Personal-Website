export default function AboutContent({ onDisplay }) {
  return (
    <>
    <div class="content-container">
        
              <img
                className="zoom-image"
                key="pers"
                src={`/Photos/PersonalPhoto.png`}
                alt={`personal photo`}
                style={{ height: "5px" }, { width: "17%" }}
              />
    <div class="text-cont">
      <p>Hello, <br /> <br /> I'm Christopher Rudzki. I am a software developer currently baised in Victoria, Canada. I am in my 3rd year Computer Science and Visual Arts undergrad at the University of Victoria. <br /><br />   I am interested in fullstack development, game development, graphics programming, design and art. <br /> <br /> In my free time I enjoy drawing and painting. <br /> <br /> Please do not hesitate to reach out. <br /> <br /> <br /> <br />  chrisrudzki7@gmail.com</p>
      </div>
   </div>
    </>
  );
}