import logo from "../assets/logo/Euodoo.png"
function header (){
 
    return(
        <div className="head">
             <ul className="nav header fixed-top container d-flex mb-3 ">
                <a className="navbar-brand me-auto p-2">
                    <img src={logo} height="35px" width="100px" alt="euodoo logo"/>
                </a>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#home">HOME</a>  
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#aboutus">OUR PROFILE</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#services">SERVICES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">MORE</a>
                </li>

            </ul>

        </div>

    )
}
export default header;