

export default function Footer(){


    return(
        <>
        <div className="footer">

        
        <img
                //className="zoom-image"
                key="pers"
                src="/Photos/linkedin.png"
                alt={`linkedin`}
                style={{ width: "25px" }}
                //style={{ aspect-ratio: "4/3" }, { width: 300px; }}
              />

         <img
                //className="zoom-image"
                key="pers"
                src="/Photos/github.png"
                alt={`github`}
                style={{ width: "25px" }}
                //style={{ aspect-ratio: "4/3" }, { width: 300px; }}
              />
        

        </div>
        </>

    );
}
