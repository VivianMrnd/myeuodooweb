import logo from "../assets/logo/Euodoo.png"
function header (){
 
    return(
        <div className="head">

            <nav class="navigation fixed-top fw-bold text  navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#home">
                        <img src={logo}  height="35px" width="100px" alt="euodoo logo"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" justify-content-end collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#home">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#aboutus">OUR PROFILE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">SERVICES</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MORE
                                </a>
                                <ul class="dropdown-menu ">
                                    <li><a className="dropdown-item" href="#">News and Updates</a></li>
                                    <li><a className="dropdown-item" href="#">Careers</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>




       

    )
}
export default header;