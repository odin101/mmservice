import React from 'react';
import timerIcon from '../../img/icons/timer.svg'
import MissingImg from '../../img/icons/missingImg.webp'
import BlurImageLoader from 'react-blur-image-loader';
import ImageLoader from 'react-loading-image';
import SpinnerGIF from "../../img/spinner.gif"

export default function SingleItem(props) {
function Preloader(props) {
  return <img src={SpinnerGIF} 
	   style={{height:80,width:120,objectFit:'cover'}}
		/>;
}
  return (
    <>
                          <div
                            className="flex justify-center"
                            data-v-d5ff87d0=""
                          >
                            <a
                              href={"/product/"+props.data._id}
                              className="flex flex-col h-full w-full relative group"
                              style={{ minHeight: 230 }}
                              data-v-d5ff87d0=""
                              data-v-530e65a0=""
                            >
                              <div
                                className="rounded-xl w-full min-h-full duration-300 z-10"
                                style={{
                                  background: "#1F2332",
                                  transitionProperty: "transform padding"
                                }}
                                data-v-530e65a0=""
                              >
                                <div
                                  className="flex flex-col col-grow relative h-full gap-3 py-5"
                                  data-v-530e65a0=""
                                >
                                  <div
                                    className="flex no-wrap items-center gap-4 px-5"
                                    data-v-530e65a0=""
                                  >
                                    <div
                                      className="rounded-md shrink-0 flex justify-center items-center w-20 h-20 overflow-hidden"
                                      style={{
                                        maxWidth: 80,
                                        background: "#252A3D"
                                      }}
                                      data-v-530e65a0=""
                                    >
					 <ImageLoader

                                        format="webp"
                                        loading="lazy"
                                        fit="cover"
                                        position="center"
                                        height={80}
                                        width={80}
	                              style={{width:80,height:80,objectFit:'cover'}}
								  src={props.data.Image?props.data.Image+"_100x100":MissingImg}
								  loading={() => <Preloader />}
								  error={() => <div>Error</div>}
								  />


                                    </div>
                                    {/**/}
                                    <div
                                      className="font-bold leading-6 text-ellipsis overflow-hidden float-left w-full"
                                      style={{ height: 70 }}
                                      data-v-530e65a0=""
                                    >
                                      <div
                                        className="float-none"
                                        data-v-530e65a0=""
                                      >
                                        {props.data.title}
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="px-5 overflow-hidden"
                                    style={{ maxHeight: 24 }}
                                    data-v-530e65a0=""
                                  >
                                    <div
                                      className="attributes-group flex flex-wrap items-center text-center mb-2 gap-1"
                                      data-v-530e65a0=""
                                      data-v-2546539f=""
                                    >
                                      {/**/}
                                      {/*[*/}
                                      {/*]*/}
                                    </div>
                                  </div>
                                  <div
                                    className="price-group flex items-center justify-between pt-2 px-5"
                                    data-v-530e65a0=""
                                  >
                                    <div
                                      className="flex items-center gap-2"
                                      data-v-530e65a0=""
                                    >
                                      <div
                                        className="w-4 h-4"
                                        data-v-530e65a0=""
                                      >
                                        <img
                                          src={timerIcon}
                                          alt=""
                                          height={16}
                                          width={16}
                                          data-v-530e65a0=""
                                        />
                                      </div>
                                      <div
                                        className="text-xs font-light text-white/70"
                                        data-v-530e65a0=""
                                      >
                                      {props.data.duration}
                                      </div>
                                    </div>
                                    <div
                                      className="font-bold text-white/80"
                                      data-v-530e65a0=""
                                    >
                                      ${props.data.price}
                                    </div>
                                  </div>
                                  <div
                                    className="w-full h-px"
                                    style={{ background: "#171D29" }}
                                    data-v-530e65a0=""
                                  />
                                  <div
                                    className="flex items-center justify-between text-white/70 px-5"
                                    data-v-530e65a0=""
                                  >
                                    <div
                                      className="flex gap-2 items-center relative h-10"
                                      data-v-530e65a0=""
                                    >
                                      <div
                                        className="relative"
                                        data-v-530e65a0=""
                                      >
                                        {/**/}

                                        <img
                                         src={props.data.PostedBy?.profileImage?props.data.PostedBy.profileImage:MissingImg }
                                          style={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: "100%",
                                            border:
                                              "3px solid hsla(0,0%,100%,.12)"
                                          }}
                                          format="webp"
                                          loading="lazy"
                                          height={36}
                                          width={36}
                                          alt="Roblox Store"
                                          data-v-530e65a0=""
                                        />

                                      </div>
                                      <div
                                        className="flex flex-col"
                                        data-v-530e65a0=""
                                      >
                                        <div
                                          className="text-sm"
                                          data-v-530e65a0=""
                                        >
                                          {props.data?.PostedBy?.username}
                                        </div>
                    
                                      </div>
                                      {/**/}
                                    </div>
                                    <div
                                      className="seller-rating flex items-center gap-2 text-sm"
                                      data-v-530e65a0=""
                                    >
                                      <svg
                                        width={19}
                                        height={17}
                                        viewBox="0 0 19 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-v-530e65a0=""
                                      >
                                        <path
                                          d="M18.0315 5.98618L12.6355 5.21059L10.2233 0.374144C10.1574 0.241725 10.049 0.134529 9.91511 0.0693701C9.57932 -0.0945772 9.17127 0.0420455 9.00337 0.374144L6.5912 5.21059L1.19515 5.98618C1.04638 6.0072 0.91036 6.07656 0.806222 6.18166C0.680325 6.30964 0.61095 6.48181 0.613341 6.66035C0.615732 6.83888 0.689694 7.00918 0.818974 7.13381L4.72309 10.8983L3.80072 16.214C3.77909 16.3376 3.79293 16.4648 3.84066 16.5811C3.88839 16.6973 3.96811 16.7981 4.07078 16.8718C4.17344 16.9456 4.29495 16.9894 4.42151 16.9983C4.54808 17.0072 4.67464 16.9809 4.78685 16.9223L9.61332 14.4127L14.4398 16.9223C14.5716 16.9917 14.7246 17.0148 14.8712 16.9896C15.241 16.9265 15.4897 16.5797 15.4259 16.214L14.5036 10.8983L18.4077 7.13381C18.5139 7.03082 18.5841 6.8963 18.6053 6.74917C18.6627 6.38134 18.4034 6.04083 18.0315 5.98618Z"
                                          fill="#FFA300"
                                          data-v-530e65a0=""
                                        />
                                      </svg>
                                      <span data-v-530e65a0="">
                                        0{" "}
                                        <span className="text-white/40 text-sm">
                                          (0)
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                  {/**/}
                                </div>
                              </div>
                            </a>
                          </div>
    </>
  );
}
