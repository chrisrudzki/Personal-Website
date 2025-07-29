import { useState } from "react";

export default function AboutContent({ onDisplay }) {
  
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async () => {
    setSubmittedData({ email, password });
    try{
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Submitted:', email, password);
     
    } catch (error) {
      setErrorMessage("Wrong e-mail or password, try again");
      //console.("Failed:", error.code, error.message);
    }
  };

  return (
    <>
    <div className="content-container">
       
              <img
                className="zoom-image"
                key="pers"
                src="/Photos/PersonalPhoto.png"
                alt={`personal photo`}
                style={{ width: "300px" }}
                //style={{ aspect-ratio: "4/3" }, { width: 300px; }}
              />
    <div class="text-cont">
      <p>Hello, <br /> <br /> I'm Christopher Rudzki, a software developer currently based in Victoria, Canada. I am a Computer Science student at the University of Victoria. <br /><br />   With expirence in fullstack development, algorithm design, game development, graphics programming, design and art I am open to new horizons and opportunities. <br /> <br /> Please do not hesitate to reach out. <br /> <br /> <br /> <br />  chrisrudzki7@gmail.com</p>
      </div>
   </div>

    <div>Email</div>
    <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div>subject</div>
    <input
        type="text"
        placeholder="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <div>Body</div>
    <input
        type="text"
        placeholder="your message"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button onClick={handleSubmit}>Log in</button>







    </>
  );
}