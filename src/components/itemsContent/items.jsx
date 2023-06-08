import React, { Component,useEffect,useState} from 'react'
import accountIcon from '../../img/icons/account-icon-white.svg'
import itemIconOrange from '../../img/icons/item-icon-orange.svg'
import { withSignIn  } from 'react-auth-kit'
import SingleItem from './singleItem'
import { useSearchParams } from "react-router-dom";
import axios from 'axios'
import API from '../../config'


import {useParams, useNavigate } from 'react-router-dom'
  function Items()  {

    const { gameName }  = useParams(); // from react-router, this is the `:page` parameter defined on the route. 
    const navigate = useNavigate(); 
    let [searchParams] = useSearchParams();
    const [games, setGames] = useState([]);
  const [gotData,setGotData] = useState(false)
  const [Length,setLength] = useState(0)
  const [page,setPage] = useState(1)
  const [pageCount,setPageCount] = useState(1)

    useEffect(() => {
    let pg = searchParams.get("page");
    if(pg) {
      setPage(pg)
    }else{
      pg = 1
    }
    // if(!gotData) {
      axios.get(API + "/user/getSpecOffers?game="+gameName+"&page="+pg)
      .then(res => {
        setGames([...res.data.all])
        setPageCount(res.data.totalPages)
        setLength(res.data.length)
        setGotData(true)
      })
    // }

    },[gameName])
    const onSubmit = (e) =>  {
        
        if(this.props.signIn(
            {
                token:'test',
                expiresIn:36000,
                tokenType: "Bearer",
            }
        )){
        }else {
        }
    }
    return (
        <> 
        <div>
              <div data-v-d5ff87d0="">
                <div data-v-d5ff87d0="">
                  <div
                    className="flex items-center relative"
                    style={{ background: "#121323" }}
                    data-v-d5ff87d0=""
                  >
                    <picture>
                      <source
                        srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        media="(max-width: 599px)"
                      />
                      <source srcSet="https://assets.igitems.com/files/TmcBPmBGAit6EC2BaBkc7smoctq835JF.jpeg" />
                      <img
                        className="absolute inset-0 w-full h-full object-cover object-top z-0 opacity-30"
                        src="https://assets.igitems.com/files/TmcBPmBGAit6EC2BaBkc7smoctq835JF.jpeg"
                      />
                    </picture>
                    <picture className="hidden sm:block">
                      <source
                        srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        media="(min-width: 640px)"
                      />
                      <source srcSet="https://assets.igitems.com/files/K9FGDEJWAQhaKFeSozmEMYKdimdND3d7.jpeg" />
                      <img
                        className="absolute inset-0 w-full h-full object-cover object-top z-0 opacity-30"
                        src="https://assets.igitems.com/files/K9FGDEJWAQhaKFeSozmEMYKdimdND3d7.jpeg"
                      />
                    </picture>
                    <div className="container py-6 relative z-10 sm:py-4">
                      <div className="flex justify-between items-center no-wrap">
                        <div>
                          <h1 className="text-4xl leading-10 tracking-wide font-extrabold mb-6 md:text-xl md:mb-4 md:leading-8">
                            {gameName}
                          </h1>
                          <div className="sm:text-sm">
                            {/**/}
                            <h2 className="leading-6 sm:h-12 sm:overflow-clip">
                              Customize your avatar with rare, but affordable 
                               {" " + gameName}.
                            </h2>
                          </div>
                        </div>
                        <div
                          className="flex justify-end md:hidden"
                          style={{ minWidth: 300 }}
                        >
                          <div
                            className="btn text-center cursor-pointer secondary"
                            style={{}}
                            data-v-1fb46fc5=""
                          >
                            {/*[*/}
                            Start Selling
                            {/*]*/}
                          </div>
                        </div>
                      </div>
                      {/*[*/}
                      <div className="mt-12 sm:mt-10" data-v-d5ff87d0="">
                        <div
                          className="overflow-auto flex no-wrap gap-6 scrollbar-hide sm:gap-0 sm:justify-between"
                          data-v-d5ff87d0=""
                        >
                          {/*[*/}
                          <a
                            aria-current="page"
                            href="/roblox-item"
                            className="active router-link-exact-active service-tab cursor-pointer flex items-center px-6 py-4 duration-300 sm:px-3 sm:py-2"
                            data-v-d5ff87d0=""
                          >
                            <div
                              className="flex items-center w-max"
                              data-v-d5ff87d0=""
                            >
                              <div className="w-6 h-6" data-v-d5ff87d0="">
                                <img
                                  src={itemIconOrange}
                                  style={{ width: 24, height: 24 }}
                                  width="24px"
                                  height="24px"
                                  alt="Items"
                                  data-v-d5ff87d0=""
                                />
                              </div>
                              <div
                                className="font-bold px-2 sm:text-sm"
                                data-v-d5ff87d0=""
                              >
                                Items
                              </div>
                              <div
                                className="font-light flex items-center gap-1 whitespace-nowrap sm:text-xs sm:block"
                                data-v-d5ff87d0=""
                              >
                                <span data-v-d5ff87d0="">| </span>
                                <span data-v-d5ff87d0="">{Length}</span>
                                <span className="sm:hidden" data-v-d5ff87d0="">
                                  results
                                </span>
                              </div>
                            </div>
                          </a>
                          <a
                            href="/roblox-account"
                            className="service-tab cursor-pointer flex items-center px-6 py-4 duration-300 sm:px-3 sm:py-2"
                            data-v-d5ff87d0=""
                          >
                            <div
                              className="flex items-center w-max"
                              data-v-d5ff87d0=""
                            >
                            </div>
                          </a>
                          {/*]*/}
                        </div>
                      </div>
                      {/*]*/}
                    </div>
                  </div>
                  <div data-v-d5ff87d0="" />
                  <div className="container" data-v-d5ff87d0="">
               
                    <div className="w-full mt-4" data-v-d5ff87d0="">
                      <div
                        className="sm:hidden w-full flex no-wrap q-pt-xl justify-between gap-4"
                        data-v-d5ff87d0=""
                      >
                        <div data-v-d5ff87d0="">
                          <div
                            className="flex items-center flex-wrap gap-2"
                            data-v-d5ff87d0=""
                          >
                            <div data-v-d5ff87d0="">
                              <div
                                className="text-white"
                                data-v-d5ff87d0=""
                                data-v-32dcd57c=""
                              >
                                <div
                                  className="flex items-center relative"
                                  data-v-32dcd57c=""
                                >
                                  <input
                                    placeholder="Search products"
                                    className="custom-filter grow"
                                    data-v-32dcd57c=""
                                  />
                                  <svg
                                    className="absolute"
                                    width={13}
                                    height={12}
                                    viewBox="0 0 13 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ top: 13, right: 20 }}
                                    data-v-32dcd57c=""
                                  >
                                    <path
                                      d="M12 11.3125L9.49138 8.79941M10.8816 5.44079C10.8816 6.70144 10.3808 7.91046 9.48937 8.80187C8.59796 9.69329 7.38894 10.1941 6.12829 10.1941C4.86764 10.1941 3.65862 9.69329 2.76721 8.80187C1.87579 7.91046 1.375 6.70144 1.375 5.44079C1.375 4.18014 1.87579 2.97112 2.76721 2.07971C3.65862 1.18829 4.86764 0.6875 6.12829 0.6875C7.38894 0.6875 8.59796 1.18829 9.48937 2.07971C10.3808 2.97112 10.8816 4.18014 10.8816 5.44079Z"
                                      stroke="white"
                                      strokeOpacity="0.7"
                                      strokeWidth="1.2782"
                                      strokeLinecap="round"
                                      data-v-32dcd57c=""
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div data-v-d5ff87d0="">
                              <div data-v-d5ff87d0="" data-v-ef7bcce7="">
                                <div
                                  className="flex items-center relative sm:static"
                                  data-v-ef7bcce7=""
                                >
                                  <input
                                    placeholder="Price"
                                    defaultValue=""
                                    className="custom-filter grow cursor-pointer"
                                    data-v-ef7bcce7=""
                                  />
                                  <svg
                                    className="sm:hidden absolute right-0"
                                    width={10}
                                    height={6}
                                    viewBox="0 0 10 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                      height: "1.125rem",
                                      width: ".625rem",
                                      top: 17,
                                      right: 20
                                    }}
                                    data-v-ef7bcce7=""
                                  >
                                    <path
                                      d="M0.977689 0H9.01831C9.57456 0 9.85269 0.671875 9.45894 1.06563L5.44019 5.0875C5.19644 5.33125 4.79956 5.33125 4.55581 5.0875L0.537064 1.06563C0.143314 0.671875 0.421439 0 0.977689 0Z"
                                      fill="white"
                                      data-v-ef7bcce7=""
                                    />
                                  </svg>
                                  {/**/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="flex items-center gap-2 font-bold cursor-pointer"
                          data-v-d5ff87d0=""
                        >
                        
                        </div>
                      </div>
                      {/**/}
                      <div
                        className="flex items-center justify-between pt-4"
                        data-v-d5ff87d0=""
                      >
                        <div
                          className="w-full font-extrabold text-xl opacity-80 md:text-base"
                          data-v-d5ff87d0=""
                        >
                          {Length} items found
                        </div>
                        <div
                          className="flex items-center gap-2 md:mt-0 md:gap-1"
                          data-v-d5ff87d0=""
                        >
                        
                        </div>
                      </div>
                     
           
        <div style={{ minHeight: "100vh" }} data-v-d5ff87d0="">
              <div
                          className="xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid grid-cols-4 gap-2 pt-4"
                          data-v-d5ff87d0=""
                        >
                          {
                            games.map(gm => {
                               return(
                                   <SingleItem data={gm}/>
                               )
                            })
                          }
                        </div>
                        </div>
                                 <div
                        className="flex items-center justify-center gap-4 mt-8 sm:gap-2 mb-4"
                        style={{ height: 40, minWidth: 270 }}
                        data-v-d5ff87d0=""
                        data-v-82196624=""
                      >
                        {/**/}
                        <button
                          className="h-10 w-10 flex items-center justify-center rounded-full"
                          type="button"
                          disabled=""
                          aria-label="Go to previous page"
                          data-v-82196624=""
                        >
                          <div className="arrow left" data-v-82196624="" />
                        </button>
                        {/*[*/}
                        {
                          [...Array(pageCount).keys()].map((SingPageNumber) => {
                            SingPageNumber+=1;
                                 return (
                          <div className="p-1" data-v-82196624="">
                            <a
                              aria-current="page"
                              href={"/items/"+gameName+"?page=1"}
                              className="router-link-active router-link-exact-active cursor-pointer font-bold text-secondary"
                              style={{color:SingPageNumber==page?"#ffa300":"#FFF"}}
                            >
                              {SingPageNumber}
                            </a>
                          </div>
                                 )
                          })
                        }


                        <button
                          className="h-10 w-10 flex items-center justify-center rounded-full"
                          type="button"
                          aria-label="Go to next page"
                          data-v-82196624=""
                        >
                          <div className="arrow right" data-v-82196624="" />
                        </button>
                      </div>
                       
                    </div>
                  </div>
                </div>
        
              </div>
            </div>
                      </>
    )
}
export default Items