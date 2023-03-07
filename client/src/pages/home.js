import milestone from "../assets/milestone/milestone.png"

const homepage = ()=>{
    return(
        <div className="">
            <section id="home">
                
            <div id="carouselExampleAutoplaying" class="milestonecarousel carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={milestone} class="d-block milestone w-100"  alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={milestone} class="d-block milestone w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
                {/* <div className="row">
                    <div className="col">
                        <h2>Building  Technologies, <br/>Inspiring Innovations.</h2>
                    </div>
                    <div className="col">
                        <div class="rounded">
                            <img src={milestone} class="img-fluid" alt="..."/>
                        </div>                    
                    </div>
                </div> */}
  
            </section>
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