import milestone from "../assets/milestone/chopchop/ourmilestone.png";
import m2018 from "../assets/milestone/chopchop/2018.png";
import m2019 from "../assets/milestone/chopchop/2019.png";
import m2020 from "../assets/milestone/chopchop/2020.png";
import m2021 from "../assets/milestone/chopchop/2021.png";
import m2022 from "../assets/milestone/chopchop/2022.png";
import m2023 from "../assets/milestone/chopchop/2023.png";


const homepage = ()=>{
    return(
        <div className="">
            <section id="home">
               
                <div className="col header-bg">
                    <div className="hometext badge text-wrap" >
                        <h2 className="text-uppercase">Building  Technologies, <br/>Inspiring Innovations.</h2>
                        <p className="font-monospace fs-6 fw-normal">
                            Our mission is to provide exceptional services and expert 
                            consultation to help businesses of all sizes thrive in the 
                            rapidly evolving world of technology. From software development 
                            and web design to data analytics and cybersecurity, we have the 
                            expertise and experience to deliver top-notch services that drive 
                            results. Wanna start this journey with us? <br/>
                            <button type="button" className="mt-3 btn btn-outline-dark">Let's go</button>
                        </p>
                        
                    </div>
                </div>
                            
            </section>
            {/* <section className=" milestone container">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="Slide 2" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="Slide 4" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={m2018} className=" rounded-circle d-block milestone w-50"  alt="2018"/>
                        </div>
                        <div className="carousel-item">
                            <img src={m2019} className=" rounded-circle d-block milestone w-50"  alt="2019"/>
                        </div>
                        <div className="carousel-item">
                            <img src={m2020} className="rounded-circle d-block milestone w-50"  alt="2020"/>
                        </div>
                        <div class="carousel-item">
                            <img src={m2021} className="rounded-circle d-block milestone w-50"   alt="2021"/>
                        </div>
                        <div class="carousel-item">
                            <img src={m2022} className="rounded-circle d-block milestone w-50"   alt="2022"/>
                        </div>
                        <div class="carousel-item">
                            <img src={m2023} className="rounded-circle d-block milestone w-50"   alt="2023"/>
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
            </section>     */}
            <section className="pt-20" id="aboutus">
                OUR COMPANY PROFILE
            </section>
            <section id="featured">
                All in a day's work at Euodoo Tech
            </section>
            <section id="logoservices">
                LOGO
            </section>
            <section id="logoservicespart">
                LOGO PARTNER
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