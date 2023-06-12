import React, { Component } from 'react'
import CurrencyIconBlue from '../img/icons/currency-icon-blue.svg'
import ItemsSkinsIcon from '../img/icons/item-icon-blue.svg'
import AccountIconBlue from '../img/icons/account-icon-blue.svg'
import BoostIconBlue from '../img/icons/boost-icon-blue.svg'
import CoashingIconBlue from '../img/icons/coaching-icon-blue.svg'
import SellingIcon from '../img/icons/selling-icon-1.webp'
import SellingIcon2 from '../img/icons/selling-icon-2.webp'
import SellingIcon3 from '../img/icons/selling-icon-3.webp'

import BuyingIcon1 from '../img/icons/buying-icon-1.webp'
import BuyingIcon2 from '../img/icons/buying-icon-2.webp'
import BuyingIcon3 from '../img/icons/buying-icon-3.webp'

import LeadingUser from '../img/icons/features-satisfaction.svg'
import SpeedyDelivery from '../img/icons/features-delivery.svg'
import TradeProtection from '../img/icons/features-protection.svg'
import RefundPolicy from '../img/icons/features-refund.svg'
import LiveSupport from '../img/icons/features-support.svg'

import HowItWorks from '../img/icons/how-it-works.png'

import {useIsAuthenticated} from 'react-auth-kit';
import SellerAvatar from '../img/icons/seller-avatar.webp'
import BuyerAvatar from '../img/icons/buyer-avatar.webp'
import Star from '../img/icons/star.svg'
import HomeMain from '../img/icons/home-main.webp'
import { useNavigate } from "react-router-dom";
import {isMobile} from 'react-device-detect';
import './Home.css'




const  Home = (props) => {
    const navigate = useNavigate();
    const focusSearch = () => {
     props.focusSearch()
    }

 
  const isAuthenticated = useIsAuthenticated()



    return (
        <div style={{ "min-height": "1000px", "overflow-x": "hidden !important" }} className='overflowHide'>
        <div data-v-f6451ad8>
          <div data-v-f6451ad8 className="relative flex justify-center items-center">
            <div
              data-v-f6451ad8
              className="w-full h-full absolute"
              style={{
                background:
                  "linear-gradient(147.67deg, rgba(228, 217, 231, 0.02) 11.28%, rgba(204, 241, 255, 0.02) 112.84%)",
                "clip-path": "polygon(0px 0px, 100% 0px, 100% 75%, 0% 100%)",
              }}
            />
            <div data-v-f6451ad8 className="container flex pt-16 sm:flex-col xs:pt-8">
              <div
                data-v-f6451ad8
                className="flex-col py-12 relative pt-16 pb-36 xs:pb-0 xs:pt-0"
                style={{ "max-width": "750px" }}
              >
                <h1
                  data-v-f6451ad8
                  className="font-extrabold text-6xl leading-none xs:text-3xl xs:leading-tight xs:max-w-[350px]"
                  style={{ "letter-spacing": "0.1px" }}
                >
                  The Gaming Goods Platform
                </h1>
                <div
                  data-v-f6451ad8
                  className="font-light my-8"
                  style={{ "letter-spacing": "0.3px", "line-height": "170%" }}
                >
                  Achieving your dream playing experience has never been easier.
                </div>
                <div
                  data-v-f6451ad8
                  className="btn-group mt-8 flex gap-2 xs:grid xs:grid-cols-2"
                >
                  <div
                    
                    onClick={() => {
                      focusSearch() 
                    }}
                    data-v-1fb46fc5
                    data-v-f6451ad8
                    className="btn text-center cursor-pointer wide"
                  >
                    Begin Buying
                  </div>
                  <div
                   onClick={() => {
                    if(isAuthenticated()) {
                     navigate("/dashboard/create-offer") 
                    }else{
                     props.sign()
                    }
                  
                  }}
                    data-v-1fb46fc5
                    data-v-f6451ad8
                    className="btn text-center cursor-pointer secondary wide"
                  >
                    Start Selling
                  </div>
                </div>
                <a
                  data-v-f6451ad8
                  className="inline-block mt-12 hover:text-secondary hover:underline"
                  href="https://www.trustpilot.com/review/igitems.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    data-v-f6451ad8
                    className="flex flex-wrap gap-4 items-center sm:gap-2 sm:text-sm"
                  >
                    Discord
                    <div
                      data-v-f6451ad8
                      style={{
                        "border-left": "1px solid rgb(214, 214, 214)",
                        height: "28px",
                      }}
                    />
                    <div data-v-f6451ad8 className="mt-1 text-bold text-base">
                      Rated Excellent
                    </div>
                    <svg
                      data-v-f6451ad8
                      className="sm:w-[90px]"
                      width={119}
                      height={23}
                      viewBox="0 0 119 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        data-v-f6451ad8
                        d="M0.0634766 0.398438H22.334V22.6689H0.0634766V0.398438ZM24.1898 0.398438H46.4603V22.6689H24.1898V0.398438ZM48.3163 0.398438H70.5868V22.6689H48.3163V0.398438ZM72.4427 0.398438H94.7132V22.6689H72.4427V0.398438ZM96.569 0.398438H118.84V22.6689H96.569V0.398438Z"
                        fill="#00B67A"
                      />
                      <path
                        data-v-f6451ad8
                        d="M11.199 15.4075L14.586 14.5492L16.0011 18.9106L11.199 15.4075ZM18.9937 9.77033H13.0317L11.199 4.15625L9.3663 9.77033H3.4043L8.22957 13.2501L6.3969 18.8642L11.2222 15.3843L14.1916 13.2501L18.9937 9.77033ZM35.3254 15.4075L38.7123 14.5492L40.1274 18.9106L35.3254 15.4075ZM43.1201 9.77033H37.158L35.3254 4.15625L33.4927 9.77033H27.5307L32.3559 13.2501L30.5233 18.8642L35.3486 15.3843L38.318 13.2501L43.1201 9.77033ZM59.4517 15.4075L62.8388 14.5492L64.2538 18.9106L59.4517 15.4075ZM67.2464 9.77033H61.2845L59.4517 4.15625L57.6191 9.77033H51.657L56.4824 13.2501L54.6496 18.8642L59.4749 15.3843L62.4443 13.2501L67.2464 9.77033ZM83.5782 15.4075L86.9651 14.5492L88.3803 18.9106L83.5782 15.4075ZM91.3729 9.77033H85.4109L83.5782 4.15625L81.7455 9.77033H75.7835L80.6088 13.2501L78.7761 18.8642L83.6014 15.3843L86.5708 13.2501L91.3729 9.77033ZM107.705 15.4075L111.092 14.5492L112.507 18.9106L107.705 15.4075ZM115.499 9.77033H109.537L107.705 4.15625L105.872 9.77033H99.9099L104.735 13.2501L102.902 18.8642L107.728 15.3843L110.697 13.2501L115.499 9.77033Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <div
                data-v-f6451ad8
                className="relative sm:hidden xs:block"
                style={{ "min-height": "265px" }}
              >
                <img
                  data-v-f6451ad8
                  className="sm:hidden gradient absolute full-height max-w-none z-0 bottom-0"
                  src="/img/home/home-main-gradient.svg"
                  alt
                  format="webp"
                />
                <picture data-v-f6451ad8 className="sm:hidden">
                  <source
                    data-v-f6451ad8
                    srcSet="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    media="(max-width: 700px)"
                  />
                  <source
                    data-v-f6451ad8
                    srcSet={HomeMain}
                    type="image/webp"
                  />
                  <source
                    data-v-f6451ad8
                    srcSet={HomeMain}
                    type="image/png"
                  />
                  <img
                    data-v-f6451ad8
                    className="absolute main-img max-w-none"
                    src={HomeMain}
                    format="webp"
                    alt="igitems"
                  />
                </picture>
                <picture data-v-f6451ad8 className="hidden sm:block">
                  <source
                    data-v-f6451ad8
                    srcSet="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    media="(min-width: 640px)"
                  />
                  <source
                    data-v-f6451ad8
                    srcSet="/img/home/home-main-mobile.webp"
                    type="image/webp"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-12">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="font-bold text-4xl tracking-wider sm:text-3xl">
              Select your service
            </div>
            <div className="text-primary text-xl mt-4 tracking-wider">
              And start trading in seconds.
            </div>
          </div>
          <div className="my-16 grid grid-cols-5 gap-8 xs:grid-cols-2 sm:grid-cols-4">
            <div
             onClick={() => {
              focusSearch()
             }}
             className="cursor-pointer text-center hover:text-primary duration-300">
              <div
                className="m-auto bg-contain bg-no-repeat bg-center"
                loading="lazy"
                format="webp"
                style={{
                  width: "81px",
                  height: "81px",
                  backgroundImage:`url(${CurrencyIconBlue})`,
                }}
              />
              <div className="mt-6 text-xl font-bold tracking-wider">Currency</div>
            </div>
            <div 
             onClick={() => {
              focusSearch()
             }}
            className="cursor-pointer text-center hover:text-primary duration-300">
              <div
                className="m-auto bg-contain bg-no-repeat bg-center"
                loading="lazy"
                format="webp"
                style={{
                  width: "81px",
                  height: "81px",
                  backgroundImage:`url(${ItemsSkinsIcon})`,
                }}
              />
              <div className="mt-6 text-xl font-bold tracking-wider">
                Items / Skins
              </div>
            </div>
            <div 
             onClick={() => {
              focusSearch()
             }}
            className="cursor-pointer text-center hover:text-primary duration-300">
              <div
                className="m-auto bg-contain bg-no-repeat bg-center"
                loading="lazy"
                format="webp"
                style={{
                  width: "81px",
                  height: "81px",
                  "background-image": 'url("/img/icons/account-icon-blue.svg")',
                  backgroundImage:`url(${AccountIconBlue})`,
                  
                }}
              />
              <div className="mt-6 text-xl font-bold tracking-wider">Accounts</div>
            </div>
            <div 
            
             onClick={() => {
              focusSearch()
             }}
            className="cursor-pointer text-center hover:text-primary duration-300">
              <div
                className="m-auto bg-contain bg-no-repeat bg-center"
                loading="lazy"
                format="webp"
                style={{
                  width: "81px",
                  height: "81px",
                  "background-image": 'url("/img/icons/boost-icon-blue.svg")',
                  backgroundImage:`url(${BoostIconBlue})`,
                }}
              />
              <div className="mt-6 text-xl font-bold tracking-wider">PlayBoost</div>
            </div>
            <div 
            
             onClick={() => {
              focusSearch()
             }}
            className="cursor-pointer text-center hover:text-primary duration-300 sm:hidden">
              <div
                className="m-auto bg-contain bg-no-repeat bg-center"
                loading="lazy"
                format="webp"
                style={{
                  width: "81px",
                  height: "81px",
                  backgroundImage:`url(${CoashingIconBlue})`,
                }}
              />
              <div className="mt-6 text-xl font-bold tracking-wider">Coaching</div>
            </div>
          </div>
        </div>
        <div style={{ background: "rgb(24, 31, 46)" }}>
          <div className="container py-12 text-center">
            <div className="flex flex-col justify-center items-center">
              <div className="font-bold text-4xl tracking-wider sm:text-3xl">
                <span className="text-primary">Selling</span> made simple.
              </div>
              <div className="text-secondary text-xl mt-4 tracking-wider sm:text-base">
                List your virtual items to the world in just a few clicks.
              </div>
            </div>
            <div className="mt-12 mb-8 grid grid-cols-3 gap-8 xs:grid-cols-1">
              <div className="flex flex-col items-center gap-2 px-12 sm:px-4">
                <div className="flex flex-col gap-4 items-center">
                  <img
                    className="object-contain"
                    src={SellingIcon}
                    loading="lazy"
                    format="webp"
                    alt="1. Register for free"
                    style={{ height: "231px", width: "195px" }}
                  />
                  <div className="text-xl font-bold" style={{ "min-height": "40px" }}>
                    1. Register for free
                  </div>
                </div>
                <div className="opacity-70 leading-relaxed">
                  Create your AutoMMService account and verify your identity.
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 px-12 sm:px-4">
                <div className="flex flex-col gap-4 items-center">
                  <img
                    className="object-contain"
                    src={SellingIcon2}
                    loading="lazy"
                    format="webp"
                    alt="2. List your items"
                    style={{ height: "231px", width: "195px" }}
                  />
                  <div className="text-xl font-bold" style={{ "min-height": "40px" }}>
                    2. List your items
                  </div>
                </div>
                <div className="opacity-70 leading-relaxed">
                  Create and post your listings on AutoMMService.
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 px-12 sm:px-4">
                <div className="flex flex-col gap-4 items-center">
                  <img
                    className="object-contain"
                    src={SellingIcon3}
                    loading="lazy"
                    format="webp"
                    alt="3. Receive payment"
                    style={{ height: "231px", width: "195px" }}
                  />
                  <div className="text-xl font-bold" style={{ "min-height": "40px" }}>
                    3. Receive payment
                  </div>
                </div>
                <div className="opacity-70 leading-relaxed">
                  After your buyer confirms the delivery, you receive payment.
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                data-v-1fb46fc5
                className="btn text-center cursor-pointer secondary wide"
              >
                Start Selling
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-24 sm:pt-8">
          <div className="flex gap-8 items-center no-wrap justify-between sm:flex-col sm:items-start">
            <div className="flex flex-col max-w-lg sm:max-w-none">
              <div className="font-bold text-5xl leading-tight sm:text-3xl">
                <div>
                  <b className="text-primary">Buy</b> in-game items <br />{" "}
                  effortlessly.
                </div>
              </div>
              <div className="opacity-70 mt-4 tracking-wider font-light leading-relaxed">
                Here at AutoMMService, we've taken the trouble out of buying items. Forget
                long wait times and risky deals. We connect you to verified sellers
                who deliver fast and securely instead.
              </div>
              <div className="flex mt-12 sm:hidden"  
        onClick={() => {
          focusSearch()
        }}
              >
                <div data-v-1fb46fc5 className="btn text-center cursor-pointer wide">
                  Begin Buying
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-16" style={{ "max-width": "900px" }}>
              <div className="flex flex-col gap-16">
                <div className="flex gap-8 items-center no-wrap">
                  <img
                    className="object-contain shrink-0"
                    src={BuyingIcon1}
                    loading="lazy"
                    format="webp"
                    width={100}
                    height={80}
                    alt="1. Browse our offers"
                  />
                  <div>
                    <div className="mb-4 text-lg font-bold">1. Browse our offers</div>
                    <div className="opacity-70 leading relaxed font-light">
                      With over 1000 different services and thousands of verified
                      sellers, finding your dream item has never been more accessible.
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 items-center no-wrap">
                  <img
                    className="object-contain shrink-0"
                    src={BuyingIcon2}
                    loading="lazy"
                    format="webp"
                    width={100}
                    height={80}
                    alt="2. Register for free"
                  />
                  <div>
                    <div className="mb-4 text-lg font-bold">2. Register for free</div>
                    <div className="opacity-70 leading relaxed font-light">
                      If you have picked your preferred service, our super-simple
                      registration and checkout process is all that's left.
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 items-center no-wrap">
                  <img
                    className="object-contain shrink-0"
                    src={BuyingIcon3}
                    loading="lazy"
                    format="webp"
                    width={100}
                    height={80}
                    alt="3. Checkout securely"
                  />
                  <div>
                    <div className="mb-4 text-lg font-bold">3. Checkout securely</div>
                    <div className="opacity-70 leading relaxed font-light">
                      With multiple currencies and dozens of secure payment options,
                      buying a product is safe and effortless.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
        onClick={() => {
          focusSearch()
        }}
           className="mt-12 justify-center hidden sm:flex">
            <div data-v-1fb46fc5 className="btn text-center cursor-pointer wide">
              Begin Buying
            </div>
          </div>
        </div>
        <div className="py-24">
          <div className="py-12" style={{ background: "rgb(24, 31, 46)" }}>
            <div className="container text-center text-4xl font-bold sm:text-2xl">
              "
              <span>
                <b className="text-secondary">AutoMMService</b>, is the leading virtual
                goods marketplace when it <br /> comes to user experience and
                satisfaction
              </span>
              <b className="text-secondary">.</b>"
            </div>
          </div>
        </div>
     
        <div
          data-v-d60c1061
          className="relative flex justify-center items-center py-12"
        >
          <div
            data-v-d60c1061
            className="container relative flex justify-center items-center flex-col py-12 fit"
          >
            <div
              data-v-d60c1061
              className="process-background absolute -z-10 w-full h-full"
            />
            <div data-v-d60c1061 className="process-title flex-col text-center">
              <div
                data-v-d60c1061
                className="font-bold text-4xl tracking-wider sm:text-3xl"
              >
                How it works
              </div>
              <div
                data-v-d60c1061
                className="text-primary text-xl q-mt-md tracking-wider"
              >
                Step by step
              </div>
            </div>
            <div
              data-v-d60c1061
              className="w-full q-responsive"
              style={{ "max-width": "1200px" }}
            >
              <div data-v-d60c1061 className="row">
                <div data-v-d60c1061 className="gradient-left z-0 absolute" />
                <div data-v-d60c1061 className="gradient-right z-0 absolute" />
                <img
                  data-v-d60c1061
                  src={HowItWorks}
                  fit="contain"
                  loading="lazy"
                  alt="how it works"
                  style={{ "min-height": "110px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-v-85e8cd44
          className="relative flex justify-center items-center my-12 py-12"
        >
          <div
            data-v-85e8cd44
            className="container flex no-wrap gap-36 items-center sm:flex-col-reverse sm:gap-8"
          >
            <div data-v-85e8cd44 className="w-full" style={{ "max-width": "650px" }}>
              <div data-v-85e8cd44 className="flex relative">
                <div className="decor absolute inset-0" data-v-85e8cd44>
                  <div className="decor-tl absolute bg-contain" data-v-85e8cd44 />
                  <div className="decor-tr absolute bg-contain" data-v-85e8cd44 />
                  <div className="decor-bl absolute bg-contain" data-v-85e8cd44 />
                  <div className="decor-br absolute bg-contain" data-v-85e8cd44 />
                </div>
                <div
                  data-v-85e8cd44
                  className="flex flex-col h-full items-end w-1/2"
                  style={{ "margin-right": "5%" }}
                >
                  <div
                    data-v-85e8cd44
                    className="card flex justify-center items-center flex-col mb-8"
                    style={{ height: "70%",
                   
                    background: "#20283a",
                        borderRadius: "15px",
                        padding: "30px",
                        position: "relative",
                        zIndex: 1 }}
                  >
                    <img
                      data-v-85e8cd44
                      src={BuyerAvatar}
                      alt
                      loading="lazy"
                      format="webp"
                      style={{ width: "94px", height: "94px" }}
                    />
                    <div
                      data-v-85e8cd44
                      className="my-7 text-center opacity-90 sm:text-xs"
                    >
                      “Very good services“
                    </div>
                    <div data-v-85e8cd44 className="flex gap-1 my-4">
                      <img
                        data-v-85e8cd44
                        src={Star}
                        alt
                        loading="lazy"
                        format="webp"
                      />
                      <img
                        data-v-85e8cd44
                        src={Star}
                        alt
                        loading="lazy"
                        format="webp"
                      />
                      <img
                        data-v-85e8cd44
                        src={Star}
                        alt
                        loading="lazy"
                        format="webp"
                      />
                      <img
                        data-v-85e8cd44
                        src={Star}
                        alt
                        loading="lazy"
                        format="webp"
                      />
                      <img
                        data-v-85e8cd44
                        src={Star}
                        alt
                        loading="lazy"
                        format="webp"
                      />
                    </div>
                    <div data-v-85e8cd44 className="font-bold text-lg sm:text-xs">
                      Anonymous
                    </div>
                  </div>
                  <div
                    data-v-85e8cd44
                    className="card flex justify-center items-center flex-col"
                    style={{ "min-height": "20%", width: "85%" }}
                  >
                    <div
                      data-v-85e8cd44
                      className="flex justify-center items-center gap-2 xs:flex-col xs:gap-1"
                    >
                      <div data-v-85e8cd44 className="flex gap-1 my-4 xs:my-1">
                        <img
                          data-v-85e8cd44
                          alt
                           src={Star}
                          loading="lazy"
                          format="webp"
                        />
                        <img
                          data-v-85e8cd44
                          alt
                        src={Star}
                          loading="lazy"
                          format="webp"
                        />
                        <img
                          data-v-85e8cd44
                          alt
                        src={Star}
                          loading="lazy"
                          format="webp"
                        />
                        <img
                          data-v-85e8cd44
                          alt
                        src={Star}
                          loading="lazy"
                          format="webp"
                        />
                        <img
                          data-v-85e8cd44
                          alt
                        src={Star}
                          loading="lazy"
                          format="webp"
                        />
                      </div>
                      <div data-v-85e8cd44 className="flex gap-1 items-center">
                        <div data-v-85e8cd44 className="text-lg">
                          4.96
                        </div>
                        <div data-v-85e8cd44 className="opacity-70">
                          /5
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-85e8cd44
                      className="flex justify-center items-center gap-1 xs:hidden"
                    >
                      <div data-v-85e8cd44 className="font-bold">
                        357
                      </div>
                      <div data-v-85e8cd44 className="review-count-label">
                        customer ratings
                      </div>
                    </div>
                    <div
                      data-v-85e8cd44
                      className="flex justify-center items-center mt-2 xs:hidden"
                    >
              
                    </div>
                  </div>
                </div>
                <div data-v-85e8cd44 className="h-full" style={{ width: "45%" }}>
                  <div
                    data-v-85e8cd44
                
                    className="card flex justify-center items-center flex-col mb-8"
                    style={{ height: "20%", width: "85%", 
                       background: "#20283a",
                    borderRadius: "15px",
                    padding: "30px",
                    position: "relative",
                    zIndex: 1
                }}
                  >
                    <div data-v-85e8cd44 className="opacity-90 sm:text-xs">
                      “Great deal. Price is perfect and everything was delivered in
                      one go. Absolutely professional. “
                    </div>
                  </div>
                  <div
                    data-v-85e8cd44
                    className="card flex justify-center items-center flex-col"
                    style={{ height: "60%",
                     
                    background: "#20283a",
                        borderRadius: "15px",
                        padding: "30px",
                        position: "relative",
                        zIndex: 1
                    
                    }}
                  >
                    <img
                      data-v-85e8cd44
                      src={SellerAvatar}
                      alt
                      loading="lazy"
                      format="webp"
                      style={{ width: "74px", height: "74px",
                     }}
                    />
                    <div
                      data-v-85e8cd44
                      className="my-7 text-center opacity-90 sm:text-xs"
                    >
                      “Greatttttttttt“
                    </div>
                    <div data-v-85e8cd44 className="flex gap-1">
                      <img
                        data-v-85e8cd44
                        src={Star}
                        alt
                        loading="lazy"
                        format="webp"
                      />
                      <img
                        data-v-85e8cd44
                        src={Star}
                        alt
                        loading="lazy"
                        format="webp"
                      />
                      <img
                        data-v-85e8cd44
                        src={Star}
                        alt
                        loading="lazy"
                        format="webp"
                      />
                      <img
                        data-v-85e8cd44
                        src={Star}
                        alt
                        loading="lazy"
                        format="webp"
                      />
                      <img
                        data-v-85e8cd44
                        src={Star}
                        alt
                        loading="lazy"
                        format="webp"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-v-85e8cd44
              className="flex flex-col self-center sm:text-center sm:mb-8 relative"
            >
              <div data-v-85e8cd44 className="font-bold text-5xl sm:text-3xl">
                Customers <span className="text-secondary">Trust us</span>
              </div>
              <div data-v-85e8cd44 className="font-light my-8 opacity-70 max-w-lg">
                With countless five-star reviews, come and find out why we've been
                rated the best platform each year running.
              </div>
              <div data-v-85e8cd44 className="mt-8 sm:mt-4">
                <a
                  data-v-1fb46fc5
                  data-v-85e8cd44
                  href="https://www.trustpilot.com/review/igitems.com"
                  rel="noreferer, ,noopener"
                  target="_blank"
                  className="btn text-center cursor-pointer"
                  style={{
                    background: "rgb(55, 114, 255)",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  Read all reviews
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center mt-12"
          style={{ "background-color": "rgb(25, 33, 52)" }}
        >
          <div className="container flex justify-center items-center flex-col py-12 my-12">
            <div className="font-bold text-4xl tracking-wider text-center sm:text-3xl">
              Ready to start?
            </div>
            <div
              className="text-subtitle1 text-center py-8"
              style={{ "letter-spacing": "0.3px" }}
            >
              Start trading today. Maximize your gaming experience with just a few
              clicks.
            </div>
            <div className="flex gap-4 mt-4">
              <div 
              
        onClick={() => {
          focusSearch()
        }}
              data-v-1fb46fc5 className="btn text-center cursor-pointer wide">
                Begin Buying
              </div>
              <div
                data-v-1fb46fc5
                className="btn text-center cursor-pointer secondary wide"
              >
                Start Selling
              </div>
            </div>
          </div>
        </div>
        <div className="container py-12 text-center">
          <div className="flex-col justify-center items-center">
            <div className="font-bold text-4xl tracking-wider flex gap-3 flex-wrap sm:justify-center">
              About <span className="text-primary">AutoMMService</span>
            </div>
          </div>
          <div className="my-12 text-justify opacity-80">
            <div className="text-weight-thin leading-relaxed">
            AutoMMService was founded in 2020 to start a new chapter in gaming goods
              trading. The three founders had a simple mission; to create a virtual
              goods marketplace with the best overall user experience. Our goal is to
              make selling and buying virtual goods pleasant, rewarding, and
              effortless. We have combined our decade-long industry expertise with top
              talents to achieve this goal. <br />
              <br /> As a result, AutoMMService sets to become the go-to gaming goods
              marketplace. Throughout its lifetime, the platform is not only planning
              to house all transacting marketplaces but to discover and create new
              ones. Along the way, the user experience would continue to increase
              according to any recent trends which affect gaming.
            </div>
          </div>
        </div>
        <div data-v-82610a80 className="container py-8">
          <div data-v-82610a80 className="text-4xl font-bold mb-2 sm:text-2xl">
            Frequently asked questions:
          </div>
          <div data-v-82610a80 className="text-secondary font-bold sm:text-sm">
            Get to know more about AutoMMService:
          </div>
          <div
            data-v-82610a80
            className="mt-12 flex flex-col grow sm:mt-6"
            style={{
              background: "rgb(18, 19, 35)",
              "box-shadow": "rgba(0, 0, 0, 0.38) 0px 4px 15px",
              "border-radius": "20px",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <div
              data-v-82610a80
              className="w-full flex justify-center overflow-auto xs:justify-start"
            >
              <div data-v-82610a80 className="p-4 cursor-pointer" >
                Accounts
              </div>
              <div
                data-v-82610a80
                className="p-4 cursor-pointer border-b-2 border-secondary"
              >
                Currency
              </div>
              <div data-v-82610a80 className="p-4 cursor-pointer">
                Items
              </div>
              <div data-v-82610a80 className="p-4 cursor-pointer">
                PlayBoost
              </div>
              <div data-v-82610a80 className="p-4 cursor-pointer">
                Coaching
              </div>
            </div>
            <div
              data-v-82610a80
              className="contact-box grow"
              style={{ "border-radius": "0px 0px 20px 20px" }}
            >
              <div data-v-82610a80>
                <div data-v-82610a80>
                  <div data-v-82610a80>
                    <div data-v-82610a80 className="p-2">
                      <div
                        data-v-82610a80
                        className="text-white text-lg py-1 w-full cursor-pointer xs:text-base xs:py-0"
                      >
                        How does in-game currency buying works?
                      </div>
                      {/**/}
                      {/**/}
                    </div>
                    <div data-v-82610a80 className="w-full my-2 h-0.5 bg-white/10" />
                  </div>
                  <div data-v-82610a80>
                    <div data-v-82610a80 className="p-2">
                      <div
                        data-v-82610a80
                        className="text-white text-lg py-1 w-full cursor-pointer xs:text-base xs:py-0"
                      >
                        How does the seller deliver in-game currency (silver, gold,
                        money, etc.)?
                      </div>
                      {/**/}
                      {/**/}
                    </div>
                    <div data-v-82610a80 className="w-full my-2 h-0.5 bg-white/10" />
                  </div>
                  <div data-v-82610a80>
                    <div data-v-82610a80 className="p-2">
                      <div
                        data-v-82610a80
                        className="text-white text-lg py-1 w-full cursor-pointer xs:text-base xs:py-0"
                      >
                        Why is AutoMMService the best choice to buy in-game currencies?
                      </div>
                      {/**/}
                      {/**/}
                    </div>
                    <div data-v-82610a80 className="w-full my-2 h-0.5 bg-white/10" />
                  </div>
                  <div data-v-82610a80>
                    <div data-v-82610a80 className="p-2">
                      <div
                        data-v-82610a80
                        className="text-white text-lg py-1 w-full cursor-pointer xs:text-base xs:py-0"
                      >
                        How fast do I get Delivery after finishing payment?
                      </div>
                      {/**/}
                      {/**/}
                    </div>
                    {/**/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      
    )
}

export default Home