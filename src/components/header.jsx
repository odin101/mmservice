'use strict';

import LimitedStock from '../img/icons/limited-stock.gif'
import React, { Component, useState, 
  useRef,
  forwardRef,useImperativeHandle } from 'react';
import Logo from '../img/logo.png'
import LoginModal from './modal'
import { useSignIn  } from 'react-auth-kit'
import {useIsAuthenticated} from 'react-auth-kit';
import MissingImg from '../img/icons/missingImg.webp'
import SellingIcon from '../img/icons/offers-icon.svg'
import OrderIcon from '../img/icons/orders-icon.svg'
import EditProfile from '../img/icons/settings-icon.svg'
import SupportIcon from '../img/icons/inbox-icon.svg'
import LogoutIcon from '../img/icons/logout-icon.svg'
import SmallSearch from './smallSearch';
import './header.css'
import HandleOutsideClick  from 'react-outside-click-event'
import RegModalComponent from './RegModal'
import BigSearch from './bigSearch';
const Header = forwardRef((props,ref) => {
const searchInput = useRef(null)
useImperativeHandle(ref,() => ({
   focusSearch()  {
    searchInput.current.focus()
  }
}))

  const isAuthenticated = useIsAuthenticated()

const [modalVisible,setModalVisible] = useState(false);
const [RegModal,setRegModal] = useState(false);

const [dropDown,setDropdown] = useState(false)
const [focused,setFocused] = useState(false)
const [connection,setConntection] = useState(false)


 const onSubmit = (e)  => {
    
        
        if(props.signIn(
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
        <div 
        className="showHeader"
            style={{
              background: "#1F2332",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 300
            }}
            data-v-9f5b85b4=""
            data-v-5315b842=""
          >
            {
              modalVisible?(
                <LoginModal 
                 submit={() => {
                  this.onSubmit()
                 }}
                 backClick={() => 
                  {
                    //this.setState({modalVisible:false})
                     setModalVisible(false)
                  }}
                 />
              ):(<></>)
            }

            {
              RegModal?(
                 <RegModalComponent backClick={() => 
                //  this.setState({RegModal:false})
                setRegModal(false)
                }/>
              ):(<></>)
            }
            <div
              className="header flex items-center justify-between container"
              data-v-5315b842=""
            >
              <div className="flex items-center gap-8" data-v-5315b842="">
                <a href="/" className="flex" alt="igitems" data-v-5315b842="">
                  <img style={{width:200}} src={Logo} />
                </a>
                <div
                  className="row flex-left no-wrap items-center relative"
                  data-v-5315b842=""
                >
                  <div
                    className="rounded-full p-3 px-6 w-full gap-4 flex items-center bg-white/5 sm:bg-transparent"
                    style={{ boxShadow: "0px 4px 17px rgba(0, 0, 0, 0.04)" }}
                  >
                    <div data-v-d9e45827="">
                      <div
                        className="sm:hidden relative flex"
                        data-v-d9e45827=""
                      >
                        <input
                          className={focused?"bg-transparent border-0 outline-none duration-300 w-[360px] xs:w-full xs:rounded-none":"w-[330px] xs:w-56 bg-transparent border-0 outline-none duration-300   "}
                          autoComplete="off"
                          defaultValue=""
                          onFocus={() => setFocused(true)}
                          onBlur={() => 
                            setTimeout(() => {
                              setFocused(false)
                            },100)
                          }
                          ref={searchInput}
                          
                          placeholder="Find your games, products..."
                          data-v-d9e45827=""
                        />
                        <div
                          className="cursor-pointer absolute hidden sm:block"
                          style={{ top: 18, right: 18 }}
                          data-v-d9e45827=""
                        >
                          <svg
                            width={16}
                            height={16}
                            class="sm:hidden duration-300"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            data-v-d9e45827=""
                          >
                            <path
                              d="M1.17105 1.99697C1.11682 1.94274 1.0738 1.87835 1.04446 1.8075C1.01511 1.73664 1 1.6607 1 1.58401C1 1.50732 1.01511 1.43137 1.04446 1.36052C1.0738 1.28966 1.11682 1.22528 1.17105 1.17105C1.22528 1.11682 1.28966 1.0738 1.36052 1.04446C1.43137 1.01511 1.50732 1 1.58401 1C1.6607 1 1.73664 1.01511 1.8075 1.04446C1.87835 1.0738 1.94274 1.11682 1.99697 1.17105L8 7.17525L14.003 1.17105C14.0573 1.11682 14.1216 1.0738 14.1925 1.04446C14.2634 1.01511 14.3393 1 14.416 1C14.4927 1 14.5686 1.01511 14.6395 1.04446C14.7103 1.0738 14.7747 1.11682 14.8289 1.17105C14.8832 1.22528 14.9262 1.28966 14.9555 1.36052C14.9849 1.43137 15 1.50732 15 1.58401C15 1.6607 14.9849 1.73664 14.9555 1.8075C14.9262 1.87835 14.8832 1.94274 14.8289 1.99697L8.82475 8L14.8289 14.003C14.8832 14.0573 14.9262 14.1216 14.9555 14.1925C14.9849 14.2634 15 14.3393 15 14.416C15 14.4927 14.9849 14.5686 14.9555 14.6395C14.9262 14.7103 14.8832 14.7747 14.8289 14.8289C14.7747 14.8832 14.7103 14.9262 14.6395 14.9555C14.5686 14.9849 14.4927 15 14.416 15C14.3393 15 14.2634 14.9849 14.1925 14.9555C14.1216 14.9262 14.0573 14.8832 14.003 14.8289L8 8.82475L1.99697 14.8289C1.94274 14.8832 1.87835 14.9262 1.8075 14.9555C1.73664 14.9849 1.6607 15 1.58401 15C1.50732 15 1.43137 14.9849 1.36052 14.9555C1.28966 14.9262 1.22528 14.8832 1.17105 14.8289C1.11682 14.7747 1.0738 14.7103 1.04446 14.6395C1.01511 14.5686 1 14.4927 1 14.416C1 14.3393 1.01511 14.2634 1.04446 14.1925C1.0738 14.1216 1.11682 14.0573 1.17105 14.003L7.17525 8L1.17105 1.99697Z"
                              fill="white"
                              fillOpacity="0.7"
                              data-v-d9e45827=""
                            />
                            <path
                              d="M1.10034 2.06768L1.10035 2.06768L7.03382 8L1.10035 13.9323L1.10034 13.9323C1.03683 13.9958 0.986442 14.0712 0.952067 14.1542C0.917692 14.2372 0.9 14.3262 0.9 14.416C0.9 14.5058 0.917692 14.5948 0.952067 14.6778C0.986442 14.7607 1.03683 14.8361 1.10034 14.8997C1.16386 14.9632 1.23926 15.0136 1.32225 15.0479C1.40524 15.0823 1.49418 15.1 1.58401 15.1C1.67383 15.1 1.76278 15.0823 1.84577 15.0479C1.92876 15.0136 2.00416 14.9632 2.06768 14.8997L2.06768 14.8997L8 8.96618L13.9323 14.8997L13.9323 14.8997C13.9958 14.9632 14.0712 15.0136 14.1542 15.0479C14.2372 15.0823 14.3262 15.1 14.416 15.1C14.5058 15.1 14.5948 15.0823 14.6777 15.0479C14.7607 15.0136 14.8361 14.9632 14.8997 14.8997C14.9632 14.8361 15.0136 14.7607 15.0479 14.6778C15.0823 14.5948 15.1 14.5058 15.1 14.416C15.1 14.3262 15.0823 14.2372 15.0479 14.1542C15.0136 14.0712 14.9632 13.9958 14.8997 13.9323L14.8997 13.9323L8.96618 8L14.8997 2.06768L14.8997 2.06768C14.9632 2.00416 15.0136 1.92876 15.0479 1.84577C15.0823 1.76278 15.1 1.67383 15.1 1.58401C15.1 1.49418 15.0823 1.40524 15.0479 1.32225C15.0136 1.23926 14.9632 1.16386 14.8997 1.10034L14.8291 1.17088L14.8997 1.10034C14.8361 1.03683 14.7607 0.986442 14.6778 0.952067C14.5948 0.917692 14.5058 0.9 14.416 0.9C14.3262 0.9 14.2372 0.917692 14.1542 0.952067C14.0712 0.986442 13.9958 1.03683 13.9323 1.10034L13.9323 1.10035L8 7.03382L2.06768 1.10035L2.06768 1.10034C2.00416 1.03683 1.92876 0.986442 1.84577 0.952067C1.76278 0.917692 1.67383 0.9 1.58401 0.9C1.49418 0.9 1.40524 0.917692 1.32225 0.952067C1.23926 0.986442 1.16386 1.03683 1.10034 1.10034C1.03683 1.16386 0.986442 1.23926 0.952067 1.32225C0.917692 1.40524 0.9 1.49418 0.9 1.58401C0.9 1.67383 0.917692 1.76278 0.952067 1.84577C0.986442 1.92876 1.03683 2.00416 1.10034 2.06768Z"
                              stroke="white"
                              strokeOpacity="0.7"
                              strokeWidth="0.2"
                              data-v-d9e45827=""
                            />
                          </svg>
                        </div>
                        {
                          focused?(
                           <BigSearch />
                          ):(<></>)
                        }

                        {/**/}
                        <svg
                          className="sm:hidden duration-300"
                          width={21}
                          height={21}
                          viewBox="0 0 21 21"
                            style={{marginTop: 2, transform: focused?'scale(1.3)':'scale(1)'}}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-v-d9e45827=""
                        >
                          <path
                            d="M18.375 18.375L14.4497 14.4428L18.375 18.375ZM16.625 9.1875C16.625 11.16 15.8414 13.0518 14.4466 14.4466C13.0518 15.8414 11.16 16.625 9.1875 16.625C7.21495 16.625 5.3232 15.8414 3.92839 14.4466C2.53359 13.0518 1.75 11.16 1.75 9.1875C1.75 7.21495 2.53359 5.3232 3.92839 3.92839C5.3232 2.53359 7.21495 1.75 9.1875 1.75C11.16 1.75 13.0518 2.53359 14.4466 3.92839C15.8414 5.3232 16.625 7.21495 16.625 9.1875V9.1875Z"
                            stroke="white"
                            strokeOpacity="0.7"
                            strokeWidth={2}
                            strokeLinecap="round"
                            data-v-d9e45827=""
                          />
                        </svg>
                      </div>
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
     {// 
     }



  {/* <SmallSearch /> */}







     {
      //
     }
              {
                !isAuthenticated()?(
              <div className="flex gap-16 md:gap-4" data-v-5315b842="">
                <div className="flex items-center gap-2" data-v-5315b842="">
                  <div
                    className="flex items-center gap-1 hidden sm:block"
                    data-v-5315b842=""
                  >
                    <div
                      className="cursor-pointer text-secondary font-bold"
                      data-v-5315b842=""
                    >
                      <svg
                        width={21}
                        height={21}
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-v-5315b842=""
                      >
                        <path
                          d="M18.375 18.375L14.4497 14.4428L18.375 18.375ZM16.625 9.1875C16.625 11.16 15.8414 13.0518 14.4466 14.4466C13.0518 15.8414 11.16 16.625 9.1875 16.625C7.21495 16.625 5.3232 15.8414 3.92839 14.4466C2.53359 13.0518 1.75 11.16 1.75 9.1875C1.75 7.21495 2.53359 5.3232 3.92839 3.92839C5.3232 2.53359 7.21495 1.75 9.1875 1.75C11.16 1.75 13.0518 2.53359 14.4466 3.92839C15.8414 5.3232 16.625 7.21495 16.625 9.1875V9.1875Z"
                          stroke="white"
                          strokeOpacity="0.7"
                          strokeWidth={2}
                          strokeLinecap="round"
                          data-v-5315b842=""
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center gap-8 sm:hidden"
                  data-v-5315b842=""
                >
                  <div
                  onClick={() =>  {
                    // this.setState({RegModal:true})
                    setRegModal(true)
                  }}
                  className="font-bold cursor-pointer" data-v-5315b842="">
                    Sign Up
                  </div>
                  <div
                   onClick={() => {
                    // this.setState({modalVisible:true})/
                    setModalVisible(true)
                   }}
                    className="btn text-center cursor-pointer wide"
                    style={{}}
                    data-v-5315b842=""
                    data-v-1fb46fc5=""
                  >
                    {/*[*/}
                    Log in
                    {/*]*/}
                  </div>
                  {/**/}
                </div>
              </div>):(<>
              
                <div className="flex gap-16 md:gap-4" data-v-5315b842>
  <div className="flex items-center gap-2" data-v-5315b842>
    <div className="flex items-center gap-1 hidden sm:block" data-v-5315b842>
      <div className="cursor-pointer text-secondary font-bold" data-v-5315b842>
        <svg
          width={21}
          height={21}
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-v-5315b842
        >
          <path
            d="M18.375 18.375L14.4497 14.4428L18.375 18.375ZM16.625 9.1875C16.625 11.16 15.8414 13.0518 14.4466 14.4466C13.0518 15.8414 11.16 16.625 9.1875 16.625C7.21495 16.625 5.3232 15.8414 3.92839 14.4466C2.53359 13.0518 1.75 11.16 1.75 9.1875C1.75 7.21495 2.53359 5.3232 3.92839 3.92839C5.3232 2.53359 7.21495 1.75 9.1875 1.75C11.16 1.75 13.0518 2.53359 14.4466 3.92839C15.8414 5.3232 16.625 7.21495 16.625 9.1875V9.1875Z"
            stroke="white"
            strokeOpacity="0.7"
            strokeWidth={2}
            strokeLinecap="round"
            data-v-5315b842
          />
        </svg>
      </div>
    </div>
  </div>
  <div className="flex items-center gap-8 sm:hidden" data-v-5315b842    >
    <div data-v-5315b842 className="flex no-wrap gap-4 sm:gap-1">
      <div className="flex gap-6 justify-end" 
      style={{ "min-width": "90px" }}>
        <div 
          onClick={() => {
            if(connection) {
            setConntection(false)
              }else{
            setConntection(true)
              }
          }}
        className="flex items-center">
          <div className="cursor-pointer relative">
            <svg
              width={21}
              height={21}
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 0H5.25C2.31 0 0 2.30137 0 5.23039V11.5068V12.5529C0 15.3773 2.31 17.7833 5.25 17.7833H6.825C7.14 17.7833 7.455 17.9925 7.665 18.2017L9.24 20.2939C9.975 21.2354 11.025 21.2354 11.76 20.2939L13.335 18.2017C13.545 17.8879 13.86 17.7833 14.175 17.7833H15.75C18.69 17.7833 21 15.4819 21 12.5529V5.23039C21 2.30137 18.69 0 15.75 0ZM11.55 12.3437H5.25C4.83 12.3437 4.41 12.0299 4.41 11.5068C4.41 10.9838 4.725 10.67 5.25 10.67H11.55C11.97 10.67 12.39 10.9838 12.39 11.5068C12.39 12.0299 11.97 12.3437 11.55 12.3437ZM15.75 7.11333H5.25C4.83 7.11333 4.515 6.69489 4.515 6.27646C4.515 5.85803 4.83 5.54421 5.25 5.54421H15.75C16.17 5.54421 16.59 5.85803 16.59 6.38107C16.59 6.90411 16.17 7.11333 15.75 7.11333V7.11333Z"
                fill="white"
                fillOpacity={1}
              />
            </svg>
          </div>
          {
        connection && (
    <HandleOutsideClick onOutsideClick={() => {
      setTimeout(() => {

       setConntection(false)
      },100)
    }}>
        <div data-overlayscrollbars-initialize
        className="sm:right-0 top-20 rounded-lg absolutiii" style={{"background":"rgb(42, 46, 60)","box-shadow":"rgba(0, 0, 0, 0.3) 0px 4px 34px","width":"400px","margin-left":"-200px","max-width":"80%", 
       position:'absolute !important' }} data-overlayscrollbars="host">
  <div className="os-size-observer os-size-observer-appear">
    <div className="os-size-observer-listener ltr" />
  </div>

  <div className="os-viewport os-viewport-scrollbar-hidden" style={{"margin-right":"0px","margin-bottom":"0px","margin-left":"0px","top":"0px","right":"auto","left":"0px","width":"calc(100% + 0px)","padding":"0px"}}>
    <div className="w-full px-4 py-3 flex items-center justify-between">
      <div className="font-bold">You do not have any connections.</div>
      {/**/}
    </div>
    <div className="w-full bg-white/10 h-0.5" />
    {/**/}
  </div>

  <div className="os-scrollbar os-scrollbar-horizontal os-theme-dark os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
    <div className="os-scrollbar-track">
      <div className="os-scrollbar-handle" style={{"width":"100%"}} />
    </div>
  </div>
  <div className="os-scrollbar os-scrollbar-vertical os-theme-dark os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
    <div className="os-scrollbar-track">
      <div className="os-scrollbar-handle" style={{"height":"100%"}} />
    </div>
  </div>
</div>
       </HandleOutsideClick> 
        )
        }
        </div>

{
  //// 
}
        <div className="flex items-center">
          <div className="cursor-pointer relative">
            <svg
              width={18}
              height={21}
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.07003 20.9998C9.95148 20.9844 10.7973 20.7335 11.458 20.2914C12.1187 19.8493 12.5516 19.2445 12.6801 18.584H5.32001C5.4522 19.2624 5.90535 19.8814 6.59516 20.3258C7.28496 20.7702 8.16446 21.0097 9.07003 20.9998V20.9998Z"
                fill="white"
                fillOpacity={1}
              />
              <path
                d="M18 16.2477L17.7946 16.0665C17.212 15.5474 16.702 14.9521 16.2785 14.2967C15.816 13.3922 15.5387 12.4045 15.4631 11.3914V8.40747C15.4606 8.04503 15.4283 7.6834 15.3664 7.32627C15.2355 6.57049 14.9045 5.55367 14.0937 4.55741C13.4344 3.74727 14.248 4.55741 12.9192 3.38294L11.7483 2.50009C11.1177 2.18973 10.4401 1.98565 9.74295 1.89606V1.13499C9.74295 0.921125 9.658 0.71602 9.50677 0.564795C9.35555 0.413571 9.15044 0.328613 8.93658 0.328613C8.72271 0.328613 8.51761 0.413571 8.36638 0.564795C8.21516 0.71602 8.1302 0.921125 8.1302 1.13499V1.92626C6.56923 2.14646 5.14062 2.92396 4.10812 4.11522C3.07563 5.30647 2.50896 6.83105 2.51275 8.40747V11.3914C2.4371 12.4045 2.15987 13.3922 1.69732 14.2967C1.28107 14.9505 0.779312 15.5457 0.205369 16.0665L0 16.2477V17.9511H18V16.2477Z"
                fill="white"
                fillOpacity={1}
              />
            </svg>
            {/**/}
            {/**/}
          </div>
          {/**/}
        </div>
      </div>




      <div className="relative"    onMouseEnter={() => setDropdown(true)}   onMouseLeave={() => setDropdown(false)} >
        <div
          data-v-1fb46fc5
          className="btn text-center cursor-pointer flex gap-2 items-center"
          style={{ background: "transparent", color: "rgb(255, 163, 0)" }}
        >
          <div className="shrink-0">
            <div className="flex items-center no-wrap gap-2">
              <img
                src={MissingImg}
                format="webp"
                loading="lazy"
                className="xs:hidden"
                style={{
                  width: "36px",
                  height: "36px",
                  "border-radius": "100%",
                  border: "3px solid rgba(255, 255, 255, 0.12)",
                }}
              />
              <div className="flex flex-col">
                <div
                  className="text-center text-white text-sm gt-xs text-ellipsis overflow-hidden whitespace-nowrap"
                  style={{ "max-width": "80px" }}
                >
                  Mr Mrodin ODIN
                </div>
              </div>
            </div>
          </div>
          <svg
            className="shrink-0"
            width={15}
            height={7}
            viewBox="0 0 15 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ "margin-top": "2px" }}
          >
            <path
              d="M1.91504 1L7.51504 5.8L13.115 1"
              stroke="#FFA300"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>


{
  ///
}




{
  dropDown?(

        <div className="absolute flex flex-col z-50 right-0 rounded-lg overflow-hidden py-6" style={{"width":"300px","background":"rgb(42, 46, 60)","box-shadow":"rgba(0, 0, 0, 0.3) 0px 4px 34px"}}>
  <div className="px-6" style={{}}>
    <div className="flex items-center no-wrap gap-2" style={{}}>
      <img src={MissingImg} format="webp" loading="lazy" className="xs:hidden" style={{"width":"36px","height":"36px","border-radius":"100%","border":"3px solid rgba(255, 255, 255, 0.12)"}} />
      <div className="flex flex-col items-start">
        <div className="text-center text-white font-bold text-ellipsis overflow-hidden whitespace-nowrap" style={{"max-width":"150px"}}>Mr Mrodin ODIN</div>
      </div>
    </div>
    <div className="w-full my-6 h-0.5 bg-white/5" style={{}} />
  </div>
  <div className="text-sm font-light text-white opacity-70 px-6 mb-2" style={{}}>Selling</div>
  <div className="px-2 mb-4">
    <a href="/dashboard/create-offer" className>
      <div className="flex items-center gap-3 py-3 cursor-pointer duration-300 rounded-lg px-4 hover:bg-white/5" style={{}}>
        <img src={SellingIcon} style={{"width":"18px","height":"18px"}} />
        <div className="font-bold">Start selling</div>
      </div>
    </a>
  </div>
  <div className="text-sm font-light text-white opacity-70 px-6 mb-2" style={{}}>My profile</div>
  <div className="px-2 mb-4" style={{}}>
    <a href={"/dashboard/offers"} className>
      <div className="flex items-center gap-3 py-3 cursor-pointer duration-300 rounded-lg px-4 hover:bg-white/5" style={{}}>
        <img src={OrderIcon} style={{"width":"18px","height":"18px"}} />
        <div className="font-bold">My orders</div>
      </div>
    </a>
    <a href="/dashboard/account" className>
      <div className="flex items-center gap-3 py-3 cursor-pointer duration-300 rounded-lg px-4 hover:bg-white/5">
        <img src={EditProfile} style={{"width":"18px","height":"18px"}} />
        <div className="font-bold">Edit profile</div>
      </div>
    </a>
  </div>
  <div className="text-sm font-light text-white opacity-70 px-6 mb-2">Help</div>
  <div className="px-2">
    <a href="/support" className>
      <div className="flex items-center gap-3 py-3 cursor-pointer duration-300 rounded-lg px-4 hover:bg-white/5">
        <img src={SupportIcon} style={{"width":"18px","height":"18px"}} />
        <div className="font-bold">Support</div>
      </div>
    </a>
    <div className="flex items-center gap-3 py-3 cursor-pointer duration-300 rounded-lg px-4 hover:bg-white/5">
      <img className="opacity-50" src={LogoutIcon} style={{"width":"18px","height":"18px"}} /> 
      <div className="font-bold opacity-50">Logout</div>
    </div>
  </div>
</div>

    
  ):(
    <></>
  )
}
{
  ///
}








      </div>
    </div>
  </div>
</div>

              
              </>)

                  }

              
            </div>
          </div>)

})
 


export default Header;
//(withSignIn(withIsAuthenticated(Header)))