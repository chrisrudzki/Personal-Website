

export default function Footer(){


    // const hitLinked = (
        
    // );

    return(
        <>
        <div class="footer">

        <div className="footer-inner">

        <img 
                onClick={() => window.open('https://www.linkedin.com/in/christopher-rudzki/', '_blank')}
                key="linked"
                src="/Photos/linkedin.png"
                alt={`linkedin`}
                style={{ width: "40px" }}
                //style={{ aspect-ratio: "4/3" }, { width: 300px; }}
              />

         <img 
                onClick={() => window.open('https://github.com/', '_blank')}
                key="git"
                src="/Photos/github.png"
                alt={`github`}
                style={{ width: "40px" }}
                //style={{ aspect-ratio: "4/3" }, { width: 300px; }}
              />


        </div>
        
        </div>
        </>

    );
}
