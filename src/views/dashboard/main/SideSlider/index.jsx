import { React } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.scss';
import './index.css';

const SideSlider = () => {
   // const swiper  = useSwiper();
   // const swiperPrevBtn = useSwiper();
   return (

      <>
         <div className="mainSliderQa">
            <div className="sign-slider overflow-hidden ">
               <Swiper
                  loop
                  spaceBetween={0}
                  centeredSlides={true}
                  // navigation
                  autoplay={false}
               // className="list-inline m-0 p-0 "
               >
                  <SwiperSlide>
                     <div className="slider-items bg-red">
                        <div className="h-100 padding-settings">
                           <img
                              src={require("../../../../assets-ze/images/logo.png")}
                              className="mb-55 image-logo"
                              alt=""
                           />

                           <div className="image-slider text-white-qa">
                              <img
                                 src={require("../../../../assets-ze/images/image-sliders/slider-image.png")}
                                 alt=""
                              />
                              <div className="components-slider-images white-bg-op-79 position-white ">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/triangle-green.png")}
                                       className="trianglegreen"
                                       alt=""
                                    />
                                 </span>
                                 <span className="color-black fa-18">eNPS</span>
                                 <span className="image-top-right">
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/percentile.png")}
                                       className="percentileimg"
                                       alt=""
                                    />
                                 </span>
                              </div>
                              <div className="components-slider-images orange-bg-op-79 position-orange ">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/scorecard.png")}
                                       className="scorecardimg"
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">Culture Scorecard</span>
                              </div>
                              <div className="components-slider-images black-bg-op-79 position-black ">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/cards-multiple.png")}
                                       className="cardsimg"
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18">Survey Builder</span>
                                    <span className="opacity-70 fa-16">
                                       Question 1{" "}
                                       <span className="color-lightblue">+</span>
                                    </span>
                                 </div>
                              </div>
                              <div className="components-slider-images lightblue-bg-op-79 position-lightblue ">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/arrows-left-right.png")}
                                       className="arrowleftimg"
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18">Bridge the Gap!</span>
                                    <span className="opacity-70 fa-16">Gap Analysis</span>
                                 </div>
                              </div>
                           </div>
                           <div className="max-w-720 ms-0 text-white-qa">
                              <h6 className="text-white-qa fa-28  ">
                                 Work<span className="color-lightblue">.</span> Life.
                                 Culture<span className="color-orange">.</span>
                              </h6>
                              <h1 className="text-white-qa fa-55   fa-graphik-graphiksemibold mb-11">
                                 Culture Check
                              </h1>
                              <p className="fa-28   mb-0">
                                 Discover your culture and your people, and identify
                                 opportunities for improvement by effective
                                 collaboration.
                              </p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>

                  <SwiperSlide>
                     <div className="slider-items bg-white">
                        <div className="h-100 padding-settings">
                           <img
                              src={require("../../../../assets-ze/images/logo-black.png")}
                              className="mb-55 image-logo"
                              alt=""
                           />
                           {/* <a href="#">
                              <img
                                 src={require("../../../../assets-ze/images/logo-black.png")}
                                 className="mb-55 image-logo"
                                 alt=""
                              />
                           </a> */}
                           <div className="image-slider text-white-qa">
                              <img
                                 className=""
                                 src={require("../../../../assets-ze/images/image-sliders/slider-image-2.png")}
                                 alt=""
                              />
                              <div className=" components-slider-images box-shadow-sliderimages white-bg-op-79 slideno2 position-white">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/video-image.png")}
                                       className="videoimg"
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18 color-black">
                                       Employee Engagement
                                    </span>
                                    <span className="opacity-70 fa-16 color-black">
                                       Culture: Ep 05
                                    </span>
                                 </div>
                              </div>
                              <div className=" components-slider-images orange-bg-op-79 slideno2 position-orange">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/e-learning.png")}
                                       className="elearningimg"
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">
                                    Leadership and <br /> Organizational Learning
                                 </span>
                              </div>
                              <div className=" components-slider-images red-bg-op-79 slideno2 position-red">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/bars-progress.png")}
                                       className="barsimg"
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">Almost There</span>
                              </div>
                              <div className=" components-slider-images black-bg-op-79 slideno2 position-black">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/check-red.png")}
                                       className="heckredimg"
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18">Get Culturefy Certified</span>
                                    <span className="align-items-center d-flex fa-14 justify-content-between opacity-70">
                                       Perks &#38; Opportunities
                                       <span className="color-lightblue">
                                          <img
                                             className="d-inline-block"
                                             src={require("../../../../assets-ze/images/image-sliders/small-triangle.png")}
                                             alt=""
                                          />
                                       </span>
                                    </span>
                                 </div>
                              </div>
                              <div className=" components-slider-images lightblue-bg-op-79 slideno2 position-lightblue">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/graduate.png")}
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18">Culture Academy</span>
                                 </div>
                              </div>
                           </div>
                           <div className="max-w-720 ms-0">
                              <h6 className="text-black-qa fa-28 ">
                                 Work<span className="color-lightblue">.</span> Life.
                                 Culture<span className="color-orange">.</span>
                              </h6>
                              <h1 className="text-black-qa fa-55 fa-graphik-graphiksemibold mb-11  ">
                                 Learning and Development
                              </h1>
                              <p className="fa-28 mb-0 ">
                                 Discover your culture and your people, and identify
                                 opportunities for improvement by effective
                                 collaboration.
                              </p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>

                  <SwiperSlide>
                     <div className="slider-items bg-lightblue">
                        <div className="h-100 padding-settings">
                           <img
                              src={require("../../../../assets-ze/images/logo.png")}
                              className="mb-55 image-logo"
                              alt=""
                           />

                           <div className="image-slider text-white-qa">
                              <img
                                 src={require("../../../../assets-ze/images/image-sliders/slider-image-3.png")}
                                 alt=""
                              />
                              <div className=" components-slider-images box-shadow-sliderimages white-bg-op-79 slideno3 position-white">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/redeem.png")}
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18 color-black">
                                       Redeem Rewards
                                    </span>
                                 </div>
                              </div>
                              <div className=" components-slider-images orange-bg-op-79 slideno3 position-orange">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/trophy.png")}
                                       className="trophyimg"
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">Award great service</span>
                              </div>
                              <div className=" components-slider-images red-bg-op-79 slideno3 position-red">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/hand money.png")}
                                       className="handmoneyimg"
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">Reward Colleagues</span>
                              </div>
                              <div className=" components-slider-images black-bg-op-79 slideno3 position-black">
                                 <span className="extra-design-slide-3">
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/bullseye.png")}
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-14 opacity-70 pb-2">
                                       <span className="d-inline-block me-2">
                                          <img
                                             src={require("../../../../assets-ze/images/image-sliders/arrow-bottom.png")}
                                             alt=""
                                          />
                                       </span>
                                       More Points More Rewards!
                                    </span>
                                    <span className="align-items-center d-flex fa-18 justify-content-between">
                                       Increase productivity <br /> and confidence
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div className="max-w-720 ms-0 text-white-qa">
                              <h6 className="text-white-qa fa-28 ">
                                 Work<span className="color-lightblue">.</span> Life.
                                 Culture<span className="color-orange">.</span>
                              </h6>
                              <h1 className="text-white-qa fa-55 fa-graphik-graphiksemibold mb-11 ">
                                 Rewards and Recognition
                              </h1>
                              <p className="fa-28 mb-0 ">
                                 Become an employer of choice by creating outstanding
                                 employee experiences from entry to exit.
                              </p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>

                  <SwiperSlide>
                     <div className="slider-items bg-orange">
                        <div className="h-100 padding-settings">
                           <img
                              src="images/logo.png"
                              className="mb-55 image-logo"
                              alt=""
                           />
                           {/* <a href="#">
                              <img
                                 src="images/logo.png"
                                 className="mb-55 image-logo"
                                 alt=""
                              />
                           </a> */}
                           <div className="image-slider text-white-qa">
                              <img
                                 src={require("../../../../assets-ze/images/image-sliders/slider-image-4.png")}
                                 alt=""
                              />

                              <div className=" p-0 components-slider-images white-bg-op-79 slideno4 position-white">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/component.png")}
                                       className="componentimgshare"
                                       alt=""
                                    />
                                 </span>
                              </div>
                              <div className=" components-slider-images black-bg-op-79 slideno4 position-black">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/profile-image.png")}
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18">Social Profile</span>
                                    <span className="opacity-70 fa-16">
                                       Connect, chat, share
                                    </span>
                                 </div>
                              </div>
                              <div className=" components-slider-images lightblue-bg-op-79 slideno4 position-lightblue">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/heart-tick.png")}
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18">Safe Space</span>
                                    <span className="opacity-70 fa-16">
                                       Private. Sound. Safe.
                                    </span>
                                 </div>
                              </div>
                              <div className=" components-slider-images red-bg-op-79  slideno4 position-red">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/book-open-reader.png")}
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">Mentorship</span>
                              </div>
                           </div>
                           <div className="max-w-720 ms-0 text-white-qa">
                              <h6 className="text-white-qa fa-28 ">
                                 Work<span className="color-lightblue">.</span> Life.
                                 Culture<span className="color-orange">.</span>
                              </h6>
                              <h1 className="text-white-qa fa-55 fa-graphik-graphiksemibold mb-11 ">
                                 Community
                              </h1>
                              <p className="fa-28 mb-0 ">
                                 Foster a social community by engaging in Resource
                                 Groups: The foundation of Culturefy is based on building
                                 amazing work-life culture.
                              </p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>

                  <SwiperSlide>
                     <div className="slider-items bg-black">
                        <div className="h-100 padding-settings">
                           <img
                              src={require("../../../../assets-ze/images/logo.png")}
                              className="mb-55 image-logo"
                              alt=""
                           />

                           <div className="image-slider text-white-qa">
                              <img
                                 src={require("../../../../assets-ze/images/image-sliders/slider-image-5.png")}
                                 alt=""
                              />
                              <div className=" components-slider-images p-0 white-bg-op-79 slideno5 position-white">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/slide5.png")}
                                       className="slide5img"
                                       alt=""
                                    />
                                 </span>
                              </div>
                              <div className=" components-slider-images orange-bg-op-79 slideno5 position-orange">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/application-artificial-intelligence-ai.png")}
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">
                                    Get Recommendations <br /> From Artificial
                                    Intelligence
                                 </span>
                              </div>
                              <div className=" components-slider-images red-bg-op-79 slideno5 position-red">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/book-open-reader.png")}
                                       alt=""
                                    />
                                 </span>
                                 <div className="d-flex flex-column">
                                    <span className="fa-18">Target Custom Audiences</span>
                                    <span className="opacity-70 fa-14">
                                       <span className="d-inline-block me-1">
                                          <img
                                             src={require("../../../../assets-ze/images/image-sliders/Path.png")}
                                             alt=""
                                          />
                                       </span>
                                       Initiating AI...
                                    </span>
                                 </div>
                              </div>
                              <div className=" components-slider-images lightblue-bg-op-79 slideno5 position-lightblue">
                                 <span>
                                    <img
                                       src={require("../../../../assets-ze/images/image-sliders/speakers.png")}
                                       alt=""
                                    />
                                 </span>
                                 <span className="fa-18">
                                    Create Communication <br /> Campaigns
                                 </span>
                              </div>
                           </div>
                           <div className="max-w-720 ms-0 text-white-qa">
                              <h6 className="text-white-qa fa-28 ">
                                 Work<span className="color-lightblue">.</span> Life.
                                 Culture<span className="color-orange">.</span>
                              </h6>
                              <h1 className="text-white-qa fa-55 fa-graphik-graphiksemibold mb-11 ">
                                 Campaigns
                              </h1>
                              <p className="fa-28 mb-0 ">
                                 Launch communications campaigns and review media files
                                 before launching collaboratively.
                              </p>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </div>
            <div class="buttonSwipper">
               <button
                  class="swipper-custom-button swipper-signup-prev swipper-arrow"
                  // onClick={() => swiper.slideNext()}
               >
                  <img src={require('../../../../assets-ze/icons/prev-chev.png')} class="chev-img" alt="" />
               </button>
               <button
                  class="swipper-custom-button swipper-signup-next swipper-arrow"
                  // onClick={() => swiperNextBtn.slideNext()}
               >
                  <img src={require('../../../../assets-ze/icons/next-chev.png')} class="chev-img" alt="" />
               </button>
            </div>
         </div>
      </>
   );
};

export default SideSlider;
