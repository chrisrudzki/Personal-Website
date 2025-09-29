

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
                src="/Photos/linkedin.svg"
                alt={`linkedin`}
                style={{ width: "60px" }}
                //style={{ aspect-ratio: "4/3" }, { width: 300px; }}
              />

        </div>

        <div className="footer-inner">

         <img 
                onClick={() => window.open('https://github.com/', '_blank')}
                key="git"
                src="/Photos/github.svg"
                alt={`github`}
                style={{ width: "60px" }}
                //style={{ aspect-ratio: "4/3" }, { width: 300px; }}
              />


        </div>
        
        </div>
        </>

    );
}
