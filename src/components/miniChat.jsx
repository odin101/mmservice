import React, { useState } from 'react';
import './miniChat.css'
import axios from 'axios'
import { useEffect } from 'react';
import API from '../config'
import Chat  from './product/Chat'

import { get, ref,push,set,onValue,off } from "firebase/database";
import {db} from "../firebaseConfig.js"

import {useAuthUser} from 'react-auth-kit'
export default function MiniChat(props) {
  const [chatModal,setChatModal] = useState(false)
  const [meta,setMetaData] = useState({name:'test'})
  const [chatMessages,setChatMessages] = useState([])
  const [chatId,setChatId] = useState("")
 
  const auth = useAuthUser()
  const sendMessage = (msg) => {
    push(ref(db, "chatIds/"+chatId), {
        msg:msg,
        sender:auth()?._id,
      })
      set(ref(db, "users/"+meta.id+"/seen"),{
       seen:false
      })
  }


const goToChat = (responder,chatID) => {
    setChatModal(true)
    setChatId(chatID)
    setMetaData({...{id:responder?._id, name:responder.username}})
             const chatQuery = ref(db, "chatIds/"+chatID);
             onValue(chatQuery,(snapshot) => {
                   console.log(chatID)
                   if(snapshot.val()) {
                   setChatMessages([...Object.values(snapshot.val())])
                   }else{

                   setChatMessages([])
                   }
                 })

}
console.log((props.data))
  return (
    <>
   <div data-overlayscrollbars-initialize className="sm:right-0 top-20 rounded-lg absoluti" style={{"background":"rgb(42, 46, 60)","box-shadow":"rgba(0, 0, 0, 0.3) 0px 4px 34px","width":"400px","margin-left":"-200px","max-width":"80%","position":"absolute !important"}} data-overlayscrollbars="host">
               { 
                   chatModal && (
                <Chat 
                    meta={meta}
                    chatData={chatMessages}
                    myid={auth()?._id}
                    onSendMSG={(m) => {
                            sendMessage(m)
                    }}
                    backClick={() => {
                        setChatModal(false)
                    }}
                 />
                   )
               }
  <div className="os-size-observer os-size-observer-appear">
    <div className="os-size-observer-listener ltr" />
  </div>
  <div className="os-viewport os-viewport-scrollbar-hidden" style={{"margin-right":"0px","margin-bottom":"0px","margin-left":"0px","top":"0px","right":"auto","left":"0px","width":"calc(100% + 0px)","padding":"0px"}}>
    <div className="w-full px-4 py-3 flex items-center justify-between">
      <div className="font-bold">Connections</div>
      <div className="text-xs opacity-30 cursor-pointer">Mark all as read</div>
    </div>
    <div className="w-full bg-white/10 h-0.5" />
    <div style={{"height":"500px"}}>
       
       
       {
         props.data.map(msg => {
          if(msg.userInfo) {
             if(msg.seen !== false && msg.seen !== true && msg.userInfo?._id !== props.currentUserId) {

             return (
      <div className="flex flex-col justify-center items-center even:bg-white/5 even:border-b even:border-t border-white/10 hover:bg-white/10">
            <div className="px-4 py-3 flex items-center gap-2 w-full cursor-pointer" 
            onClick={() => {
                goToChat(msg.userInfo,msg.chatID)
            }}
            >
            <div className="shrink-0">
                <img 
                src={API+"/user/userphoto?id=" + msg.userInfo?._id} 
                format="webp" loading="lazy" style={{"width":"36px","height":"36px","border-radius":"100%","border":"3px solid rgba(255, 255, 255, 0.12)"}} />
            </div>
            <div className="w-full">
                <div className="float-left">
                <div className="relative flex h-2 w-2 mt-2 mr-1 float-left">
                    <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                    <div className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </div>
                <div className="float-left mr-1">{msg.userInfo?.username} </div>
                </div>
                <div>sent You message</div>
                <div className="flex justify-between w-full mt-1">
                <div className="text-xs font-thin opacity-70">{msg.userInfo?.email}</div>
                {/* <div className="text-xs font-thin opacity-70">10 days ago</div> */}

                </div>
            </div>
            </div>
      </div>
             )
             }
            }
         })

       }




        
    </div>
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
    </>
  );
}
