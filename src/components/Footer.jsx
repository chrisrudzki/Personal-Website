

export default function Footer(){


    return(
        <>
        <div class="footer">

        <div className="footer-inner">

        <img 
                //className="zoom-image"
                key="linked"
                src="/Photos/linkedin.png"
                alt={`linkedin`}
                style={{ width: "40px" }}
                //style={{ aspect-ratio: "4/3" }, { width: 300px; }}
              />

         <img 
                //className="zoom-image"
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
