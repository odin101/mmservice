import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ItemIcon from '../img/icons/item-icon-white.svg'
import { Link } from "react-router-dom";

import LimitedStock from '../img/icons/limited-stock.gif'
export default function BigSearch(props) {

  const [scrollPosition, setScrollPosition] = useState(0);

//   const handleScroll = (data) => {
//     const position = data.pageYOffset;
//     setScrollPosition(data.target.scrollTop);
//     console.log(data.target.scrollTop)
// };
const scrollabeDiv = useRef();


 



  return (
    <>
    <div data-v-b2745a4d className="absolute z-20 w-full" style={{"width":"390px","left":"-20px","top":"40px"}}>
  <div data-v-b2745a4d data-overlayscrollbars-initialize className="py-2 rounded-xl" style={{"height":"300px","width":"390px","background":"rgb(42, 46, 60)",

'&::WebkitScrollbar':{
  width: 0, height: 0
 }
}} data-overlayscrollbars="host"   >
    <div className="os-size-observer os-size-observer-appear"><div className="os-size-observer-listener ltr" /></div>
    <div 
  
    // className="os-viewport os-viewport-scrollbar-hidden"
     style={{"margin-right":"0px","margin-bottom":"-16px","margin-left":"0px","top":"-8px","right":"auto","left":"0px","width":"calc(100% + 0px)","padding":"8px 0px","overflow-y":"scroll"}} 
    // onScroll={(data) => handleScroll(data)}
    >
      <div data-v-b2745a4d className="flex flex-col">
        <div data-v-b2745a4d className>
          <div data-v-b2745a4d className="font-bold text-xs mb-2 mt-4 px-4 text-white/40">Recent</div>
          {
                props.games.map(game=> {
                  return (
                    <Link  data-v-b2745a4d to={"/items/"+game} className="flex items-center py-3 px-4 gap-3 no-wrap duration-300 hover">
                      <svg data-v-b2745a4d width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path data-v-b2745a4d d="M8.75024 17.9492C13.3066 17.9492 17.0002 14.2556 17.0002 9.69922C17.0002 5.14287 13.3066 1.44922 8.75024 1.44922C4.19389 1.44922 0.500244 5.14287 0.500244 9.69922C0.500244 14.2556 4.19389 17.9492 8.75024 17.9492Z" stroke="white" strokeOpacity="0.5" strokeMiterlimit={10} />
                        <path data-v-b2745a4d d="M8.75024 4.88672V9.69922H13.5627" stroke="white" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div data-v-b2745a4d className="flex items-center gap-2">
                        <img data-v-b2745a4d src={LimitedStock} width={16} height={16} alt style={{"width":"16px"}} />
                        <div data-v-b2745a4d>{game}</div>
                      </div>
                    </Link>
                  )
                })
          }

          <div data-v-b2745a4d className="flex items-center gap-2 opacity-70">
          </div>
  
       
        </div>
        {/**/}
      </div>
    </div>
    <div className="os-scrollbar os-scrollbar-horizontal os-theme-dark os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
    </div>
   {/* <div className="os-scrollbar os-scrollbar-vertical os-theme-dark os-scrollbar-handle-interactive os-scrollbar-visible os-scrollbar-cornerless">
      <div className="os-scrollbar-track">
        <div className="os-scrollbar-handle" style={{"height":"7.523%","-webkit-transform":"translateY(0%)","-ms-transform":"translateY(0%)","transform":"translateY(0%)"}} /></div>
    </div>   */}
  </div>
</div>
    </>
  );
}
