import { useState } from "react";

export default function AboutContent({ onDisplay }) {
  
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const [form, setForm] = useState({ email: "", subject: "", message: "" });

  const handleChange = () => setForm({ email: email, subject: subject, body: body});

  const handleSubmit = async () => {
   const res = await fetch("/api/contact", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(form),
   });
   if (res.ok) alert("message sent");
   else alert("failed to send");
  };


  return (
    <>
    <div className="content-container-about">
       
       <div className="content-container-pfp">

              <img
                //className="zoom-image"
                key="pers"
                src="/Photos/PersonalPhoto1.png"
                alt={`personal photo`}
                style={{ width: "250px" }}
                //style={{ aspect-ratio: "4/3" }, { width: 300px; }}
              />
        </div>
    
    <div className="content-container-pfp">

    <div class="text-cont">
      <p>Hello, <br /> <br /> I'm Christopher Rudzki, a software developer studying Computer Science at the University of Victoria. <br /><br />   With expirence in fullstack development, algorithm design, game development, design and art I am open to new horizons and opportunities. <br /> <br /> Feel free to reach out. <br /> <br />  chrisrudzki7@gmail.com</p>
    </div>
   
    </div>

  </div>


    {/*
    <form onSubmit={handleSubmit}>
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
      </form>

      <button onClick={handleSubmit}>Submit</button>

    */}

    </>
  );
}