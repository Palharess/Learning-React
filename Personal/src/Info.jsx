import logo from "./assets/file.png"

function Info(){
    return(
        <div className="info-div">
            <img src={logo} className="profile-img"></img>
            <h1 className="info-h1">Gabriel Palhares</h1>
            <h4 className="info-h4" id="title">Full Stack Developer</h4>
            <h5 className="info-h5"> Personal Site</h5>
            <div className="b-div">
                <a href="https://www.linkedin.com/in/gabriel-palhares-93b67b271/"><button className="button" id="linkedin"><i class="fa-brands fa-linkedin"></i> Linkedin</button></a>
                <a href="mailto:palhares@discente.ufg.br"><button className="button" id="instagram"><i class="fa-solid fa-envelope"></i> Email</button></a>
            </div>

        </div>
    );
}

export default Info