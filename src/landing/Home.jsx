

import banner from "../assets/images/banner.png"
import flat from "../assets/images/Flats.png"
import redbg from "../assets/images/Bg.png"
import eva from "../assets/images/eva202.png"
import sport from "../assets/images/sports.png"
import icon from "../assets/images/icon.png"
import arrow from "../assets/images/arrow.png"
import hawai from "../assets/images/Hawai.png"
import sandal from "../assets/images/Sandals.png"
import flips from "../assets/images/Flip Flops.png"
import kid from "../assets/images/kids.png"
import running from "../assets/images/running.png"
import sole from "../assets/images/pu sole.png"
import "./home.css"

import { AiOutlinePlus, AiFillStar ,AiFillCopyrightCircle} from 'react-icons/ai';


import { IoIosArrowDown } from 'react-icons/io';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {


    return (
     
        <>
        <main>
        <section className="banner mb-4">

<div className="container">
    <div className="banner_wrap">
        <img src={banner} className="w-100 mb-3" alt="not found" />


        <div className="category">
            <div className="top_cat d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0">Categories</h6>
                <span>See all</span>
            </div>

            <div className="bottom_cat">
                <div className="product_ul">
                    <ul >
                        <li><img src={hawai} alt="" /> <p className="mt-2">Hawai</p></li>
                        <li><img src={sandal} alt="" /> <p className="mt-2">Sandals</p></li>
                        <li><img src={flat} alt="" /> <p className="mt-2">Flats</p></li>
                        <li><img src={flips} alt="" /> <p className="mt-2">Flip Flops</p></li>
                    </ul>
                </div>
                <div className="product_ul">
                    <ul>
                        <li><img src={kid} alt="" /> <p className="mt-2">Kids</p></li>
                        <li><img src={running} alt="" /> <p className="mt-2">Running</p></li>
                        <li><img src={flat} alt="" /> <p className="mt-2">Hawai</p></li>
                        <li><img src={flat} alt="" /> <p className="mt-2">Hawai</p></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

<section className="getup mb-4 ">
<div className="container">
    <div className="wrap position-relative">
        <img className="w-100" src={redbg} alt="not found" />
        <h6>GET UP TO 50%  OFF</h6>
    </div>
</div>
</section>

<section className="arrival mb-4">
<div className="container">
    <div className="wrap_arrival">
        <div className="ul_tag mb-3">
            <ul className=" p-0 d-flex justify-content-between">
                <li>New Arrivals</li>
                <li>Trending</li>
                <li>Bestseller</li>
                <li>offer</li>
            </ul>
        </div>

        <div className="shops d-flex ">
            <div className="shop  position-relative">
                <img src={eva} className="w-100" alt="not found" />
                <span className="newtag">New</span>

                <div className="details px-3">
                    <p className="mb-0">Eva 202</p>
                    <p className="mb-1">Flip Flops</p>
                    <h6 className="d-flex justify-content-between mb-2">$299   <AiOutlinePlus /> </h6>
                </div>
            </div>
            <div className="shop  position-relative">
                <img src={sole} className="w-100" alt="not found" />
                <span className="newtag">New</span>

                <div className="details px-3">
                    <p className="mb-0">Eva 202</p>
                    <p className="mb-1">Flip Flops</p>
                    <h6 className="d-flex justify-content-between mb-2">$299   <AiOutlinePlus /> </h6>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

<section className="product_carousel mb-4">
<div className="container">
    <div className="wrap">
        <Carousel showArrows={false} showThumbs={false} showIndicators={false}>
            <div>
                <img src={sport} />

            </div>
            <div>
                <img src={sport} />

            </div>
            <div>
                <img src={sport} />

            </div>

        </Carousel>
    </div>
</div>
</section>

<section className="whats mb-4">
<div className="container">
    <div className="wrap_whats">
        <h1 className="mb-5">Whats Our  <br />Customer Say ?</h1>

        <Carousel showArrows={false} showThumbs={false} >

            <div className="d-flex ">
                <div className="review">
                    <div className="stars text-start mb-2">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>

                    <div className="para_review text-start mb-4">
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, impedit.</p>
                    </div>

                    <div className="face d-flex">
                        <img src={icon} alt="" />
                        <div className="name text-start ms-3">
                            <p className="mb-0">Kanika</p>
                            <p className="mb-0">Purchased Ciogs</p>
                        </div>
                    </div>
                </div>


                <div className="review">
                    <div className="stars text-start mb-2">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>

                    <div className="para_review text-start mb-4">
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, impedit.</p>
                    </div>

                    <div className="face d-flex">
                        <img src={icon} alt="" />
                        <div className="name text-start ms-3">
                            <p className="mb-0">Kanika</p>
                            <p className="mb-0">Purchased Ciogs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex ">
                <div className="review">
                    <div className="stars text-start mb-2">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>

                    <div className="para_review text-start mb-4">
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, impedit.</p>
                    </div>

                    <div className="face d-flex">
                        <img src={icon} alt="" />
                        <div className="name text-start ms-3">
                            <p className="mb-0">Kanika</p>
                            <p className="mb-0">Purchased Ciogs</p>
                        </div>
                    </div>
                </div>


                <div className="review">
                    <div className="stars text-start mb-2">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>

                    <div className="para_review text-start mb-4">
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, impedit.</p>
                    </div>

                    <div className="face d-flex">
                        <img src={icon} alt="" />
                        <div className="name text-start ms-3">
                            <p className="mb-0">Kanika</p>
                            <p className="mb-0">Purchased Ciogs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex ">
                <div className="review">
                    <div className="stars text-start mb-2">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>

                    <div className="para_review text-start mb-4">
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, impedit.</p>
                    </div>

                    <div className="face d-flex">
                        <img src={icon} alt="" />
                        <div className="name text-start ms-3">
                            <p className="mb-0">Kanika</p>
                            <p className="mb-0">Purchased Ciogs</p>
                        </div>
                    </div>
                </div>


                <div className="review">
                    <div className="stars text-start mb-2">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>

                    <div className="para_review text-start mb-4">
                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, impedit.</p>
                    </div>

                    <div className="face d-flex">
                        <img src={icon} alt="" />
                        <div className="name text-start ms-3">
                            <p className="mb-0">Kanika</p>
                            <p className="mb-0">Purchased Ciogs</p>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    </div>
</div>
</section>



<section className="last mb-5">       
    <div className="container">
        <div className="wrap_last">
            <div className="redbox">
                  <div className="">
                      <h5 className="mb-3">Aqualite</h5>
                    <div className="addres mb-4">
                    <p className="mb-0">A-1, 18A, Rohtak Rd, A1 Block</p>
                      <p className="mb-0">Paschim Vihar, Block A,</p>
                      <p className="mb-0">Paschim Vihar, Delhi, 110063</p>
                      <p className="mb-0">9020080026</p>
                      <p className="mb-0">help@aqualite</p>
                    </div>
                      

                      <div className="mb-2 position-relative arrow border_my">
                           <h5 className="mb-0">Categories</h5>
                           <IoIosArrowDown/>
                      </div>

                      <div className="mb-2 position-relative arrow border_my">
                           <h5 className="mb-0">Blogs</h5>
                           <IoIosArrowDown/>
                      </div>

                      <div className="mb-2 position-relative arrow border_my">
                           <h5 className="mb-0">Other</h5>
                           <IoIosArrowDown/>
                      </div>

                      <div className="news mb-4 position-relative arrow border_my">
                          <h5 className="mb-0">Newsletter</h5>
                          <IoIosArrowDown/>
                      </div>


                      <p>Get  now  free  20% discount for all products on your firts order</p>

                        <div className="position-relative">
                        <input  type="mail" className="input_submit" placeholder="Enter your email" />
                            <img className="arrow_sub" src={arrow} alt="not found" />
                        </div>

                  </div>
            </div>
        </div>
    </div>
</section>
        </main>
           


           
        </>
    )
}


export default Home;   