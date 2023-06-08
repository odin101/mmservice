import React,{useEffect} from 'react';
import DeliveryIcon from '../../img/icons/settings/info.svg'
import ReviewStar from '../../img/icons/review-star.svg'
import {useIsAuthenticated} from 'react-auth-kit';
import { useState } from 'react';
import Chat from './Chat';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Checkout from './Checkout';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import API from '../../config'
import parse  from 'html-react-parser'
import { useNavigate} from "react-router-dom";
// import ProgressiveImage from "react-progressive-image-loading";
// import LazyImage from 'react-lazy-blur-image';
import Loader from '../Loader'



import {useAuthUser} from 'react-auth-kit'
import BlurImageLoader from 'react-blur-image-loader';
import { get, ref,push,set,onValue,off } from "firebase/database";
import {db} from "../../firebaseConfig.js"

 
  

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

  const unicId = makeid(50);
export default function Product(props) {
  const isAuthenticated = useIsAuthenticated()


  const auth = useAuthUser()
  const [chatModal,setChatModal] = useState(false)
  const [gameData,setGameData] = useState({})
  const [gotData,setGotData] = useState(false)
  const [Buying,setBuying] = useState(false)
  const { offerId }  = useParams(); 
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [chatId,setChatId] = useState("")
  const [chatMessages,setChatMessages] = useState([])
  const [meta,setMetaData] = useState({name:'',id:''})
  const [test,setTest] = useState(false)
 

  useEffect(() => {
    chatModal==true && (document.body.style.overflow = 'hidden')
    !chatModal && (document.body.style.overflow = 'unset')
 }, [chatModal ]);
   useEffect(() => {
    if(!gotData) {
      axios.get(API + "/user/product/"+offerId)
      .then(res => {
        setGameData(res.data)
        setGotData(true)
      })
    }

    if(gotData) {
    if(isAuthenticated()) {
          const query = ref(db, "users/"+auth()._id+"/"+gameData?.PostedBy?._id);
              onValue(query,(snapshot) => {
            const data = snapshot.val();
            if(!data)  {
              setChatId(unicId)

              set(ref(db, "users/"+auth()._id+"/"+gameData?.PostedBy?._id),{
                  chatID: unicId,
                  userInfo:gameData?.PostedBy
              })
          
              set(ref(db, "users/"+gameData?.PostedBy?._id+"/"+auth()._id),{
                  chatID: unicId,
                  userInfo:auth()
              })  
            }else{
                setChatId(data.chatID)
                setMetaData({...{name:gameData?.PostedBy.username,id:gameData?.PostedBy?._id}})
               const chatQuery = ref(db, "chatIds/"+data.chatID);
               onValue(chatQuery,(snapshot) => {
                     console.log((snapshot.val()))
                     if(snapshot.val()) {
                     setChatMessages([...Object.values(snapshot.val())])
                     }
                   })
            }

          });
      //  return () =>  unsub()
       }
}


    },[gameData,gotData])



const sendMessage = (msg) => {


   push(ref(db, "chatIds/"+chatId), {
      msg:msg,
      sender:auth()._id,

    })
    set(ref(db, "users/"+gameData?.PostedBy?._id+"/seen"),{
     seen:false
    })

}




  return (
    <>
    {
   !gotData && (<Loader />)
    }
    { Buying && <Checkout gameData={gameData} />  }
        <PhotoProvider>

    <div data-v-bfa0d376>
  <div data-v-bfa0d376>
    <div data-v-bfa0d376 className="py-8 sm:py-4" style={{"background":"rgb(18, 19, 35)"}}>
      <div data-v-bfa0d376 className="container">
        <div data-v-bfa0d376 className="flex items-center no-wrap my-3 sm:justify-between">
          <div data-v-bfa0d376 className="font-extrabold text-xl sm:text-xs">{gameData?.title}</div>
          <div data-v-bfa0d376 className="ml-auto" />
          <a data-v-bfa0d376 href="/dashboard/create-offer/6fdTdxzpFjr8aiSx7" className="pl-4">
            <div data-v-1fb46fc5 data-v-bfa0d376 className="btn text-center cursor-pointer secondary" style={{"padding":"5px 14px","font-size":"14px"}}>Edit</div>
          </a>
          <div data-v-bfa0d376 className="pl-4" onClick={() => {
            navigate(-1)
          }}>
            <div data-v-1fb46fc5 data-v-bfa0d376 className="btn text-center cursor-pointer secondary" style={{"padding":"5px 14px","font-size":"14px"}}>Back</div>
          </div>
        </div>
      </div>
    </div>
    <div data-v-bfa0d376 className="container mt-8">
      <div data-v-bfa0d376 className="flex justify-between items-start no-wrap gap-8 sm:flex-col">
        <div data-v-bfa0d376 className="w-full flex flex-col gap-8">
          <div data-v-bfa0d376 className="w-full rounded-xl flex flex-col bg-box shadow-boxShadow">
            <div data-v-bfa0d376 className="py-4 px-8 grow">
              <div data-v-bfa0d376 className="flex no-wrap gap-8 md:flex-col md:items-center">

                 <PhotoView src={gameData?.Image}>
                <div data-v-bfa0d376 className="grow flex flex-col justify-center cursor-pointer md:min-w-full min-w-[320px]" style={{"max-width":"300px",height:300}}>
                  <div data-v-bfa0d376 className="flex items-center grow" style={{"max-height":"250px",height:250}}>
                    
                    {/* <img data-v-bfa0d376 src={gameData?.Image} format="webp" loading="lazy" className="mx-auto w-full rounded-lg" style={{"object-fit":"cover","height":"250px"}} /> */}
                    {/* <ProgressiveImage
                      preview={gameData?.Image+"_100x100"}
                      src={gameData?.Image}
                      render={(src, style) => <img data-v-bfa0d376 src={src}   className="mx-auto w-full rounded-lg" style={{"object-fit":"cover","height":"250px"}} />}
                  /> */}
            
                                      <BlurImageLoader src={gameData?.Image} 
                        preview={gameData?.Image+"_100x100"} 
                        fullCover={true}
                        maxBlurLevel={10}
                        transitionTime={400}/>

                    </div>
                  <div data-v-bfa0d376 className="grid grid-cols-3 items-center gap-2 mt-2">
                    <div data-v-bfa0d376 className="h-full flex items-center justify-center relative overflow-hidden rounded-lg px-3 py-2" style={{"background":"rgb(37, 42, 61)","height":"50px"}}><img data-v-bfa0d376 src="https://assets.igitems.com/files/avatar-placeholder.svg" format="webp" loading="lazy" className="rounded-lg" style={{"object-fit":"contain","max-height":"30px"}} /></div>
                    <div data-v-bfa0d376 className="h-full flex items-center justify-center relative overflow-hidden rounded-lg px-3 py-2" style={{"background":"rgb(37, 42, 61)","height":"50px"}}><img data-v-bfa0d376 src="https://assets.igitems.com/files/avatar-placeholder.svg" format="webp" loading="lazy" className="rounded-lg" style={{"object-fit":"contain","max-height":"30px"}} /></div>
                    <div data-v-bfa0d376 className="h-full flex items-center justify-center relative overflow-hidden rounded-lg px-3 py-2" style={{"background":"rgb(37, 42, 61)","height":"50px"}}><img data-v-bfa0d376 src="https://assets.igitems.com/files/avatar-placeholder.svg" format="webp" loading="lazy" className="rounded-lg" style={{"object-fit":"contain","max-height":"30px"}} /></div>
                  </div>
                </div>
                
                </PhotoView>
                <div data-v-bfa0d376 className="w-full">
                  <div data-v-bfa0d376 className="flex items-center mb-4 justify-between gap-8 relative">
                    <div data-v-bfa0d376 className="flex items-center gap-4">
                      <div data-v-bfa0d376>
                        <img data-v-bfa0d376 src="https://assets.igitems.com/files/thumbnail_PYo8eaN7sGBGD4YDM9fZHpHtvtk9DuGh.png" format="webp" loading="lazy" className="rounded-full w-10 h-10" fit="cover" />{/**/}
                      </div>
                      <div data-v-bfa0d376 className="flex flex-col">
                        <div data-v-bfa0d376 className="flex">
                          <div data-v-bfa0d376 className="mr-2">Sell by</div>
                          <a data-v-bfa0d376 href="/profile/Mr Mrodin ODIN" className="font-extrabold">{gameData?.PostedBy?.username}</a>
                        </div>
                        <div data-v-bfa0d376 className="flex items-center mt-1">
                          <div data-v-bfa0d376 className="flex items-center gap-2">
                            {/**/}{/**/}
                          </div>
                          <div data-v-bfa0d376 className="flex text-xs gap-2 items-center">
                            <div data-v-bfa0d376 className="font-bold text-secondary">N/A</div>
                            <img data-v-bfa0d376 src={ReviewStar}/>
                          </div>
                        </div>
                      </div>
                    </div>
           {
            //Chat 
           }
              {
                auth()?._id!==gameData?.PostedBy?._id &&(
                                  <div data-v-bfa0d376 
                                  
                                  onClick={() => {
                                    if(isAuthenticated()) {
                                      setChatModal(true)
                                    }else{
                                     props.sign()
                                    }

                                  }}
                                  className="flex items-center gap-1 text-primary rounded-lg px-2 py-1 text-xs cursor-pointer" style={{"background":"rgba(255, 255, 255, 0.03)","border":"1px solid rgb(60, 100, 177)"}}>
                <svg data-v-bfa0d376 width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path data-v-bfa0d376 d="M11.9688 1H3.03125C1.90942 1 1 1.90942 1 3.03125V9.53125C1 10.6531 1.90942 11.5625 3.03125 11.5625H10.9897L13.3053 13.8822C13.382 13.9582 13.4858 14.0006 13.5938 14C13.8181 14 14 13.8181 14 13.5937V3.03125C14 1.90942 13.0906 1 11.9688 1ZM13.1875 12.6147L11.4447 10.8678C11.368 10.7918 11.2642 10.7494 11.1562 10.75H3.03125C2.35814 10.75 1.8125 10.2044 1.8125 9.53125V3.03125C1.8125 2.35814 2.35814 1.8125 3.03125 1.8125H11.9688C12.6419 1.8125 13.1875 2.35814 13.1875 3.03125V12.6147Z" fill="#3772FF" stroke="#3772FF" strokeWidth="0.7" />
                  <path data-v-bfa0d376 d="M7.5 7.09375C7.94873 7.09375 8.3125 6.72998 8.3125 6.28125C8.3125 5.83252 7.94873 5.46875 7.5 5.46875C7.05127 5.46875 6.6875 5.83252 6.6875 6.28125C6.6875 6.72998 7.05127 7.09375 7.5 7.09375Z" fill="#3772FF" />
                  <path data-v-bfa0d376 d="M10.3438 7.09375C10.7925 7.09375 11.1562 6.72998 11.1562 6.28125C11.1562 5.83252 10.7925 5.46875 10.3438 5.46875C9.89502 5.46875 9.53125 5.83252 9.53125 6.28125C9.53125 6.72998 9.89502 7.09375 10.3438 7.09375Z" fill="#3772FF" />
                  <path data-v-bfa0d376 d="M4.65625 7.09375C5.10498 7.09375 5.46875 6.72998 5.46875 6.28125C5.46875 5.83252 5.10498 5.46875 4.65625 5.46875C4.20752 5.46875 3.84375 5.83252 3.84375 6.28125C3.84375 6.72998 4.20752 7.09375 4.65625 7.09375Z" fill="#3772FF" />
                </svg>
                <div data-v-bfa0d376 className="sm:hidden">Chat</div>
              </div>
                )
              }

              {
                chatModal && (
                  <Chat 
                  meta={meta}
                  chatData={chatMessages}
                  myid={auth()._id}
                  onSendMSG={(m) => {
                        sendMessage(m)
                  }}
                  backClick={() => {
                    setChatModal(false)
                  }}
                  />
                )
              }

                    {/**/}
                  </div>
                  <div data-v-bfa0d376 className="bg-white w-full opacity-10 h-px" />
                  <div data-v-bfa0d376 className="hidden sm:block">
                    <div data-v-bfa0d376 className="flex p-3 justify-between no-wrap" style={{"gap":"0px 10px"}}>
                      <span data-v-bfa0d376 className="text-white/70" style={{"width":"50%"}}>Price</span>
                      <span data-v-bfa0d376 className="font-bold flex items-center gap-2">
                        <div data-v-bfa0d376>${gameData.price}</div>
                      </span>
                    </div>
                    <div data-v-bfa0d376 className="bg-white w-full opacity-10 h-px" />
                  </div>
                  <div data-v-bfa0d376>
                    <div data-v-bfa0d376 className="flex p-3 justify-between no-wrap data-v-tooltip" data-v-tooltip="Guaranteed by the seller" style={{"gap":"0px 10px"}}>
                      <div data-v-bfa0d376 className="flex items-center text-white/70" style={{"width":"50%"}}>
                        <div data-v-bfa0d376>Delivery speed</div>
                        <img data-v-bfa0d376 className="w-4 ml-1 opacity-50" src={DeliveryIcon} />
                      </div>
                      <span data-v-bfa0d376 className="font-bold flex items-center gap-2">
                        <svg data-v-bfa0d376 width={22} height={21} viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path data-v-bfa0d376 d="M14.2067 11.5894L11.697 9.70711V5.87292C11.697 5.4874 11.3854 5.17578 10.9999 5.17578C10.6144 5.17578 10.3027 5.4874 10.3027 5.87292V10.0557C10.3027 10.2753 10.4059 10.4824 10.5816 10.6134L13.3701 12.7048C13.4956 12.7989 13.642 12.8443 13.7877 12.8443C14.0003 12.8443 14.2094 12.7487 14.3461 12.5647C14.5776 12.2572 14.5148 11.8201 14.2067 11.5894Z" fill="#FFA300" />
                          <path data-v-bfa0d376 d="M10.9999 1C6.03707 1 2 5.03707 2 9.99994C2 14.9628 6.03707 18.9999 10.9999 18.9999C15.9628 18.9999 19.9999 14.9628 19.9999 9.99994C19.9999 5.03707 15.9628 1 10.9999 1ZM10.9999 17.6056C6.80671 17.6056 3.39425 14.1932 3.39425 9.99994C3.39425 5.80671 6.80671 2.39425 10.9999 2.39425C15.1939 2.39425 18.6056 5.80671 18.6056 9.99994C18.6056 14.1932 15.1932 17.6056 10.9999 17.6056Z" fill="#FFA300" />
                        </svg>
                        <div data-v-bfa0d376>{gameData.delivery}</div>
                      </span>
                    </div>
                    <div data-v-bfa0d376 className="bg-white w-full opacity-10 h-px" />
                  </div>


                  <div data-v-bfa0d376>
                    <div data-v-bfa0d376 className="flex p-3 justify-between no-wrap data-v-tooltip" data-v-tooltip="Guaranteed by the seller" style={{"gap":"0px 10px"}}>
                      <div data-v-bfa0d376 className="flex items-center text-white/70" style={{"width":"50%"}}>
                        <div data-v-bfa0d376>Duration Time</div>
                        <img data-v-bfa0d376 className="w-4 ml-1 opacity-50" src={DeliveryIcon} />
                      </div>
                      <span data-v-bfa0d376 className="font-bold flex items-center gap-2">
                        <svg data-v-bfa0d376 width={22} height={21} viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path data-v-bfa0d376 d="M14.2067 11.5894L11.697 9.70711V5.87292C11.697 5.4874 11.3854 5.17578 10.9999 5.17578C10.6144 5.17578 10.3027 5.4874 10.3027 5.87292V10.0557C10.3027 10.2753 10.4059 10.4824 10.5816 10.6134L13.3701 12.7048C13.4956 12.7989 13.642 12.8443 13.7877 12.8443C14.0003 12.8443 14.2094 12.7487 14.3461 12.5647C14.5776 12.2572 14.5148 11.8201 14.2067 11.5894Z" fill="#FFA300" />
                          <path data-v-bfa0d376 d="M10.9999 1C6.03707 1 2 5.03707 2 9.99994C2 14.9628 6.03707 18.9999 10.9999 18.9999C15.9628 18.9999 19.9999 14.9628 19.9999 9.99994C19.9999 5.03707 15.9628 1 10.9999 1ZM10.9999 17.6056C6.80671 17.6056 3.39425 14.1932 3.39425 9.99994C3.39425 5.80671 6.80671 2.39425 10.9999 2.39425C15.1939 2.39425 18.6056 5.80671 18.6056 9.99994C18.6056 14.1932 15.1932 17.6056 10.9999 17.6056Z" fill="#FFA300" />
                        </svg>
                        <div data-v-bfa0d376>{gameData?.duration}</div>
                      </span>
                    </div>
                    <div data-v-bfa0d376 className="bg-white w-full opacity-10 h-px" />
                  </div>


                  {/**/}
                </div>
              </div>
            </div>
          </div>
          <div data-v-bfa0d376 className="w-full rounded-xl p-6 bg-box shadow-boxShadow">
            <div data-v-bfa0d376 className="flex items-center gap-3 border-b-2 border-dashed pb-4 border-white/10">
              <svg data-v-bfa0d376 width={21} height={20} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g data-v-bfa0d376 clipPath="url(#clip0_40_1360)">
                  <path data-v-bfa0d376 d="M13.5014 6.01062C13.5014 6.41117 13.1766 6.73593 12.7761 6.73593H9.27369C8.873 6.73593 8.54825 6.41117 8.54825 6.01062C8.54825 5.61007 8.873 5.28532 9.27369 5.28532H12.7761C13.1766 5.28532 13.5014 5.61007 13.5014 6.01062ZM7.44279 4.07374C7.11521 3.84307 6.6628 3.92156 6.43213 4.24915L5.39681 5.71917L4.85683 5.17381C4.57501 4.8893 4.1158 4.88689 3.83115 5.16871C3.54649 5.45052 3.54423 5.90988 3.82605 6.19453L4.64571 7.02228C4.6494 7.02596 4.65294 7.02965 4.65677 7.03319C4.86732 7.23694 5.14928 7.35029 5.43974 7.35029C5.46439 7.35029 5.48919 7.34958 5.51384 7.34788C5.83052 7.32691 6.12537 7.17148 6.32303 6.92168C6.33124 6.91105 6.33932 6.90043 6.34697 6.88937L7.6182 5.0844C7.84887 4.75682 7.77024 4.3044 7.44279 4.07374ZM12.7761 9.67554H9.27369C8.873 9.67554 8.54825 10.0002 8.54825 10.4008C8.54825 10.8014 8.873 11.1262 9.27369 11.1262H12.7761C13.1766 11.1262 13.5014 10.8014 13.5014 10.4008C13.5014 10.0002 13.1766 9.67554 12.7761 9.67554ZM7.44279 8.46396C7.11521 8.23329 6.6628 8.31179 6.43213 8.63937L5.39681 10.1094L4.85683 9.56403C4.57501 9.27938 4.1158 9.27711 3.83115 9.55893C3.54649 9.84075 3.54423 10.3001 3.82605 10.5848L4.64571 11.4125C4.6494 11.4162 4.65294 11.4199 4.65677 11.4234C4.86732 11.6272 5.14928 11.7405 5.43974 11.7405C5.46439 11.7405 5.48919 11.7398 5.51384 11.7381C5.83052 11.7171 6.12537 11.5617 6.32303 11.3119C6.33124 11.3013 6.33932 11.2907 6.34697 11.2796L7.6182 9.47463C7.84887 9.14704 7.77024 8.69449 7.44279 8.46396ZM20.2863 3.39745V5.71846C20.2863 7.31827 18.9847 8.61968 17.3851 8.61968H16.4389V12.754C16.4389 13.1547 16.1141 13.4795 15.7136 13.4795C15.313 13.4795 14.9882 13.1547 14.9882 12.754V3.39745C14.9882 2.96686 15.0922 2.56036 15.2753 2.20061H3.61606C2.81623 2.20061 2.16545 2.85139 2.16545 3.65122V16.417C2.16545 17.2168 2.81623 17.8676 3.61606 17.8676H13.5376C14.3375 17.8676 14.9882 17.2168 14.9882 16.417C14.9882 16.0164 15.313 15.6916 15.7136 15.6916C16.1141 15.6916 16.4389 16.0164 16.4389 16.417C16.4389 18.0168 15.1373 19.3182 13.5376 19.3182H3.61606C2.0164 19.3182 0.714844 18.0168 0.714844 16.417V3.65122C0.714844 2.05155 2.0164 0.75 3.61606 0.75H17.672C17.6832 0.75 17.6942 0.751134 17.7053 0.7517C19.1345 0.787122 20.2863 1.95988 20.2863 3.39745ZM18.8357 3.39745C18.8357 2.73747 18.2988 2.20061 17.6388 2.20061H17.6357C16.9757 2.20061 16.4389 2.73747 16.4389 3.39745V7.16907H17.3851C18.1849 7.16907 18.8357 6.51829 18.8357 5.71846V3.39745ZM12.7761 14.0274H9.27369C8.873 14.0274 8.54825 14.3521 8.54825 14.7527C8.54825 15.1534 8.873 15.4781 9.27369 15.4781H12.7761C13.1766 15.4781 13.5014 15.1534 13.5014 14.7527C13.5014 14.3521 13.1766 14.0274 12.7761 14.0274ZM7.44279 12.8159C7.11521 12.5853 6.6628 12.6638 6.43213 12.9912L5.39681 14.4614L4.85683 13.916C4.57501 13.6314 4.1158 13.6291 3.83115 13.9109C3.54649 14.1927 3.54423 14.6521 3.82605 14.9367L4.64571 15.7645C4.6494 15.7682 4.65294 15.7717 4.65677 15.7754C4.86732 15.9791 5.14928 16.0925 5.43974 16.0925C5.46439 16.0925 5.48919 16.0918 5.51384 16.0901C5.83052 16.069 6.12537 15.9137 6.32303 15.6637C6.33124 15.6532 6.33932 15.6425 6.34697 15.6316L7.6182 13.8265C7.84887 13.499 7.77024 13.0465 7.44279 12.8159Z" fill="#FFA300" />
                </g>
              </svg>
              <div data-v-bfa0d376 className="font-bold">Description</div>
            </div>
            <div data-v-bfa0d376 className="product-description py-6">
            { typeof(gameData?.desc) == "string" && parse(gameData?.desc)}
            </div>
          </div>
          {/**/}{/**/}
        </div>
        <div data-v-bfa0d376 className="flex flex-col gap-8 min-w-[450px] md:min-w-[350px] lg:min-w-[450px] xs:min-w-full">
          <div data-v-bfa0d376 className="w-full rounded-xl p-6 bg-box shadow-boxShadow sm:hidden">
            <div data-v-bfa0d376 className="flex items-center gap-8 justify-between border-b-2 border-dashed pb-4 border-white/10">
              <div data-v-bfa0d376 className="flex items-center gap-3">
                <svg data-v-bfa0d376 width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path data-v-bfa0d376 d="M11 0.6875C5.31271 0.6875 0.6875 5.31271 0.6875 11C0.6875 16.6873 5.31271 21.3125 11 21.3125C16.6873 21.3125 21.3125 16.6873 21.3125 11C21.3125 5.31271 16.6873 0.6875 11 0.6875ZM11 2.0625C15.9442 2.0625 19.9429 6.05581 19.9429 11C19.9429 15.9442 15.9442 19.9429 11 19.9429C6.05581 19.9429 2.0625 15.9442 2.0625 11C2.0625 6.05581 6.05581 2.0625 11 2.0625ZM10.9906 5.50403C10.809 5.50723 10.636 5.58217 10.5094 5.7125C10.3829 5.84283 10.313 6.01794 10.3152 6.19958V6.77832C9.20511 6.98657 8.25537 7.70138 8.25537 8.94018C8.25537 9.79956 8.64278 10.4946 9.16308 10.8993C9.68339 11.304 10.2709 11.4834 10.7865 11.6553C11.3021 11.8271 11.7472 11.9915 12.0004 12.1884C12.2535 12.3852 12.375 12.5509 12.375 13.0665C12.375 14.2124 9.63037 14.2124 9.63037 13.0665C9.6324 12.975 9.61612 12.8839 9.58248 12.7987C9.54885 12.7135 9.49853 12.6359 9.43449 12.5704C9.37045 12.505 9.29397 12.4529 9.20955 12.4174C9.12513 12.3819 9.03446 12.3636 8.94287 12.3636C8.85128 12.3636 8.76061 12.3819 8.67619 12.4174C8.59177 12.4529 8.51529 12.505 8.45125 12.5704C8.38721 12.6359 8.33689 12.7135 8.30326 12.7987C8.26962 12.8839 8.25334 12.975 8.25537 13.0665C8.25537 14.3044 9.20595 15.0205 10.3152 15.2297V15.8058C10.3132 15.8974 10.3294 15.9884 10.3631 16.0736C10.3967 16.1588 10.447 16.2364 10.5111 16.3019C10.5751 16.3673 10.6516 16.4194 10.736 16.4549C10.8204 16.4904 10.9111 16.5087 11.0027 16.5087C11.0943 16.5087 11.1849 16.4904 11.2694 16.4549C11.3538 16.4194 11.4303 16.3673 11.4943 16.3019C11.5583 16.2364 11.6087 16.1588 11.6423 16.0736C11.6759 15.9884 11.6922 15.8974 11.6902 15.8058V15.2297C12.7996 15.0206 13.7513 14.3045 13.7513 13.0665C13.7513 12.2072 13.3626 11.5121 12.8423 11.1074C12.322 10.7027 11.7345 10.522 11.2189 10.3501C10.7032 10.1782 10.2581 10.0152 10.005 9.81836C9.75187 9.62147 9.63037 9.45581 9.63037 8.94018C9.63037 7.79435 12.375 7.79435 12.375 8.94018C12.375 9.1227 12.4475 9.29774 12.5766 9.4268C12.7056 9.55585 12.8807 9.62836 13.0632 9.62836C13.2457 9.62836 13.4207 9.55585 13.5498 9.4268C13.6788 9.29774 13.7513 9.1227 13.7513 8.94018C13.7513 7.70324 12.7993 6.98914 11.6902 6.77966V6.19958C11.6913 6.1076 11.6739 6.01634 11.6391 5.93119C11.6042 5.84605 11.5527 5.76876 11.4874 5.7039C11.4222 5.63905 11.3446 5.58794 11.2593 5.55361C11.1739 5.51927 11.0826 5.50241 10.9906 5.50403H10.9906Z" fill="#FFA300" />
                </svg>
                <div data-v-bfa0d376 className="font-bold">Unit Price</div>
              </div>
              <div data-v-bfa0d376 className="font-extrabold text-xl">${gameData.price}</div>
            </div>
            <div data-v-bfa0d376 className="flex flex-col items-center justify-center pt-6">
              {/**/}
              <div onClick={() => setBuying(true)} data-v-bfa0d376 className="w-full mb-2">
                <div data-v-1fb46fc5 data-v-bfa0d376 className="btn text-center cursor-pointer flex items-center justify-center" style={{"font-size":"18px","font-weight":"800","height":"40px","border-radius":"4px"}}>Buy Now</div>
              </div>
              <div data-v-bfa0d376 id="payment-request-button" style={{"width":"100%"}} />
            </div>
          </div>
          <div data-v-bfa0d376 className="w-full rounded-xl p-6 bg-box shadow-boxShadow">
            <div data-v-bfa0d376 className="flex items-center gap-6">
              <svg data-v-bfa0d376 className="shrink-0" width={62} height={62} viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect data-v-bfa0d376 width={62} height={62} rx={19} fill="#FFA300" fillOpacity="0.03" />
                <path data-v-bfa0d376 d="M3a0.6161 24.216H19.3521C17.3041 24.216 15.6401 25.88 15.6401 27.928V38.04H46.3601V28.056C46.3601 27.032 45.9761 26.008 45.2081 25.368C44.3121 28.184 42.0081 30.488 38.9361 31.128C38.8081 31.128 38.4241 31.384 37.4001 31.256C37.4001 31 31.7681 30.232 30.6161 24.216ZM23.7041 32.408C23.7041 32.92 23.3201 33.304 22.8081 33.304H19.0961C18.5841 33.304 18.2001 32.92 18.2001 32.408V28.696C18.2001 28.184 18.5841 27.8 19.0961 27.8H22.8081C23.3201 27.8 23.7041 28.184 23.7041 28.696V32.408Z" fill="#FFA300" />
                <path data-v-bfa0d376 d="M15.6402 42.264C15.6402 44.312 17.3042 45.976 19.3522 45.976H42.5202C44.5682 45.976 46.2322 44.312 46.2322 42.264V42.008H15.5122V42.264H15.6402Z" fill="#FFA300" />
                <path data-v-bfa0d376 d="M38.0403 28.568H38.4243C41.1123 27.928 43.1603 25.496 43.1603 22.68V18.328C43.1603 18.072 43.0323 17.688 42.7763 17.56C42.5203 17.304 42.2643 17.304 42.0083 17.304C40.0883 17.56 38.8083 16.28 38.8083 16.28C38.5523 16.024 38.2963 15.896 38.0403 15.896C37.7843 15.896 37.5283 16.024 37.2723 16.28C37.2723 16.28 36.1203 17.56 34.2003 17.304C33.9443 17.304 33.5603 17.304 33.4323 17.56C33.1763 17.816 33.0483 18.072 33.0483 18.328V22.68C33.0483 25.496 34.9683 27.928 37.6563 28.568H38.0403Z" fill="#FFA300" />
              </svg>
              <div data-v-bfa0d376>100% Secure Transactions guarantee by <b data-v-bfa0d376>TradeShield</b></div>
            </div>
          </div>
          {/**/}
        </div>
      </div>
    </div>
  </div>
</div>
    </PhotoProvider>
    </>
  );
}
