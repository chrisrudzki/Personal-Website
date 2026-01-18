

export default function Footer(){


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
              />

        </div>

        <div className="footer-inner">

         <img 
                onClick={() => window.open('https://github.com/chrisrudzki', '_blank')}
                key="git"
                src="/Photos/github.svg"
                alt={`github`}
                style={{ width: "60px" }}
              />


        </div>
        
        </div>
        </>

    );
}
