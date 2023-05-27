import React from 'react';
import { useState,useRef } from 'react';
import BlueItem from '../../img/icons/item-icon-blue.svg'
import AccountItem from '../../img/icons/account-icon-blue.svg'

export default function OverviewOffer() {
    
const [focused,setFocused] = useState(false)


const [selectedVal, setSelectedVal] = useState("")
const [selectedProduct,setSelectedProduct] = useState(1)

let InputRF = useRef();


  return (
    <>
    <div>
  <div className="create-offer text-white" style={{"min-height":"300px"}}>
    <div className="container text-white py-8" style={{"margin":"0px"}}>
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <div className="font-extrabold text-3xl sm:text-2xl">Create an offer</div>
      </div>
    </div>
    <div className="container flex flex-col">
      <div className="flex gap-4 items-center justify-evenly container">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center font-bold rounded-full border-2 bg-white/10 xs:w-8 xs:h-8 border-secondary text-secondary">1</div>
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
          <div>
            <label className="w-full">
              <div className="flex justify-between items-center mb-4">
                <div className="text-white flex items-center font-bold text-xl gap-2">
                  <svg className="q-mr-sm" width={23} height={23} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8438 9.84687C20.3406 6.68437 17.6094 4.3125 14.4469 4.3125H8.625C5.39062 4.3125 2.65937 6.68437 2.15625 9.84687C1.65313 13.225 1.4375 14.7344 1.4375 15.3094C1.4375 18.8312 6.25312 19.9812 7.83437 16.8187L9.05625 14.375H13.9437L15.1656 16.8187C16.7469 19.9812 21.5625 18.8312 21.5625 15.3094C21.5625 14.8062 21.5625 15.4531 20.8438 9.84687ZM20.125 15.3094C20.125 17.3219 17.3219 18.0406 16.4594 16.1719L15.0219 13.2969C14.8781 13.0812 14.6625 12.9375 14.375 12.9375H8.625C8.3375 12.9375 8.12188 13.0812 7.97813 13.3687L6.54063 16.2437C5.67813 18.0406 2.875 17.3219 2.875 15.3094L3.59375 10.0625C3.95312 7.61875 6.10937 5.75 8.55312 5.75H14.375C16.8906 5.75 18.975 7.61875 19.3344 10.0625C19.4062 10.1344 20.1969 15.6687 20.125 15.3094Z" fill="white" />
                    <path d="M10.0625 9.34375C10.0625 9.775 9.775 10.0625 9.34375 10.0625H8.625V10.7812C8.625 11.2125 8.3375 11.5 7.90625 11.5C7.475 11.5 7.1875 11.2125 7.1875 10.7812V10.0625H6.46875C6.0375 10.0625 5.75 9.775 5.75 9.34375C5.75 8.9125 6.0375 8.625 6.46875 8.625H7.1875V7.90625C7.1875 7.475 7.475 7.1875 7.90625 7.1875C8.3375 7.1875 8.625 7.475 8.625 7.90625V8.625H9.34375C9.775 8.625 10.0625 8.9125 10.0625 9.34375Z" fill="white" />
                    <path d="M14.375 9.34375C14.375 9.775 14.0875 10.0625 13.6562 10.0625C13.225 10.0625 12.9375 9.775 12.9375 9.34375C12.9375 8.9125 13.225 8.625 13.6562 8.625C14.0875 8.625 14.375 8.9125 14.375 9.34375Z" fill="white" />
                    <path d="M15.8125 10.7812C15.8125 11.2125 15.525 11.5 15.0938 11.5C14.6625 11.5 14.375 11.2125 14.375 10.7812C14.375 10.35 14.6625 10.0625 15.0938 10.0625C15.525 10.0625 15.8125 10.35 15.8125 10.7812Z" fill="white" />
                    <path d="M17.25 9.34375C17.25 9.775 16.9625 10.0625 16.5312 10.0625C16.1 10.0625 15.8125 9.775 15.8125 9.34375C15.8125 8.9125 16.1 8.625 16.5312 8.625C16.9625 8.625 17.25 8.9125 17.25 9.34375Z" fill="white" />
                    <path d="M14.375 7.90625C14.375 7.475 14.6625 7.1875 15.0938 7.1875C15.525 7.1875 15.8125 7.475 15.8125 7.90625C15.8125 8.3375 15.525 8.625 15.0938 8.625C14.6625 8.625 14.375 8.3375 14.375 7.90625Z" fill="white" />
                  </svg>
                  Game
                </div>
              </div>
              <label data-v-8811fd13>
                {/**/}
                <div data-v-8811fd13 className="multiselect ig-select" style={{borderWidth:0,borderRadius:10}}>
                  <div className="multiselect-wrapper" tabIndex={-1}>
                    {/* Search */}
                    
                    <input type="text" 
                    onFocus={() => {setFocused(true)}}
                    onBlur={() => 
                        {
                           setTimeout(() => {
                            setFocused(false)
                           },100)
                        }
                        }
                        ref={InputRF}
                    className="multiselect-search"
                     aria-controls="multiselect-options" 
                     
                     placeholder="Select a game" 
                    
                     aria-expanded="false" aria-multiselectable="false" role="combobox"
                    value={selectedVal}
                    style={{
                        background:"#0d1226",
                        borderWidth:0
                    }}
                    aria-labelledby="assist" modelvalue />{/* Tags (with search) */}{/*v-if*/}{/* Single label */}{/*v-if*/}{/* Multiple label */}{/*v-if*/}{/* Placeholder */}
                    
                    
                    {/* Spinner */}{/*v-if*/}{/* Clear */}{/*v-if*/}{/* Caret */}<span className="multiselect-caret" aria-hidden="true" />
                  </div>
                  {/* Options */}
                  <div
                  
                  
                  className={focused?"multiselect-dropdown":"multiselect-dropdown is-hidden"} tabIndex={-1} style={{
                    background:"#1F2332",
                    borderWidth:0
                  }}>
                    <ul className="multiselect-options" id="multiselect-options" role="listbox">
                      <li 
                      onClick={()=> 
                      {

                             setSelectedVal(
                             "8 Ball Pool (8BALLPOOL)"
                           )

                        setFocused(false)
                         setTimeout(() => {
                         InputRF.current.blur()
                         },1000)
                      }
                 
                      } className="multiselect-option" id="multiselect-option-8BALLPOOL" aria-selected="false" aria-label="8 Ball Pool (8BALLPOOL)" role="option"><span>8 Ball Pool (8BALLPOOL)</span></li>
                      <li 
                         onClick={()=> 
                            {
                                   setSelectedVal(
                              "ARK (ARK)"
                            )

                            setFocused(false)
                            setTimeout(() => {
                            InputRF.current.blur()
                            },1000)                         
                            }}
                      className="multiselect-option" id="multiselect-option-ARK" aria-selected="false" aria-label="ARK (ARK)" role="option"><span>ARK (ARK)</span></li>
                      <li
                        onClick={()=> 
                            {
                                   setSelectedVal(
                              "Albion Online (ALBION)"
                            )
                       
                            setFocused(false)
                            setTimeout(() => {
                            InputRF.current.blur()
                            },1000)
                            }}
                      className="multiselect-option" id="multiselect-option-ALBION" aria-selected="false" aria-label="Albion Online (ALBION)" role="option"><span>Albion Online (ALBION)</span></li>
                      <li 
                        onClick={()=> 
                            {
                                   setSelectedVal(
                              "Animal Crossing (ACNH)"
                            )
                       
                            setFocused(false)
                            setTimeout(() => {
                            InputRF.current.blur()
                            },1000)
                            }}
                      className="multiselect-option" id="multiselect-option-ACNH" aria-selected="false" aria-label="Animal Crossing (ACNH)" role="option"><span>Animal Crossing (ACNH)</span></li>
                      <li 
                        onClick={()=> 
                            {
                                   setSelectedVal(
                              "pex Legends (APEXLEGENDS)"
                            )
                        
                            setFocused(false)
                            setTimeout(() => {
                            InputRF.current.blur()
                            },1000)
                            }}
                      className="multiselect-option" id="multiselect-option-APEXLEGENDS" aria-selected="false" aria-label="Apex Legends (APEXLEGENDS)" role="option"><span>Apex Legends (APEXLEGENDS)</span></li>
                      <li 
                        onClick={()=> 
                            {
                                   setSelectedVal(
                              "ArcheAge (ARCHEAGE)"
                            )
                    
                            setFocused(false)
                            setTimeout(() => {
                            InputRF.current.blur()
                            },1000)
                            }}
                      className="multiselect-option" id="multiselect-option-ARCHEAGE" aria-selected="false" aria-label="ArcheAge (ARCHEAGE)" role="option"><span>ArcheAge (ARCHEAGE)</span></li>
                      <li 
                        onClick={()=> 
                            {
                                   setSelectedVal(
                              "Arma 3 (ARMA_3)"
                            )
                    
                            setFocused(false)
                            setTimeout(() => {
                            InputRF.current.blur()
                            },1000)
                            }}
                      className="multiselect-option" id="multiselect-option-ARMA_3" aria-selected="false" aria-label="Arma 3 (ARMA_3)" role="option"><span>Arma 3 (ARMA_3)</span></li>
                    </ul>
                    {/*v-if*/}{/*v-if*/}{/*v-if*/}
                  </div>
                  {/* Hacky input element to show HTML5 required warning */}{/*v-if*/}{/* Native input support */}{/*v-if*/}{/* Screen reader assistive text */}{/*v-if*/}{/* Create height for empty input */}
                  <div className="multiselect-spacer" />
                </div>
              </label>
            </label>
          </div>
          {/**/}{/**/}{/**/}{/**/}{/**/}{/**/}
          
<div data-v-d85984ae className="w-full mt-8">
  <div data-v-d85984ae className="text-white flex items-center font-bold text-xl mb-4 flex gap-2">
    <svg data-v-d85984ae className="mr-2" width={23} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle data-v-d85984ae cx="13.0864" cy={4} r={3} stroke="white" strokeWidth="1.5" />
      <circle data-v-d85984ae cx={4} cy={4} r={3} stroke="white" strokeWidth="1.5" />
      <circle data-v-d85984ae cx={4} cy="13.0866" r={3} stroke="white" strokeWidth="1.5" />
      <circle data-v-d85984ae cx="13.0864" cy="13.0866" r={3} stroke="white" strokeWidth="1.5" />
    </svg>
    Product
  </div>


  {selectedVal? (

  <div data-v-d85984ae className="grid gap-4 grid-cols-4 sm:grid-cols-2">
   
   
      <div data-v-d85984ae className="flex items-center no-wrap">
        <svg data-v-d85984ae className="mr-2 circle" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle data-v-d85984ae cx={8} cy={8} r={7} stroke={selectedProduct==1?"#ffa300":"white"} strokeOpacity={selectedProduct==1?"1":"0.28"} strokeWidth={2} />
        </svg>
        <div  onClick={() => setSelectedProduct(1)}   data-v-d85984ae className="cursor-pointer flash-card flex justify-center items-center product-card" dark
         style={{
            background:"hsla(0,0%,100%,.06)",
            border:selectedProduct==1?"1px solid #ffa300":"1px solid transparent",
            borderRadius:"10px",
            height:"164px",
            width:"177px"
         }}
        >
          <div data-v-d85984ae className="flex flex-col justify-center items-center gap-2">
            {/**/}<img data-v-d85984ae src={BlueItem} alt="item" style={{"height":"70px"}} />{/**/}{/**/}{/**/}
            <div data-v-d85984ae className="label mt-2 text-center font-bold text-subtitle1" style={{"letter-spacing":"1px"}}>Items</div>
          </div>
        </div>
      </div>

      <div data-v-d85984ae className="flex items-center no-wrap" >
        <svg data-v-d85984ae className="mr-2 circle active" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle data-v-d85984ae cx={8} cy={8} r={7} stroke={selectedProduct==2?"#ffa300":"white"} strokeOpacity={selectedProduct==2?"1":"0.28"} strokeWidth={2} />
        </svg>
        <div onClick={() => setSelectedProduct(2)} data-v-d85984ae className="cursor-pointer flash-card flex justify-center items-center product-card active" dark
        
        style={{
            background:"hsla(0,0%,100%,.06)",
            border:selectedProduct==2?"1px solid #ffa300":"1px solid transparent",
            borderRadius:"10px",
            height:"164px",
            width:"177px",
            
         }}
        
        >
          <div data-v-d85984ae className="flex flex-col justify-center items-center gap-2">
            <img data-v-d85984ae src={AccountItem} alt="account" style={{"height":"70px"}} />{/**/}{/**/}{/**/}{/**/}
            <div data-v-d85984ae className="label mt-2 text-center font-bold text-subtitle1" style={{"letter-spacing":"1px"}}>Accounts</div>
          </div>
        </div>
      </div>



  </div>

    
  ):(<></>)}




</div>






          {/**/}{/**/}{/**/}{/**/}{/**/}{/**/}
        </div>
        {/**/}
      </div>
      <div className="flex justify-end my-4 w-full gap-4">
        <div data-v-1fb46fc5 className="btn text-center cursor-pointer opacity-50 secondary">Back</div>
        {/**/}
        <div data-v-1fb46fc5 className="btn text-center cursor-pointer">Save &amp; Continue</div>
      </div>
    </div>
    {/**/}{/**/}
  </div>
</div>
    </>
  );
}
