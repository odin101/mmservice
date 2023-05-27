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
                   onClick={() => navigate("/dashboard/create-offer")}
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
                    <svg
                      data-v-f6451ad8
                      width={91}
                      height={23}
                      viewBox="0 0 91 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        data-v-f6451ad8
                        d="M23.6864 8.02295H32.8035V9.7202H29.2137V19.2879H27.2461V9.7202H23.6714L23.6864 8.02295ZM32.413 11.1321H34.0952V12.7092H34.1253C34.1853 12.4839 34.2905 12.2736 34.4407 12.0633C34.5909 11.853 34.7711 11.6578 34.9964 11.4926C35.2067 11.3123 35.447 11.1771 35.7174 11.072C35.9727 10.9669 36.2431 10.9068 36.5134 10.9068C36.7237 10.9068 36.8739 10.9218 36.949 10.9218C37.0241 10.9368 37.1142 10.9518 37.1893 10.9518V12.6791C37.0692 12.6491 36.934 12.6341 36.7988 12.619C36.6636 12.604 36.5435 12.589 36.4083 12.589C36.1079 12.589 35.8225 12.6491 35.5521 12.7692C35.2818 12.8894 35.0565 13.0696 34.8462 13.2949C34.651 13.5353 34.4857 13.8206 34.3656 14.1661C34.2454 14.5116 34.1853 14.9171 34.1853 15.3677V19.2428H32.3829L32.413 11.1321ZM45.4503 19.2879H43.6779V18.1464H43.6479C43.4226 18.5669 43.0922 18.8824 42.6566 19.1377C42.221 19.393 41.7704 19.5132 41.3198 19.5132C40.2534 19.5132 39.4723 19.2579 38.9917 18.7171C38.5111 18.1914 38.2708 17.3804 38.2708 16.3139V11.1321H40.0731V16.1337C40.0731 16.8547 40.2083 17.3653 40.4937 17.6507C40.7641 17.9511 41.1546 18.1013 41.6502 18.1013C42.0257 18.1013 42.3412 18.0412 42.5965 17.9211C42.8518 17.8009 43.0621 17.6507 43.2123 17.4555C43.3775 17.2602 43.4827 17.0199 43.5578 16.7495C43.6329 16.4792 43.6629 16.1788 43.6629 15.8634V11.1321H45.4653V19.2879H45.4503ZM48.5143 16.6744C48.5744 17.2001 48.7697 17.5606 49.1151 17.7859C49.4606 17.9962 49.8812 18.1013 50.3618 18.1013C50.527 18.1013 50.7223 18.0863 50.9326 18.0563C51.1428 18.0262 51.3531 17.9812 51.5333 17.9061C51.7286 17.831 51.8788 17.7258 51.999 17.5756C52.1191 17.4254 52.1792 17.2452 52.1642 17.0199C52.1492 16.7946 52.0741 16.5993 51.9088 16.4491C51.7436 16.2989 51.5484 16.1938 51.3081 16.0886C51.0677 15.9985 50.7824 15.9234 50.4669 15.8634C50.1515 15.8033 49.8361 15.7282 49.5057 15.6531C49.1752 15.578 48.8448 15.4879 48.5294 15.3827C48.2139 15.2776 47.9436 15.1424 47.6882 14.9471C47.4479 14.7669 47.2377 14.5416 47.1025 14.2562C46.9523 13.9708 46.8772 13.6404 46.8772 13.2198C46.8772 12.7692 46.9823 12.4088 47.2076 12.1084C47.4179 11.808 47.7033 11.5677 48.0337 11.3874C48.3641 11.2072 48.7396 11.072 49.1452 10.9969C49.5507 10.9218 49.9412 10.8918 50.3017 10.8918C50.7223 10.8918 51.1278 10.9368 51.5033 11.0269C51.8788 11.1171 52.2393 11.2522 52.5397 11.4625C52.8551 11.6578 53.1104 11.9281 53.3057 12.2435C53.516 12.559 53.6361 12.9495 53.6962 13.4001H51.8187C51.7286 12.9645 51.5333 12.6791 51.233 12.5289C50.9175 12.3787 50.5721 12.3036 50.1665 12.3036C50.0464 12.3036 49.8812 12.3186 49.7159 12.3337C49.5357 12.3637 49.3855 12.3938 49.2203 12.4538C49.0701 12.5139 48.9349 12.604 48.8298 12.7092C48.7246 12.8143 48.6645 12.9645 48.6645 13.1447C48.6645 13.37 48.7396 13.5353 48.8898 13.6704C49.04 13.8056 49.2353 13.9108 49.4906 14.0159C49.731 14.106 50.0163 14.1811 50.3318 14.2412C50.6472 14.3013 50.9776 14.3764 51.3081 14.4515C51.6385 14.5266 51.9539 14.6167 52.2693 14.7218C52.5847 14.827 52.8701 14.9622 53.1104 15.1574C53.3508 15.3377 53.561 15.563 53.7112 15.8333C53.8614 16.1037 53.9365 16.4491 53.9365 16.8396C53.9365 17.3203 53.8314 17.7258 53.6061 18.0713C53.3808 18.4017 53.0954 18.6871 52.75 18.8974C52.4045 19.1077 51.999 19.2579 51.5784 19.363C51.1428 19.4531 50.7223 19.5132 50.3017 19.5132C49.791 19.5132 49.3104 19.4531 48.8748 19.333C48.4392 19.2128 48.0487 19.0326 47.7333 18.8073C47.4179 18.5669 47.1625 18.2816 46.9823 17.9211C46.8021 17.5756 46.6969 17.1551 46.6819 16.6594H48.4993V16.6744H48.5143ZM54.4472 11.1321H55.814V8.66881H57.6164V11.1171H59.2386V12.4538H57.6164V16.8096C57.6164 17.0049 57.6314 17.1551 57.6465 17.3053C57.6615 17.4404 57.7065 17.5606 57.7516 17.6507C57.8117 17.7408 57.9018 17.8159 58.0069 17.861C58.1271 17.9061 58.2773 17.9361 58.4876 17.9361C58.6077 17.9361 58.7429 17.9361 58.8631 17.9211C58.9832 17.9061 59.1184 17.891 59.2386 17.861V19.2579C59.0433 19.2879 58.8481 19.3029 58.6528 19.3179C58.4575 19.348 58.2773 19.348 58.067 19.348C57.5864 19.348 57.2109 19.3029 56.9255 19.2128C56.6401 19.1227 56.4148 18.9875 56.2496 18.8223C56.0844 18.642 55.9792 18.4318 55.9192 18.1764C55.8591 17.9211 55.829 17.6057 55.814 17.2752V12.4688H54.4472V11.102V11.1321ZM60.5002 11.1321H62.1975V12.2435H62.2275C62.4829 11.7629 62.8283 11.4325 63.2789 11.2222C63.7295 11.0119 64.2102 10.9068 64.7509 10.9068C65.3967 10.9068 65.9525 11.0119 66.4331 11.2522C66.9138 11.4775 67.3043 11.7779 67.6197 12.1835C67.9351 12.574 68.1754 13.0396 68.3256 13.5653C68.4758 14.091 68.5659 14.6618 68.5659 15.2475C68.5659 15.8033 68.4908 16.329 68.3557 16.8396C68.2055 17.3503 67.9952 17.8159 67.7098 18.2065C67.4244 18.597 67.064 18.9124 66.6134 19.1527C66.1628 19.393 65.6521 19.5132 65.0513 19.5132C64.7959 19.5132 64.5256 19.4832 64.2702 19.4381C64.0149 19.393 63.7596 19.3179 63.5192 19.2128C63.2789 19.1077 63.0536 18.9725 62.8584 18.8073C62.6481 18.642 62.4829 18.4468 62.3477 18.2365H62.3177V22.3069H60.5153V11.1321H60.5002ZM66.7936 15.2175C66.7936 14.857 66.7485 14.4965 66.6434 14.1511C66.5533 13.8056 66.4031 13.5052 66.2078 13.2349C66.0126 12.9645 65.7722 12.7542 65.5019 12.589C65.2165 12.4238 64.8861 12.3487 64.5256 12.3487C63.7746 12.3487 63.2038 12.604 62.8133 13.1297C62.4378 13.6554 62.2426 14.3614 62.2426 15.2325C62.2426 15.6531 62.2876 16.0286 62.3928 16.374C62.4979 16.7195 62.6331 17.0199 62.8434 17.2752C63.0386 17.5306 63.2789 17.7258 63.5643 17.876C63.8497 18.0262 64.1651 18.1013 64.5406 18.1013C64.9612 18.1013 65.2916 18.0112 65.577 17.846C65.8624 17.6808 66.0877 17.4555 66.2829 17.2001C66.4632 16.9298 66.5983 16.6294 66.6734 16.2839C66.7485 15.9234 66.7936 15.578 66.7936 15.2175ZM69.9628 8.02295H71.7652V9.7202H69.9628V8.02295ZM69.9628 11.1321H71.7652V19.2879H69.9628V11.1321ZM73.3723 8.02295H75.1747V19.2879H73.3723V8.02295ZM80.672 19.5132C80.0261 19.5132 79.4404 19.4081 78.9297 19.1828C78.419 18.9575 77.9985 18.6721 77.638 18.2966C77.2925 17.9211 77.0222 17.4555 76.8419 16.9298C76.6617 16.4041 76.5565 15.8183 76.5565 15.2025C76.5565 14.5867 76.6467 14.0159 76.8419 13.4902C77.0222 12.9645 77.2925 12.5139 77.638 12.1234C77.9834 11.7479 78.419 11.4475 78.9297 11.2372C79.4404 11.0269 80.0261 10.9068 80.672 10.9068C81.3179 10.9068 81.9036 11.0119 82.4143 11.2372C82.925 11.4475 83.3456 11.7479 83.706 12.1234C84.0515 12.4989 84.3218 12.9645 84.5021 13.4902C84.6823 14.0159 84.7875 14.5867 84.7875 15.2025C84.7875 15.8333 84.6973 16.4041 84.5021 16.9298C84.3068 17.4555 84.0515 17.9061 83.706 18.2966C83.3606 18.6721 82.925 18.9725 82.4143 19.1828C81.9036 19.393 81.3329 19.5132 80.672 19.5132ZM80.672 18.0863C81.0625 18.0863 81.423 17.9962 81.7084 17.831C82.0088 17.6657 82.2341 17.4404 82.4293 17.1701C82.6246 16.8997 82.7598 16.5843 82.8499 16.2539C82.94 15.9084 82.9851 15.563 82.9851 15.2025C82.9851 14.857 82.94 14.5116 82.8499 14.1661C82.7598 13.8206 82.6246 13.5202 82.4293 13.2499C82.2341 12.9795 81.9938 12.7693 81.7084 12.604C81.408 12.4388 81.0625 12.3487 80.672 12.3487C80.2815 12.3487 79.921 12.4388 79.6356 12.604C79.3352 12.7693 79.1099 12.9945 78.9147 13.2499C78.7194 13.5202 78.5842 13.8206 78.4941 14.1661C78.404 14.5116 78.3589 14.857 78.3589 15.2025C78.3589 15.563 78.404 15.9084 78.4941 16.2539C78.5842 16.5993 78.7194 16.8997 78.9147 17.1701C79.1099 17.4404 79.3503 17.6657 79.6356 17.831C79.936 18.0112 80.2815 18.0863 80.672 18.0863ZM85.3282 11.1321H86.695V8.66881H88.4974V11.1171H90.1195V12.4538H88.4974V16.8096C88.4974 17.0049 88.5124 17.1551 88.5274 17.3053C88.5424 17.4404 88.5875 17.5606 88.6326 17.6507C88.6926 17.7408 88.7828 17.8159 88.8879 17.861C89.0081 17.9061 89.1583 17.9361 89.3685 17.9361C89.4887 17.9361 89.6239 17.9361 89.744 17.9211C89.8642 17.9061 89.9994 17.891 90.1195 17.861V19.2579C89.9243 19.2879 89.729 19.3029 89.5338 19.3179C89.3385 19.348 89.1583 19.348 88.948 19.348C88.4674 19.348 88.0919 19.3029 87.8065 19.2128C87.5211 19.1227 87.2958 18.9875 87.1306 18.8223C86.9654 18.642 86.8602 18.4318 86.8001 18.1764C86.7401 17.9211 86.71 17.6057 86.695 17.2752V12.4688H85.3282V11.102V11.1321Z"
                        fill="#ffffff"
                      />
                      <path
                        data-v-f6451ad8
                        d="M21.5836 8.02302H13.3377L10.7993 0.182617L8.24594 8.02302L0 8.008L6.66885 12.8594L4.11546 20.6998L10.7843 15.8484L17.4532 20.6998L14.9148 12.8594L21.5836 8.02302Z"
                        fill="#00B67A"
                      />
                    </svg>
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
                  <source
                    data-v-f6451ad8
                    srcSet="/img/home/home-main-mobile.png"
                    type="image/jpeg"
                  />
                  <img
                    data-v-f6451ad8
                    className="absolute main-img max-w-none"
                    src="/img/home/home-main-mobile.png"
                    alt="lol elo boosting"
                    title="lol elo boosting"
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