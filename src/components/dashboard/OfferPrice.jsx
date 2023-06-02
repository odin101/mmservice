import React, { useState } from 'react';
import TimerIcon from '../../img/icons/timer.svg'
import GamerIcon from '../../img/icons/avatar-placeholder.svg'

import MissingImg from '../../img/icons/missingImg.webp'
import {useAuthUser} from 'react-auth-kit'
export default function Details(props) {
    // const UnitPrice = 1;
   const [UnitPrice,setUnitPrice] = useState(1)
   const [stockQuantity,setStockQuantity] = useState(1)
   const auth = useAuthUser()

    

   const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  return (
    <>
    <div className="container text-white py-8" style={{"margin":"0px"}}>
  <div className="flex justify-between items-center gap-4 flex-wrap">
    <div className="font-extrabold text-3xl sm:text-2xl">Create an offer</div>
  </div>
</div>
    {/* <div class="g-dialog-overlay g-dialog-overlay--active" style="z-index: 1001; --6eaca59a: var(--overlay-bg);"></div> */}
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
      <div className="w-12 h-12 flex items-center justify-center font-bold rounded-full border-2 bg-white/10 xs:w-8 xs:h-8 border-secondary text-secondary">2</div>
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
      <div className="w-12 h-12 flex items-center justify-center font-bold rounded-full border-2 bg-white/10 xs:w-8 xs:h-8 border-transparent">4</div>
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
      <div className="text-white flex items-center font-bold text-xl mb-4 gap-2">
        <svg className="q-mr-sm" width={23} height={19} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.9092 0.722085H9.91996C9.60774 0.72141 9.29848 0.782685 9.0101 0.902361C8.72173 1.02204 8.45996 1.19774 8.23996 1.41929L1.41916 8.24008C1.19668 8.45966 1.02003 8.72123 0.899455 9.00963C0.778884 9.29803 0.716797 9.6075 0.716797 9.92008C0.716797 10.2327 0.778884 10.5421 0.899455 10.8305C1.02003 11.1189 1.19668 11.3805 1.41916 11.6001L7.39996 17.5809C7.61895 17.8044 7.88034 17.982 8.16881 18.1032C8.45729 18.2244 8.76705 18.2868 9.07996 18.2868C9.39287 18.2868 9.70263 18.2244 9.99111 18.1032C10.2796 17.982 10.541 17.8044 10.76 17.5809L17.5808 10.7601C17.8099 10.5436 17.9934 10.2834 18.1203 9.99488C18.2473 9.70634 18.3152 9.39529 18.32 9.08008V3.09088C18.3189 2.77657 18.2555 2.46558 18.1334 2.17593C18.0114 1.88628 17.8331 1.6237 17.6089 1.40341C17.3847 1.18311 17.119 1.00946 16.8272 0.892517C16.5355 0.775569 16.2234 0.717641 15.9092 0.722085ZM17.48 9.08008C17.4804 9.48589 17.3204 9.87541 17.0348 10.1637L10.2224 16.9761C9.93068 17.252 9.54444 17.4057 9.14296 17.4057C8.74148 17.4057 8.35524 17.252 8.06356 16.9761L2.00716 10.9785C1.72459 10.6985 1.5645 10.3179 1.56196 9.92008C1.56151 9.51428 1.72155 9.12476 2.00716 8.83648L8.81956 2.02409C8.96292 1.87761 9.13412 1.76128 9.32309 1.68194C9.51207 1.6026 9.715 1.56185 9.91996 1.56209H15.926C16.1285 1.55987 16.3295 1.59771 16.5174 1.67345C16.7053 1.74918 16.8764 1.86131 17.0208 2.00338C17.1652 2.14545 17.2801 2.31467 17.3589 2.5013C17.4377 2.68794 17.4789 2.8883 17.48 3.09088V9.08008Z" fill="white" stroke="white" strokeWidth="0.552632" />
          <path d="M12.986 3.64523C12.5175 3.64523 12.0595 3.78416 11.67 4.04445C11.2804 4.30473 10.9768 4.67469 10.7975 5.10753C10.6182 5.54037 10.5713 6.01666 10.6627 6.47616C10.7541 6.93566 10.9797 7.35774 11.311 7.68903C11.6423 8.02031 12.0644 8.24591 12.5239 8.33732C12.9834 8.42872 13.4596 8.38181 13.8925 8.20252C14.3253 8.02323 14.6953 7.71961 14.9556 7.33007C15.2159 6.94052 15.3548 6.48254 15.3548 6.01403C15.3559 5.70265 15.2954 5.39412 15.1767 5.10622C15.0581 4.81832 14.8836 4.55675 14.6635 4.33656C14.4433 4.11638 14.1817 3.94194 13.8938 3.82329C13.6059 3.70464 13.2974 3.64412 12.986 3.64523ZM12.986 7.53443C12.6833 7.53443 12.3874 7.44455 12.1358 7.27619C11.8842 7.10783 11.6882 6.86856 11.5728 6.58872C11.4573 6.30888 11.4275 6.00106 11.4872 5.70428C11.5469 5.40749 11.6933 5.1351 11.908 4.92163C12.1226 4.70817 12.3958 4.56323 12.6929 4.50519C12.99 4.44715 13.2977 4.47863 13.5769 4.59563C13.8561 4.71263 14.0943 4.90989 14.2612 5.1624C14.4282 5.41491 14.5165 5.71131 14.5148 6.01403C14.5148 6.2144 14.4752 6.4128 14.3983 6.59781C14.3213 6.78282 14.2086 6.9508 14.0665 7.0921C13.9244 7.23339 13.7558 7.34521 13.5704 7.42112C13.385 7.49703 13.1864 7.53554 12.986 7.53443Z" fill="white" stroke="white" strokeWidth="0.552632" />
        </svg>
        <div>Price <span className="ml-2 text-xs opacity-80 text-weight-light">(Net fee: $0.9)</span>
        </div>
      </div>
        <div className="grid gap-2 grid-cols-2 xs:grid-cols-1">
          <label data-v-a158f60f className>
            <div data-v-a158f60f className="opacity-70 text-white mb-2 text-sm">Unit Price (USD)</div>
            <input data-v-a158f60f className="w-full outline-none text-white" type="number"
             value={UnitPrice}
             onChange={(e) => 
                {
                    console.log(e.target.value)
                if(e.target.value < 99999999 && typeof(e.target.value) !== "number") {
                setUnitPrice(e.target.value)
                }
            }
            }
             placeholder style={{"background":"rgb(13, 18, 38)","border-radius":"14px","padding":"11px 22px","border":"1px solid transparent"}} />
            {/**/}
          </label>
          {/**/}
        </div>
        <div className="grid grid-cols-2 gap-8 my-8 xs:grid-cols-1">
          <div>
            <div className="mb-2">Stock available</div>
            <div className="flex gap-2 w-full">
              <button
              onClick={() => {
                if(stockQuantity>1) {
                setStockQuantity(stockQuantity-1)
                }
              }}
              
              className="bg-white/10 flex items-center justify-center rounded-lg w-12 text-xl font-bold shrink-0">-</button>
              <div className="flex items-center justify-between px-4 py-3 rounded-lg grow bg-white/10">
                <div className="text-xs opacity-70">Quantity</div>
                <input
                 value={stockQuantity}
                className="text-center bg-transparent outline-none border-none font-bold text-lg" type="text" style={{"max-width":"100px"}} />
                <div className="text-right text-sm opacity-70"></div>
              </div>
              <button onClick={() => {
                setStockQuantity(stockQuantity+1)
              }} className="bg-white/10 flex items-center justify-center rounded-lg w-12 text-xl font-bold shrink-0">+</button>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className="my-4 p-2 flex items-center gap-2" style={{"border":"1px solid rgb(255, 163, 0)","border-radius":"14px"}}>
          <div>You will sell a total of {numberWithCommas(stockQuantity)} item.</div>
        </div>
        <div className="flex-col flex">
        </div>
        {/**/}
        {/**/}
      <div data-v-7e057af1 smart-tags-validated="true">
        <div data-v-7e057af1 className="flex flex-col">
          {/**/}
          {/**/}
          {/**/}
          <div data-v-7e057af1>
            {/**/}
            <div data-v-7e057af1 className="flex w-full">
              <div data-v-7e057af1 className="text-white w-full" style={{"border-radius":"10px","background":"transparent"}}>
                <div className="w-full text-white grid gap-2 grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1">
                  {/**/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**/}
      {/**/}
      {/**/}
      {/**/}
    </div>
    <div className="flex flex-col items-start">
      <div className="mb-4 font-bold">Offer preview</div>
      <a data-v-530e65a0 className="flex flex-col h-full w-full relative group" style={{"min-height":"230px","width":"300px"}}>
        <div data-v-530e65a0 className="rounded-xl w-full min-h-full duration-300 z-10" style={{"background":"rgb(31, 35, 50)"}}>
          <div data-v-530e65a0 className="flex flex-col col-grow relative h-full gap-3 py-5">
            <div data-v-530e65a0 className="flex no-wrap items-center gap-4 px-5">
              <div data-v-530e65a0 className="rounded-md shrink-0 flex justify-center items-center w-20 h-20 overflow-hidden" style={{"max-width":"80px","background":"rgb(37, 42, 61)"}}>
                <div data-v-530e65a0 className="inside-image w-full h-full" style={{
                    background: `url(${GamerIcon}) no-repeat`,
                    backgroundPosition:'50% 50%',
                    backgroundSize:'70% 70%'
                }} />
              </div>
              {/**/}
              <div data-v-530e65a0 className="font-bold leading-6 text-ellipsis overflow-hidden float-left w-full" style={{"height":"70px"}}>
                {/**/}
                <div data-v-530e65a0 className="float-none">Item name</div>
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
                  <img data-v-530e65a0 src={TimerIcon} alt height={16} width={16} />
                </div>
                <div data-v-530e65a0 className="text-xs font-light text-white/70">price</div>
              </div>
              <div data-v-530e65a0 className="font-bold text-white/80">${numberWithCommas(UnitPrice)}</div>
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
                  <div data-v-530e65a0 className="text-sm">{
                auth().username
                  }</div>
                  <div data-v-530e65a0 className="flex items-center gap-2">
                    {/**/}
                    {/**/}
                  </div>
                </div>
                {/**/}
                {/**/}
              </div>
              {/**/}
            </div>
            {/**/}
          </div>
        </div>
      </a>
      <div className="mt-4">
        <div>Estimated income: <span className="font-bold text-secondary">${(UnitPrice-0.09).toFixed(2)}</span>
        </div>
        <a href="/dashboard/account/Verification" rel="noopener noreferrer" target="_blank">
        </a>
      </div>
    </div>
  </div>
  <div className="flex justify-end my-4 w-full gap-4">
    <div data-v-1fb46fc5 className="btn text-center cursor-pointer secondary">Back</div>
    {/**/}
    <div 
    onClick={ () => props.next(UnitPrice,stockQuantity)}
    data-v-1fb46fc5 className="btn text-center cursor-pointer">Save &amp; Continue</div>
  </div>
</div>
    </>
  );
}
