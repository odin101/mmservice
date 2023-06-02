import React, { useEffect } from 'react';
import { useState } from 'react';
import './offer.css'

import MissingImg from '../../img/icons/missingImg.webp'
import {useAuthUser} from 'react-auth-kit'

import {ref} from "firebase/storage"
import {
  getDownloadURL,
  uploadBytesResumable 
} from "firebase/storage";
import storage from "../../firebaseConfig.js"

export default function DeliveryOffer(props) {
 const [selected,setSelected] = useState(0)
 const [detials,setDetails] = useState("")
const [imageURL,setImageUrl] = useState("")


 
   const auth = useAuthUser()
 const items = ["Instant","20 mins","2 hours","12 hours","24 hours","48 hours","48 hours+"]

useEffect(() => {
const storageRef = ref(storage,`/users/${auth()._id}/productImages/${props.allData._id}`)
    getDownloadURL(storageRef).then(data => {
     setImageUrl(data)
   })
})


  return (
    <>
    <div className="create-offer text-white" style={{"min-height":"300px"}}>
  <div className="container text-white py-8" style={{"margin":"0px"}}>
    <div className="flex justify-between items-center gap-4 flex-wrap">
      <div className="font-extrabold text-3xl sm:text-2xl">Create an offer</div>
    </div>
  </div>
  <div className="container flex flex-col">
    <div className="flex gap-4 items-center justify-evenly container">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center font-bold rounded-full border-2 bg-white/10 xs:w-8 xs:h-8 border-transparent">1</div>
        <div className="font-bold sm:hidden">Overview</div>
      </div>
      <div>
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 13L7 7L1 1" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center font-bold rounded-full border-2 bg-white/10 xs:w-8 xs:h-8 border-transparent">2</div>
        <div className="font-bold sm:hidden">Details and price</div>
      </div>
      <div>
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 13L7 7L1 1" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center font-bold rounded-full border-2 bg-white/10 xs:w-8 xs:h-8 border-transparent">3</div>
        <div className="font-bold sm:hidden">Description</div>
      </div>
      <div>
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 13L7 7L1 1" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center font-bold rounded-full border-2 bg-white/10 xs:w-8 xs:h-8 border-secondary text-secondary">4</div>
        <div className="font-bold sm:hidden">Delivery</div>
      </div>
      <div>
        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 13L7 7L1 1" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center font-bold rounded-full border-2 bg-white/10 xs:w-8 xs:h-8 border-transparent">5</div>
        <div className="font-bold sm:hidden">Offer duration</div>
      </div>
      {/**/}
    </div>
    <div className="flex gap-8 my-5 items-start sm:flex-col sm:items-center">
      <div className="rounded-lg p-6 grow sm:w-full" style={{"background":"rgb(31, 35, 50)"}}>
        {/**/}
        {/**/}
        {/**/}
        {/**/}
        <div data-v-52947833 className="text-white flex items-center font-bold text-xl mb-4 gap-2">
          <svg data-v-52947833 className="q-mr-sm" width={23} height={17} viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path data-v-52947833 d="M19.8802 0.959999H5.0002C3.9442 0.959999 3.08019 2.004 3.08019 3.28V4.15C3.08019 4.469 3.2962 4.73 3.56019 4.73C3.82419 4.73 4.04019 4.469 4.04019 4.15V3.28C4.04019 3.164 4.0642 3.048 4.0882 2.932L9.46419 8.5L4.0882 14.068C4.0642 13.952 4.04019 13.836 4.04019 13.72V12.85C4.04019 12.531 3.82419 12.27 3.56019 12.27C3.2962 12.27 3.08019 12.531 3.08019 12.85V13.72C3.08019 14.996 3.9442 16.04 5.0002 16.04H19.8802C20.9362 16.04 21.8002 14.996 21.8002 13.72V3.28C21.8002 2.004 20.9362 0.959999 19.8802 0.959999ZM4.8082 2.149C4.85619 2.12 4.92819 2.12 5.0002 2.12H19.8802C19.9522 2.12 20.0242 2.12 20.0722 2.149L12.7522 9.718C12.5602 9.892 12.3202 9.892 12.1282 9.718L4.8082 2.149ZM19.8802 14.88H5.0002C4.92819 14.88 4.85619 14.88 4.8082 14.851L10.2082 9.254L11.5042 10.617C11.7682 10.907 12.1042 11.052 12.4402 11.052C12.7762 11.052 13.1122 10.907 13.3762 10.617L14.6722 9.254L20.0722 14.851C20.0242 14.88 19.9522 14.88 19.8802 14.88ZM20.8402 13.72C20.8402 13.836 20.8162 13.952 20.7922 14.068L15.4162 8.5L20.7922 2.932C20.8162 3.048 20.8402 3.164 20.8402 3.28V13.72ZM1.6402 7.05C1.6402 6.731 1.8562 6.47 2.1202 6.47H5.0002C5.26419 6.47 5.4802 6.731 5.4802 7.05C5.4802 7.369 5.26419 7.63 5.0002 7.63H2.1202C1.8562 7.63 1.6402 7.369 1.6402 7.05ZM5.0002 10.53H0.680195C0.416195 10.53 0.200195 10.269 0.200195 9.95C0.200195 9.631 0.416195 9.37 0.680195 9.37H5.0002C5.26419 9.37 5.4802 9.631 5.4802 9.95C5.4802 10.269 5.26419 10.53 5.0002 10.53Z" fill="white" stroke="white" strokeWidth="0.2" />
          </svg>Delivery
        </div>
        <form data-v-52947833 className="q-mt-legs" autoCorrect="off" autoCapitalize="off" autoComplete="off" spellCheck="false">
          <div data-v-52947833 className="flex gap-4 mb-8 flex-wrap">
            {
                items.map((itm,index) => {
                    return (
                        <div data-v-52947833 onClick={() => {
                            setSelected(index)

                        }}>
                        <div data-v-52947833 className="flex items-center no-wrap gap-2">
                            <svg data-v-52947833 className={selected==index?"circle active":"circle"} width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle data-v-52947833 cx={8} cy={8} r={7} stroke="white" strokeOpacity="0.28" strokeWidth={2} />
                            </svg>
                            <div data-v-52947833 className={("flash-card flex justify-center items-center product-card p-2 cursor-pointer"+(selected==index?" active":""))} >
                            <div data-v-52947833 className="col text-center">
                                <div data-v-52947833 className="label text-center font-bold text-subtitle1" style={{"letter-spacing":"1px"}}>{itm}</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
             
          </div>
          <label data-v-52947833>
            <div data-v-52947833 className="input-label flex justify-between items-center gap-1 sm:flex-col sm:items-start">
              <div data-v-52947833>Provide instructions or details to your buyer in advance to ensure a smooth delivery. (optional)</div>
              <div data-v-52947833 className="text-red-500 text-xs">The delivery information mustn't contain any reference to people, services, websites or entities outside or unrelated to igitems!</div>
            </div>
            <label data-v-a158f60f data-v-52947833 className>
              <div data-v-a158f60f className="opacity-70 text-white mb-2 text-sm" />
              <textarea data-v-a158f60f className="w-full outline-none text-white"
               onChange={(e) => {
                  setDetails(e.target.value)
               } }
               value={detials}
               type="textarea" placeholder style={{"background":"rgb(13, 18, 38)","border-radius":"14px","padding":"11px 22px","border":"1px solid transparent","height":"150px"}} defaultValue={""} />
              {/**/}
            </label>
          </label>
        </form>
        {/**/}
      </div>
      <div className="flex flex-col items-start">
        <div className="mb-4 font-bold">Offer preview</div>
        <a data-v-530e65a0 className="flex flex-col h-full w-full relative group" style={{"min-height":"230px","width":"300px"}}>
          <div data-v-530e65a0 className="rounded-xl w-full min-h-full duration-300 z-10" style={{"background":"rgb(31, 35, 50)"}}>
            <div data-v-530e65a0 className="flex flex-col col-grow relative h-full gap-3 py-5">
              <div data-v-530e65a0 className="flex no-wrap items-center gap-4 px-5">
                <div data-v-530e65a0 className="rounded-md shrink-0 flex justify-center items-center w-20 h-20 overflow-hidden" style={{"max-width":"80px","background":"rgb(37, 42, 61)"}}>
                  <img data-v-530e65a0 
                  src={imageURL}
                  
                  format="webp" loading="lazy" fit="cover" position="center" height={80} width={80} />
                </div>
                {/**/}
                <div data-v-530e65a0 className="font-bold leading-6 text-ellipsis overflow-hidden float-left w-full" style={{"height":"70px"}}>
                  {/**/}
                  <div data-v-530e65a0 className="float-none">{props.allData.title}</div>
                </div>
              </div>
              <div data-v-530e65a0 className="px-5 overflow-hidden" style={{"max-height":"24px"}}>
                <div data-v-2546539f data-v-530e65a0 className="attributes-group flex flex-wrap items-center text-center mb-2 gap-1">
                  {/**/}
                  {/**/}
                </div>
              </div>
              <div data-v-530e65a0 className="price-group flex items-center justify-between pt-2 px-5">
                <div data-v-530e65a0 className="flex items-center gap-2">
                  <div data-v-530e65a0 className="w-4 h-4">
                    <img data-v-530e65a0 src="/img/icons/timer.svg" alt height={16} width={16} />
                  </div>
                  <div data-v-530e65a0 className="text-xs font-light text-white/70">price</div>
                </div>
                <div data-v-530e65a0 className="font-bold text-white/80">${props.allData.price}</div>
              </div>
              <div data-v-530e65a0 className="w-full h-px" style={{"background":"rgb(23, 29, 41)"}} />
              <div data-v-530e65a0 className="flex items-center justify-between text-white/70 px-5">
                <div data-v-530e65a0 className="flex gap-2 items-center relative h-10">
                  <div data-v-530e65a0 className="relative">
                    {/**/}
                    <img data-v-530e65a0 
                     src={auth().profileImage?auth().profileImage:MissingImg }
                     format="webp" loading="lazy" height={36} width={36} alt="Mr Mrodin ODIN" style={{"width":"36px","height":"36px","border-radius":"100%","border":"3px solid rgba(255, 255, 255, 0.12)"}} />
                  </div>
                  <div data-v-530e65a0 className="flex flex-col">
                    <div data-v-530e65a0 className="text-sm">{auth().username}</div>
                    <div data-v-530e65a0 className="flex items-center gap-2">
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                  {/**/}
                </div>
                {/**/}
              </div>
              {/**/}
            </div>
          </div>
        </a>
        <div className="mt-4">
          <div>Estimated income: <span className="font-bold text-secondary">${props.allData.price-0.9}</span>
          </div>
          <a href="/dashboard/account/Verification" rel="noopener noreferrer" target="_blank">
            <div className="line-through opacity-70 decoration-secondary decoration-2">Estimated income as Verified: <span className="font-bold text-secondary">${props.allData.price}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="flex justify-end my-4 w-full gap-4">
      <div data-v-1fb46fc5 className="btn text-center cursor-pointer secondary">Back</div>
      {/**/}
      <div
      
         onClick={ () => props.next(items[selected],detials)}
      data-v-1fb46fc5 className="btn text-center cursor-pointer">Save &amp; Continue</div>
    </div>
  </div>
  {/**/}
  {/**/}
</div>
    
    </>
  );
}
