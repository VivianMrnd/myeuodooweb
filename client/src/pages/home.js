
import bus from "../assets/headerpic/bus.png";
import computer from "../assets/headerpic/computer.png";
import building from "../assets/headerpic/building.png";
import s2018 from "../assets/milestone/services/s2018.png";
import s2019 from "../assets/milestone/services/s2019.png";
import s2020 from "../assets/milestone/services/s2020.png";
import s2021 from "../assets/milestone/services/s2021.png";
import s2022 from "../assets/milestone/services/s2022.png";
import s2023 from "../assets/milestone/services/s2023.png";
import strategy from "../assets/whatwedo/howitstarted.png";
import jeepney from "../assets/news/launching/pm_jeepney_launching1.jpg";
import fb from "../assets/news/videos/NewsLive.mp4";
import euodoonews from "../assets/news/videos/NewsVid.mp4";
import jeep from "../assets/home/modern_jeep.png";
import bridge from "../assets/home/bridge.png";




const homepage = ()=>{
    return(
        <div className="">
            <section id="home" className=" header-bg">
                   
                <div className="headerpictures">
                    <img id="bus" src={bus}  alt="bus"/>
                    <img id="building" classNam="" src={building}  alt="building"/>
                    <img id="computer" src={computer}  alt="computer"/>
                </div>


                <div className="hometext text-center" >
                    <h3 className="text-uppercase buildingtech">Building  Technologies, <br/>Inspiring Innovations.</h3>
                    <p className="lh-base fw-semibold hometextp">
                        euodoó Technologies, Inc. way of providing service is anchored to excellence, innovation, and
                        commitment to its potential and existing clientele, thus nurturing long-standing business 
                        relationships. </p>
                    <br/>
                    {/* <button type="button" className="fw-bold letsgo">Let's go</button> */}
                </div>
            </section>
            <section className="milestone">
                <div className="row p-0 m-0 float-end">
                    <div className="col">
                        <h1 className="milestonetext">Our Milestones</h1>
                    </div>
                    <div className="col">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img id="s2018" src={s2018}  alt="s2018"/>  
                                </div>
                                <div className="carousel-item">
                                    <img id="s2018" src={s2019}  alt="s2019"/>  
                                </div>
                                <div className="carousel-item">
                                    <img id="s2018" src={s2020}  alt="s2020"/>  
                                </div>
                                <div className="carousel-item">
                                    <img id="s2018" src={s2021}  alt="s2021"/>  
                                </div>
                                <div className="carousel-item">
                                    <img id="s2018" src={s2022}  alt="s2022"/>  
                                </div>
                                <div className="carousel-item">
                                    <img id="s2018" src={s2023}  alt="s2023"/>  
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                
            </section>
            <section className="" id="aboutus">
                <div className=" mx-5 ourcompany ">          
                        <h2 className=" text-uppercase companyproftext text-center ">Our Company Profile</h2>
                            <div className="card rounded-pill aboutuscard">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={strategy} className="img-fluid rounded-start py-5 px-2" alt="euodoo"/>
                                    </div>
                                    <div className="col-md-8 ">
                                        <div className="card-body">
                                            <h3 className="text-uppercase card-title howitall">How It All Started</h3>
                                            <p class="card-text textaboutus">
                                            <b>
                                                euodoó Technologies, inc. is an outcome of more than fifteen (15) years of 
                                                extensive experience within the Information Technology (IT) Solutions and 
                                                Services industry. Formerly Innovare Tekhne, the spin-off company now carries 
                                                the Systems Integrator (SI) products and services while Innovare will focus on 
                                                IT-managed services. </b>
                                            </p>
                                            <p className="textaboutus">
                                                <b>
                                                The firm provides comprehensive IT Solutions focusing on areas such as 
                                                Enterprise Content Management (ECM), Enterprise Resource Planning (ERP), Governance, 
                                                Risk Management and Compliance (GRC), Anti-Money Laundering (AML) system, Integrated Cloud 
                                                School Management system, Human Resource Information System (HRIS), Automated Bus Ticketing 
                                                System (ABTS), customized software development and outsourced IT solutions and services, 
                                                both in public and private entities. </b>
                                            </p>
                                            <button type="button" className="btn seemorebtn"><b>See More</b></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                              
                </div>
                <div class="area" >
                        <ul class="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                        </ul>
                </div >
            </section>
            <section id="featured">
                <div className="text-center titlefeature">
                    <h2 className=" text-uppercase">All in a day's work at Euodoo Tech</h2>
                    <p className=" findout"><b>Find out more of the latest news and updates, all powered by euodoó Tech.</b></p>
                    <button type="button" className="btn readmorebtn"><b>Read More</b></button>
                </div>
                <div className="row  cardsfeatured">
                    <div className="col-sm-4 pt-4">
                        <div className="featuredcard card">
                            <img src={jeepney} className="card-img-top capfeatured" alt="..."/>
                            <div className="card-body">
                                <h6 className="card-title">PM Jeepney launching</h6>
                                <button type="button" className="btn seemorebtn"><b>See More</b></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 pt-4">
                        <div className="featuredcard card">
                            <video src={fb} className="capfeatured" controls autoplay loop muted></video>
                            <div className="card-body">
                                <h6 className="card-title">Facebook live by Jacque Manabat</h6>
                                <button type="button" className="btn seemorebtn"><b>See More</b></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 pt-4">
                        <div className="featuredcard card">
                            <video src={euodoonews} className="capfeatured" controls autoplay loop></video>
                            <div className="card-body">
                                <h6 className="card-title">euodoó featured in News Articles</h6>
                                <button type="button" className="btn seemorebtn"><b>See More</b></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="logoservices">
              
                <img src={jeep} className="jeep"  alt="jeep"/>
                <div className="contentservices">
                    <h4 className="text-center">We are greatful to work with various organizations and business</h4>
                    <p className="text-center textnote">At euodoo Technologies, Inc., we believe that your IT requirements should
                        be supported by experienced professionals, and offer a variety of services to cater
                        to your organization’s needs.</p>
                </div>
                
            </section>
            <section id="logoservicespart">
                LOGO PARTNER

                cvent
            </section>
            <section id="services">
                WHAT WE OFFER
            </section>
            <section id="readmore">
                readmore
            </section>
        </div>
        
    )
}

export default homepage;