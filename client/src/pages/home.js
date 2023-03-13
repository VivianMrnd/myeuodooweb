
import header from "../assets/headerpic/header.png";
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
import clients from "../components/db";



const homepage = ()=>{
    return(
        <div className="">
            <section id="home" className=" header-bg">
           {/* lh-base fw-semibold */}
              <div className="hometext text-center" >
                    <h3 className="text-uppercase buildingtech">Building  Technologies, <br/>Inspiring Innovations.</h3>
                    <p className="mx-5  fs-5 hometextp">
                        euodoó Technologies, Inc. way of providing service is anchored to excellence, innovation, and
                        commitment to its potential and existing clientele, thus nurturing long-standing business 
                        relationships. </p>
               
                    <h3 className="text-uppercase mb-4 buildingtech">our milestones</h3>
                    <div class="p-0 m-0 text-center">
                        <div class="row">
                            <div class="col"><img src={s2018} class="img-fluid " alt="s2018"/></div>
                            <div class="col"><img src={s2019} class="img-fluid " alt="s2019"/></div>
                            <div class="col"><img src={s2020} class="img-fluid " alt="s2020"/></div>
                            <div class="col"><img src={s2021} class="img-fluid " alt="s2021"/></div>
                            <div class="col"><img src={s2022} class="img-fluid " alt="s2022"/></div>
                            <div class="col"><img src={s2023} class="img-fluid " alt="2023"/></div>
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
                </div>
            </section>

            <section className="" id="aboutus"> 
            
                <div className=" mx-5  ">   
                    <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={strategy} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div> 
                </div>      
                    {/* <h2 className=" text-uppercase buildingtech">Our Company Profile</h2>
                    <div className="card rounded-pill aboutuscard">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={strategy} className="img-fluid rounded-start py-5 px-2" alt="euodoo"/>
                            </div>
                            <div className=" col-md-8 px-5 w-50 pt-5">
                                <div className="aboutuscontent card-body">
                                    <h3 className="textaboutus text-uppercase card-title">How It All Started</h3>
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
                                    <button type="button" className="btn aboutusbtn"><b>See More</b></button>
                                </div>
                            </div>
                        </div> 
                    </div>    */}      
                </div>
            </section>
            <section id="featured">
               
            </section>
            <section id="client">
              

            </section>
            <section id="partner">
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