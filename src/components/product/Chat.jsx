import React from 'react';
import './Chat.css'
import { useState } from 'react';
export default function Chat(props) {
    const [InputValue,setInputValue] = useState("")
const [ChatMessages,setChatMessages] = useState([
    {
      msg:"Hello",
      me:true
    },

    {
      msg:"Hey",
      me:false
    }
])



const SendMsg = () => {
    if(InputValue) {

                    setChatMessages([...ChatMessages,{me:true,msg:InputValue}])
                    setInputValue("")
    }
}


  return (
    <>

<div className="g-dialog-overlay g-dialog-overlay--active" style={{"z-index":"1003","--6eaca59a":"var(--overlay-bg)"}} />

    <div className="g-dialog-frame g-dialog-frame--active" style={{"z-index":"1004"}}>
  <div className="g-dialog-content" style={{"max-width":"95%","width":"700px","--889a571a":"var(--content-bg)","--023a843a":"14px"}}>
    <div className="relative" style={{"background":"rgb(35, 40, 57)"}}>
      <div
       onClick={() =>{
          props.backClick()
       }}
       className="p-3 right-0 flex items-center justify-center border-2 rounded-full duration-500 cursor-pointer border-white/10 hover:border-yellow absolute" style={{"top":"13px","right":"10px"}}>
        <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8136 2.3135C16.203 1.92188 16.2013 1.28872 15.8096 0.899297C15.418 0.509873 14.7848 0.511655 14.3954 0.903276L15.8136 2.3135ZM0.905287 14.4695C0.515863 14.8612 0.517644 15.4943 0.909265 15.8837C1.30089 16.2732 1.93405 16.2714 2.32347 15.8798L0.905287 14.4695ZM14.3954 0.903276L0.905287 14.4695L2.32347 15.8798L15.8136 2.3135L14.3954 0.903276Z" fill="white" />
          <path d="M14.9209 15.1748C10.0708 10.3247 1.43079 1.60849 1.43079 1.60849" stroke="white" strokeWidth={2} strokeLinecap="round" />
        </svg>
      </div>
      <div data-v-5d55811e>
        <div data-v-5d55811e>
          <div data-v-5d55811e className="p-2 py-4 w-full flex justify-between items-center" style={{"border-radius":"10px 10px 0px 0px","background":"rgb(24, 33, 56)"}}>
            <div data-v-5d55811e className="text-white">
              <div data-v-5d55811e className="flex items-center gap-2">
                <img data-v-5d55811e src="https://assets.igitems.com/files/PYo8eaN7sGBGD4YDM9fZHpHtvtk9DuGh.png" format="webp" loading="lazy" style={{"height":"40px","width":"40px","border-radius":"100%","border":"3px solid rgba(255, 255, 255, 0.12)","margin":"0px 5px"}} />
                <div data-v-5d55811e>
                  <div data-v-5d55811e className="font-bold" style={{"font-size":"16px"}}>Chat with Mr Mrodin ODIN</div>
                  <div data-v-5d55811e className="flex items-center gap-1 mt-1">
                    <div data-v-5d55811e className="h-2 w-2 bg-green-500 rounded-full" />
                    <div data-v-5d55811e className="text-xs">Online now</div>
                  </div>
                </div>
              </div>
              {/**/}
            </div>
          </div>
          <div data-v-5d55811e className="w-full bg-white/10 h-0.5" />
          <div data-v-5d55811e className="chat overflow-hidden" style={{"background":"rgb(31, 35, 50)","border-radius":"0px 0px 10px 10px"}}>
            <div data-v-5d55811e data-overlayscrollbars-initialize className="flex flex-col gap-2 py-4" style={{"height":"500px"}} data-overlayscrollbars="host">
              <div className="os-size-observer os-size-observer-appear">
                <div className="os-size-observer-listener ltr" />
              </div>
              <div className="os-viewport os-viewport-scrollbar-hidden" style={{"margin-right":"0px","margin-bottom":"-32px","margin-left":"0px","top":"-16px","right":"auto","left":"0px","width":"calc(100% + 0px)","padding":"16px 0px","overflow-y":"scroll"}}>
                <div data-v-5d55811e className="text-center flex flex-col items-center mb-2">
                  <div data-v-5d55811e className="font-bold text-secondary mb-4">Help Us Protect You</div>
                  <div data-v-5d55811e className="text-sm max-w-lg px-4 text-white/70">It is strictly prohibited to share social media and payment information, including Discord, Skype, Instagram, PayPal etc. Doing so will void the protection offered by igitems for both parties involved.</div>
                </div>
                    
                    {
                        ChatMessages.map(msg => {

                            return <div data-v-5d55811e>
                <div data-v-5d55811e className={msg.me?"flex gap-2 items-center justify-end rounded":"flex gap-2 items-center justify-end rounded flex-row-reverse"} style={{"position":"relative"}}>
                    {/**/}{/**/}
                    <div data-v-5d55811e className="data-v-tooltip" data-v-tooltip="Seen at May 26, 2023, 9:32 PM">
                    <svg data-v-5d55811e width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path data-v-5d55811e d="M10.875 6.04297L5.02941 11.8885L1.5 8.35912" stroke="#6FCB20" strokeWidth="1.41176" strokeLinecap="round" strokeLinejoin="round" />
                        <path data-v-5d55811e d="M16.125 5.25L8.25 13.125" stroke="#6FCB20" strokeWidth="1.41176" strokeLinecap="round" />
                    </svg>
                    </div>
                    <div data-v-5d55811e className={msg.me?"message items-center gap-2 text-white justify-end sent mr-4":"message items-center gap-2 text-white"} style={{"font-size":"14px","font-weight":"500","max-width":"75%"}}>
                    <div data-v-5d55811e className="break-words whitespace-pre-wrap">{msg.msg}</div>
                    </div>
                    {/**/}
                    {
                        !msg.me && (
                            <img data-v-5d55811e src="https://assets.igitems.com/files/PYo8eaN7sGBGD4YDM9fZHpHtvtk9DuGh.png" format="webp" loading="lazy" style={{"height":"40px","width":"40px","border-radius":"100%","border":"3px solid rgba(255, 255, 255, 0.12)","margin":"0px 5px"}} />
                        )
                    }
                </div>
                <div data-v-5d55811e className="my-2">
                </div>
                {/**/}
                </div>
                        })
                    }

                {/**/}













                {
                    ///
                }
              </div>













              
              <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable os-theme-dark">
                <div className="os-scrollbar-track">
                  <div className="os-scrollbar-handle" style={{"width":"100%"}} />
                </div>
              </div>
              <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable os-theme-dark">
                <div className="os-scrollbar-track">
                  <div className="os-scrollbar-handle" style={{"height":"100%"}} />
                </div>
              </div>
            </div>


        




            <div data-v-5d55811e className="flex items-center p-2" style={{"background":"rgb(33, 43, 73)"}}>
              <div data-v-5d55811e className="cursor-pointer flex items-center justify-center bg-white/10 rounded-lg w-10 h-10">
                <svg data-v-5d55811e width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path data-v-5d55811e d="M21.0038 9.99901V17.0019C21.0038 19.212 19.2122 21.0036 17.0022 21.0036H6.998C4.78795 21.0036 2.99634 19.212 2.99634 17.0019V6.99776C2.99634 4.7877 4.78795 2.99609 6.998 2.99609H13.0005" stroke="#E1DFF4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path data-v-5d55811e d="M2.99634 13.0022L4.29204 11.7065C4.74438 11.2541 5.35788 11 5.99759 11C6.63729 11 7.25079 11.2541 7.70313 11.7065L12.0001 16.0034" stroke="#E1DFF4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path data-v-5d55811e d="M7.00098 21.0042L13.2988 14.7065C14.2407 13.7645 15.7679 13.7645 16.7099 14.7065L20.6507 18.6473" stroke="#E1DFF4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path data-v-5d55811e d="M18.0025 2.99609L15.5015 5.49714" stroke="#E1DFF4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path data-v-5d55811e d="M20.5037 5.49714L18.0027 2.99609" stroke="#E1DFF4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path data-v-5d55811e d="M18.0026 2.99609V7.99818" stroke="#E1DFF4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div data-v-5d55811e className="flex no-wrap grow" style={{marginLeft:20,marginRight:20}}>
                <label data-v-a158f60f data-v-5d55811e className="grow send-input">
                  {/**/}<input data-v-a158f60f className="w-full outline-none text-white" 
                  onChange={(e) => {
                     setInputValue(e.target.value)
                  }}

                onKeyDown={(e) => {
                    e.key == 'Enter' && (SendMsg())
                }}
                  value={InputValue}
                  placeholder="Send a message..." style={{"background":"rgb(13, 18, 38)","border-radius":"14px","padding":"11px 22px","border":"1px solid transparent"}} />{/**/}
                  
                </label>
                <div data-v-5d55811e className="flex gap-4 items-center" style={{marginLeft:10}}
                onClick={() => {
                     SendMsg()
                }}
                >
                  {/**/}
                  <div data-v-5d55811e className="mr-2">
                    <div data-v-5d55811e className="cursor-pointer">
                      <svg data-v-5d55811e className="ml-1" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path data-v-5d55811e d="M11.4487 10.7789L3.28901 12.1396C3.1952 12.1552 3.10717 12.1953 3.03376 12.2558C2.96035 12.3163 2.90417 12.395 2.87084 12.4841L0.057427 20.0208C-0.21124 20.7142 0.51351 21.375 1.17868 21.0424L20.6787 11.2924C20.8137 11.225 20.9273 11.1212 21.0067 10.9928C21.0861 10.8644 21.1282 10.7165 21.1282 10.5655C21.1282 10.4145 21.0861 10.2666 21.0067 10.1382C20.9273 10.0098 20.8137 9.90603 20.6787 9.83858L1.17868 0.0885834C0.51351 -0.244 -0.21124 0.417917 0.057427 1.11017L2.87193 8.64692C2.90509 8.7362 2.96121 8.81516 3.03463 8.87583C3.10805 8.9365 3.19616 8.97675 3.29009 8.9925L11.4498 10.3521C11.5 10.3609 11.5455 10.3871 11.5783 10.4261C11.6111 10.4652 11.629 10.5145 11.629 10.5655C11.629 10.6165 11.6111 10.6658 11.5783 10.7049C11.5455 10.7439 11.5 10.7701 11.4498 10.7789H11.4487Z" fill="#FFA300" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/**/}
          </div>
          {/**/}{/**/}
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
