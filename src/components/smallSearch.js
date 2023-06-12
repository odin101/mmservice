import React from 'react'
import LimitedStock from '../img/icons/limited-stock.gif'
import { Link } from 'react-router-dom'
export default function smallSearch(props) {
  return (
<div data-v-9f5b85b4>
  <div style={{"background":"#1F2332","position":"fixed","top":"0","left":"0","right":"0","z-index":"300"}} className data-v-9f5b85b4 data-v-5315b842>
    <div className="header flex items-center justify-between container" data-v-5315b842>
      <div className="flex items-center gap-8" data-v-5315b842>
        <a aria-current="page" href="/" className="router-link-active router-link-exact-active flex" alt="igitems" data-v-5315b842>
        </a>
        <div className="row flex-left no-wrap items-center absolute left-0 right-0 top-0 z-50" data-v-5315b842>
          <div className="rounded-full p-3 px-6 w-full gap-4 flex items-center bg-box" style={{"box-shadow":"0px 4px 17px rgba(0, 0, 0, 0.04)"}}>
            <div data-v-b2745a4d>
              <div className="flex sm:flex" data-v-b2745a4d>
                <input className="bg-transparent border-0 outline-none duration-300 w-[360px] xs:w-full xs:rounded-none" autoComplete="off" defaultValue placeholder="Find your games, products..." data-v-b2745a4d />
                <div 
                onClick={() => {
                 props.close()
                }}
                className="cursor-pointer absolute hidden sm:block" style={{"top":"18px","right":"18px"}} data-v-b2745a4d>
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b2745a4d>
                    <path d="M1.17105 1.99697C1.11682 1.94274 1.0738 1.87835 1.04446 1.8075C1.01511 1.73664 1 1.6607 1 1.58401C1 1.50732 1.01511 1.43137 1.04446 1.36052C1.0738 1.28966 1.11682 1.22528 1.17105 1.17105C1.22528 1.11682 1.28966 1.0738 1.36052 1.04446C1.43137 1.01511 1.50732 1 1.58401 1C1.6607 1 1.73664 1.01511 1.8075 1.04446C1.87835 1.0738 1.94274 1.11682 1.99697 1.17105L8 7.17525L14.003 1.17105C14.0573 1.11682 14.1216 1.0738 14.1925 1.04446C14.2634 1.01511 14.3393 1 14.416 1C14.4927 1 14.5686 1.01511 14.6395 1.04446C14.7103 1.0738 14.7747 1.11682 14.8289 1.17105C14.8832 1.22528 14.9262 1.28966 14.9555 1.36052C14.9849 1.43137 15 1.50732 15 1.58401C15 1.6607 14.9849 1.73664 14.9555 1.8075C14.9262 1.87835 14.8832 1.94274 14.8289 1.99697L8.82475 8L14.8289 14.003C14.8832 14.0573 14.9262 14.1216 14.9555 14.1925C14.9849 14.2634 15 14.3393 15 14.416C15 14.4927 14.9849 14.5686 14.9555 14.6395C14.9262 14.7103 14.8832 14.7747 14.8289 14.8289C14.7747 14.8832 14.7103 14.9262 14.6395 14.9555C14.5686 14.9849 14.4927 15 14.416 15C14.3393 15 14.2634 14.9849 14.1925 14.9555C14.1216 14.9262 14.0573 14.8832 14.003 14.8289L8 8.82475L1.99697 14.8289C1.94274 14.8832 1.87835 14.9262 1.8075 14.9555C1.73664 14.9849 1.6607 15 1.58401 15C1.50732 15 1.43137 14.9849 1.36052 14.9555C1.28966 14.9262 1.22528 14.8832 1.17105 14.8289C1.11682 14.7747 1.0738 14.7103 1.04446 14.6395C1.01511 14.5686 1 14.4927 1 14.416C1 14.3393 1.01511 14.2634 1.04446 14.1925C1.0738 14.1216 1.11682 14.0573 1.17105 14.003L7.17525 8L1.17105 1.99697Z" fill="white" fillOpacity="0.7" data-v-b2745a4d />
                    <path d="M1.10034 2.06768L1.10035 2.06768L7.03382 8L1.10035 13.9323L1.10034 13.9323C1.03683 13.9958 0.986442 14.0712 0.952067 14.1542C0.917692 14.2372 0.9 14.3262 0.9 14.416C0.9 14.5058 0.917692 14.5948 0.952067 14.6778C0.986442 14.7607 1.03683 14.8361 1.10034 14.8997C1.16386 14.9632 1.23926 15.0136 1.32225 15.0479C1.40524 15.0823 1.49418 15.1 1.58401 15.1C1.67383 15.1 1.76278 15.0823 1.84577 15.0479C1.92876 15.0136 2.00416 14.9632 2.06768 14.8997L2.06768 14.8997L8 8.96618L13.9323 14.8997L13.9323 14.8997C13.9958 14.9632 14.0712 15.0136 14.1542 15.0479C14.2372 15.0823 14.3262 15.1 14.416 15.1C14.5058 15.1 14.5948 15.0823 14.6777 15.0479C14.7607 15.0136 14.8361 14.9632 14.8997 14.8997C14.9632 14.8361 15.0136 14.7607 15.0479 14.6778C15.0823 14.5948 15.1 14.5058 15.1 14.416C15.1 14.3262 15.0823 14.2372 15.0479 14.1542C15.0136 14.0712 14.9632 13.9958 14.8997 13.9323L14.8997 13.9323L8.96618 8L14.8997 2.06768L14.8997 2.06768C14.9632 2.00416 15.0136 1.92876 15.0479 1.84577C15.0823 1.76278 15.1 1.67383 15.1 1.58401C15.1 1.49418 15.0823 1.40524 15.0479 1.32225C15.0136 1.23926 14.9632 1.16386 14.8997 1.10034L14.8291 1.17088L14.8997 1.10034C14.8361 1.03683 14.7607 0.986442 14.6778 0.952067C14.5948 0.917692 14.5058 0.9 14.416 0.9C14.3262 0.9 14.2372 0.917692 14.1542 0.952067C14.0712 0.986442 13.9958 1.03683 13.9323 1.10034L13.9323 1.10035L8 7.03382L2.06768 1.10035L2.06768 1.10034C2.00416 1.03683 1.92876 0.986442 1.84577 0.952067C1.76278 0.917692 1.67383 0.9 1.58401 0.9C1.49418 0.9 1.40524 0.917692 1.32225 0.952067C1.23926 0.986442 1.16386 1.03683 1.10034 1.10034C1.03683 1.16386 0.986442 1.23926 0.952067 1.32225C0.917692 1.40524 0.9 1.49418 0.9 1.58401C0.9 1.67383 0.917692 1.76278 0.952067 1.84577C0.986442 1.92876 1.03683 2.00416 1.10034 2.06768Z" stroke="white" strokeOpacity="0.7" strokeWidth="0.2" data-v-b2745a4d />
                  </svg>
                </div>
                <div data-v-b2745a4d className="absolute z-20 w-full" style={{"width":"100%","inset":"50px 0px 0px","height":"100vh"}}>
                  <div data-v-b2745a4d data-overlayscrollbars-initialize className="py-2 px-4" style={{"width":"100%","height":"100%","background":"rgb(42, 46, 60)"}} data-overlayscrollbars="host">
                    <div className="os-size-observer os-size-observer-appear">
                      <div className="os-size-observer-listener ltr" />
                    </div>
                    <div className="os-viewport os-viewport-scrollbar-hidden" style={{"margin-right":"-32px","margin-bottom":"-16px","margin-left":"0px","top":"-8px","right":"auto","left":"-16px","width":"calc(100% + 32px)","padding":"8px 16px","overflow-y":"scroll"}}>
                      <div data-v-b2745a4d className="flex flex-col">
                        {/**/}{/**/}
                        <div data-v-b2745a4d className="relative order-1">
                          <div data-v-b2745a4d className="font-bold text-xs px-4 mb-2 mt-4 text-white/40">Categories</div>
                          {
                            props.games.map(gm => {
                              return (

                          <Link to={"/items/"+gm} onClick={() =>   props.close()} data-v-b2745a4d href="/clashofclans-account" className="flex items-center py-3 px-4 gap-4 no-wrap duration-300 hover" clickable>
                            <div data-v-b2745a4d className="flex items-center gap-2">
                              <img data-v-b2745a4d src={LimitedStock} width={16} height={16} alt style={{"width":"16px"}} />
                              <div data-v-b2745a4d>{gm}</div>
                            </div>
                          </Link>
                              )

                            })
                          }
                        
                        </div>
                      </div>
                    </div>
                    <div className="os-scrollbar os-scrollbar-horizontal os-theme-dark os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                      <div className="os-scrollbar-track">
                        <div className="os-scrollbar-handle" style={{"width":"100%"}} />
                      </div>
                    </div>
                    <div className="os-scrollbar os-scrollbar-vertical os-theme-dark os-scrollbar-handle-interactive os-scrollbar-visible os-scrollbar-cornerless">
                      <div className="os-scrollbar-track">
                        <div className="os-scrollbar-handle" style={{"height":"25.592%","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}} />
                      </div>
                    </div>
                  </div>
                </div>
                <svg className="sm:hidden duration-300" width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"margin-top":"2px","-webkit-transform":"scale(1.2)","-ms-transform":"scale(1.2)","transform":"scale(1.2)"}} data-v-b2745a4d>
                  <path d="M18.375 18.375L14.4497 14.4428L18.375 18.375ZM16.625 9.1875C16.625 11.16 15.8414 13.0518 14.4466 14.4466C13.0518 15.8414 11.16 16.625 9.1875 16.625C7.21495 16.625 5.3232 15.8414 3.92839 14.4466C2.53359 13.0518 1.75 11.16 1.75 9.1875C1.75 7.21495 2.53359 5.3232 3.92839 3.92839C5.3232 2.53359 7.21495 1.75 9.1875 1.75C11.16 1.75 13.0518 2.53359 14.4466 3.92839C15.8414 5.3232 16.625 7.21495 16.625 9.1875V9.1875Z" stroke="white" strokeOpacity="0.7" strokeWidth={2} strokeLinecap="round" data-v-b2745a4d />
                </svg>
              </div>
              {/**/}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-16 md:gap-4" data-v-5315b842>
        <div className="flex items-center gap-2" data-v-5315b842>
          <div className="flex items-center gap-1 hidden sm:block" data-v-5315b842>
            <div className="cursor-pointer text-secondary font-bold" data-v-5315b842>
              <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-5315b842>
                <path d="M18.375 18.375L14.4497 14.4428L18.375 18.375ZM16.625 9.1875C16.625 11.16 15.8414 13.0518 14.4466 14.4466C13.0518 15.8414 11.16 16.625 9.1875 16.625C7.21495 16.625 5.3232 15.8414 3.92839 14.4466C2.53359 13.0518 1.75 11.16 1.75 9.1875C1.75 7.21495 2.53359 5.3232 3.92839 3.92839C5.3232 2.53359 7.21495 1.75 9.1875 1.75C11.16 1.75 13.0518 2.53359 14.4466 3.92839C15.8414 5.3232 16.625 7.21495 16.625 9.1875V9.1875Z" stroke="white" strokeOpacity="0.7" strokeWidth={2} strokeLinecap="round" data-v-5315b842 />
              </svg>
            </div>
          </div>
        </div>
        <div data-v-5315b842 className="justify-center items-center gap-4 hidden md:flex">
          <div data-v-5315b842 className="flex items-center">
            {/**/}
          </div>
          <a data-v-5315b842 href="/dashboard/orders/buying" className id="clientAreaButton">
            <svg data-v-5315b842 width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle data-v-5315b842 cx={12} cy={12} r={12} fill="#FFA300" />
              <path data-v-5315b842 d="M5 18.5C5 16.0147 7.01472 14 9.5 14H14.5C16.9853 14 19 16.0147 19 18.5C14.7359 21.2412 9.26412 21.2412 5 18.5Z" fill="#171D29" />
              <path data-v-5315b842 d="M16 8.5C16 10.9853 14.2091 13 12 13C9.79086 13 8 10.9853 8 8.5C8 6.01472 8.5 4 12 4C15.5 4 16 6.01472 16 8.5Z" fill="#171D29" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/**/}{/**/}{/**/}
  <div className="main-wrapper" data-v-9f5b85b4>
    {/*[*/}
    <div className="nuxt-loading-indicator" style={{"position":"fixed","top":"0px","right":"0px","left":"0px","pointer-events":"none","width":"auto","height":"2px","opacity":"0","background":"rgb(255, 163, 0)","-webkit-transform":"scaleX(0)","-ms-transform":"scaleX(0)","transform":"scaleX(0)","-webkit-transform-origin":"left center","-ms-transform-origin":"left center","transform-origin":"left center","-webkit-transition":"transform 0.1s ease 0s, height 0.4s ease 0s, opacity 0.4s ease 0s","transition":"transform 0.1s ease 0s, height 0.4s ease 0s, opacity 0.4s ease 0s","z-index":"999999"}} />
    {/**/}
    <div>
      <div style={{"min-height":"1000px","overflow-x":"hidden !important"}}>
        <div data-v-f6451ad8>
          <div className="relative flex justify-center items-center" data-v-f6451ad8>
            <div className="w-full h-full absolute" style={{"background":"linear-gradient(147.67deg, rgba(228, 217, 231, 0.02) 11.28%, rgba(204, 241, 255, 0.02) 112.84%)","clip-path":"polygon(0 0, 100% 0, 100% 75%, 0% 100%)"}} data-v-f6451ad8 />
            <div className="container flex pt-16 sm:flex-col xs:pt-8" data-v-f6451ad8>
              <div className="flex-col py-12 relative pt-16 pb-36 xs:pb-0 xs:pt-0" style={{"max-width":"750px"}} data-v-f6451ad8>
                <h1 className="font-extrabold text-6xl leading-none xs:text-3xl xs:leading-tight xs:max-w-[350px]" style={{"letter-spacing":"0.1px"}} data-v-f6451ad8>The Gaming Goods Platform</h1>
                <div className="font-light my-8" style={{"letter-spacing":"0.3px","line-height":"170%"}} data-v-f6451ad8>Achieving your dream playing experience has never been easier.</div>
                <div className="btn-group mt-8 flex gap-2 xs:grid xs:grid-cols-2" data-v-f6451ad8>
                  <div className="btn text-center cursor-pointer wide" style={{}} data-v-f6451ad8 data-v-1fb46fc5>
                    {/*[*/}Begin Buying{/*]*/}
                  </div>
                  <div className="btn text-center cursor-pointer secondary wide" style={{}} data-v-f6451ad8 data-v-1fb46fc5>
                    {/*[*/}Start Selling{/*]*/}
                  </div>
                </div>
                <a className="inline-block mt-12 hover:text-secondary hover:underline" href="https://www.trustpilot.com/review/igitems.com" target="_blank" rel="noopener noreferrer" data-v-f6451ad8>
                  <div className="flex flex-wrap gap-4 items-center sm:gap-2 sm:text-sm" data-v-f6451ad8>
                    <svg width={91} height={23} viewBox="0 0 91 23" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f6451ad8>
                      <path d="M23.6864 8.02295H32.8035V9.7202H29.2137V19.2879H27.2461V9.7202H23.6714L23.6864 8.02295ZM32.413 11.1321H34.0952V12.7092H34.1253C34.1853 12.4839 34.2905 12.2736 34.4407 12.0633C34.5909 11.853 34.7711 11.6578 34.9964 11.4926C35.2067 11.3123 35.447 11.1771 35.7174 11.072C35.9727 10.9669 36.2431 10.9068 36.5134 10.9068C36.7237 10.9068 36.8739 10.9218 36.949 10.9218C37.0241 10.9368 37.1142 10.9518 37.1893 10.9518V12.6791C37.0692 12.6491 36.934 12.6341 36.7988 12.619C36.6636 12.604 36.5435 12.589 36.4083 12.589C36.1079 12.589 35.8225 12.6491 35.5521 12.7692C35.2818 12.8894 35.0565 13.0696 34.8462 13.2949C34.651 13.5353 34.4857 13.8206 34.3656 14.1661C34.2454 14.5116 34.1853 14.9171 34.1853 15.3677V19.2428H32.3829L32.413 11.1321ZM45.4503 19.2879H43.6779V18.1464H43.6479C43.4226 18.5669 43.0922 18.8824 42.6566 19.1377C42.221 19.393 41.7704 19.5132 41.3198 19.5132C40.2534 19.5132 39.4723 19.2579 38.9917 18.7171C38.5111 18.1914 38.2708 17.3804 38.2708 16.3139V11.1321H40.0731V16.1337C40.0731 16.8547 40.2083 17.3653 40.4937 17.6507C40.7641 17.9511 41.1546 18.1013 41.6502 18.1013C42.0257 18.1013 42.3412 18.0412 42.5965 17.9211C42.8518 17.8009 43.0621 17.6507 43.2123 17.4555C43.3775 17.2602 43.4827 17.0199 43.5578 16.7495C43.6329 16.4792 43.6629 16.1788 43.6629 15.8634V11.1321H45.4653V19.2879H45.4503ZM48.5143 16.6744C48.5744 17.2001 48.7697 17.5606 49.1151 17.7859C49.4606 17.9962 49.8812 18.1013 50.3618 18.1013C50.527 18.1013 50.7223 18.0863 50.9326 18.0563C51.1428 18.0262 51.3531 17.9812 51.5333 17.9061C51.7286 17.831 51.8788 17.7258 51.999 17.5756C52.1191 17.4254 52.1792 17.2452 52.1642 17.0199C52.1492 16.7946 52.0741 16.5993 51.9088 16.4491C51.7436 16.2989 51.5484 16.1938 51.3081 16.0886C51.0677 15.9985 50.7824 15.9234 50.4669 15.8634C50.1515 15.8033 49.8361 15.7282 49.5057 15.6531C49.1752 15.578 48.8448 15.4879 48.5294 15.3827C48.2139 15.2776 47.9436 15.1424 47.6882 14.9471C47.4479 14.7669 47.2377 14.5416 47.1025 14.2562C46.9523 13.9708 46.8772 13.6404 46.8772 13.2198C46.8772 12.7692 46.9823 12.4088 47.2076 12.1084C47.4179 11.808 47.7033 11.5677 48.0337 11.3874C48.3641 11.2072 48.7396 11.072 49.1452 10.9969C49.5507 10.9218 49.9412 10.8918 50.3017 10.8918C50.7223 10.8918 51.1278 10.9368 51.5033 11.0269C51.8788 11.1171 52.2393 11.2522 52.5397 11.4625C52.8551 11.6578 53.1104 11.9281 53.3057 12.2435C53.516 12.559 53.6361 12.9495 53.6962 13.4001H51.8187C51.7286 12.9645 51.5333 12.6791 51.233 12.5289C50.9175 12.3787 50.5721 12.3036 50.1665 12.3036C50.0464 12.3036 49.8812 12.3186 49.7159 12.3337C49.5357 12.3637 49.3855 12.3938 49.2203 12.4538C49.0701 12.5139 48.9349 12.604 48.8298 12.7092C48.7246 12.8143 48.6645 12.9645 48.6645 13.1447C48.6645 13.37 48.7396 13.5353 48.8898 13.6704C49.04 13.8056 49.2353 13.9108 49.4906 14.0159C49.731 14.106 50.0163 14.1811 50.3318 14.2412C50.6472 14.3013 50.9776 14.3764 51.3081 14.4515C51.6385 14.5266 51.9539 14.6167 52.2693 14.7218C52.5847 14.827 52.8701 14.9622 53.1104 15.1574C53.3508 15.3377 53.561 15.563 53.7112 15.8333C53.8614 16.1037 53.9365 16.4491 53.9365 16.8396C53.9365 17.3203 53.8314 17.7258 53.6061 18.0713C53.3808 18.4017 53.0954 18.6871 52.75 18.8974C52.4045 19.1077 51.999 19.2579 51.5784 19.363C51.1428 19.4531 50.7223 19.5132 50.3017 19.5132C49.791 19.5132 49.3104 19.4531 48.8748 19.333C48.4392 19.2128 48.0487 19.0326 47.7333 18.8073C47.4179 18.5669 47.1625 18.2816 46.9823 17.9211C46.8021 17.5756 46.6969 17.1551 46.6819 16.6594H48.4993V16.6744H48.5143ZM54.4472 11.1321H55.814V8.66881H57.6164V11.1171H59.2386V12.4538H57.6164V16.8096C57.6164 17.0049 57.6314 17.1551 57.6465 17.3053C57.6615 17.4404 57.7065 17.5606 57.7516 17.6507C57.8117 17.7408 57.9018 17.8159 58.0069 17.861C58.1271 17.9061 58.2773 17.9361 58.4876 17.9361C58.6077 17.9361 58.7429 17.9361 58.8631 17.9211C58.9832 17.9061 59.1184 17.891 59.2386 17.861V19.2579C59.0433 19.2879 58.8481 19.3029 58.6528 19.3179C58.4575 19.348 58.2773 19.348 58.067 19.348C57.5864 19.348 57.2109 19.3029 56.9255 19.2128C56.6401 19.1227 56.4148 18.9875 56.2496 18.8223C56.0844 18.642 55.9792 18.4318 55.9192 18.1764C55.8591 17.9211 55.829 17.6057 55.814 17.2752V12.4688H54.4472V11.102V11.1321ZM60.5002 11.1321H62.1975V12.2435H62.2275C62.4829 11.7629 62.8283 11.4325 63.2789 11.2222C63.7295 11.0119 64.2102 10.9068 64.7509 10.9068C65.3967 10.9068 65.9525 11.0119 66.4331 11.2522C66.9138 11.4775 67.3043 11.7779 67.6197 12.1835C67.9351 12.574 68.1754 13.0396 68.3256 13.5653C68.4758 14.091 68.5659 14.6618 68.5659 15.2475C68.5659 15.8033 68.4908 16.329 68.3557 16.8396C68.2055 17.3503 67.9952 17.8159 67.7098 18.2065C67.4244 18.597 67.064 18.9124 66.6134 19.1527C66.1628 19.393 65.6521 19.5132 65.0513 19.5132C64.7959 19.5132 64.5256 19.4832 64.2702 19.4381C64.0149 19.393 63.7596 19.3179 63.5192 19.2128C63.2789 19.1077 63.0536 18.9725 62.8584 18.8073C62.6481 18.642 62.4829 18.4468 62.3477 18.2365H62.3177V22.3069H60.5153V11.1321H60.5002ZM66.7936 15.2175C66.7936 14.857 66.7485 14.4965 66.6434 14.1511C66.5533 13.8056 66.4031 13.5052 66.2078 13.2349C66.0126 12.9645 65.7722 12.7542 65.5019 12.589C65.2165 12.4238 64.8861 12.3487 64.5256 12.3487C63.7746 12.3487 63.2038 12.604 62.8133 13.1297C62.4378 13.6554 62.2426 14.3614 62.2426 15.2325C62.2426 15.6531 62.2876 16.0286 62.3928 16.374C62.4979 16.7195 62.6331 17.0199 62.8434 17.2752C63.0386 17.5306 63.2789 17.7258 63.5643 17.876C63.8497 18.0262 64.1651 18.1013 64.5406 18.1013C64.9612 18.1013 65.2916 18.0112 65.577 17.846C65.8624 17.6808 66.0877 17.4555 66.2829 17.2001C66.4632 16.9298 66.5983 16.6294 66.6734 16.2839C66.7485 15.9234 66.7936 15.578 66.7936 15.2175ZM69.9628 8.02295H71.7652V9.7202H69.9628V8.02295ZM69.9628 11.1321H71.7652V19.2879H69.9628V11.1321ZM73.3723 8.02295H75.1747V19.2879H73.3723V8.02295ZM80.672 19.5132C80.0261 19.5132 79.4404 19.4081 78.9297 19.1828C78.419 18.9575 77.9985 18.6721 77.638 18.2966C77.2925 17.9211 77.0222 17.4555 76.8419 16.9298C76.6617 16.4041 76.5565 15.8183 76.5565 15.2025C76.5565 14.5867 76.6467 14.0159 76.8419 13.4902C77.0222 12.9645 77.2925 12.5139 77.638 12.1234C77.9834 11.7479 78.419 11.4475 78.9297 11.2372C79.4404 11.0269 80.0261 10.9068 80.672 10.9068C81.3179 10.9068 81.9036 11.0119 82.4143 11.2372C82.925 11.4475 83.3456 11.7479 83.706 12.1234C84.0515 12.4989 84.3218 12.9645 84.5021 13.4902C84.6823 14.0159 84.7875 14.5867 84.7875 15.2025C84.7875 15.8333 84.6973 16.4041 84.5021 16.9298C84.3068 17.4555 84.0515 17.9061 83.706 18.2966C83.3606 18.6721 82.925 18.9725 82.4143 19.1828C81.9036 19.393 81.3329 19.5132 80.672 19.5132ZM80.672 18.0863C81.0625 18.0863 81.423 17.9962 81.7084 17.831C82.0088 17.6657 82.2341 17.4404 82.4293 17.1701C82.6246 16.8997 82.7598 16.5843 82.8499 16.2539C82.94 15.9084 82.9851 15.563 82.9851 15.2025C82.9851 14.857 82.94 14.5116 82.8499 14.1661C82.7598 13.8206 82.6246 13.5202 82.4293 13.2499C82.2341 12.9795 81.9938 12.7693 81.7084 12.604C81.408 12.4388 81.0625 12.3487 80.672 12.3487C80.2815 12.3487 79.921 12.4388 79.6356 12.604C79.3352 12.7693 79.1099 12.9945 78.9147 13.2499C78.7194 13.5202 78.5842 13.8206 78.4941 14.1661C78.404 14.5116 78.3589 14.857 78.3589 15.2025C78.3589 15.563 78.404 15.9084 78.4941 16.2539C78.5842 16.5993 78.7194 16.8997 78.9147 17.1701C79.1099 17.4404 79.3503 17.6657 79.6356 17.831C79.936 18.0112 80.2815 18.0863 80.672 18.0863ZM85.3282 11.1321H86.695V8.66881H88.4974V11.1171H90.1195V12.4538H88.4974V16.8096C88.4974 17.0049 88.5124 17.1551 88.5274 17.3053C88.5424 17.4404 88.5875 17.5606 88.6326 17.6507C88.6926 17.7408 88.7828 17.8159 88.8879 17.861C89.0081 17.9061 89.1583 17.9361 89.3685 17.9361C89.4887 17.9361 89.6239 17.9361 89.744 17.9211C89.8642 17.9061 89.9994 17.891 90.1195 17.861V19.2579C89.9243 19.2879 89.729 19.3029 89.5338 19.3179C89.3385 19.348 89.1583 19.348 88.948 19.348C88.4674 19.348 88.0919 19.3029 87.8065 19.2128C87.5211 19.1227 87.2958 18.9875 87.1306 18.8223C86.9654 18.642 86.8602 18.4318 86.8001 18.1764C86.7401 17.9211 86.71 17.6057 86.695 17.2752V12.4688H85.3282V11.102V11.1321Z" fill="#ffffff" data-v-f6451ad8 />
                      <path d="M21.5836 8.02302H13.3377L10.7993 0.182617L8.24594 8.02302L0 8.008L6.66885 12.8594L4.11546 20.6998L10.7843 15.8484L17.4532 20.6998L14.9148 12.8594L21.5836 8.02302Z" fill="#00B67A" data-v-f6451ad8 />
                    </svg>
                    <div style={{"border-left":"1px solid #d6d6d6","height":"28px"}} data-v-f6451ad8 />
                    <div className="mt-1 text-bold text-base" data-v-f6451ad8>Rated Excellent</div>
                    <svg className="sm:w-[90px]" width={119} height={23} viewBox="0 0 119 23" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f6451ad8>
                      <path d="M0.0634766 0.398438H22.334V22.6689H0.0634766V0.398438ZM24.1898 0.398438H46.4603V22.6689H24.1898V0.398438ZM48.3163 0.398438H70.5868V22.6689H48.3163V0.398438ZM72.4427 0.398438H94.7132V22.6689H72.4427V0.398438ZM96.569 0.398438H118.84V22.6689H96.569V0.398438Z" fill="#00B67A" data-v-f6451ad8 />
                      <path d="M11.199 15.4075L14.586 14.5492L16.0011 18.9106L11.199 15.4075ZM18.9937 9.77033H13.0317L11.199 4.15625L9.3663 9.77033H3.4043L8.22957 13.2501L6.3969 18.8642L11.2222 15.3843L14.1916 13.2501L18.9937 9.77033ZM35.3254 15.4075L38.7123 14.5492L40.1274 18.9106L35.3254 15.4075ZM43.1201 9.77033H37.158L35.3254 4.15625L33.4927 9.77033H27.5307L32.3559 13.2501L30.5233 18.8642L35.3486 15.3843L38.318 13.2501L43.1201 9.77033ZM59.4517 15.4075L62.8388 14.5492L64.2538 18.9106L59.4517 15.4075ZM67.2464 9.77033H61.2845L59.4517 4.15625L57.6191 9.77033H51.657L56.4824 13.2501L54.6496 18.8642L59.4749 15.3843L62.4443 13.2501L67.2464 9.77033ZM83.5782 15.4075L86.9651 14.5492L88.3803 18.9106L83.5782 15.4075ZM91.3729 9.77033H85.4109L83.5782 4.15625L81.7455 9.77033H75.7835L80.6088 13.2501L78.7761 18.8642L83.6014 15.3843L86.5708 13.2501L91.3729 9.77033ZM107.705 15.4075L111.092 14.5492L112.507 18.9106L107.705 15.4075ZM115.499 9.77033H109.537L107.705 4.15625L105.872 9.77033H99.9099L104.735 13.2501L102.902 18.8642L107.728 15.3843L110.697 13.2501L115.499 9.77033Z" fill="white" data-v-f6451ad8 />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="relative sm:hidden xs:block" style={{"min-height":"265px"}} data-v-f6451ad8>
                <img className="sm:hidden gradient absolute full-height max-w-none z-0 bottom-0" src="/img/home/home-main-gradient.svg" alt format="webp" data-v-f6451ad8 />
                <picture className="sm:hidden" data-v-f6451ad8>
                  <source srcSet="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" media="(max-width: 700px)" data-v-f6451ad8 />
                  <source srcSet="/img/home/home-main.webp" type="image/webp" data-v-f6451ad8 />
                  <source srcSet="/img/home/home-main.png" type="image/png" data-v-f6451ad8 />
                  <img className="absolute main-img max-w-none" src="/img/home/home-main.png" format="webp" alt="igitems" data-v-f6451ad8 />
                </picture>
                <picture className="hidden sm:block" data-v-f6451ad8>
                  <source srcSet="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" media="(min-width: 640px)" data-v-f6451ad8 />
                  <source srcSet="/img/home/home-main-mobile.webp" type="image/webp" data-v-f6451ad8 />
                  <source srcSet="/img/home/home-main-mobile.png" type="image/jpeg" data-v-f6451ad8 />
                  <img className="absolute main-img max-w-none" src="/img/home/home-main-mobile.png" alt="lol elo boosting" title="lol elo boosting" data-v-f6451ad8 />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-12">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="font-bold text-4xl tracking-wider sm:text-3xl">Select your service</div>
            <div className="text-primary text-xl mt-4 tracking-wider">And start trading in seconds.</div>
          </div>
          <div className="my-16 grid grid-cols-5 gap-8 xs:grid-cols-2 sm:grid-cols-4">
            {/*[*/}
            <div className="hover:text-primary duration-300 cursor-pointer text-center">
              <div className="m-auto bg-contain bg-no-repeat bg-center" style={{"width":"81px","height":"81px","background-image":"url(/img/icons/currency-icon-blue.svg)"}} loading="lazy" format="webp" />
              <div className="mt-6 text-xl font-bold tracking-wider">Currency</div>
            </div>
            <div className="hover:text-primary duration-300 cursor-pointer text-center">
              <div className="m-auto bg-contain bg-no-repeat bg-center" style={{"width":"81px","height":"81px","background-image":"url(/img/icons/item-icon-blue.svg)"}} loading="lazy" format="webp" />
              <div className="mt-6 text-xl font-bold tracking-wider">Items / Skins</div>
            </div>
            <div className="hover:text-primary duration-300 cursor-pointer text-center">
              <div className="m-auto bg-contain bg-no-repeat bg-center" style={{"width":"81px","height":"81px","background-image":"url(/img/icons/account-icon-blue.svg)"}} loading="lazy" format="webp" />
              <div className="mt-6 text-xl font-bold tracking-wider">Accounts</div>
            </div>
            <div className="hover:text-primary duration-300 cursor-pointer text-center">
              <div className="m-auto bg-contain bg-no-repeat bg-center" style={{"width":"81px","height":"81px","background-image":"url(/img/icons/boost-icon-blue.svg)"}} loading="lazy" format="webp" />
              <div className="mt-6 text-xl font-bold tracking-wider">PlayBoost</div>
            </div>
            <div className="hover:text-primary duration-300 sm:hidden cursor-pointer text-center">
              <div className="m-auto bg-contain bg-no-repeat bg-center" style={{"width":"81px","height":"81px","background-image":"url(/img/icons/coaching-icon-blue.svg)"}} loading="lazy" format="webp" />
              <div className="mt-6 text-xl font-bold tracking-wider">Coaching</div>
            </div>
            {/*]*/}
          </div>
        </div>
        <div style={{"background":"#181F2E"}}>
          <div className="container py-12 text-center">
            <div className="flex flex-col justify-center items-center">
              <div className="font-bold text-4xl tracking-wider sm:text-3xl"><span className="text-primary">Selling</span> made simple.</div>
              <div className="text-secondary text-xl mt-4 tracking-wider sm:text-base">List your virtual items to the world in just a few clicks.</div>
            </div>
            <div className="mt-12 mb-8 grid grid-cols-3 gap-8 xs:grid-cols-1">
              <div className="flex flex-col items-center gap-2 px-12 sm:px-4">
                <div className="flex flex-col gap-4 items-center">
                  <img className="object-contain" src="/img/selling-icon-1.png" style={{"height":"231px","width":"195px"}} loading="lazy" format="webp" alt="1. Register for free" />
                  <div className="text-xl font-bold" style={{"min-height":"40px"}}>1. Register for free</div>
                </div>
                <div className="opacity-70 leading-relaxed">Create your igitems account and verify your identity.</div>
              </div>
              <div className="flex flex-col items-center gap-2 px-12 sm:px-4">
                <div className="flex flex-col gap-4 items-center">
                  <img className="object-contain" src="/img/selling-icon-2.png" style={{"height":"231px","width":"195px"}} loading="lazy" format="webp" alt="2. List your items" />
                  <div className="text-xl font-bold" style={{"min-height":"40px"}}>2. List your items</div>
                </div>
                <div className="opacity-70 leading-relaxed">Create and post your listings on igitems.</div>
              </div>
              <div className="flex flex-col items-center gap-2 px-12 sm:px-4">
                <div className="flex flex-col gap-4 items-center">
                  <img className="object-contain" src="/img/selling-icon-3.png" style={{"height":"231px","width":"195px"}} loading="lazy" format="webp" alt="3. Receive payment" />
                  <div className="text-xl font-bold" style={{"min-height":"40px"}}>3. Receive payment</div>
                </div>
                <div className="opacity-70 leading-relaxed">After your buyer confirms the delivery, you receive payment.</div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="btn text-center cursor-pointer secondary wide" style={{}} data-v-1fb46fc5>
                {/*[*/}Start Selling{/*]*/}
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-24 sm:pt-8">
          <div className="flex gap-8 items-center no-wrap justify-between sm:flex-col sm:items-start">
            <div className="flex flex-col max-w-lg sm:max-w-none">
              <div className="font-bold text-5xl leading-tight sm:text-3xl">
                <div><b className="text-primary">Buy</b> in-game items <br /> effortlessly.</div>
              </div>
              <div className="opacity-70 mt-4 tracking-wider font-light leading-relaxed">Here at igitems, we've taken the trouble out of buying items. Forget long wait times and risky deals. We connect you to verified sellers who deliver fast and securely instead.</div>
              <div className="flex mt-12 sm:hidden">
                <div className="btn text-center cursor-pointer wide" style={{}} data-v-1fb46fc5>
                  {/*[*/}Begin Buying{/*]*/}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-16" style={{"max-width":"900px"}}>
              <div className="flex flex-col gap-16">
                <div className="flex gap-8 items-center no-wrap">
                  <img className="object-contain shrink-0" src="/img/buying-icon-1.png" loading="lazy" format="webp" width={100} height={80} alt="1. Browse our offers" />
                  <div>
                    <div className="mb-4 text-lg font-bold">1. Browse our offers</div>
                    <div className="opacity-70 leading relaxed font-light">With over 1000 different services and thousands of verified sellers, finding your dream item has never been more accessible.</div>
                  </div>
                </div>
                <div className="flex gap-8 items-center no-wrap">
                  <img className="object-contain shrink-0" src="/img/buying-icon-2.png" loading="lazy" format="webp" width={100} height={80} alt="2. Register for free" />
                  <div>
                    <div className="mb-4 text-lg font-bold">2. Register for free</div>
                    <div className="opacity-70 leading relaxed font-light">If you have picked your preferred service, our super-simple registration and checkout process is all that's left.</div>
                  </div>
                </div>
                <div className="flex gap-8 items-center no-wrap">
                  <img className="object-contain shrink-0" src="/img/buying-icon-3.png" loading="lazy" format="webp" width={100} height={80} alt="3. Checkout securely" />
                  <div>
                    <div className="mb-4 text-lg font-bold">3. Checkout securely</div>
                    <div className="opacity-70 leading relaxed font-light">With multiple currencies and dozens of secure payment options, buying a product is safe and effortless.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 justify-center hidden sm:flex">
            <div className="btn text-center cursor-pointer wide" style={{}} data-v-1fb46fc5>
              {/*[*/}Begin Buying{/*]*/}
            </div>
          </div>
        </div>
        <div className="py-24">
          <div className="py-12" style={{"background":"#181F2E"}}>
            <div className="container text-center text-4xl font-bold sm:text-2xl">"<span><b className="text-secondary">igitems</b>, is the leading virtual goods marketplace when it <br /> comes to user experience and satisfaction</span><b className="text-secondary">.</b>"</div>
          </div>
        </div>
        <div className="flex justify-center items-center" style={{}}>
          <div className="container flex justify-center items-center flex-col">
            <div className="font-bold text-4xl tracking-wider text-center mb-12 sm:text-3xl">Our Features</div>
            <div className="flex row justify-center items-center justify-between gap-6 xs:flex-col xs:flex sm:grid sm:grid-cols-2">
              <div className="flex flex-col no-wrap py-8 xs:py-4">
                <img className="h-11 object-contain" src="/img/home/features-satisfaction.svg" style={{"height":"42px"}} alt="Leading User Experience" />{/**/}
                <div className="flex-col flex justify-center items-center col-grow">
                  <div className="font-bold text-xl pb-2 pt-4 text-center">Leading User Experience</div>
                  <p className="font-light opacity-50 text-center px-5">We offer the most pleasant virtual good trading experience available.</p>
                </div>
              </div>
              <div className="flex flex-col no-wrap py-8 xs:py-4">
                <img className="h-11 object-contain" src="/img/home/features-delivery.svg" style={{"height":"42px"}} alt="Speedy Delivery" />{/**/}
                <div className="flex-col flex justify-center items-center col-grow">
                  <div className="font-bold text-xl pb-2 pt-4 text-center">Speedy Delivery</div>
                  <p className="font-light opacity-50 text-center px-5">Forget about waiting. Over 90% of orders are fulfilled within seconds.</p>
                </div>
              </div>
              <div className="flex flex-col no-wrap py-8 xs:py-4">
                <img className="h-11 object-contain" src="/img/home/features-protection.svg" style={{"height":"42px"}} alt="Trade Protection" />{/**/}
                <div className="flex-col flex justify-center items-center col-grow">
                  <div className="font-bold text-xl pb-2 pt-4 text-center">Trade Protection</div>
                  <p className="font-light opacity-50 text-center px-5">We provide the safest trading environment. Buy and sell worry-free.</p>
                </div>
              </div>
              <div className="flex flex-col no-wrap py-8 xs:py-4">
                <img className="h-11 object-contain" src="/img/home/features-refund.svg" style={{"height":"42px"}} alt="Refund Policy" />{/**/}
                <div className="flex-col flex justify-center items-center col-grow">
                  <div className="font-bold text-xl pb-2 pt-4 text-center">Refund Policy</div>
                  <p className="font-light opacity-50 text-center px-5">Our buyers always get their ordered items or their money back.</p>
                </div>
              </div>
              <div className="flex flex-col no-wrap py-8 sm:hidden xs:flex xs:py-4">
                <img className="h-11 object-contain" src="/img/home/features-support.svg" style={{"height":"42px"}} alt="24/7 Live Support" />{/**/}
                <div className="flex-col flex justify-center items-center col-grow">
                  <div className="font-bold text-xl pb-2 pt-4 text-center">24/7 Live Support</div>
                  <p className="font-light opacity-50 text-center px-5">Are you looking for assistance? Contact us anytime; we're here to help.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center py-12" data-v-d60c1061>
          <div className="container relative flex justify-center items-center flex-col py-12 fit" data-v-d60c1061>
            <div className="process-background absolute -z-10 w-full h-full" data-v-d60c1061 />
            <div className="process-title flex-col text-center" data-v-d60c1061>
              <div className="font-bold text-4xl tracking-wider sm:text-3xl" data-v-d60c1061>How it works</div>
              <div className="text-primary text-xl q-mt-md tracking-wider" data-v-d60c1061>Step by step</div>
            </div>
            <div className="w-full q-responsive" style={{"max-width":"1200px"}} data-v-d60c1061>
              <div className="row" data-v-d60c1061>
                <div className="gradient-left z-0 absolute" data-v-d60c1061 />
                <div className="gradient-right z-0 absolute" data-v-d60c1061 />
                <img src="/img/how-it-works.png" fit="contain" loading="lazy" style={{"min-height":"110px"}} alt="how it works" data-v-d60c1061 />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center my-12 py-12" data-v-85e8cd44>
          <div className="container flex no-wrap gap-36 items-center sm:flex-col-reverse sm:gap-8" data-v-85e8cd44>
            <div className="w-full" style={{"max-width":"650px"}} data-v-85e8cd44>
              <div className="flex relative" data-v-85e8cd44>
                <div className="decor absolute inset-0" data-v-85e8cd44>
                  <div className="decor-tl absolute bg-contain" data-v-85e8cd44 />
                  <div className="decor-tr absolute bg-contain" data-v-85e8cd44 />
                  <div className="decor-bl absolute bg-contain" data-v-85e8cd44 />
                  <div className="decor-br absolute bg-contain" data-v-85e8cd44 />
                </div>
                <div className="flex flex-col h-full items-end w-1/2" style={{"margin-right":"5%"}} data-v-85e8cd44>
                  <div className="card flex justify-center items-center flex-col mb-8" style={{"height":"70%"}} data-v-85e8cd44>
                    <img src="/img/buyer-avatar.png" alt style={{"width":"94px","height":"94px"}} loading="lazy" format="webp" data-v-85e8cd44 />
                    <div className="my-7 text-center opacity-90 sm:text-xs" data-v-85e8cd44>“Good site but strict with its guidelines
                      They always detect infractions so don't try to play them  and you'll be fine“
                    </div>
                    <div className="flex gap-1 my-4" data-v-85e8cd44>
                      {/*[*/}<img data-v-85e8cd44 src="/img/icons/star.svg" alt loading="lazy" format="webp" /><img data-v-85e8cd44 src="/img/icons/star.svg" alt loading="lazy" format="webp" /><img data-v-85e8cd44 src="/img/icons/star.svg" alt loading="lazy" format="webp" /><img data-v-85e8cd44 src="/img/icons/star.svg" alt loading="lazy" format="webp" /><img data-v-85e8cd44 src="/img/icons/star.svg" alt loading="lazy" format="webp" />{/*]*/}
                    </div>
                    <div className="font-bold text-lg sm:text-xs" data-v-85e8cd44>Lucio</div>
                  </div>
                  <div className="card flex justify-center items-center flex-col" style={{"min-height":"20%","width":"85%"}} data-v-85e8cd44>
                    <div className="flex justify-center items-center gap-2 xs:flex-col xs:gap-1" data-v-85e8cd44>
                      <div className="flex gap-1 my-4 xs:my-1" data-v-85e8cd44>
                        {/*[*/}<img alt src="/img/icons/star.svg" loading="lazy" format="webp" data-v-85e8cd44 /><img alt src="/img/icons/star.svg" loading="lazy" format="webp" data-v-85e8cd44 /><img alt src="/img/icons/star.svg" loading="lazy" format="webp" data-v-85e8cd44 /><img alt src="/img/icons/star.svg" loading="lazy" format="webp" data-v-85e8cd44 /><img data-v-85e8cd44 alt src="/img/icons/star.svg" loading="lazy" format="webp" />{/*]*/}
                      </div>
                      <div className="flex gap-1 items-center" data-v-85e8cd44>
                        <div className="text-lg" data-v-85e8cd44>4.96</div>
                        <div className="opacity-70" data-v-85e8cd44>/5</div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-1 xs:hidden" data-v-85e8cd44>
                      <div className="font-bold" data-v-85e8cd44>158</div>
                      <div className="review-count-label" data-v-85e8cd44>customer ratings</div>
                    </div>
                    <div className="flex justify-center items-center mt-2 xs:hidden" data-v-85e8cd44><a href="https://www.trustpilot.com/review/igitems.com" target="_blank" rel="noreferer, ,noopener" data-v-85e8cd44><img className="object-contain" src="/img/trustpilot-line.png" alt="trustpilot" style={{"max-height":"19px","max-width":"187px"}} loading="lazy" format="webp" data-v-85e8cd44 /></a></div>
                  </div>
                </div>
                <div className="h-full" style={{"width":"45%"}} data-v-85e8cd44>
                  <div className="card flex justify-center items-center flex-col mb-8" style={{"height":"20%","width":"85%"}} data-v-85e8cd44>
                    <div className="opacity-90 sm:text-xs" data-v-85e8cd44>“Greatttttttttt“</div>
                  </div>
                  <div className="card flex justify-center items-center flex-col" style={{"height":"60%"}} data-v-85e8cd44>
                    <img src="/img/seller-avatar.png" alt style={{"width":"74px","height":"74px"}} loading="lazy" format="webp" data-v-85e8cd44 />
                    <div className="my-7 text-center opacity-90 sm:text-xs" data-v-85e8cd44>“Very good services“</div>
                    <div className="flex gap-1" data-v-85e8cd44>
                      {/*[*/}<img data-v-85e8cd44 src="/img/icons/star.svg" alt loading="lazy" format="webp" /><img data-v-85e8cd44 src="/img/icons/star.svg" alt loading="lazy" format="webp" /><img data-v-85e8cd44 src="/img/icons/star.svg" alt loading="lazy" format="webp" /><img data-v-85e8cd44 src="/img/icons/star.svg" alt loading="lazy" format="webp" /><img data-v-85e8cd44 src="/img/icons/star.svg" alt loading="lazy" format="webp" />{/*]*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col self-center sm:text-center sm:mb-8 relative" data-v-85e8cd44>
              <div className="font-bold text-5xl sm:text-3xl" data-v-85e8cd44>Customers <span className="text-secondary">Trust us</span></div>
              <div className="font-light my-8 opacity-70 max-w-lg" data-v-85e8cd44>With countless five-star reviews, come and find out why we've been rated the best platform each year running.</div>
              <div className="mt-8 sm:mt-4" data-v-85e8cd44>
                <a href="https://www.trustpilot.com/review/igitems.com" rel="noreferer, ,noopener" target="_blank" className="btn text-center cursor-pointer" style={{"background":"#3772FF","color":"#fff"}} data-v-85e8cd44 data-v-1fb46fc5>
                  {/*[*/}Read all reviews{/*]*/}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-12" style={{"background-color":"#192134"}}>
          <div className="container flex justify-center items-center flex-col py-12 my-12">
            <div className="font-bold text-4xl tracking-wider text-center sm:text-3xl">Ready to start?</div>
            <div className="text-subtitle1 text-center py-8" style={{"letter-spacing":"0.3px"}}>Start trading today. Maximize your gaming experience with just a few clicks.</div>
            <div className="flex gap-4 mt-4">
              <div className="btn text-center cursor-pointer wide" style={{}} data-v-1fb46fc5>
                {/*[*/}Begin Buying{/*]*/}
              </div>
              <div className="btn text-center cursor-pointer secondary wide" style={{}} data-v-1fb46fc5>
                {/*[*/}Start Selling{/*]*/}
              </div>
            </div>
          </div>
        </div>
        <div className="container py-12 text-center">
          <div className="flex-col justify-center items-center">
            <div className="font-bold text-4xl tracking-wider flex gap-3 flex-wrap sm:justify-center">About <span className="text-primary">igitems</span></div>
          </div>
          <div className="my-12 text-justify opacity-80">
            <div className="text-weight-thin leading-relaxed">igitems was founded in 2020 to start a new chapter in gaming goods trading. The three founders had a simple mission; to create a virtual goods marketplace with the best overall user experience. Our goal is to make selling and buying virtual goods pleasant, rewarding, and effortless. We have combined our decade-long industry expertise with top talents to achieve this goal. <br /><br /> As a result, igitems sets to become the go-to gaming goods marketplace. Throughout its lifetime, the platform is not only planning to house all transacting marketplaces but to discover and create new ones. Along the way, the user experience would continue to increase according to any recent trends which affect gaming.</div>
          </div>
        </div>
        <div className="container py-8" data-v-82610a80>
          <div className="text-4xl font-bold mb-2 sm:text-2xl" data-v-82610a80>Frequently asked questions:</div>
          <div className="text-secondary font-bold sm:text-sm" data-v-82610a80>Get to know more about igitems:</div>
          <div className="mt-12 flex flex-col grow sm:mt-6" style={{"background":"#121323","box-shadow":"0px 4px 15px rgba(0, 0, 0, 0.38)","border-radius":"20px","color":"rgba(255,255,255,0.8)"}} data-v-82610a80>
            <div className="w-full flex justify-center overflow-auto xs:justify-start" data-v-82610a80>
              {/*[*/}
              <div className="p-4 cursor-pointer" data-v-82610a80>Accounts</div>
              <div className="border-b-2 border-secondary p-4 cursor-pointer" data-v-82610a80>Currency</div>
              <div className="p-4 cursor-pointer" data-v-82610a80>Items</div>
              <div className="p-4 cursor-pointer" data-v-82610a80>PlayBoost</div>
              <div className="p-4 cursor-pointer" data-v-82610a80>Coaching</div>
              {/*]*/}
            </div>
            <div className="contact-box grow" style={{"border-radius":"0 0 20px 20px"}} data-v-82610a80>
              <div data-v-82610a80>
                <div data-v-82610a80>
                  {/*[*/}
                  <div data-v-82610a80>
                    <div className="p-2" data-v-82610a80>
                      <div className="text-white text-lg py-1 w-full cursor-pointer xs:text-base xs:py-0" data-v-82610a80>How does in-game currency buying works?</div>
                      {/**/}{/**/}
                    </div>
                    <div className="w-full my-2 h-0.5 bg-white/10" data-v-82610a80 />
                  </div>
                  <div data-v-82610a80>
                    <div className="p-2" data-v-82610a80>
                      <div className="text-white text-lg py-1 w-full cursor-pointer xs:text-base xs:py-0" data-v-82610a80>How does the seller deliver in-game currency (silver, gold, money, etc.)?</div>
                      {/**/}{/**/}
                    </div>
                    <div className="w-full my-2 h-0.5 bg-white/10" data-v-82610a80 />
                  </div>
                  <div data-v-82610a80>
                    <div className="p-2" data-v-82610a80>
                      <div className="text-white text-lg py-1 w-full cursor-pointer xs:text-base xs:py-0" data-v-82610a80>Why is igitems the best choice to buy in-game currencies?</div>
                      {/**/}{/**/}
                    </div>
                    <div className="w-full my-2 h-0.5 bg-white/10" data-v-82610a80 />
                  </div>
                  <div data-v-82610a80>
                    <div className="p-2" data-v-82610a80>
                      <div className="text-white text-lg py-1 w-full cursor-pointer xs:text-base xs:py-0" data-v-82610a80>How fast do I get Delivery after finishing payment?</div>
                      {/**/}{/**/}
                    </div>
                    {/**/}
                  </div>
                  {/*]*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"background":"#181F2E"}}>
          <div className="container py-12">
            <div className="flex flex-col justify-center items-center">
              <div className="font-bold text-4xl sm:text-3xl">Recent blog posts</div>
            </div>
            <div className="my-12 grid grid-cols-2 gap-16 sm:grid-cols-1">
              {/*[*/}
              <a href="/post/master-the-art-of-rainbow-six-siege-tips-and-tricks-for-beginners" className>
                <div className="flex no-wrap gap-8 sm:flex-col sm:items-center">
                  <img className="sm:hidden shrink-0 rounded-2xl object-cover" src="/img/igicon.png" style={{"width":"160px","height":"160px"}} loading="lazy" />
                  <div className="flex flex-col gap-4">
                    <div className="text-secondary">May 19, 2023</div>
                    <div className="text-h5 font-bolder">Master the Art of Rainbow Six Siege: Tips and Tricks for Beginners</div>
                    <div className="opacity-70 leading relaxed">Becoming a pro at Rainbow Six is difficult if you don’t fully understand the game mechanics. However, you can follow a few tricks and tips to become a...</div>
                  </div>
                </div>
              </a>
              <a href="/post/understanding-the-dota-2-ranked-system" className="sm:hidden">
                <div className="flex no-wrap gap-8 sm:flex-col sm:items-center">
                  <img className="sm:hidden shrink-0 rounded-2xl object-cover" src="/img/igicon.png" style={{"width":"160px","height":"160px"}} loading="lazy" />
                  <div className="flex flex-col gap-4">
                    <div className="text-secondary">May 13, 2023</div>
                    <div className="text-h5 font-bolder">Understanding the Dota 2 Ranked System</div>
                    <div className="opacity-70 leading relaxed">Valve has been adjusting the approach in which it pairs players together for the fairest competition. The ranked matchmaking system in the game is not...</div>
                  </div>
                </div>
              </a>
              {/*]*/}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*]*/}
  </div>
  <div className="w-full" style={{"background":"#294B9D"}} data-v-9f5b85b4>
    <div className="container flex justify-evenly py-12 flex-wrap gap-16 sm:gap-4 sm:py-6"><img className="xs:w-14 object-contain" src="/img/footer/visa.svg" style={{"max-width":"100px","height":"34px"}} loading="lazy" format="webp" /><img className="xs:w-14 object-contain" src="/img/footer/apple-pay.svg" style={{"max-width":"100px","height":"34px"}} loading="lazy" format="webp" /><img className="xs:w-14 object-contain" src="/img/footer/mastercard.svg" style={{"max-width":"100px","height":"34px"}} loading="lazy" format="webp" /><img className="xs:w-14 object-contain" src="/img/footer/skrill.svg" style={{"max-width":"100px","height":"34px"}} loading="lazy" format="webp" /><img className="xs:w-14 xs:hidden object-contain" src="/img/footer/american-express.svg" style={{"max-width":"100px","height":"34px"}} loading="lazy" format="webp" /><img className="xs:w-14 sm:hidden object-contain" src="/img/footer/google-pay.svg" style={{"max-width":"100px","height":"34px"}} loading="lazy" format="webp" /><img className="xs:w-14 lg:hidden object-contain" src="/img/footer/sofort.svg" style={{"max-width":"100px","height":"34px"}} loading="lazy" format="webp" /><img className="xs:w-14 lg:hidden object-contain" src="/img/footer/jcb.svg" style={{"max-width":"100px","height":"34px"}} loading="lazy" format="webp" /><img className="xs:w-14 xl:hidden object-contain" src="/img/footer/half-o.svg" style={{"max-width":"100px","height":"34px"}} loading="lazy" format="webp" /></div>
    <div className="bg-white w-full opacity-10" style={{"height":"2px"}} />
    <div className="container py-12 flex justify-between items-center sm:flex-col sm:py-8 sm:items-start">
      <div className="flex flex-col sm:mb-8">
        <svg width={100} height={22} viewBox="0 0 100 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.2267 2.24653C31.2267 3.30017 30.375 4.15187 29.3214 4.15187C28.2677 4.15187 27.416 3.18834 27.416 2.09018C27.416 1.0588 28.2905 0.273865 29.3214 0.273865C30.3522 0.273865 31.2267 1.17063 31.2267 2.24653V2.24653Z" fill="#fff" />
          <path d="M30.8236 5.18326H27.8418V17.086H30.8236V5.18326Z" fill="#fff" />
          <path d="M44.6753 15.3826C44.6753 17.6913 44.2269 19.2378 42.859 20.4038C41.7831 21.3006 40.3489 21.7267 38.5326 21.7267C35.2598 21.7267 33.1754 20.4489 32.3682 17.9605H35.6632C36.2684 18.6776 37.1652 18.9919 38.4202 18.9919C39.5189 18.9919 40.4152 18.7004 40.9536 18.207C41.6707 17.5349 41.693 16.7272 41.693 15.6068C40.7067 16.5708 39.6313 17.0865 38.0847 17.0865C34.8793 17.0865 32.3682 14.5314 32.3682 10.9672C32.3682 7.40291 34.9016 4.86951 37.9279 4.86951C39.4071 4.86951 40.5726 5.42972 41.6935 6.48336V5.18327H44.6753V15.3826V15.3826ZM35.3722 10.9889C35.3722 12.9621 36.7847 14.3517 38.6455 14.3517C40.5063 14.3517 41.8504 13.0289 41.8504 11.0117C41.8504 8.99449 40.5726 7.60484 38.6004 7.60484C36.6283 7.60484 35.3722 9.15138 35.3722 10.9894V10.9889Z" fill="#fff" />
          <path d="M50.1422 2.24653C50.1422 3.30017 49.2905 4.15187 48.2374 4.15187C47.1843 4.15187 46.332 3.18834 46.332 2.09018C46.332 1.0588 47.2065 0.273865 48.2374 0.273865C49.2682 0.273865 50.1422 1.17063 50.1422 2.24653V2.24653Z" fill="white" />
          <path d="M49.7391 5.18326H46.7578V17.086H49.7391V5.18326Z" fill="white" />
          <path d="M12.1346 11.2374C12.1346 14.4715 9.52011 17.086 6.28605 17.086C3.05199 17.086 0.4375 14.1281 0.4375 10.7573C0.4375 7.59211 3.12089 5.18326 6.28605 5.18326C9.45121 5.18326 12.1346 7.93555 12.1346 11.2374Z" fill="#F6A114" />
          <path d="M23.8303 11.2374C23.8303 14.4715 21.2158 17.086 17.9833 17.086C14.7508 17.086 12.1348 14.1281 12.1348 10.7573C12.1348 7.59211 14.8182 5.18326 17.9833 5.18326C21.1485 5.18326 23.8303 7.93555 23.8303 11.2374V11.2374Z" fill="white" />
          <path d="M52.159 0.789551H55.1408V5.18272H56.9116V7.73785H55.1408V17.0855H52.159V7.73785H50.6348V5.18272H52.159V0.789551V0.789551Z" fill="white" />
          <path d="M69.0592 14.7768C67.7814 16.592 66.1008 17.3997 63.5901 17.3997C59.8017 17.3997 57.3584 14.6199 57.3584 11.1235C57.3584 7.873 59.7121 4.86896 63.5451 4.86896C67.378 4.86896 69.8664 7.55871 69.8664 11.3249C69.8664 11.5936 69.8441 11.7282 69.8441 11.9969H60.2501C60.5416 13.7682 61.8862 14.754 63.5901 14.754C64.868 14.754 65.7197 14.3957 66.5486 13.5885L69.0587 14.7768H69.0592ZM66.8629 9.64373C66.4596 8.25407 65.1817 7.40236 63.5901 7.40236C62.1104 7.40236 60.9672 8.14171 60.3847 9.64373H66.8629Z" fill="white" />
          <path d="M82.2382 17.086H79.2569V11.3249C79.2569 9.01622 78.8086 7.60377 77.1502 7.60377C75.6704 7.60377 74.5951 8.81429 74.5951 11.2576V17.0855H71.6133V5.18273H74.5951V6.5496C75.6031 5.45144 76.9032 4.86844 78.3162 4.86844C79.7292 4.86844 81.051 5.56327 81.7903 6.99798C82.889 5.60832 83.9872 4.86844 85.7807 4.86844C87.1031 4.86844 88.2908 5.40639 88.9634 6.2581C89.7483 7.24496 89.8379 8.54505 89.8379 10.1144V17.0855H86.8566V10.5177C86.8566 8.56731 86.1618 7.60324 84.8166 7.60324C83.3152 7.60324 82.2387 8.76871 82.2387 11.2125V17.0855L82.2382 17.086Z" fill="white" />
          <path d="M94.4301 11.9301C92.5248 10.9666 91.5607 9.80061 91.5607 8.29859C91.5607 6.43829 93.13 4.86896 95.4159 4.86896C96.9624 4.86896 98.3744 5.56379 99.339 6.84162L97.5004 8.70192C96.8284 8.02988 96.1558 7.60376 95.4387 7.60376C94.8334 7.60376 94.3623 7.85021 94.3623 8.32085C94.3623 8.79149 94.7884 8.97116 95.4387 9.30718L96.5369 9.86739C98.5095 10.876 99.5632 11.9074 99.5632 13.6786C99.5632 15.8082 97.882 17.3997 95.2818 17.3997C93.5556 17.3997 92.1437 16.7049 91.1123 15.3598L92.9503 13.3421C93.6452 14.1487 94.6538 14.7317 95.4387 14.7317C96.1786 14.7317 96.761 14.3056 96.761 13.7682C96.761 13.2308 96.2681 12.8714 95.4387 12.4453L94.4301 11.9301V11.9301Z" fill="white" />
        </svg>
        <div className="my-4">The all-in-one marketplace for gamers</div>
        <div className="relative">
          <div className="items-start">
            <div className="text-sm flex gap-2 items-center font-bold">
              <img className="rounded-full mr-1 object-cover" src="/img/flags/us.svg" style={{"width":"20px","height":"20px"}} width="20px" height="20px" loading="lazy" format="webp" />
              <div>English</div>
            </div>
          </div>
          <div style={{"background":"rgb(31, 35, 50)"}} className="hidden absolute bottom-0">
            <div className="overflow-auto p-2" style={{"height":"400px","width":"300px"}}>
              {/*[*/}
              <div>
                <a className="hover:bg-white/10 flex items-center gap-2 text-white w-full p-2 rounded-lg duration-300" href="https://igitems.com/" target="_blank">
                  <img className="rounded-full mr-1 object-cover" src="/img/flags/us.svg" style={{"width":"30px","height":"30px"}} width="30px" height="30px" loading="lazy" format="webp" />
                  <div className="font-bold">
                    Global
                    <div className="font-light">English</div>
                  </div>
                </a>
              </div>
              <div>
                <a className="hover:bg-white/10 flex items-center gap-2 text-white w-full p-2 rounded-lg duration-300" href="https://igitems.de/" target="_blank">
                  <img className="rounded-full mr-1 object-cover" src="/img/flags/de.svg" style={{"width":"30px","height":"30px"}} width="30px" height="30px" loading="lazy" format="webp" />
                  <div className="font-bold">
                    Germany
                    <div className="font-light">Deutsch</div>
                  </div>
                </a>
              </div>
              <div>
                <a className="hover:bg-white/10 flex items-center gap-2 text-white w-full p-2 rounded-lg duration-300" href="https://igitems.fr/" target="_blank">
                  <img className="rounded-full mr-1 object-cover" src="/img/flags/fr.svg" style={{"width":"30px","height":"30px"}} width="30px" height="30px" loading="lazy" format="webp" />
                  <div className="font-bold">
                    France
                    <div className="font-light">Français</div>
                  </div>
                </a>
              </div>
              <div>
                <a className="hover:bg-white/10 flex items-center gap-2 text-white w-full p-2 rounded-lg duration-300" href="https://igitems.es/" target="_blank">
                  <img className="rounded-full mr-1 object-cover" src="/img/flags/es.svg" style={{"width":"30px","height":"30px"}} width="30px" height="30px" loading="lazy" format="webp" />
                  <div className="font-bold">
                    Spain
                    <div className="font-light">Español</div>
                  </div>
                </a>
              </div>
              <div>
                <a className="hover:bg-white/10 flex items-center gap-2 text-white w-full p-2 rounded-lg duration-300" href="https://igitems.nl/" target="_blank">
                  <img className="rounded-full mr-1 object-cover" src="/img/flags/nl.svg" style={{"width":"30px","height":"30px"}} width="30px" height="30px" loading="lazy" format="webp" />
                  <div className="font-bold">
                    Netherlands
                    <div className="font-light">Nederlands</div>
                  </div>
                </a>
              </div>
              </div>
              {/*]*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}
