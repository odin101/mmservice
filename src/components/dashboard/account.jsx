import React,{useEffect, useState} from 'react';
import InfoIcon from '../../img/icons/settings/info.svg'
import PhoneIcon from '../../img/icons/phonemail.svg'
import AboutMeIcon from '../../img/icons/verification.svg'
import SecurityIcon from '../../img/icons/password.svg'
import Social from '../../img/icons/social.svg'
import UploadModal1 from './uploadModal';
import axios from 'axios'
import MissingImg from '../../img/icons/missingImg.webp'
import {useAuthUser} from 'react-auth-kit'

import API from '../../config'
import storage from "../../firebaseConfig.js"
import {ref} from "firebase/storage"

import {
  getDownloadURL,
  uploadBytesResumable 
} from "firebase/storage";



export default function Accounts() {

   const auth = useAuthUser()
   const [photo,setUploadedPhoto] = useState(false)
   const [UploadModal,setUploadModal] = useState(false)
   const [ProfilePhotoURL,setProfilePhotoURL] = useState("")
   const [gotData,setGotData] = useState(false)


   useEffect(() => {
if(!gotData) {

    setProfilePhotoURL(auth().profileImage)
    setGotData(true)
}
   })
   
   function handleUpload(file) {
       
          if (!file) {
            alert("Please choose a file first!")
        }

        const storageRef = ref(storage,`/userProfiles/${auth()._id}}`)
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                                    setProfilePhotoURL(url)
                              axios.post(API + "/user/userphoto",{
                                photo:url,
                              },{
                            headers:{
                              'Authorization':auth().token
                            }
                          })
                          .then(res => {

                                    setProfilePhotoURL(url)
                          })
              });
            }
        ); 
}


  return (
    <>
    <div data-v-4e346f31 className="container py-8 text-white" style={{"margin":"0px"}}>
  <div data-v-4e346f31 className="flex justify-between mb-4">
    <div data-v-4e346f31 className="col-auto">
      <div data-v-4e346f31 className="font-bold text-xl">Account Settings</div>
    </div>
    <a data-v-4e346f31 href="/profile/Mr Mrodin ODIN" className>
      <div data-v-1fb46fc5 data-v-4e346f31 className="btn text-center cursor-pointer secondary" style={{"padding":"5px 14px","font-size":"14px"}}>View Public Profile</div>
    </a>
  </div>
  <div data-v-4e346f31 className="w-full mt-6" style={{"background":"rgb(31, 35, 50)","border-radius":"10px","min-height":"700px"}}>
    <div data-v-4e346f31 className="flex no-wrap sm:flex-col">
      <div data-v-4e346f31 className="flex flex-col relative sm:flex-row sm:flex-nowrap sm:overflow-auto sm:pb-2" style={{"min-width":"290px"}}>
        <div data-v-4e346f31>
          <div data-v-4e346f31 className="option-btn flex justify-between items-center p-6 cursor-pointer sm:p-3 border-r-2 border-r-white/10">
            <div data-v-4e346f31 className="flex items-center gap-4"><img data-v-4e346f31 src={InfoIcon} style={{"width":"30px","height":"30px"}} /><span data-v-4e346f31 className="whitespace-nowrap text-white font-bold" style={{"padding-right":"30px"}}>Personal Information</span></div>
            <img data-v-4e346f31 className="sm:hidden rotate-270" name="expand_more" size="sm" />
          </div>
          <div data-v-4e346f31 className="w-full h-0.5 bg-secondary" />
        </div>
        <div data-v-4e346f31>
          <div data-v-4e346f31 className="option-btn flex justify-between items-center p-6 cursor-pointer sm:p-3 border-r-2 border-r-white/10">
            <div data-v-4e346f31 className="flex items-center gap-4"><img data-v-4e346f31 src={PhoneIcon} style={{"width":"30px","height":"30px"}} /><span data-v-4e346f31 className="whitespace-nowrap" style={{"padding-right":"30px"}}>Phone And Email</span></div>
            {/**/}
          </div>
          <div data-v-4e346f31 className="w-full h-0.5 bg-white/10" />
        </div>
        <div data-v-4e346f31>
          <div data-v-4e346f31 className="option-btn flex justify-between items-center p-6 cursor-pointer sm:p-3 border-r-2 border-r-white/10">
            <div data-v-4e346f31 className="flex items-center gap-4"><img data-v-4e346f31 src={AboutMeIcon} style={{"width":"30px","height":"30px"}} /><span data-v-4e346f31 className="whitespace-nowrap" style={{"padding-right":"30px"}}>About me</span></div>
            {/**/}
          </div>
          <div data-v-4e346f31 className="w-full h-0.5 bg-white/10" />
        </div>
        <div data-v-4e346f31>
          <div data-v-4e346f31 className="option-btn flex justify-between items-center p-6 cursor-pointer sm:p-3 border-r-2 border-r-white/10">
            <div data-v-4e346f31 className="flex items-center gap-4"><img data-v-4e346f31 src={SecurityIcon} style={{"width":"30px","height":"30px"}} /><span data-v-4e346f31 className="whitespace-nowrap" style={{"padding-right":"30px"}}>Security</span></div>
            {/**/}
          </div>
          <div data-v-4e346f31 className="w-full h-0.5 bg-white/10" />
        </div>
        <div data-v-4e346f31>
          <div data-v-4e346f31 className="option-btn flex justify-between items-center p-6 cursor-pointer sm:p-3 border-r-2 border-r-white/10">
            <div data-v-4e346f31 className="flex items-center gap-4"><img data-v-4e346f31 src={Social} style={{"width":"30px","height":"30px"}} /><span data-v-4e346f31 className="whitespace-nowrap" style={{"padding-right":"30px"}}>Email Preferences</span></div>
            {/**/}
          </div>
          <div data-v-4e346f31 className="w-full h-0.5 bg-white/10" />
        </div>
        <div data-v-4e346f31 className="absolute right-0 w-0.5 bg-white/10 sm:hidden" />
      </div>
      <div data-v-4e346f31 className="grow shrink w-full p-6">
        <div data-v-4e346f31 className="text-white font-bold text-xl">Personal Information</div>
        <div data-v-4e346f31>
          <div className="flex flex-col items-center my-8">
            <img                                        
               src={ProfilePhotoURL?ProfilePhotoURL:MissingImg }
            
            format="webp" loading="lazy" fit="cover"

                                        position="center"
             style={{"width":"120px",height:120,"border-radius":"100%","border":"2px solid rgba(255, 255, 255, 0.05)",  "object-fit": "cover"}} />
            <div 
             onClick={() => setUploadModal(true)}
             className="flex items-center gap-2 text-base text-secondary mt-2 cursor-pointer">
              <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5125 4.53C14.2606 3.25329 13.5732 2.10364 12.5678 1.27743C11.5624 0.451225 10.3013 -0.000294182 9 1.43803e-07C6.8325 1.43803e-07 4.95 1.23 4.0125 3.03C2.91018 3.14912 1.89075 3.67141 1.15012 4.49649C0.409478 5.32158 -0.000128776 6.39126 3.03696e-08 7.5C3.03696e-08 9.9825 2.0175 12 4.5 12H14.25C16.32 12 18 10.32 18 8.25C18 6.27 16.4625 4.665 14.5125 4.53ZM10.5 6.75V9.75H7.5V6.75H5.25L9 3L12.75 6.75H10.5Z" fill="#FFA300" />
              </svg>
              <div  className="font-bold">Change</div>
            </div>
          </div>
          <div className="w-full h-0.5 bg-white/10" />
          <div className="my-8 flex flex-col gap-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 gap-8 xs:gap-4">
              <label data-v-a158f60f className>
                <div data-v-a158f60f className="opacity-70 text-white mb-2 text-sm">Username</div>
                <input data-v-a158f60f className="w-full outline-none text-white" placeholder style={{"background":"rgb(13, 18, 38)","border-radius":"14px","padding":"11px 22px","border":"1px solid transparent"}} />{/**/}
              </label>
              <label data-v-a158f60f className>
                <div data-v-a158f60f className="opacity-70 text-white mb-2 text-sm">Full name</div>
                <input data-v-a158f60f className="w-full outline-none text-white" placeholder style={{"background":"rgb(13, 18, 38)","border-radius":"14px","padding":"11px 22px","border":"1px solid transparent"}} />{/**/}
              </label>
            </div>
            <div className="grid grid-cols-3 gap-8 xs:grid-cols-1 xs:gap-4">
              <label data-v-8811fd13>
                <div data-v-8811fd13 className="opacity-70 text-white mb-2 text-sm">Country </div>
                <div data-v-8811fd13 className="multiselect ig-select">
                  <div className="multiselect-wrapper" tabIndex={-1}>
                    {/* Search */}<input type="text" className="multiselect-search" aria-controls="multiselect-options" aria-placeholder="Country" aria-expanded="false" aria-multiselectable="false" role="combobox" aria-labelledby="assist" />{/* Tags (with search) */}{/*v-if*/}{/* Single label */}
                    <div className="multiselect-single-label"><span className="multiselect-single-label-text">Georgia</span></div>
                    {/* Multiple label */}{/*v-if*/}{/* Placeholder */}{/*v-if*/}{/* Spinner */}{/*v-if*/}{/* Clear */}{/*v-if*/}{/* Caret */}<span className="multiselect-caret" aria-hidden="true" />
                  </div>
                  {/* Options */}
                  <div className="multiselect-dropdown is-hidden" tabIndex={-1}>
                    {/*v-if*/}{/*v-if*/}{/*v-if*/}
                  </div>
                  {/* Hacky input element to show HTML5 required warning */}{/*v-if*/}{/* Native input support */}{/*v-if*/}{/* Screen reader assistive text */}
                  <div className="multiselect-assistive-text" id="assist" aria-hidden="true">Georgia</div>
                  {/* Create height for empty input */}
                  <div className="multiselect-spacer" />
                </div>
              </label>
              <label data-v-8811fd13>
                <div data-v-8811fd13 className="opacity-70 text-white mb-2 text-sm">Currency </div>
                <div data-v-8811fd13 className="multiselect ig-select">
                  <div className="multiselect-wrapper" tabIndex={-1}>
                    {/* Search */}<input type="text" className="multiselect-search" aria-controls="multiselect-options" aria-placeholder="Currency" aria-expanded="false" aria-multiselectable="false" role="combobox" aria-labelledby="assist" />{/* Tags (with search) */}{/*v-if*/}{/* Single label */}
                    <div className="multiselect-single-label"><span className="multiselect-single-label-text">USD</span></div>
                    {/* Multiple label */}{/*v-if*/}{/* Placeholder */}{/*v-if*/}{/* Spinner */}{/*v-if*/}{/* Clear */}{/*v-if*/}{/* Caret */}<span className="multiselect-caret" aria-hidden="true" />
                  </div>
                  {/* Options */}
                  <div className="multiselect-dropdown is-hidden" tabIndex={-1}>
                    <ul className="multiselect-options" id="multiselect-options" role="listbox">
                      <li className="multiselect-option is-selected" data-selected="true" id="multiselect-option-USD" aria-selected="true" aria-label="USD" role="option"><span>USD</span></li>
                      <li className="multiselect-option" id="multiselect-option-EUR" aria-selected="false" aria-label="EUR" role="option"><span>EUR</span></li>
                    </ul>
                    {/*v-if*/}{/*v-if*/}{/*v-if*/}
                  </div>
                  {/* Hacky input element to show HTML5 required warning */}{/*v-if*/}{/* Native input support */}{/*v-if*/}{/* Screen reader assistive text */}
                  <div className="multiselect-assistive-text" id="assist" aria-hidden="true">USD</div>
                  {/* Create height for empty input */}
                  <div className="multiselect-spacer" />
                </div>
              </label>
              <div>
                <div className="opacity-70 text-white mb-2 text-sm">Date of Birth</div>
                <div className="v3dp__datepicker">
                  <div className="v3dp__input_wrapper">
                    <input type="text" readOnly className="text-white outline-none w-full" textinput placeholder tabIndex={0} style={{"background":"rgb(13, 18, 38)","border-radius":"14px","padding":"11px 22px","border":"1px solid transparent"}} />
                    <div className="v3dp__clearable" style={{"display":"none"}}><i>x</i></div>
                  </div>
                  <div data-v-2e128338 className="v3dp__popout" style={{"--popout-column-definition":"repeat(3, 1fr)","display":"none"}}>
                    <div data-v-2e128338 className="v3dp__heading">
                      <button data-v-2e128338 className="v3dp__heading__button">
                        <svg data-v-2e128338 data-v-2e128338-s className="v3dp__heading__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 8">
                          <g data-v-2e128338 data-v-2e128338-s fill="none" fillRule="evenodd">
                            <path data-v-2e128338 data-v-2e128338-s stroke="none" d="M-9 16V-8h24v24z" />
                            <path data-v-2e128338 data-v-2e128338-s strokeLinecap="round" strokeLinejoin="round" d="M5 0L1 4l4 4" />
                          </g>
                        </svg>
                      </button>
                      <span data-v-2e128338 className="v3dp__heading__center">2020 - 2029</span>
                      <button data-v-2e128338 className="v3dp__heading__button">
                        <svg data-v-2e128338 data-v-2e128338-s className="v3dp__heading__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 8">
                          <g data-v-2e128338 data-v-2e128338-s fill="none" fillRule="evenodd">
                            <path data-v-2e128338 data-v-2e128338-s stroke="none" d="M15-8v24H-9V-8z" />
                            <path data-v-2e128338 data-v-2e128338-s strokeLinecap="round" strokeLinejoin="round" d="M1 8l4-4-4-4" />
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div data-v-2e128338 className="v3dp__body">
                      {/*v-if*/}
                      <div data-v-2e128338 className="v3dp__elements"><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>2020</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>2021</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>2022</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>2023</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>2024</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>2025</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>2026</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>2027</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>2028</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>2029</span></button></div>
                    </div>
                  </div>
                  <div data-v-2e128338 className="v3dp__popout" headingformat="LLLL yyyy" style={{"--popout-column-definition":"repeat(3, 1fr)","display":"none"}}>
                    <div data-v-2e128338 className="v3dp__heading">
                      <button data-v-2e128338 className="v3dp__heading__button">
                        <svg data-v-2e128338 data-v-2e128338-s className="v3dp__heading__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 8">
                          <g data-v-2e128338 data-v-2e128338-s fill="none" fillRule="evenodd">
                            <path data-v-2e128338 data-v-2e128338-s stroke="none" d="M-9 16V-8h24v24z" />
                            <path data-v-2e128338 data-v-2e128338-s strokeLinecap="round" strokeLinejoin="round" d="M5 0L1 4l4 4" />
                          </g>
                        </svg>
                      </button>
                      <button data-v-2e128338 className="v3dp__heading__center">2023</button>
                      <button data-v-2e128338 className="v3dp__heading__button">
                        <svg data-v-2e128338 data-v-2e128338-s className="v3dp__heading__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 8">
                          <g data-v-2e128338 data-v-2e128338-s fill="none" fillRule="evenodd">
                            <path data-v-2e128338 data-v-2e128338-s stroke="none" d="M15-8v24H-9V-8z" />
                            <path data-v-2e128338 data-v-2e128338-s strokeLinecap="round" strokeLinejoin="round" d="M1 8l4-4-4-4" />
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div data-v-2e128338 className="v3dp__body">
                      {/*v-if*/}
                      <div data-v-2e128338 className="v3dp__elements"><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>Jan</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>Feb</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>Mar</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>Apr</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>May</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>Jun</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>Jul</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>Aug</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>Sep</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>Oct</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>Nov</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>Dec</span></button></div>
                    </div>
                  </div>
                  <div data-v-2e128338 className="v3dp__popout" style={{"--popout-column-definition":"repeat(7, 1fr)","display":"none"}}>
                    <div data-v-2e128338 className="v3dp__heading">
                      <button data-v-2e128338 className="v3dp__heading__button">
                        <svg data-v-2e128338 data-v-2e128338-s className="v3dp__heading__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 8">
                          <g data-v-2e128338 data-v-2e128338-s fill="none" fillRule="evenodd">
                            <path data-v-2e128338 data-v-2e128338-s stroke="none" d="M-9 16V-8h24v24z" />
                            <path data-v-2e128338 data-v-2e128338-s strokeLinecap="round" strokeLinejoin="round" d="M5 0L1 4l4 4" />
                          </g>
                        </svg>
                      </button>
                      <button data-v-2e128338 className="v3dp__heading__center">May 2023</button>
                      <button data-v-2e128338 className="v3dp__heading__button">
                        <svg data-v-2e128338 data-v-2e128338-s className="v3dp__heading__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 8">
                          <g data-v-2e128338 data-v-2e128338-s fill="none" fillRule="evenodd">
                            <path data-v-2e128338 data-v-2e128338-s stroke="none" d="M15-8v24H-9V-8z" />
                            <path data-v-2e128338 data-v-2e128338-s strokeLinecap="round" strokeLinejoin="round" d="M1 8l4-4-4-4" />
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div data-v-2e128338 className="v3dp__body">
                      <div data-v-2e128338 className="v3dp__subheading"><span data-v-2e128338-s>Mon</span><span data-v-2e128338-s>Tue</span><span data-v-2e128338-s>Wed</span><span data-v-2e128338-s>Thu</span><span data-v-2e128338-s>Fri</span><span data-v-2e128338-s>Sat</span><span data-v-2e128338-s>Sun</span></div>
                      <hr data-v-2e128338 className="v3dp__divider" />
                      <div data-v-2e128338 className="v3dp__elements"><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>01</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>02</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>03</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>04</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>05</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>06</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>07</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>08</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>09</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>10</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>11</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>12</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>13</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>14</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>15</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>16</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>17</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>18</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>19</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>20</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>21</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>22</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>23</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>24</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>25</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>26</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>27</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>28</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>29</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>30</span></button><button data-v-2e128338 data-v-2e128338-s className><span data-v-2e128338 data-v-2e128338-s>31</span></button><button data-v-2e128338 data-v-2e128338-s disabled className><span data-v-2e128338 data-v-2e128338-s>01</span></button><button data-v-2e128338 data-v-2e128338-s disabled className><span data-v-2e128338 data-v-2e128338-s>02</span></button><button data-v-2e128338 data-v-2e128338-s disabled className><span data-v-2e128338 data-v-2e128338-s>03</span></button><button data-v-2e128338 data-v-2e128338-s disabled className><span data-v-2e128338 data-v-2e128338-s>04</span></button></div>
                    </div>
                  </div>
                  <div data-v-2e128338 data-v-e1b37236 className="v3dp__popout" style={{"--popout-column-definition":"repeat(2, 1fr)","display":"none"}}>
                    <div data-v-2e128338 className="v3dp__heading">
                      <button data-v-2e128338 className="v3dp__heading__button" disabled>
                        <svg data-v-2e128338 data-v-2e128338-s className="v3dp__heading__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 8">
                          <g data-v-2e128338 data-v-2e128338-s fill="none" fillRule="evenodd">
                            <path data-v-2e128338 data-v-2e128338-s stroke="none" d="M-9 16V-8h24v24z" />
                            <path data-v-2e128338 data-v-2e128338-s strokeLinecap="round" strokeLinejoin="round" d="M5 0L1 4l4 4" />
                          </g>
                        </svg>
                      </button>
                      <button data-v-2e128338 className="v3dp__heading__center">19:58</button>
                      <button data-v-2e128338 className="v3dp__heading__button" disabled>
                        <svg data-v-2e128338 data-v-2e128338-s className="v3dp__heading__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 8">
                          <g data-v-2e128338 data-v-2e128338-s fill="none" fillRule="evenodd">
                            <path data-v-2e128338 data-v-2e128338-s stroke="none" d="M15-8v24H-9V-8z" />
                            <path data-v-2e128338 data-v-2e128338-s strokeLinecap="round" strokeLinejoin="round" d="M1 8l4-4-4-4" />
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div data-v-2e128338 className="v3dp__body">
                      {/*v-if*/}
                      <div data-v-2e128338 className="v3dp__elements">
                        <div data-v-e1b37236 data-v-2e128338-s className="v3dp__column"><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>00</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>01</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>02</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>03</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>04</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>05</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>06</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>07</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>08</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>09</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>10</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>11</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>12</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>13</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>14</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>15</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>16</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>17</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>18</span></button><button data-v-e1b37236 data-v-2e128338-s className="selected"><span data-v-e1b37236 data-v-2e128338-s>19</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>20</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>21</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>22</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>23</span></button></div>
                        <div data-v-e1b37236 data-v-2e128338-s className="v3dp__column"><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>00</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>01</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>02</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>03</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>04</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>05</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>06</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>07</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>08</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>09</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>10</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>11</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>12</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>13</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>14</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>15</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>16</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>17</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>18</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>19</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>20</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>21</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>22</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>23</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>24</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>25</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>26</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>27</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>28</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>29</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>30</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>31</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>32</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>33</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>34</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>35</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>36</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>37</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>38</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>39</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>40</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>41</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>42</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>43</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>44</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>45</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>46</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>47</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>48</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>49</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>50</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>51</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>52</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>53</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>54</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>55</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>56</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>57</span></button><button data-v-e1b37236 data-v-2e128338-s className="selected"><span data-v-e1b37236 data-v-2e128338-s>58</span></button><button data-v-e1b37236 data-v-2e128338-s className><span data-v-e1b37236 data-v-2e128338-s>59</span></button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <div data-v-1fb46fc5 className="btn text-center cursor-pointer">Save changes</div>
            </div>
          </div>
          {/**/}
        </div>
      </div>
    </div>
  </div>
</div>

{
    UploadModal && (
      <UploadModal1       photoUploaded={(photo) => {
        console.log(photo)
        setUploadedPhoto(photo)
        handleUpload(photo)
      }}
      close={() => {setUploadModal(false)}} 

      />
    )
}
    </>
  );
}
